//Entendendo evento change e function text()
$(document).ready(function () {
    $("#txtFone").focus();

    $("#txtFone").keypress(function (e) {
        if(e.which == 13){
            $("#txtData").focus();
        }
    });

    $("#txtData").keyup(function () {
        let valor = $("#txtData").val().replace(/\D/g, ""); 

        if (valor.length >= 3 && valor.length <= 4) {
            valor = valor.slice(0, 2) + "/" + valor.slice(2);
        } else if (valor.length > 4) {
            valor = valor.slice(0, 2) + "/" + valor.slice(2, 4) + "/" + valor.slice(4, 8);
        }

        $("#txtData").val(valor);
    });

    $("#cores").change(function () {
        var corSelecionada = $("#cores option:selected").text().toLowerCase();
    
        switch (corSelecionada) {
            case "azul":
                $("#img_xre").attr("src", "imgs/azul.jpg");
                break;
            case "vermelho":
                $("#img_xre").attr("src", "imgs/vermelho.jpg");
                break;
            case "adv":
                $("#img_xre").attr("src", "imgs/Adv.jpg");
                break;
            case "cinza":
                $("#img_xre").attr("src", "imgs/cinza.jpg");
                break;
            default:
                $("#img_xre").attr("src", "default.jpg"); o
                break;
        }
    });
    
});