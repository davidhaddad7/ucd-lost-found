const express = require('express');

const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const sql = require("sqlite3").verbose();
const FormData = require("form-data");
let imageName ="";

// This creates an interface to the file if it already exists, and makes the 
// file if it does not. 
const lostAndFoundDB = new sql.Database("./lostandfound.db");
let queryString = null;

let cmd = " SELECT name FROM sqlite_master WHERE type='table' AND name='lostFoundTable' ";
lostAndFoundDB.get(cmd, function (err, val) {
    console.log(err, val);
    if (val == undefined) {
        console.log("No database file - creating one");
        createlostFoundDB();
    } else {
        console.log("Database file found");
    }
});

function createlostFoundDB() {
  // explicitly declaring the rowIdNum protects rowids from changing if the 
  // table is compacted; not an issue here, but good practice
  const cmd = 'CREATE TABLE lostFoundTable (rowIdNum INTEGER PRIMARY KEY,queryString TEXT, title TEXT, category TEXT, description TEXT, location TEXT)';
  lostAndFoundDB.run(cmd, function(err, val) {
    if (err) {
      console.log("Database creation failure",err.message);
    } else {
      console.log("Created database");
    }
  });
}

function makeID(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname+'/images')    
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
// let upload = multer({dest: __dirname+"/assets"});
let upload = multer({storage: storage});


// begin constructing the server pipeline
const app = express();

function handlelostFoundList(request, response, next) {  
  // Example of just getting first row
  let url = request.headers.referer;
  let queryString = url.split("=");

  let queryID = queryString[1];
  let xcmd = ' SELECT * FROM lostFoundTable WHERE queryString = ?';
  lostAndFoundDB.get( xcmd,queryID,dataCallback );
    
  function dataCallback( err, rowData ) {    
     if (err) { console.log("error: ",err.message); }
     else { 
       console.log( "got: ", rowData);   
       response.send(JSON.stringify(rowData));
     }
  }
};



// Serve static files out of public directory
app.use(express.static('public'));

// Also serve static files out of /images
app.use("/images",express.static('images'));


// Handle GET request to base URL with no other route specified
// by sending creator.html, the main page of the app
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/public/creator.html');
});

app.get("/getPostcard", handlelostFoundList);

app.get("/sendUploadToAPI", function(request, response){
        sendMediaStore(imageName, request, response);
        });


// Next, the the two POST AJAX queries

// Handle a post request to upload an image. 
app.post('/upload', upload.single('newImage'), function (request, response) {
  console.log("Recieved",request.file.originalname,request.file.size,"bytes")
  if(request.file) {
    imageName = request.file.originalname;
    // file is automatically stored in /images, 
    // even though we can't see it. 
    // We set this up when configuring multer
    response.end("recieved "+request.file.originalname);
  }
  else throw 'error';
});


// Handle a post request containing JSON
app.use(bodyParser.json());
// gets JSON data into req.body
app.post('/postItemFound', function (request, response) {

  queryString = makeID(22);
  let image= "http://ecs162.org:3000/images/davhaddad/" + imageName;
  let title= request.title;
  let category = request.body.category;
  let description = request.body.description;
  let location = request.body.location;
  console.log(image,title,category,description,location);
  // lostAndFoundDB.run(DROP TABLE addresses);
  // put new item into database
  cmd = "INSERT INTO lostFoundTable (queryString, image,font,color,message) VALUES (?,?,?,?,?) ";
  lostAndFoundDB.run(cmd,queryString,image,title,category,description,location, function(err) {
    if (err) {
      console.log("DB insert error",err.message);
      //next();
    } else {
      let newId = this.lastID; // the rowid of last inserted item
      console.log("new ID :",newId);
      response.send(queryString);
    }

  });
});


// The GET AJAX query is handled by the static server, since the 
// file postcardData.json is stored in /public

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// const filename = '/images/download.png';

// function called when the button is pushed
// handles the upload to the media storage API to server
function sendMediaStore(filename, serverRequest, serverResponse) {
  let apiKey = process.env.ECS162KEY;
  if (apiKey === undefined) {
    serverResponse.status(400);
    serverResponse.send("No API key provided");
  } else {
    // we'll send the image from the server in a FormData object
    let form = new FormData();
    
    // we can stick other stuff in there too, like the apiKey
    form.append("apiKey", apiKey);
    // stick the image into the formdata object
    form.append("storeImage", fs.createReadStream(__dirname + '/images/'+filename));
    // and send it off to this URL
    form.submit("http://ecs162.org:3000/fileUploadToAPI", function(err, APIres) {
      // did we get a response from the API server at all?
      if (APIres) {
        // OK we did
        console.log("API response status", APIres.statusCode);
        console.log("filename: ",filename);
        // the body arrives in chunks - how gruesome!
        // this is the kind stream handling that the body-parser 
        // module handles for us in Express.  
        let body = "";
        APIres.on("data", chunk => {
          body += chunk;
        });
        APIres.on("end", () => {
          // now we have the whole body
          if (APIres.statusCode != 200) {
            serverResponse.status(400); // bad request
            serverResponse.send(" Media server says: " + body);
          } else {
            serverResponse.status(200);
            serverResponse.send(body);
          }
        });
      } else { // didn't get APIres at all
        serverResponse.status(500); // internal server error
        serverResponse.send("Media server seems to be down.");
      }
    });
  }
}


