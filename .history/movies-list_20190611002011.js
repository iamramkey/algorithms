
const https = require('https');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 * Base url: https://jsonmock.hackerrank.com/api/movies/search/?Title=
 */

function loadMoviesList(name, cb, page, arr){
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