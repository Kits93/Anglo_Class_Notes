<?php
include '../../cors.php';
include '../../conn.php';
include './validarJwt.php';

$data = json_decode(file_get_contents("php://input"));

try {

    $token = validar_jwt($data->token);

    if ($token) {
            echo json_encode([
                'success' => 1,
                'message' => 'Acesso autorizado'
            ]);
            exit;
        }

        echo json_encode([
            'success' => 0,
            'message' => 'Acesso negado'
        ]);
        exit;
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage()
    ]);
    exit;
}