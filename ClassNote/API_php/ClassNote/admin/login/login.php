<?php
include '../../cors.php';
include '../../conn.php';
include './createJwt.php';

$data = json_decode(file_get_contents("php://input"));

try {

    $sql = "SELECT `id_usuario`, `username` , `role` FROM `usuarios` WHERE username=:username AND password=:password";
    $stmt = $conn->prepare($sql);
    $stmt->bindValue(':username', $data->username, PDO::PARAM_STR);
    $stmt->bindValue(':password', $data->password, PDO::PARAM_STR);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        $token = create_jwt($user['id_usuario'], $data->username, $data->password, $user['role']);

        echo json_encode([
            'success' => 1,
            'token' => $token,
            'usuario' => $user,
        ]);
        exit;
    }

    echo json_encode([
        'success' => 0,
        'message' => 'Falha ao realizar o login'
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