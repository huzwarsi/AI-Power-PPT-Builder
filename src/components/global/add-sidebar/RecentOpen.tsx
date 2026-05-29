import { Button } from '@/components/ui/button'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Project } from '@/generated/prisma'
import { JsonValue } from '@prisma/client/runtime/client'
import React from 'react'

type Props = {
    recentProjects: Project[]
}

const RecentOpen = ({ recentProjects }: Props) => {

    const btnHandler = (ProjectId: string, slides: JsonValue) => {

        console.log("Project Clicked:", ProjectId)
    }

    if (recentProjects.length === 0) return null

    return (
        <SidebarGroup>
            <SidebarGroupLabel>
                Recently Opened
            </SidebarGroupLabel>
            <SidebarMenu>

                {recentProjects.map((item) => (
                    <SidebarMenuItem key={item.id}>
                        <SidebarMenuButton
                            asChild
                            tooltip={item.title || 'Project'}
                            className='hover:bg-primary/5'
                        >
                            <Button
                                variant='ghost'
                                className='text-xs w-full justify-start font-normal px-2'
                                onClick={() => btnHandler(item.id, item.slides)}
                            >

                                <span className="truncate">{item.title || "Untitled Project"}</span>
                            </Button>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}

export default RecentOpen
