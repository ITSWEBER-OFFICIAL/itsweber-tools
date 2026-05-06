# Tool Catalog

## Stand v0.2.0 — 163 Tools

| Kategorie | Anzahl | Beispiele |
| --- | --- | --- |
| **Crypto** | 12 | SHA-256, MD5, HMAC, PBKDF2, bcrypt, AES-256, JWT, UUID, Token, htpasswd |
| **Converter** | 24 | Base64, Hex↔RGB, URL codec, HTML Entities, Römische Ziffern, CSV↔JSON, YAML↔JSON, TOML↔JSON |
| **Development** | 28 | JSON Format/Minify/Validate/Query/Schema, Regex, Cron, SQL, .env, Docker Run→Compose, Diff |
| **Network** | 18 | CIDR/Subnet, IP Info/Geo, DNS, Port, MAC, IPv4 Range, UFW, nginx, SSH-Keygen, CORS |
| **Images & QR** | 12 | QR, Favicon, Resize, Crop, Compress, Convert, Flip, Metadaten, Color Picker, Base64, PDF |
| **Text** | 18 | Word Counter, Lorem Ipsum, Case, Line Tools, Diff, Markdown↔HTML, Lint, Wrap, Slugify |
| **Data** | 10 | CSV Analyzer, JSON Query, Table Format, Docker PS, IBAN, Open Graph, Meta Tags, Statistik |
| **Math** | 12 | Math Eval, Prozent, GCD/LCM, Fibonacci, Primzahl, Zahlenformat, Statistik |
| **Measurement** | 14 | Länge, Gewicht, Fläche, Volumen, Druck, Energie, Geschwindigkeit, Datengröße, CSS Units |
| **Web** | 8 | URL Parser, HTTP Status, Basic Auth, Color Palette, Color Contrast, CORS Tester |
| **ItsWeber Ops** | 7 | Docker Run→Compose, Compose Lint, Unraid Template, nginx Config, UFW, SSH-Keygen, htpasswd |

## Roadmap

| Release | Tools | Schwerpunkt |
| --- | --- | --- |
| **v0.2.0** ✅ | 163 | Pipes, History, PWA, Docker, bilingual UI, 11 Kategorien |
| v0.3 | — | Operator Themes (Dark Variants), Keyboard-Shortcut-Customisation |
| v0.4 | — | GitHub CI/CD (typecheck + test on PR, GHCR image on tag) |
| v1.0 | 200 | Unraid Community App Store Listing |

## Tool hinzufügen

Eine Datei unter [packages/toolkit/src/tools/](../packages/toolkit/src/tools/), `defineTool()` aufrufen.
Auto-Discovery via `import.meta.glob` — kein Registrierungsschritt.
Test-Eintrag in `packages/toolkit/src/registry.test.ts` ergänzen.

Siehe [../CONTRIBUTING.md](../CONTRIBUTING.md) für Details.

## Links

- GitHub: [ITSWEBER-OFFICIAL/itsweber-tools](https://github.com/ITSWEBER-OFFICIAL/itsweber-tools)
- Produktseite: [itsweber.de/itsweber-tools](https://itsweber.de/itsweber-tools)
- Unraid CA Submission: [AppFeed Issue #28](https://github.com/Squidly271/AppFeed/issues/28)
- CHANGELOG: [../CHANGELOG.md](../CHANGELOG.md)
