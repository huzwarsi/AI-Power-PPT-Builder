export const dynamic = 'force-dynamic'

import { onAuthenticateUser } from '@/actions/user'
import AppSidebar from '@/components/global/add-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = { children: React.ReactNode }

const Layout = async (props: Props) => {
    const auth = await onAuthenticateUser()

    if (!auth.user) redirect('/sign-in')

    return (
        <TooltipProvider delayDuration={0}>
            <SidebarProvider>
                <AppSidebar />

                <main className="flex-1 w-full min-h-screen">
                    {props.children}
                </main>
            </SidebarProvider>
        </TooltipProvider>
    )
}

export default Layout