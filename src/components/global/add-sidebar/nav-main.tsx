'use client'

import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

type Props = {}

const NavMain = ({ items }: {
    items: {
        title: string,
        url: string,
        icon: React.FC<React.SVGProps<SVGSVGElement>>,
        isActive?: boolean
        items?: {
            title: string,
            url: string
        }[]
    }[]
}) => {

    const pathname = usePathname()

    return (
        <SidebarGroup className='p-0'>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuButton
                        key={item.url}
                        asChild
                        tooltip={item.title}
                        className={`
                        hover:bg-muted/60 transition-colors
                        ${pathname.includes(item.url) ? 'bg-muted font-bold' : ''}
                    `}
                    >
                        <Link
                            href={item.url}
                            className="flex items-center gap-2 text-lg w-full"
                        >
                            <item.icon className="text-lg" />
                            <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}

export default NavMain