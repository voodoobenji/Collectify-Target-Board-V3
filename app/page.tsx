import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getBoard } from "@/lib/kv";
import { VENDOR_MAP } from "@/lib/vendor-map";
import BoardView from "@/components/BoardView";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  if (!session?.isMember) {
    redirect("/login");
  }
  const board = await getBoard();
  const isAdmin = Boolean(session.isAdmin);

  // Vendor identities only ever leave the server for admins.
  const vendorMap: Record<string, string> = {};
  if (isAdmin) {
    for (const [storeId, info] of Object.entries(VENDOR_MAP)) {
      if (info.vendorNickname) vendorMap[storeId] = info.vendorNickname;
    }
  }

  return (
    <BoardView
      initialBoard={board}
      isAdmin={isAdmin}
      username={session.username ?? "member"}
      discordId={session.discordId ?? ""}
      vendorMap={vendorMap}
    />
  );
}
