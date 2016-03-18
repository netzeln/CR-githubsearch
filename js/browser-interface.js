var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/gitHubSearch.js').getRepos;



$(document).ready (function(event){

  $('#do_search').click(function(){
    var searchedName = $('input#name_search').val();

    getRepos(searchedName, apiKey);
    
  });



  event.preventDefault;
});
