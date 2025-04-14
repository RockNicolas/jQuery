//ENTENDENDO EMPTY & SLIDEDOWN
$(document).ready(function () {
    $("p").click( function () {
        $("p").empty();
    });

    $("#btn_show").click( function () {
        $("#img_logo").show();
    });
    
    $("#btn_hide").click( function () {
        $("#img_logo").hide();
    });

    $("#btn_act").click( function () {
       if( $(this).val() == "+"){
            $("#slide_exemplo").slideDown();
            $(this).val("-")
       } else {
            $("#slide_exemplo").slideUp();
            $(this).val("+")
       }
    });

});