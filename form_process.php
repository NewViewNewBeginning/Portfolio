<?php
// Function to check against any email injection attempts
function IsInjected($str) {
    $injections = array('(\n+)', '(\r+)', '(\t+)', '(%0A+)', '(%0D+)', '(%08+)', '(%09+)');
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    if (preg_match($inject, $str)) {
        return true;
    } else {
        return false;
    }
}

// Function to validate email domain
function domain_exists($email) {
    list($user, $domain) = explode('@', $email);
    return checkdnsrr($domain, 'MX');
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Collect and sanitize form input
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $surname = filter_var($_POST['surname'], FILTER_SANITIZE_STRING);
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    // Form validation
    $errors = [];
    if (empty($name) || empty($surname) || empty($subject) || empty($email) || empty($message)) {
        $errors[] = 'All fields are required.';
    }

    if (preg_match('/^[!@#$%^&*]/', $name)) {
        $errors[] = 'Invalid character at the start of the name.';
    }

    if (preg_match('/^[!@#$%^&*]/', $surname)) {
        $errors[] = 'Invalid character at the start of the surname.';
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email address.';
    } elseif (IsInjected($email) || !domain_exists($email)) {
        $errors[] = 'Invalid or non-existent email domain.';
    }

    // Initialize an empty array to hold the response
    $response = [];

    if (count($errors) > 0) {
        // If there are errors, set success to false and add error messages to the response
        $response['success'] = false;
        $response['errors'] = $errors;
    } else {
        // Prepare email
        $recipient = 'michalkrawczyk666@wp.pl';
        $headers = "From: $name $surname <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $body = "Name: $name $surname\nEmail: $email\nSubject: $subject\nMessage:\n$message";

        // If email is sent successfully, set success to true and add a success message to the response
        if (mail($recipient, $subject, $body, $headers)) {
            $response['success'] = true;
            $response['message'] = 'Thank you, your message has been sent!';
        } else {
            $response['success'] = false;
            $response['errors'] = ['Oops, something went wrong. Please try again.'];
        }
    }

    // Encode the response array as JSON and output it
    echo json_encode($response);
}
?>
