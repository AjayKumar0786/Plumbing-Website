<?php 
// 


if(isset($_POST['submit']))
{
    $to = "info@al-plumbing-electiral.co.uk"; // this is your Email address
    $fname = $_POST['Name'];
    $from = $_POST['Email']; // this is the sender's Email address
    $mobile = $_POST['Phone'];
    $address = $_POST['Address'];
    $detail = $_POST['Message'];
    $subject = "Contact Form - Enquiry";
    $message = "Email: " .$from."<br>"."Name: " .$fname. "<br>" ."Address: " .$address."<br>" . "Phone: " .$mobile. "<br>" . "Message: " .$detail;
    $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1" . "\r\n";
  $headers .= "From:" .$from. "\r\n" .
  "Reply-To: info@al-plumbing-electiral.co.uk" . "\r\n" .
  "X-Mailer: PHP/" . phpversion();
    $success = mail($to,$subject,$message,$headers);
     if( $success == true )  
   {
      echo '<script>alert("Email has been sent successfully. we will contact you shortly.");</script>';
   }
   else
   {
	    echo '<script>alert("Message could not be sent....");</script>';
      
   }
   
    }
    echo '<script>window.location="https://bajajitsolution.com/training/sanjay/Al-Plumbing/"</script>';
    
?>