//Made By Bio Shot\\

$(document).ready(function () {
    var emPath = prompt("Please enter the path to your snes rom: ");
    if(emPath != null) {
        $('body').append(`<div style="width:640px;height:480px;max-width:100%;text-align: center;" id="dld">
        <div id="game"></div>
      </div>
      <script type="text/javascript">
        EJS_player = '#game';
        EJS_gameUrl = ${emPath}; // Url to Game rom
        EJS_core = 'snes';
        EJS_mouse = false; // SNES Mouse
        EJS_multitap = false; // SNES Multitap
    </script>
    <script src="https://www.emulatorjs.com/loader.js"></script>`)
    };
});



