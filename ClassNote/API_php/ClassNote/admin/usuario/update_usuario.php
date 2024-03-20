<?php
include '../../cors.php';
include '../../conn.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
  die();
}

if ($_SERVER['REQUEST_METHOD'] !== 'PUT') {
  http_response_code(405);
  echo json_encode([
    'success' => 0,
    'message' => 'Falha na requisição!. Somente o método PUT é permitido',
  ]);
  exit;
}

$data = json_decode(file_get_contents("php://input"));
$id = $data->id_usuario;

try {
  $put = "SELECT * FROM `usuarios` WHERE id_usuario=:id_usuario";
  $stmt = $conn->prepare($put);
  $stmt->bindValue(':id_usuario', $id, PDO::PARAM_INT);
  $stmt->execute();

  if ($stmt->rowCount() > 0) {


    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    $username = $data->username;
    $email = $data->email;
    $role = $data->role;

    $update = "UPDATE `usuarios` SET username = :username, email = :email, role = :role WHERE id_usuario = :id_usuario";

    $update_stmt = $conn->prepare($update);

    $update_stmt->bindValue(':username', $username, PDO::PARAM_STR);
    $update_stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $update_stmt->bindValue(':role', $role, PDO::PARAM_STR);

    $update_stmt->bindValue(':id_usuario', $id, PDO::PARAM_INT);

    if ($update_stmt->execute()) {
      http_response_code(201);
      echo json_encode([
        'success' => 1,
        'message' => 'Dados do usuário alterados com sucesso!'
      ]);
      exit();
    }

    echo json_encode([
      'success' => 0,
      'message' => 'Houve algum problema na alteração dos dados do usuário.'
    ]);
    exit;

  }
} catch (PDOException $e) {
  http_response_code(500);
  echo json_encode([
    'success' => 0,
    'message' => $e->getMessage()
  ]);
  exit;
}

?>