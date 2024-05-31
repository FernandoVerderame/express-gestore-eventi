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
}