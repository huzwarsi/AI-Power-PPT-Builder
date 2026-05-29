import { SidebarGroup, SidebarGroupLabel } from '@/components/ui/sidebar'
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
        </SidebarGroup>
    )
}

export default RecentOpen