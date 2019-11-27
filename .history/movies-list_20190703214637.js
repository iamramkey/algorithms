/*

To solve this challenge, you are required to write an HTTP GET method to retrieve information from a movie database.

 

Function Description

Given a string substr, getMovieTitles must perform the following tasks:

Query https://jsonmock.hackerrank.com/api/movies/search/?Title=substr(replace substr). 
Initialize the titles array to store total string elements. Store the Title from each record returned in the data field to the titles array.
Sort titles in ascending order and return it as your answer.
 

The query response from the website is a JSON response with the following five fields:

page: The current page.
per_page: The maximum number of results per page.
total: The total number of records in the search result.
total_pages: The total number of pages which must be queried to get all the results.
data: An array of JSON objects containing movie information
 

In order to get all results, you may have to make multiple page requests. To request a page by number, your query should read https://jsonmock.hackerrank.com/api/movies/search/?Title=substr&page=pageNumber, replacing substr and pageNumber.

 

 

Input Format For Custom Testing
Sample Case 0
Sample Input 0

spiderman
 

Sample Output 0

Amazing Spiderman Syndrome
Fighting, Flying and Driving: The Stunts of Spiderman 3
Hollywood's Master Storytellers: Spiderman Live
Italian Spiderman
Spiderman
Spiderman
Spiderman 5
Spiderman and Grandma
Spiderman in Cannes
Superman, Spiderman or Batman
The Amazing Spiderman T4 Premiere Special
The Death of Spiderman
They Call Me Spiderman
 

Explanation 0

For this example, we want all titles that contain the substring spiderman. The response for the query https://jsonmock.hackerrank.com/api/movies/search/?Title=spiderman&page=1 is:

{
  "page": "1",
  "per_page": 10,
  "total": 13,
  "total_pages": 2,
  "data": [
    {
      "Title": "Italian Spiderman",
      "Year": 2007,
      "imdbID": "tt2705436"
    },
    {
      "Title": "Superman, Spiderman or Batman",
      "Year": 2011,
      "imdbID": "tt2084949"
    },
    {
      "Title": "Spiderman",
      "Year": 1990,
      "imdbID": "tt0100669"
    },
    {
      "Title": "Spiderman",
      "Year": 2010,
      "imdbID": "tt1785572"
    },
    {
      "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
      "Year": 2007,
      "imdbID": "tt1132238"
    },
    {
      "Title": "Spiderman and Grandma",
      "Year": 2009,
      "imdbID": "tt1433184"
    },
    {
      "Title": "The Amazing Spiderman T4 Premiere Special",
      "Year": 2012,
      "imdbID": "tt2233044"
    },
    {
      "Title": "Amazing Spiderman Syndrome",
      "Year": 2012,
      "imdbID": "tt2586634"
    },
    {
      "Title": "Hollywood's Master Storytellers: Spiderman Live",
      "Year": 2006,
      "imdbID": "tt2158533"
    },
    {
      "Title": "Spiderman 5",
      "Year": 2008,
      "imdbID": "tt3696826"
    }
  ]
}
 

The response for the query https://jsonmock.hackerrank.com/api/movies/search/?Title=spiderman&page=2 is:

{
  "page": "2",
  "per_page": 10,
  "total": 13,
  "total_pages": 2,
  "data": [
    {
      "Title": "They Call Me Spiderman",
      "Year": 2016,
      "imdbID": "tt5861236"
    },
    {
      "Title": "The Death of Spiderman",
      "Year": 2015,
      "imdbID": "tt5921428"
    },
    {
      "Title": "Spiderman in Cannes",
      "Year": 2016,
      "imdbID": "tt5978586"
    }
  ]
}
 

The values of the Title field for each record in the order received are:

Italian Spiderman
Superman, Spiderman or Batman
Spiderman
Spiderman
Fighting, Flying and Driving: The Stunts of Spiderman 3
Spiderman and Grandma
The Amazing Spiderman T4 Premiere Special
Amazing Spiderman Syndrome
Hollywood's Master Storytellers: Spiderman Live
Spiderman 5
They Call Me Spiderman
The Death of Spiderman
Spiderman in Cannes
Sort the array in ascending order, and return it as the answer.

 

*/

const https = require('https');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 * Base url: https://jsonmock.hackerrank.com/api/movies/search/?Title=
 */

function loadMoviesList(substr, cb, page, arr){
  page = page || 1;
  arr = arr || [];
  
  https.get('https://jsonmock.hackerrank.com/api/movies/search/?Title=' + name + '&page='+ page,     function(res){
    var body = '';

    res.on('data', function(chunk){
        body += chunk;
    });

    res.on('end', function(){
      var fbResponse = JSON.parse(body);
      if(fbResponse.total_pages >= page){
        arr = arr.concat(fbResponse.data);
        loadMoviesList(name, cb, ++page, arr);
      }else{
        cb(arr);
      }
    });
  }).on('error', function(e){
      console.log("Got an error: ", e);
  });
}
function getMovieTitles(substr) {
  loadMoviesList(substr, function(res){
    console.log(res.map(i => i.Title).sort());
  });
}


getMovieTitles('spiderman');