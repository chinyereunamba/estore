import CustomToken from "@/model/token";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Admin() {
  const session: CustomToken | null = await getServerSession();
  if (!session || !session?.user.is_admin) {
    redirect("/login");
  }
  return (
    <>
      {/* {session.user.email} */}
      <h2>Email: {session?.user.email}</h2>
    </>
  );
}
