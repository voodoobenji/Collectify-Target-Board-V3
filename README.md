# SoCal Target Board

A live, Discord-gated dashboard for daily target guides. Only members of your
Discord server can sign in and view it. You (and anyone you list as an admin)
can edit predictions and statuses inline — everyone else sees it update live.

## What you're deploying

- **Next.js** app, hosted free on **Vercel**
- **Discord OAuth** login — people sign in with Discord; the app checks that
  they're in your server before letting them see anything
- **Vercel KV** (free tier) stores the live board data

No database to manage, no server to maintain.

---

## 1. Create a Discord Application (for login)

1. Go to https://discord.com/developers/applications → **New Application**.
2. Name it anything (e.g. "Target Board Login").
3. In the sidebar, go to **OAuth2 → General**.
   - Copy the **Client ID** and **Client Secret** — you'll need these shortly.
4. Still under OAuth2, click **Add Redirect** and add (you'll fill in the real
   domain after you deploy — for now use a placeholder, you'll edit it in step 4 below):
   ```
   https://YOUR-DOMAIN.vercel.app/api/auth/callback/discord
   ```

## 2. Get your Discord Server (Guild) ID

1. In Discord, go to **User Settings → Advanced** and turn on **Developer Mode**.
2. Right-click your server's icon → **Copy Server ID**. This is `DISCORD_GUILD_ID`.
3. Right-click your own username anywhere → **Copy User ID**. This is your
   `ADMIN_DISCORD_IDS` value (add more, comma-separated, for other mods).

## 3. Push this code to GitHub

Create a new (private is fine) GitHub repo and push this folder to it. Vercel
deploys directly from GitHub.

```bash
cd socal-target-board
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

## 4. Deploy to Vercel

1. Go to https://vercel.com and sign in (GitHub login is easiest).
2. **Add New → Project**, pick the repo you just pushed.
3. Before clicking Deploy, open **Environment Variables** and add:
   - `DISCORD_CLIENT_ID`
   - `DISCORD_CLIENT_SECRET`
   - `DISCORD_GUILD_ID`
   - `ADMIN_DISCORD_IDS`
   - `NEXTAUTH_SECRET` — generate one locally with `openssl rand -base64 32`
     (or use any long random string)
   - `NEXTAUTH_URL` — set this to `https://YOUR-PROJECT-NAME.vercel.app`
     (Vercel shows you this URL before/after first deploy — you can add it
     after the first deploy and redeploy once you know the real URL)
4. Click **Deploy**.
5. Once deployed, go to your Vercel project → **Storage** tab → **Create
   Database → KV**. Attach it to this project — Vercel automatically adds the
   `KV_*` environment variables for you. Redeploy after attaching (Vercel
   usually prompts you to).
6. Go back to your Discord Application's **OAuth2** page and update the
   redirect URL to match your real Vercel domain:
   ```
   https://YOUR-PROJECT-NAME.vercel.app/api/auth/callback/discord
   ```

That's it — visit your Vercel URL, sign in with Discord, and you're in.

---

## Using it day to day

- **Everyone in your server**: sign in, see the live board grouped by region,
  filter/search, tap a store to expand its notes.
- **Admins**: toggle **Edit mode** at the top of the board. Each store becomes
  editable inline — set Chance (High/Medium/Low), Window, Reason, and Status
  (Pending/Hit/No Hit). Changes save instantly and appear for everyone within
  ~12 seconds (the page polls automatically — no refresh needed).
- **Start New Day**: carries forward yesterday's Chance/Window/Reason as a
  starting point for today (since most days look similar) and resets every
  store's status back to Pending. Archives the previous day's board so
  nothing is lost. Use this once each morning/evening before posting the new
  guide.

## Updating the store list

Stores live in `lib/stores.ts`. Edit that file, commit, and push — Vercel
redeploys automatically. Existing predictions for other stores aren't
affected.

## Local development

```bash
npm install
cp .env.example .env.local   # fill in the values
npm run dev
```

Note: Discord OAuth redirect URLs must match exactly, so for local dev you'll
want a second redirect entry in your Discord app pointing to
`http://localhost:3000/api/auth/callback/discord`, and `NEXTAUTH_URL=http://localhost:3000`
in `.env.local`.
