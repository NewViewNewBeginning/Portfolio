<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Sanitize input data
    $name = htmlspecialchars(trim($_POST['name']));
    $surname = htmlspecialchars(trim($_POST['surname']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Initialize an array to hold error messages
    $errors = [];

    // Validate name
    if (empty($name)) {
        $errors[] = "Name is required.";
    }

    // Validate surname
    if (empty($surname)) {
        $errors[] = "Surname is required.";
    }

    // Validate subject
    if (empty($subject)) {
        $errors[] = "Subject is required.";
    }

    // Validate email
    if (empty($email)) {
        $errors[] = "Email is required.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format.";
    }

    // Validate message
    if (empty($message)) {
        $errors[] = "Message is required.";
    }

    // Check if there were validation errors
    if (!empty($errors)) {
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    } else {
        // For simplicity, this code just prints the data.
        // In a real application, you might want to email the data, save it to a database, etc.
        echo "Name: $name<br>";
        echo "Surname: $surname<br>";
        echo "Subject: $subject<br>";
        echo "Email: $email<br>";
        echo "Message: $message<br>";

        // Optional: Send an email, save to a database, etc.
    }

} else {
    // Redirect to the form page if the form was not submitted
    header("Location: index.html");
    exit();
}
?>
