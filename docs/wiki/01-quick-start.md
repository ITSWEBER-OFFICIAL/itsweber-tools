# Quick Start

> [🇩🇪 Deutsch](de/01-schnellstart.md)

## Docker (one-liner)

```bash
docker run -d \
  --name itsweber-tools \
  --restart unless-stopped \
  -p 8080:80 \
  --security-opt no-new-privileges:true \
  ghcr.io/itsweber-official/itsweber-tools:latest
```

Open [http://localhost:8080](http://localhost:8080).

No configuration required. All settings (theme, language, history, pipes, favourites) are stored in your browser's localStorage — nothing leaves your machine.

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

## First steps

1. Use the **Hub** to browse all 163 tools by category
2. Press **Ctrl + K** (or **Cmd + K** on Mac) to open the command palette and search for any tool by name or keyword
3. Select a tool — enter your input and press **Ctrl + Enter** to run it
4. Use **Pipes** to chain multiple tools together into a reusable workflow
5. Switch language with the **DE / EN** button in the top-right corner, or via Settings

## Settings

Click the **⚙** gear icon in the top-right corner to open Settings. Four tabs are available:

| Tab | What it controls |
| --- | --- |
| Appearance | Theme (ItsWeber Petrol, Graphite Command, Clean Studio) and color mode (Light / Dark / System) |
| Language | UI language — German (DE) or English (EN) |
| Keyboard | Overview of all keyboard shortcuts for the current platform |
| Privacy | Trust mode info, clear history, clear favorites |

All settings are saved in `localStorage` — they persist across browser sessions and require no account.
