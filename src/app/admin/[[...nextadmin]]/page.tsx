import { auth } from '@clerk/nextjs/server'
import dynamic from "next/dynamic";

const AdminApp = dynamic(() => import("@/app/components/AdminApp"), {
  ssr: false,
});

export default async function AdminPage() {
  const { userId, redirectToSignIn } = await auth()
  
  if (!userId) {
    return redirectToSignIn()
  }

  return <AdminApp />
}