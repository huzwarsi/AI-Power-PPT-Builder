import { getRecentProjects } from '@/actions/projects'
import { onAuthenticateUser } from '@/actions/user'
import AppSidebar from '@/components/global/add-sidebar'
import UpperInfoBar from '@/components/global/upper-info-bar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { redirect } from 'next/navigation'
import React from 'react'

export const dynamic = 'force-dynamic'

type Props = {
    children: React.ReactNode
}

async function Layout({ children }: Props) {
    const recentProjects = await getRecentProjects()
    const checkUser = await onAuthenticateUser()

    if (!checkUser.user) {
        redirect('/sign-in')
    }

    return (
        <TooltipProvider delayDuration={0}>
            <SidebarProvider>
                <AppSidebar user={checkUser.user} recentProjects={recentProjects.data || []} />
                <SidebarInset>
                    <UpperInfoBar user={checkUser.user} />
                    <div className="p-4">
                        {children}
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </TooltipProvider>
    )
}


export default Layout