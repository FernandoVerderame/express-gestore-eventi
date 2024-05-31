// Importo express
const express = require('express');

// Istanza di express.Router()
const router = express.Router();

// Controller degli eventi
const eventsControllers = require("../controllers/events.js");

// Rotta Index
router.get("/", eventsControllers.index);

// Rotta Store
router.post("/", eventsControllers.store);

// Rotta Update
router.put("/:event", eventsControllers.update);

// Rotta Index prenotazioni
router.get("/:event/reservations", index);

// Rotta Store prenotazioni
router.post("/:event/reservations", store);

// Rotta Destroy prenotazioni
router.delete("/:event/reservations/:reservation", destroy);

// Esporto l'istanza di router
module.exports = router;