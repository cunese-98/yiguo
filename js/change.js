$(document).ready(function () {
    $(".navigate").hover(function () {
        $(".navigate-con").css("display","block")
    },function() {
        $(".navigate-con").css("display","none")
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