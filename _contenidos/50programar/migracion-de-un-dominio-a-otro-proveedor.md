Es recomendable además de tener el dominio principal, tener por lo menos un dominio secundario. Cuando todo está bien, o es la primera vez, apunto tanto el dominio principal como el secundario y me aseguro que los dos estén andando.
Al momento de migrar primero hago todo el laburo con el dominio secundario, documentando paso por paso y haciendo todas las pruebas necesarias. Recién una vez que tengo todo funcionando como me gusta, hago los mismos pasos con el principal.
Las migraciones de dominios tardan un tiempo variable entre unas pocas y unas muchas horas y esos son tiempos que vos no podés asegurar.

Dejo un listado de los pasos que yo hago, por ahí le sirven a alguien como referencia (esto es general y lo uso tanto para el dominio secundario como el principal):
- Lo antes posible que sepa que voy a tener que migrar, bajar el TTL (Time To Live o tiempo de cache) de las entradas del DNS. Esto va a hacer que suba la cantidad de queries al DNS pero también que durante la migración haya menos tiempo hasta que esté todo actualizado. Salvo que tengas un sitio con cientos de miles de visitas diarias bajar este valor de 12 o 24 hs (expresado en segundos) a 5 o 10 minutos no te va a joder.
- Copiar o generar los nuevos registros en el nuevo servidor de DNS
- En caso de mover un sitio, agrego un www2.MIDOMINIO para usarlo en caso de que visitantes sigan cayendo en el servidor viejo y poder redirigirlos al nuevo sitio inequivocamente
- En caso de mover un mailserver trato de tener una nueva cuenta que esté solo en el nuevo servidor para pruebas
- Verificar con dig (herramienta de línea de comando) o con alguna otra que el nuevo servidor de DNS responda los queries A, AAA, MX, etc con los datos que yo quiero
- Poner una página de "mantenimiento" en el servidor principal (solo para migración de sitios)
- Matar todas las posibles sesiones activas en el sitio (solo para migración de sitios)
- Hacer el último backup de la base y los archivos y migrarlo al nuevo servidor (solo para migración de sitios). Me aseguro que la base no pueda volver a ser usada (cambiando por ej el nombre)
- Modificando mi archivo host, verificar que el sitio con la última base y archivos esté funcional y correcto (solo para migración de sitios)
- Modificar en el registrar para que empiece a usar el nuevo servidor de DNS
- Una vez que el www2.MIDOMINIO es navegable sin tener el host modificado, pongo un redirect en el sitio viejo que reemplace la página de mantenimiento y mande a los visitantes a www2.MIDOMINIO
- Verificar periódicamente desde distintas máquinas (en distintos lugares) que estén resolviendo bien el dominio
- Una vez que tengo todo funcionando como quiero en el nuevo servidor, recién ahí borro / doy de baja el servidor viejo. En general esto no lo hago inmediatamente y lo dejo al menos unos cuantos días. Antes de dar de baja todo me fijo si cayeron nuevos mails en las cuentas del servidor viejo antes de eliminar todo.

