<?php
$errors = [];
$success = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $organization = htmlspecialchars($_POST['organization']);
    $email = htmlspecialchars($_POST['email']);
    $contact = htmlspecialchars($_POST['contact']);
    $message = htmlspecialchars($_POST['message']);

    // Validate inputs
    if (empty($name)) {
        $errors['name'] = "Name is required";
    }

    if (empty($organization)) {
        $errors['organization'] = "Organization name is required";
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = "Valid email is required";
    }

    if (empty($contact)) {
        $errors['contact'] = "Contact number is required";
    }

    if (empty($message)) {
        $errors['message'] = "Message is required";
    }

    // If no errors, process the form
    if (empty($errors)) {
        // Process the form data (e.g., send email, save to database)
        // For this example, we'll just return a success message
        $success = true;
        $response = ["success" => true, "message" => "Form submitted successfully"];
        echo json_encode($response);
        exit;
    } else {
        $response = ["success" => false, "errors" => $errors];
        echo json_encode($response);
        exit;
    }
} else {
    $response = ["success" => false, "message" => "Invalid request method"];
    echo json_encode($response);
    exit;
}
?>
