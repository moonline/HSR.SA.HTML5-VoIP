Construction I3 Week 2
======================

Arbeiten
--------
- User management / Storage
- SIP Server Problem Analyse
- UI Design Draft
- Remote Json Addressbook
- Chrome Bug behoben
- Performanceanalyse

Probleme
--------
- SIP Server Konfigurationsproblem besteht weiterhin.

Erkenntnisse
------------
- HSR Firewall (Zwischen Internem Netz und DMZ) blockt ziemlich alle User- und Dynamic Ports. -> Netzwerkübergreifende Telefonie nur ausserhalb der HSR oder im VPN möglich.
- Chrome benötigt unbedingt Opus als prefered gesetzt
- Performance durch die Betaimplementationen und softwareseitige (De)/Coding und Verschlüsselung teilweise schlecht.
- WebRTC besitzt Autoscaling. Wenn die Bandbreite vorhanden ist, wird die Qualität automatisch erhöht.

Beschlüsse
----------
- SIP Channel wird nicht umgesetzt. Eine spätere Umsetzung wäre jedoch jederzeit möglich.
- Für den UI Draft wird Mobile First verwendet.
- CSV Adapter rejected