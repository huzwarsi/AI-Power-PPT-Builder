"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@clerk/nextjs"

export default function CallbackPage() {
  const router = useRouter()
  const { isLoaded, isSignedIn } = useAuth()

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn) {
        // Redirect to dashboard or home after successful auth
        router.replace("/")
      } else {
        router.replace("/sign-in")
      }
    }
  }, [isLoaded, isSignedIn, router])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        <p className="text-muted-foreground text-sm">Redirecting...</p>
      </div>
    </div>
  )
}
