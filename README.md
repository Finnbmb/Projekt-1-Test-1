# Projekt-1-Test-1
SWT Projekt 1 Terminkalender

## Schritt 1: Initialisierung des Node.js-Projekts

Das Projekt wurde mit folgendem Befehl initialisiert:

```
npm init -y
```

Dadurch wurde die Datei `package.json` erstellt, die alle wichtigen Metadaten und später die Abhängigkeiten des Projekts verwaltet. Diese Datei ist die Grundlage für die weitere Entwicklung und Paketverwaltung.

## Schritt 2: Installation der benötigten Pakete

Im zweiten Schritt wurden die wichtigsten Bibliotheken für die Webanwendung installiert:

```
npm install express sqlite3 ejs
```

- Express: Framework für die Entwicklung des Webservers
- SQLite3: Datenbank zur dauerhaften Speicherung der Termine
- EJS: Template-Engine für die dynamische Darstellung der Webseiten

Diese Pakete bilden die technische Basis für die weitere Entwicklung.

## Schritt 3: Grundstruktur für Server und Datenbank

In diesem Schritt wurden die Basisdateien angelegt:

- `server.js`: Startet den Express-Webserver und stellt die Grundkonfiguration bereit.
- `db.js`: Stellt die Verbindung zur SQLite-Datenbank her und legt die Tabelle für Termine an.

Damit ist die technische Grundlage für die Webanwendung und die dauerhafte Speicherung der Termine geschaffen.

## Schritt 4: Test des Webservers

Im vierten Schritt wurde der Express-Webserver gestartet, um die Grundfunktion zu testen. Die Startseite (`/`) zeigt an, dass der Terminkalender läuft. Damit ist die Basis für die weitere Entwicklung bestätigt.

## Schritt 5: Anzeige aller gespeicherten Termine

In diesem Schritt wurde die Funktion zur Anzeige aller gespeicherten Termine umgesetzt:

- Die Route `/termine` liest alle Termine aus der Datenbank und stellt sie im Template `termine.ejs` dar.
- Das Template zeigt die Termine in einer übersichtlichen Tabelle an.

Damit können alle gespeicherten Termine im Browser angezeigt werden.

## Schritt 6: Hinzufügen neuer Termine

In diesem Schritt wurde die Funktion zum Hinzufügen neuer Termine umgesetzt:

- Die Route `/termine/neu` zeigt ein Formular zur Eingabe eines neuen Termins.
- Die Route `/termine` (POST) speichert die eingegebenen Daten in der Datenbank und leitet zurück zur Terminübersicht.

Damit können Nutzer neue Termine erfassen und dauerhaft speichern.

## Schritt 7: Bearbeiten bestehender Termine

In diesem Schritt wurde die Bearbeitung bestehender Termine umgesetzt:

- Die Route `/termine/:id/bearbeiten` zeigt ein Formular mit den aktuellen Termindaten.
- Die Route `/termine/:id` (PUT) aktualisiert die Daten in der Datenbank.
- Das Paket `method-override` ermöglicht die Nutzung von PUT-Anfragen im Formular.

Damit können bestehende Termine geändert und aktualisiert werden.

## Schritt 8: Löschen von Terminen

In diesem Schritt wurde die Funktion zum Löschen von Terminen ergänzt:

- Die Route `/termine/:id` (DELETE) entfernt den gewählten Termin aus der Datenbank.
- Im Template `termine.ejs` gibt es für jeden Termin einen Lösch-Button und einen Bearbeiten-Link.

Damit können Termine aus der Datenbank entfernt werden.

## Schritt 9: Validierung der Eingaben

In diesem Schritt wurde die serverseitige Validierung ergänzt:

- Beim Hinzufügen und Bearbeiten von Terminen werden die Pflichtfelder (Titel und Datum) geprüft.
- Fehler werden im Formular angezeigt, und die bisherigen Eingaben bleiben erhalten.

Damit wird die Datenqualität verbessert und die Nutzerfreundlichkeit erhöht.

## Schritt 10: Suchfunktion für Termine

In diesem Schritt wurde die Suchfunktion ergänzt:

- In der Terminübersicht gibt es ein Suchfeld.
- Die Route `/termine` filtert die Termine nach Titel oder Datum und zeigt die passenden Ergebnisse an.

Damit können Nutzer gezielt nach bestimmten Terminen suchen und die Übersicht verbessern.

## Schritt 11: Priorisierung von Terminen

In diesem Schritt wurde die Priorisierung ergänzt:

- Jeder Termin erhält eine Priorität (Hoch, Mittel, Niedrig).
- Die Priorität kann beim Anlegen und Bearbeiten gewählt werden und wird in der Übersicht angezeigt.

Damit können wichtige Termine hervorgehoben und besser organisiert werden.

## Schritt 12: Wiederkehrende Termine

In diesem Schritt wurde die Funktion für wiederkehrende Termine ergänzt:

- Jeder Termin kann als einmalig, täglich, wöchentlich oder monatlich markiert werden.
- Die Auswahl erfolgt beim Anlegen und Bearbeiten und wird in der Übersicht angezeigt.

Damit können regelmäßige Termine komfortabel verwaltet werden.

## Schritt 13: Feiertagsintegration

In diesem Schritt wurde die Feiertagsintegration ergänzt:

- Die wichtigsten deutschen Feiertage werden in der Übersicht angezeigt.
- Feiertage sind optisch hervorgehoben und helfen bei der Terminplanung.

Damit werden Feiertage bei der Terminverwaltung berücksichtigt.
