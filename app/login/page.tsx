"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-sm w-full text-center">
        <img
          src="/COLLECTIFY_LOGO.png"
          alt="Collectify"
          className="h-20 w-20 rounded-full border border-gold/60 mx-auto mb-6"
          style={{ boxShadow: "0 0 20px rgba(201,168,118,0.35)" }}
        />
        <div className="inline-flex h-2 w-2 rounded-full bg-live pulse mb-4" />
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold mb-2 text-textprimary">
          Collectify Target Guide
        </h1>
        <p className="text-textmuted text-sm mb-8">
          Sign in with Discord to view today&apos;s guide. Access is limited to members of the server.
        </p>
        <button
          onClick={() => signIn("discord", { callbackUrl: "/" })}
          className="w-full bg-[#5865F2] hover:bg-[#4752C4] transition-colors text-white font-medium py-3 rounded-lg"
        >
          Sign in with Discord
        </button>
      </div>
    </main>
  );
}
