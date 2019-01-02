---
permalink: /con
title: Con
---
PodemosAprender /con/ otras personas, equipos, organizaciones ... Por ejemplo:

{% include esubpaginas.md %}

{% comment %} #INFO: listar paginas que empiezan con la url de la que incluyo{% endcomment %}
{% for p in site.personas %}
* <a href="{{ p.url }}">{% if p.title %}{{ p.title }}{% else %}{{ p.url | replace: '/con/','' |  replace: '-',' ' }}{% endif %}</a>
{% endfor %}


