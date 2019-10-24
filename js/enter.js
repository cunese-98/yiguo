$(document).ready(function() {
    // 第三方登录
    $(".qq-3").click(function() {
        $(".add-3").show();
    })
    $(".sina-3").click(function() {
        $(".add-3").show();
    })
    $(".close-3").click(function() {
        $(".add-3").hide();
    })
    // 随机验证码
    var code; 
    function createCode(){ 
    code = '';
    var codeLength = 4;
    var codeV = $(".chunk-3-1"); 
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z'); 
    for(var i = 0; i < codeLength; i++){  
       var index = Math.floor(Math.random()*36); 
       code += random[index];
    } 
        codeV.text(code);
    } 
    createCode(); 
    $(".trade-3").bind('click',function() { 
        createCode(); 
    });
    // $("#ver-3-1").bind('click',function() { 
    //  var oValue = $("#ver-3").val().toUpperCase(); 
    //  $("#l2").html(""); 
    // if(oValue ==""){ 
    //   $("#l2").html("<font color='red'>*请输入验证码</font>"); 
    // }else if(oValue != code){ 
    //   $("#l2").html("<font color='red'>*验证码不正确，请重新输入</font>"); 
    //   oValue = ""; 
    //   createCode(); 
    // }else{ 
    //   $("#l2").html(); 
    // } 
//   }); 
    // 购买后与收藏
    $(".orange-3,.orange-3-1").click(function() {
        $(".own-3").show();
    })
    $(".confirm-3").click(function() {
        $(".own-3").hide();
    })
    // 忘记密码验证身份
    var validCode=true;
    $(".btn-jym-3").click (function () {
    var time=60;
    var code=$(this);
    if (validCode) {
        validCode=false;
        code.addClass("btn-jym-3-1");
    var t=setInterval(function() {
        time--;
        code.html(time+"秒");
        if (time==0) {
            clearInterval(t);
        code.html("重新获取");
            validCode=true;
        code.removeClass("btn-jym-3-1");
        }
    },1000)
    }
})
})