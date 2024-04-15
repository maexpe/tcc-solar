const mainContainer = document.getElementById('main-container');

// Carregar os dados do arquivo JSON
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        setupCelestialBodies(data);
    });

function setupCelestialBodies(data) {
    // Loop por cada corpo celestial
    for (const bodyName in data) {
        const bodyData = data[bodyName];

        // Cria um container básico para cada corpo
        const bodyContainer = document.createElement('div');
        bodyContainer.classList.add('celestial-body');
        bodyContainer.style.display = 'none'; // Inicialmente ocultos

        const nameElement = document.createElement('h2');
        nameElement.textContent = bodyData.nome;
        bodyContainer.appendChild(nameElement);

        const sloganElement = document.createElement('p');
        sloganElement.classList.add('slogan');
        sloganElement.textContent = bodyData.slogan;
        bodyContainer.appendChild(sloganElement);

        const typeElement = document.createElement('p');
        typeElement.textContent = `Tipo: ${bodyData.tipo}`;
        bodyContainer.appendChild(typeElement);

        const imageElement = document.createElement('img');
        imageElement.src = bodyData.imagem;
        bodyContainer.appendChild(imageElement);

        const symbolElement = document.createElement('img');
        symbolElement.src = bodyData.simbolo;
        bodyContainer.appendChild(symbolElement);

        const distanceElement = document.createElement('p');
        distanceElement.textContent = `Distância da Terra: ${bodyData.distancia_terra}`;
        bodyContainer.appendChild(distanceElement);

        const radiusElement = document.createElement('p');
        radiusElement.textContent = `Raio: ${bodyData.raio}`;
        bodyContainer.appendChild(radiusElement);

        const massElement = document.createElement('p');
        massElement.textContent = `Massa: ${bodyData.massa}`;
        bodyContainer.appendChild(massElement);

        const temperatureElement = document.createElement('p');
        temperatureElement.textContent = `Temperatura: ${bodyData.temperatura}`;
        bodyContainer.appendChild(temperatureElement);

        const satelliteElement = document.createElement('p');
        satelliteElement.textContent = `Satélites naturais: ${bodyData.satelites}`;
        bodyContainer.appendChild(satelliteElement);

        const factsElement = document.createElement('ul');
        factsElement.textContent = `Fatos: ${bodyData.fatos}`;
        bodyContainer.appendChild(factsElement);

        mainContainer.appendChild(bodyContainer);
    }
}