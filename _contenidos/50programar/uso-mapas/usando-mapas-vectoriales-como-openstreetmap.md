---
permalink: /usando/mapas-vectoriales-como-openstreetmap
img: /img/osm.jpg
tags: [practica, programar, mapas]
---

La información de un mapa te puede servir para muchas cosas valiosas, por ej. planificar y optimizar rutas. Aunque a veces tenés sólo imágenes por ej. aéres o que alguien dibujó, cada vez hay más mapas _vectoriales_ con 

* Información de puntos: posición, de que se trata, etc.
* Conexiones entre puntos: caminos, cables, caños, trenes, lotes, ciudades, provincias, ríos ... 

Relevar esa información y mantenerla actualizada es _muy costoso_ pero por suerte existe [Open Street Maps](https://www.openstreetmap.org), un proyecto de datos abiertos que podemos mantener entre todos.  Yo ( estás charlando {/con/mauriciocap} ) le saqué muchísimo jugo usándolo para clientes que trabajan con mapas y voy a compartir a continuación algunas cosas para que empieces a aprovecharlo vos también.

Lo vamos a conectar también con Google Maps, porque 
 los mapas personalizados de Google Maps son fáciles de editar y compartir como otros documentos desde tu navegador y se pueden exportar en un archivo ".kml” fácil de procesar como quieras (es texto, tipo xml).

Quiero mostrarte como sacar _y agregar_ datos en OSM, porque además de _sacar datos_, para cualquier proyecto que necesite relevar y mantener actualizados _colaborar_ con la comunidad de OSM puede ser una gran ayuda.

## Un caso práctico

{/con/victorburec} Nos compartió este relevamiento de cruces. Un trabajo que le llevo muchas reuniones, visitas, consultas a distintos organismos. Lo hicieron en Google Maps y el desafío es _mantenerlo actualizado_.

Así se ve y puede editar [en Google Maps](https://www.google.com/maps/d/u/0/viewer?mid=13WNUquvNnENIWzDGPiHEywvviekCjwGs&ll=-34.73450592640373%2C-58.43146750000005&z=10)


### ¿Qué puedo sacar de Google Maps (o cualquier otro lado)?

El menu de Google Maps si entras al link que compartí te ofrece exportarlos datos en formato kml, que es un archivo de texto muy simple. 

Como mínimo vas a conseguir una lista de puntos con su posición. En este caso en latitud y longitud que es lo más fácil. Cambiar de un sistema de coordenadas a otro, por ej. de X e Y en metros a latitud y longitud, se llama _reproyectar_ y lo dejamos para un capítulo más avanzado (¡pedíme ayuda!)

El que exporta Google Maps es así:

~~~
<Placemark>
	<name>MITRE/BARTOLOME</name>
	<description><![CDATA[Línea: Belgrano Norte<br>Ramal: Retiro - Villa Rosa<br>Servicio: Cargas y pasajeros<br>Nom. Alt.: MITRE BME. AV.<br>Obs.: -<br>Actualidad: Paso bajo nivel<br>2019: Paso bajo nivel<br>2023: Paso bajo nivel<br>Tipo Obra: No hay obra proyectada<br>Estado: -<br>Progresiva: 14,66200<br>Año estimado de Obra: -<br>Última actualización: enero 2017]]></description>
	<styleUrl>#icon-1784-0F9D58</styleUrl>
	<ExtendedData>
		<Data name="L�nea"> <value>Belgrano Norte</value> </Data> 
		<Data name="Ramal"> <value>Retiro - Villa Rosa</value> </Data>
		<Data name="Servicio"> <value>Cargas y pasajeros</value> </Data>
		<Data name="Nom. Alt."> <value>MITRE BME. AV.</value> </Data>
		<Data name="Obs."> <value>-</value> </Data>
		<Data name="Actualidad"> <value>Paso bajo nivel</value> </Data>
		<Data name="2019"> <value>Paso bajo nivel</value> </Data>
		<Data name="2023"> <value>Paso bajo nivel</value> </Data>
		<Data name="Tipo Obra"> <value>No hay obra proyectada</value> </Data>
		<Data name="Estado"> <value>-</value> </Data>
		<Data name="Progresiva"> <value>14,66200</value> </Data>
		<Data name="Año estimado de Obra"> <value>-</value> </Data>
		<Data name="Última actualización"> <value>enero 2017</value> </Data>
	</ExtendedData>
	<Point> <coordinates> -58.506536,-34.540468,0 </coordinates> </Point>
</Placemark>
~~~

### Cómo lo agrego a OSM

Aunque hay un editor, que menciono más abajo, me sirvió mucho más y resultó más fácil ir directo a los datos.

OSM carga puntos sueltos (los llama _node_).
Después conecta ALGUNOS en polilíneas (no todos) 
ej. de tipo _way_ para rutas, calles, trenes ... 

La base de datos se puede bajar en XML eligiendo un sector pequeño en el sitio de OSM o para países o regiones enteras desde algunos sitios que menciona su wiki. El de toda Argentina sin comprimir ocupa 4Gb aproximadamente.

Para nuestro caso tienen esta pinta:

~~~
<node id="29886123" lat="-34.4644934" lon="-58.510413" version="12" timestamp="2018-07-18T03:41:55Z" changeset="0">
	<tag k="crossing:barrier" v="half"/>
	<tag k="crossing:bell" v="yes"/>
	<tag k="crossing:light" v="yes"/>
	<tag k="railway" v="level_crossing"/>
</node>
~~~

Como está generado por un programa además es muy fácil de procesar incluso sin entender demasiado el formato, simplemente extrayendo lo que te interesa cuando encontrás algún texto. Si usas linux lo podés explorar con comandos como `grep` o `less` .

Los cambios se suben del mismo modo _envueltos_ en un _changeset_ que podés subir para que pueda seguir editando la comunidad

[OsmChange](https://wiki.openstreetmap.org/wiki/OsmChange)

Aquí se puede ver [un ejemplo](https://www.openstreetmap.org/api/0.6/changeset/17871446/download)

Para nuestro {/usando/microproyecto} hagamos un convertidor de KML de Google Maps a [OSMChangeset](https://wiki.openstreetmap.org/wiki/Changeset). 
Así podés pasar y actualizar todos tus puntos automáticamente y con los metadatos que les pusiste ej. de obras futuras, etc. y al revés aprender a extraer de OSM lo que te sirva.

Lo único que necesitamos es entender cómo se guardan en OSM, pero por suerte la wiki es muy completa y hay todavía más herramientas, por ej. [este buscador](http://tagfinder.herokuapp.com/search?query=crossing)

El objetivo es agregar los datos extra de la forma más parecida posible a los que están en OSM de modo de integrarlos a la comunidad, que sirvan, y que se sigan actualizando-

En el peor caso hay una ["note" genérica](https://wiki.openstreetmap.org/wiki/Key%3Anote) pero tratemos de ser más específicos.

En nuestro caso para los cruces de vías de ferrocarril buscando en el mapa y la wiki encontramos que tenemos que generar elementos de tipo Node con [este tag](https://wiki.openstreetmap.org/wiki/Tag:railway%3Dcrossing)

Además existen [anotaciones](https://wiki.openstreetmap.org/wiki/Map_Features#Annotation) definidas para varios de los datos que nos interesan por ej. start_date y end_date 

Entonces nuestro trabajo es simplemente convertir nuestros datos de KML o una tabla o planilla o ... a un archivo de texto con el formato de OSM, y si queremos al revés leer el texto del archivo de OSM y convertirlo en una planilla por ej.

## El editor visual oficial de OSM

OSM tiene un editor visual bastante digno y alcanza [bajarse un .jar](https://josm.openstreetmap.de/wiki/Download) para tenerlo en tu compu. Te permite hacer el ciclo completo de bajar datos para una región __pequeña__, editarlos, y subirlos a OSM.

Tiene bastantes plugins que se instalan desde Edit/Preferences y el dibujito del enchufe. Hay uno para leer archivos klm, csv, etc. se llama [OpenData](https://wiki.openstreetmap.org/wiki/JOSM/Plugins/OpenData).

Los archivos que importas se agregan como "capas" por encima del mapa de OSM, para agregar tus datos a OSM tenés que seleccionarlos y usar la operación _merge_ ... que debería ser uno por uno para asegurarte que cumplís con los estándares de OSM.

Si el archivo OsmChange que generaste tiene la extensión .osc además del formato que XML requerido, lo podes ver en JOSM como un layer más.

# Más cosas que te podemos ayudar

* Podés bajar el archivo con datos para [toda Argentina](https://download.geofabrik.de/south-america/argentina.html) El que esta en formato xml fácil es el .osm.bz2 y se procesa cómodamente usando less, grep, etc. en la consola de linux.
* Extraer los datos de OSM a una base de datos relacional o el formato que necesites.
* Mostrar y editar tus mapas en la web usando [Leaflet](https://leafletjs.com/)
* Fabricar tus propios _tiles_ para mostrar en Leaflet, con datos vectoriales, en el servidor o al vuelo en el browser.
* Otras herramientas para trabajar con información geográfica por ej. en entornos para ciencia de datos como Google Colab, R, etc.



