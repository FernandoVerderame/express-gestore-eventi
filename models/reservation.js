// Importo il modulo Crypto
const crypto = require("crypto");

class Reservation {

    constructor(firstName, lastName, email) {
        this.id = this.generateId();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.eventId = 4;
    }

    // Funzione per generare un ID univoco
    generateId() {
        const id = crypto.randomUUID();
        return id;
    }
}