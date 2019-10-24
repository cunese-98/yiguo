$(function () {
    // 网页弹框判断
    $(document).scroll(function () {
        $(document).scrollTop() > 100 ? $(".hide-Bounced-content").css("display", "block") : $(".hide-Bounced-content").css("display", "none");
    });

    $(".city").mouseenter(function () {
        $(".city-name").css({
            "background": "#008842",
            "color": "#ffffff"
        });
        $(".s-1").css("border-color", "#ffffff transparent transparent");
        $(".city-con").show();
    });
    $(".city").mouseleave(function () {
        $(".city-con").hide();
        $(".s-1").css("border-color", "#008842 transparent transparent");
        $(".city-name").css({
            "background": "#f7f9f8",
            "color": "#008842"
        });
    });
    $(".active").hover(function () {
        $(this).addClass("active1").siblings().removeClass("active1");
        $(".citylist").eq($(this).index()).show().siblings().hide();
    });
    $("#shanghai").click(function () {
        hide();
        $(".citylist-tab-S44").show();
    });
    // 修改城市选项 //
    $(".site-nav,.site-nav1").click(function () {
        $(".city-name-modify").text($(this).text());
        $(".city-con,.citylist-tab").hide();
    });
    // A //
    $(".a-style-A").click(function () {
        hide();
        $(".citylist-tab-A").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-A1").click(function () {
        hide();
        $(".citylist-tab-A1").show();
    });
    // B //
    $(".a-style-B").click(function () {
        hide();
        $(".citylist-tab-B").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-B1").click(function () {
        hide();
        $(".citylist-tab-B1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-B2").click(function () {
        hide();
        $(".citylist-tab-B2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-B3").click(function () {
        hide();
        $(".citylist-tab-B3").eq($(this).index() - 18).show();
    });
    // C //
    $(".a-style-C").click(function () {
        hide();
        $(".citylist-tab-C").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-C1").click(function () {
        hide();
        $(".citylist-tab-C1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-C2").click(function () {
        hide();
        $(".citylist-tab-C2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-C3").click(function () {
        hide();
        $(".citylist-tab-C3").eq($(this).index() - 18).show().siblings().hide();
    });
    $(".a-style-C4").click(function () {
        hide();
        $(".citylist-tab-C4").eq($(this).index() - 24).show();
    });
    // D //
    $(".a-style-D").click(function () {
        hide();
        $(".citylist-tab-D").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-D1").click(function () {
        hide();
        $(".citylist-tab-D1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-D2").click(function () {
        hide();
        $(".citylist-tab-D2").eq($(this).index() - 12).show().siblings().hide();
    });
    // E //
    $(".a-style-E").click(function () {
        hide();
        $(".citylist-tab-E").eq($(this).index()).show().siblings().hide();
    });
    // F //
    $(".a-style-F").click(function () {
        hide();
        $(".citylist-tab-F").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-F1").click(function () {
        hide();
        $(".citylist-tab-F1").eq($(this).index() - 6).show().siblings().hide();
    });
    // G //
    $(".a-style-G").click(function () {
        hide();
        $(".citylist-tab-G").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-G1").click(function () {
        hide();
        $(".citylist-tab-G1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-G2").click(function () {
        hide();
        $(".citylist-tab-G2").eq($(this).index() - 12).show().siblings().hide();
    });
    // H //
    $(".a-style-H").click(function () {
        hide();
        $(".citylist-tab-H").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-H1").click(function () {
        hide();
        $(".citylist-tab-H1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-H2").click(function () {
        hide();
        $(".citylist-tab-H2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-H3").click(function () {
        hide();
        $(".citylist-tab-H3").eq($(this).index() - 18).show().siblings().hide();
    });
    $(".a-style-H4").click(function () {
        hide();
        $(".citylist-tab-H4").eq($(this).index() - 24).show().siblings().hide();
    });
    $(".a-style-H5").click(function () {
        hide();
        $(".citylist-tab-H5").eq($(this).index() - 30).show().siblings().hide();
    });
    $(".a-style-H6").click(function () {
        hide();
        $(".citylist-tab-H6").eq($(this).index() - 36).show().siblings().hide();
    });
    // J //
    $(".a-style-J").click(function () {
        hide();
        $(".citylist-tab-J").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-J1").click(function () {
        hide();
        $(".citylist-tab-J1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-J2").click(function () {
        hide();
        $(".citylist-tab-J2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-J3").click(function () {
        hide();
        $(".citylist-tab-J3").eq($(this).index() - 18).show().siblings().hide();
    });
    // K //
    $(".a-style-K").click(function () {
        hide();
        $(".citylist-tab-K").eq($(this).index()).show().siblings().hide();
    });
    // L //
    $(".a-style-L").click(function () {
        hide();
        $(".citylist-tab-L").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-L1").click(function () {
        hide();
        $(".citylist-tab-L1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-L2").click(function () {
        hide();
        $(".citylist-tab-L2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-L3").click(function () {
        hide();
        $(".citylist-tab-L3").eq($(this).index() - 18).show().siblings().hide();
    });
    $(".a-style-L4").click(function () {
        hide();
        $(".citylist-tab-L4").eq($(this).index() - 24).show().siblings().hide();
    });
    // M //
    $(".a-style-M").click(function () {
        hide();
        $(".citylist-tab-M").eq($(this).index()).show().siblings().hide();
    });
    // N //
    $(".a-style-N").click(function () {
        hide();
        $(".citylist-tab-N").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-N1").click(function () {
        hide();
        $(".citylist-tab-N1").eq($(this).index() - 6).show().siblings().hide();
    });
    // P //
    $(".a-style-P").click(function () {
        hide();
        $(".citylist-tab-P").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-P1").click(function () {
        hide();
        $(".citylist-tab-P1").eq($(this).index() - 6).show().siblings().hide();
    });
    // Q //
    $(".a-style-Q").click(function () {
        hide();
        $(".citylist-tab-Q").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-Q1").click(function () {
        hide();
        $(".citylist-tab-Q1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-Q2").click(function () {
        hide();
        $(".citylist-tab-Q2").eq($(this).index() - 12).show().siblings().hide();
    });
    // R //
    $(".a-style-R").click(function () {
        hide();
        $(".citylist-tab-R").eq($(this).index()).show().siblings().hide();
    });
    // S //
    $(".a-style-S").click(function () {
        hide();
        $(".citylist-tab-S").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-S1").click(function () {
        hide();
        $(".citylist-tab-S1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-S2").click(function () {
        hide();
        $(".citylist-tab-S2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-S3").click(function () {
        hide();
        $(".citylist-tab-S3").eq($(this).index() - 18).show().siblings().hide();
    });
    $(".a-style-S4").click(function () {
        hide();
        $(".citylist-tab-S4").eq($(this).index() - 24).show().siblings().hide();
    });
    $(".a-style-S5").click(function () {
        hide();
        $(".citylist-tab-S5").eq($(this).index() - 30).show().siblings().hide();
    });
    // T //
    $(".a-style-T").click(function () {
        hide();
        $(".citylist-tab-T").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-T1").click(function () {
        hide();
        $(".citylist-tab-T1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-T2").click(function () {
        hide();
        $(".citylist-tab-T2").eq($(this).index() - 12).show().siblings().hide();
    });
    // W //
    $(".a-style-W").click(function () {
        hide();
        $(".citylist-tab-W").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-W1").click(function () {
        hide();
        $(".citylist-tab-W1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-W2").click(function () {
        hide();
        $(".citylist-tab-W2").eq($(this).index() - 12).show().siblings().hide();
    });
    // X //
    $(".a-style-X").click(function () {
        hide();
        $(".citylist-tab-X").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-X1").click(function () {
        hide();
        $(".citylist-tab-X1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-X2").click(function () {
        hide();
        $(".citylist-tab-X2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-X3").click(function () {
        hide();
        $(".citylist-tab-X3").eq($(this).index() - 18).show().siblings().hide();
    });
    // Y //
    $(".a-style-Y").click(function () {
        hide();
        $(".citylist-tab-Y").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-Y1").click(function () {
        hide();
        $(".citylist-tab-Y1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-Y2").click(function () {
        hide();
        $(".citylist-tab-Y2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-Y3").click(function () {
        hide();
        $(".citylist-tab-Y3").eq($(this).index() - 18).show().siblings().hide();
    });
    $(".a-style-Y4").click(function () {
        hide();
        $(".citylist-tab-Y4").eq($(this).index() - 24).show().siblings().hide();
    });
    // Z //
    $(".a-style-Z").click(function () {
        hide();
        $(".citylist-tab-Z").eq($(this).index()).show().siblings().hide();
    });
    $(".a-style-Z1").click(function () {
        hide();
        $(".citylist-tab-Z1").eq($(this).index() - 6).show().siblings().hide();
    });
    $(".a-style-Z2").click(function () {
        hide();
        $(".citylist-tab-Z2").eq($(this).index() - 12).show().siblings().hide();
    });
    $(".a-style-Z3").click(function () {
        hide();
        $(".citylist-tab-Z3").eq($(this).index() - 18).show().siblings().hide();
    });
    $(".a-style-Z4").click(function () {
        hide();
        $(".citylist-tab-Z4").eq($(this).index() - 24).show().siblings().hide();
    });
    function hide() {
        $(".citylist-tab-S44").hide();
        $(".citylist-tab").hide();
    };

    // input输入框判断
    $(".input-search").focus(function () {
        $(this).val() == "输入商品名/编号/拼音" ? $(this).val("").css("background", "#f7f9f8").css("color", "#000") : $(this).val() == "输入商品名/编号/拼音";
    });
    $(".input-search").blur(function () {
        $(this).val() == '' ? $(this).val("输入商品名/编号/拼音").css("background", "#e0e0e0").css("color", "rgb(153, 153, 153)") : $(this).val() == '';
    });
    // 手机易果
    $(".mobile-a,.con").hover(function () {
        $(".mobile-a,.con").css("display", "block").addClass("my-Fruits");
    }, function () {
        $(".con").css("display", "none");
        $(".mobile-a,.con").removeClass("my-Fruits");
    });
    // 我的易果
    $(".myyiguo-a,#phone-QR-code").hover(function () {
        $(".myyiguo-a,#phone-QR-code").css("display", "block").addClass("my-Fruits");
    }, function () {
        $("#phone-QR-code").css("display", "none");
        $(".myyiguo-a,#phone-QR-code").removeClass("my-Fruits");
    });
});