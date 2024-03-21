<?php
include '../../conn.php';
include '../../cors.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}

// Verifica se o parâmetro id_user foi enviado na URL
// if (!isset($_GET['id_user'])) {
//     http_response_code(400); // Bad Request
//     echo json_encode([
//         'success' => 0,
//         'message' => 'ID do usuário não fornecido na URL',
//     ]);
//     exit;
// }

// Obtém o ID do usuário da URL
$id_user = json_decode(file_get_contents("php://input"));

try {
    $select_query = "SELECT id_usuario, username FROM `usuarios` WHERE id_usuario = :id_usuario";
    $stmt = $conn->prepare($select_query);
    $stmt->bindValue(':id_usuario', $id_user, PDO::PARAM_INT);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        echo json_encode([
            'success' => 1,
            'usuario' => $row,
        ]);

    } else {
        echo json_encode([
            'success' => 0,
            'message' => 'Usuário não encontrado',
        ]);
    }
} catch (PDOException $e) {
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage(),
    ]);
}
?>