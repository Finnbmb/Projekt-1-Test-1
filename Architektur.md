# Architektur: Terminkalender Webanwendung

## 1. Überblick
Die Anwendung basiert auf Node.js und Express als Webserver, SQLite als Datenbank und EJS als Template-Engine. Die Architektur ist modular aufgebaut und trennt die Bereiche Datenhaltung, Logik und Präsentation.

## 2. Komponenten
- **Express-Server:** Stellt die HTTP-Schnittstelle bereit und verarbeitet die Anfragen.
- **SQLite-Datenbank:** Speichert alle Termine dauerhaft.
- **EJS-Templates:** Erzeugen die HTML-Oberfläche für den Browser.
- **Routen:** Definieren die Endpunkte für CRUD-Operationen und die Suche.

## 3. Datenbankmodell
### Tabelle: termine
| Feld         | Typ      | Beschreibung                |
|--------------|----------|-----------------------------|
| id           | INTEGER  | Primärschlüssel, automatisch|
| titel        | TEXT     | Titel des Termins           |
| datum        | TEXT     | Datum des Termins           |
| beschreibung | TEXT     | Optionale Beschreibung      |

## 4. Ablaufdiagramm (Beschreibung)
1. Nutzer ruft die Webanwendung im Browser auf.
2. Der Server liefert die Startseite und die Terminübersicht.
3. Bei Aktionen (Hinzufügen, Bearbeiten, Löschen, Suchen) sendet der Browser eine Anfrage an den Server.
4. Der Server verarbeitet die Anfrage, greift auf die Datenbank zu und liefert die aktualisierte Ansicht zurück.

## 5. Schnittstellen
- **HTTP-Endpunkte:**
  - GET /termine: Terminübersicht und Suche
  - GET /termine/neu: Formular für neuen Termin
  - POST /termine: Neuen Termin speichern
  - GET /termine/:id/bearbeiten: Formular zum Bearbeiten
  - PUT /termine/:id: Termin aktualisieren
  - DELETE /termine/:id: Termin löschen

## 6. Technologien
- Node.js (JavaScript-Laufzeitumgebung)
- Express (Webframework)
- SQLite (Datenbank)
- EJS (Template-Engine)
- method-override (HTTP-Methoden für Formulare)

## 7. Erweiterbarkeit
Die Architektur ist so gestaltet, dass neue Funktionen (z.B. Nutzerverwaltung, Kalenderansicht, API) leicht ergänzt werden können. Die Trennung von Logik, Daten und Präsentation erleichtert die Wartung und Weiterentwicklung.

## 8. Sicherheit und Fehlerbehandlung
- Validierung der Eingaben auf Serverseite
- Fehler werden dem Nutzer angezeigt
- Keine sensiblen Daten im Klartext

## 9. Screenshots und Diagramme
Screenshots und Ablaufdiagramme werden im finalen Word-Dokument ergänzt.

## 10. Fazit
Die Architektur ist robust, modular und erweiterbar. Sie erfüllt die Anforderungen an eine moderne Webanwendung und bietet eine solide Basis für weitere Entwicklungen.
