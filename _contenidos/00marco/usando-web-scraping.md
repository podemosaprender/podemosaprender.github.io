---
permalink: /usando/Web-Scraping
tags: [scraping, html, datos]
---


**Web Scraping**

El Jueves 18 de Junio nos juntamos a aprender a hacer Web Scraping: una técnica utilizada para extraer información de sitios web

Aprendimos que esta técnica puede aplicarse mediante distintas herramientas. La herramienta que utilicemos depende de la complejidad que posea la página (como esté ordenada su estructura html) y nuestras necesidades

**Tampermonkey**

La opción más fácil para comenzar es la que recomendó Leonardo Salazar

Se trata de Tampermonkey (https://www.tampermonkey.net/)

Tampermonkey es una extensión que podemos agregar a nuestro navegador de preferencia (Chrome, Microsoft Edge, Safari, Opera Next o Firefox).
Este software permite al usuario agregar y usar scripts para controlar la pagina deseada. Para esto emplea el lenguaje Javascript

**Ejemplo de uso con Google Chrome:**

1)Buscamos la extensión entre las extensiones de google chrome y la añadimos

2)Una vez instalada la extensión se nos abre y eso quiere decir que ya está instalado

3)Ahora podemos pasar a crear nuestro script que tome los datos del html

4)Yo no sé usar Javascript, pero encontré una página de gente que si sabe y sube su código

https://greasyfork.org/en/scripts

5)En mi caso encontré uno que recorre el html de youtube y te añade un hipervínculo para tener la posibilidad de descargar el video de youtube que estás viendo. Lo instalamos

https://greasyfork.org/en/scripts/369400-local-youtube-downloader

6)Abrimos el video de Youtube que queremos descargar. Vamos a mostrar links y nos dará una serie de opciones para descargar el video


**Puppeteer**


Por su parte Mauricio nos recomendó usar Puppeteer.  Se trata de una herramienta que nos permite utilizar un navegador Chrome headless a través del protocolo DevTools. Se ejecuta sobre NodeJS y se instala a través de npm. Básicamente, como su nombre lo indica, permite manejar como un títere la página a scrapear

**Palabras raras - Glosario**

Headless: un sistema de administración de contenido que hace que el contenido sea accesible a través de una API RESTful para mostrar en cualquier dispositivo. 
Se ejecuta en la terminal, por lo que no es necesario tener el navegador abierto.

DevTools: herramientas 🔧 de depuración integradas dentro de Google Chrome.
Nos proporcionan acceso profundo a lo que está pasando en un sitio web.

npm: sistema de gestión de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript.

En el siguiente link dejo un video de una persona que nos muestra **cómo usarlo**:

<iframe width="560" height="315" src="https://www.youtube.com/watch?v=fSVjxf3dNxQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  
