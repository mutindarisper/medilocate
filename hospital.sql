-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 26, 2019 at 08:25 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `major_hospitals`
--

-- --------------------------------------------------------

--
-- Table structure for table `hospital`
--

CREATE TABLE `hospital` (
  `NAME` varchar(37) DEFAULT NULL,
  `COUNTY` varchar(7) DEFAULT NULL,
  `LATITUDE` decimal(8,6) DEFAULT NULL,
  `LONGITUDE` decimal(8,6) DEFAULT NULL,
  `CONTACT` varchar(20) DEFAULT NULL,
  `TYPE` varchar(47) DEFAULT NULL,
  `FACILITY` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hospital`
--

INSERT INTO `hospital` (`NAME`, `COUNTY`, `LATITUDE`, `LONGITUDE`, `CONTACT`, `TYPE`, `FACILITY`) VALUES
('WESTLANDS HEALTH CENTRE', 'NAIROBI', '-1.260875', '36.799596', '+245705569267', 'Non-Governmental Organizations', 'Medical Center'),
('APTC  EMBAKASI HEALTH CENTRE', 'NAIROBI', '-1.285483', '36.885312', '+254722671358', 'Armed Forces', 'Basic Health Centre'),
('BABA DOGO HEALTH CENTRE', 'NAIROBI', '-1.247024', '36.885384', '+254020802120', 'Ministry of Health', 'Basic Health Centre'),
('BAHATI HEALTH CENTRE', 'NAIROBI', '-1.288905', '36.863007', '+254020791035', 'Ministry of Health', 'Basic Health Centre'),
('CRESENT MEDICAL AID KENYA', 'NAIROBI', '-1.282989', '36.820748', '+2540202222575', 'Non-Governmental Organizations', 'Medical Clinic'),
('DANDORA HEALTH CENTRE', 'NAIROBI', '-1.247519', '36.903410', '+254020792081', 'Ministry of Health', 'Basic Health Centre'),
('GETRUDES GARDENS CHILDREN\'S HOSPITAL', 'NAIROBI', '-1.256149', '36.831785', '+2540207206000', 'Private Practice - Clinical Officer', 'Primary Care Hospital'),
('JERICHO HEALTH CENTRE', 'NAIROBI', '-1.291278', '36.871205', '+254715316424', 'Ministry of Health', 'Basic Health Centre'),
('KANGEMI HEALTH CENTRE', 'NAIROBI', '-1.267318', '36.749339', '+254702733126', 'Ministry of Health', 'Basic Health Centre'),
('KAREN HEALTH CENTRE', 'NAIROBI', '-1.316911', '36.703618', '+254702222222', 'Ministry of Health', 'Basic Health Centre'),
('KAWANGWARE HEALTH CENTRE', 'NAIROBI', '-1.287561', '36.749176', '+254721459166', 'Ministry of Health', 'Basic Health Centre'),
('KENYATTA NATIONAL HOSPITAL', 'NAIROBI', '-1.301440', '36.806804', '+254730643000', 'Ministry of Health', 'National Referral Hospital'),
('LITTLE SISTERS OF ST FRANCIS', 'NAIROBI', '-1.225777', '36.916131', '+254736562277', 'Kenya Episcopal Conference-Catholic Secretariat', 'Primary Care Hospital'),
('MAKONGENI HEALTH CENTRE', 'NAIROBI', '-1.293940', '36.847540', '+254708761147', 'Ministry of Health', 'Basic Health Centre'),
('MATER MISERICORDIAE HOSPITAL', 'NAIROBI', '-1.305393', '36.916086', '+254719073000', 'Kenya Episcopal Conference-Catholic Secretariat', 'Secondary Care Hospital'),
('MATHARE NORTH HEALTH CENTRE', 'NAIROBI', '-1.255790', '36.865669', '+254718737659', 'Ministry of Health', 'Basic Health Centre'),
('MATHARI MENTAL HOSPITAL', 'NAIROBI', '-1.259489', '36.844302', '+2540202337694', 'Ministry of Health', 'Specialized & Tertiary Referral hospital'),
('MBAGATHI DISTRICT HOSPITAL', 'NAIROBI', '-1.307925', '36.802242', '+2540202724712', 'Ministry of Health', 'Primary Care Hospital'),
('NAIROBI SOUTH B HEALTH CENTRE', 'NAIROBI', '-1.309483', '36.836938', '+254722509165', 'Ministry of Health', 'Basic Health Centre'),
('NGAIRA AVENUE DISPENSARY', 'NAIROBI', '-1.288940', '36.822510', '+254722568294', 'Ministry of Health', 'Basic Health Centre'),
('NGARA HEALTH CENTRE', 'NAIROBI', '-1.270770', '36.830460', '+2540203500279', 'Ministry of Health', 'Basic Health Centre'),
('FORCES MEMORIAL HOSPITAL', 'NAIROBI', '-1.309481', '36.803344', '+2540704476662', 'Armed Forces', 'Primary Care Hospital'),
('UNIVERSITY OF NAIROBI HEALTH SERVICES', 'NAIROBI', '-1.270000', '36.810000', '+2540202724895', 'The University of Nairobi', 'Medical Clinic'),
('THE NAIROBI HOSPICE', 'NAIROBI', '-1.301210', '36.805120', '+2540202712361', 'Non-Governmental Organizations', 'Medical Clinic'),
('AAR HOSPITAL SOUTH C', 'NAIROBI', '-1.316530', '36.826665', '+254780888150', 'Private Practice - Private Institution Academic', 'Medical Centre'),
('AGA KHAN HOSPITAL', 'NAIROBI', '-1.259263', '36.822479', '+2540203662000', 'Private Practice - Private Institution Academic', 'Secondary Care Hospital'),
('GURU NANAK HOSPITAL', 'NAIROBI', '-1.267480', '36.831229', '+254722533650', 'Private Practice - Private Institution Academic', 'Primary Care Hospital'),
('M P SHAH HOSPITAL', 'NAIROBI', '-1.262455', '36.812221', '+2540204291100', 'Private Practice - Private Institution Academic', 'Primary Care Hospital'),
('MASABA HOSPITAL', 'NAIROBI', '-1.296875', '36.780809', '+254714906435', 'Private Practice - Private Institution Academic', 'Medical Centre'),
('METROPOLITAN HOSPITAL', 'NAIROBI', '-1.287674', '36.875128', '+254722207665', 'Private Practice - Private Institution Academic', 'Primary Care Hospital'),
('NAIROBI HOSPITAL', 'NAIROBI', '-1.294238', '36.803877', '+254703082000', 'Private Practice - Private Institution Academic', 'Secondary Care Hospital'),
('NAIROBI WEST HOSPITAL', 'NAIROBI', '-1.304238', '36.825058', '+254722200944', 'Private Practice - Private Institution Academic', 'Primary Care Hospital');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
