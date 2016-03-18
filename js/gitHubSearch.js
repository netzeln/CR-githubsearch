// var key = require('./../.env').apiKey;

exports.getRepos = function(searchedName, key){
  $.get('https://api.github.com/users/' + searchedName +'/repos?page1&per_page=100&access_token=' + key).then(function(response){
    console.log(response);
  console.log(response[0].name);
  $('#results_list').empty();
  for(var i = 0; i <= response.length; i++){
    if(response[i].description != "")
    {
      var description = response[i].description;
    } else {
      var description = "NO DESCRIPTION!?!?";
    }
   var updated = moment.utc(response[i].updated_at).format("ddd MMM Do, YYYY");
    $('#results_list').append("<li><span class='repo_name'>"+ response[i].name + "</span> <ul><li> Last Updated: " + updated +"</li><li>" + description + "</li></ul></li>");
  }
  })
  .fail(function(error){
    console.log(error.responseJSON.message);
  });

};
