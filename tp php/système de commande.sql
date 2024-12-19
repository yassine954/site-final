-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Jeu 19 Décembre 2024 à 14:34
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `système de commande`
--

-- --------------------------------------------------------

--
-- Structure de la table `table client`
--

CREATE TABLE IF NOT EXISTS `table client` (
  `Iid_client` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `date_inscription` date NOT NULL,
  PRIMARY KEY (`Iid_client`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Contenu de la table `table client`
--


-- --------------------------------------------------------

--
-- Structure de la table `table de commande`
--

CREATE TABLE IF NOT EXISTS `table de commande` (
  `id_commande` int(11) NOT NULL AUTO_INCREMENT,
  `id_client` int(11) NOT NULL,
  `date_commande` date NOT NULL,
  `montant_total` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_commande`),
  KEY `id_client` (`id_client`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Contenu de la table `table de commande`
--


-- --------------------------------------------------------

--
-- Structure de la table `table de produit`
--

CREATE TABLE IF NOT EXISTS `table de produit` (
  `id_produit` int(11) NOT NULL AUTO_INCREMENT,
  `nom_produit` varchar(255) NOT NULL,
  `prix` decimal(10,2) NOT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`id_produit`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Contenu de la table `table de produit`
--


-- --------------------------------------------------------

--
-- Structure de la table `table details commandes`
--

CREATE TABLE IF NOT EXISTS `table details commandes` (
  `id_detail` int(11) NOT NULL AUTO_INCREMENT,
  `id_commande` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `quantité` int(11) NOT NULL,
  `prix_total` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id_detail`),
  KEY `id_commande` (`id_commande`,`id_produit`),
  KEY `id_produit` (`id_produit`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Contenu de la table `table details commandes`
--


--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `table de commande`
--
ALTER TABLE `table de commande`
  ADD CONSTRAINT `table@0020de@0020commande_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `table client` (`Iid_client`);

--
-- Contraintes pour la table `table details commandes`
--
ALTER TABLE `table details commandes`
  ADD CONSTRAINT `table@0020details@0020commandes_ibfk_2` FOREIGN KEY (`id_produit`) REFERENCES `table de produit` (`id_produit`),
  ADD CONSTRAINT `table@0020details@0020commandes_ibfk_1` FOREIGN KEY (`id_commande`) REFERENCES `table de commande` (`id_commande`);
