# Pipes — Chaining Tools

> [🇩🇪 Deutsch](de/11-pipes.md)

Pipes let you connect multiple tools so the output of one becomes the input of the next.

## Creating a pipe

1. Open the **Pipes** page from the top navigation
2. Click **+** to create a new pipe — it is named with a timestamp automatically
3. Edit the name in the name field at the top
4. Click **+ Add step** to add tool steps
5. Select a tool for each step from the dropdown

To delete a pipe, click the **✕** button next to the Run button in the pipe header.

## Step input modes

Each step has two input modes:

| Mode | Description |
| --- | --- |
| **Chain** | Uses the output of the previous step as input |
| **Static** | Uses a fixed value you type — ignores previous output |

The **first step** always shows a textarea for the initial input, even in chain mode — that is the starting value for the whole pipe.

### Prefix injection

In chain mode you can add an optional **prefix** that is prepended to the chained output before it is passed to the tool. Useful for tools that take a mode keyword on the first line (e.g. `json` to select a sub-mode).

## Reordering steps

Use the **↑** and **↓** buttons on each step to move it up or down. Use **✕** to remove a step.

Opening a tool from the pipe editor (↗ button next to the tool selector) navigates to the Workbench without losing the pipe.

## Running a pipe

Click **▶ Run pipe**. Each step runs sequentially. Results appear inline under each step showing:

- The output of that step
- Duration in milliseconds
- Any error (stops the pipe at that step)

The **Final Output** panel at the bottom shows the clean result of the last successful step, ready to copy.

## rawOutput and clean chaining

Tools that produce human-readable metadata headers (like `Modus: Encode`) expose a separate `rawOutput` value containing only the data. The pipe executor always uses `rawOutput` for chaining when available, so downstream steps receive clean input without metadata noise.

## Example: JSON → Base64

| Step | Tool | Input mode |
| --- | --- | --- |
| 1 | JSON Formatter / Minifier | Static: `{"name":"ItsWeber","tools":163}` |
| 2 | Base64 Encoder / Decoder | Chain (receives minified JSON) |

Final output: the Base64-encoded JSON string.

## Error handling

If a step fails, the pipe stops at that step. The error is shown inline under the failing step, and no further steps are executed. Fix the input or swap the tool and re-run.

## Storage

Pipes are stored in `localStorage` under the key `itsweber-tools:pipes`. They are local to your browser and never sent to any server. Clearing your browser's site data will delete all saved pipes.
