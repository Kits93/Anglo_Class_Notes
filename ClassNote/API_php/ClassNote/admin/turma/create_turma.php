<?php

include '../../conn.php';
include '../../cors.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => 0,
        'message' => 'Falha na requisição. Apenas POST é permitido.',
    ]);
    exit;
}

$data = json_decode(file_get_contents("php://input"));

try {
    $nome_turma = $data->nome_turma;
    $ensino = $data->ensino;
    $turno = $data->turno;

    $query = "INSERT INTO `turmas` (nome_turma, ensino, turno) VALUES(:nome_turma, :ensino, :turno)";

    $stmt = $conn->prepare($query);

    // Bind corretamente o valor do parâmetro
    $stmt->bindValue(':nome_turma', $nome_turma, PDO::PARAM_STR);
    $stmt->bindValue(':ensino', $ensino, PDO::PARAM_STR);
    $stmt->bindValue(':turno', $turno, PDO::PARAM_STR);

    // Execute a consulta e verifique se foi bem-sucedida
    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode([
            'success' => 1,
            'message' => 'Turma cadastrada com sucesso!'
        ]);
        exit;
    } else {
        // Se a execução falhar, retorne uma mensagem de erro
        echo json_encode([
            'success' => 0,
            'message' => 'Houve algum problema no cadastramento de dados da turma.'
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
