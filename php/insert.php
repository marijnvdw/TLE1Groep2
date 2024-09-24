<?php
session_start();

/** @var mysqli $db */

// Setup connection with database
require_once 'database.php';

$query = "SELECT * FROM aitestdata WHERE aiId = '2'";

// Store the albums in an array
$datas = mysqli_query($db, $query)
or die('Error' . mysqli_error($db));

$data = mysqli_fetch_assoc($datas);
// Close the connection
mysqli_close($db);

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
</head>
<body>
<?= implode("", $data)?>
</body>
</html>