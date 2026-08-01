# Host on `abhishek-sutaria.me` (Namecheap + Vercel)

Your domain **abhishek-sutaria.me** is registered at Namecheap. This site is a static Vite app — host it on **Vercel** (free), then point Namecheap DNS at it.

> If the domain still has GitHub Pages A records (`185.199.x.x`), replace them with Vercel’s records below.

---

## 1. Create this GitHub repo (once)

On GitHub (while signed in as **abhishek-sutaria**):

1. [github.com/new](https://github.com/new)
2. Repository name: **`abhishek-sutaria.me`**
3. Public
4. **Do not** add README / .gitignore / license (empty repo)
5. Create repository

Then from your machine (with this project as the cwd):

```bash
git remote add origin https://github.com/abhishek-sutaria/abhishek-sutaria.me.git
git push -u origin main
```

---

## 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with **GitHub** (`abhishek-sutaria`).
2. **Add New… → Project** → import **`abhishek-sutaria/abhishek-sutaria.me`**.
3. Root Directory: **`.`** (leave default).
4. Framework Preset: **Vite** (`npm run build` → `dist`).
5. Click **Deploy**.

---

## 3. Attach the custom domain in Vercel

1. Project → **Settings → Domains**.
2. Add `abhishek-sutaria.me` and `www.abhishek-sutaria.me`.

---

## 4. Point Namecheap DNS at Vercel

1. Namecheap → **Domain List** → **Manage** next to `abhishek-sutaria.me`.
2. **Advanced DNS** tab.
3. Remove old GitHub Pages / parking records for `@` and `www`.
4. Set:

| Type  | Host | Value                  | TTL  |
| ----- | ---- | ---------------------- | ---- |
| **A**     | `@`  | `76.76.21.21`          | Automatic |
| **CNAME** | `www`| `cname.vercel-dns.com` | Automatic |

5. Save. Keep Domain Privacy ON.

DNS usually updates in minutes (sometimes up to ~30).

---

## 5. Verify

```bash
dig +short abhishek-sutaria.me A
# expect: 76.76.21.21
```

Open https://abhishek-sutaria.me — Vercel provisions HTTPS once DNS is correct.

## What you do not need

- Namecheap Shared / WordPress hosting
- Paid SSL from Namecheap
- Anything inside the ModelReady repo
