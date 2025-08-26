const express = require('express');
const app = express();
const db = require('./db');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('Terminkalender läuft!');
});

// Hilfsfunktion: Deutsche Feiertage für ein Jahr
function getFeiertage(year) {
  return [
    { titel: 'Neujahr', datum: `${year}-01-01`, typ: 'Feiertag' },
    { titel: 'Tag der Arbeit', datum: `${year}-05-01`, typ: 'Feiertag' },
    { titel: 'Tag der Deutschen Einheit', datum: `${year}-10-03`, typ: 'Feiertag' },
    { titel: '1. Weihnachtstag', datum: `${year}-12-25`, typ: 'Feiertag' },
    { titel: '2. Weihnachtstag', datum: `${year}-12-26`, typ: 'Feiertag' }
  ];
}

function renderTermine(res, q = '', error = null) {
  let sql = 'SELECT * FROM termine';
  let params = [];
  if (q) {
    sql += ' WHERE titel LIKE ? OR datum LIKE ?';
    params = [`%${q}%`, `%${q}%`];
  }
  db.all(sql, params, (err, rows) => {
    if (err) {
      return res.status(500).send('Fehler beim Laden der Termine');
    }
    const year = new Date().getFullYear();
    const feiertage = getFeiertage(year);
    res.render('termine', { termine: rows, q, feiertage, error });
  });
}

// Route: Alle Termine und Feiertage anzeigen mit Suchfunktion
app.get('/termine', (req, res) => {
  renderTermine(res, req.query.q || '');
});

// Route: Formular für neuen Termin anzeigen
app.get('/termine/neu', (req, res) => {
  res.render('neuer_termin', { error: null, values: {} });
});

// Route: Neuen Termin speichern mit Validierung, Priorität und Wiederholung
app.post('/termine', (req, res) => {
  const { titel, datum, beschreibung, prioritaet, wiederholung } = req.body;
  let error = null;
  if (!titel || !datum) {
    error = 'Titel und Datum sind Pflichtfelder.';
    return res.status(400).render('neuer_termin', { error, values: { titel, datum, beschreibung, prioritaet, wiederholung } });
  }
  db.run('INSERT INTO termine (titel, datum, beschreibung, prioritaet, wiederholung) VALUES (?, ?, ?, ?, ?)', [titel, datum, beschreibung, prioritaet || 'Mittel', wiederholung || 'Keine'], function(err) {
    if (err) {
      error = 'Fehler beim Speichern des Termins.';
      return res.status(500).render('neuer_termin', { error, values: { titel, datum, beschreibung, prioritaet, wiederholung } });
    }
    res.redirect('/termine');
  });
});

// Route: Formular zum Bearbeiten eines Termins anzeigen
app.get('/termine/:id/bearbeiten', (req, res) => {
  const id = req.params.id;
  db.get('SELECT * FROM termine WHERE id = ?', [id], (err, row) => {
    if (err || !row) {
      return res.status(404).send('Termin nicht gefunden');
    }
    res.render('bearbeite_termin', { termin: row, error: null });
  });
});

// Route: Termin aktualisieren mit Validierung, Priorität und Wiederholung
app.put('/termine/:id', (req, res) => {
  const id = req.params.id;
  const { titel, datum, beschreibung, prioritaet, wiederholung } = req.body;
  let error = null;
  if (!titel || !datum) {
    error = 'Titel und Datum sind Pflichtfelder.';
    return db.get('SELECT * FROM termine WHERE id = ?', [id], (err, row) => {
      if (err || !row) {
        return res.status(404).send('Termin nicht gefunden');
      }
      row.titel = titel;
      row.datum = datum;
      row.beschreibung = beschreibung;
      row.prioritaet = prioritaet;
      row.wiederholung = wiederholung;
      res.status(400).render('bearbeite_termin', { termin: row, error });
    });
  }
  db.run('UPDATE termine SET titel = ?, datum = ?, beschreibung = ?, prioritaet = ?, wiederholung = ? WHERE id = ?', [titel, datum, beschreibung, prioritaet || 'Mittel', wiederholung || 'Keine', id], function(err) {
    if (err) {
      error = 'Fehler beim Aktualisieren des Termins.';
      return db.get('SELECT * FROM termine WHERE id = ?', [id], (err, row) => {
        if (err || !row) {
          return res.status(404).send('Termin nicht gefunden');
        }
        row.titel = titel;
        row.datum = datum;
        row.beschreibung = beschreibung;
        row.prioritaet = prioritaet;
        row.wiederholung = wiederholung;
        res.status(500).render('bearbeite_termin', { termin: row, error });
      });
    }
    res.redirect('/termine');
  });
});

// Route: Termin löschen
app.delete('/termine/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM termine WHERE id = ?', [id], function(err) {
    if (err) {
      return res.status(500).send('Fehler beim Löschen des Termins');
    }
    res.redirect('/termine');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
