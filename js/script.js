const mainContainer = document.getElementById('main-container');

// Carregar os dados do arquivo JSON
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        setupCorpoCelestial(data);
    });

function setupCorpoCelestial(data) {
    // Loop por cada corpo celestial
    for (const bodyName in data) {
        const bodyData = data[bodyName];

        // Cria um container básico para cada corpo
        const bodyContainer = document.createElement('div');
        bodyContainer.classList.add('corpo-celestial');
        bodyContainer.style.display = 'none'; // Inicialmente ocultos

        const nomeElement = document.createElement('h2');
        nomeElement.textContent = bodyData.nome;
        bodyContainer.appendChild(nomeElement);

        const sloganElement = document.createElement('h3');
        sloganElement.classList.add('slogan');
        sloganElement.textContent = bodyData.slogan;
        bodyContainer.appendChild(sloganElement);

        const tipoElement = document.createElement('p');
        tipoElement.textContent = `Tipo: ${bodyData.tipo}`;
        bodyContainer.appendChild(tipoElement);

        const imagemElement = document.createElement('img');
        imagemElement.src = bodyData.imagem;
        bodyContainer.appendChild(imagemElement);

        const simboloElement = document.createElement('img');
        simboloElement.src = bodyData.simbolo;
        bodyContainer.appendChild(simboloElement);

        const distanciaElement = document.createElement('p');
        distanciaElement.textContent = `Distância da Terra: ${bodyData.distancia_terra}`;
        bodyContainer.appendChild(distanciaElement);

        const raioElement = document.createElement('p');
        raioElement.textContent = `Raio: ${bodyData.raio}`;
        bodyContainer.appendChild(raioElement);

        const massaElement = document.createElement('p');
        massaElement.textContent = `Massa: ${bodyData.massa}`;
        bodyContainer.appendChild(massaElement);

        const temperaturaElement = document.createElement('p');
        temperaturaElement.textContent = `Temperatura: ${bodyData.temperatura}`;
        bodyContainer.appendChild(temperaturaElement);

        const satelitesElement = document.createElement('p');
        satelitesElement.textContent = `Satélites naturais: ${bodyData.satelites}`;
        bodyContainer.appendChild(satelitesElement);

        const fatosElement = document.createElement('ul');
        fatosElement.textContent = `Fatos:\n${bodyData.fatos}`;
        bodyContainer.appendChild(fatosElement);

        mainContainer.appendChild(bodyContainer);
    }
}

function populateCorpoCelestial(bodyName) {
    const bodyContainer = document.querySelector(`.corpo-celestial[data-id="${bodyName}"]`);

    // Recebe dados do objeto do arquivo JSON
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const bodyData = data[bodyName]; // Acessa os dados do corpo

        // Popula os elementos HTML
        bodyContainer.querySelector('h2').textContent = bodyData.nome;
        bodyContainer.querySelector('h3').textContent = bodyData.slogan;
        bodyContainer.querySelector('p').textContent = bodyData.tipo;
        bodyContainer.querySelector('img').src = bodyData.imagem;
        bodyContainer.querySelector('img').src = bodyData.simbolo;
        bodyContainer.querySelector('p:{nth-child(5)').textContent = `Distância da Terra: ${bodyData.distancia_terra}`;
        bodyContainer.querySelector('p:{nth-child(6)').textContent = `Raio: ${bodyData.raio}`;
        bodyContainer.querySelector('p:{nth-child(7)').textContent = `Massa: ${bodyData.massa}`;
        bodyContainer.querySelector('p:{nth-child(8)').textContent = `Temperatura: ${bodyData.temperatura}`;
        bodyContainer.querySelector('p:{nth-child(9)').textContent = `Satélites naturais: ${bodyData.satelites}`;
        bodyContainer.querySelector('ul').textContent = `Fatos:\n${bodyData.fatos}`;
    });
}