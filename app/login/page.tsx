import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import LoginButton from "@/components/LoginButton";

export default async function LoginPage({ searchParams }: { searchParams: { error?: string } }) {
  const session = await getServerSession(authOptions);
  if (session?.isMember) {
    redirect("/");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      {/* Same card as the Shipment Board's sign-in page. */}
      <div className="max-w-sm w-full bg-panel border border-line rounded-2xl p-8 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/COLLECTIFY_LOGO.png" alt="Collectify" width={72} height={72} className="mx-auto mb-3 h-[72px] w-[72px] rounded-full" />
        <div className="font-brand font-extrabold tracking-widest text-gold text-sm">COLLECTIFY</div>
        <h1 className="font-serif text-2xl mt-2 text-textprimary">Collectify Target Guide</h1>
        <p className="text-textmuted text-sm mt-3 mb-6">
          Members only. Sign in with the Discord account that&apos;s in the Collectify server.
        </p>
        {searchParams.error && (
          <p className="mb-4 text-sm text-left border border-medium/60 rounded-lg px-3 py-2 text-textmuted">
            <span className="text-medium font-semibold">Sign-in didn&apos;t finish ({searchParams.error}).</span> Try again. If you
            opened this inside Discord, open it in Safari or Chrome instead.
          </p>
        )}
        <LoginButton />
        <p className="font-mono uppercase tracking-[0.08em] text-textmuted/70 text-[9px] mt-4">Access is members-only · no public view</p>
      </div>
    </main>
  );
}
