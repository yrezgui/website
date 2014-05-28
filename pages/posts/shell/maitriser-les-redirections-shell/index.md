Le shell (ou ligne de commande) est l'outil de prédilection pour bon nombre
d'entre nous qui utilisons un OS de la famille UNIX. Nous sommes persuadés que
bien utilisé, il remplace avantageusement un IDE complexe et gourmand.

Chez Putain de Code, on a une certaine tendance à utiliser [ZSH][wp:zsh], mais
pour ma part, j'utilise encore et toujours le vénérable [Bash][wp:bash], non pas
pour faire mon barbu mais simplement car il me suffit amplement.

La suite de l'article est donc basée sur celui-ci mais tout devrait fonctionner
à l'identique sur ZSH.

Venons en au sujet même de cet article, l'un des éléments essentiels de
l'utilisation du shell : l'utilisation des redirections d'entrée/sortie de
base.

Si ça vous paraît barbare, tenez vous bien, on attaque tout de suite !

## Une entrée, deux sorties

Un des principes de base sous UNIX est que tout est fichier et que l'activité du
système est rendue par l'interaction de programmes (ou processus) à l'aide
des dits fichiers.

Pour pouvoir collaborer avec ses congénères, chaque processus peut accéder par
défaut à trois fichiers bien particuliers : l'entrée, la sortie, et la sortie
d'erreur standards.

* L'entrée standard (`stdin`)
* La sortie standard (`stdin`)
* La sortie d'erreur (`stderr`)

<figure>
  ![Entrées et sorties par défaut d'un processus](shell/maitriser-les-redirections-shell/process_io.svg)
</figure>

Habituellement, l'entrée standard est liée au clavier de l'utilisateur *via* son
émulateur de terminal, et les deux sorties sont liées à l'affichage dans ce même
émulateur.

L'idée pour pouvoir faire collaborer les processus est donc de *brancher* les
entrées et sorties de différents programmes afin d'obtenir un résultat.

## Les redirections de base

Commençons par quelques redirections de base, celles qu'il faut connaître et qui
sont employées systématiquement.

Pour nous exercer, nous allons utiliser principalement deux commandes :

* `echo` : permet d'écrire un message spécifié en tant qu'argument sur sa sortie
  standard.
* `cat` : permet d'afficher le contenu d'un fichier passé en argument sur sa
  sortie standard ou de répéter son entrée standard sur sa sortie standard.

Rappelez vous que par défaut, la sortie standard est affichée dans le terminal
et l'entrée standard est le clavier de l'utilisateur.

### Redirection de sortie : `>`

Ce type de redirection permet d'indiquer à un processus que tout ce qui devrait
aller sur la sortie standard (par défaut, le terminal), doit plutôt être stocké
dans un fichier.

Pour ça, on utilise la syntaxe `> [fichier]` :

``` console
$ echo "Salut" > message
$ cat message
Salut
```

<figure>
  ![Redirection de stdout vers un fichier](redirect_stdout.svg)
</figure>

### Redirection d'entrée : `<`

À l'inverse, on peut aussi spécifier à un programme qu'il doit utiliser un
fichier comme son entrée standard, à la place du clavier de l'utilisateur.

En réutilisant notre fichier `message`, on peut par exemple faire :

``` console
$ cat < message
Salut
```

Notez qu'on utilise bien `cat` *sans argument*, il utilise donc l'entrée
standard.

<figure>
  ![Redirection de stdin depuis un fichier](redirect_stdin.svg)
</figure>

### Connecter deux processus : `|`

Dernier des connecteurs de base, l'opérateur `|`, aussi appelé *pipe* (et qui se
prononce *paillepe*, avé l'accent).

Il permet tout simplement d'utiliser la sortie d'un programme comme entrée d'un
autre.

Pour montrer ça, introduisons la commande `tr`, qui permet de remplacer des
caractères dans l'entrée par d'autres.

``` console
$ echo "Salut!" | tr "[:lower:]" "[:upper:]"
SALUT!
```

<figure>
  ![Connection de deux processus](pipe.svg)
</figure>

## Descripteurs de fichiers et redirections avancées

### Rediriger la sortie d'erreur

<figure>
  ![Redirection de stderr vers un fichier](redirect_stdout.svg)
  <figcaption>Redirection de stout vers un fichier</figcaption>
</figure>

### Rediriger vers un autre descripteur : `>&`

### Ajouter en fin de fichier : `>>` et `>>&`

## *Pipes* nommés

## Quelques fichiers bien pratiques

## Les outils indispensables

## Pour aller plus loin

Le manuel de bash contient [une section complète sur les
redirections][man:bash]. Elle va beaucoup plus loin que cet article et je vous
invite à la lire pour voir tout ce qu'il est possible de faire.

Il y a aussi une section dédiée à ce sujet dans l'[Advanced Bash-Scripting Guide][tldp:abs]

[wp:zsh]: http://fr.wikipedia.org/wiki/Z_Shell
[wp:bash]: http://fr.wikipedia.org/wiki/Bourne-Again_shell
[man:bash]: http://www.gnu.org/software/bash/manual/bashref.html#Redirections
[tldp:abs]: http://tldp.org/LDP/abs/html/io-redirection.html
