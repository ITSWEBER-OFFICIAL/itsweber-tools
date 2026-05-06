# Execution History

> [🇩🇪 Deutsch](de/12-historie.md)

Every time you run a tool, the result is saved automatically to the execution history.

## Accessing history

Click **History** in the top navigation bar, or search for "History" in the command palette (`Ctrl + K`).

## What is recorded

Each history entry stores:

| Field | Description |
| --- | --- |
| Tool name | The display name of the tool that was run |
| Tool ID | The internal kebab-case ID (e.g. `base64`) |
| Input | The exact input that was submitted (truncated at 120 chars in the list view) |
| Output | The result produced by the tool |
| Error | If the tool failed, the error message instead of output |
| Timestamp | When the execution happened (shown as relative time: "just now", "2m ago", "3h ago") |

## Limits

The last **100 executions** are kept. Older entries are dropped automatically when the limit is reached.

## Rerunning an entry

Click **Rerun →** on any history entry to jump directly to that tool with the same input pre-filled. The workbench opens and you can run or modify the input before executing.

## Clearing history

- From the **History page**: click the **Clear all** button in the top-right corner.
- From **Settings** → Privacy tab: click **Verlauf leeren / Clear history**.

Clearing history also resets the "recently used" list shown in the Hub.

## Storage

History is stored in `localStorage` under the key `itsweber-tools:history`.

It is never sent to any server. No account, no sync — the history is local to the browser profile you use.

If your browser is configured to clear site data on close, history will not persist between sessions. Use a browser profile that retains localStorage for persistent history.
