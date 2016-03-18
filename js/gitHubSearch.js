// var key = require('./../.env').apiKey;

exports.getRepos = function(searchedName, key){
  $.get('https://api.github.com/users/' + searchedName +'/repos?page1&per_page=100&access_token=' + key).then(function(response){
    console.log(response);
  console.log(response[0].name);
  $('#results_list').empty();
  for(var i = 0; i <= response.length; i++){
   var updated = moment.utc(response[i].updated_at).format("ddd MMM Do, YYYY");
    $('#results_list').append("<li><span class='repo_name'>"+ response[i].name + "</span> <ul><li> Last Updated: " + updated +"</li><li>" + response[i].description + "</li></ul></li>");
  }
  })
  .fail(function(error){
    console.log(error.responseJSON.message);
  });

};
