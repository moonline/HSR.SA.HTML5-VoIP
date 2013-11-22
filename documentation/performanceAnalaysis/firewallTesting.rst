================
Firewall testing
================


1. VPN–Locale
===============

1.1 Messung
-----------

Setup
.....

- Smartphone über lokales Home-WLAN verbunden
- Ultrabook über lokales Home-WLAN–HSR-VPN verbunden


Environment
...........

- Endpunkt 1:
	- Gerät: Smartphone Google Nexus 4
	- Netzwerkanbindung: 
		- Local Network: WLAN
		- Web Connection: Cablecom 10er Leitung
		
- Endpunkt 2:
	- Gerät: Ultrabook Asus UX 31
	- Netzwerkanbindung:
		- Local Network: WLAN
		- Web Connection: Cablecom 10er Leitung
		- VPN: HSR VPN
	
Resultate
.........
- Media-Stream kommt ohne Verzögerung zustande
- Kein Unterschied zu Locale Round


2. HSR–Mobile
===============

2.1 Messung
-----------

Setup
.....

- Netbook über Mobile Network angebunden
- Ultrabook über lokales HSR-Notebook-WLAN angebunden


Environment
...........

- Endpunkt 1:
	- Gerät: Netbook Samsung NC 10
	- Netzwerkanbindung: 
		- Local Network: Mobilfunk
		- Web Connection: Sunrise Mobile Prepaid (max 256 Kbps)
		
- Endpunkt 2:
	- Gerät: Ultrabook Asus UX 31
	- Netzwerkanbindung:
		- Local Network: HSR-Notebook-WLAN
		- Web Connection: HSR
	
Resultate
.........
- Media-Stream kommt nicht zustande
- Im Wireshark sind keine UDP-Pakete sichtbar
- Vermutung: HSR blockt "dynamic port"–"dynamic port"-Verbindungen um Filesharing zu unterbinden
- Auch die apprtc.appspot.com-Demo-App kommt nicht durch




