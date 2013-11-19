================
Firewall testing
================


1. VPN - Locale
===============

1.1 Messung
-----------

Setup
.....

- Smartphone über lokales Home-Wlan verbunden
- Ultrabook über lokales Home-Wlan-HSR-VPN verbunden


Environment
...........

- Endpunkt 1:
	- Gerät: Smartphone Google Nexus 4
	- Netzwerkanbindung: 
		- Local Network: Wlan
		- Web Connection: Cablecom 10er Leitung
		
- Endpunkt 2:
	- Gerät: Ultrabook Asus UX 31
	- Netzwerkanbindung:
		- Local Network: Wlan
		- Web Connection: Cablecom 10er Leitung
		- VPN: HSR VPN
	
Resultate
.........
- Mediastream kommt ohne Verzögerung zu Stande
- Kein Unterschied zu Locale Round


2. HSR - Mobile
===============

2.1 Messung
-----------

Setup
.....

- Netbook über Mobile Network angebunden
- Ultrabook über lokales HSR Notebook Wlan angebunden


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
		- Local Network: HSR Notebook Wlan
		- Web Connection: HSR
	
Resultate
.........
- Mediastream kommt nicht zu Stande
- Im Wireshark sind keine UDP Pakete sichtbar
- Vermutung: HSR blockt "dynamic port" - "dynamic port" Verbindungen um Filesharing zu unterbinden
- Auch die apprtc.appspot.com Demo App kommt nicht durch




