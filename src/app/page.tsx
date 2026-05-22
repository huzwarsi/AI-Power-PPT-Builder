"use client" // 👈 Sabse upar yeh directive lazmi lagayein

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  // Wait until mounted on the client side
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          style={{ width: "auto", height: "auto" }} // 👈 Dono ko auto kar dein
        />


        {/* Aapka baki jo bhi UI/Content hai wo yahan niche aayega */}
        <h1 className="text-2xl font-bold">Welcome to Vivid Webprodigies</h1>

      </main>
    </div>
  )
}
