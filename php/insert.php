<?php
session_start();

/** @var mysqli $db */

// Setup connection with database
require_once 'database.php';

$score = $_GET['score'];
$response = $_GET['response'];

?>

<!DOCTYPE html>
<html lang="en">

<body>
    <?= $score ?>
    <br><br><br><br>
    <?= $response ?>
</body>

</html>