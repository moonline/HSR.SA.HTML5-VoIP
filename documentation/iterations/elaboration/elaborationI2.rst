Elaboration I2
==============

Arbeiten
--------
- Prototypen
	- SIP
	- Addressbook
	- WebRTC
	- XHR Signaling
- Risikenanalyse
- Architekturentwurf

Probleme
--------
- Aufwand für WebRTC Prototyp war recht gross
- SIP Architektur und Hardware Umgebung schwierig zu evaluieren und aufzubauen

Erkenntnisse
------------


Beschlüsse
----------

Architektur
...........
- Client-/Server vs. Client: Entscheidung für reine Client App aus folgenden Gründen:
	- open
	- keine Abhänigkeiten / proprietäre Schnittstelle
	- Bald depricated
	- Erweiterbarkeit (Channel, Phonebook)
