$(document).ready(function (){
    $("#idade").keypress(function (e){
        var char_ok = String.fromCharCode(e.which);
        if ($.isNumeric(char_ok)){
            return true;
        } else {
            return false;
        }
    });
    
    $("#mouse").mousemove(function(){
        alert("MOUSE!");
    });
});