import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
    SidebarMenuButton
} from '@/components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar' // 1. Logo ke liye import kiya
import { Project } from '@/generated/prisma'
import { User } from '@clerk/nextjs/server'
import React from 'react'

const AppSidebar = ({ recentProjects, user, ...props }: { recentProjects: Project[] } & { user: User } & React.ComponentProps<typeof Sidebar>) => {
    return (
        <Sidebar
            collapsible="icon"
            className="max-w-[212px] !bg-[#121212]"
            {...props}
        >
            {/* 2. HEADER SECTION (Logo Yahan hai) */}
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

            {/* 3. CONTENT SECTION (Links ke liye - Header se bahar) */}
            <SidebarContent>
                <SidebarGroup>
                    {/* Aapke baaki menu links yahan aayenge */}
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar
