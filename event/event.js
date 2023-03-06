//Made By BioShot\\
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
$(document).ready(function () {
    let enabled = false;
    var slope = false;
    var msc2 = false;
    var earthbound = false;
    var minecraft = false;

    $(document).keypress(function (e) {
        if(enabled == true){
            if(slope == true){
                console.log("slooope");
                if(msc2 == true){
                    console.log("msc2");

                    if(earthbound == true){
                        console.log("earthbound");

                        if(minecraft == true){
                            console.log("minecraft");
                            setCookie("seenEvent", "yes");
                            swal.fire({
                                html:`<button onclick="document.location = '../'">Go Back</button>`
                            })
                        }else{
                            $('.minecraft').slideDown(1000);
                            minecraft = true;

                        }
                    }else{
                        $('.earthbound').slideDown(1000);
                        earthbound = true;
                    }
                }else{
                    $('.msc2').slideDown(1000);
                    msc2 = true;
                };
            }else{
                $(".slope").slideDown(1000);
                slope = true;
            }
        }else{
            enabled = true;
            $('body').append(`  <audio src="title.mp3" autoplay loop></audio>`);
            $('.welcome').remove();
            $('body').append(`  <div class="presents">
            <h1>The games are....(Press Any Key To continue)</h1>
            <img src="../assets/images/slope.png" alt="" class="slope">
            <img src="../assets/images/msc.jpg" alt="" class="msc2">
            <img src="../assets/images/earthbound.jpg" alt="" class="earthbound">
            <img src="../assets/images/minecraft.jpg" alt="" class="minecraft">
        </div>`);
        $('.slope').slideUp(0);
        $('.msc2').slideUp(0);
        $('.earthbound').slideUp(0);
        $('.minecraft').slideUp(0);

        }
    });

});
