"use client";
import { itemVariants, themes } from '@/lib/constants';
import { useSlideStore } from '@/store/useSlideStore';
import { JsonValue } from '@prisma/client/runtime/client';
import { motion } from 'framer-motion'
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

    const theme = themes.find((theme) => theme.name === themeName || theme[0])

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

                <ThumbnailPreview theme={theme} />
            </div>

        </motion.div>
    )

}

export default ProjectCard