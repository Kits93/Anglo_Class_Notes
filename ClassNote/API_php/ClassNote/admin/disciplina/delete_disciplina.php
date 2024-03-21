<?php
include '../../cors.php';
include '../../conn.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
  die();
}

if (!isset($_GET['id_disciplina'])) {
  http_response_code(400);
  echo json_encode([
    'success' => 0,
    'message' => 'ID da disciplina não fornecido na URL'
  ]);
  exit;
}

$id = $_GET['id_disciplina'];

try {
  $delete = "DELETE FROM `disciplinas` WHERE id_disciplina=:id_disciplina";
  $stmt = $conn->prepare($delete);
  $stmt->bindValue(':id_disciplina', $id, PDO::PARAM_INT);
  $stmt->execute();

  if ($stmt->rowCount() > 0) {
    http_response_code(201);
    echo json_encode([
      'success' => 1,
      'message' => 'Dado excluído com sucesso'
    ]);
    exit();
  }

  echo json_encode([
    'success' => 0,
    'message' => 'Nenhum dado foi excluído'
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
