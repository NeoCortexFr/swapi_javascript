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
}
document.addEventListener('DOMContentLoaded', app.init);