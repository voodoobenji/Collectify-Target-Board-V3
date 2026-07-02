import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import { getBoard } from "@/lib/kv";
import BoardView from "@/components/BoardView";

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  if (!session?.isMember) {
    redirect("/login");
  }
  const board = await getBoard();
  return (
    <BoardView
      initialBoard={board}
      isAdmin={Boolean(session.isAdmin)}
      username={session.username ?? "member"}
    />
  );
}
