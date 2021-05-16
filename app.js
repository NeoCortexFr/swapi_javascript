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
    handlePlanet: function(event) {
        console.log('On clique sur planetes');
    },
    handlePerso: function(event) {
        console.log('persos');
    },
    handleShips: function(event) {
        console.log('vaisseau');
    },
    handleVehicles: function(event) {
        console.log('vehicules');
    }
}
document.addEventListener('DOMContentLoaded', app.init);