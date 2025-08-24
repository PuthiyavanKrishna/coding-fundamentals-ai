<?php
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $query = $data->query;
    
    // Simple AI response (replace with actual AI call)
    $response = ['answer' => "You asked: $query. This is a placeholder response."];
    echo json_encode($response);
} else {
    echo json_encode(['error' => 'Invalid request']);
}
?>