# Docker Installation

> [🇩🇪 Deutsch](de/02-docker-installation.md)

## Prerequisites

- Docker 24+ or Docker Desktop 4.x
- Port 8080 free on the host (or choose another)

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

Open [http://localhost:8080](http://localhost:8080).

---

## docker-compose

Save as `docker-compose.yml` and run `docker compose up -d`:

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

No volumes are required — all user state (theme, language, history, pipes, favourites) is stored in the browser's localStorage.

---

## Reverse proxy

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

### Traefik (labels on the compose service)

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

## Environment variables

No environment variables are required or supported — the container is entirely configuration-free. All state is client-side.

---

## Health check

The nginx server returns HTTP 200 on `/`. Add a health check to docker-compose if needed:

```yaml
    healthcheck:
      test: ["CMD", "wget", "-qO-", "http://localhost:80"]
      interval: 30s
      timeout: 5s
      retries: 3
```

---

## Updating

```bash
docker compose pull
docker compose up -d
```

Or with plain `docker run`:

```bash
docker pull ghcr.io/itsweber-official/itsweber-tools:latest
docker stop itsweber-tools && docker rm itsweber-tools
# re-run the docker run command above
```

No data is stored in the container, so no backup is needed before updating.

---

## Building locally

```bash
git clone https://github.com/itsweber-official/itsweber-tools.git
cd itsweber-tools
pnpm install
docker build -f docker/Dockerfile -t itsweber-tools:dev .
docker run -d --name itsweber-tools-dev -p 8080:80 itsweber-tools:dev
```
