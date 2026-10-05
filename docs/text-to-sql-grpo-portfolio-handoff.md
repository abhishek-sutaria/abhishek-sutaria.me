# Handoff: align Gradio demo with portfolio copy

For the **text-to-sql-grpo / RL agent** chat. Portfolio: https://abhishek-sutaria.me/projects

| What visitors expect | Current Space behavior |
|----------------------|-------------------------|
| Qwen2.5-3B post-trained demo + execution rewards | Schema **stub** (`MODEL_ID` unset) |

GitHub issue (checklist): https://github.com/abhishek-sutaria/text-to-sql-grpo/issues/1

## Fastest fix (no code merge)

In Hugging Face Space **Settings → Variables**:

- `MODEL_ID` = `Qwen/Qwen2.5-3B-Instruct`

Redeploy / restart, then smoke-test: Notes must **not** say “stub generator”.

## Full portfolio match

1. Upload GRPO QLoRA adapter to Hugging Face Hub.
2. Space **Secret** `ADAPTER_ID` = Hub repo id for that adapter.
3. Run `scripts/eval.py` on Spider dev; document metrics (34.2→58.6% exec acc, 68.5→86.9% exec success).

## Code change (recommended)

Apply patch in `docs/patches/0001-Default-Space-demo-to-Qwen2.5-3B-document-portfolio-.patch` on `text-to-sql-grpo` `main` so Spaces default to Qwen when `SPACE_ID` is set (see `docs/PORTFOLIO_ALIGNMENT.md` in that patch).

Dev-only stub: `USE_STUB_GENERATOR=1`.
