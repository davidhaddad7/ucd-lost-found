import moment  from 'moment';

export function formatSearchDate(queryParameter,queryParameterValue){
    let formattedDate = moment(queryParameterValue).format('MMM Do');
    if(formattedDate === "Invalid date")
      return '';
    else
      return formattedDate;
}

export function parseQuery(query) {
  const queryArray = ["startdate", "enddate","category","location"];
  let queryObject = {
     startdate:'',
     enddate:'',
     category:'',
     location:''
  };
  // let searchTextQuery =[];
  for (let i = 0; i < queryArray.length; i++) {
    let queryParameterValue = query.get(queryArray[i]);

    if (queryParameterValue){
      if (queryArray[i] ===  "startdate" ){
       let startdate = formatSearchDate(queryArray[i],queryParameterValue);
       if (startdate)
        queryObject["startdate"] = startdate;
      }
      else if (queryArray[i] ===  "enddate")
      {
        let enddate = formatSearchDate(queryArray[i],queryParameterValue);
        if (enddate)
          queryObject["enddate"] = enddate;
      }
      else if (queryArray[i] ===  "category")
        queryObject["category"] = queryParameterValue;
      else
        queryObject["location"]= queryParameterValue;
    }
  }

  let stringSearch = "";
  // both start and enddate
  if (queryObject["startdate"] &&queryObject["enddate"]){
    stringSearch += queryObject["startdate"] + ' - ' + queryObject["enddate"];
  }
  // only startdate
  else  if (queryObject["startdate"] && !queryObject["enddate"]){
    stringSearch += queryObject["startdate"] + " - Today";
  }
  // only enddate
  else if (!queryObject["startdate"] && queryObject["enddate"]){
    stringSearch += 'Before: ' + queryObject["enddate"];
  }

  // if either startdate or enddate are there
  if (queryObject["startdate"] || queryObject["enddate"]){
    if (queryObject["category"])
      stringSearch += ", " + queryObject["category"];
    if (queryObject["location"])
      stringSearch += ", " + queryObject["location"];
  }
  // if neither startdate or enddate are there
  else if (!queryObject["startdate"] && !queryObject["enddate"]){
    if (queryObject["category"])
    stringSearch += queryObject["category"];
    // category and location
    if (queryObject["location"] && queryObject["category"])
      stringSearch += ", " + queryObject["location"];
    // only location
    else if (queryObject["location"] && !queryObject["category"])
    stringSearch += queryObject["location"];
  }

  // if no search filter
  if (!queryObject["startdate"] && !queryObject["enddate"]
      && !queryObject["category"] && !queryObject["location"] )
  {
    stringSearch += "All";
  }

  return(stringSearch);

}
