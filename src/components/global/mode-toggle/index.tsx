'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Switch } from '@/components/ui/switch'
import { Moon, Sun } from 'lucide-react'

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="h-6 w-11 rounded-full bg-muted animate-pulse" />
    }

    const isDark = resolvedTheme === 'dark'

    return (
        <div className="flex items-center gap-2">
            <Sun className="h-4 w-4 text-muted-foreground" />
            <Switch
                checked={isDark}
                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                aria-label="Toggle dark mode"
            />
            <Moon className="h-4 w-4 text-muted-foreground" />
        </div>
    )
}

export default ThemeSwitcher
