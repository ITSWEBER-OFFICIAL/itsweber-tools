# Schnellstart

> [🇬🇧 English](../01-quick-start.md)

## Docker (one-liner)

```bash
docker run -d \
  --name itsweber-tools \
  --restart unless-stopped \
  -p 8080:80 \
  --security-opt no-new-privileges:true \
  ghcr.io/itsweber-official/itsweber-tools:latest
```

Öffne [http://localhost:8080](http://localhost:8080).

Keine Konfiguration erforderlich. Alle Einstellungen (Theme, Sprache, Verlauf, Pipes, Favoriten) werden im Browser-localStorage gespeichert — nichts verlässt deinen Rechner.

## docker-compose

```yaml
services:
  itsweber-tools:
    image: ghcr.io/itsweber-official/itsweber-tools:latest
    container_name: itsweber-tools
    restart: unless-stopped
    ports:
      - "8080:80"
    security_opt:
      - no-new-privileges:true
```

## Erste Schritte

1. Nutze den **Hub**, um alle 163 Tools nach Kategorie zu durchstöbern
2. Drücke **Ctrl + K** (oder **Cmd + K** auf dem Mac), um die Befehlspalette zu öffnen und ein Tool nach Name oder Stichwort zu suchen
3. Wähle ein Tool — gib deine Eingabe ein und drücke **Ctrl + Enter**, um es auszuführen
4. Nutze **Pipes**, um mehrere Tools zu einem wiederverwendbaren Workflow zu verketten
5. Sprache wechseln mit dem **DE / EN**-Button oben rechts oder über die Einstellungen

## Einstellungen

Klicke auf das **⚙**-Zahnrad-Symbol oben rechts, um die Einstellungen zu öffnen. Es gibt vier Tabs:

| Tab | Inhalt |
| --- | --- |
| Erscheinung | Theme (ItsWeber Petrol, Graphite Command, Clean Studio) und Farbmodus (Hell / Dunkel / System) |
| Sprache | Oberflächensprache — Deutsch (DE) oder Englisch (EN) |
| Tastatur | Übersicht aller Tastaturkürzel für die aktuelle Plattform |
| Datenschutz | Trust-Mode-Info, Verlauf löschen, Favoriten löschen |

Alle Einstellungen werden in `localStorage` gespeichert — sie bleiben über Browser-Sitzungen hinweg erhalten und erfordern keinen Account.
