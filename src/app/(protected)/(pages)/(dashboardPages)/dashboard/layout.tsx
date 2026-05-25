export const dynamic = 'force-dynamic'

import { onAuthenticateUser } from '@/actions/user'
import AppSidebar from '@/components/global/add-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = { children: React.ReactNode }

const Layout = async (props: Props) => {
    const auth = await onAuthenticateUser()

    if (!auth.user) redirect('/sign-in')

    // return( <div suppressHydrationWarning className="w-full min-h-screen">{props.children}</div>)

    return (
        <SidebarProvider >
            <AppSidebar>

            </AppSidebar>
        </SidebarProvider>
    )
}

export default Layout
