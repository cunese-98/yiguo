$(function() {
    $(".classify").click(function () {
        $(".navigate-con").fadeToggle(0)
    })
    $()
    $(".tab-hd li").on("mouseenter",function() {
        $(this).addClass("mo-active").siblings().removeClass("mo-active");
    })
    $(".tab-hd li").eq(0).children("i").css("display","block")
    $(".tab-hd li").mouseenter(function() {
        $(".d-arrow").css("display","none")
        $(this).children("i").css("display","block")
    })
    window.onscroll = function () {
        if ( $( window ).scrollTop() >= 500 ) {
            $(".go-top").css("display","block")
            } else {
                $(".go-top").css("display","none")
            }
        }
        $(".go-top").click(function(){
            $("body,html").animate({
                scrollTop: 0
            }, "slow");
        })
})