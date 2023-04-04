-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: localhost    Database: zao
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cart_user_idx` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `price` double DEFAULT NULL,
  `picture` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'1 cours collectif','Nous nous efforçons de proposer à chaque élève le cours le plus adapté en fonction de nombreux critères: l’âge, l’expérience, les attentes, la marée, les vagues. Nous répartissons les personnes dans des groupes qui leurs correspondent et nous nous attachons à enseigner à chacun à son rythme avec une approche individuelle au sein du groupe. Un groupe est constitué de 8 élèves maximum. Durée des cours : 2h. Les horaires dépendant de la marée, de la houle et du vent, contactez-nous pour connaitre le lieu et l\'horaire précis du cours',30, "images/assets/cours_surf.svg"),(2,'Pack de 5 cours collectif','Le surf est un sport exigent qui demande de l\'entrainement et de la pratique. Nous vous proposons donc un pack de 5 cours à utiliser , tout au long de l\'année, en dehors des vacances scolaires. Un groupe est constitué de 8 élèves maximum. Durée des cours : 2h. Les horaires dépendant de la marée, de la houle et du vent, contactez-nous pour connaitre le lieu et l\'horaire précis du cours',135, "images/assets/cours_surf.svg"),(3,'Pack de 10 cours collectif','Le surf est un sport exigent qui demande de l\'entrainement et de la pratique. Nous vous proposons donc un pack de 10 cours à utiliser , tout au long de l\'année, en dehors des vacances scolaires. Un groupe est constitué de 8 élèves maximum. Durée des cours : 2h. Les horaires dépendant de la marée, de la houle et du vent, contactez-nous pour connaitre le lieu et l\'horaire précis du cours',250, "images/assets/cours_surf.svg"),(4,'Location de Combinaison 1h','Combinaisons enfant et/ou adulte, épaisseur 4/3 pour surfer au chaud peu importe la saison',10, "images/assets/loc_combi.svg"),(5,'Location de planche 1h','Vous avez envie de faire du free surf ? Nous mettons à votre disposition des planches disponibles à la location. Contactez nous pour nous indiquez votre niveau, taille et poids afin que nous vous mettions de côté une planche adaptée',25, "images/assets/surf.svg" ),(6,'Location de body 1h','Vous avez envie de faire du bodyboard ? Nous mettons à votre disposition des bodys disponibles à la location. Contactez nous pour nous indiquez votre niveau, taille et poids afin que nous vous mettions de côté un bodyboard adapté',15, "images/assets/bodyboard.svg");
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_carts`
--

DROP TABLE IF EXISTS `product_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_cart` (
  `product_id` int NOT NULL,
  `cart_id` int NOT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`product_id`,`cart_id`),
  KEY `fk_product_has_cart_cart1_idx` (`cart_id`),
  KEY `fk_product_has_cart_product1_idx` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_carts`
--

LOCK TABLES `product_cart` WRITE;
/*!40000 ALTER TABLE `product_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(80) NOT NULL,
  `street` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `zip` char(5) NOT NULL,
  `phone` char(14) NOT NULL,
  `birthdate_day` int NOT NULL,
  `birthdate_month` int NOT NULL,
  `birthdate_year` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-03 11:52:41
