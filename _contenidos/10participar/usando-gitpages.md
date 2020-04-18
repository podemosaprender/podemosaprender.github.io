---
permalink: /usando/gitpages
---

Es fácil compartir archivos en la web, sin instalar nada, e incluso mantener un sitio entre a muchas personas sin que se rompa como hacemos con este!

<iframe width="560" height="315" src="https://www.youtube.com/embed/hgp2NEwusUQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Tareas avanzadas que hacemos para agregar los cambios al repo principal que se muestra en podemosaprender.org

Si te toca mezclar un rango de commits desde un pull request u otro repo, me sirvió mucho [esta guía](https://feeding.cloud.geek.nz/posts/cherry-picking-range-of-git-commits/) 

Si anda en tu versión de git podés hacer `git cherry-pick 7f545188^..a7785c10 `

Sino básicamente

* Creas una rama para traerte los cambios con `git checkout -b otra-rama-master master`
* Te traes los cambios a la rama que creaste `git pull https://github.com/fulano/su_repo.git master`
* (acá empieza la magia)
* Creás una rama con el último commit que querés traer `git branch tempbranch a7785c10` (a7785c10 es el hash del último commit que querés agregar y podés con seguir con `get tree`)
* Le aplicás los cambios con `git rebase --onto master 7f545188^ tempbranch` (7f545188 es el hash del primer commit que querés agregar)
* Ahora volves a TU master `git checkout master`
* Y apuntás al último commit de tempbranch `git reset --hard tempbranch`
* Ya podés borrar la rama temporal `git branch -d tempbranch`

`git tree` es un alias cómodo para agregar a tu gitconfig

~~~
[alias]  
tree = log --oneline --decorate --graph
~~~

Y agrego [esta explicación](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase) con buenos gráficos de como funciona _esta magia_ 
