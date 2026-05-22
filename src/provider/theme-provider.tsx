
"use client"

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

// Suppress false-positive "Encountered a script tag" warning from next-themes in React 19
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const originalConsoleError = console.error
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag')) return
    originalConsoleError.apply(console, args)
  }
}


export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

