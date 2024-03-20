<?php
include '../../conn.php';
include '../../cors.php';

$data = json_decode(file_get_contents("php://input"));

$ensino = $data->ensino;

$limit;
if ($ensino === 'Ensino Médio') {
    $limit = 7;
} else {
    $limit = 6;
}

try {
    $aulas = []; // Array para armazenar todas as aulas

    for ($num_aula = 1; $num_aula <= $limit; $num_aula++) {
        $select_query = "SELECT a.*, u.username, d.nome_disciplina, t.nome_turma, t.ensino, a.fk_id_disciplina
        FROM aulas a
        INNER JOIN usuarios u ON a.fk_id_usuario = u.id_usuario
        INNER JOIN disciplinas d ON a.fk_id_disciplina = d.id_disciplina
        INNER JOIN turmas t ON a.fk_id_turma = t.id_turma
        WHERE a.fk_id_turma = :fk_id_turma AND a.num_aula = :num_aula AND a.data_aula = :data_aula
        ";

        $stmt = $conn->prepare($select_query);
        $stmt->bindValue(':fk_id_turma', $data->fk_id_turma, PDO::PARAM_INT);
        $stmt->bindValue(':num_aula', $num_aula, PDO::PARAM_INT);
        $stmt->bindValue(':data_aula', $data->data_selecionada, PDO::PARAM_STR);
        $stmt->execute();

        $row = $stmt->fetchAll(PDO::FETCH_ASSOC);


        if ($stmt->rowCount() > 0) {
            // Se houver resultados, adicione as aulas ao array de aulas
            $aulas = array_merge($aulas, $row);
        } else {
            // Se não houver resultados, adicione uma mensagem indicando que a aula não foi cadastrada
            $aula_nao_cadastrada = array(
                'id_aula' => null,
                'num_aula' => $num_aula,
                'nome_disciplina' => 'Aula não cadastrada',
                'username' => 'N/A',
                'conteudo' => 'N/A'
            );
            array_push($aulas, $aula_nao_cadastrada);
        }
    }

    // Envie a resposta JSON contendo todas as aulas (incluindo as não cadastradas)
    echo json_encode([
        'success' => 1,
        'aulas' => $aulas,
    ]);

} catch (PDOException $e) {
    // Em caso de erro, envie uma mensagem de erro
    echo json_encode([
        'success' => 0,
        'message' => $e->getMessage(),
    ]);
}
?>