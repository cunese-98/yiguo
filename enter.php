<?php
    header("Access-Control-Allow-Origin:*");
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Headers:x-requested-with, content-type');
    include "connect.php";
    $admin = $_REQUEST["admin"];
    $password = $_REQUEST["password"];
    $select = "select admin,password from user where phone={$admin};";
    $test = $con->query($select);
    if($test->num_rows>0) {
        while($arr=$test->fetch_assoc()) {
            if($arr['password']==$password) {
                echo json_encode(1);
            }else {
                echo json_encode(0);
            }
        }
    };
    $con->close();
?>