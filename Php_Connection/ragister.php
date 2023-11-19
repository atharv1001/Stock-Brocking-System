<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
    $address = filter_input(INPUT_POST, 'address', FILTER_SANITIZE_STRING);
    $full_name = filter_input(INPUT_POST, 'full_name', FILTER_SANITIZE_STRING);
    $phone_number = filter_input(INPUT_POST, 'phone_number', FILTER_SANITIZE_STRING);

    if (!empty($username) && !empty($password)) {
        $host = "localhost";
        $dbusername = "root";
        $dbpassword = "";
        $dbname = "stockplus";

        $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

        if (mysqli_connect_error()) {
            die('Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
        }

        // Insert the data into the database
        $insertSql = "INSERT INTO login (Username, Password, address, full_name, phone_number) VALUES (?, ?, ?, ?, ?)";
        $insertStmt = $conn->prepare($insertSql);
        $insertStmt->bind_param("sssss", $username, $password, $address, $full_name, $phone_number);

        if ($insertStmt->execute()) {
            // Data was successfully stored, show an alert and then redirect
            echo '<script>alert("You have successfully registered.");</script>';
            echo '<script>window.location.href = "../index.html";</script>';
            // Terminate the script to prevent further execution
            exit();
        } else {
            // Data insertion failed, show an error message
            echo "Data insertion failed. Please try again.";
        }

        $insertStmt->close();
        $conn->close();
    } else {
        echo "Username and password should not be empty";
    }
}
?>
