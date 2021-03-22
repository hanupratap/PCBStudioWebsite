<?php
  $name = $_POST['name'];
  $number = $_POST['number'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];
  $image = $_POST['image'];

  $email_from = 'keano.vancuyck@telenet.be';

  $email_subject = "Nieuwe klant";

  $email_body = "Naam: $name.\n".
                "Nummer: $number.\n".
                "Email: $visitor_email.\n".
                "Vraag: $message.\n".
                "Foto's: $image.\n";

  $to = "keano.vancuyck@gmail.com";

  $headers = "Van: $email_from \r\n";

  mail($to,$email_subject,$email_body,$headers);

  header("Location: index.html");
?>
