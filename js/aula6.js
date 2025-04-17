$(document).ready(function (){
    $("#animar").click(function (){
        $("#exemplo").animate({
        width: "80%",
        marginLeft: "0.9",
        fontSize: "50px",
        borderWidth: "20px"}, 2000);
    });
    $("#animar2").click(function (){
        $("#exemplo_3").animate({
        fontSize: "+=5px"}, "slow");
    });
});