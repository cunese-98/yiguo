<?php 
    header("Access-Control-Allow-Origin:*");
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Headers:x-requested-with, content-type');
    include "connect.php";
    $admin = $_REQUEST["admin"];
    $password = $_REQUEST["password"];
    $user = "create table user (name char(11), password char(10));";
    $insert = "insert into user (name, password) values ('$admin',$password);";
    if($con->query($user)===true) {
        echo "创建成功";
    }else {
        echo "";
    };
    if($con->query($insert)===true) {
        echo "插入数据成功";
        header('enter.php'); 
    }else {
        echo "插入数据失败".$con->error;
    };
    $con->close();
?>