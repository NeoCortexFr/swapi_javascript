let app = {
    init: function() {
        let planet = document.getElementById('planets');
        planet.addEventListener('click', app.handlePlanet);

        let perso = document.getElementById('persos');
        perso.addEventListener('click', app.handlePerso);

        let ships = document.getElementById('ships');
        ships.addEventListener('click', app.handleShips);

        let vehicles = document.getElementById('vehicles');
        vehicles.addEventListener('click', app.handleVehicles);

        let tuto = document.getElementById('tuto');
        tuto.addEventListener('click', app.handleTuto);
    },
    handlePlanet: function() {
        // On vide la liste
        document.getElementById('u1').innerHTML = " ";
        // Debug
        console.log('On clique sur planetes');
        // Version générique de l'url:
        let currentUrl = "https://swapi.dev/api/planets/"
        // L'ajout dans l'url:
        let addUrl = ""
        // Appel API
        fetch(currentUrl + addUrl)
            .then(function(responce) {
                console.log('Connexion établie');
                return responce.json();
            })
            // Utilisation des resultats (10 par page)
            .then(function(data) {
                for (let i=0; i<10; i++) {
                    document.getElementById('u1').innerHTML +=
                    `<li>` + data.results[i].name; + `</li>`
                    /* 
                        On modifie la class du bouton pour apparaître dans le DOM
                        lors de la réponse de l'API
                    */
                    
                    /*
                        Au clic: modifier addUrl vers ?page= n° suivant et précédent au cas où:
                    */
                    if (addUrl == "") {
                        let next = document.getElementById('next');
                        next.className = "displayNext";
                    } else {
                        let next = document.getElementById('next');
                        next.className = "displayNext";
                        let previous = document.getElementById('previous');
                        previous.className = "displayPrevious";
                    }
                }
            })
    },
    handlePerso: function() {
        document.getElementById('u1').innerHTML = " ";
        console.log('persos');
        fetch("https://swapi.dev/api/people/")
            .then(function(res) {
                console.log('Connexion établie');
                return res.json();
            })
            .then(function(data) {
                for (let i=0; i<10; i++) {
                    document.getElementById('u1').innerHTML +=
                    `<li>` + data.results[i].name; + `</li>`
                }
            })
    },
    handleShips: function() {
        document.getElementById('u1').innerHTML = " ";
        console.log('vaisseau');
        fetch("https://swapi.dev/api/starships/")
            .then(function(res) {
                console.log('Connexion établie');
                return res.json();
            })
            .then(function(data) {
                for (let i=0; i<10; i++) {
                    document.getElementById('u1').innerHTML +=
                    `<li>` + data.results[i].name +
                        `<div class="factory">Constructeur: ` + data.results[i].manufacturer; +
                        `</div>
                    </li>`
                }
            })
    },
    handleVehicles: function() {
        document.getElementById('u1').innerHTML = " ";
        console.log('vehicule');
        fetch("https://swapi.dev/api/vehicles/")
            .then(function(res) {
                console.log('Connexion établie');
                return res.json();
            })
            .then(function(data) {
                for (let i=0; i<10; i++) {
                    document.getElementById('u1').innerHTML +=
                    `<li>` + data.results[i].name +
                        `<div class="model">Modèle: ` + data.results[i].model +
                        `</div>` + 
                        `<div class="factory">Constructeur: ` + data.results[i].manufacturer; +
                    `</li>`
                }
            })
    },
    handleNext: function(event) {
        console.log('suivant !');
    }
}
document.addEventListener('DOMContentLoaded', app.init);