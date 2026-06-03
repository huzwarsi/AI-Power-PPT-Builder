"use client";
import { itemVariants } from '@/lib/constants';
import { useSlideStore } from '@/store/useSlideStore';
import { JsonValue } from '@prisma/client/runtime/client';
import motion from 'framer-motion'
import { useRouter } from 'next/navigation';
import React from 'react'
import ThumbnailPreview from './Thumbnail-preview';

type Props = {
    projectId: string
    title: string
    createdAt: string
    src: string
    isDelete?: boolean
    slideData: JsonValue


}

const ProjectCard = ({
    projectId, title, createdAt, slideData, src, isDelete
}: Props) => {

    const { setSlides } = useSlideStore()
    const router = useRouter()
    const handleNavigation = () => {
        setSlides(JSON.parse(JSON.stringify(slideData)))
        router.push(`/presentaion/${projectId}`)

    }

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

                <ThumbnailPreview />
            </div>

        </motion.div>
    )

}

export default ProjectCard