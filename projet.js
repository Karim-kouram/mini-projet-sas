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
const tickets = [];
let nextTicketId = 1;
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
                const seatNumber = 50 - trip.availableSeats + 1;
                const newTicket = {
                    id: nextTicketId++,
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

