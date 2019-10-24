<?php 
    $serve = "localhost";
    $name = "root";
    $password = "root";
    $mysql = "yiguo";
    $con=new mysqli($serve, $name, $password, $mysql);
    if($con->connect_error) {
        die("连接失败".$con->connect_error);
    };
    echo "连接成功";
?>