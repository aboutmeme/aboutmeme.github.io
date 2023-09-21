<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $login = $_POST['login'];
    $email = $_POST['email'];
    
    // Осуществляем отправку почты
    $to = 'roma.a.denisov@gmail.com'; // Укажите вашу почту здесь
    $subject = 'Новая заявка на футболку';
    $message = "Логин: $login\nПочта: $email";
    $headers = "From: webmaster@example.com\r\nReply-To: webmaster@example.com";
    
    mail($to, $subject, $message, $headers);
    
    // Перенаправляем на новую страницу
    header('Location: confirmation.html');
    exit;
}
?>