$(function() {
    $(".banner-slider").hover(
        function() {
        $(".b-btn a").css("display", "block");
    },function() {
        $(".b-btn a").css("display", "none");
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
    $(".floor-guide").css("display","none");
    $(window).scroll(function(){
        var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        for(var i=0;i<$(".floor-one").length;i++) {
            var pageTop=$(".floor-one").eq(i).offset().top;
            var pageHeight=$(".floor-one").eq(i).outerHeight();
            if(scrollTop>=pageTop&&scrollTop<(pageTop+pageHeight)) {
                $("em").css("display","none");
                $("em").eq(i).css("display","block");
            }
           
        }
        if(scrollTop<$(".floor-one").eq(0).offset().top){
            $(".floor-guide").css("display","none");
        }else {
            $(".floor-guide").css("display","block");
        }
    })
    $(".floor-guide a").click(function(){
        var origin=$(".floor-one").eq($(this).index()).offset().top;
        $("body,html").animate({
            scrollTop: origin
        }, "slow");
    })
    $(document).ready(function () {
        $(".classify").click(function () {
            $(".navigate-con").fadeToggle(0)
        })
        $()
    })
})