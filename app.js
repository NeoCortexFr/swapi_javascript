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
        document.getElementById('u1').innerHTML = " ";
        console.log('On clique sur planetes');
        fetch("https://swapi.dev/api/planets/")
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
    }
}
document.addEventListener('DOMContentLoaded', app.init);