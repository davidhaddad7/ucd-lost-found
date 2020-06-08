const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const sql = require("sqlite3").verbose();
const FormData = require("form-data");
const moment = require("moment");
  

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
  const cmd = 'CREATE TABLE lostFoundTable (rowIdNum INTEGER PRIMARY KEY, title TEXT, category TEXT, description TEXT, image TEXT, date TEXT,dateHour TEXT, imageName TEXT, location TEXT,lostOrFound TEXT)';
  lostAndFoundDB.run(cmd, function(err, val) {
    if (err) {
      console.log("Database creation failure",err.message);
    } else {
      console.log("Created database");
    }
  });
}

// begin constructing the server pipeline
const app = express();

// Serve static files out of public directory
app.use(express.static('public'));

// Also serve static files out of /images
app.use("/images",express.static('images'));


// Handle GET request to base URL with no other route specified
// by sending creator.html, the main page of the app
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/public/creator.html');
});

// app.get("/getPostcard", handlelostFoundList);


// Handle a post request containing JSON
app.use(bodyParser.json());
// gets JSON data into req.body

app.post('/postCreateItem', function (request, response) {
  console.log(request.body);
  // let name = (request.name);
  let title= request.body.title;
  let category = request.body.category;
  let description = request.body.description;
  let image = request.body.image;
  let imageName = request.body.imageName;
  let lostOrFound = request.body.lostOrFound;
  // let date = moment().format("MM/DD/YYYY");
  let date ="";
  let dateHour = "";
  let location = "";


  // lostAndFoundDB.run(DROP TABLE addresses);
  // put new item into database
  cmd = "INSERT INTO lostFoundTable (title,category,description,image,imageName,date,dateHour,location,lostOrFound) VALUES (?,?,?,?,?,?,?,?,?) ";
  lostAndFoundDB.run(cmd,title,category,description,image,date,dateHour,imageName,location,lostOrFound,function(err) {
    if (err) {
      console.log("DB insert error",err.message);
      //next();
    } else {
      let newId = this.lastID; // the rowid of last inserted item
      console.log("new ID :",newId);
      response.send("hei");
    }

  });
});

app.post('/postUpdateFoundItem', function (request, response) {
  console.log(request.body);
  let rowIDFromUser =  request.body.rowIDFromUser;
  let date = request.body.date;
  let dateHour = request.body.dateHour;
  let location = request.body.location;

  // lostAndFoundDB.run(DROP TABLE addresses);
  // put new item into database
  let cmd_update = "UPDATE lostFoundTable SET date = ?, dateHour = ?,location = ? WHERE rowIdNum = ? AND lostOrFound = 'found'";
  lostAndFoundDB.run(cmd_update,date,dateHour,location, rowIDFromUser, function(err) {
    if (err) {
      console.log("DB insert error",err.message);
      //next();
    } else {
      let newId = this.lastID; // the rowid of last inserted item
      console.log("new ID :",newId);
      response.send("cool");
    }

  });
});

app.post('/postUpdateLostItem', function (request, response) {
  console.log(request.body);
  let rowIDFromUser =  request.body.rowIDFromUser;
  let date = request.body.date;
  let dateHour = request.body.dateHour;
  let location = request.body.location;

  // lostAndFoundDB.run(DROP TABLE addresses);
  // put new item into database
  let cmd_update = "UPDATE lostFoundTable SET date = ?, dateHour = ?,location = ? WHERE rowIdNum = ? AND lostOrFound = 'lost'";
  lostAndFoundDB.run(cmd_update,date,dateHour,location, rowIDFromUser, function(err) {
    if (err) {
      console.log("DB insert error",err.message);
      //next();
    } else {
      let newId = this.lastID; // the rowid of last inserted item
      console.log("new ID :",newId);
      response.send("cool");
    }

  });
});

app.get("/getFoundItems", getFoundItems);
function getFoundItems(request, response, next) {  
  // Example of just getting first row
  // let queryIDList = request.body.queryIDList;
  let queryIDList = [1,2,3];
  
  for (let i = 0; i < queryIDList.length;i++){
    let xcmd =  'SELECT * FROM lostFoundTable WHERE rowIdNum = ? ';
    function dataCallback( err, rowData) {    
      if (err) { console.log("error: ",err.message); }
      else { 
        // console.log( "got: ", rowData);   
       //  response.send(JSON.stringify(rowData));
      //  queryObject[i] = rowData;

       let jsonString = JSON.stringify(rowData);
        response.send(jsonString);
      }
   }
  //  console.log(lostAndFoundDB.get( xcmd, queryIDList[i] ,dataCallback ));
   lostAndFoundDB.get( xcmd, queryIDList[i] ,dataCallback );
  }


};

app.get("/getLostItems", getLostItems);
function getLostItems(request, response, next) {  
  // Example of just getting first row
  // let queryIDList = request.body.queryIDList;
  let queryIDList = [1,2,3];
  
  for (let i = 0; i < queryIDList.length;i++){
    let xcmd =  'SELECT * FROM lostFoundTable WHERE rowIdNum = ? ';
    function dataCallback( err, rowData) {    
      if (err) { console.log("error: ",err.message); }
      else { 
       let jsonString = JSON.stringify(rowData);
        response.send(jsonString);
      }
   }
  //  console.log(lostAndFoundDB.get( xcmd, queryIDList[i] ,dataCallback ));
   lostAndFoundDB.get( xcmd, queryIDList[i] ,dataCallback );
  }


};



// The GET AJAX query is handled by the static server, since the 
// file postcardData.json is stored in /public

// listen for requests :)
var listener = app.listen(process.env.PORT || "4000", function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

