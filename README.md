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
