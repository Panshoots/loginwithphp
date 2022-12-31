<?php

  if(!empty($_POST)) {
    
    $captcha = $_POST['g-recaptcha-response'];
    $secret= '6Le1Nb8jAAAAADr7Lmp9OL24eUxI2GVKzx5XaRfg';

    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secret&response=$captcha");
    $arr = json_decode($response, TRUE);
    
    if ( $arr['success'] ) {
      echo json_encode('Verificado');
    } else {
      echo json_encode('No Verificado');
    }
  }

?>