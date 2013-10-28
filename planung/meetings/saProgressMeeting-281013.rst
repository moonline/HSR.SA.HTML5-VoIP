Protokoll SA Progress Meeting
=============================

:Daum: Do 28.10.13
:Zeit: 15.00 - 15:30
:Ort: Rapperswil, HSR, IFS, 6.108
:Anwesende:
	Prof. Dr. Luc Bläser,
	Tobias Blaser
:Protokoll: Tobias Blaser


Traktanden
==========
1. Architektur Big Picture Draft


Protokoll
=========

1. Architektur Big Picture Draft
--------------------------------
- Deployment erste drei Sätze mit ZIP Deployment entfernen -> Deployment via Webserver
- Vorteile C/S:
	- Firewalls leicher zu überbrücken
- reine C Lösung:
	- Nachteile:
		- Probleme mit Firewalls
		- Performanceprobleme (Umfangreiche App)
	- Vorteile:
		- Keine eigene SIP XMPP Server Implementation (Es braucht nur bereits vorhandene Serverinfrastrukturen)

	- Key Distribution Service noch behandeln
	- STUN: Abkürzung erklären
	- Software und Tools (STUN, SIP, Kamailio, ...) Referenz angeben (Projektseite, Standards)
	- Deploymentdiagramm verschieben nach Big Picture

2. Stand der Arbeiten
---------------------
- **Todo:** Ausprobieren was bei Netzausfall probiert
- Performance: Maschine, Leistung, Browser, Netzwerk, Delay, Bandbreite (Setting) und Auswirkungen systematisch dokumentieren

- Schlussbericht: Grobe Teamaufteilung dokumentieren
- **Todo:** SIP Installation/Connector: Erkenntnisse für Schlussbericht aufbereiten (in den Anhang einfügen)


------------

| Rapperswil, 28.10.13,
| Der Protokollführer: Tobias Blaser
