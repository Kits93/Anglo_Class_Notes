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
    $select_query = "SELECT * FROM `turmas`
    ORDER BY 
        CASE 
            WHEN ensino = 'Ensino Fundamental I' THEN 1
            WHEN ensino = 'Ensino Fundamental II' THEN 2
            WHEN ensino = 'Ensino Médio' THEN 3
            ELSE 4
        END,
        CAST(SUBSTRING(nome_turma, 1, 1) AS UNSIGNED),
        SUBSTRING(nome_turma, 4);    
    ";

    $stmt = $conn->prepare($select_query);

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