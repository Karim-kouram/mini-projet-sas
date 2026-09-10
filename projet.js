const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets = [
    { id: 1, passengerName: "Ahmed", tripId: 1, seatNumber: 1, price: 25 },
    { id: 2, passengerName: "Fatima", tripId: 1, seatNumber: 2, price: 25 },
    { id: 3, passengerName: "Youssef", tripId: 2, seatNumber: 1, price: 30 },
    { id: 4, passengerName: "Ayoub", tripId: 3, seatNumber: 1, price: 90 },
    { id: 5, passengerName: "Sanae", tripId: 3, seatNumber: 2, price: 90 },
    { id: 6, passengerName: "Omar", tripId: 3, seatNumber: 3, price: 90 },
    { id: 7, passengerName: "Khadija", tripId: 4, seatNumber: 1, price: 120 },
    { id: 8, passengerName: "Mehdi", tripId: 4, seatNumber: 2, price: 120 },
    { id: 9, passengerName: "Salma", tripId: 4, seatNumber: 3, price: 120 },
    { id: 10, passengerName: "Hamza", tripId: 4, seatNumber: 4, price: 120 }
];

function chercherPlaceLibre(tripId) {

    for (let place = 1; place <= 50; place++) {

        let placeOccupee = false;

        for (let ticket of tickets) {

            if (ticket.tripId === tripId && ticket.seatNumber === place) {
                placeOccupee = true;
                break;
            }
        }
        if (placeOccupee !== true) {
            return place;
        }
    }

    return null;
}
const prompt = require('prompt-sync')();
/*
function getTripById(tripId) {
  return trips.find(t => t.id === tripId);
}*/

function formatTrip(trip) {
  return `#${trip.id} ${trip.departure} --> ${trip.destination}\nDépart : ${trip.departureTime}\nArrivée : ${trip.arrivalTime}\nPrix : ${trip.price} DH\nPlaces disponibles : ${trip.availableSeats}`;
}

function formatTicket(ticket) {
    const trip = trips.find(t => t.id === ticket.tripId);
    return `Ticket #${ticket.id}\nPassager : ${ticket.passengerName}\nTrajet : ${trip.departure} --> ${trip.destination}\nPlace : ${ticket.seatNumber}\nPrix : ${ticket.price} DH`;
}

function afficherTrajets(){
    console.log("\n=== TRAJETS DISPONIBLES ===\n");
    if(trips.length > 0){
        trips.map(trip => {
            console.log(`\n${formatTrip(trip)}`);
        });
    }else{
        console.log("\nAucun trajet disponible.\n");
    }
}


function acheterTicket(Name, idTrip){
    let value = true;
    trips.map(trip => {
        if(trip.id === idTrip){
            value = false;
            if(trip.availableSeats >= 1){
                let nextTicketId = tickets.length + 1;
                const seatNumber = chercherPlaceLibre(idTrip);
                const newTicket = {
                    id: nextTicketId,
                    passengerName: Name,
                    tripId: trip.id,
                    seatNumber: seatNumber,
                    price: trip.price
                };
                tickets.push(newTicket);
                trip.availableSeats -= 1;

                console.log("\nTicket acheté avec succès.\n");
                console.log(` Ticket #${newTicket.id}\n Passager : ${newTicket.passengerName}\n Trajet  : ${trip.departure} --> ${trip.destination}\n Place : ${newTicket.seatNumber}\n Prix : ${newTicket.price} DH`);

            }else{
                console.log("\nTrain complet.\n");
            }
        }
    });
    if(value){
        console.log("\Trajet introuvable.\n");
    }
}

function afficherTickets(){
    console.log("\n=== TICKETS ===\n");
    if(tickets.length > 0){
        tickets.map(ticket => {
            console.log(`\n${formatTicket(ticket)}`);
        });
    }else{
        console.log("\nAucun ticket enregistré.\n");
    }
}

function annulerTicket(idTicket){
    let value = true;
    tickets.map(ticket => {
        if(ticket.id === idTicket){
            value = false;
            let trip = trips.find(t => t.id === ticket.tripId);
            let ticketIndex = tickets.findIndex(t => t.id === idTicket);
            tickets.splice(ticketIndex, 1);
            console.log("\nTicket annulé avec succès.\n");
            if (trip) {
                trip.availableSeats += 1;
            }
        }
    })
    if(value){
        console.log("\nTicket introuvable.\n");
    }
}

function rechercherTicket(Name){
    let value = true;
    if(tickets.length > 0){
        tickets.map(ticket => {
            if(ticket.passengerName === Name){
                value = false;
                console.log(`\n${formatTicket(ticket)}`);
            }
        });
    }else{
        console.log("\nAucun ticket enregistré.\n");
    }
    if(value){
        console.log("\nTicket introuvable.\n");
    }
}


function filtrerTrajets(villeDepart){
    let value = true;
    if(trips.length > 0){
        console.log("Résultat : ");
        trips.map(trip => {
            if(trip.departure.toLowerCase() === villeDepart){
                value = false;
                console.log(` ${trip.departure} --> ${trip.destination} : ${trip.price} DH`)
            }
        });
    }else{
        console.log("\nAucun trajet disponible.\n");
    }
    if(value){
        console.log("\ntrajet introuvable.\n");
    }
}


function trierTrajets(){
    if(trips.length > 0){
        console.log("\n=== TRAJETS TRIÉS PAR PRIX (CROISSANT) ===\n");
        for (let i = 0; i < trips.length ; i++) {
            for (let j = 0; j < trips.length - 1 ; j++) {
                if (trips[j]["price"] > trips[j + 1]["price"]) {
                    // On échange (Swap)
                    let temp = trips[j];
                    trips[j] = trips[j + 1];
                    trips[j + 1] = temp;
                }
            }
        }

        trips.map(trip => {
            console.log(` ${trip.departure} --> ${trip.destination} : ${trip.price} DH`);
        });
    }else{
        console.log("\nAucun trajet disponible.\n");
    }
}

function NombreTotalTickets(){
    if(tickets.length > 0){
        console.log("\n=== STATISTIQUES ===\n");
        let countTickets = 0;
        tickets.map(ticket => {
            if(ticket){
                countTickets++;
            }
        });
        console.log(`\nNombre total de tickets : ${countTickets}\n`);
    }else{
        console.log("\nAucun ticket enregistré.\n");
    }
}

function chiffreDaffaires(){
    if(tickets.length > 0){
        console.log("\n=== STATISTIQUES ===\n");
        let sommePrix = 0;
        tickets.map(ticket => {
            if(ticket){
                sommePrix += ticket.price;
            }
        });
        console.log(`\nChiffre d'affaires total : ${sommePrix}\n DH`);
    }else{
        console.log("\nAucun ticket enregistré.\n");
    }
}

function trajetPlusVendu(){
    if(tickets.length > 0){
        console.log("\n=== STATISTIQUES ===\n");
        let maxPlace = 0;
        let tripId = 0;
        tickets.map(ticket => {
            if(ticket.seatNumber > maxPlace){
                maxPlace = ticket.seatNumber;
                tripId = ticket.tripId;
            }
        });
        let findTrip = trips.find(trip => trip.id === tripId);
        console.log(`\nTrajet le plus vendu : \n${findTrip.departure} --> ${findTrip.destination}\n${maxPlace} tickets vendus\n`);
    }else{
        console.log("\nAucun ticket enregistré.\n");
    }
}


// ==========================================
// 4. BOUCLE PRINCIPALE DE L'APPLICATION
// ==========================================

function main() {
  let running = true;

  while (running) {
    console.log("\n=================================");
    console.log("        RAILWAY MANAGER         ");
    console.log("=================================");
    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier les trajets");
    console.log("8. Statistiques (Bonus)");
    console.log("0. Quitter");
    console.log("=================================");

    const choice = prompt("Votre choix : ").trim();

    switch (choice) {
      case '1':
        afficherTrajets();
        break;
      case '2':
        console.log("\n=== ACHETER UN TICKET ===\n");
        let Name = prompt("Nom du passager : ").trim();;
        let idTrip = parseInt(prompt("Identifiant du trajet : "));
        acheterTicket(Name, idTrip);
        break;
      case '3':
        afficherTickets();
        break;
      case '4':
        console.log("\n=== ANNULER UN TICKET ===\n");
        let idTicket = parseInt(prompt("Identifiant du ticket : "));
        annulerTicket(idTicket);
        break;
      case '5':
        console.log("\n=== RECHERCHER UN TICKET ===\n");
        let name = prompt("Nom du passager : ").trim();
        rechercherTicket(name);
        break;
      case '6':
        console.log("\n=== FILTRER LES TRAJETS ===\n");
        let villeDepart = prompt("Ville de départ : ").trim();
        filtrerTrajets(villeDepart);
        break;
      case '7':
        trierTrajets();
        break;
      case '8':
        console.log("\n=== STATISTIQUES ===\n");
        console.log("1. Nombre total de tickets vendus.");
        console.log("2. Chiffre d'affaires total.");
        console.log("3. Trajet le plus vendu;");
        const choice2 = prompt("Votre choix : ").trim();
        switch(choice2){
            case '1':
                NombreTotalTickets();
                break;
            case '2':
                chiffreDaffaires();
                break;
            case '3':
                trajetPlusVendu();
                break;
        }
        break;
      case '0':
        console.log("\nMerci d'avoir utilisé Railway Manager. Au revoir !");
        running = false;
        break;
      default:
        console.log("\nChoix invalide. Veuillez réessayer.");
    }
  }
}

// Lancement du programme
main();
