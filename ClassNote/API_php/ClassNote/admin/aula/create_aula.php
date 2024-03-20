<?php
include '../../cors.php';
include '../../conn.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method == "OPTIONS") {
    die();
}

// if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
//     http_response_code(405);
//     echo json_encode([
//         'success' => 0,
//         'message' => 'Falha na requisição!. Somente o método POST é permitido',
//     ]);
//     exit;
// }

$data = json_decode(file_get_contents("php://input"));


try {

    $num_aula = $data->num_aula;
    $id_usuario = $data->id_usuario;
    $id_disciplina = $data->id_disciplina;
    $id_turma = $data->id_turma;
    $data_aula = $data->data_aula;
    $conteudo = $data->conteudo;

    $insert = "INSERT INTO `aulas` (`num_aula`, `fk_id_usuario`, `fk_id_turma`, `fk_id_disciplina`, `data_aula`, `conteudo`) VALUES (:num_aula, :fk_id_usuario, :fk_id_turma, :fk_id_disciplina, :data_aula, :conteudo)";

    $insert_stmt = $conn->prepare($insert);

    $insert_stmt->bindValue(':num_aula', $num_aula, PDO::PARAM_INT);
    $insert_stmt->bindValue(':fk_id_usuario', $id_usuario, PDO::PARAM_INT);
    $insert_stmt->bindValue(':fk_id_turma', $id_turma, PDO::PARAM_INT);
    $insert_stmt->bindValue(':fk_id_disciplina', $id_disciplina, PDO::PARAM_INT);
    $insert_stmt->bindValue(':data_aula', $data_aula, PDO::PARAM_STR);
    $insert_stmt->bindValue(':conteudo', $conteudo, PDO::PARAM_STR);

    if ($insert_stmt->execute()) {
        http_response_code(201);
        echo json_encode([
            'success' => 1,
            'message' => 'Dado inserido com sucesso'
        ]);
        exit();
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