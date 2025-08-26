# Spezifikation: Terminkalender Webanwendung

## 1. Zielsetzung
Die Webanwendung soll einen digitalen Terminkalender bereitstellen, mit dem Nutzer Termine erfassen, anzeigen, bearbeiten, löschen und durchsuchen können. Die Anwendung ist als Projektarbeit im Rahmen des Softwaretechnik-Moduls konzipiert und soll die wichtigsten Anforderungen an eine moderne Kalenderlösung erfüllen.

## 2. Anforderungen
### 2.1 Funktionale Anforderungen
- Termine können hinzugefügt, angezeigt, bearbeitet und gelöscht werden.
- Jeder Termin besitzt mindestens einen Titel und ein Datum.
- Die Termine werden dauerhaft in einer Datenbank gespeichert.
- Es gibt eine Suchfunktion für Termine nach Titel oder Datum.
- Pflichtfelder werden validiert, Fehler werden dem Nutzer angezeigt.
- Die Anwendung ist über einen Webbrowser bedienbar.

### 2.2 Nicht-funktionale Anforderungen
- Die Anwendung ist einfach bedienbar und übersichtlich gestaltet.
- Die Daten werden lokal gespeichert (SQLite).
- Die Anwendung ist erweiterbar (z.B. Nutzerverwaltung, Export, Kalenderansicht).
- Die Lösung ist plattformunabhängig und läuft auf jedem System mit Node.js.

## 3. Use Cases
- **Termin anlegen:** Nutzer gibt Titel, Datum und optional eine Beschreibung ein.
- **Termin anzeigen:** Alle Termine werden in einer Tabelle dargestellt.
- **Termin bearbeiten:** Nutzer kann bestehende Termine ändern.
- **Termin löschen:** Nutzer kann Termine entfernen.
- **Termin suchen:** Nutzer kann nach Titel oder Datum filtern.

## 4. Akzeptanzkriterien
- Alle Grundfunktionen sind über die Weboberfläche erreichbar.
- Pflichtfelder werden geprüft, Fehler werden angezeigt.
- Die Daten bleiben nach einem Neustart erhalten.
- Die Suchfunktion liefert korrekte Ergebnisse.

## 5. Erweiterungsmöglichkeiten
- Nutzerverwaltung (Login, Rechte)
- Kalenderansicht (Monats-/Wochenübersicht)
- Export/Import von Terminen
- Erinnerungsfunktion
- Mobile Optimierung

## 6. Screenshots
Screenshots der wichtigsten Ansichten werden im finalen Word-Dokument ergänzt.

## 7. Glossar
- **Termin:** Ein Eintrag im Kalender mit Titel, Datum und optionaler Beschreibung.
- **CRUD:** Create, Read, Update, Delete – Grundfunktionen der Datenverwaltung.
- **Validierung:** Prüfung der Eingaben auf Korrektheit.
