---
title: Usando una planilla para especificar un sistema
permalink: usando/una-planilla-para-especificar-un-sistema
img: /img/blocks_planner.jpg
---

Este método me sirvió para relevar, especificar, y documentar varios sistemas. Incluso me ayudó a bajar muchísimo la presión y ansiedad de los clientes hasta en proyectos dónde el proveedor no había entregado nada y se venía atrasando.

* Puse reuniones de 4hs a la mañana con las personas que tenían que explicar que necesitaban (4 o 5 áreas distintas) _juntas_. 
* Armé una planilla con cuatro secciones verticales: "si estaba así", "cuando ocurre", "debe mostrar", "debe quedar así". 
* Cada fila es un caso. Me contaban un ejemplo entero y lo poníamos en una fila agregando las columnas necesarias para todos los datos de entrada y salida ... 
* Ahí mismo ya se ponían de acuerdo en bastantes cosas importantes. ḂEn especial en corregir inconsistencias de sus procesos que no habían visto! 
* Después de 3 o 4 ejemplos inventamos una fórmula que prediga lo que tiene que aparecer en "debe mostrar" y "debe quedar así". 
* Agregamos más ejemplos a ver si la formula predice bien o hay que mejorarla. 
* Lo comparto a todas las personas para que por la tarde cada una trate de encontrar casos que la fórmula no cubriera. 
* La reunión siguiente arreglamos lo necesario y pasamos a otro grupo de casos.

Notar además que podés revisar que 

* Todos los estados en la sección "debe quedar así" estén cubiertos por algún ejemplo en "si estaba así" (o sea, el sistema no se cuelga porque dejo los datos en un estado del que nadie explicó como salir)
* Se llega a todos los estados "si estaba así" desde el que resulta que "debe quedar así" para algún caso (o sea, todo lo que queremos hacer se va a poder hacer por algún camino)

Notar que la planilla es simplemente la descripción de una [máquinia de estados](https://en.wikipedia.org/wiki/Finite-state_machine), un formalismo muy bien estudiado que se puede usar para representar una cantidad enorme de comportamientos y que vale mucho la pena conocer bien.

El primer relevamiento donde use este método salio buenísimo, nos divertimos, las personas de la empresa que pedía el sistema mejoraron muchas cosas de sus circuitos y procesos que no les servían, y nos quedó ese prototipo del sistema implementado en una planilla con datos de prueba para todas las situaciones importantes. A la hora de programar tener algo así es muy valioso, porque podés probar todo y hasta automatizar las pruebas antes de escribir el código. Además sabés bien que hacer porque tenes como referencia la fórmula.

Una __moraleja importantísima__ es que especificar un sistema requiere siempre que las personas que lo van a usar entiendan todas las posibilidades y consecuencias y se pongan de acuerdo. Y obviamente conviene desperdiciar la menor cantidad de trabajo y tiempo posible. Por eso reunirlas mirando la misma pantalla y prototipar con una planilla mientras hablan puede ser tan eficiente.

{/con/mauriciocap}
