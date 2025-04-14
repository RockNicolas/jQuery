//Entendendo evento keypress, keyUp, Focus
(document).ready(function () {
    $("#txtFone").focus();

    $("#txtFone").keypress(function (e) {
        if(e.which == 13){
            $("#txtData").focus();
        }
    });

    $("#txtFone").keyup(function () {
        alert($("#txtFone").val());
    });
});