==================
WebRTC Experiments
==================


getUserMediaExperiment.html
===========================

Ziel
----
- UserMedia anzapfen
- UserMedia ausgeben
- UserMedia über Formularfelder konfigurieren können
- Adapter.js ausprobieren als Abstraktion der Browserimplementationen

Schwierigkeiten
---------------
- Konfiguration von Select Feldern in Config Array einbetten -> Problem, das der Wert vom Select als String und nicht Bool interpretiert wurde.
- Als Basis für die Ausgabe des User Media braucht es ein schon vorhandenes Video Element (es wird nicht automatisch eines erstellt).

Erkenntnisse
------------
- Lokales Testen ist nur möglich (ohne Internetverbindung), wenn de verwendeten Frameworks (jQuery) auch lokal abgelegt sind ;-)


p2pOnSamePage.html
==================

Ziel
----
- Bestehendes Experiment um local P2P Connection erweitern (Der eigene Mediastream soll über eine P2P Connection lokal in einem zweiten Window angezeigt werden).

Schwierigkeiten
---------------
- Setzen der Descriptions ist kompliziert, weil es verschachtelte callbacks sind.
- Mozilla hat in der Zwischenzeit die API geändert. mozRTCPeerConnection erwartete andere Parameter.
 
Erkenntnisse
------------
- RTCPeerConnection funktioniert nur, wenn eine aktive Netzwerkverbindung besteht (auch wenn die P2P Connection lokal ist).


p2pForeignExperiment2.html
==========================

Ziel
----
- P2PConnection auf dem gleichen Host aber extern zugeführte Session Description

Schwierigkeiten
---------------
- Die Verbindung wird nicht über IP Adresse und Port sondern über eine Description (Session Description Protocoll) definiert.
- Die Connectiondescription, die die SDP enthält muss ausgelagert werden und vor dem Verbinden wieder abgefragt werden, damit eine externe Zuführung simuliert werden kann.


p2pForeignExperiment2.1.html
==========================

Ziel
----
- P2P Connection in 3 Calls zerlegen: Offer erzeugen, Offer einlesen und Answer erzeugen, Answer einlesen


p2pForeignExperiment3.html
==========================

Ziel
----
- 2 Browserfenster, einer spielt Caller (offer erzeugen, Answer von Callee verarbeiten), einer Callee (Offer verarbeiten, Answer erzeugen)
- Manuelle Übertragung der SDP's zwischen den Peers (Browserwindows) durch Kopieren

Schwierigkeiten
---------------
- Offer und Answer können erzeugt werden, die Streams erreichen den Empfänger jedoch nicht.


p2pExperiment1.html
===================

Ziel
----
- WebRTC mit dem Framework muazkhRTCPeerConnection-v1.5.js umsetzen.
- Einfaches Signalling mit einem serverseitigen PHP Snippet. (Polling beim Receiver)

Schwierigkeiten
---------------
- Serverseitige Messagequeue muss zwischen Caller und Callee unterscheiden können, weil jeder sonst möglicherweise seine eigenen Messages erhält
- WebRTC Verbindung will auch hier nicht zu Stande kommen. Der Mit dem Wireshark mitgeschnittene Verkehr scheint zwar in Ordnung zu sein (in beide Richtungen läuft ein UDP Video Stream) doch im entsprechenden Videoelement auf der Empfängerseite scheint das Video nicht anzukommen. AttachStream wird nicht aufgerufen.
- Analysieren des Paketverkehrs mit Wireshark ist mühsam, weil die modernen Webbrowser dauernd irgendwas machen und damit noch andern Verkehr generieren, der das Fenster füllt.

Erkenntnisse
------------
- ICECandidates scheinen nur unter Chrome zu funktionieren (Firefox packt sie ev. direkt in das sdp), scheinen aber für die Funktion der apprtc.appspot.com Demo App nicht ein Problem darzustellen.
- das Framework von muazkh scheint einige Unsauberkeiten zu haben und ist entsprechend auch nicht zum Laufen zu kriegen.


p2pForeignExperiment3.1.html
============================

Ziel
----
- Im gleichen Netzwerk (ohne NAT und deren Probleme) eine P2P Verbindung mit RTCPeerConnection aufbauen

Erkenntnisse
------------
- Die RTCPeerConnection darf erst erzeugt werden, wenn sie benötigt wird (caller: beim Call, callee: bei offer receive) und der lokale Stream darf erst nach dem erzeugen attacht werden.


p2pMultipleExperiment1.html
===========================

Ziel
----
- Von einem Endpunkt mit zwei weiteren Endpunkten verbinden um Möglichkeit für Konferenzschaltung zu zeigen

Erkenntnisse
------------
- Konferenzschaltungen sind möglich, es muss jedoch jeder Peer einzeln mit jedem verbunden werden (Echt P2P)