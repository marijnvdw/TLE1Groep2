<?php
session_start();
header('Content-Type: application/json');

require_once 'database.php';

$url = mysqli_real_escape_string($db, $_POST['url']);
$query = "SELECT * FROM weblink WHERE link = '$url'";

$result = $db->query($query);
$responseInput = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $responseInput['link'] = $row["link"];
        $responseInput['score'] = $row["score"];
        $responseInput['response'] = $row["response"];
    }
    echo json_encode($responseInput);
} else {
    // Return an empty result or an error message in JSON format
    $responseInput['error'] = 'No results found';
    echo json_encode($responseInput);
}

mysqli_close($db);
?>