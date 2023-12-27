const autos = [
    {
        marca: 'Dodge',
        modelo: 'Ram 2500',
        anio: 2024,
        img: 'https://www.motortrend.com/uploads/2023/09/010-2024-Ram-2500-HD-front-view.jpg'
    },
    {
        marca: 'Ford',
        modelo: 'Raptor',
        anio: 2023,
        img: 'https://cdn.motor1.com/images/mgl/6ZzOjr/s1/hennessey-velociraptor-500-ford-ranger-raptor.jpg'
    },
    {
        marca: 'Chevrolet',
        modelo: 'S-10',
        anio: 2023,
        img: 'https://cdn.motor1.com/images/mgl/6ZKZNe/s1/2024-chevrolet-silverado-hd.jpg'
    },
    {
        marca: 'Volkswagen',
        modelo: 'Amarok',
        anio: 2023,
        img: 'https://cdn.motor1.com/images/mgl/VRW87/s3/primicia-confirmada-vw-presento-la-amarok-v6.jpg'
    },
    {
        marca: 'Toyota',
        modelo: 'Hilux',
        anio: 2023,
        img: 'https://cdn.motor1.com/images/mgl/40ZwrY/s3/hilux-conquest--exterior-5.jpg'
    }
]

let cardAuto = autos.map(auto => {
    const cardContainer = document.querySelector('.principalContainer');
    cardContainer.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${auto.img}" class="card-img-top" alt="${auto.marca} - ${auto.modelo}">
            <div class="card-body">
                <h5 class="card-title">${auto.marca}</h5>
                <p class="card-model">${auto.modelo}</p>
                <p class="card-anio">${auto.anio}</p>
                <a href="../pages/404.html" class="btn btn-primary">Detalles</a>
            </div>
        </div>    
            `
});