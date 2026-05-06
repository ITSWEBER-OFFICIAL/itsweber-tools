# Ausführungshistorie

> [🇬🇧 English](../12-history.md)

Jedes Mal, wenn ein Tool ausgeführt wird, wird das Ergebnis automatisch in der Ausführungshistorie gespeichert.

## Zugriff

Auf **Verlauf** in der oberen Navigationsleiste klicken oder in der Befehlspalette (`Ctrl + K`) nach „Verlauf" suchen.

## Was gespeichert wird

Jeder Verlaufseintrag enthält:

| Feld | Beschreibung |
| --- | --- |
| Tool-Name | Der Anzeigename des ausgeführten Tools |
| Tool-ID | Die interne kebab-case-ID (z. B. `base64`) |
| Eingabe | Die genaue Eingabe, die übergeben wurde (in der Listenansicht auf 120 Zeichen gekürzt) |
| Ausgabe | Das vom Tool erzeugte Ergebnis |
| Fehler | Falls das Tool fehlgeschlagen ist, die Fehlermeldung statt der Ausgabe |
| Zeitstempel | Zeitpunkt der Ausführung (als relative Zeit angezeigt: „Gerade eben", „vor 2 Min.", „vor 3 Std.") |

## Limit

Die letzten **100 Ausführungen** werden gespeichert. Ältere Einträge werden automatisch gelöscht, sobald das Limit erreicht ist.

## Erneut ausführen

Auf **Wiederholen →** bei einem Verlaufseintrag klicken, um direkt zu diesem Tool zu springen, mit derselben Eingabe vorausgefüllt. Die Workbench öffnet sich und die Eingabe kann vor dem Ausführen geändert werden.

## Verlauf löschen

- Auf der **Verlauf-Seite**: Den **Alle löschen**-Button oben rechts klicken.
- Über **Einstellungen** → Tab Datenschutz: Auf **Verlauf leeren** klicken.

Das Löschen des Verlaufs setzt auch die „Zuletzt verwendet"-Liste im Hub zurück.

## Speicherung

Der Verlauf wird in `localStorage` unter dem Schlüssel `itsweber-tools:history` gespeichert.

Er wird nie an einen Server übertragen. Kein Account, keine Synchronisierung — der Verlauf ist lokal im verwendeten Browser-Profil.

Wenn der Browser so konfiguriert ist, dass Site-Daten beim Schließen gelöscht werden, bleibt der Verlauf nicht zwischen Sitzungen erhalten. Ein Browser-Profil verwenden, das localStorage beibehält, für persistenten Verlauf.
