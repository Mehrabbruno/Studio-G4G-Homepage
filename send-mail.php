<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = strip_tags($_POST["name"]);
    $email   = strip_tags($_POST["email"]);
    $phone   = strip_tags($_POST["phone"]);
    $message = strip_tags($_POST["message"]);

    $to      = "contact@studio-g4g.com";
    $subject = "New Contact Form Submission";
    $body    = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: /contact.html?success=1");
    } else {
        header("Location: /contact.html?error=1");
    }
}
?>
