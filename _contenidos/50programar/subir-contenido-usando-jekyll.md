---
title: Subiendo contenido usando Jekyll
permalink: /usando/jekyll
tags: ["jekyll","tutorial"]
---


El sitio web de PodemosAprender está hecho con [Jekyll](https://jekyllrb.com/) y alojado gratuitamente en GitHubPages {/usando/gitpages } donde se publica automáticamente con las modificaciones que hagamos a [nuestro proyecto en GitHub](https://github.com/podemosaprender/podemosaprender.github.io) y nos permite actualizar el sitio de manera colaborativa.
Jekyll es un generador de páginas webs estáticas escrito en Ruby. A partir de códigos HTML y archivos en lenguaje MarkDown genera cada una de las páginas del sitio.


En el siguiente tutorial entenderemos el funcionamiento de Jekyll, cómo lo usamos en [la web de PodemosAprender](http://podemosaprender.org) y aprenderemos cómo subir contenido al sitio. Para eso acompañaremos las explicaciones con capturas de pantallas del repositorio y los archivos, aunque recomendamos revisarlo a gusto.

Todo proyecto en Jekyll tendrá un archivo _config.yml y las carpetas _ layouts, _include y _data. Además los archivos markdown.md y las imagenes que utilicemos y tendremos carpetas que se llamaran “_NombreColeccion” para cada una de las colecciones que definamos.

__Como podremos notar, Jekyll no publica nada que comience con _ y entiende que ahí hay material que va a utilizar.__

Jekyll trabaja con lenguaje [MarkDown](https://markdown.es/) y [Liquid](https://shopify.github.io/liquid/). Y utiliza YAML para estructurar la información que necesita para trabajar.

El archivo _config.yml está escrito en YAML. En este archivo definimos la URL principal, el titulo y la descripcion de la web, links del navbar, la estética del sitio, archivos a excluir, y las colecciones entre otras cosas. 

[Mira nuestro archivo _config.yml] (https://github.com/podemosaprender/podemosaprender.github.io/blob/master/_config.yml)

El contenido que deseemos publicar en cada página estará en un archivo MarkDown que a su vez tendrá un encabezado en YAML. Este encabezado, llamado *front-matter* es donde definimos el permalink, el titulo del post, la plantilla html que utilizaremos (layout).
Cada Atributo del front-matter lo podremos utilizar en el html como {{ page.Atributo }} y de igual manera con {{ content }} el resto del markdown.

<img src="/img/Jekyll1.jpg">

En este caso, vemos que en el front-matter no tiene asignado layout entonces automaticamente utilizará el definido en _config.yml como default, que estará en _layout/default.html

La carpeta _layout tendrá los códigos HTML de cada una de las plantillas que tengamos disponibles para los distintos tipos de posteos que tenga nuestra web.

<img src="/img/Jekyll2.jpg">

El codigo de default.html es el siguiente: 

‘ ---
layout: base
---
<div class="intro-header"></div>
<div role="main" class="container">
  {{ content }}
</div> ‘

Y podremos notar que en el front-matter dice “layout:base”, eso significa que esta plantilla a su vez utiliza otra plantilla que es base.html

Lo destacable de todo esto es la versatilidad que nos permite Jekyll, ya sea a la hora de reutilizar fragmentos de código html o definir y utilizar facilmente elementos del front-matter. A continuación, veremos otra forma muy util de reutilizar código html.

En la carpeta _include tendremos pedazos de código html para utilizar en distintas situaciones, por ejemplo footer o header. Y cada vez que queramos que un layout o un markdown incluya este fragmento, lo llamaremos usando {% include header.html %}
De esta manera, en vez de copiar y pegar codigo en cada uno de los layouts, tendremos los includes donde modificando ese fragmento se modifica en todos los layouts donde los incluimos.

Por otra parte, las colecciones son una forma de agrupar contenido. En podemos aprender usamos 2 colecciones: contenidos y personas. Para esto es necesario definirlas en _config.yml

‘ collections:
   personas:
     permalink: /con/:path
     output: true
   contenidos:
     output: true
‘
Y dentro de las carpetas _contenidos y _personas estarán los markdowns con los contenidos que se publicaran en estas secciones. 

Entendiendo esto, veremos cómo publicar este contenido en la web de PodemosAprender. Esto lo haremos igual que cuando subimos nuestro perfil al sitio {/para/participar }.

