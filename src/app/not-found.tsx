import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl font-bold mb-4">404 - Not Found</h2>
      <p className="text-muted-foreground mb-8">Could not find the requested resource.</p>
      <Link href="/dashboard" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
        Return to Dashboard
      </Link>
    </div>
  )
}
