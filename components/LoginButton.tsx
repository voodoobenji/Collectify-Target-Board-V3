"use client";

import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button
      onClick={() => signIn("discord", { callbackUrl: "/" })}
      className="w-full bg-[#5865F2] hover:bg-[#4752C4] transition-colors text-white font-medium py-3 rounded-lg"
    >
      Sign in with Discord
    </button>
  );
}
