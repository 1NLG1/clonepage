<?php 
    // assuming we've created a sql database named 'users', with a table named 'registration' with the following input fields: id, firstName, lastName, email, password, confirmPassword);
    require 'connect.php';

    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];

    // adding the submitted values into database
    $sql = "INSERT INTO registration (firstName, lastName, email, password, confirmPassword) VALUES ('$firstName', '$lastName', '$email', '$password', '$confirmPassword')";
    $result = mysqli_query($connection, $sql);

    header("Location: index.html");
?>