"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("discord", { callbackUrl: "/" })}
      className="w-full py-3 rounded-xl bg-[#5865F2] text-white font-semibold hover:opacity-90 transition"
    >
      Sign in with Discord
    </button>
  );
}
