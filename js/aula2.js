//ENTENDENDO O CLICK E ALGUNS EFFEITOS DE IMGS    
$(document).ready(function () {

    $("img").fadeOut(0);
    $("img").fadeIn(6000);
    
    $("#par1").click(function(){
        $(this).slideUp();
    });

    $("#par2").click(function(){
        $(this).fadeOut(5000, function() {
            alert("Cliente excluido com sucesso.");
        });
    });

    $("#par3").click(function(){
        $("#part2").fadeOut(5000) ;
    });

    $("h1").click(function(){
        $(this).slideUp();
    });
});
