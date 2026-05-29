'use client'

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenuButton
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Project } from '@/generated/prisma'
import { User } from '@clerk/nextjs/server'
import React from 'react'
import NavMain from './nav-main'
import { data } from '@/lib/constants'
import RecentOpen from './RecentOpen'

const AppSidebar = ({ recentProjects, user, ...props }: { recentProjects: Project[] } & { user: User } & React.ComponentProps<typeof Sidebar>) => {
    return (
        <Sidebar
            collapsible="icon"
            className="max-w-[212px] !bg-[#121212]"
            {...props}
        >
            <SidebarHeader className="pt-6 px-3 pb-0">
                <SidebarMenuButton size="lg" className="data-[state=open]:text-sidebar-accent-foreground">
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                        <Avatar className="h-10 w-10 rounded-full">
                            <AvatarImage src="https://branition.com/assets/img/users/logos/3322-Wazl5BJ.webp" alt="vivid-logo" />
                            <AvatarFallback className="rounded-lg">VI</AvatarFallback>
                        </Avatar>
                    </div>
                    <span className='truncate text-primary text-3xl font-semibold'>Vivid</span>
                </SidebarMenuButton>
            </SidebarHeader>

            <SidebarContent >
                <NavMain items={data.NavMain} />
                <RecentOpen />

            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar
