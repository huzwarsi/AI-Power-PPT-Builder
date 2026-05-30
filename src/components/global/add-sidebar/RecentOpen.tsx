import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Project } from '@/generated/prisma'
import { useSlideStore } from '@/store/useSlideStore'
import { JsonValue } from '@prisma/client/runtime/client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

type Props = {
    recentProjects: Project[]
}

const RecentOpen = ({ recentProjects }: Props) => {
    const router = useRouter()
    const { setSlides } = useSlideStore()

    const btnHandler = (ProjectId: string, slides: JsonValue) => {
        if (!ProjectId || slides) {

            toast.error('Project not Found', {
                description: 'Please try again',
            })
            return
        }
        setSlides(JSON.parse(JSON.stringify(slides)))

        router.push(`/presentation/${ProjectId}`)
    }


    return (
        <SidebarGroup>
            <SidebarGroupLabel>
                Recently Opened
            </SidebarGroupLabel>
            <SidebarMenu>

                {recentProjects.length === 0 ? (
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            tooltip="Test Project"
                            className='hover:bg-primary/5 text-xs w-full justify-start font-normal px-2'
                            onClick={() => btnHandler("dummy-id", {})}
                        >
                            <span className="truncate">Test Project</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ) : (
                    recentProjects.map((item) => (
                        <SidebarMenuItem key={item.id}>
                            <SidebarMenuButton
                                tooltip={item.title || 'Project'}
                                className='hover:bg-primary/5 text-xs w-full justify-start font-normal px-2'
                                onClick={() => btnHandler(item.id, item.slides)}
                            >
                                <span className="truncate">{item.title || "Untitled Project"}</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))
                )}

            </SidebarMenu>
        </SidebarGroup>
    )
}

export default RecentOpen
