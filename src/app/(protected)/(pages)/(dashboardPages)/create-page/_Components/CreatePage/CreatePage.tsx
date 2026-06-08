'use client'
import { containerVariants, itemVariants } from '@/lib/constants'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    onSelectOption: (option: string) => void
}

const CreatePage = ({ onSelectOption }: Props) => {
    return (
        <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='space-y-8'
        >
            <motion.div variants={itemVariants}
                className='text-center space-y-2'
            >
                <h1 className='text-4xl font-bold text-primary'>
                    How would you like to get start
                </h1>
                <p className='text-primary'>Choose your preferred method to begin</p>


            </motion.div>
            <motion.div
                variants={containerVariants}
                className='grid gap-6 md:grid-cols-3'
            >

            </motion.div>

        </motion.div >
    )
}

export default CreatePage