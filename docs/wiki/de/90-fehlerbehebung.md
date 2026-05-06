# Fehlerbehebung

> [🇬🇧 English](../90-troubleshooting.md)

## Container startet, Seite bleibt leer

Prüfen ob Port 8080 (oder der gewählte Host-Port) bereits belegt ist:

```bash
docker logs itsweber-tools
```

## Tool-Output wird in einer Pipe abgeschnitten

Wenn ein nachgelagerter Schritt Metadaten-Header statt sauberer Daten empfängt, hat das vorgelagerte Tool möglicherweise kein `rawOutput` gesetzt. Die Tool-Quelle in `packages/toolkit/src/tools/` prüfen und ein `rawOutput`-Feld ergänzen.

## Einstellungen / Pipes / Verlauf gehen nach Browser-Neustart verloren

Aller Zustand wird in `localStorage` unter dem Schlüssel-Präfix `itsweber-tools:` gespeichert. Wenn der Browser so eingestellt ist, dass er den Speicher beim Schließen leert, bleibt der Zustand nicht erhalten. Ein Browser-Profil verwenden, das localStorage beibehält, oder Pipes vor dem Löschen exportieren.

## CORS-Fehler im CORS-Tester-Tool

Der CORS-Tester macht `fetch()`-Aufrufe an externe URLs vom Browser aus. Der Zielserver muss den Ursprung des Browsers erlauben. Das ist das erwartete Verhalten — das Tool testet, ob das Ziel Cross-Origin-Requests erlaubt.

## Docker-Image schlägt mit `--frozen-lockfile` fehl

Die `pnpm-lock.yaml` muss vorhanden sein und zu `package.json` passen. `pnpm install` lokal ausführen, um die Lockfile neu zu generieren, dann neu bauen:

```bash
pnpm install
docker build -f docker/Dockerfile -t itsweber-tools:dev .
```

## nginx liefert 403

Die statischen Dateien werden von einem Nicht-Root-Benutzer (`appuser`) ausgeliefert. Wenn eine eigene `nginx.conf` eingebunden wird, die die User-Direktive ändert, sicherstellen, dass der nginx-Worker-Prozess Lesezugriff auf `/usr/share/nginx/html` hat.

## Einstellungen, Pipes oder Favoriten werden auf Standardwerte zurückgesetzt

Alle Daten liegen in `localStorage` unter dem Präfix `itsweber-tools:`. Prüfen:

1. **Privater Modus / Inkognito** — localStorage wird in privaten Fenstern nicht sitzungsübergreifend gespeichert.
2. **Browser löscht Site-Daten beim Schließen** — Diese Option für den Ursprung des Containers deaktivieren oder ein dauerhaftes Browser-Profil verwenden.
3. **Origin-Konflikt** — Wenn die App über verschiedene Ports oder Hosts aufgerufen wird (z. B. `localhost:8080` vs. `192.168.1.x:8080`), hat jeder Ursprung seinen eigenen localStorage. Eine URL konsistent verwenden.

## Pipe-Schritt empfängt falsche Eingabe

Den **Eingabemodus** des Schritts prüfen. Bei **Fester Wert** wird der vorherige Output ignoriert und immer der eingetippte Wert verwendet. Auf **Verketten** wechseln, um den Upstream-Output zu empfangen.

Wenn der vorgelagerte Schritt Metadaten-Header zusammen mit Daten produziert (z. B. `Modus: Encode`), muss das vorgelagerte Tool `rawOutput` setzen, damit die Pipe saubere Daten erhält. Siehe [20-tool-hinzufügen.md](20-tool-hinzufügen.md#2-rawoutput-für-tools-mit-metadaten-headern).

## Bild-Tool zeigt nach dem Ablegen einer Datei keinen Output

Bild-Tools erfordern `inputMode: "image-drop"` in der Tool-Definition. Die Workbench zeigt dann eine Drop-Zone statt eines Textfeldes. Wenn ein Textfeld erscheint, unterstützt das Tool keine Bildeingabe. Tool-Beschreibung oder Quelldatei prüfen.

## Theme- oder Sprachwechsel hat keinen Effekt

Einen Hard-Reload versuchen (`Ctrl + Shift + R`). Wenn das Problem weiterhin besteht, DevTools → Application → Storage → `localStorage` öffnen und prüfen, ob die Schlüssel `itsweber-tools:theme` und `itsweber-tools:language` die erwarteten Werte haben.
