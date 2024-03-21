<?php
date_default_timezone_set('America/Sao_Paulo');

$host = "localhost"; // endereço do servidor
$database = "class_note"; // nome do banco de dados
$usuario = "root"; // usuário do MySQL
$senha = ""; // senha do MySQL

// Cria a conexão
try {
	$conn = new PDO('mysql:host=' . $host . ';dbname=' . $database, $usuario, $senha);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
	echo "Connection error " . $e->getMessage();
	exit;
}
?>