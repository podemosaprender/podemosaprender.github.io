---
permalink: /usando/java-en-la-nube-con-heroku
img: /img/java-nube.jpg
---

{/con/marianopuchetta}, gracias por el tutorial!

## Como subir un proyecto a heroku

  El proyecto que subí a heroku está realizado el backend en **SpringBoot** y  en **VUEjs** el frontend. 
  
  [Proyecto en GitHub](https://github.com/marianopuchetta/CrudSpringVue02)
  
  [Proyecto en heroku](https://spring-vuejs02.herokuapp.com/#/)
  
  ¿Como lo hice?
  
 ## 1. Crear una cuenta en heroku:
 
 Entrar a  [heroku.com](https://www.heroku.com/) , tiene 3 tipos de cuentas,una es gratuita, pero agrega **"heroku.com"**
 a la dirección de nuestra aplicación y además tiene otras restricciones, como solo poder agregar soporte para base de datos 
 Postgresql **sin** tener que verificar nuestra cuenta ingresando una tarjeta de crédito.
 
 ## 2. Descargar heroku cli:
 
 Uno de los métodos para realizar el deploy es a través de la terminal(en mi caso tengo windows) **CMD** ya contando con git instalado
 en nuestra PC hay que descargar e instalar [heroku cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
 
 ## 3. Deploy
 
 * Abrir una terminal, dentro de la carpeta del proyecto ya listo:
```
> heroku login   
> git init
> git add .
> git commit -m "changes commit"
> heroku create <nombre-de-la-aplicacion>
> git push heroku master
> heroku open
```
Aunque usemos el comando **git** este solo versiona nuestros cambios en muestra Pc y si hacemos **git push heroku master**, en heroku 
también, para subirlo a **GitHub** hay que seguir los pasos tradicionales para el caso.

**heroku login** , nos loguea desde nuestra PC con heroku.com.

**git init**  , si ya habías iniciado git dentro de tu proyecto este paso no se hace.

**git add .**  , añade los cambios que se realicen.

**git commit -m "changes commit"**  , commit de los cambios.

**heroku create -nombre-de-la-aplicacion-**  , escribimos el nombre que queremos ponerle a nuestra app,
                                           además tambien va a ser la direccion ej: htts://www.nombre-de-la-aplicacion/heroku.com.
                                        
**git push heroku master**  , sube la app a heroku

**heroku open**  , abre una ventana del navegador con nuestra aplicación.

Si nuestro proyecto no tiene base de datos ya debería funcionar, si no hay que realizar lo siguiente:

**Añadir el addons de base de datos de PostGreSQL**(yo había realizado mi proyecto en MySQL, heroku tiene ClearDB para trabajar
con MySQL pero se necesita verificar la cuenta para poder añadirlo)

```
> heroku addons:create heroku-postgresql
```
En mi caso tuve que añadir en el archivo **pom.xml** las dependencias para postgresql y en **aplication.properties** las credenciales
proporcionadas por heroku para acceder a la base de datos, como "username, password y url". Se obtienen ingresando a nuestro 
dashboard en heroku, click en la base de datos, -settings, -view credential.

Yo tuve que realizar los pasos varias veces, crear y borrar apps en heroku, creándolas de nuevo y borrarlas otra vez.
No me salio a la primera, buscar en los errores que nos muestra cuando hacemos el push y falla ayuda bastante!!.

### Fuente

[Deploy Spring Boot applications on Heroku](https://github.com/Abdallah-Abdelazim/yt-heroku-demo/blob/master/README.md)





