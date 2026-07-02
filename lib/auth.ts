import type { AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

const ADMIN_IDS = (process.env.ADMIN_DISCORD_IDS ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const GUILD_ID = process.env.DISCORD_GUILD_ID ?? "";

interface DiscordGuild {
  id: string;
  name: string;
}

export const authOptions: AuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      authorization: "https://discord.com/api/oauth2/authorize?scope=identify+guilds",
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        const p = profile as { id: string; username?: string; global_name?: string };
        token.discordId = p.id;
        token.username = p.username ?? p.global_name ?? "member";
        token.isAdmin = ADMIN_IDS.includes(p.id);

        try {
          const res = await fetch("https://discord.com/api/users/@me/guilds", {
            headers: { Authorization: `Bearer ${account.access_token}` },
          });
          if (res.ok) {
            const guilds = (await res.json()) as DiscordGuild[];
            token.isMember = guilds.some((g) => g.id === GUILD_ID);
          } else {
            token.isMember = false;
          }
        } catch {
          token.isMember = false;
        }
      }
      return token;
    },
    async session({ session, token }) {
      session.discordId = token.discordId as string | undefined;
      session.username = token.username as string | undefined;
      session.isAdmin = Boolean(token.isAdmin);
      session.isMember = Boolean(token.isMember);
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
