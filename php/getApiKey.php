<?php
require_once 'globals.php';
// Function to generate a random nonce
function generateNonce($length = 16) {
    return random_bytes($length); // Generate a nonce of raw bytes, not hex
}

$encryptionKey = random_bytes(16); // Generate a secure 16-byte encryption key
$apiKey = getApiKey();

// Function to encrypt an API key with a nonce
function encryptApiKey($apiKey, $encryptionKey) {
    // Generate a nonce
    $nonce = generateNonce(); // Generates a 16-byte nonce
    
    // Combine the nonce with the API key
    $dataToEncrypt = $nonce . ':' . $apiKey; // Using colon as a separator

    // Encrypt the combined string using AES-128-CBC
    $encryptedData = openssl_encrypt($dataToEncrypt, 'aes-128-cbc', $encryptionKey, OPENSSL_RAW_DATA, $nonce);
    
    // Return the nonce and encrypted data (both as base64 to handle binary data)
    return [
        'nonce' => base64_encode($nonce), // Encode nonce to safely pass as a string
        'encryptedApiKey' => base64_encode($encryptedData) // Encode encrypted data
    ];
}

// Function to decrypt the API key
function decryptApiKey($encryptedData, $nonce, $encryptionKey) {
    // Decode the base64-encoded nonce and encrypted data
    $nonce = base64_decode($nonce);
    $encryptedData = base64_decode($encryptedData);
    
    // Decrypt the data
    $decryptedData = openssl_decrypt($encryptedData, 'aes-128-cbc', $encryptionKey, OPENSSL_RAW_DATA, $nonce);
    
    // Split the decrypted data to get the API key
    list($nonceFromData, $apiKey) = explode(':', $decryptedData, 2);
    
    return $apiKey;
}

// Example usage
$encrypted = encryptApiKey($apiKey, $encryptionKey);
echo "Nonce: " . $encrypted['nonce'] . "\n";
echo "Encrypted API Key: " . $encrypted['encryptedApiKey'] . "\n";

// Decrypt the API key
$decryptedApiKey = decryptApiKey($encrypted['encryptedApiKey'], $encrypted['nonce'], $encryptionKey);
echo "Decrypted API Key: " . $decryptedApiKey . "\n";
?>
