<?php
session_start();

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

    if ($name[0] == '@' || $name[0] == '!' || $name[0] == '#' || $name[0] == '$' || $name[0] == '%') {
        $errors[] = 'Invalid character at the start of the name.';
    }

    if ($surname[0] == '@' || $surname[0] == '!' || $surname[0] == '#' || $surname[0] == '$' || $surname[0] == '%') {
        $errors[] = 'Invalid character at the start of the surname.';
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email address.';
    } elseif (IsInjected($email) || !domain_exists($email)) {
        $errors[] = 'Invalid or non-existent email domain.';
    }

    if (count($errors) > 0) {
        $_SESSION['message'] = implode('<br>', $errors);
        header('Location: index.html');
        exit();
    }

    // Prepare email
    $recipient = 'michalkrawczyk666@wp.pl';
    $headers = "From: $name $surname <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $body = "Name: $name $surname\nEmail: $email\nSubject: $subject\nMessage:\n$message";

    // Send email
    if (mail($recipient, $subject, $body, $headers)) {
        $_SESSION['message'] = 'Thank you, your message has been sent!';
    } else {
        $_SESSION['message'] = 'Oops, something went wrong. Please try again.';
    }

    // Redirect back to the form page
    header('Location: index.html');
    exit();
}

?>

<!-- Sip n relax php -->
<!-- <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate first name
    $firstName = filter_input(INPUT_POST, 'first-name', FILTER_SANITIZE_STRING);
    if (empty($firstName)) {
        die('Error: First name is required');
    }

    // Sanitize and validate last name
    $lastName = filter_input(INPUT_POST, 'last-name', FILTER_SANITIZE_STRING);
    if (empty($lastName)) {
        die('Error: Last name is required');
    }

    // Sanitize and validate email
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die('Error: Invalid email format');
    }

    // Sanitize and validate phone
    $phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
    if (empty($phone)) {
        die('Error: Phone number is required');
    }

    // Sanitize and validate subject
    $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
    if (empty($subject)) {
        die('Error: Subject is required');
    }

    // Sanitize and validate message
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    if (empty($message)) {
        die('Error: Message is required');
    }

    // Email structure
    $to = "michalkrawczyk666@wp.pl";
    $headers = "From: $email\r\n";
    $email_subject = "New form submission: $subject";
    $email_body = "You have received a new message from $firstName $lastName.\n".
                    "Here are the details:\n\n".
                    "First Name: $firstName\n".
                    "Last Name: $lastName\n".
                    "Email: $email\n".
                    "Phone: $phone\n".
                    "Message:\n$message";

    // Use wordwrap() if lines are longer than 70 characters
    $email_body = wordwrap($email_body, 70, "\r\n");

    // Send the email
    if(!mail($to, $email_subject, $email_body, $headers)) {
        die('Error: Unable to send email. Please try again later.');
    }

    // Redirect to a thank you page
    header("Location: html/thank-you.html");
}
?> -->
