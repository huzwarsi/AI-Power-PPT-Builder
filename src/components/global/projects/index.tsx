import { Project } from '@/generated/prisma'
import React from 'react'
import motion from 'framer-motion'
import { containerVariants } from '@/lib/constants'
import ProjectCard from '../project-card'

type Props = {
    projects: Project[]
}
const Projects = ({ projects }: Props) => {
    return (

        <>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >


                {projects.map((project, id) => {
                    <ProjectCard
                        key={id}
                        projectId={project?.id}
                        title={project?.title}
                        createdAt={project?.isDeleted}
                        slideData={project?.slides}
                        src={
                            project.thumbnail || 'https://plus.unsplash.com/premium_photo-1729004379397-ece899804701?q=80&w=1267&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        }

                    />
                })}
            </motion.div>

        </>
    )
}


export default Projects