<?php
$to = "parenzashigaet@gmail.com";
$from = 'parenzashigaet@gmail.com';
$first_name = 'mandem';
$subject = "Заявка на проект";
$subject2 = "Copy of your form submission";
$message = $first_name . "" . "\nНомер телефона: " . $_POST['tel'] . "\n\n" . $_POST['message'];
$message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to, $subject, $message, $headers);

echo $_POST;