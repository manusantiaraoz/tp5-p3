
const tareaIn = document.getElementById("tareaInput");
const form = document.getElementById("formu");
const lista = [];





const mostrarLista = (ultimoIndice) => {
  const referencia = document.querySelector(".referencia");
  referencia.innerHTML = "";
  for (let i = ultimoIndice; i < lista.length; i++) {
    const newNode = document.createElement("p");
    const textNode = document.createTextNode(lista[i]);
    newNode.appendChild(textNode);
    const botonBorrar = document.createElement("button");
    botonBorrar.innerHTML = "Borrar";
    botonBorrar.addEventListener("click", () => {
      borrarTarea(i);
    });
    newNode.appendChild(botonBorrar);
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

const borrarTarea = (indice) => {
  lista.splice(indice, 1);
  console.log(lista.length);
  mostrarLista();
}


form.addEventListener("submit", infoTarea);
