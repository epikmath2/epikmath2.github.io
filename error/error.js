//Made By BioShot\\


$(document).ready(function() {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const errorCode = urlParams.get('error')
  const gameName = urlParams.get('game')
  const functionName = urlParams.get('function')
  if (errorCode != undefined && gameName != undefined) {
    if (errorCode == 205) {
      $('body').append(`<h1>Sorry the game ${gameName} is out of order! Please Come Back later when the game might be fixed!</h1>`);
    }else if(errorCode == 302){
      $('body').append(`<h1>Sorry the function ${functionName} for the game ${gameName} is out of order! Please Come Back later when the game might be fixed! (Press Any Key To Exit)</h1>`);
      $(document).keypress(function(e) {
        window.close();
      });
    }
  }
})
