<?php
include '../../conn.php';
include '../../cors.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
  http_response_code(405);
  echo json_encode([
    'success' => 0,
    'message' => 'Bad Reqeust Detected! Only get method is allowed',
  ]);
  exit;
}

try {
  $select_query = "SELECT * FROM `disciplinas`";

  $stmt = $conn->prepare($select_query);

  $stmt->execute();

  if ($stmt->rowCount() > 0) {
    $row = [];
    $row = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
      'success' => 1,
      'disciplinas' => $row,
    ]);

  } else {

    echo json_encode([
      'success' => 0,
      'disciplinas' => 'Sem disciplinas...',
    ]);
  }
} catch (PDOException $e) {

  echo json_encode([
    'success' => 0,
    'message' => $e->getMessage(),
  ]);

}
?>