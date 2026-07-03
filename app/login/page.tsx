import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import LoginButton from "@/components/LoginButton";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session?.isMember) {
    redirect("/");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-sm w-full text-center">
        <img
          src="/COLLECTIFY_LOGO.png"
          alt="Collectify"
          className="h-20 w-20 rounded-full border border-gold/60 mx-auto mb-5"
          style={{ boxShadow: "0 0 22px rgba(201,168,118,0.4)" }}
        />
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="font-brand uppercase text-4xl sm:text-5xl font-extrabold tracking-wide text-textprimary">
            Collectify
          </span>
          <span className="inline-flex h-2 w-2 rounded-full bg-live pulse" />
        </div>
        <span className="block font-mono text-xs uppercase tracking-[0.35em] text-gold mb-6">
          Target Guide
        </span>
        <p className="text-textmuted text-sm mb-8">
          Sign in with Discord to view today&apos;s guide. Access is limited to members of the server.
        </p>
        <LoginButton />
      </div>
    </main>
  );
}
