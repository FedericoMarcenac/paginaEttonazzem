document.addEventListener("DOMContentLoaded", function () {
    const productos = [
        // Papeleria
        { nombre: "Producto 1", categoria: "papeleria", marca: "Marca A", imagen: "producto1.jpg" },
        // Escolar
        { nombre: "Producto 2", categoria: "escolar", marca: "Marca B", imagen: "producto2.jpg" },
        // Marroquineria
        { nombre: "Producto 3", categoria: "marroquineria", marca: "Marca C", imagen: "#" },
        // Descatables
        { nombre: "Bolsa Carton N5 Lunares", categoria: "descartables", marca: "Marca D", imagen: "/productos/descartable_bolsaCartonN5Lunares.jpg" },
        { nombre: "Bolsa Carton N5 Lunares Oscuro", categoria: "descartables", marca: "Marca D", imagen: "/productos/descartable_bolsaCartonN5LunaresOscuro.jpg" },
        { nombre: "Pulseras Fluor", categoria: "descartables", marca: "Marca E", imagen: "/productos/descartable_PulserasFluor.jpg" },
        // Computacion
        { nombre: "Maxell Solid 2 Azul", categoria: "computacion", marca: "Marca F", imagen: "/productos/computacion_MaxellSolid2.jpg" },
        { nombre: "Maxell Metalz Rosa", categoria: "computacion", marca: "Marca F", imagen: "/productos/computacion_MaxellMetalz.jpg" },
        { nombre: "Soul DJ L200 Rosa", categoria: "computacion", marca: "Marca F", imagen: "/productos/computacion_SoulDJL200.jpg" },
        { nombre: "Selladora al Vacio Global", categoria: "computacion", marca: "Marca A", imagen: "/productos/computacion_SelladoraAlVacioGlobal.jpg" },
    ];

    const catalogo = document.getElementById("catalogo");
    const filtrosCategoria = document.querySelectorAll(".filtro-categoria");
    const filtroMarca = document.getElementById("filtro-marca");

    function filtrarProductos(categoriaSeleccionada, marcaSeleccionada) {
        catalogo.innerHTML = '';

        productos.forEach((producto) => {
            const categoriaProducto = producto.categoria || "otros";
            const marcaProducto = producto.marca || "Sin marca";

            if ((categoriaSeleccionada === "todos" || categoriaSeleccionada === categoriaProducto) &&
                (marcaSeleccionada === "todos" || marcaSeleccionada === marcaProducto)) {
                const productoElement = document.createElement("div");
                productoElement.classList.add("producto");
                productoElement.classList.add(categoriaProducto);

                const imagen = document.createElement("img");
                imagen.src = producto.imagen;
                productoElement.appendChild(imagen);

                const nombre = document.createElement("p");
                nombre.textContent = producto.nombre;
                productoElement.appendChild(nombre);

                catalogo.appendChild(productoElement);
            }
        });
    }

    function aplicarFiltro() {
        const categoriaSeleccionada = document.querySelector(".filtro-categoria:checked").value;
        const marcaSeleccionada = filtroMarca.value;
        filtrarProductos(categoriaSeleccionada, marcaSeleccionada);
    }

    filtrosCategoria.forEach((filtro) => {
        filtro.addEventListener("change", aplicarFiltro);
    });


    // Llama a la función para aplicar el filtro al cargar la página
    aplicarFiltro();
});



