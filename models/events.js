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
}