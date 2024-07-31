<?php
$servername = "localhost";
$username = "root"; // Replace with your database username
$password = ""; // Replace with your database password
$dbname = "historical"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the JSON data from the request
$data = json_decode(file_get_contents("php://input"), true);

if (!empty($data)) {
    foreach ($data as $item) {
        $name = $item['name'];
        $price = $item['price'];
        $timestamp = date("Y-m-d H:i:s");

        $sql = "INSERT INTO orders (product_name, price, order_timestamp) VALUES ('$name', '$price', '$timestamp')";

        if ($conn->query($sql) !== TRUE) {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
    echo "Order placed successfully!";
} else {
    echo "No data received.";
}

$conn->close();
?>
