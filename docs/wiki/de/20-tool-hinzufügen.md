# Neues Tool hinzufügen

> [🇬🇧 English](../20-adding-tools.md)

## 1. Tool-Datei erstellen

`packages/toolkit/src/tools/<id>.ts`:

```ts
import { defineTool } from "../core";

export default defineTool({
  id: "mein-tool",                          // eindeutige kebab-case-ID
  title: "My Tool",                          // englischer Anzeigename
  titleDe: "Mein Tool",                      // deutscher Anzeigename
  description: "What it does.",              // ein Satz, Englisch
  descriptionDe: "Was es tut.",              // ein Satz, Deutsch
  explanation: "Full usage explanation.\nWith example.",
  explanationDe: "Volle Nutzungserklärung.\nMit Beispiel.",
  category: "Converter",                     // siehe ToolCategory-Typ
  keywords: ["schlüsselwort1", "keyword2"],
  status: "ready",
  privacyMode: "local-only",               // "local-only" | "browser-api" | "network-fetch"
  placeholder: "Eingabe-Platzhaltertext",
  example: "Beispiel-Eingabewert",
  useCases: ["Use case 1", "Use case 2"],
  useCasesDe: ["Anwendungsfall 1", "Anwendungsfall 2"],
  run: (input) => {
    const result = input.toUpperCase();
    return { output: result };
  },
});
```

Auto-Discovery via `import.meta.glob` — keine Registrierung, kein Import anderswo nötig.

## 2. rawOutput für Tools mit Metadaten-Headern

Wenn das Tool Metadaten-Zeilen zum `output` hinzufügt (z. B. `Modus: Encode\n\n<Daten>`), `rawOutput` auf den reinen Datenwert setzen, damit die Pipe-Verkettung sauber funktioniert:

```ts
run: (input) => ({
  output: [`Modus: Encode`, ``, encoded, `Länge: ${n}`].join("\n"),
  rawOutput: encoded,
}),
```

## 3. Bild-Tools

Für Drag-and-Drop-Bildeingabe `inputMode: "image-drop"` setzen:

```ts
inputMode: "image-drop",
run: (input) => { /* input ist ein Data-URL-String */ },
```

## 4. Test hinzufügen

In `packages/toolkit/src/registry.test.ts` einen Ausführungstest ergänzen:

```ts
it("mein-tool transformiert Eingabe", async () => {
  const result = await runTool("mein-tool", "hello");
  expect(result.output).toBe("HELLO");
});
```

## Kategorien

`Crypto` · `Converter` · `Web` · `Images and QR` · `Development` · `Network` · `Math` · `Measurement` · `Text` · `Data` · `ItsWeber Ops`

## Privacy-Modi

| Modus | Wann verwenden |
| --- | --- |
| `local-only` | Alle Berechnungen im Browser, keine Netzwerkanfragen |
| `browser-api` | Nutzt Browser-APIs (z. B. `navigator.clipboard`, `canvas`) |
| `network-fetch` | Stellt ausgehende HTTP-Anfragen (z. B. DNS-Lookup, IP-Info) |
