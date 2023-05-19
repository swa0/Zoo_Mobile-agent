//filter
$(function(){
    $(".filter .close_ic, .filter .closeBtn").click(function(){
        $(".filter, .filter>div")
        .removeClass("display");

        $("header .listBtn")
        .addClass("display");
    })

    $("header .listBtn,.home .loginBox .login").click(function(){
        $(".filter, .sideWindow")
        .addClass("display");

        $("header .listBtn")
        .removeClass("display");
    })

    $(".affiliatePage button.check").click(function(){
        $(".filter, .filter>div")
        .removeClass("display");

        $(".filter, .jumpWindow.agentApplyWindow")
        .addClass("display");
    })
})