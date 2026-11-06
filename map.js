// SAMPLE SHIP INFORMATION

// SAMPLE SHIP INFORMATION

const ships = [

    {
        name: "Ocean Star",
        id: "RM-001",
        ocean: "Atlantic Ocean",
        status: "Healthy",
        color: "#6a994e",
        coordinates: [15, -35]
    },

    {
        name: "Blue Horizon",
        id: "RM-002",
        ocean: "Pacific Ocean",
        status: "Warning",
        color: "#e5a52e",
        coordinates: [25, -145]
    },

    {
        name: "Sea Explorer",
        id: "RM-003",
        ocean: "Indian Ocean",
        status: "Critical",
        color: "#ffc300",
        coordinates: [-20, 80]
    },

    {
        name: "Marine Voyager",
        id: "RM-004",
        ocean: "Atlantic Ocean",
        status: "Healthy",
        color: "#6a994e",
        coordinates: [-25, -10]
    },

    {
        name: "Wave Rider",
        id: "RM-006",
        ocean: "South Pacific",
        status: "Healthy",
        color: "#6a994e",
        coordinates: [-25, 160]
    }

];


// CREATE THE MAP

const map = L.map("fleetMap").setView([5, 0], 2);


// ADD MAP LAYERS

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {

    attribution: "© OpenStreetMap contributors"

}).addTo(map);


// ADD SHIP MARKERS

const markers = [];

ships.forEach(function(ship) {

    const marker = L.circleMarker(ship.coordinates, {

        radius: 9,
        color: "white",
        weight: 2,
        fillColor: ship.color,
        fillOpacity: 1

    }).addTo(map);

    marker.bindPopup(
        "<b>" + ship.name + "</b><br>" +
        ship.id + "<br>" +
        ship.ocean + "<br>" +
        "Status: " + ship.status
    );

    markers.push(marker);

});


// CLICKING A SHIP IN THE LIST

document.querySelectorAll(".ship-list-item").forEach(function(button) {

    button.addEventListener("click", function() {

        const shipIndex = Number(button.dataset.ship);

        const ship = ships[shipIndex];

        map.setView(ship.coordinates, 4);

        markers[shipIndex].openPopup();

    });

});
