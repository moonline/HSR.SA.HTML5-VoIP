Protokoll SA Progress Meeting
=============================

:Daum: Do 14.10.13
:Zeit: 15.00 - 16:00
:Ort: Rapperswil, HSR, IFS, 6.108
:Anwesende:
	Prof. Dr. Luc Bläser,
	Tobias Blaser,
	Jannis Grimm
:Protokoll: Tobias Blaser


Traktanden
==========
1. SIP Connect Prototyp (Demo innerhalb der HSR nicht möglich)
2. SIP / Websockets Einschränkungen
3. Phonebook Interface Prototype
4. Channel Prototype (Websocket)
5. Projektplan
6. Domain, Architektur


Protokoll
=========

Organisatorisches
-----------------
- **ToDo:** SA Zimmer -> Wechsel dem Verantwortlichen melden. (T)

5. Projektplan
--------------
- **ToDo:** Tabelle mit MS Description einfügen. Description in Redmine erfassen. (J)
- **ToDo:** Tipps & Tricks Redmine Issue erfassen (T)

Todo C1
.......
- Architektur weiter ausdenken
- **ToDo:** Downsampling Prototyp (J) (wichtig) -> Redmine Issue erfassen
- **ToDo:** Konferenzschaltung Prototyp (nur zeigen, das mit der aktuellen Architektur grundsätzlich möglich) (T) -> Redmine Issue
- In Domain Möglichkeit für Settings einfügen
- MS C2 Meeting: Zwischenstand Dokumentation anschauen.
- **ToDo:** Stand der Src zippen (Aussortieren, was von Beat und was von mir). (T)
- Später: Reviews aus Redmine in Qualitätsdokument einfügen
- **ToDo:** Nach jeder Iteration einen Export des Gantt machen und grosse Beschlüsse / Änderungen festhalten.
- **ToDo:** Final Repo initialisieren. (T)

1. SIP Prototype
----------------
Bericht von Jannis über SIP & Websockets.

**ToDo:** Proxy von Beat testen, falls notwendig selber aufsetzen. (J)

2. SIP Einschränkungen
----------------------
Falls SIP Server gebraucht würde -> IT Dienst Ports freischalten lassen.

**ToDo:** Phonebook ev umbenennen zu Contactbook (T)

3. Phonebook Interface
----------------------
Demo PhonebookJson Prototyp und Diskussion über PhonebookArchitektur.

6. Architektur
-----------
Begründen, warum kein Client / Server Paradigma sondern rein Clientseitig. (Designmotivation)

- open
- keine Anhänigkeiten / proprietäre Schnittstelle
- Bald depricated
- Erweiterbarkeit (Channel, Phonebook)

**ToDo:** Architekturbegründungen dokumentieren. (J)


------------

| Rapperswil, 14.10.13,
| Der Protokollführer: Tobias Blaser
