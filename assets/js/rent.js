const propiedadesAlquiler = [
    {
        nombre: 'Departamento centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Departamento de 2 habitaciones en centro de la ciudad.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: "2 Habitaciones |",
        baños: "2 Baños",
        costo: "$380.000 + Gasto Común",
        smoke: false,
        pets: true
    },
    {
        nombre: 'Departamento con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Departamento vista al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: "3 Habitaciones |",
        baños: "2 Baños",
        costo: "$250.000 + Gasto común",
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Condominio zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: "3 Habitaciones |",
        baños: "2 Baños",
        costo: "$720.000 + Gasto común",
        smoke: false,
        pets: false
    }
];


const alquilerProp = document.querySelector(".propiedades-alquiler");

let html2 = "";

for (let alquiler of propiedadesAlquiler) {
    
    let fumar = "";
    let animales = "";


    if (alquiler.smoke === true) {
        fumar = `<p style="color: green"><i class="fa-solid fa-smoking"></i>Permitido fumar</p>`
    } else {
        fumar = `<p style="color: red"><i class="fa-solid fa-ban"></i>No se permite fumar</p>`
    }

    if (alquiler.pets === true) {
        animales = `<p style="color: green"><i class="fa-solid fa-dog"></i>Mascotas permitidas</p>`
    } else {
        animales = `<p style="color: red"><i class="fa-solid fa-ban"></i>No se permiten mascotas</p>`
    }


    html2 += `
        <div class="cards">
            <img class="ventas-img" src="${alquiler.src}">
            <div class="ventas-cuerpo">
                <h3 class="ventas-tittle">${alquiler.nombre}</h3>
                <p>${alquiler.descripcion}</p>
                <div class="ventas-ubicacion">
                    <i class="fa-solid fa-location-dot"></i><p>${alquiler.ubicacion}</p>
                </div>
                <div class="ventas-habitaciones">
                    <i class="fa-solid fa-door-open"></i><p>${alquiler.habitaciones}</p>
                    <i class="fa-solid fa-bath"></i><p>${alquiler.baños}</p>
                </div>
                <div class="ventas-costo">
                    <i class="fa-solid fa-money-bill"></i><p>${alquiler.costo}</p>
                </div>
                <strong>${fumar}</strong>
                <strong>${animales}</strong>
            </div>
        </div>
    `
}

alquilerProp.innerHTML = html2;