//Seleccionar el boton añadir
let enviar = document.querySelector(".button-add");
enviar.onclick = agregarAmigo;
//Definimos la funcion nombre
let nombre;
//Definimos la funcion numero
let numero;
//Creamos  la funcion agregar amigo
function agregarAmigo (){ 
    nombre =document.getElementById("amigo").value;
    console.log(nombre)
    bucle.push(nombre)
    /*Agregamos los nombres ingresados */ 
    const texto = document.getElementById("amigo").value;
    const li = document.createElement("li")
    li.textContent= texto;
    document.getElementById("listaAmigos").appendChild(li)
    //Limpia el input
    document.getElementById("amigo").value = "";
   /*Mensaje de requerimiento*/
   const input = document.querySelector(".input-name")
    if (input.value ===""){
        input.reportValidity();
        return
    }
}

//Seleccionar el boton sortear amigo
let enviar2 = document.querySelector(".button-draw");
enviar2.onclick = sortearAmigo;
//creamos una lista vacia
bucle = []
//Creamos la funcion sortear amigo
function sortearAmigo(){ 
    console.log(bucle)
    let eleccion = randint(0,bucle.length-1);
    amigo_elegido=bucle[eleccion]
    console.log(amigo_elegido)
    /*Agragamos el nombre del amigo secreto*/
    const texto = amigo_elegido;
    const li = document.createElement("li")
    li.textContent= texto;
    document.getElementById("resultado").appendChild(li) 
    //Permite solo un sorteo
    document.querySelector(".button-draw").disabled = true;

}
//Asignamos un valor a la variable numnero
numero = randint;
//Definimos funcion randint
function randint(min,max){
    return Math.floor(Math.random()*(max-min+1))+ min
}
//Pruebas de funcionalidad

/*function textorequerido(){
    const input = document.querySelector(".input-name")
    if (input.value ===""){
        input.reportValidity();
        return
    }
}*/

/*function agregarAmigo(){
    const texto = document.getElementById("amigo").value;
    
    const li = document.createElement("li")
    li.textContent= texto;
    document.getElementById("listaAmigos").appendChild(li)   
}*/

/*function sortearAmigo(){
    const texto = amigo_elegido;
    
    const lis = document.createElement("li")
    lis.textContent= texto;
    document.getElementById("resultado").appendChild(li)   
}*/