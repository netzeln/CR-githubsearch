var apiKey = require('./../.env').apiKey;
// var getRepos = require('./../js/gitHubSearch.js').getRepos;

var getRepos = function(searchedName, key){
  
  $.get('https://api.github.com/users/' + searchedName +'?access_token=' + key).then(function(response){

    console.log(response);
  }).fail(function(error){

    console.log(error.responseJSON.message);
  });
};

$(document).ready (function(event){

  $('#do_search').click(function(){
    var searchedName = $('input#name_search').val();

  getRepos(searchedName, apiKey);


  });

});
