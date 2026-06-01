import { SidebarTrigger } from '@/components/ui/sidebar'
import { User } from '@clerk/nextjs/server'
import React from 'react'
import { Separator } from '@/components/ui/separator'
import ThemeSwitcher from '../mode-toggle'
import SearchBar from './upper-info-SearchBar'
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'
import NewProjectButton from './NewProjectButton'

type Props = {
    user: User
    children: React.ReactNode
}
const UpperInfoBar = ({ user }: Props) => {
    return (
        <header className="sticky top-0 z-[10] 
        flex shrink-0 flex-wrap items-center gap-2
         border-b bg-background p-4 justify-between">

            <SidebarTrigger className='ml-1' />
            <Separator
                className='mr-2 h-4'
                orientation="vertical"
            />
            <div className='w-full max-w-[95%] flex items-center
             justify-between gap-4 flex-wrap'>

                <SearchBar />
                <ThemeSwitcher />
                <div className='flex flex-wrap gap-4 items-center justify-end' >
                    <Button className='bg-primary-80 rounded-lg 
                hover:bg-background-80 text-primary font-semibold cursor-not-allowed
                ' >
                        <Upload />
                        Import
                    </Button>

                    <NewProjectButton user={user} />
                </div>
            </div>

        </header>
    )
}


export default UpperInfoBar 