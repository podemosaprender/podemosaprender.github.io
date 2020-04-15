---
permalink: /usando/buenas-practicas-para-logs
img: /img/programar.png
tags: [practica, logs, programar]
---

{/con/mauriciocap}

Generar buenos mensajes de "log" (_bitacora_) es de las cosas más más importantes de hacer. Hay varias maneras, te puedo contar cosas que me dieron resultado en sistemas que procesan varios millones de transacciones por mes desde hace un par de décadas ...

1) Una función "logm" que le paso a) si es info, dbg, o error, b) una "prioridad" 1 urgente ... 9 nada importante, un mensaje, y un objeto que serializo ej. como json

Entonces en el código pongo todas las llamadas a la función de log que necesite, y puedo hacerlo incluso en una sola linea de modo que si las de nivel "9" afectan la performance las puedo comentar automáticamente con find/replace por ej.

En logm simplemente me fijo si la prioridad del mensaje es menor que un limite de verbosidad quiero, que incluso puedo controlar "en caliente" sin reiniciar el proceso cambiando la variable global.

2) Escribo los mensajes cada uno en una línea asegurándome de que los puedo procesar con UN PROGRAMA, tipo grep ... 

En cada línea me aseguro de tener fecha y hora, thread/process id, id de transacción en todos los que pertenezcan a una misma operación, ip del cliente para ver todos los que vinieron de esa ip, etc. También poder saber si una transacción termino ok o con error con solo filtrar las lineas por algún texto.

Así puedo filtrar una transacción aunque pase por distintos procesos y servidores, o entender todo lo que paso con un proceso, o descubrir problemas de concurrencia, etc.

3) Nunca uso debuggers, pongo buenos mensajes de logs Y LOS DEJO: si no lo entendí una vez, es probable que vuelva a no entenderlo otra ... y puede ser en producción con miles de usuarios concurrentes ...

4) NO ME RELAJO en loguear "stack traces" ... si hay una excepción la atrapo, logueo claramente que paso, y en todo caso la lanzo de nuevo.

Ahora ademas hay herramientas copadas como Splunk que se llevan barbaro con esta forma de loguear. Mi inspiracion inicial fue syslog y en general si vas a desplegar en la nube ser "syslog compatible" tambien es buena idea.

Otros trucos copados y fáciles son

5) agregarle a los inputs que recibe el programa una "marca" que se agrega a los mensajes de log, de modo que si necesito probar algo en caliente mando la transacción con la marca y es fácil encontrarla

6) poder subir la verbosidad para una transacción sola, simplemente agregas un parámetro para eso ej. en los requests

7) poder pedir un "dry run" de una transacción: que recorra todo el camino pero no guarde nada ni deje consecuencias

¡Tengo más! Venite al grupo y preguntáme o suma tus ideas a este articulo.
