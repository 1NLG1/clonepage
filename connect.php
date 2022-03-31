<?php 
    // database connection

    $connection = new mysqli('localhost', 'root', '213kK2131', 'users'); // database username is root, pw is 213kK2131, database name is users;

    // checking connection 

    if($connection) {
        echo "connection established";
    } else {
        die ("Error". mysqli_connect_error());
    }
?>