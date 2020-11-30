-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-11-2020 a las 17:29:17
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_cursa`
--
CREATE DATABASE IF NOT EXISTS `bd_cursa` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `bd_cursa`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_categoria`
--

CREATE TABLE `tbl_categoria` (
  `id_categoria` int(11) NOT NULL,
  `Sexo` enum('Masculino','Femenino') NOT NULL,
  `edad_min` int(3) NOT NULL,
  `edad_max` int(3) NOT NULL,
  `nombre_categoria` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_categoria`
--

INSERT INTO `tbl_categoria` (`id_categoria`, `Sexo`, `edad_min`, `edad_max`, `nombre_categoria`) VALUES
(1, 'Masculino', 0, 6, 'Bebes'),
(2, 'Masculino', 7, 12, 'Infantil'),
(3, 'Masculino', 13, 18, 'Junior'),
(4, 'Masculino', 19, 30, 'Promesa'),
(5, 'Masculino', 31, 45, 'Senior'),
(6, 'Masculino', 46, 60, 'Veteranos'),
(7, 'Masculino', 61, 999, 'Master'),
(8, 'Femenino', 0, 6, 'Bebes'),
(9, 'Femenino', 7, 12, 'Infantil'),
(10, 'Femenino', 13, 18, 'Junior'),
(11, 'Femenino', 19, 30, 'Promesa'),
(12, 'Femenino', 31, 45, 'Senior'),
(13, 'Femenino', 46, 60, 'Veteranas'),
(14, 'Femenino', 61, 999, 'Master');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_cursa`
--

CREATE TABLE `tbl_cursa` (
  `id_cursa` int(10) NOT NULL,
  `nombre_cursa` varchar(20) NOT NULL,
  `fecha_cursa` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_cursa`
--

INSERT INTO `tbl_cursa` (`id_cursa`, `nombre_cursa`, `fecha_cursa`) VALUES
(1, 'Cursa_NBA', '2020-12-31');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_cursaparticipante`
--

CREATE TABLE `tbl_cursaparticipante` (
  `id_CursaParticipante` int(10) NOT NULL,
  `DNI_participante` char(9) NOT NULL,
  `id_cursa` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_inscripcion`
--

CREATE TABLE `tbl_inscripcion` (
  `id_inscripcion` int(11) NOT NULL,
  `DNI_participante` char(9) NOT NULL,
  `id_cursa` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_inscripcion`
--

INSERT INTO `tbl_inscripcion` (`id_inscripcion`, `DNI_participante`, `id_cursa`, `id_categoria`) VALUES
(1, '49494095G', 1, 4),
(44, '49494095A', 1, 4),
(74, '47186464D', 1, 4),
(80, '49494095G', 1, 6),
(81, '49494095G', 1, 4),
(82, '49494095G', 1, 1),
(86, '24036555Z', 1, 7),
(87, '49494095G', 1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_participante`
--

CREATE TABLE `tbl_participante` (
  `DNI_participante` char(9) NOT NULL,
  `dorsal` int(10) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `primer_apellido` varchar(50) NOT NULL,
  `segundo_apellido` varchar(100) NOT NULL,
  `sexo` enum('Masculino','Femenino') NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `pagament` enum('Si','No') NOT NULL,
  `id_categoria` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_participante`
--

INSERT INTO `tbl_participante` (`DNI_participante`, `dorsal`, `nombre`, `primer_apellido`, `segundo_apellido`, `sexo`, `fecha_nacimiento`, `pagament`, `id_categoria`) VALUES
('24036555Z', 7, 'Diego', 'Morillas', 'Marruecos', 'Masculino', '1936-06-10', 'Si', 7),
('47186464D', 5, 'pablo', 'verdejo', 'hernandez', 'Masculino', '2000-10-30', 'Si', 4),
('49494095A', 3, 'Carlos', 'Rueda', 'Morillas', 'Masculino', '2000-02-01', 'Si', 4),
('49494095G', 8, 'Danny', 'Larrea', 'Jimenez', 'Masculino', '1990-10-09', 'Si', 4);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_categoria`
--
ALTER TABLE `tbl_categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `tbl_cursa`
--
ALTER TABLE `tbl_cursa`
  ADD PRIMARY KEY (`id_cursa`);

--
-- Indices de la tabla `tbl_cursaparticipante`
--
ALTER TABLE `tbl_cursaparticipante`
  ADD PRIMARY KEY (`id_CursaParticipante`),
  ADD KEY `fk_CursaParticipantes_participante` (`DNI_participante`),
  ADD KEY `fk_CursaParticipantes_cursa` (`id_cursa`);

--
-- Indices de la tabla `tbl_inscripcion`
--
ALTER TABLE `tbl_inscripcion`
  ADD PRIMARY KEY (`id_inscripcion`),
  ADD KEY `id_participante` (`DNI_participante`,`id_cursa`),
  ADD KEY `id_cursa` (`id_cursa`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `tbl_participante`
--
ALTER TABLE `tbl_participante`
  ADD PRIMARY KEY (`DNI_participante`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_categoria`
--
ALTER TABLE `tbl_categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT de la tabla `tbl_cursa`
--
ALTER TABLE `tbl_cursa`
  MODIFY `id_cursa` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tbl_cursaparticipante`
--
ALTER TABLE `tbl_cursaparticipante`
  MODIFY `id_CursaParticipante` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_inscripcion`
--
ALTER TABLE `tbl_inscripcion`
  MODIFY `id_inscripcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_cursaparticipante`
--
ALTER TABLE `tbl_cursaparticipante`
  ADD CONSTRAINT `fk_CursaParticipantes_cursa` FOREIGN KEY (`id_cursa`) REFERENCES `tbl_cursa` (`id_cursa`),
  ADD CONSTRAINT `fk_CursaParticipantes_participante` FOREIGN KEY (`DNI_participante`) REFERENCES `tbl_participante` (`DNI_participante`);

--
-- Filtros para la tabla `tbl_inscripcion`
--
ALTER TABLE `tbl_inscripcion`
  ADD CONSTRAINT `tbl_inscripcion_ibfk_1` FOREIGN KEY (`id_cursa`) REFERENCES `tbl_cursa` (`id_cursa`),
  ADD CONSTRAINT `tbl_inscripcion_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `tbl_categoria` (`id_categoria`);

--
-- Filtros para la tabla `tbl_participante`
--
ALTER TABLE `tbl_participante`
  ADD CONSTRAINT `tbl_participante_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `tbl_categoria` (`id_categoria`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
