<?php
include '../../conn.php';
include '../../cors.php';

// if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
//     http_response_code(405);
//     echo json_encode([
//         'success' => 0,
//         'message' => 'Bad Reqeust Detected! Only get method is allowed',
//     ]);
//     exit;
// }

$data = json_decode(file_get_contents("php://input"));

try {
    $select_query = "SELECT * FROM `turmas` WHERE id_turma = :id_turma";

    $stmt = $conn->prepare($select_query);
    $stmt->bindValue(":id_turma", $data->fk_id_turma, PDO::PARAM_INT);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $row = [];
        $row = $stmt->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode([
            'success' => 1,
            'turmas' => $row,
        ]);

    } else {

        echo json_encode([
            'success' => 0,
            'turmas' => 'Sem Turmas...',
        ]);
    }
} catch (PDOException $e) {

    echo json_encode([
        'success' => 0,
        'message'=> $e->getMessage(),
    ]);

}
?>