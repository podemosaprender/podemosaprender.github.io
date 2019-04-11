//INFO: entender La Computación como "cintas y estado" (Turing) o "funciones" (Church) y usar esos conceptos!
//ASK: aprender@mauriciocap.com
//OjO: voy a usar la menor cantidad de elementos de javascript posible para que entienda la gente que conoce menos.

//-----------------------------------------------------------------
//S: utiles, no es importante, saltear esta sección
Out_el= document.getElementById("out_el"); //U: elemento para mostrar la salida
function o(...args) {
  Out_el.value+="LOG:\n"+args.map(a => {return typeof(a)=="string" ? a : JSON.stringify(a,null,true)}).join(":")+"\n\n";
}

function tryNum(x) { //U: trata de convertir x en numero si no se pierde info
  var v= parseFloat(x);
  return v==x ? v : x; //A: el float representa el mismo valor que x
}

function pasos_historia(h) { //U: separa una historia en una sola string, en un array de pasos
  return h.split(/\s*\.\s*[\r\n]+/g);
}

function tejer_historias(historias) { //U: mezcla los pasos de varias historias manteniendo el orden de cada una.
  var r=[]; //DFLT, devuelvo vacio
  var porDondeVoyEnCadaHistoria= new Array(historias.length).fill(0); //A: cada una empieza en el primer paso.
  var pasosHistoria= historias.map(pasos_historia);
  
  function meQuedanPasosDeAlguna() {
    for (var historia_idx=0; historia_idx<historias.length; historia_idx++) {
      var susPasos= pasosHistoria[historia_idx];
      var proximoPaso= porDondeVoyEnCadaHistoria[historia_idx];
      if (proximoPaso<susPasos.length) { return true; } //A: al menos de esta me quedan pasos
    }
    //A: si llegue aca, de ninguna me quedaban pasos y no hice return true
    return false;
  }

  while (meQuedanPasosDeAlguna()) {
    var queHistoria_idx= Math.floor(Math.random()*historias.length); //A: un numero entre cero y el indice de la ultima historia
    var susPasos= pasosHistoria[queHistoria_idx];
    var proximoPaso= porDondeVoyEnCadaHistoria[queHistoria_idx];
    if (proximoPaso<susPasos.length) { //A: no termine esta
      var estePaso= susPasos[proximoPaso];
      r.push(estePaso);
      porDondeVoyEnCadaHistoria[queHistoria_idx]++; //A: avance uno en esta historia
      console.log("TEJER AGREGAR PASO",estePaso,queHistoria_idx,porDondeVoyEnCadaHistoria);
    }
  }
  //A: pusimos todos los pasos de todas las historias en r
  return r;
}

//-----------------------------------------------------------------
//S: Historias, funciones y cintas

//PASO_01: empecemos con una historia, así contada en una string
HistoriaA= `_ Juan _ compro _ 1 _ par de zapatillas _ en la pagina que el negocio saco del inventario y reservo.
_ Juan _ pago _ 1000 _ pesos por _ 1 _ par de zapatillas _ y el negocio recibio el pago y tiene _ 1000 _ pesos mas en el banco. 
_ El negocio _ envio _ 1 _ par de zapatillas _ a _ Juan _ y lo regisro en la reserva. 
_ Juan _ recibio _ 1 _ par de zapatillas _ en su casa. 
_ Juan _ confirma _ que tiene _ 1 _ par de zapatillas _ que pidio.`;

//PROBA: o(HistoriaA)

//PASO_02: es igual que muchas otras historias, hagamos una "fabrica" de historias parecidas ...
function historiaAPeroCon(quien,que,cantidad, cuantoPago) {
  return HistoriaA.replace(/Juan\s*_/g,quien+" _")
                  .replace(/_\s*1\s*_/g,"_ "+cantidad+" _")
                  .replace(/_\s*par de zapatillas\s*_/g,"_ "+que+" _")
                  .replace(/_\s*1000\s*_/g,"_ "+cuantoPago+" _");
}

//PROBA: o( historiaAPeroCon("Mau","aviones",3,555) )

//APRENDISTE: la idea de FUNCION, que es MUY GENERAL: es una "historia" o "receta", a la que se le pueden cambiar algunas partes (parámetros)
//EN GENERAL: con eso se puede describir TODO lo que se pueda calcular con algun metodo https://en.wikipedia.org/wiki/Lambda_calculus
//EJ. en teoría literaria se habla de "funciones narrativas", por ej. todas las veces que alguien "sale, viaja, llega" o "se cita, espera, se encuentra"
//FIJATE: que las funciones javascript funcionan MUY PARECIDO: 
//   los valores de los "parametros formales" se reemplazan por los de los "parametros reales" en "el cuerpo" de la función
//EJ. hay lenguajes viejos o para usos especiales que funcionan literalmente reemplazando strings, https://www.gnu.org/software/m4/manual/m4.html
//EJ. hay muchísimos más que reemplazan en arrays y se siguen usando ...

//PASO_02: probemos como nuestra historia sirve para crear otras parecidas
hJuanZapasMil= HistoriaA;
hAnaFlores= historiaAPeroCon("Ana","Ramos De Flores", 2, 200); //FIJATE: que pongo valores para darme cuenta "de ojito" si anda bien, ej. 2 y 200
hMauLapices= historiaAPeroCon("Mau","Lapices", 30, 300); //FIJATE: que en este puse 3 y 300

//PROBA: o(hAnaFlores, hMauLapices)

//PASO_03: probemos como se vería desde el negocio, todo a la vez ;)
hComoVeElNegocio= tejer_historias([hJuanZapasMil, hAnaFlores, hMauLapices]);
//PROBA: o(hComoVeElNegocio.join("\n"));

//APRENDISTE: como usamos la idea de FUNCION para tratar de entender y explicarnos la enorme variedad de cosas que vemos sueltas cada dia
//Ej. probando si los resultados mezclados de todas las "funciones" que conocemos dan algo parecido a lo que vemos, o hay más cosas para explicar!
//APRENDISTE: a generar "tiras" de pruebas complejas para cualquier sistema! las teclas, posicion del mouse, de todo el universo se podrían
//                grabar Y reproducir en "cintas", como esos 
//APRENDISTE: de que va la relación entre FUNCIONES y CINTAS que está en la base de la Ciencia de la Computación 
//       (si vas a hacer la materia por ahi tenes que leer mas ;) ) https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis
//IMAGEN: los rollos de pianola, https://www.youtube.com/watch?v=iGFjpgx__z8 
//IMAGEN: el escritor de Jaquet-Droz, https://www.youtube.com/watch?v=bY_wfKVjuJM
//IMAGEN: la computadora programable (y casi mecánica) Z1 http://computersofourpast.weebly.com/the-first-computer-series.html


//====================================================================================================
//PASO_03: procesar, interpretar, compilar ... 

//----------------------------------------------------------------------------------------------------
//FIJATE: que a veces pensamos en "funciones" y otras en "cosas y estado" (ej. no hay comidaaaa!), 
//          sale el libro "Church, Turing, Vd y Yo" de Ketty de Pirolo <3

//PATTERN: los sistemas comerciales suelen guardar un "estado" (ej. en bases de datos) como las Maquinas de Turing
//PASO_04: en nuestro caso sería algo asi ...
Tiempo= 0;

Inventario= {
  "par de zapatillas": 1,
  "Ramos De Flores": 10,
  "Lapices": 20,
}

Caja= {
  porPagos: 0,
  porError: 0,
}

EstadoEnvios= {}; //U: quien_que -> pendiente, pagado, enviado, recibido //PATTERN: automata finito=regex

function o_estado() { o("ESTADO NEGOCIO",Tiempo,Caja,Inventario,EstadoEnvios) };

//PASO_05: quiero probar la "cinta" de operaciones que fabricamos más arriba, necesito aplicar los EFECTOS en el estado
//FIJATE: que hay MUCHAS formas de hacerlo, y escribir un monton de código es LA PEOR porque queda todo mezclado e ilegible
//Elegí esta que se parece a MUCHAS cosas que se usan, ej. Business Process Modeling https://www.jbpm.org/learn/gettingStarted.html
// ej. lisp/scheme y varios interpretes y compiladores por ej. el futuro de Java https://www.graalvm.org/ ;)
// Lamentablemente javascript lo hace un poco feo de escribir
AccionYEfectoNegocio= {
  compro: { 
    params: ["quien","compro","cantidad","que"],
    efectos: [
      ["Inventario",["que"],"-","cantidad"],
      ["EstadoEnvios",["quien","que","cantidad"],"<-","pendiente"]
    ]
  },
  pago: {
    params: ["quien","pago","cuanto","por","cantidad","que"],
    efectos: [
      ["EstadoEnvios",["quien","que","cantidad"],"=?","pendiente",
       [
        ["EstadoEnvios",["quien","que","cantidad"],"<-","pagado"],
        ["Caja",["porPagos"],"+","cuanto"]
       ],
       [
         ["Caja",["porError"],"+","cuanto"]
       ]
      ]
    ]
  },
  envio: {
    params: ["negocio","envio","cantidad","que","a","quien"],
    efectos: [
      ["EstadoEnvios",["quien","que","cantidad"],"<-","enviado"]
    ]
  },
  recibio: {
    params: ["quien","recibio","cantidad","que"],
    efectos: []
  },
  confirma: {
    params: ["quien","confirma","que_tiene","cantidad","que"],
    efectos: [
      ["EstadoEnvios",["quien","que","cantidad"],"<-","recibido"]
    ]
  }
}

//FIJATE: que tenemos una descripcion que NO esta en ningun "lenguaje" PERO se puede procesar con un programa!

//PASO_06: voy a generar un programa para procesar la cinta de operaciones del negocio, empiezo por los efectos
//FIJATE: que los podría escribir, pero como soy inteligente PORQUE soy vago, los voy a generar ;)

function paramAJavascript(k, params_kv) { //U: un parametro a string, numero, o variable segun figure en params_kv
  var def= params_kv[k];
  return def=="$" ? k //A: es variable
                  : JSON.stringify(def!=null ? def : k) //A: es constante
}

function efectoAJavascript(efecto_v, params_kv) { //U: devuelve el javascript que hay que evaluar para aplicar un efecto
  params_kv= params_kv || {};
  var store= efecto_v[0];
  var clave_partes= efecto_v[1];
  var clave_str= '['+clave_partes.map(k => paramAJavascript(k, params_kv))+'].join("_")'; //A: si era param reemplace, sino deje string tal cual, uni con _
  var valor= paramAJavascript(efecto_v[3], params_kv); //A: si era param, reemplace
  var js= store + "[" + clave_str + "]" + "=" + valor+";\n"; //DFTL
  if (efecto_v[2]=="=?") { //A: como un if
    js= "if (" + store + "[" + clave_str + "]" + "==" + valor +") {\n" +
      efecto_v[4].map(e => efectoAJavascript(e, params_kv)).join("") + "} else {\n" +
      efecto_v[5].map(e => efectoAJavascript(e, params_kv)).join("") + "}\n";
  }
  else if (efecto_v[2]=="+") {
    js= store + "[" + clave_str + "]" + "=+" + valor+";\n"; 
  }
  else if (efecto_v[2]=="-") {
    js= store + "[" + clave_str + "]" + "=" + store + "[" + clave_str + "] - "+ valor+";\n"; 
  }
  else if (efecto_v[2]=="<-") {
    js= store + "[" + clave_str + "]" + "=" + valor+";\n"; 
  }
  return js;
}

//PROBA: o( efectoAJavascript(["EstadoEnvios",["quien","que","cantidad"],"<-","recibido"], {quien: "Mau", que: "Aplausos", cantidad: 5}));
//PROBA: o( efectoAJavascript(["Caja",["porPagos"],"+","cantidad"], {quien: "Mau", que: "Aplausos", cantidad: 5}));
//PROBA: o( efectoAJavascript(["EstadoEnvios",["quien","que","cantidad"],"=?","pendiente",[["Xtrue",["ak"],"+",1]],[["Xfalse",["bk"],"-",2]]], {quien: "Mau", que: "Aplausos", cantidad: 5}));

//FIJATE: que con nuestra definicion podriamos generar CUALQUIER lenguaje, o varios combinados (ej. java + sql)
//FIJATE: que tu COSTO es escribir, para defenderlo O escribis QUE QUERES o escibis COMO HACERLO, si se mezclan perdes.

//PASO_07: con esa informacion podria GENERAR un interprete en javascript
function generarInterprete(accionYefecto,varName) {
  var jsFun= varName+'={};\n'; //U: las funciones que ejecutan
  for (var accion in accionYefecto) { var def= accionYefecto[accion];
    console.log("DEF",def);
    var params_kv= {}; def.params.forEach(k => params_kv[k]="$");
    jsFun+= varName+"."+accion+"= function cuando_"+accion+"("+def.params.join(",")+") {\n"+
      "o('OP "+accion+"',"+def.params.join(",")+");\n"+
      def.efectos.map(e => efectoAJavascript(e,params_kv)).join("")+
      "o_estado()\n"+ //A: mostramos el estado despues de cada operacion
      "\n}\n\n";
  }
  return jsFun;
}

interpreteJs= generarInterprete(AccionYEfectoNegocio, "interprete_negocio");
//PROBA: ver el codigo que generamos para el interprete: o( interpreteJs )

eval( interpreteJs ); //A: lo evaluamos, ahora existe en nuesto ambiente
//PROBA: cuando_compro("Mau","",3,"par de zapatillas")

//PASO_08: ahora voy a interpretar la CINTA que habia fabricado ...
function interpretarUnPaso(l) {
  Tiempo++;
  var params= l.split(/\s*_\s*/).map(tryNum); //A: si podemos convertimos en numeros, sino queda igual
  if (params[0]=="") { params.shift(); } //A: empieza con uno no vacio
  var act= params[1]; //A: el segundo elemento es la accion
  var f= interprete_negocio[act]; //A: busque como ejecutar esa accion en el interprete
  if (typeof(f)=="function") {
    console.log(l,params,AccionYEfectoNegocio[act].params);
    f.apply(null,params);
  }
  else {
    o("ERROR no hay funcion para accion",act,params);
  }
}

//PROBA: o_estado(); hComoVeElNegocio.map(interpretarUnPaso)

//APRENDISTE: como funciona un COMPILADOR ("compilamos" nuestros EFECTOS a Javascript, generando codigo ejecutable)
//APRENDISTE: como funciona un INTERPRETE ("interpretamos" la lista de acciones hComoVeElNegocio afectando el inventario, etc.)
//APRENDISTE: como COMPILAR es una forma de EVALUACION PARCIAL de un interprete con la info que tenes en ese momento https://en.wikipedia.org/wiki/Partial_evaluation
//APRENDISTE: que "los lenguajes" se pueden GENERAR, "los programas" (el código) se pueden ANALIZAR para averiguar cosas, validarlos, transformalos

//APRENDISTE: que "cualquier programa" ES un interprete (de las teclas y datos que recibe) que podrian venir en una CINTA (o sea, test repetibles!)
//APRENDISTE: que cualquier programa "configurable" esta en algun punto de "evaluacion parcial"
//                 entre el lenguaje (como lo ve el interprete de javascript) y los datos finales

//APRENDISTE: como describir un programa para generar cintas posibles de INPUT, evaluar todos los posibles estados, etc.

//FIJATE: que las expresiones regulares son PROGRAMAS en un lenguaje, que se compilan o interpretan, y "aceptan" una "cinta" (una string)
//FIJATE: que son equivalentes a los automatas de estado finito (proba armar tu interprete o compilador de regex, es facil)
//FIJATE: que del mismo modo, con otros lenguajes podes armar otros programas complejos, ej. https://en.wikipedia.org/wiki/Comparison_of_parser_generators

//FIJATE: que me llevo unos 10 años entender esto y poder usarlo todos los dias, y que si entendiste algo ya vas MUCHO mas rapido ;)

//PROBA: divertirte, meter mano, y preguntarme lo que quieras
//ASK: aprender@mauriciocap.com
//buscanos en http://podemosaprender.org/contacto
  
  
