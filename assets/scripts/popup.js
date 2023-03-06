//Made By BioShot\\


$(document).ready(function() {
    var popupElements = document.querySelectorAll('popup');
$doc = {};
function showPopup(e) {
    var txt = e.getAttribute('text');


    swal.fire({
        title:"Important!",
        text: txt,
    })

};
$doc.ready = function (element) {
    var el = document.querySelector(element);
    $(document).ready(function (){
        showPopup(el);
    })
};
popupElements.forEach(function (popup) {
    var elementTrigger = popup.getAttribute('trigger');
    eval(elementTrigger);
})

});
