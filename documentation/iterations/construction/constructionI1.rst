Construction I1
===============

Arbeiten
--------
- Applikationskern Objektorientiert umsetzen
	- WebRTC kommunikation
	- Signalling
- SIP Server aufsetzen, erste Kommunikation mit dem Server umsetzen

Probleme
--------
- Ember.js stellt keine einfachen Events zur Verfügung
- SIP Proyxies sind zu umständlich -> eigenen SIP Server
- SIP Server Kamailio hat keine vorkonfigurierten WebSockets -> Konfiguration aufwendig
- Mehr Arbeitspakete eingeplant als möglich -> Features in C2 verschoben.

Erkenntnisse
------------
- Möglicherweise auf Ember.js verzichten und nur Handlebars einsetzen

Beschlüsse
----------
- Es gibt keine frei verfügbaren SIP Proxies oder SIP Server im Netz mit WebSocket Support, weil die Technologie noch zu neu ist. Anstelle eines SIP Proxies wird ein Kamailio SIP Server aufgesetzt. Da mit WebSockets gearbeitet wird müssen von der HSR IT keine Ports freigeschaltet werden.
