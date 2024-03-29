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
$id = $data->id_aula;

try {
    $put = "SELECT * FROM `aulas` WHERE id_aula=:id_aula";
    $stmt = $conn->prepare($put);
    $stmt->bindValue(':id_aula', $id, PDO::PARAM_INT);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {


        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        $fk_id_usuario = $data->id_usuario;
        $fk_id_disciplina = $data->id_disciplina;
        $conteudo = $data->conteudo;


        $update = "UPDATE `aulas` SET fk_id_disciplina = :fk_id_disciplina, fk_id_usuario = :fk_id_usuario, conteudo = :conteudo WHERE id_aula = :id_aula";

        $update_stmt = $conn->prepare($update);

        $update_stmt->bindValue(':fk_id_disciplina', $fk_id_disciplina, PDO::PARAM_INT);
        $update_stmt->bindValue(':fk_id_usuario', $fk_id_usuario, PDO::PARAM_INT);
        $update_stmt->bindValue(':conteudo', $conteudo, PDO::PARAM_STR);

        $update_stmt->bindValue(':id_aula', $id, PDO::PARAM_INT);

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