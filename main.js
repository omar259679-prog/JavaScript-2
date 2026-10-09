
let proyecto = {
    title: "Monkey's Library",
    type: "Pagina Web",
    year: 2026
};

let proyectos = [
    {
        title: "Hand 3D",
        type: "Modelado 3D",
        year: 2025
    },
    {
        title: "Diorama 3D",
        type: "Modelado 3D",
        year: 2025
    },
    {
        title: "Personaje 3D",
        type: "Modelado 3D",
        year: 2026
    }
];

console.log("ForEach");

proyectos.forEach((proyecto) => {
    console.log(proyecto.title);
});

console.log("Agregar Proyecto");

let nuevoProyecto = {
    title: "FX's 2D",
    type: "Animacion 2D",
    year: 2026
};

let proyectoDuplicado = false;

proyectos.forEach((proyecto) => {
    if (proyecto.title.toLocaleLowerCase() === nuevoProyecto.title.toLocaleLowerCase()) {
        proyectoDuplicado = true;
        console.log("El proyecto ya existe");
    }
});

if (!proyectoDuplicado) {
    proyectos.push(nuevoProyecto);
    console.log("Proyecto agregado correctamente");
}

console.log("Proyectos actuales:", proyectos);

console.log("Filter");

let proyectosFiltrados = proyectos.filter((proyecto) => {
    return proyecto.type.toLocaleLowerCase().includes("modelado");
});

console.log("Proyectos de modelado:", proyectosFiltrados);

console.log("Map");

let titulosProyectos = proyectos.map((proyecto) => {
    return proyecto.title;
});

console.log("Titulos de los proyectos:", titulosProyectos);

console.log("Find");

let proyectoEncontrado = proyectos.find((proyecto) => {
    return proyecto.title === "Diorama 3D";
});

console.log("Proyecto encontrado:", proyectoEncontrado);

console.log("CRUD");

let nuevoProyectoCRUD = {
    title: "Squash & Stretch 2D",
    type: "Animacion 2D",
    year: 2026
};

proyectos.push(nuevoProyectoCRUD);
console.log("Proyecto creado:", nuevoProyectoCRUD);

let proyectoLeido = proyectos.find((proyecto) => {
    return proyecto.title === "Personaje 3D";
});

console.log("Proyecto encontrado:", proyectoLeido);

let proyectoActualizar = proyectos.findIndex((proyecto) => {
    return proyecto.title === "Personaje 3D";
});

if (proyectoActualizar !== -1) {
    proyectos[proyectoActualizar].year = 2024;
    console.log("Proyecto actualizado:", proyectos[proyectoActualizar]);
}

let proyectoEliminar = proyectos.findIndex((proyecto) => {
    return proyecto.title === "Squash & Stretch 2D";
});

if (proyectoEliminar !== -1) {
    let eliminado = proyectos.splice(proyectoEliminar, 1);
    console.log("Proyecto eliminado:", eliminado[0]);
}

console.log("Arreglo final");

proyectos.forEach((proyecto) => {
    console.log(proyecto);
});

/*console.log(proyecto);
console.log(proyectos[0]);
console.log(proyectos[1].title);
console.log(proyectos[0].type);
console.log(proyectos[2].year);
console.log("Número de proyectos: ", proyectos.length);*/