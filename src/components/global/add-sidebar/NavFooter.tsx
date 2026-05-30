"use client"

import React, { useState } from 'react'
import { UserButton, useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { User } from '@prisma/client'
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'

interface NavFooterProps {
    prismaUser: User
}

const NavFooter = ({ prismaUser }: NavFooterProps) => {
    const { isLoaded, isSignedIn, user } = useUser()
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleUpgrading = () => {
        setLoading(true)

    }

    if (!isLoaded || !isSignedIn) {
        return null
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <div className="flex flex-col gap-y-6 items-start group-data-[collapsible=icon]:hidden">

                    {!prismaUser?.subscription && (
                        <div className="flex flex-col items-start p-4 pb-3 gap-4 rounded-[10px] bg-muted">
                            <div className="flex flex-col items-start gap-1">
                                <p className="text-base font-bold">
                                    Get <span className="text-vivid">Creative AI</span>
                                </p>
                                <span className="text-sm text-muted-foreground">
                                    Unlock all features including AI and more
                                </span>
                            </div>

                            <div className="w-full bg-[linear-gradient(180deg,#F55C7A_0%,#F6BC66_100%)] p-[1px] rounded-full">
                                <Button
                                    className="w-full bg-secondary hover:bg-secondary/80 cursor-pointer text-foreground rounded-full font-bold border-0"
                                    variant="ghost"
                                    size="lg"
                                    onClick={handleUpgrading}
                                    disabled={loading}
                                >
                                    {loading ? 'Upgrading...' : 'Upgrade'}
                                </Button>
                            </div>

                        </div>
                    )}

                    {isSignedIn && (
                        <SidebarMenuButton
                            size={'lg'}
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"

                        >

                            <UserButton />
                            <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                                <span className="truncate font-semibold">{user?.fullName}</span>
                                <span className="truncate text-muted-foreground">
                                    {user?.emailAddresses[0]?.emailAddress}
                                </span>
                            </div>

                        </SidebarMenuButton>

                    )}


                </div>

            </SidebarMenuItem>
        </SidebarMenu>
    )
}

export default NavFooter
