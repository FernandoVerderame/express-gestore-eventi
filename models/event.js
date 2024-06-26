// Importo il modulo File System
const fs = require("fs");

// Importo il modulo Path
const path = require("path");

// Importo il modulo Crypto
const crypto = require("crypto");

class Event {

    constructor(title, description, date, maxSeats) {
        this.id = this.generateId();
        this.title = title;
        this.description = description;
        this.date = date;
        this.maxSeats = maxSeats;
    }

    // Funzione per generare un ID univoco
    generateId() {
        const id = crypto.randomUUID();
        return id;
    }

    // Lettura file
    static readJSON() {
        const filePath = path.join(__dirname, "../db/events.json");
        const fileData = fs.readFileSync(filePath);
        return JSON.parse(fileData);
    }

    // Scrittura file
    static writeJSON(newData) {
        const filePath = path.join(__dirname, "../db/events.json");
        const fileString = JSON.stringify(newData, null, 2);
        fs.writeFileSync(filePath, fileString);
    }

    // Aggiungi un nuovo evento
    static addEvent(event) {
        const events = this.readJSON();
        events.push(event);
        this.writeJSON(events);
    }

    // Funzione per filtrare per ID
    static getEventId(id) {
        const events = this.readJSON();
        const eventFilter = events.find(singleEvent => singleEvent.id === id);

        // Mando un errore 404 
        if (!eventFilter) {
            throw new Error(`Non esiste un evento con questo ID: ${id}`);
        }
        return eventFilter;
    }

    // Funzione per filtrare per Title
    static getEventTitle(title) {
        const events = this.readJSON();

        const eventsTitles = events.reduce((arr, event) => {
            if (event.title === title) {
                arr.push(event);
            };
            return arr;
        }, []);

        // Mando un errore 404 
        if (eventsTitles.length < 1) {
            throw new Error(`Non esiste un evento con questo Title: ${title}`);
        }

        return eventsTitles;
    }

    // Funzione per le prenotazioni
    static getReservations(title) {

        // Lettura degli eventi
        const events = this.readJSON();

        // Filtraggio degli eventi per titolo
        const eventsTitles = events.reduce((arr, event) => {
            if (event.title === title) {
                arr.push(event);
            };
            return arr;
        }, []);

        // Lettura delle prenotazioni
        const filePath = path.join(__dirname, "../db/reservations.json");
        const fileData = fs.readFileSync(filePath);
        const reservations = JSON.parse(fileData);

        // Recupero degli ID degli eventi con il titolo specificato
        const eventsId = eventsTitles.map(e => e.id);

        // Filtraggio delle prenotazioni per gli eventi corrispondenti
        const reservationEvents = reservations.reduce((arr, res) => {
            if (eventsId.includes(res.eventId)) {
                arr.push(res);
            };
            return arr;
        }, []);

        return reservationEvents;
    }
}

module.exports = Event;