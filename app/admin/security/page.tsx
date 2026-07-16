import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import SecurityDashboard from "@/components/SecurityDashboard";

export const dynamic = "force-dynamic";

export default async function SecurityPage() {
  const session = await getServerSession(authOptions);
  if (!session?.isMember) redirect("/login");
  if (!session?.isAdmin) redirect("/");
  return <SecurityDashboard />;
}
