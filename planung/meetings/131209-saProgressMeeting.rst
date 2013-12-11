Protokoll SA Progress Meeting
=============================

:Daum: Mo 09.12.13
:Zeit: 16.00 - 17:00
:Ort: Rapperswil, HSR, IFS, 6.108
:Anwesende:
	Prof. Dr. Luc Bläser,
	Tobias Blaser
	Jannis Grimm
:Protokoll: Tobias Blaser


Traktanden
==========
1. Demo Aktueller Stand
2. Umfang / Inhalte Abgabe
3. Meeting(s) in den letze(r)(n) Woche(n) 
4. Review Feedback
5. Performance Test Mobile->Home 


Protokoll
=========

3. Meetings
-----------
- Mi 11.12.13, 14.00
- Do 19.12.13, 11.00


1. Demo
-------
- Titelblatt: Vorlage nicht so wichtig
- Abstract: Kurzzusammenfassung 1/2 Seite, ev 1 Bild 
	- (Ziele, Erreicht, Techn. Besonderheiten, Fazit)
- Management Sumary: weniger technisch
- Pers. Bericht: Pro Person 1/2 Seite
	- Pers. Erfahrung
	- Nicht zu stark Selbstkritisch
	- Was gelernt
- Literaturverzeichnis: Quellen von Fussnoten da rein verschieben.
- Arbeitsaufteilung: Kleine Tabelle war was gemacht
- Poster: 
	- Titel
	- Aufbau wie Abstract
		- Ziel
		- Architektur / Umsetzung (Diagramme, Screenshots)
		- Erkenntnisse
		- Schlussfolgerungen
	- Meisst Querformat
	- Richtet sich an technische Leute
	
- Für Sekretariat CD
- Für Dozent geht auch OwnCloud

4. Review
---------
- Aufschreiben, was zeitlich nicht mehr gepasst hat (z.B. Naming conventions)
- Connection.js -> try/catch kommentieren
- ChannelXHR -> "0" dokumentieren oder http "no Message" verwenden
- Barrier.js entfernen
- Doku: 
	- Message / Protokoll beschreiben (Zustände, types, fields, parameters)
		- Systematisches Eventhandling in welchem State beschreiben
	- Rollen (caller, callee)
	- Ablauf einer Verbindungsaufnahme / Abbau
	- Channels beschreiben (DataChannel, Signallingchannel, Nachrichtenformate)
	- Im Code dokumentieren, warum Candidates zu früh kommen
	- Simples Protokoll des XHR Channels beschreiben ,Intervall polling
	- Fehlermodell (Logging)
	- Testing: Manuelles Testing dokumentieren
	- Conclusion Performance Testing

	

------------

| Rapperswil, 09.12.13,
| Der Protokollführer: Tobias Blaser
