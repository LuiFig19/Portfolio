# GitHub setup (LuiFig19)

All public code should live under **github.com/LuiFig19**. Your local remote is already set to `LuiFig19/luifigueroa-site`.

## 1. Move the portfolio off DegenLui (pick one)

**Option A — Transfer (keeps stars, issues, Vercel link)**

1. Log into **DegenLui** → open **Portfolio** → **Settings** → **Danger zone** → **Transfer ownership**.
2. New owner: **LuiFig19** (accept the email invite on the LuiFig19 account).
3. Still in Settings → rename repo to **`luifigueroa-site`**.
4. In this folder: `git push -u origin main`

**Option B — New repo (fresh)**

1. Log into **LuiFig19** → **New repository** → name **`luifigueroa-site`**, public, **no** README/license.
2. In this folder: `git push -u origin main`

After either option, reconnect Vercel to **LuiFig19/luifigueroa-site** if deploys stop.

## 2. Profile README (shows on github.com/LuiFig19)

1. Create a **new public repo** named exactly **`LuiFig19`** (same as username).
2. Copy `profile-readme/README.md` into that repo as `README.md`.
3. Commit to `main`.

## 3. Profile fields (github.com/settings/profile)

| Field | Suggested value |
|-------|-----------------|
| **Name** | Luis Figueroa |
| **Bio** | Welder · Hardware & firmware (KiCad, ESP32) · Co-founded AstraRMM. Orlando, FL. |
| **URL** | https://luifigueroa.com |
| **Location** | Orlando, FL |

## 4. Pin repositories

Profile → **Customize your pins** → pin:

1. `luifigueroa-site` (this portfolio)
2. Any public AstraRMM / TaskChrono / firmware repos when ready

## 5. Repo metadata (luifigueroa-site)

On the repo **About** box (gear icon):

- **Description:** Personal site — IoT hardware portfolio, AstraRMM, resume. Orlando, FL.
- **Website:** https://luifigueroa.com
- **Topics:** `portfolio` `nextjs` `typescript` `iot` `esp32` `hardware` `embedded` `threejs`

## 6. Retire DegenLui

- Leave **DegenLui/Portfolio** empty after transfer (GitHub redirects old URLs for a while).
- Archive or delete the **DegenLui** account when you no longer need it.
