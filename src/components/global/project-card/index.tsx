"use client";
import { itemVariants, themes } from '@/lib/constants';
import { useSlideStore } from '@/store/useSlideStore';
import { JsonValue } from '@prisma/client/runtime/client';
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';
import React from 'react'
import ThumbnailPreview from './Thumbnail-preview';
import { timeAgo } from '@/lib/utils';

type Props = {
    projectId: string
    title: string
    createdAt: string
    src: string
    isDelete?: boolean
    slideData: JsonValue
    themeName: string


}

const ProjectCard = ({
    projectId, title, createdAt, slideData, src, isDelete, themeName
}: Props) => {

    const { setSlides } = useSlideStore()
    const router = useRouter()
    const handleNavigation = () => {
        setSlides(JSON.parse(JSON.stringify(slideData)))
        router.push(`/presentaion/${projectId}`)

    }

    const theme = themes.find((t) => t.name === themeName) || themes[0]

    return (

        <motion.div
            className={`group w-full flex flex-col gap-y-3 rounded-xl p-3 transition-colors ${!isDelete && 'hover:bg-muted/50'
                }`}
            variants={itemVariants}
        >

            <div
                className="relative aspect-[16/10] overflow-hidden rounded-lg cursor-pointer"
                onClick={handleNavigation}
            >

                <ThumbnailPreview theme={theme}
                // slide={slideData ? JSON.parse(JSON.stringify(slideData))?.[0] : undefined}
                />


            </div>
            <div className='w-full'>
                <div className='space-y-1'>
                    <h3 className='font-semibold text-base text-primary line-clamp-1'>

                        {title}
                    </h3>
                    <div className='flex w-full justify-between items-center gap-2'>
                        <p
                            className='text-sm text-muted-foreground' suppressHydrationWarning  >
                            {timeAgo(createdAt)}
                        </p>
                        {isDelete ? <AlertDialogBox: ''}
                    </div>
                </div>

            </div>
        </motion.div>
    )

}

export default ProjectCard