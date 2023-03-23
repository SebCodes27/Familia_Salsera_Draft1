<?php
if (isset($_POST['Email'])) {

    // EDIT THE FOLLOWING TWO LINES:
    $email_to = "you@yourdomain.com";
    $email_subject = "New Salsa Contact";

    function problem($error)
    {
        echo "We're sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br><br>";
        echo $error . "<br><br>";
        echo "Please go back and fix these errors.<br><br>";
        die();
    }

    // validation expected data exists
    if (
        !isset($_POST['first']) ||
        !isset($_POST['last']) ||
        !isset($_POST['email']) ||
        !isset($_POST['phone'])
    ) {
        problem('We're sorry, but there appears to be a problem with the form you submitted.');
    }

    $first = $_POST['first']; // required
    $last = $_POST['last']; // required
    $email = $_POST['email']; // required
    $phone = $_POST['phone']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        $error_message .= 'The email address you entered does not appear to be valid.<br>';
    }
    
    $string_exp = "/^[A-Za-z .'-]+$/";

    if (!preg_match($string_exp, $first)) {
        $error_message .= 'The name you entered does not appear to be valid.<br>';
    }

    if (!preg_match($string_exp, $last)) {
        $error_message .= 'The name you entered does not appear to be valid.<br>';
    }

    $number_exp = "/^[0-9|(|)|-]+$/";

    if (!preg_match($number_exp, $phone)) {
        $error_message .= 'The phone number you entered does not appear to be valid.<br>';
    }

    if (strlen($email) < 2) {
        $error_message .= 'The email you entered do not appear to be valid.<br>';
    }

    if (strlen($error_message) > 0) {
        problem($error_message);
    }

    $email_message = "Form details below.\n\n";

    function clean_string($string)
    {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }

    $email_message .= "First Name: " . clean_string($first) . "\n";
    $email_message .= "Last Name: " . clean_string($last) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Phone Number: " . clean_string($phone) . "\n";

    // create email headers
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    @mail($email_to, $email_subject, $email_message, $headers);
?>

    Thank you! This is the first of many perks you'll receive.

<?php
}
?>