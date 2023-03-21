<?php

$from = 'elite1boxing@yahoo.com';

$sentTo = 'elite1boxing@yahoo.com';

$subject = "New Salsa Contact"

$fields = array('first-name' => 'First Name', 'last-name' => 'Last Name', 'email' => 'Email', 'phone-number' => 'Phone Number';)

$okMessage = '(placeholder) thank-you!'

$errorMessage = 'There was an error while submitting the form. Please try again later'

error_reporting(0)

try
{

    if(count($_POST) == 0) throw new /Exception('form is empty');

    $emailText = "A new contact has been added from familiasalsera.org"

    foreach ($_POST as $key => $value) {
        if(isset($fields[$key])) {
            $emailTest .= "$fields[$key]: $value/n";
        }
    }
    $headers = array('Content-Type: text/plain; charset="UTF-8";',
    'From: ' . $from,
    'Reply-to ' . $_POST:['email'],
    'Return-path ' . $from,
    );

    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;
}

else {
    echo $responseArray['message'];
}

?>