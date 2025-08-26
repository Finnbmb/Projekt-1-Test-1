const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./termine.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS termine (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titel TEXT NOT NULL,
    datum TEXT NOT NULL,
    beschreibung TEXT,
    prioritaet TEXT DEFAULT 'Mittel',
    wiederholung TEXT DEFAULT 'Keine'
  )`);
});

module.exports = db;
