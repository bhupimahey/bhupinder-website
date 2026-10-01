<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
if(isset($_POST) && $_POST['your_email']!=''){
  include('common_functions.php');    
  require 'php_mailer/src/Exception.php';
  require 'php_mailer/src/PHPMailer.php';
  require 'php_mailer/src/SMTP.php';
  $mail = new PHPMailer;
   
    
    $recaptcha = $_POST['g-recaptcha-response'];
    $res       = reCaptcha($recaptcha);
    if($res['success']){
        $token =obfuscate_link("status=1");
        
          $name   = $_POST['full_name'];
          $email  = $_POST['your_email'];
          $qry    = $_POST['your_subject'];
          $msg    = $_POST['your_message'];
             
          $to     =   "bhupimahey@gmail.com";
          $subject="Contact Form Enquiry-".$email;
          $message ='';
          $message .="<html><body>
           <p>Full Name ".$name." </p>
           <p>Email ".$email." </p>
           <p>Subject ".$qry." </p>
           <p>Message ".$msg." </p></body></html> ";
        
        $emailFrom='info@bhupimahey.in';
        $emailFromName='Contact Enquiry-'.$email;
    
        send_mail($to,$emailFromName,$emailFrom,$emailFromName,$subject,$message,$mail);
        header("location:index.php?status=".$token);
          
          
    }else{
         $token =obfuscate_link("status=0");
         header("location:index.php?status=".$token);
    }
  }
?>