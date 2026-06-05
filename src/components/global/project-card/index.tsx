"use client";
import { itemVariants, themes } from '@/lib/constants';
import { useSlideStore } from '@/store/useSlideStore';
import { JsonValue } from '@prisma/client/runtime/client';
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import ThumbnailPreview from './Thumbnail-preview';
import { timeAgo } from '@/lib/utils';
import AlertDialogBox from '../AlertDialogBox';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { DeleteProject, recoverProject } from '@/actions/projects';

type Props = {
    projectId: string
    title: string
    createdAt: string
    themeName: string
    isDelete?: boolean
    slideData: JsonValue


}

const ProjectCard = ({
    projectId, title, createdAt, slideData, isDelete, themeName
}: Props) => {

    const [loading, setLoading] = useState(false)
    const [open, setOpen] = useState(false)

    const { setSlides } = useSlideStore()
    const router = useRouter()
    const handleNavigation = () => {
        setSlides(JSON.parse(JSON.stringify(slideData)))
        router.push(`/presentaion/${projectId}`)

    }

    const theme = themes.find((t) => t.name === themeName) || themes[0]

    const handleRecover = async () => {
        setLoading(true)
        if (!projectId) {
            setLoading(false)
            toast('Error', {
                description: 'Project not found.'
            })
            return

        }
        try {
            const res = await recoverProject(projectId)
            if (res.status !== 200) {
                toast.error('Oppse', {
                    description: 'Something went wrong'
                })
            }
            setOpen(false)
            router.refresh()
            toast.success('Success', {
                description: 'Project recovered successfully'
            })
        } catch (error) {
            console.log(error);

            toast.error('Oppse', {
                description: 'Something went wrong please contact support'
            })
        }
    }




    const handleDelete = async () => {
        setLoading(true);

        if (!projectId) {
            setLoading(false);
            toast.error('Error', {
                description: 'Project not found.'
            });
            return;
        }

        try {
            const res = await DeleteProject(projectId);

            if (res.status !== 200) {
                toast.error('Oops', {
                    description: 'Failed to delete the project'
                });
                return;
            }

            setOpen(false);
            router.refresh();

            toast.success('Success', {
                description: 'Project Deleted successfully'
            });

        } catch (error) {
            console.log(error);

            toast.error('Oops', {
                description: 'Something went wrong please contact support'
            });
        } finally {
            setLoading(false);
        }
    };

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

                {/* <ThumbnailPreview theme={theme} */}

                {/* // slide={slideData ? JSON.parse(JSON.stringify(slideData))?.[0] : undefined} */}
                {/* /> */}


            </div>
            <div className='w-full'>
                <div className='space-y-1'>
                    <h3 className='font-semibold text-base text-primary line-clamp-1'>

                        {title} This is the title that I want to see
                    </h3>
                    <div className='flex w-full justify-between items-center gap-2'>
                        <p
                            className='text-sm text-muted-foreground' suppressHydrationWarning  >
                            {timeAgo(createdAt)}
                        </p>
                        {isDelete ? (
                            <AlertDialogBox
                                className='bg-green-500 text-white dark:bg-green-600 hover:bg-green-600 dark:hover:bg-green-700'
                                description='This will recover yor project and restore your data.'
                                loading={loading}
                                open={open}
                                onClick={handleRecover}
                                handleOpen={() => setOpen(!open)}
                            >

                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="bg-background-80 dark:hover:bg-background-90"
                                    disabled={loading}
                                >
                                    Recover
                                </Button>


                            </AlertDialogBox>

                        ) : (
                            <AlertDialogBox
                                className='bg-red-500 text-white dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700'
                                description='This will recover yor project and restore your data.'
                                onClick={handleDelete}
                                loading={loading}
                                open={open}
                                handleOpen={() => setOpen(!open)}
                            >

                                <Button
                                    size="sm"
                                    variant="ghost"
                                    className="bg-background-80 dark:hover:bg-background-90"
                                    disabled={loading}
                                >
                                    Delete
                                </Button>


                            </AlertDialogBox>
                        )}
                    </div>
                </div>

            </div>
        </motion.div>
    )

}

export default ProjectCard