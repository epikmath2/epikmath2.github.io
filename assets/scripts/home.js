//Made By Bio Shot\\
function setCookie(name,value) {

  document.cookie = name + "=" + value + "" + ";path=/";
}
function getCookie(name) {
  var cname = name + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++){
      var c = ca[i];
      while(c.charAt(0) == ' '){
          c = c.substring(1);
      }
      if(c.indexOf(cname) == 0){
          return c.substring(cname.length, c.length);
      }
  }
  return "";
}
$(document).ready(function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const showEvent = urlParams.get('showEvent');
  if(showEvent == 'true'){
    window.location = "/event";
  }
  if(getCookie("seenEvent") == "yes"){

  }else{
   // window.location = "/event";
  }
  var gamesListEl = document.querySelector('.games').querySelectorAll("div");
  $.getJSON("/assets/json/games.json",
    function(data, textStatus, jqXHR) {
      var gamesList = data["gamesList"];
      gamesList.forEach(game => {
        var name = game["name"];
        var iconUrl = game["icon"];
        var message = data["message"];
        //alert(message);
        $("#luu").text(message);
        $(".games").append(`<div class="${name}"></div>`)
        $('body').append(`<style>.${name}{
          display: flex;
          align-items: flex-end;
          transition: border-radius 0.5s;
          width: 200px;
          height: 200px;
          background-image: url("/assets/images/${iconUrl}");
          background-size: cover;
          border-radius: 26px;
          cursor: pointer;
        }
        .${name}:hover {
          transition: border-radius 0.5s;
          border-radius: 30px;
        }
        </style>`)

        $(`.${name}`).click(function() {
          document.location.href = $(`.${name}`).attr("class")
        });
      });
    }
  );


})
