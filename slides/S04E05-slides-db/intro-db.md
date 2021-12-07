# Bases de données

MySQL, SQL, Adminer, PDO


---

## Previously, on O'clock:

![image](/slides/S04E05-slides-db/img/saison1.png)

--

![image](/slides/S04E05-slides-db/img/saison2.png)

--

![image](/slides/S04E05-slides-db/img/saison3.png)

--

![image](/slides/S04E05-slides-db/img/saison4.png)


---


## Qu'est ce que c'est une BDD ?


<p class="fragment">Un ensemble organisé d'informations</p>
<ul class="fragment">
    <li>plus ou moins structurées</li>
	<li>un service indépendant</li>
	<li>sur un serveur</li>
	<li>avec une interface pour dialoguer</li>
</ul>

---

## A quoi ça sert ?


<p class="fragment">A stocker, organiser, gerer et renvoyer des données.</p>

---

## Comment ?

<p class="fragment">Différement suivant le <strong>SGBD</strong><br /><br />
Système de Gestion de Base de Données<br />
(DBMS: DataBase Management System)</p>

--

![image](/slides/S04E05-slides-db/img/sql-vs-nosql.png)

--

#### Données organisés par documents

![image](/slides/S04E05-slides-db/img/article-nosql.png)

--

### SGBD NoSQL 

<p>Les données sont stockés sous forme de collection qui sont des ensembles de documents.</p>
Exemples : Cassandra, Redis ou MongoDB

--

#### Données organisées par relations

![image](/slides/S04E05-slides-db/img/article-sql.png)

--

### SGBDR SQL 

<strong>RDBMS (Relationnal DataBase Management System)</strong>
PostgreSQL, SQLite, Microsoft SQL Server, Oracle


---

## MySQL

<ul>
	<li>Système de gestion de bases de données relationnelles</li>
	<li>SGBD Open Source</li>
	<li>Langage : SQL</li>
	<li>Interface web : Adminer (ou PhpMyAdmin)</li>
	<li>Librairie PHP : PDO</li>
</ul>

--

## Concrètement

<ul>
    <li>un serveur contient des bases</li>
    <li>une bases contient des tables</li>
    <li>une table est composée de champs (colonnes)<br /></li>
    <li>une table contient des enregistrements (lignes)</li>
</ul>

--

## Contraintes

<ul class="fragment">
    <li>Chaque ligne doit être unique</li>
    <li>Et possède un identifiant</li>
    <li>Pas de répétitions</li>
</ul>


---

## SQL

<p>Langage de communication avec la base de données</p>

--

<ul>
<li>
	Data <strong>Definition</strong> Language <br>
	-> définir la structure de base de données<br>
	<small><code>[CREATE, DROP, ALTER, TRUNCATE]</code></small>
</li>
<li class="fragment left">
	Data <strong>Manipulation</strong> Language<br>
    -> manipuler (ajouter, modifier, supprimer) les données<br>	
	<small><code>[INSERT, UPDATE, DELETE]</code></small>
</li>
<li class="fragment left">
	Data <strong>Query</strong> Language<br>
	-> lire les données<br>
	<small><code>[SELECT]</code></small>
</li>
<li class="fragment left">
	Data <strong>Control</strong> Language <br>
	-> gérer les accès à la base de données : utilisateurs, autorisations<br>
	<small><code>[GRANT, REVOKE]</code></small>
</li>
</ul>

---

## La théorie c'est bien

<p class="fragment">mais la pratique c'est mieux !</p>
