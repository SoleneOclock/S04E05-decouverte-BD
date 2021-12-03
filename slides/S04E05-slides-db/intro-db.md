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


<p class="fragment">Un ensemble organisé d'informations plus ou moins structurées.</p>

--

## Structurées comment ?

--

![image](/slides/S04E05-slides-db/img/sql-vs-nosql.png)

--

#### Données organisés par graph

![image](/slides/S04E05-slides-db/img/graph.png)

--

#### Données organisés par documents

![image](/slides/S04E05-slides-db/img/article-nosql.png)

--

#### Données organisées par relations

![image](/slides/S04E05-slides-db/img/article-sql.png)


---


## MySQL

<p>Système de gestion de bases de données relationnelles</p>

--

<ul>
	<li>SGBD Open Source</li>
	<li>Langage : SQL</li>
	<li>Interface web : Adminer (ou PhpMyAdmin)</li>
	<li>Librairie PHP : PDO</li>
</ul>


---

## SQL

<p>Langage de communication</p>

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

## Concrètement, une base de données ça ressemble à quoi ?

---

## Une structure de données

<p>Par exemple pour stocker des profs O'Clock </p>
<table class="small" class="fragment">
    <thead>
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
