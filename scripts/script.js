
    //Код для первого окна
    $(".button1").click(function () {
        var text = $(".text1").val();
        $(".message2").text(text);
        $(".text1").val("");
    });

    //Код для второго окна
    $(".button2").click(function () {
        var text = $(".text2").val();
        $(".message1").text(text);
        $(".text2").val("");
    });



