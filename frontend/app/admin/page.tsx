import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Admin() {
    const session = await getServerSession()
    
    if (session?.user || session) {
        return (
            <h1>You are Authenticated</h1>
        )
    }
  return redirect('/login')
}
