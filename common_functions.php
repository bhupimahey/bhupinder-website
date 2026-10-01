<?php
 function obfuscate_link($file_id, $type = 'documents')
		{
		$temp = array(
			date("jmY") ,
			$file_id,
			$type
		); // using date("jmY") ensures download links are specific to each day
		$temp = serialize($temp);
		$temp = base64_encode($temp);
		$link = rawurlencode($temp);
		return $link;
		}
	
	function unobfuscate_link($link)
		{
		$temp = rawurldecode($link);
		$temp = base64_decode($temp);
		if (!@unserialize($temp))
			{
            	exit();
			}
		  else
			{
			$download_array = unserialize($temp);
			return $download_array;
			}
		}
		
		
    function reCaptcha($recaptcha){
      $secret = "6LfrsvkiAAAAAPaUTk-WaMMbHZa1KhT1sVNJ00AW";
      $ip = $_SERVER['REMOTE_ADDR'];
    
      $postvars = array("secret"=>$secret, "response"=>$recaptcha, "remoteip"=>$ip);
      $url = "https://www.google.com/recaptcha/api/siteverify";
      $ch = curl_init();
      curl_setopt($ch, CURLOPT_URL, $url);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
      curl_setopt($ch, CURLOPT_TIMEOUT, 10);
      curl_setopt($ch, CURLOPT_POSTFIELDS, $postvars);
      $data = curl_exec($ch);
      curl_close($ch);
    
      return json_decode($data, true);
}

function send_mail($emailTo,$emailToName,$emailFrom,$emailFromName,$subject,$message,$mail){

$mail->isSMTP(); 
$mail->SMTPDebug = 0; // 0 = off (for production use) - 1 = client messages - 2 = client and server messages
$mail->Host = "www.bhupimahey.in"; // use $mail->Host = gethostbyname('smtp.gmail.com'); // if your network does not support SMTP over IPv6
$mail->Port = 587; // TLS only
$mail->SMTPSecure = 'tls'; // ssl is depracated
$mail->SMTPAuth = true;
$mail->Username = "info@bhupimahey.in";
$mail->Password = "5bNagExUI?&]";
$mail->setFrom($emailFrom, $emailFromName);
$mail->addAddress($emailTo, $emailToName);
$mail->Subject = $subject;
$mail->msgHTML($message); //$mail->msgHTML(file_get_contents('contents.html'), __DIR__); //Read an HTML message body from an external file, convert referenced images to embedded,
//$mail->AltBody = $message;
// $mail->addAttachment('images/phpmailer_mini.png'); //Attach an image file
$mail->send();

  // echo "Mailer Error: " . $mail->ErrorInfo;

}

?>