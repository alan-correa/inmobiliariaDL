const propiedadesVenta = [
    {
        nombre: 'Departamento Zona Exlusiva',
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: 'Departamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: "3 Habitaciones |",
        baños: "2 baños",
        costo: "4000 UF",
        smoke: true,
        pets: false
    },
    {
        nombre: 'Casa Rodante en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Casa Rodante',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: "2 Habitaciones |",
        baños: "1 Baño",
        costo: "$33.000.000",
        smoke: true,
        pets: true
    }, 
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: "3 Habitaciones |",
        baños: "3 Baños",
        costo: "10000 UF",
        smoke: false,
        pets: true
    }
];

const ventasProp = document.querySelector(".propiedades-venta");

let html1 = "";

for (let ventas of propiedadesVenta) {
    
    let fumar = "";
    let animales = "";


    if (ventas.smoke === true) {
        fumar = `<p style="color: green"><i class="fa-solid fa-smoking"></i>Permitido fumar</p>`
    } else {
        fumar = `<p style="color: red"><i class="fa-solid fa-ban"></i>No se permite fumar</p>`
    }

    if (ventas.pets === true) {
        animales = `<p style="color: green"><i class="fa-solid fa-dog"></i>Mascotas permitidas</p>`
    } else {
        animales = `<p style="color: red"><i class="fa-solid fa-ban"></i>No se permiten mascotas</p>`
    }


    html1 += `
        <div class="cards">
            <img class="ventas-img" src="${ventas.src}">
            <div class="ventas-cuerpo">
                <h3 class="ventas-tittle">${ventas.nombre}</h3>
                <p>${ventas.descripcion}</p>
                <div class="ventas-ubicacion">
                    <i class="fa-solid fa-location-dot"></i><p>${ventas.ubicacion}</p>
                </div>
                <div class="ventas-habitaciones">
                    <i class="fa-solid fa-door-open"></i><p>${ventas.habitaciones}</p>
                    <i class="fa-solid fa-bath"></i><p>${ventas.baños}</p>
                </div>
                <div class="ventas-costo">
                    <i class="fa-solid fa-money-bill"></i><p>${ventas.costo}</p>
                </div>
                <strong>${fumar}</strong>
                <strong>${animales}</strong>
            </div>
        </div>
    `
}
ventasProp.innerHTML = html1;