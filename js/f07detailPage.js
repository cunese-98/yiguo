$(function() {
    // 奇异果
    $(".f2content31").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(1).css("display","block");
    })

    $(".f2content32").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(2).css("display","block");
    })

    $(".f2content33").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(3).css("display","block");
    })
    
    $(".f2content34").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(4).css("display","block");
    })
    
    $(".f2content35").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(5).css("display","block");
    })
    
    $(".f2content36").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(6).css("display","block");
    })
    
    $(".f2content37").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(7).css("display","block");
    })
    
    $(".f2content38").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(8).css("display","block");
    })
    
    $(".f2content39").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(9).css("display","block");
    })
    
    $(".f2content310").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(10).css("display","block");
    })
    
    $(".f2content311").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(11).css("display","block");
    })
    
    $(".f2content312").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(12).css("display","block");
    })
    
    $(".f2content313").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(13).css("display","block");
    })
    
    $(".f2content314").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(14).css("display","block");
    })
    
    $(".f2content315").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(15).css("display","block");
    })
    
    $(".f2content316").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(16).css("display","block");
    })

    $(".f2content317").click(function() {
        $(".f2main1-1").children("ul").css("display","none");
        $(".f2main1-1").children("ul").eq(17).css("display","block");
    })





    $(document).ready(function () {
        $(".navigate").hover(function () {
            $(".navigate-con").css("display","block")
        },function() {
            $(".navigate-con").css("display","none")
        })
    })
    $("li").mousemove(function() {
        $(this).children("#f2box1-3").eq(0).show();
    } )
    $("li").mouseleave(function() {
        $(this).children("#f2box1-3").eq(0).hide();
    } )
    window.onscroll = function () {
        if ( $( window ).scrollTop() >= 500 ) {
            $(".f20go-top").css("display","block")
        } else {
            $(".f20go-top").css("display","none")
        }
    }
    $(".f20go-top").click(function(){
        $("f20body,html").animate({
            scrollTop: 0
        }, "slow");
    })
})