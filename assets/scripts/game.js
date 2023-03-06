//Made By BioShot\\


$(document).ready(function() {
  $(document).keypress(function(e) {
    if (e.which == 101) {
      if($('.header').text() == "Madlin Stunt Cars 2"){
        window.open("../error/?error=302&game=Madlin%20Stunt%20Cars%202!&function=Fullscreen","Epik Math 2 | Game Window","popup");

      }
      document.getElementById("game").requestFullscreen();
    } else {

    }
  });
  if (document.getElementsByClassName("header").length != 0) {
    $(".header").text(document.title.replace('Epik Math 2 | ', '')); //Replace the epik math 2 because i just don't want it there :/
  } else {
    $('body').append(`<h1 class="header">${document.title.replace('Epik Math 2 | ', '')}</h1>`)
    //Get the iframe code:
    var iframeEl = document.getElementById("game").outerHTML;
    console.log(iframeEl);
    $('#game').remove();
    $('body').append(iframeEl);
  }

})
