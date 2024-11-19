-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 17, 2024 at 10:13 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notariaHLR`
--

-- --------------------------------------------------------

--
-- Table structure for table `MasterIndex19982023`
--

CREATE TABLE `MasterIndex19982023` (
  `id` int(11) NOT NULL,
  `Fojas` int(11) DEFAULT NULL,
  `Repertorio` int(11) DEFAULT NULL,
  `Year` int(11) DEFAULT NULL,
  `Bimestre` int(11) DEFAULT NULL,
  `Nombre1` varchar(220) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `Nombre2` varchar(220) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `CONT` varchar(150) DEFAULT NULL,
  `Materia` varchar(150) DEFAULT NULL,
  `FESC` varchar(25) DEFAULT NULL,
  `FechaEscritura` varchar(25) DEFAULT NULL,
  `N_BOLETA` varchar(50) DEFAULT NULL,
  `Arancel` varchar(50) DEFAULT NULL,
  `MATRI` varchar(50) DEFAULT NULL,
  `Matricero` varchar(50) DEFAULT NULL,
  `Dif_Corr` varchar(10) DEFAULT NULL,
  `Observacion` varchar(150) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp(),
  `Year-Rep` varchar(10) GENERATED ALWAYS AS (concat(`Year`,'-',lpad(`Repertorio`,4,'0'))) STORED
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `MasterIndex19982023`
--

INSERT INTO `MasterIndex19982023` (`id`, `Fojas`, `Repertorio`, `Year`, `Bimestre`, `Nombre1`, `Nombre2`, `CONT`, `Materia`, `FESC`, `FechaEscritura`, `N_BOLETA`, `Arancel`, `MATRI`, `Matricero`, `Dif_Corr`, `Observacion`, `createdAt`, `updatedAt`) VALUES
(1, 0, 515, 1998, 2, 'MUÑOZ ARANDA, VERONICA A.', 'GARATE GONZALEZ, RUBEN', 'MDJ', 'MANDATO JUDICIAL', '14-04-1998', '14-04-1998', '218927', '5000', 'MT3', 'COMPUTADOR TRES', '0', '', NULL, '2024-02-22 03:00:00'),
(2, 0, 516, 1998, 2, 'PARRA GARATE, FRANCISCO S.', 'PARRA, GUILLERMINA DEL C.', 'CVT', 'COMPRAVENTA', '14-04-1998', '14-04-1998', '218879', '45000', 'MT1', 'COMPUTADOR UNO', '0', '', NULL, '2024-02-22 03:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `MasterIndex19982023`
--
ALTER TABLE `MasterIndex19982023`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Nombre1` (`Nombre1`),
  ADD KEY `Nombre2` (`Nombre2`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `MasterIndex19982023`
--
ALTER TABLE `MasterIndex19982023`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40589;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
