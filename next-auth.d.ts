import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    discordId?: string;
    username?: string;
    isAdmin?: boolean;
    isMember?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    discordId?: string;
    username?: string;
    isAdmin?: boolean;
    isMember?: boolean;
  }
}
