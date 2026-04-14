// function mostrarVista(vista) {
//   document.getElementById("view-home").classList.remove("active");
//   document.getElementById("view-menu").classList.remove("active");
//   document.getElementById("view-contact").classList.remove("active");

//   document.getElementById("view-" + vista).classList.add("active");
// }

const enlaces = document.querySelectorAll(".nav-link");

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function (evento) {
    evento.preventDefault();

    const vista = enlace.dataset.view;

    document.querySelectorAll(".view").forEach(function (seccion) {
      seccion.classList.remove("active");
    });

    document.getElementById("view-" + vista).classList.add("active");
  });
});

const productos = [
  {
    id: 1,
    nombre: "Cargadores",
    descripcion: "Cargadores de tipo B y C",
    precio: 45,
  },
  {
    id: 2,
    nombre: "Audifonos",
    descripcion: "Audifonos de cable como de blutube",
    precio: 50,
  },
  {
    id: 3,
    nombre: "Protectores",
    descripcion: "Protectores definidos y a su personalizacion",
    precio: 60,
  },
  {
    id: 4,
    nombre: "Baterias",
    descripcion: "Baterias de los modelos samsung y apple",
    precio: 150,
  },
  {
    id: 5,
    nombre: "Pantallas",
    descripcion: "Pantallas de marca samsung y apple",
    precio: "150",
  },
];

function renderizarProductos() {
  const contenedor = document.getElementById("products-container");
  contenedor.innerHTML = "";
  productos.forEach(function (producto) {
    contenedor.innerHTML += `<div class="product-card">
  <h3>${producto.nombre}</h3>
  <p>${producto.descripcion}</p>
  <span>${producto.precio}</span>
</div>`;
  });
}

renderizarProductos();
