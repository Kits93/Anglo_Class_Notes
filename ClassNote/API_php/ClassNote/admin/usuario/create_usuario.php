<?php
include '../../cors.php';
include '../../conn.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}

// if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
//     http_response_code(405);
//     echo json_encode([
//         'success' => 0,
//         'message' => 'Falha na requisição!. Somente o método POST é permitido',
//     ]);
//     exit;
// }

$data = json_decode(file_get_contents("php://input"));


try {

  $username = $data->username;
  $email = $data->email;
  $password = $data->password;
  $role = $data->role;


    $insert = "INSERT INTO `usuarios` (`username`, `email`, `password`, `role`) VALUES (:username, :email, :password, :role)";

    $insert_stmt = $conn->prepare($insert);

    $insert_stmt->bindValue(':username', $username, PDO::PARAM_STR);
    $insert_stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $insert_stmt->bindValue(':password', $password, PDO::PARAM_STR);
    $insert_stmt->bindValue(':role', $role, PDO::PARAM_STR);


    if ($insert_stmt->execute()) {
        http_response_code(201);
        echo json_encode([
            'success' => 1,
            'message' => 'Usuário cadastrado com sucesso!'
        ]);
        exit();
    }

    echo json_encode([
        'success' => 0,
        'message' => 'Há algum problema no cadastramento do usuário.'
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

?>