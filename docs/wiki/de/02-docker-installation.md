# Docker-Installation

> [🇬🇧 English](../02-docker-installation.md)

## Voraussetzungen

- Docker 24+ oder Docker Desktop 4.x
- Port 8080 frei auf dem Host (oder beliebigen anderen wählen)

---

## docker run

```bash
docker run -d \
  --name itsweber-tools \
  --restart unless-stopped \
  -p 8080:80 \
  --security-opt no-new-privileges:true \
  ghcr.io/itsweber-official/itsweber-tools:latest
```

Öffne [http://localhost:8080](http://localhost:8080).

---

## docker-compose

Als `docker-compose.yml` speichern und `docker compose up -d` ausführen:

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

Kein Volume erforderlich — alle Nutzerdaten (Theme, Sprache, Verlauf, Pipes, Favoriten) werden im Browser-localStorage gespeichert.

---

## Reverse Proxy

### nginx

```nginx
server {
    listen 80;
    server_name tools.example.com;

    location / {
        proxy_pass         http://localhost:8080;
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_set_header   X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header   X-Forwarded-Proto $scheme;
    }
}
```

### Traefik (Labels am Compose-Service)

```yaml
services:
  itsweber-tools:
    image: ghcr.io/itsweber-official/itsweber-tools:latest
    container_name: itsweber-tools
    restart: unless-stopped
    expose:
      - "80"
    security_opt:
      - no-new-privileges:true
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.itsweber-tools.rule=Host(`tools.example.com`)"
      - "traefik.http.routers.itsweber-tools.entrypoints=websecure"
      - "traefik.http.routers.itsweber-tools.tls.certresolver=letsencrypt"
      - "traefik.http.services.itsweber-tools.loadbalancer.server.port=80"
```

### Caddy

```caddyfile
tools.example.com {
    reverse_proxy localhost:8080
}
```

---

## Umgebungsvariablen

Keine Umgebungsvariablen erforderlich oder unterstützt — der Container ist vollständig konfigurationsfrei. Aller Zustand ist clientseitig.

---

## Health Check

Der nginx-Server antwortet mit HTTP 200 auf `/`. Health Check für docker-compose bei Bedarf:

```yaml
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:80"]
      interval: 30s
      timeout: 5s
      retries: 3
```

---

## Aktualisieren

```bash
docker compose pull
docker compose up -d
```

Oder mit `docker run`:

```bash
docker pull ghcr.io/itsweber-official/itsweber-tools:latest
docker stop itsweber-tools && docker rm itsweber-tools
# docker run-Befehl von oben erneut ausführen
```

Da keine Daten im Container gespeichert werden, ist vor dem Update kein Backup nötig.

---

## Lokal bauen

```bash
git clone https://github.com/itsweber-official/itsweber-tools.git
cd itsweber-tools
pnpm install
docker build -f docker/Dockerfile -t itsweber-tools:dev .
docker run -d --name itsweber-tools-dev -p 8080:80 itsweber-tools:dev
```
