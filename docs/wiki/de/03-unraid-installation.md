# Unraid-Installation

> [🇬🇧 English](../03-unraid-installation.md)

## Community App (empfohlen)

Im Unraid Community Applications Plugin nach **„ItsWeber Tools"** suchen.

Falls es dort noch nicht gelistet ist, die manuelle Template-Methode unten verwenden.

## Manuelles Template

1. Zu **Docker** → **Add Container** navigieren
2. Auf **„Template repositories"** klicken und folgendes hinzufügen:  
   `https://github.com/itsweber-official/unraid-templates`
3. Das **ItsWeber Tools**-Template auswählen
4. Host-Port festlegen (Standard: `8088`)
5. Auf **Apply** klicken

Alternativ: das XML-Template direkt aus `docker/unraid/itsweber-tools.xml` in diesem Repository importieren.

## Manuelles Container-Setup

| Feld | Wert |
| --- | --- |
| Repository | `ghcr.io/itsweber-official/itsweber-tools:latest` |
| Port-Mapping | `8088 → 80 (TCP)` |
| Restart-Policy | `unless-stopped` |
| Extra-Parameter | `--security-opt no-new-privileges:true` |
| Privileged | Nein |

Kein Volume erforderlich — aller Zustand ist clientseitig (localStorage).

## Zugriff

`http://[UNRAID-IP]:8088`
