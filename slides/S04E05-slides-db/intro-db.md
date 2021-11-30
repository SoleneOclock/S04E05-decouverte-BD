# Bases de données & PHP

SQL, MySQL, Adminer, PDO

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

## Programme

<p class="fragment"><em>Qu'est ce qu'une base de données?</em></p>
<p class="fragment"><strong>MySQL et Adminer</strong></p>
<p class="fragment"><em>Manipuler les bases de données</em></p>
<p class="fragment"><strong>le langage SQL</strong></p>
<p class="fragment"><strong>PHP, librairie PDO</strong></p>

---

## A quoi servent les bases de données ?

<ul>
    <li class="fragment">
        <strong>stocker, archiver</strong><br>
        <small><em class="fragment">logs, temps réel</em></small>
    </li>
    <li class="fragment">
        <strong>manipuler, gérer</strong><br>
        <small><em class="fragment">boutique, stocks</em></small>
    </li>
    <li class="fragment">
        <strong>partager des données</strong><br>
        <small><em class="fragment">API, côté serveur</em></small>
    </li>
</ul>

---

## Comment structurer les données ?

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

--

![image](/slides/S04E05-slides-db/img/mysql.png)

---

## MySQL

<p>Système de gestion de bases de données relationnelles</p>

--

- Open Source
- Bases de données relationnelles: SQL
- Interface web: Adminer (ou PhpMyAdmin)
- Librairie PHP: PDO

---

## SQL

<p>Langage permettant de communiquer avec un moteur de base de données</p>

-- 

<p>Communiquer pour dire quoi ?</p>

<ul>
<li class="fragment left">
	Pour gérer les accès à la base de données : utilisateurs, autorisations<br>
	Data <strong>Control</strong> Language (DCL)<br>
	<small><code>[GRANT, REVOKE]</code></small>
</li>
<li class="fragment left">
	Pour définir la structure de base de données : créer, modifier supprimer les tables.<br>
	Data <strong>Definition</strong> Language (DDL)<br>
	<small><code>[CREATE, DROP, ALTER, TRUNCATE]</code></small>
</li>
<li class="fragment left">
	Pour lire les données<br>
	Data <strong>Query</strong> Language (DQL)<br>
	<small><code>[SELECT]</code></small>
</li>
<li class="fragment left">
	Pour manipuler les données : creer, modifier, supprimer les données<br>
	Data <strong>Manipulation</strong> Language (DML)<br>
	<small><code>[INSERT, UPDATE, DELETE]</code></small>
</li>
</ul>

---

## Concrètement, c'est quoi alors une base de données relationnelles?

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
