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
