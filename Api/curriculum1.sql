-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-02-2024 a las 22:34:00
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `curriculum1`
--
CREATE DATABASE IF NOT EXISTS `curriculum1` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `curriculum1`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id` int(11) NOT NULL,
  `nombre` text DEFAULT NULL,
  `apellidos` text DEFAULT NULL,
  `correo_electronico` varchar(50) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `codigo_postal` varchar(11) DEFAULT NULL,
  `localidad` text DEFAULT NULL,
  `titulo` text DEFAULT NULL,
  `fecha_nacimiento` varchar(20) DEFAULT NULL,
  `lugar_nacimiento` text DEFAULT NULL,
  `genero` text DEFAULT NULL,
  `nacionalidad` text DEFAULT NULL,
  `estado_civil` text DEFAULT NULL,
  `linkedin` varchar(20) DEFAULT NULL,
  `perfil` text DEFAULT NULL,
  `formacion` text DEFAULT NULL,
  `formacion1` text DEFAULT NULL,
  `formacion2` text DEFAULT NULL,
  `formacion3` text DEFAULT NULL,
  `formacion4` text DEFAULT NULL,
  `formacion5` text DEFAULT NULL,
  `institucion` text DEFAULT NULL,
  `institiucion1` text DEFAULT NULL,
  `institucion2` text DEFAULT NULL,
  `institucion3` text DEFAULT NULL,
  `institucion4` text DEFAULT NULL,
  `institucion5` text DEFAULT NULL,
  `localidad_inst` text DEFAULT NULL,
  `localidad_inst1` text DEFAULT NULL,
  `localidad_inst2` text DEFAULT NULL,
  `localidad_inst3` text DEFAULT NULL,
  `localidad_inst4` text DEFAULT NULL,
  `localidad_inst5` text DEFAULT NULL,
  `fech_inic_inst` varchar(100) DEFAULT NULL,
  `fech_inic_inst1` varchar(100) DEFAULT NULL,
  `fech_inic_inst2` varchar(100) DEFAULT NULL,
  `fech_inic_inst3` varchar(100) DEFAULT NULL,
  `fech_inic_inst4` varchar(100) DEFAULT NULL,
  `fech_inic_inst5` varchar(100) DEFAULT NULL,
  `fech_fin_inst` varchar(100) DEFAULT NULL,
  `fech_fin_inst1` varchar(100) DEFAULT NULL,
  `fech_fin_inst2` varchar(100) DEFAULT NULL,
  `fech_fin_inst3` varchar(100) DEFAULT NULL,
  `fech_fin_inst4` varchar(100) DEFAULT NULL,
  `fech_fin_inst5` varchar(100) DEFAULT NULL,
  `desc_inst` text DEFAULT NULL,
  `desc_inst1` text DEFAULT NULL,
  `desc_inst2` text DEFAULT NULL,
  `desc_inst3` text DEFAULT NULL,
  `desc_inst4` text DEFAULT NULL,
  `desc_inst5` text DEFAULT NULL,
  `puesto` text DEFAULT NULL,
  `puesto1` text DEFAULT NULL,
  `puesto2` text DEFAULT NULL,
  `puesto3` text DEFAULT NULL,
  `puesto4` text DEFAULT NULL,
  `puesto5` text DEFAULT NULL,
  `empleador` text DEFAULT NULL,
  `empleador1` text DEFAULT NULL,
  `empleador2` text DEFAULT NULL,
  `empleador3` text DEFAULT NULL,
  `empleador4` text DEFAULT NULL,
  `empleador5` text DEFAULT NULL,
  `localidad_exp` text DEFAULT NULL,
  `localidad_exp1` text DEFAULT NULL,
  `localidad_exp2` text DEFAULT NULL,
  `localidad_exp3` text DEFAULT NULL,
  `localidad_exp4` text DEFAULT NULL,
  `localidad_exp5` text DEFAULT NULL,
  `fech_inic_exp` varchar(100) DEFAULT NULL,
  `fech_inic_exp1` varchar(100) DEFAULT NULL,
  `fech_inic_exp2` varchar(100) DEFAULT NULL,
  `fech_inic_exp3` varchar(100) DEFAULT NULL,
  `fech_inic_exp4` varchar(100) DEFAULT NULL,
  `fech_inic_exp5` varchar(100) DEFAULT NULL,
  `fech_fin_exp` varchar(100) DEFAULT NULL,
  `fech_fin_exp1` varchar(100) DEFAULT NULL,
  `fech_fin_exp2` varchar(100) DEFAULT NULL,
  `fech_fin_exp3` varchar(100) DEFAULT NULL,
  `fech_fin_exp4` varchar(100) DEFAULT NULL,
  `fech_fin_exp5` varchar(100) DEFAULT NULL,
  `desc_exp` text DEFAULT NULL,
  `desc_exp1` text DEFAULT NULL,
  `desc_exp2` text DEFAULT NULL,
  `desc_exp3` text DEFAULT NULL,
  `desc_exp4` text DEFAULT NULL,
  `desc_exp5` text DEFAULT NULL,
  `idioma` text DEFAULT NULL,
  `idioma1` text DEFAULT NULL,
  `idioma2` text DEFAULT NULL,
  `idioma3` text DEFAULT NULL,
  `idioma4` text DEFAULT NULL,
  `idioma5` text DEFAULT NULL,
  `nivel_idioma` text DEFAULT NULL,
  `nivel_idioma1` text DEFAULT NULL,
  `nivel_idioma2` text DEFAULT NULL,
  `nivel_idioma3` text DEFAULT NULL,
  `nivel_idioma4` text DEFAULT NULL,
  `nivel_idioma5` text DEFAULT NULL,
  `pasatiempo` text DEFAULT NULL,
  `pasatiempo1` text DEFAULT NULL,
  `pasatiempo2` text DEFAULT NULL,
  `pasatiempo3` text DEFAULT NULL,
  `pasatiempo4` text DEFAULT NULL,
  `pasatiempo5` text DEFAULT NULL,
  `curso` text DEFAULT NULL,
  `curso1` text DEFAULT NULL,
  `curso2` text DEFAULT NULL,
  `curso3` text DEFAULT NULL,
  `curso4` text DEFAULT NULL,
  `curso5` text DEFAULT NULL,
  `periodo` varchar(100) DEFAULT NULL,
  `periodo1` varchar(100) DEFAULT NULL,
  `periodo2` varchar(100) DEFAULT NULL,
  `periodo3` varchar(100) DEFAULT NULL,
  `periodo4` varchar(100) DEFAULT NULL,
  `periodo5` varchar(100) DEFAULT NULL,
  `desc_curso` text DEFAULT NULL,
  `desc_curso1` text DEFAULT NULL,
  `desc_curso2` text DEFAULT NULL,
  `desc_curso3` text DEFAULT NULL,
  `desc_curso4` text DEFAULT NULL,
  `desc_curso5` text DEFAULT NULL,
  `aptitud` text DEFAULT NULL,
  `aptitud1` text DEFAULT NULL,
  `aptitud2` text DEFAULT NULL,
  `aptitud3` text DEFAULT NULL,
  `aptitud4` text DEFAULT NULL,
  `aptitud5` text DEFAULT NULL,
  `nombre_ref` text DEFAULT NULL,
  `nombre_ref1` text DEFAULT NULL,
  `nombre_ref2` text DEFAULT NULL,
  `nombre_ref3` text DEFAULT NULL,
  `nombre_ref4` text DEFAULT NULL,
  `nombre_ref5` text DEFAULT NULL,
  `organizacion_ref` text DEFAULT NULL,
  `organizacion_ref1` text DEFAULT NULL,
  `organizacion_ref2` text DEFAULT NULL,
  `organizacion_ref3` text DEFAULT NULL,
  `organizacion_ref4` text DEFAULT NULL,
  `organizacion_ref5` text DEFAULT NULL,
  `local_ref` text DEFAULT NULL,
  `local_ref1` text DEFAULT NULL,
  `local_ref2` text DEFAULT NULL,
  `local_ref3` text DEFAULT NULL,
  `local_ref4` text DEFAULT NULL,
  `local_ref5` text DEFAULT NULL,
  `telefono_ref` varchar(20) DEFAULT NULL,
  `telefono_ref1` varchar(15) DEFAULT NULL,
  `telefono_ref2` varchar(15) DEFAULT NULL,
  `telefono_ref3` varchar(15) DEFAULT NULL,
  `telefono_ref4` varchar(15) DEFAULT NULL,
  `telefono_ref5` varchar(15) DEFAULT NULL,
  `correo_ref` varchar(50) DEFAULT NULL,
  `correo_ref1` varchar(50) DEFAULT NULL,
  `correo_ref2` varchar(50) DEFAULT NULL,
  `correo_ref3` varchar(50) DEFAULT NULL,
  `correo_ref4` varchar(50) DEFAULT NULL,
  `correo_ref5` varchar(50) DEFAULT NULL,
  `certificado` text DEFAULT NULL,
  `certificado1` text DEFAULT NULL,
  `certificado2` text DEFAULT NULL,
  `certificado3` text DEFAULT NULL,
  `certificado4` text DEFAULT NULL,
  `certificado5` text DEFAULT NULL,
  `periodo_cert` varchar(100) DEFAULT NULL,
  `periodo_cert1` varchar(100) DEFAULT NULL,
  `periodo_cert2` varchar(100) DEFAULT NULL,
  `periodo_cert3` varchar(100) DEFAULT NULL,
  `periodo_cert4` varchar(100) DEFAULT NULL,
  `periodo_cert5` varchar(100) DEFAULT NULL,
  `desc_cert` text DEFAULT NULL,
  `desc_cert1` text DEFAULT NULL,
  `desc_cert2` text DEFAULT NULL,
  `desc_cert3` text DEFAULT NULL,
  `desc_cert4` text DEFAULT NULL,
  `desc_cert5` text DEFAULT NULL,
  `logros` text DEFAULT NULL,
  `logros1` text DEFAULT NULL,
  `logros2` text DEFAULT NULL,
  `logros3` text DEFAULT NULL,
  `logros4` text DEFAULT NULL,
  `logros5` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id`, `nombre`, `apellidos`, `correo_electronico`, `telefono`, `direccion`, `codigo_postal`, `localidad`, `titulo`, `fecha_nacimiento`, `lugar_nacimiento`, `genero`, `nacionalidad`, `estado_civil`, `linkedin`, `perfil`, `formacion`, `formacion1`, `formacion2`, `formacion3`, `formacion4`, `formacion5`, `institucion`, `institiucion1`, `institucion2`, `institucion3`, `institucion4`, `institucion5`, `localidad_inst`, `localidad_inst1`, `localidad_inst2`, `localidad_inst3`, `localidad_inst4`, `localidad_inst5`, `fech_inic_inst`, `fech_inic_inst1`, `fech_inic_inst2`, `fech_inic_inst3`, `fech_inic_inst4`, `fech_inic_inst5`, `fech_fin_inst`, `fech_fin_inst1`, `fech_fin_inst2`, `fech_fin_inst3`, `fech_fin_inst4`, `fech_fin_inst5`, `desc_inst`, `desc_inst1`, `desc_inst2`, `desc_inst3`, `desc_inst4`, `desc_inst5`, `puesto`, `puesto1`, `puesto2`, `puesto3`, `puesto4`, `puesto5`, `empleador`, `empleador1`, `empleador2`, `empleador3`, `empleador4`, `empleador5`, `localidad_exp`, `localidad_exp1`, `localidad_exp2`, `localidad_exp3`, `localidad_exp4`, `localidad_exp5`, `fech_inic_exp`, `fech_inic_exp1`, `fech_inic_exp2`, `fech_inic_exp3`, `fech_inic_exp4`, `fech_inic_exp5`, `fech_fin_exp`, `fech_fin_exp1`, `fech_fin_exp2`, `fech_fin_exp3`, `fech_fin_exp4`, `fech_fin_exp5`, `desc_exp`, `desc_exp1`, `desc_exp2`, `desc_exp3`, `desc_exp4`, `desc_exp5`, `idioma`, `idioma1`, `idioma2`, `idioma3`, `idioma4`, `idioma5`, `nivel_idioma`, `nivel_idioma1`, `nivel_idioma2`, `nivel_idioma3`, `nivel_idioma4`, `nivel_idioma5`, `pasatiempo`, `pasatiempo1`, `pasatiempo2`, `pasatiempo3`, `pasatiempo4`, `pasatiempo5`, `curso`, `curso1`, `curso2`, `curso3`, `curso4`, `curso5`, `periodo`, `periodo1`, `periodo2`, `periodo3`, `periodo4`, `periodo5`, `desc_curso`, `desc_curso1`, `desc_curso2`, `desc_curso3`, `desc_curso4`, `desc_curso5`, `aptitud`, `aptitud1`, `aptitud2`, `aptitud3`, `aptitud4`, `aptitud5`, `nombre_ref`, `nombre_ref1`, `nombre_ref2`, `nombre_ref3`, `nombre_ref4`, `nombre_ref5`, `organizacion_ref`, `organizacion_ref1`, `organizacion_ref2`, `organizacion_ref3`, `organizacion_ref4`, `organizacion_ref5`, `local_ref`, `local_ref1`, `local_ref2`, `local_ref3`, `local_ref4`, `local_ref5`, `telefono_ref`, `telefono_ref1`, `telefono_ref2`, `telefono_ref3`, `telefono_ref4`, `telefono_ref5`, `correo_ref`, `correo_ref1`, `correo_ref2`, `correo_ref3`, `correo_ref4`, `correo_ref5`, `certificado`, `certificado1`, `certificado2`, `certificado3`, `certificado4`, `certificado5`, `periodo_cert`, `periodo_cert1`, `periodo_cert2`, `periodo_cert3`, `periodo_cert4`, `periodo_cert5`, `desc_cert`, `desc_cert1`, `desc_cert2`, `desc_cert3`, `desc_cert4`, `desc_cert5`, `logros`, `logros1`, `logros2`, `logros3`, `logros4`, `logros5`) VALUES
(2, 'a', 'Perez Hernandez', 'ivan@gmail.com', '61800000000', 'Zona Centro', '34180', 'Durango', 'Tecnico Superior Universitario', '13-03-2003', 'Durango', 'Hombre', 'Mexicano', 'Casado', '@ivan', 'Soy blanco privilegiado', 'Primaria', 'sdads', NULL, NULL, NULL, NULL, 'Elena Centeno', NULL, NULL, NULL, NULL, NULL, 'Durango', NULL, NULL, NULL, NULL, NULL, 'Septiembre 2009', NULL, NULL, NULL, NULL, NULL, 'Mayo 2015', NULL, NULL, NULL, NULL, NULL, 'Escuela muy bonita', NULL, NULL, NULL, NULL, NULL, 'Presidente', NULL, NULL, NULL, NULL, NULL, 'BBVA', NULL, NULL, NULL, NULL, NULL, 'Durango', NULL, NULL, NULL, NULL, NULL, 'Septiembre 2021', NULL, NULL, NULL, NULL, NULL, 'Presente', NULL, NULL, NULL, NULL, NULL, 'Muy comodo todo', NULL, NULL, NULL, NULL, NULL, 'Ingles', NULL, NULL, NULL, NULL, NULL, 'B2', NULL, NULL, NULL, NULL, NULL, 'Me gusta jugar rocket', NULL, NULL, NULL, NULL, NULL, 'REDES', NULL, NULL, NULL, NULL, NULL, 'septiembre a diciembre 2021', NULL, NULL, NULL, NULL, NULL, 'Redes con Cisco', NULL, NULL, NULL, NULL, NULL, 'Soy muy bueno en el front end y con las muchachas', NULL, NULL, NULL, NULL, NULL, 'Ivan', NULL, NULL, NULL, NULL, NULL, 'Banorte', NULL, NULL, NULL, NULL, '', 'Durango', NULL, NULL, NULL, NULL, NULL, '6185465823', NULL, NULL, NULL, NULL, NULL, 'banorte@gmail.com', NULL, NULL, NULL, NULL, NULL, 'Redes', NULL, NULL, NULL, NULL, NULL, 'Septiembre a dicimebre 2021', NULL, NULL, NULL, NULL, NULL, 'Chido todo', NULL, NULL, NULL, NULL, NULL, 'Me gradue de Técnico universitario', NULL, NULL, NULL, NULL, NULL),
(7, 'Jared Emiliano', 'Frias Aguilar', 'jfassj@gmail.com', '61800000000', 'Zona Centro', '34180', 'Durango', 'Tecnico Superior Universitario', '13-03-2003', 'Durango', 'Hombre', 'Mexicano', 'Soltero', '@jfassj', 'Soy trabajador', 'Primaria', '', 'SADA', '', '', '', 'Elena Centeno', '', 'SADAS', '', '', '', 'Durango', '', 'ASD', '', '', '', 'Septiembre 2009', '', 'ADSA', '', '', '', 'Mayo 2015', '', 'ADS', '', '', '', 'Escuela muy bonita', '', 'ADSA', '', '', '', 'Cargador', '', '', '', '', '', 'Jorge Vela Eventos', '', '', '', '', '', 'Durango', '', '', '', '', '', 'Septiembre 2021', '', '', '', '', '', '2023', '', '', '', '', '', 'Muy comodo todo', '', '', '', '', '', 'Ingles', '', '', '', '', '', 'B1', '', '', '', '', '', 'Me gusta jugar rocket', '', '', '', '', '', 'REDES', '', '', '', '', '', 'septiembre a diciembre 2021', '', '', '', '', '', 'Redes con Cisco', '', '', '', '', '', 'Soy muy bueno en el front end', '', '', '', '', '', 'Jared', '', '', '', '', '', 'Jorge Vela Eventos', '', '', '', '', '', 'Durango', '', '', '', '', '', '6185465823', '', '', '', '', '', 'velaeventos@gmail.com', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Me gradue de Técnico universitario', '', '', '', '', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
