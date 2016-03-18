// var key = require('./../.env').apiKey;

exports.getRepos = function(searchedName, key){
  $.get('https://api.github.com/users/' + searchedName +'/repos?page1&per_page=100&access_token=' + key).then(function(response){
    console.log(response);
  console.log(response[0].name);
  $('#results_list').empty();
  for(var i = 0; i <= response.length; i++){

    $('#results_list').append("<li>"+ response[i].name + "</li>");
  }
  })
  .fail(function(error){
    console.log(error.responseJSON.message);
  });

};
