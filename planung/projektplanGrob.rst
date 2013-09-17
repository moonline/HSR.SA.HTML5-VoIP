===================
Projektplanung grob
===================

- Start: Woche 38
- Abgabe Kurzfassung & Poster: 16.Dez (Woche 51)
- Abgabetermin: 20.Dez (Woche 51)


Aufgabenstellung Anmerkungen
============================
- Serverkomponente technisch zwingend erforderlich (NAT Routing). Für Projekt jedoch nur erforderlich, wenn nicht auf SIP oder ein ähnliches Protokoll gesetzt wird, wo es bereits Serverinfrastrukturen gibt.
- Kommunikation mit mehr als zwei Teilnehmern als optionale Aufgabe?


Arbeitspakete / MileStones
==========================


Inception
-----------
I1 MS EOI - Woche 38
....................
- Überarbeitung der Aufgabenstellung
- Festlegen von Tools und Infrastruktur
- Planung
- Tools einrichten
- Doku initialisieren
- WebRTC Einarbeitung


Elaboration
-----------

I1
..
- genaue Anforderungen festlegen
- Ausarbeitung Projektplan
- Schnittstellenevaluierung
- Grobarchitektur entwerfen

I2 - MS EOE - 28. Sept (Woche 40)
.................................
- Architektur spezifizieren
- Domain und Use Cases entwerfen
- Prototyp Implementation starten
- Testkonzept entwerfen
- Prototyp entwerfen


Construction
------------
I1 - Woche 41
.............
- Umsetzung Basisarchitektur
- Implementation Domain
- UI Entwurf
- Testing Entwurf

I2 - MS lauffähiger Prototyp - Woche 42
.......................................
- Architektur Umsetzung abgeschlossen
- Domain Implementation erweitern
- UI Implementation
- Testing wächst mit App

I3 - Woche 44
.............
- UI verfeinern

I4 - MS EOC - 29.November (Woche 48)
....................................
- Domain Implementierung abschliessen
- UI abschliessen
- Performance Testing
- Optimierungen
- Code Freeze


Transition
----------

I1 - Woche 49
.............
- Dokumentation
- Vorbereitungen Präsentation


I2 - MS EOT - 13. Dez (Woche 50)
................................
- Präsentation
- Abgabe



Infrastruktur & Tools
=====================

Infrastruktur
-------------
- Persönliches Notebook / HSR Rechner
- Zugewiesene SA Arbeitsplätze (1.262)
- Raum mit Beamer für die Abschlusspräsentation (gibt es eine?)
- Falls vorhanden: Handy mit WebRTC fähigem Browser zum experimentieren (Android Firefox sollte WebRTC bereits unterstützen)
- Server für Vermittlungskomponente
- Server für Projektmanagementtool

Tools
-----
- Projektmanagement
	- Redmine?
		- HSR bietet fertige Redmine Installs (falls noch so wie beim SE Projekt).
		- Redmine Supported Git integration
	- Tobias kennt Redmine von der Firma und vom SE2 Projekt
- Dokumentation
	- Dokumente: latex
	- Notizen, Meetingsprotokolle, ... : rst, txt, md, ...
	- Opendocument nur wenn notwendig (z.B. Draw Diagramme, Skizzen, ...) weil nicht versionierbar über Git
- Versionverwaltung
	- git / github private repo
- Modelling
	- Astah?
- UI Drafting
	- Libo Draw?
	- Balsamiq Mockup
- Testing
	- JsUnit?
		- Als testsystem muss ein realer Browser vorhanden sein. Browsersimulationen unterstützen vermutlich WebRTC noch nicht.
	- http://stackoverflow.com/questions/300855/javascript-unit-test-tools-for-tdd
	- JUnit für die Serverkomponente
- Building
	- Build System wie Ant ist nicht nötig für ein 2-Mann Projekt.
- Entwicklungsumgebung
	- Jedem das seine.
- RunTime
	- WebRTC kompatibler Browser (Firefox, Chrome(ium))


Meetings
========
Jeweils vor dem erreichen eines Milestones und danach (jede bis jede 2. Woche).


Intellectual Property Declaration
=================================
???


