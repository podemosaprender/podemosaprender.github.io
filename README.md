# Sitio de PodemosAprender con jekyll y en gitpages

#ASK: mauriciocap

> Un sitio que podemos actualizar entre todos

## ¿Cuál es el plan?

Qué distintas personas puedan aportar páginas y secciónes, ej. sobre una herramienta, tutorial, proyecto...

Esta solución permite que con solo tener una cuenta en github cualquiera haga desde la web

* Su fork de este repositorio https://github.com/podemosaprender/podemosaprender.github.io
* Edite o agregue los archivos que quiera (su info personal, un tutorial, etc.)
* Vea y comparta su version en su gitpages, testee, etc.
* Genere un pull request para mezclar los cambios en el repositorio principal y que se vea en el sitio oficial

Si sos principiante la inversión es mínima y en la herramienta que más te sirve para interactuar con otras personas que te vean, enseñen y ayuden.

## ¿Cómo funciona?

Además de servir archivos estáticos sin modificarlos, ej. imágenes  
Cada vez que haces un push github ejecuta jekyll para generar todas las páginas.

Las páginas se pueden generar a partir de archivos markdown (como este) o html.

Cada página puede controlar la generación incluyendo en las primeras lineas información en formato "front-matter" https://jekyllrb.com/docs/front-matter/

El generador llama al código de alguna plantilla en `_layouts` según el "tipo" indicado en el frontmatter o la configuración (por ahora sólo estamos usando `persona`y `page`) https://jekyllrb.com/docs/layouts/

Además tiene un mecanismo de `includes`.

El lenguaje de las plantillas es **horrible**, pero divertido de hackear ;) https://jekyllrb.com/docs/liquid/
 
Todo el proceso se dirige desde `_config.yml` https://jekyllrb.com/docs/configuration/

Le estuve agregando un poco de mágia para que sea lo más automático y consistente posible y creo que llegue a nivel _guru_ (ayudame a transmitirlo antes de que me olvide :P )

## ¿Cómo agrego contenido?

Lo configure para que usemos mayormente DOS carpetas:

* Podés agregar tu info personal en `_personas` y tu foto en `personas_img`
* Podés agregar páginas sueltas o MEJOR agrupadas en carpetas (ej. de un lenguaje, herramienta, tutorial, etc.) en `_contenidos` (de esa forma es mucho más fácil hacer los merges sin conflictos)

Fijate que los archivos tienen en el front-matter un atributo "permalink" que define _en que url_ van a aparecer, de modo que independizamos las carpetas donde los guardamos de las url donde los mostramos.

A la hora de escribir, empezá copiando alguno parecido. Una de las mágias que agregué es que si escribis {/link/a/una/url-que-existe} te lo convierte automaticamente en un link con un formato especial.

Fijate que todos los que use hasta ahora, que se ven en la página principal, tienen como prefijo una "palabra clave" que si le hacés click te lleva a una explicación. Sería _muy muy bueno_ si podemos organizar el sitio de ese modo, porque así priorizamos por ej. la práctica, que lo que hacemos cree valor `para`, etc. y nos liberamos ej. de la confusión con las herramientas que si no se aplican no valen nada.

Para cerrar el asunto del contenido, también tengo un script para pasar contenido de blogger a markdown que voy a usar para traer lo que sirva de la version que tenemos ahí (y podríamos usar para agregar info de otros sitios, etc.) (XXX:crear y compartir en su propio repo, XXX:convertir en app ej. en heroku para llenarnos de gloria?)

Además, como son archivos, es muy fácil agregar contenido generado por programas, extraido de otras partes, etc.

## ¿Me ayudás con el desarrollo?

¡Necesitamos ayuda **desesperada** con el diseño! El sitio está basado en bootstrap (3.algo). Además, casi todos los estilos se controlan desde `css/main.css` que también pasa por el generador así que puede tener if , for, variables, etc.

Además obviamente podés tocar en `_layouts` y `_includes` y los archivos específicos en html

El camino más cómodo para desarrollar, aprovechando que no hay mucha magia, es o tocar directamente el .css o escribir un .css como te guste, un layout que lo cargue y un archivo html que lo use en el front-matter y tenga lenguaje de plantillas que quieras probar antes de repartirlo en layouts e includes.

La versión actual la arranqué de un template que saque de github. Tiene bastante código complicado para borrar o simplificar (y eso que tire bastante a medida que iba aprendiendo)

Además le podemos seguir agregando mágias ej. generando páginas interactivas tipo curso, etc. Conectando el sitio a nuestras apps y apis REST, etc.

Me gustaría que usemos el sistema de issues de github así también nos ponemos cancheres con eso :)

Se puede ejecutar todo localmente (al menos en mi Ubuntu 16.04 anduvo de una) ejecutando en el directorio
```
bundler # para bajar todo lo necesario
bundle exec jekyll serve # para lanzar el sitio, que se regenera cuando modificas archivos
```

(hay que tener cuidado de no hacer modificaciones incompatibles con gitpages)

Y además podes configurar Travis para que lo construya y te muestre si dio bien o con errores ... https://travis-ci.org/podemosaprender/podemosaprender.github.io/builds/474281172



