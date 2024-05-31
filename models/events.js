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
            const error = new Error(`Non esiste un evento con questo ID: ${id}`);
            error.status = 404;
            throw error;
        }
        return eventFilter;
    }

    // Funzione per filtrare per Title
    static getEventTitle(title) {
        const events = this.readJSON();

        const eventsTitles = events.reduce((arr, event) => {
            if (event.title === title) {
                arr.push(event)
            };
            return arr;
        }, []);

        // Mando un errore 404 
        if (eventsTitles.length === 0) {
            const error = new Error(`Non esiste un evento con questo Title: ${title}.`);
            error.status = 404;
            throw error;
        }

        return eventsTitles;
    }
}

module.exports = Event;