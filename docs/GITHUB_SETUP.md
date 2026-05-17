# GitHub profile setup (LuiFig19)

Your resume and site link to **github.com/LuiFig19**, but code currently lives on **DegenLui/Portfolio**. Align them once so reviewers see work at the handle you advertise.

## 1. Profile README (shows on github.com/LuiFig19)

1. On GitHub, create a **new public repo** named exactly `LuiFig19` (same as your username).
2. Copy `profile-readme/README.md` from this project into that repo as `README.md`.
3. Commit to `main`.

## 2. Move the portfolio repo to LuiFig19

**Option A — Transfer (easiest)**

1. GitHub → **DegenLui/Portfolio** → Settings → Danger zone → **Transfer ownership**.
2. New owner: `LuiFig19`.
3. Rename repo to `luifigueroa-site` (Settings → General → Repository name).
4. Locally: `git remote set-url origin https://github.com/LuiFig19/luifigueroa-site.git`

**Option B — Fresh push**

1. Create **LuiFig19/luifigueroa-site** (empty, no README).
2. From this folder: `git remote add lui https://github.com/LuiFig19/luifigueroa-site.git`
3. `git push lui main`

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

## 6. Optional cleanup

- Archive or make private old test repos on **DegenLui** if you retire that account.
- Point Vercel deploy to **LuiFig19/luifigueroa-site** after transfer.
