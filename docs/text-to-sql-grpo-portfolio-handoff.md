# Handoff: align Gradio demo with portfolio copy

For the **text-to-sql-grpo / RL agent** chat. Portfolio: https://abhishek-sutaria.me/projects

| What visitors expect | Current Space behavior |
|----------------------|-------------------------|
| Qwen2.5-3B post-trained demo + execution rewards | Hub adapter via `ADAPTER_ID` + `MODEL_ID=Qwen/Qwen2.5-3B-Instruct` |

GitHub: https://github.com/abhishek-sutaria/text-to-sql-grpo  
Hub: https://huggingface.co/abhisheksutaria/qwen2.5-3b-grpo-text-to-sql  
Space: https://abhisheksutaria-text-to-sql-grpo.hf.space

## Status (done)

1. GRPO QLoRA adapter uploaded to Hugging Face Hub.
2. Space secret `ADAPTER_ID` = `abhisheksutaria/qwen2.5-3b-grpo-text-to-sql`.
3. `scripts/eval.py` on Spider **dev** (n=1034) measured: Base **60.83%** / SFT **61.70%** / GRPO **62.67%** exec accuracy (exec success 88.78 / 81.33 / 82.40; mean reward 0.770 / 0.752 / 0.761). See [results/MEASURED_RESULTS.md](https://github.com/abhishek-sutaria/text-to-sql-grpo/blob/main/results/MEASURED_RESULTS.md).

## Portfolio card copy

`src/data/content.ts` cites the measured Spider table (GRPO 62.67% vs base 60.83%, +1.8 pp).

## Code note

Space defaults for Qwen when `SPACE_ID` is set are already on `text-to-sql-grpo` `main`. Historical patch under `docs/patches/` is superseded. Dev-only stub: `USE_STUB_GENERATOR=1`.
