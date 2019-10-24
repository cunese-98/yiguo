$(document).ready(function() {
    // 易果服务协议 隐私协议
    $(".green-3").click(function() {
        $(".popout-3-1").css("display","block");
    })
    $(".green-3-1").click(function() {
        $(".popout-3-2").css("display","block");
    })
    $(".flose").click(function() {
        $(".popout-3-1").hide();
    })
    $(".flose-1").click(function() {
        $(".popout-3-2").hide();
    })
    $(".btn-gn-3").click(function() {
        $(".popout-3-1").hide();
        $(".popout-3-2").hide();
    })
    // 注册页面验证码
    var validCode=true;
    $(".gian-3").click (function () {
        var time=60;
        var code=$(this);
        if (validCode) {
            validCode=false;
            code.addClass("gian-3-1");
        var t=setInterval(function  () {
            time--;
            code.html(time+"秒");
            if (time==0) {
                clearInterval(t);
            code.html("重新获取");
                validCode=true;
            code.removeClass("gian-3-1");
            }
        },1000)
        }
    })
    // 注册颜色
    var flag = 1; 
    $('.read-3').click(function() {
    if (flag == 1) { 
        $(".button-3").css('background', '#008842');
        flag = 2;
    } else { 
        $(".button-3").css('background', '');   
    flag = 1;
    }
    });
    // 点击注册
    $(".button-3").click(function() {
        if(flag == 1) {
            $(".error-3").text("* 请接受服务协议")
        }else {
            $(".error-3").text("")
        }
        if(flag == 2) {
            $("#ipone-3").text("* 手机号不能为空")
        }else {
            $("#ipone-3").text("")
        }
    })
    // 点击验证
    $("#set-3").click(function() {
        $("#yzm-3").text("* 验证码不能为空")
    })
    $("#invite-3").click(function() {
        $("#aff-3").text("* 密码不能为空")
    })
    // 随机验证码
    var code; 
      function createCode(){ 
        code = '';
        var codeLength = 4;
        var codeV = $(".chunk-3"); 
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z'); 
        for(var i = 0; i < codeLength; i++){  
           var index = Math.floor(Math.random()*36); 
           code += random[index];
      } 
        codeV.text(code);
      } 
      createCode(); 
      $(".one-3").bind('click',function() { 
          createCode(); 
        }); 
      $("#ver-3").bind('click',function() { 
         var oValue = $("#ver-3").val().toUpperCase(); 
         $("#l1").html(""); 
        if(oValue ==""){ 
          $("#l1").html("<font color='red'>* 请输入验证码</font>"); 
        }else if(oValue != code){ 
          $("#l1").html("<font color='red'>* 验证码不正确，请重新输入</font>"); 
          oValue = ""; 
          createCode(); 
        }else{ 
          $("#l1").html(); 
        } 
      }); 
})