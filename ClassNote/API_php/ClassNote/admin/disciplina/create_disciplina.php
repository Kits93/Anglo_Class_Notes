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
    $nome_disciplina = $data->nome_disciplina; // Corrigido para obter corretamente o nome da disciplina

    $query = "INSERT INTO `disciplinas` (nome_disciplina) VALUES(:nome_disciplina)";

    $stmt = $conn->prepare($query);

    // Bind corretamente o valor do parâmetro
    $stmt->bindValue(':nome_disciplina', $nome_disciplina, PDO::PARAM_STR);

    // Execute a consulta e verifique se foi bem-sucedida
    if ($stmt->execute()) {
        http_response_code(201);
        echo json_encode([
            'success' => 1,
            'message' => 'dados inseridos com sucesso!'
        ]);
        exit;
    } else {
        // Se a execução falhar, retorne uma mensagem de erro
        echo json_encode([
            'success' => 0,
            'message' => 'Há algum problema na inserção de dados'
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
