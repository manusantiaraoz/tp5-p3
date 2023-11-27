
const tareaIn = document.getElementById("tareaInput");
const form = document.getElementById("formu");
const lista = [];

const mostrarLista = (ultimoIndice) => {
  // Encuentra el nodo padre
  const referencia = document.querySelector(".referencia")


  // Agrega los elementos de la lista que se agregaron después del índice especificado
  for (var i = ultimoIndice; i < lista.length; i++) {
    var newNode = document.createElement("p");
    var textNode = document.createTextNode(lista[i]);
    newNode.appendChild(textNode);
    referencia.appendChild(newNode);
  }
}

const infoTarea =(e)=>{
  e.preventDefault();
   tarea = tareaIn.value;
  if (!tarea) {
    return;
  }
  lista.push(tarea);
  form.reset();
  let ultimo = lista.length-1;
  mostrarLista(ultimo);
}


form.addEventListener("submit", infoTarea);
