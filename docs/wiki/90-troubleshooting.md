# Troubleshooting

> [🇩🇪 Deutsch](de/90-fehlerbehebung.md)

## Container starts but page is blank

Check that port 8080 (or your chosen host port) is not already in use:

```bash
docker logs itsweber-tools
```

## Tool output is cut off in a pipe

If a downstream step receives metadata headers instead of clean data, the upstream tool may not set `rawOutput`. Check the tool's source in `packages/toolkit/src/tools/` and add a `rawOutput` field.

## Settings / pipes / history are lost after browser refresh

All state is stored in `localStorage` under the key prefix `itsweber-tools:`. If your browser is set to clear storage on close, state will not persist. Use a browser profile that retains localStorage, or export your pipes before clearing.

## CORS errors in the CORS Tester tool

The CORS Tester makes `fetch()` calls to external URLs from your browser. The target server must allow your browser's origin. This is expected behaviour — the tool tests whether the target allows cross-origin requests.

## Docker image fails to build with `--frozen-lockfile`

The `pnpm-lock.yaml` must be present and match `package.json`. Run `pnpm install` locally to regenerate the lockfile, then rebuild:

```bash
pnpm install
docker build -f docker/Dockerfile -t itsweber-tools:dev .
```

## nginx returns 403

The static files are served by a non-root user (`appuser`). If you mount a custom `nginx.conf` that changes the user directive, ensure the nginx worker process has read access to `/usr/share/nginx/html`.

## Settings, pipes, or favorites reset to defaults

All data is in `localStorage` under the prefix `itsweber-tools:`. Check:

1. Browser privacy mode / incognito — localStorage does not persist across sessions in private windows.
2. Browser set to clear site data on close — disable this for the container's origin, or use a persistent browser profile.
3. Origin mismatch — if you access the app via different ports or hosts (e.g. `localhost:8080` vs `192.168.1.x:8080`), each origin has its own localStorage. Stick to one URL.

## Pipe step receives wrong input

Check the step's **input mode**. If set to **Static**, it ignores the previous output and always uses the fixed value you typed. Switch to **Chain** to receive the upstream output.

If the upstream step produces metadata headers alongside data (e.g. `Modus: Encode`), the upstream tool must set `rawOutput` so the pipe receives clean data. See [20-adding-tools.md](20-adding-tools.md#2-rawoutput-for-tools-with-metadata-headers).

## Image tool shows no output after dropping a file

Image tools require `inputMode: "image-drop"` in the tool definition, and the Workbench shows a drop zone instead of a text input. If you see a text area, the tool does not support image input. Check the tool's description or source file.

## Theme or language switch has no effect

Try a hard reload (`Ctrl + Shift + R`). If the issue persists, open DevTools → Application → Storage → `localStorage` and verify the keys `itsweber-tools:theme` and `itsweber-tools:language` have the expected values.
