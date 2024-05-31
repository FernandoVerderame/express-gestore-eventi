// Importo la classe Event
const eventModel = require("../models/events.js");

// Index
const index = (req, res) => {

    if (req.query.id) {
        // Recupero l'Evento tramite ID se c'è in query string
        const id = req.query.id;
        const event = eventModel.getEventId(id);
        res.json(event);
    } else {
        // Recupero tutti gli Eventi
        const events = eventModel.readJSON();
        res.json(events);
    }
}

// Store
const store = (req, res) => {

}

// Update
const update = (req, res) => {

}

// Esporto i moduli
module.exports = {
    index,
    store,
    update
}