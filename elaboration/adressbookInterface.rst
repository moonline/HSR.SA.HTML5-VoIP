=========================
Telefonbuch Schnittstelle 
=========================


Benötigte Daten (mindestens)
============================
- Photo (optional)
- Name
- sip Adresse

- Pro Schnittstellennutzung: letzter Import


Mögliche Anbindungen
====================
- lokaler Ordner mit vcard Files
- Active Directory
- lokales csv file
- lokales json file
- Directory mit .tha files
- LDAP
- XML

- die Felder sollten jeweils konfigurierbar sein, um den Import anpassen zu können


Sollen mehrere Schnittstellen gleichzeitig genutzt werden?
==========================================================
pro:
	- Unterscheidung kann über sip Adresse gemacht werden
kontra:
	- möglicherweise gleicher Eintrag mehrfach vorhanden wenn Person unterschiedliche sip Adressen besitzt (lässt sich auch im Single Interface Mode nicht vermeiden)


