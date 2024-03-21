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
$id = $data->id_disciplina;

try {
  $put = "SELECT * FROM `disciplinas` WHERE id_disciplina=:id_disciplina";
  $stmt = $conn->prepare($put);
  $stmt->bindValue(':id_disciplina', $id, PDO::PARAM_INT);
  $stmt->execute();

  if ($stmt->rowCount() > 0) {


    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    $nome_disciplina = $data->nome_disciplina;

    $update = "UPDATE `disciplinas` SET nome_disciplina = :nome_disciplina WHERE id_disciplina = :id_disciplina";

    $update_stmt = $conn->prepare($update);

    $update_stmt->bindValue(':nome_disciplina', $nome_disciplina, PDO::PARAM_STR);

    $update_stmt->bindValue(':id_disciplina', $id, PDO::PARAM_INT);

    if ($update_stmt->execute()) {
      http_response_code(201);
      echo json_encode([
        'success' => 1,
        'message' => 'Dado alterado com sucesso'
      ]);
      exit();
    }

    echo json_encode([
      'success' => 0,
      'message' => 'Há algum problema na alteração de dados'
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