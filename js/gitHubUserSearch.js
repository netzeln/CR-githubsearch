
exports.getProfile = function(searchedName, key){
  $.get('https://api.github.com/users/' + searchedName +'?access_token=' + key)

  .then(function(response){
    $('#user_profile').empty();
    $('#results_list').empty();

    if(response.name !== null)
    {
      var name = response.name;
    } else {
      var name = "None Listed (must value privacy)";
    }

    if(response.location !== null)
    {
      var location = response.location;
    } else {
      var location = "None Listed (get off of their lawn!)";
    }
    $('#user_profile').append("<span class='repo_name'>Name:</span> " + name + "<br><span class='repo_name'>Location:</span> " + location + "<br><img src='"+ response.avatar_url +"'>");

  })
  .fail(function(error){
    console.log(error.responseJSON.message);
  });

};
