# Pipes — Tools verketten

> [🇬🇧 English](../11-pipes.md)

Pipes verbinden mehrere Tools so, dass der Output des einen Tool automatisch zum Input des nächsten wird.

## Pipe erstellen

1. **Pipes** in der oberen Navigation öffnen
2. **+** klicken, um eine neue Pipe zu erstellen — sie wird automatisch mit einem Zeitstempel benannt
3. Den Namen im Namensfeld oben bearbeiten
4. **+ Schritt hinzufügen** klicken, um Tool-Schritte hinzuzufügen
5. Für jeden Schritt ein Tool aus der Dropdown-Liste auswählen

Eine Pipe löschen: **✕**-Button neben dem Ausführen-Button im Pipe-Header klicken.

## Schritt-Eingabemodi

Jeder Schritt hat zwei Eingabemodi:

| Modus | Beschreibung |
| --- | --- |
| **Verketten** | Nutzt den Output des vorherigen Schritts als Eingabe |
| **Fester Wert** | Nutzt einen festen eingetippten Wert — ignoriert den vorherigen Output |

Der **erste Schritt** zeigt immer ein Textfeld für die Ausgangseingabe, auch im Verkettungsmodus — das ist der Startwert für die gesamte Pipe.

### Präfix-Injektion

Im Verkettungsmodus kann ein optionaler **Präfix** hinzugefügt werden, der dem verketteten Output vorangestellt wird, bevor er an das Tool übergeben wird. Nützlich für Tools, die ein Modus-Schlüsselwort in der ersten Zeile erwarten (z. B. `json` zur Auswahl eines Sub-Modus).

## Schritte neu anordnen

Die **↑**- und **↓**-Buttons an jedem Schritt verwenden, um ihn nach oben oder unten zu verschieben. Mit **✕** einen Schritt entfernen.

Das Öffnen eines Tools aus dem Pipe-Editor (↗-Button neben der Tool-Auswahl) navigiert zur Workbench, ohne die Pipe zu verlieren.

## Pipe ausführen

Auf **▶ Pipe ausführen** klicken. Jeder Schritt läuft sequenziell. Die Ergebnisse erscheinen inline unter jedem Schritt:

- Der Output dieses Schritts
- Dauer in Millisekunden
- Eventuelle Fehler (hält die Pipe an diesem Schritt an)

Das **Finaler Output**-Panel unten zeigt das saubere Ergebnis des letzten erfolgreichen Schritts, bereit zum Kopieren.

## rawOutput und saubere Verkettung

Tools, die menschenlesbare Metadaten-Header produzieren (z. B. `Modus: Encode`), stellen einen separaten `rawOutput`-Wert bereit, der nur die Daten enthält. Der Pipe-Executor nutzt immer `rawOutput` für die Verkettung, wenn verfügbar, sodass nachfolgende Schritte saubere Eingaben ohne Metadaten-Rauschen erhalten.

## Fehlerbehandlung

Wenn ein Schritt fehlschlägt, stoppt die Pipe an diesem Schritt. Der Fehler wird inline unter dem fehlgeschlagenen Schritt angezeigt, keine weiteren Schritte werden ausgeführt. Eingabe korrigieren oder Tool austauschen und erneut ausführen.

## Beispiel: JSON → Base64

| Schritt | Tool | Eingabemodus |
| --- | --- | --- |
| 1 | JSON Formatter / Minifier | Fester Wert: `{"name":"ItsWeber","tools":163}` |
| 2 | Base64 Encoder / Decoder | Verketten (empfängt minifiziertes JSON) |

Finaler Output: der Base64-kodierte JSON-String.

## Speicherung

Pipes werden in `localStorage` unter dem Schlüssel `itsweber-tools:pipes` gespeichert. Sie sind lokal im Browser und werden nie an einen Server übertragen. Das Löschen der Browser-Site-Daten entfernt alle gespeicherten Pipes.
