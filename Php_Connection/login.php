<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);

    if (!empty($username) && !empty($password)) {
        $host = "localhost";
        $dbusername = "root";
        $dbpassword = "";
        $dbname = "stockplus";

        $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

        if (mysqli_connect_error()) {
            die('Connect Error (' . mysqli_connect_errno() . ') ' . mysqli_connect_error());
        }

        // Check if the username and password are correct
        $checkSql = "SELECT * FROM login WHERE Username = ? AND Password = ?";
        $checkStmt = $conn->prepare($checkSql);
        $checkStmt->bind_param("ss", $username, $password);
        $checkStmt->execute();
        $checkStmt->store_result();

        if ($checkStmt->num_rows > 0) {
            // User authentication succeeded, you can perform any actions you need here
            
            header('Location:../Home.html');
            // You can add code to set session variables or perform other actions.
        } else {
            // User authentication failed, show an alert message and use JavaScript to redirect back to index.html
            echo '<script>alert("Invalid User and Pass!");</script>';
            echo '<script>window.location.href = "../index.html";</script>';
            exit; // Stop further execution of PHP code
        }

        $checkStmt->close();
        $conn->close();
    } else {
        echo "Username and password should not be empty";
    }
}
?>
