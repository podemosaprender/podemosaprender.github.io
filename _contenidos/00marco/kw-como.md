---
permalink: /como
title: Como
img: /img/castellers.jpg
---
PodemosAprender /como/ estas personas ... Por ejemplo:

{% include esubpaginas.md %}

{% comment %} #INFO: listar paginas que empiezan con la url de la que incluyo{% endcomment %}
{% for p in site.testimonios %}
* <a href="{{ p.url }}">{% if p.title %}{{ p.title }}{% else %}{{ p.url | replace: '/como/','' |  replace: '-',' ' }}{% endif %}</a>
{% endfor %}


