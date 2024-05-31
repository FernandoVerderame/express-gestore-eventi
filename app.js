// Importo il path
const path = require("path")

// Importo express
const express = require('express');

// Inizializzo express
const app = express();

// Definisco le variabili port e host
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

// Router degli eventi
const eventsRouter = require("./routers/events.js");

// Indico ad express che esistono nuove rotte per gli eventi
app.use('/events', eventsRouter);

// Rotta base
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, './welcome.html');
    res.sendFile(filePath);
});

// Avvio il server
app.listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`);
});