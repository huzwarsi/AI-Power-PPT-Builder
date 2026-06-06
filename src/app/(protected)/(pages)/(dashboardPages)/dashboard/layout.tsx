export const dynamic = 'force-dynamic'

import { getRecentProjects } from '@/actions/projects'
import { onAuthenticateUser } from '@/actions/user'
import AppSidebar from '@/components/global/add-sidebar'
import UpperInfoBar from '@/components/global/upper-info-bar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { User } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = { user: User }

const Layout = async ({ children }: Props) => {

    const recentProjects = await getRecentProjects();
    const checkUser = await onAuthenticateUser()

    if (!checkUser.user) redirect('/sign-in')

    return (
        <TooltipProvider delayDuration={0}>
            <SidebarProvider>

                {/* Sidebar Component */}
                <AppSidebar
                    user={checkUser.user}
                    recentProjects={recentProjects.data || []}
                />
                <SidebarInset>
                    <UpperInfoBar user={checkUser.user} />
                    <div className='p-4'>{children}</div>
                </SidebarInset>

            </SidebarProvider>
        </TooltipProvider>
    )
}

export default Layout
