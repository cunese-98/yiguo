$(document).ready(function() {
    // 校验码
    var code; 
    function createCode(){ 
    code = '';
    var codeLength = 4;
    var codeV = $(".chunk-3-2"); 
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z'); 
    for(var i = 0; i < codeLength; i++){  
        var index = Math.floor(Math.random()*36); 
        code += random[index];
    } 
    codeV.text(code);
    } 
    createCode(); 
    $(".barter-3").bind('click',function() { 
        createCode(); 
    });
    $("#answer-3").bind('click',function() { 
     var oValue = $("#answer-3").val().toUpperCase(); 
     $("#l3").html(""); 
    if(oValue ==""){ 
      $("#l3").html("<font color='red'>* 请输入校验码</font>"); 
    }else if(oValue != code){ 
      $("#l3").html("<font color='red'>* 校验码错误</font>"); 
      oValue = ""; 
      createCode(); 
    }else{ 
      $("#l3").html(); 
    }
    }); 
    // 点击显示
    var show = 1;
    $(".foor-3").click(function() {
        if(show == 1) {
            $("#ipone-3-1").text("* 请输入你的手机号或邮箱")
        }else {
            $("#ipone-3-1").text("")
        }
    })
})