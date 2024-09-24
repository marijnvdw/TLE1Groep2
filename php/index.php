<?php
session_start();

/** @var mysqli $db */

// Setup connection with database
require_once 'database.php';

$query = "SELECT * FROM aitestdata";

// Store the albums in an array
$ages = mysqli_query($db, $query)
or die('Error' . mysqli_error($db));

$age1 = mysqli_fetch_assoc($ages);
// Close the connection
mysqli_close($db);

?>