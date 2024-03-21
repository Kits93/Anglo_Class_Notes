<?php
include '../../cors.php';
include '../../conn.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
  die();
}

$id = $_GET['id_usuario'];

try {

  $select_role = "SELECT * FROM usuarios WHERE id_usuario=:id_usuario";
  $stmt_user = $conn->prepare($select_role);
  $stmt_user->bindValue(':id_usuario', $id, PDO::PARAM_INT);
  $stmt_user->execute();

  $row = $stmt_user->fetch();

  if ($row['role'] == 'admin') {

    $select_admin = "SELECT * FROM usuarios WHERE role='admin' AND id_usuario != :id_usuario OR id_usuario = :id_usuario";
    $stmt_role = $conn->prepare($select_admin);
    $stmt_role->bindValue(':id_usuario', $id, PDO::PARAM_INT);
    $stmt_role->execute();
    $row_role = $stmt_role->rowCount();


    if ($row_role > 1) {

      $delete = "DELETE FROM usuarios WHERE id_usuario=:id_usuario";
      $stmt = $conn->prepare($delete);
      $stmt->bindValue(':id_usuario', $id, PDO::PARAM_INT);
      $stmt->execute();

      if ($stmt->rowCount() > 0) {
        http_response_code(201);
        echo json_encode([
          'success' => 1,
          'message' => 'Usuário excluído com sucesso!'
        ]);
        exit();
      } else {
        echo json_encode([
          'success' => 0,
          'message' => 'Nenhum usuário foi excluído'
        ]);
        exit;
      }

    } else {
      echo json_encode([
        'success' => 2,
        'message' => 'Usuário é o único administrador no sistema. Exclusão não efetuada.'
      ]);
      exit;
    }
  } else {

    $delete = "DELETE FROM usuarios WHERE id_usuario=:id_usuario";
    $stmt = $conn->prepare($delete);
    $stmt->bindValue(':id_usuario', $id, PDO::PARAM_INT);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
      http_response_code(201);
      echo json_encode([
        'success' => 1,
        'message' => 'Dado excluído com sucesso'
      ]);
      exit();
    } else {
      echo json_encode([
        'success' => 0,
        'message' => 'Nenhum dado foi excluído'
      ]);
      exit;
    }
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