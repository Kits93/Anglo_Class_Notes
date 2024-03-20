<?php
include '../../conn.php';
include '../../cors.php';

$data = json_decode(file_get_contents("php://input"));

try {
    $select_query = "SELECT a.*, u.username, t.nome_turma, d.nome_disciplina, a.data_aula, a.conteudo
                     FROM aulas a
                     INNER JOIN usuarios u ON a.fk_id_usuario = u.id_usuario
                     INNER JOIN turmas t ON a.fk_id_turma = t.id_turma
                     INNER JOIN disciplinas d ON a.fk_id_disciplina = d.id_disciplina
                     WHERE a.id_aula = :id_aula";

    $stmt = $conn->prepare($select_query);
    $stmt->bindValue(":id_aula", $data, PDO::PARAM_INT);
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        echo json_encode([
            'success' => 1,
            'aula' => $row,
        ]);

    } else {
        echo json_encode([
            'success' => 0,
            'message' => 'Sem aulas...',
        ]);
    }
} catch (PDOException $e) {
    echo json_encode([
        'success' => 0,
        'message'=> $e->getMessage(),
    ]);
}
?>
