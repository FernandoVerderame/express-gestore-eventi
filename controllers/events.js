// Importo la classe Event
const eventModel = require("../models/event.js");

// Index
const index = (req, res) => {
    const { id, title } = req.query;
    let events;
    if (id) {
        // Recupero l'Evento tramite ID se c'è in query string
        events = eventModel.getEventId(id);
    } else if (title) {
        // Recupero l'Evento tramite Title se c'è in query string
        events = eventModel.getEventTitle(title);
    } else {
        // Recupero tutti gli Eventi
        events = eventModel.readJSON();
    }
    res.json(events);
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