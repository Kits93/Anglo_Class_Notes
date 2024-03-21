-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 01/03/2024 às 14:58
-- Versão do servidor: 8.0.36
-- Versão do PHP: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `class_note`
--
CREATE DATABASE IF NOT EXISTS `class_note` DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci;
USE `class_note`;

-- --------------------------------------------------------

--
-- Estrutura para tabela `aulas`
--

DROP TABLE IF EXISTS `aulas`;
CREATE TABLE IF NOT EXISTS `aulas` (
  `id_aula` int NOT NULL AUTO_INCREMENT,
  `num_aula` int NOT NULL,
  `fk_id_usuario` int DEFAULT NULL,
  `fk_id_turma` int DEFAULT NULL,
  `fk_id_disciplina` int DEFAULT NULL,
  `data_aula` date NOT NULL,
  `conteudo` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_aula`),
  KEY `fk_id_usuario` (`fk_id_usuario`),
  KEY `fk_id_turma` (`fk_id_turma`),
  KEY `fk_id_disciplina` (`fk_id_disciplina`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `aulas`
--

INSERT INTO `aulas` (`id_aula`, `num_aula`, `fk_id_usuario`, `fk_id_turma`, `fk_id_disciplina`, `data_aula`, `conteudo`) VALUES
(1, 2, 2, 13, 8, '2024-03-01', NULL),
(2, 2, 3, 26, 3, '2024-02-26', NULL),
(3, 3, 4, 26, 5, '2024-02-26', NULL),
(4, 4, 3, 26, 1, '2024-02-26', NULL),
(5, 5, 2, 26, 7, '2024-02-26', NULL),
(6, 6, 3, 26, 3, '2024-02-26', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `disciplinas`
--

DROP TABLE IF EXISTS `disciplinas`;
CREATE TABLE IF NOT EXISTS `disciplinas` (
  `id_disciplina` int NOT NULL AUTO_INCREMENT,
  `nome_disciplina` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_disciplina`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `disciplinas`
--

INSERT INTO `disciplinas` (`id_disciplina`, `nome_disciplina`) VALUES
(1, 'Português'),
(2, 'Matemática'),
(3, 'História'),
(4, 'Geografia'),
(5, 'Ciências'),
(6, 'Inglês'),
(7, 'Artes'),
(8, 'Educação Física');

-- --------------------------------------------------------

--
-- Estrutura para tabela `turmas`
--

DROP TABLE IF EXISTS `turmas`;
CREATE TABLE IF NOT EXISTS `turmas` (
  `id_turma` int NOT NULL AUTO_INCREMENT,
  `nome_turma` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `ensino` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `turno` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id_turma`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `turmas`
--

INSERT INTO `turmas` (`id_turma`, `nome_turma`, `ensino`, `turno`) VALUES
(23, '1º Ano', 'Ensino Médio', 'Tarde'),
(22, '1º Ano', 'Ensino Médio', 'Manhã'),
(21, '9º ano', 'Ensino Fundamental II', 'Tarde'),
(20, '8º ano', 'Ensino Fundamental II', 'Tarde'),
(19, '7º ano', 'Ensino Fundamental II', 'Tarde'),
(18, '6º ano', 'Ensino Fundamental II', 'Tarde'),
(17, '5º ano', 'Ensino Fundamental I', 'Tarde'),
(16, '4º ano', 'Ensino Fundamental I', 'Tarde'),
(15, '3º ano', 'Ensino Fundamental I', 'Tarde'),
(14, '2º ano', 'Ensino Fundamental I', 'Tarde'),
(13, '1º ano', 'Ensino Fundamental I', 'Tarde'),
(24, '2º Ano', 'Ensino Médio', 'Manhã'),
(25, '2º Ano', 'Ensino Médio', 'Tarde'),
(26, '3º Ano', 'Ensino Médio', 'Manhã'),
(27, '3º Ano', 'Ensino Médio', 'Tarde');

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `username` varchar(70) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_usuario`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `username`, `email`, `password`, `role`) VALUES
(2, 'João', 'joao@gmail.com', '123', 'admin'),
(3, 'Victor', 'victor@gmail.com', '123', 'professor'),
(4, 'Marins', 'marins@gmail.com', '123', 'professor');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
