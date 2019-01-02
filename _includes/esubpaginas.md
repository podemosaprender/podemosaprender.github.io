{% comment %} #INFO: listar paginas que empiezan con la url de la que incluyo{% endcomment %}
{% assign kw= page.url | append: '/' %}
{% for p in site.contenidos %}
	{% if p.url contains kw %}
* <a href="{{p.url}}">{{ p.url | replace: '-',' ' }}</a>
	{% endif %}
{% endfor %}
