'use client'
import { containerVariants, CreatePageCard, itemVariants } from '@/lib/constants'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import RecentPrompts from './GenerateAI/RecentPrompts'

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
            <motion.div
                variants={itemVariants}
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
                {CreatePageCard.map((option) => (
                    <motion.div
                        key={option.type}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            rotate: 1,
                            transition: { duration: 0.1 },
                        }}
                        className="rounded-xl transition-all duration-300 ease-in-out"
                        style={{
                            padding: '2px',
                            background: option.highlight
                                ? 'linear-gradient(135deg, #ff7b54 0%, #ff5252 100%)'
                                : 'transparent',
                            border: option.highlight
                                ? 'none'
                                : '1px solid hsl(var(--border))',
                        }}
                    >
                        <div
                            className="w-full h-full p-4 flex flex-col gap-y-6 items-start rounded-[10px]"
                            style={{
                                background: 'hsl(var(--background))',
                            }}
                        >
                            <div className="flex flex-col items-start w-full gap-y-3">
                                <p className="text-primary text-lg font-semibold">
                                    {option.title}
                                </p>

                                <p
                                    className="text-4xl font-bold"
                                    style={
                                        option.highlight
                                            ? {
                                                background:
                                                    'linear-gradient(135deg, #ff7b54 0%, #ff5252 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                                color: 'transparent',
                                            }
                                            : { color: 'hsl(var(--primary))' }
                                    }
                                >
                                    {option.highlightedText}
                                </p>

                                <p className="text-primary text-sm font-normal opacity-70">
                                    {option.description}
                                </p>
                            </div>

                            <motion.div
                                className="self-end"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    variant={option.highlight ? 'default' : 'outline'}
                                    className="w-fit rounded-xl font-bold"
                                    size={'sm'}
                                    onClick={() => onSelectOption(option.type)}
                                >
                                    {option.highlight ? 'Generate' : 'Continue'}
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            <RecentPrompts />
        </motion.div>
    )
}

export default CreatePage