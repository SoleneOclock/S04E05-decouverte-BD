# Bases de données & PHP

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


## Qu'est ce que c'est une base de données ?


<p class="fragment">Un ensemble organisé d'informations plus ou moins structurée.</p>

--

![image](/slides/S04E05-slides-db/img/sql-vs-nosql.png)

--

![image](/slides/S04E05-slides-db/img/graph.png)

--

### 1 seul Document

![image](/slides/S04E05-slides-db/img/keyvalue.png)

--

### Données séparées, mais liées

![image](/slides/S04E05-slides-db/img/tables.png)


---

## Et ces données on va en faire quoi ?


<ul>
    <li class="fragment">
        <strong>les stocker, les archiver</strong><br>
        <small><em class="fragment">logs, temps réel</em></small>
    </li>
    <li class="fragment">
        <strong>les manipuler, les gérer</strong><br>
        <small><em class="fragment">boutique, stocks</em></small>
    </li>
    <li class="fragment">
        <strong>les partager</strong><br>
        <small><em class="fragment">API, côté serveur</em></small>
    </li>
</ul>


---


## SGBD


<p>Logiciel intermédiaire entre les utilisateurs et les bases de données. C'est lui qui permet de stocker, manipuler et lire les données.</p>

<ul>
<li>SGBD de type SQL (PostgreSQL, SQLite, Microsoft SQL Server, Oracle)</li>
<li>SGBD de type NoSQL (Cassandra, Redis, MongoDB)</li>
<ul>


---


## MySQL

<p>MySql est un système de gestion de bases de données relationnelles</p>

<ul class="fragment">
	<li>Logiciel Open Source</li>
	<li>Utilise le langage SQL pour communiquer avec le moteur de base de données</li>
	<li>Interface web: Adminer (ou PhpMyAdmin)</li>
	<li>Librairie PHP: PDO</li>
</ul>


---

## SQL

<p>Langage de communication</p>

<ul>
<li class="fragment left">
	gérer les accès à la base de données : utilisateurs, autorisations<br>
	Data <strong>Control</strong> Language (DCL)<br>
	<small><code>[GRANT, REVOKE]</code></small>
</li>
<li class="fragment left">
	définir la structure de base de données : créer, modifier supprimer les tables.<br>
	Data <strong>Definition</strong> Language (DDL)<br>
	<small><code>[CREATE, DROP, ALTER, TRUNCATE]</code></small>
</li>
<li class="fragment left">
	lire les données<br>
	Data <strong>Query</strong> Language (DQL)<br>
	<small><code>[SELECT]</code></small>
</li>
<li class="fragment left">
	manipuler les données : creer, modifier, supprimer les données<br>
	Data <strong>Manipulation</strong> Language (DML)<br>
	<small><code>[INSERT, UPDATE, DELETE]</code></small>
</li>
</ul>

---

## Concrètement, une base de données ça ressemble à quoi ?

---

## Une structure de données

<p>Par exemple pour stocker des profs O'Clock </p>
<table class="small">
    <thead class="fragment">
        <th>Nom</th>
        <th>Prenom</th>
        <th>Email</th>
        <th>Ville</th>
    </thead>
</table>

--

## Et les données dedans !

<table class="small">
    <thead>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Email</th>
        <th>Ville</th>
    </thead>
    <tbody>
        <tr>
            <td>Copin</td>
            <td>Lucie</td>
            <td>lucie@oclock.io</td>
            <td>Bordeaux</td>
        </tr>
        <tr>
            <td>Spagnolo</td>
            <td>Dario</td>
            <td>dario@oclock.io</td>
            <td>Colombes</td>
        </tr>
        <tr>
            <td>Vasse</td>
            <td>Maxime</td>
            <td>maxime@oclock.io</td>
            <td>Bourg-en-Bresse</td>
        </tr>
    </tbody>
</table>

--

## Contraintes

<ul class="fragment">
    <li>Chaque ligne doit être unique</li>
    <li>Et possède un identifiant</li>
    <li>Pas de répétitions</li>
</ul>

--

<table class="small">
    <thead>
        <th>ID</th>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Email</th>
        <th>Ville</th>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Copin</td>
            <td>Lucie</td>
            <td>lucie@oclock.io</td>
            <td>Bordeaux</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Spagnolo</td>
            <td>Dario</td>
            <td>dario@oclock.io</td>
            <td>Colombes</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Vasse</td>
            <td>Maxime</td>
            <td>maxime@oclock.io</td>
            <td>Bourg-en-Bresse</td>
        </tr>
    </tbody>
</table>

---

## La théorie c'est bien

<p class="fragment">mais la pratique c'est mieux !</p>
