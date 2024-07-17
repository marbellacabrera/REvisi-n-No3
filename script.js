// Tenemos un li de productos

//Modifique las rutas de acceso y agregue las imágenes a una carpeta para ordenarlas mejor.
//renombre los archivos
const productos = [
  { nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "img/taco-negro.jpg" },
  { nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "img/taco-azul.jpg" },
  { nombre: "Bota negra", tipo: "bota", color: "negro", img: "img/bota-negra.jpg" },
  { nombre: "Bota azul", tipo: "bota", color: "azul", img: "img/bota-azul.jpg" },
  { nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "img/zapato-rojo.jpg" }
]

const listaDeProductos = document.getElementById("lista-de-productos"); //corregí el id
const inputFiltro = document.querySelector('input'); // quite el signo $ y quite punto del imput

function displayProductos(listaProductos) { // se define función para displayProductos
  while (listaDeProductos.firstChild) {
    listaDeProductos.removeChild(listaDeProductos.firstChild); // limpia los elementos de la lista de productos
  }

  for (let i = 0; i < listaProductos.length; i++) { //Agrega productos filtrados

    let d = document.createElement("div"); //cambie var por let
    d.classList.add("producto");

    let ti = document.createElement("p"); //cambie var por let
    ti.classList.add("titulo")
    ti.textContent = listaProductos[i].nombre;

    let imagen = document.createElement("img"); //cambie var por let
    imagen.setAttribute('src', listaProductos[i].img); //se modifica

    d.appendChild(ti);
    d.appendChild(imagen);

    listaDeProductos.appendChild(d);
  }
}

displayProductos(productos); //Agregue ; 
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function () {

  const texto = inputFiltro.value.toLowerCase(); //se agrega método para convertirlo a minusculas
  console.log(texto);

  /*  const texto = $i.value; */ //se quita
  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);// se agrega para mostrar productos filtrados
};

//Comente esto por que estaba duplicado 
/* for (let i = 0; i < productosFiltrados.length; i++) {
  var d = document.createElement("div")
  d.classList.add("producto")

  var ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productosFiltrados[i].nombre

  var imagen = document.createElement("img");
  imagen.setAttribute('src', productosFiltrados[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
} */


const filtrado = (productos, texto) => {// quite corchetes y signo de igual
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
};  
