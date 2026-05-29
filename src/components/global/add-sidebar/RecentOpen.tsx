import { Button } from '@/components/ui/button'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Project } from '@/generated/prisma'
import React from 'react'

type Props = {
    recentProjects: Project[]
}

const RecentOpen = ({ recentProjects }: Props) => {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>
                Recently Opened
            </SidebarGroupLabel>
            <SidebarMenu>
                {recentProjects.length > 0 ? < SidebarMenuItem key={'sad'}>
                    <SidebarMenuButton
                        asChild
                        tooltip={'TESTING'}
                        className='hover:bg-primary/5'
                    >
                        <Button
                            variant={'Link'}

                            className='text-xs items-center justify-start'
                        >
                            <span>Testing</span>
                        </Button>

                    </SidebarMenuButton>
                </SidebarMenuItem> : "No Projects"}
            </SidebarMenu>
        </SidebarGroup >
    )
}

export default RecentOpen