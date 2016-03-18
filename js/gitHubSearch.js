// var key = require('./../.env').apiKey;

exports.getRepos = function(searchedName, key){
  $.get('https://api.github.com/users/' + searchedName +'?access_token=' + key).then(function(response){
    console.log(response);
  

    $('.results').append("<p>Go to the repositories of <a href='" + response.repos_url + "'>" + searchedName + "</a> </p>");

  })
  .fail(function(error){
    console.log(error.responseJSON.message);
  });

};
