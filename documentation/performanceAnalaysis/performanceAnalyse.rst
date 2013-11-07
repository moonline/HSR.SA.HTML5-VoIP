==================
PerformanceAnalyse
==================


1. Local Round
==============

1.1 Messung
-----------

Setup
.....

- 1 Browser
- Sender und Empfänger Instanz laufen jeweils in einem Tab
- Datenverkehr macht roundtripp über Netzwerkkarte
- Externe Services wie STUN Service und Signalling Channel


Environment
...........

.. image:: http://www.asus.com/media/global/products/NOzAOtadWyTCclA9/3MbMbDqygfotHWOZ_480.jpg
	:scale: 30 %
	:align: left
	
- Hardware:
	- Asus UX 31
	- Prozessor: Intel Core i7 2x 1.8 GHz
	- Memory: 3.8 GiB
- Software:
	- Betriebsystem: Ubuntu 12.04 64Bit
	- Browser: Firefox 25
	
	
Resultate
.........

.. image:: img/messung1.2.1.1.png
   :scale: 50 %
   :align: left
   
.. image:: img/messung1.2.1.2.png
   :scale: 50 %
   :align: left
   
- Zunahme CPU Auslastung mit einem Channel: ca 20%
- Zunahme Memory Verbrauch: ca 1-2%
- Zunahme Netzwerk Trafic: keine da local loop
- Video Qualität: 
	- flüssig
	- genug Frames für angenehme Bewegungsdarstellung
	

2 Remote
========

2.1 Messung
-----------

Setup
.....

- 1 Ultrabook, 1 Netbook
- Jeweils gleicher Browser
- Datenverkehr läuft über HSR Wlan (Problemlos bis zu 10.547 kbit/s (1.318 kByte/s) möglich)


Environment
...........

.. image:: http://www.asus.com/media/global/products/NOzAOtadWyTCclA9/3MbMbDqygfotHWOZ_480.jpg
	:scale: 30 %
	:align: left
	
- Ultrabook:
	- Hardware:
		- Asus UX 31
		- Prozessor: Intel Core i7 2x 1.8 GHz
		- Memory: 3.8 GiB
	- Software:
		- Betriebsystem: Ubuntu 12.04, 64Bit
		- Browser: Firefox 25
		
.. image:: http://www.tabletsnlaptops.com/laptop-images/samsung-mini-np-nc10-1.jpg
	:scale: 50 %
	:align: left
	
- Netbook:
	- Hardware:
		- Samsung NC 10
		- Prozessor: Intel Atom 1.6 GHz
		- Memory: 992 MiB
	- Software:
		- Betriebsystem: Ubuntu 12.10, 32 Bit
		- Browser: Firefox 23
		
		
Resultate
.........

Netbook
^^^^^^^

.. image:: img/messung2.2.1.1.png
	:scale: 50 %
	:align: left
	
- Zunahme CPU Auslastung: ca 50%
- Zunahme Memory Verbrauch: nicht spürbar
- Zunahme Netzwerk Trafic: 10KiB/s out, 15KiB/s in


Qualität
^^^^^^^^
- Video stockend
- Wenige Frames pro Sekunde
- Unbrauchbar für Bewegungsdarstellung
- Audio unbrauchbar
	
	
2.2
---

Setup
.....

- Nur Audio, keine Videoübertragung

Environment
...........

Environment: Gleich wie 2.1


Resultate
.........

Netbook
^^^^^^^

.. image:: img/messung2.2.2.2.png
	:scale: 50 %
	:align: left
	
- Zunahme CPU Auslastung: ca 20%
- Zunahme Memory Verbrauch: nicht spürbar
- Zunahme Netzwerk Trafic: 7KiB/s in/out


Ultrabook
^^^^^^^^^

.. image:: img/messung2.2.2.1.png
	:scale: 50 %
	:align: left	
	
- Zunahme CPU Auslastung: ca 10%
- Zunahme Memory Verbrauch: nicht spürbar
- Zunahme Netzwerk Trafic: 8 KiB/s out, 7KiB/s in, Abbruch des Streams nach 30s


2.3 Messung
-----------

Setup
.....

- 1 Ultrabook, 1 Macbook
- Jeweils gleicher Browser
- Datenverkehr läuft über HSR Wlan (Problemlos bis zu 10.547 kbit/s (1.318 kByte/s) möglich)


Environment
...........

.. image:: http://www.asus.com/media/global/products/NOzAOtadWyTCclA9/3MbMbDqygfotHWOZ_480.jpg
	:scale: 30 %
	:align: left

- Ultrabook:
	- Hardware:
		- Asus UX 31
		- Prozessor: Intel Core i7 2x 1.8 GHz
		- Memory: 3.8 GiB
	- Software:
		- Betriebsystem: Ubuntu 12.04, 64Bit
		- Browser: Firefox 25

.. image:: http://images.apple.com/macbook-pro/design-retina/images/fluidgallery/gallery1_2256.jpg
	:scale: 30 %
	:align: left		

- Macbook:
	- Hardware:
		- Macbook Pro ??
		- Prozessor: Intel ??
		- Memory: ?? GiB
	- Software:
		- Betriebsystem: Mac OS X ??
		- Browser: Firefox ??
		
		
Resultate
.........

Ultrabook
^^^^^^^

.. image:: img/messung2.3.1.png
	:scale: 50 %
	:align: left
	
- Zunahme CPU Auslastung: ca 20%
- Zunahme Memory Verbrauch: nicht spürbar
- Zunahme Netzwerk Trafic: 50KiB/s, steigend bis 150KiB/s


Qualität
^^^^^^^^
- Flüssige Video übertragung in beide Richtungen
- Stream des Macbook's sind keine Einzelbilder sichtbar
- Stream des Ultrabooks zeigt bei schnellen Bewegungen Einzelbilder
- Gut geeignet für Bewegungsdarstellung
- Audio übertragung in guter Qualität



3 Mobile - Desktop
==================

3.1 Messung
-----------

Setup
.....

- 1 Tablet, 1 Ultrabook


Environment
...........

.. image:: http://www.asus.com/media/global/products/NOzAOtadWyTCclA9/3MbMbDqygfotHWOZ_480.jpg
	:scale: 30 %
	:align: left

- Ultrabook:
	- Hardware:
		- Asus UX 31
		- Prozessor: Intel Core i7 2x 1.8 GHz
		- Memory: 3.8 GiB
	- Software:
		- Betriebsystem: Ubuntu 12.04, 64Bit
		- Browser: Firefox 25
		
.. image:: http://www.samsung.com/global/microsite/galaxytab/10.1/images/b_image09.jpg
	:scale: 40 %
	:align: left
	
- Tablet:
	- Hardware:
		- Samsung Galaxy Tab 10.1
		- Prozessor: Nvidia Tegra 2x 1 GHz
		- Memory: 1GB
	- Software:
		- Betriebsystem: Android 4.2.1 32 Bit
		- Browser: Firefox 25
		
		
Resultate
.........

Tablet
^^^^^^

- Zunahme CPU Auslastung: 70%


Qualität
^^^^^^^^
- Tablet kann Video vom Desktop flüssig wiedergeben, auch der Ton wird korrekt und verständlich wiedergegeben
- Tablet bringt Leistung nicht um eigenes Video parallel zum remote zu verarbeiten -> eigenes Video freezed
- Desktop empfängt entsprechend vom Tablet nur ein Standbild


3.2 Messung
-----------

Setup
.....

- 1 Smartphone, 1 Ultrabook


Environment
...........

.. image:: http://www.asus.com/media/global/products/NOzAOtadWyTCclA9/3MbMbDqygfotHWOZ_480.jpg
	:scale: 30 %
	:align: left

- Ultrabook:
	- Hardware:
		- Asus UX 31
		- Prozessor: Intel Core i7 2x 1.8 GHz
		- Memory: 3.8 GiB
	- Software:
		- Betriebsystem: Ubuntu 12.04, 64Bit
		- Browser: Firefox 25
		
.. image:: http://cdn.androidbeat.com/wp-content/uploads/2013/11/NExus-4.jpg
	:scale: 30 %
	:align: left
	
- Smartphone:
	- Hardware:
		- Google Nexus 4
		- Prozessor: Qualcomm Snapdragon S4 Pro 2x 1.5 GHz
		- Memory: 2GB
	- Software:
		- Betriebsystem: Android 4.3 32 Bit
		- Browser: Firefox 25
	
	
Resultate
.........

Qualität
^^^^^^^^
- Video kann sowohl auf dem Phone wie auf dem Desktop einigermassen flüssig wiedergegeben werden
- Die video Auflösung ist relativ gering
- Geeignet für Bewegungsdarstellung