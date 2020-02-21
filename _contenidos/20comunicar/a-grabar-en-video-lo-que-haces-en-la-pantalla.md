---
permalink: /a/grabar-en-video-lo-que-haces-en-la-pantalla
img: /img/video.png
tags: [compartir, tutorial]
---

Podés grabar lo que vas haciendo la pantalla ej. para subir el video a youtube con estas herramientas.

¡Avisanos si subís algo que lo compartimos {/usando/nuestro-canal-de-youtube}

Los videos conviene que estén en 1280 x 720 para que se vean bien las letras en youtube, en general no sirve que no se pueda leer de la pantalla.

Algunas opciones (más recomendada primero, todas gratis y buenas)
* [Plugin para Chrome UseLoom](https://www.useloom.com/)
* [Win Linux Mac OBS Studio](https://obsproject.com/) {/con/ramirog}
* [Linux Vokoscreen](https://packages.ubuntu.com/xenial/video/vokoscreen) {/con/mauriciocap}
* [Windows CamStudio](https://camstudio.org/) {/con/mauriciocap}

Además algunos más sofisticados
* [Linux, graba la consola EN TEXTO (o sea que podés parar el "video" y copiar de la pantalla) asciinema](https://asciinema.org/)
* [Web, graba lo que edirás y la voz, deja ver los archivos! scrimba](https://www.youtube.com/watch?v=rDIlR71omg4)

Este es el tutorial de UseLoom:

<iframe width="560" height="315" src="https://www.youtube.com/embed/M3nyNCVMkRA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Y el camino de Los Rudos de la Consola Linux para compartir live en youtube:
```
#!/bin/sh

STREAM_KEY=$1
RTMP_URL=rtmp://a.rtmp.youtube.com/live2

ffmpeg -f x11grab -framerate 30 -video_size 1280x720 -i :0.0 -f pulse -i default -c:v libx264 -preset ultrafast -maxrate 2500k -bufsize 5000k -g 60 -vf format=yuv420p -c:a aac -b:a 128k -f flv -segment_list_flags +live $RTMP_URL/$STREAM_KEY
```
