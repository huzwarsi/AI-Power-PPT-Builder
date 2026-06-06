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
                    How would you like to get started
                </h1>

            </motion.div>

        </motion.div >
    )
}

export default CreatePage