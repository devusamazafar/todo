<?php
require "conn.php";

$query = "SELECT * FROM `todo`";

$result = $conn->query($query)->fetch_all(MYSQLI_ASSOC);



header("Content-type: application/json");
http_response_code(200);
echo json_encode($result);