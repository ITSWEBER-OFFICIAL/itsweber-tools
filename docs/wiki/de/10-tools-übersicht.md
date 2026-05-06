# Tools-Übersicht

> [🇬🇧 English](../10-tools-overview.md)

163 Tools in 11 Kategorien. Im **Hub** nach Kategorie stöbern oder `Ctrl + K` drücken, um nach Name, Stichwort oder Beschreibung zu suchen.

---

## Crypto — 12 Tools

Hashing, Verschlüsselung, Signaturen und Geheimnisse.

| Tool | Beschreibung |
| --- | --- |
| SHA-256 | Hasht Eingaben mit dem SHA-256-Algorithmus (WebCrypto) |
| MD5 | Erstellt einen MD5-Hash (browserseitig) |
| HMAC | Berechnet HMAC mit SHA-256/SHA-512 |
| PBKDF2 | Leitet Schlüssel mit PBKDF2 und konfigurierbaren Iterationen ab |
| bcrypt | Hasht Passwörter mit bcrypt |
| AES-256 | Ver- und entschlüsselt mit AES-256-GCM |
| JWT Decoder | Dekodiert und verifiziert JWT-Header und Payloads |
| UUID Generator | Erzeugt UUIDs v4 (RFC 4122) |
| Token Generator | Erzeugt zufällige Hex-, alphanumerische oder Base64-Token |
| htpasswd | Erzeugt htpasswd-kompatible bcrypt-Einträge |

---

## Converter — 24 Tools

Konvertierung zwischen Formaten, Kodierungen und Darstellungen.

| Tool | Beschreibung |
| --- | --- |
| Base64 | Kodiert und dekodiert Base64 (Standard und URL-safe) |
| Hex ↔ RGB | Konvertiert zwischen Hex-Farbcodes und RGB-Werten |
| URL Encode / Decode | Percent-kodiert und dekodiert URLs |
| HTML Entities | Kodiert und dekodiert HTML-Entities |
| Römische Ziffern | Konvertiert zwischen arabischen und römischen Zahlen |
| CSV ↔ JSON | Konvertiert zwischen CSV und JSON-Array |
| YAML ↔ JSON | Konvertiert zwischen YAML und JSON |
| TOML ↔ JSON | Konvertiert zwischen TOML und JSON |
| Binary Tools | Konvertiert Text zu/von Binär, Hex und Oktal |
| Bytes Formatter | Formatiert Byte-Anzahlen in lesbare Größen |
| Unix Timestamp | Konvertiert Unix-Timestamps zu/von ISO-Datumsstrings |
| Number Base | Konvertiert zwischen Binär, Oktal, Dezimal und Hex |
| Color Convert | Konvertiert zwischen HEX, RGB, HSL und HSV |
| Color Names | Löst Farbnamen in Hex-Werte auf |
| Aspect Ratio | Berechnet Seitenverhältnisse und fehlende Abmessungen |

---

## Development — 28 Tools

Formatieren, validieren, parsen und transformieren von Code und Konfiguration.

| Tool | Beschreibung |
| --- | --- |
| JSON Formatter / Minifier | Formatiert oder minifiziert JSON |
| JSON Validator | Validiert JSON und meldet Parse-Fehler |
| JSON Query (jq) | Führt jq-artige Abfragen auf JSON-Eingaben aus |
| JSON Schema | Erzeugt ein JSON Schema aus einem JSON-Beispiel |
| Regex Tester | Testet reguläre Ausdrücke mit Match-Hervorhebung |
| Cron Parser | Erklärt Cron-Ausdrücke in Klartext |
| SQL Formatter | Formatiert und verschönert SQL-Abfragen |
| .env Parser | Parst .env-Dateien und zeigt Schlüssel-Wert-Paare |
| Docker Run → Compose | Konvertiert `docker run`-Befehle in docker-compose YAML |
| Text Diff | Zeigt zeilenweise Unterschiede zwischen zwei Texten |
| Code Indent | Konvertiert Einrückungen zwischen Tabs und Leerzeichen |
| API Mock | Erzeugt Mock-API-Antworten für ein gegebenes Schema |
| API Status Monitor | Prüft den HTTP-Status einer Liste von Endpunkten |
| Container Health Check | Validiert Docker-Health-Check-Befehle |

---

## Network — 18 Tools

Subnetze, DNS, Ports und Firewall-Regeln.

| Tool | Beschreibung |
| --- | --- |
| CIDR / Subnet Calculator | Berechnet Netzwerkadressen, Broadcast und Host-Bereich |
| IP Info / Geo | Ruft öffentliche IP-Informationen und Geolokalisierung ab |
| DNS Lookup | Löst DNS-Records auf (A, AAAA, MX, TXT, CNAME) |
| Port Scanner | Prüft ob ein Port offen ist (browser-fetch-basiert) |
| MAC Lookup | Schlägt den Hersteller einer MAC-Adresse nach |
| IPv4 Range | Berechnet alle IPs in einem CIDR-Bereich |
| UFW Rules | Erzeugt `ufw allow/deny`-Befehlsstrings |
| nginx Config | Erzeugt nginx-Server-Block-Snippets |
| SSH Keygen | Erzeugt SSH-Schlüsselpaar-Anweisungen und Config-Einträge |
| CORS Tester | Testet ob eine URL Cross-Origin-Requests erlaubt |
| chmod Calculator | Konvertiert zwischen numerischen und symbolischen chmod-Modes |

---

## Images & QR — 12 Tools

Bildverarbeitung und QR-/Barcode-Generierung — vollständig im Browser.

| Tool | Beschreibung |
| --- | --- |
| QR Generator | Erzeugt QR-Codes für URLs, WLAN und vCards |
| Barcode Generator | Erzeugt 1D-Barcodes (Code 128, EAN-13 usw.) |
| Favicon Generator | Erstellt Favicon-Sets aus einem hochgeladenen Bild |
| Image Resize | Skaliert Bilder auf angegebene Abmessungen |
| Image Crop | Schneidet Bilder auf einen definierten Bereich zu |
| Image Compress | Reduziert die Dateigröße von Bildern |
| Image Convert | Konvertiert zwischen PNG, JPEG und WebP |
| Image Flip | Spiegelt Bilder horizontal oder vertikal |
| Image Metadata | Liest EXIF- und andere Metadaten aus Bilddateien |
| Image → Base64 | Konvertiert ein Bild in eine Base64-Data-URL |
| PDF Tools | Erstellt ein PDF aus Text- oder Bildeingabe |
| Color Picker | Wählt Farben aus einem hochgeladenen Bild |

---

## Text — 18 Tools

Analysieren, transformieren und bereinigen von Text.

| Tool | Beschreibung |
| --- | --- |
| Word Counter | Zählt Wörter, Zeichen, Zeilen und Sätze |
| Lorem Ipsum | Erzeugt Lorem-Ipsum-Platzhaltertext |
| Case Converter | Konvertiert zwischen camelCase, PascalCase, snake_case, kebab-case |
| Line Tools | Sortiert, dedupliziert, kehrt um oder filtert Zeilen |
| Text Diff | Vergleicht zwei Textblöcke und hebt Unterschiede hervor |
| Markdown → HTML | Rendert Markdown zu HTML |
| Markdown Lint | Prüft Markdown auf häufige Stilprobleme |
| Text Wrap | Bricht Text bei einer angegebenen Spaltenbreite um |
| Slugify | Konvertiert Text in URL-freundliche Slugs |

---

## Data — 10 Tools

Strukturierte Daten parsen, prüfen und formatieren.

| Tool | Beschreibung |
| --- | --- |
| CSV Analyzer | Parst CSV und zeigt Spaltenstatistiken |
| JSON Query | Filtert und transformiert JSON mit jq-artiger Syntax |
| Table Formatter | Formatiert Daten als Markdown- oder ASCII-Tabelle |
| Docker PS Parser | Parst `docker ps`-Ausgabe in eine lesbare Tabelle |
| IBAN Validator | Validiert IBAN-Nummern und extrahiert Bankinfos |
| Open Graph Preview | Zeigt Open-Graph-Meta-Tags einer URL in der Vorschau |
| Meta Tags Inspector | Zeigt alle Meta-Tags aus einer rohen HTML-Eingabe |

---

## Math — 12 Tools

Berechnungen, Zahlentheorie und Formatierung.

| Tool | Beschreibung |
| --- | --- |
| Math Evaluator | Wertet mathematische Ausdrücke aus |
| Prozentrechner | Berechnet Prozentsätze, Zu- und Abnahmen |
| GCD / LCM | Berechnet ggT und kgV |
| Fibonacci | Erzeugt Fibonacci-Folgen |
| Prime Checker | Prüft ob eine Zahl prim ist |
| Number Formatter | Formatiert Zahlen mit länderspezifischen Trennzeichen |
| Statistics | Berechnet Mittelwert, Median, Modus und Standardabweichung |

---

## Measurement — 14 Tools

Einheitenumrechner für reale Größen.

| Tool | Beschreibung |
| --- | --- |
| Länge | Konvertiert zwischen mm, cm, m, km, in, ft, mi |
| Gewicht | Konvertiert zwischen mg, g, kg, lb, oz |
| Fläche | Konvertiert zwischen m², km², ft², acres, Hektar |
| Volumen | Konvertiert zwischen ml, l, fl oz, cup, pint, gallon |
| Druck | Konvertiert zwischen Pa, bar, psi, atm |
| Energie | Konvertiert zwischen J, kJ, kcal, kWh |
| Geschwindigkeit | Konvertiert zwischen m/s, km/h, mph, Knoten |
| Datengröße | Konvertiert zwischen Bytes, KB, MB, GB, TB (SI und binär) |
| CSS Units | Konvertiert zwischen px, em, rem, vw, pt |
| Kochmaße | Konvertiert Kochmaße (cups, EL, TL) |

---

## Web — 8 Tools

URL-Parsing, HTTP und Browser-Hilfsmittel.

| Tool | Beschreibung |
| --- | --- |
| URL / URI Parser | Zerlegt eine URL in Protokoll, Host, Pfad, Query und Hash |
| HTTP Status Codes | Schlägt HTTP-Statuscodes und ihre Bedeutung nach |
| Basic Auth Generator | Kodiert Benutzername:Passwort als Basic-Auth-Header |
| Color Palette | Erzeugt eine Palette aus einer Ausgangsfarbe |
| Color Contrast | Prüft das WCAG-Kontrastverhältnis zwischen zwei Farben |
| CORS Tester | Testet das Cross-Origin-Verhalten für eine URL |

---

## ItsWeber Ops — 7 Tools

Self-hosted-Infrastruktur-Helfer, optimiert für typische Homelab-Workflows.

| Tool | Beschreibung |
| --- | --- |
| Docker Run → Compose | Konvertiert einen `docker run`-Befehl in docker-compose-Format |
| Compose Lint | Validiert eine docker-compose YAML-Datei |
| Unraid Template | Erzeugt ein Unraid-XML-Container-Template |
| nginx Config | Erzeugt nginx-Server-Block- und Reverse-Proxy-Konfigurationen |
| UFW Rules | Erzeugt `ufw`-Firewall-Regelübersichten |
| SSH Keygen | Erzeugt `ssh-keygen`-Befehle und `~/.ssh/config`-Einträge |
| htpasswd | Erzeugt htpasswd-bcrypt-Einträge für Basic Auth |

---

## Entdecken

- **Hub** — alle Kategorien von der Startseite aus durchstöbern
- **`Ctrl + K`** — Fuzzy-Suche über alle Tools nach Name, Beschreibung oder Stichwort
- **Tool Browser** — Seitenleiste auf der Tools-Seite mit Kategoriefilter und Textsuche
