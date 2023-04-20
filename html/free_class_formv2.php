<?php
$errors = '';
$from = 'admin@familiasalsera.org';//<-----Put Your email address here.
$to = 'sebastiangarcia.work02@gmail.com';
if(empty($_POST['first'])  || 
   empty($_POST['last'])  || 
   empty($_POST['email']) || 
   empty($_POST['phone']))
{
    $errors .= "\n Error: all fields are required";
}

$first = $_POST['first']; 
$last = $_POST['last'];
$email = $_POST['email']; 
$phone = $_POST['phone']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if (!preg_match(
"/^[A-Za-z .'-]+$/", $first))
{
    $errors .= "\n Error: Invalid first name";
}

if (!preg_match(
"/^[A-Za-z .'-]+$/", $last))
{
    $errors .= "\n Error: Invalid last name";
}

$number_exp = "/^[0-9|(|)|-]+$/";

if (!preg_match(
"/^[0-9|(|)|-]+$/", $phone))
{
    $errors .= "\n Error: Invalid phone number";
}

if (strlen($email) < 2)
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))

{

$email_subject = "New Salsa Contact";

$email_body = "You have received a new contact. ". "\n";
$email_body .= "First Name: " . ($first) . "\n";
$email_body .= "Last Name: " . ($last) . "\n";
$email_body .= "Email: " . ($email) . "\n";
$email_body .= "Phone Number: " . ($phone) . "\n";

$headers = "From: $from\n";

mail($to,$email_subject,$email_body,$headers);

//redirect to the 'thank you' page
//Thank you! This is the first of many perks you'll receive.

header('Location: index.html');

} else {
    echo $errors;
}