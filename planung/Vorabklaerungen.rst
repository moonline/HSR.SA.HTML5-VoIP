==============================================================
Vorabklärungen zu WebRTC, RTSP und bereits vorhanden Standards
==============================================================


Grundlegende Funktion von WebRTC VoIP
=====================================
- WebRTC regelt nur die effektive Multimediakommunikation zwischen den Peers
- Für das Initialisieren der Verbindung (Signaling) ist ein beliebiges Protokoll möglich (IETF erwähnt XHR, SIP und XAMPP als Beispiel)
- P2P Kommunikation ohne Server ist theorethisch möglich, wird jedoch durch NAT's erschwert
- WebRTC Example arbeitet mit XHR und zentralem Server


Existierende offene Standards zum Signaling von Audio & Videokommunikation (Telefonbuch)
========================================================================================

SIP
---
- Standard zum Aufbauen einer P2P Verbindung (Session Initiation Protocol)
- SIP Telefone als Software wie Hardware weit verbreitet
- Über SIP Services Calls ins alte Telefonnetz möglich wenn Mediastream unterstützt wird

Verbindungsaufbau Ablauf
........................
1. sip:caller@provider1.tld sendet INVITE für sip:callee@provider2.tld an provider1.tld
2. provider1.tld sendet INVITE an provider2.tld
3. provider2.tld sendet INVITE an callee falls dieser online ist
4. provider2.tld sendet OK oder Abbruch an provider1.tld
5. provider1.tld sender OK oder Abbruch an caller
6. Bei Erfolg callen sich caller und callee gegenseitig direkt
7. Die Kommunikation mit den Providern wird eingestellt

.. image:: http://www.zrtp.org/_/rsrc/1290957736061/zrtp-protocol/zrtp-exchange.png


XAMPP Jingle
------------
- Baut auf XAMPP Chat Protokoll auf
- Wurde von Google für Google Hangout entwickelt
- Noch "relativ" jung, trotzdem schon breit unterstützt aber nicht so weit verbreitet
- Jingle ist wesentlich "experimenteller" als XAMPP
- Audio- und Videoverschlüsselung bis jetzt von nur wenigen Clients unterstützt


H.323
-----
- Älterer Standard
- Eher für die Bedingungen der Beginzeit von VoIP ausgelegt

.. image:: http://www.chebucto.ns.ca/~rakerman/images/h323_a04.gif
