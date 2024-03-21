<?php

    include '../../conn.php';
    include '../../cors.php';

    $method = $_SERVER['REQUEST_METHOD'];

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode([
            'succes' => 0,
            'message' => 'Falha na requisição. Apenas POST é permitido.',
        ]);
        exit;
    }
    
    $dados = json_decode(file_get_contents("php://input"));

    try{
        $nome_disciplina = htmlspecialchars(trim($dados->nomeDisciplina));

        $query = "INSERT INTO `disciplina` (nomeDisciplina) VALUES(':nomeDisciplina')";

        $stmt = $conn->prepare($query);

        $stmt->bindValue(':nomeDisciplina', $nome_disciplina, PDO::PARAM_STR);

        if ($stmt->execute()) {
            http_response_code(201);
            echo json_encode([
                'success' => 1,
                'message' => 'dados inseridos com sucesso!'
            ]);
            exit;
        }

        echo json_encode([
            'success' => 0,
            'message' => 'Há algum problema na inserção de dados'
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