var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/gitHubSearch.js').getRepos;
var getProfile = require('./../js/gitHubUserSearch.js').getProfile;


$(document).ready (function(){
  $('#user_search').click(function(){
    var searchedName = $('input#name_search').val();

    getProfile(searchedName, apiKey);
    $(".results").show();
  });

  $('#repo_search').click(function(){
    var searchedName = $('input#name_search').val();
    $("#repo_search").hide();
    getRepos(searchedName, apiKey);

  });

  event.preventDefault;
});
