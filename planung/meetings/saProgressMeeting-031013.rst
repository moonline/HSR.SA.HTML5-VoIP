Protokoll SA Progress Meeting
=============================

:Daum: Do 03.10.13
:Zeit: 11.00 - 11:50
:Ort: Rapperswil, HSR, IFS, 6.108
:Anwesende:
	Prof. Dr. Luc Bläser,
	Tobias Blaser,
	Beat Gutzwiller
:Protokoll: Tobias Blaser


Traktanden
==========
1. Stand Zulassung Projektteam
2. Möglichkeit zur Teamfusion im Falle einer Nichtzulassung mit dem Team von Jannis Grimm
3. Stand der Arbeiten
4. Gastzugang Redmine für Betreuer



Protokoll
=========

1. Stand Zulassung Projektteam
------------------------------
Beat hat seine Zulassung zurückgezogen, wird das Team jedoch nächste Woche noch unterstützen.


2. Teamfusion mit Jannis Grimm
------------------------------
Die Teamfusion wurde bereits Anfang WOche in die Wege geleitet und Jannis Grimm mit allen wichtigen Informationen versorgt.


3. Stand der Arbeiten
---------------------
- Experimente mit WebRTC
	- Probleme mit der P2PConnection
- Risikoanalyse
	- Beat baut nach Möglichkeit einen SIP Adapter um dieses Risiko besser abschätzen zu können
	- UserMedia Access funktioniert bei lokalen Dateien je nach Browser nicht. Lösung: einen lokalen Server benutzen.
	- Möglichkeiten zum Reconnect unbekannt. Durch die Nachfrage des Browsers könnte möglicherweise ein automatischer Reconnect unmöglich sein.

Prototyp
........
- P2P Demo am Montag 14. Oktober. Bis dahin sollte ein Prototyp gebaut sein, der zumindest P2P Kommunikation ermöglicht.


Design Telefonbuchschnittstelle
...............................
- Anstelle generischer Feldimplementation nur Adapterscnittstelle definieren. Adapter kann selbst intern Handling interpretieren.
- Telefonbuch muss bekannt geben, was es für Felder braucht.
- Adapter muss sagen, was er liefern kann.


4. Gastzugang Redmine
---------------------

Besprechung Projektplan
.......................
- Gas geben um bereits verlorene Zeit in den Griff zu kriegen
- Projektplan fertig stellen, jedoch die Zeit vor Allem für's Coden verwenden
- Prototyp fertigstellen bis Ende nächste Woche
- Elaboration noch eine Woche verlängern
- Einarbeitungen in Elaboration verschieben
- Projektplan wenn fertig L. Bläser zusenden
- Beschreibungen zu Meilensteinen erfassen
- GUI eher an den Schluss nehmen
- Bereits gemachte Erfahrungen betr. Performance dokumentieren (als Notizen)


------------

| Rapperswil, 03.10.13,
| Der Protokollführer: Tobias Blaser
