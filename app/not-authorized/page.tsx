import Link from "next/link";

export default function NotAuthorizedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-sm w-full text-center">
        <div className="inline-flex h-2 w-2 rounded-full bg-high mb-6" />
        <h1 className="font-display uppercase tracking-wide text-2xl font-semibold mb-2">
          Not in the server
        </h1>
        <p className="text-textmuted text-sm mb-8">
          This board is only visible to members of our Discord. Join the server, then sign in again.
        </p>
        <Link
          href="/login"
          className="inline-block bg-panel2 hover:bg-line transition-colors text-textprimary font-medium py-3 px-6 rounded-lg border border-line"
        >
          Try again
        </Link>
      </div>
    </main>
  );
}
