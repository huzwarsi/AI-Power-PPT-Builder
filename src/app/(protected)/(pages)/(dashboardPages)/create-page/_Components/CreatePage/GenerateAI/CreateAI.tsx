import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { containerVariants, itemVariants } from '@/lib/constants'
import useCreativeAIStore from '@/store/useCreativeAiStore'
import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
    onBack: () => void
}

const CreateAI = ({ onBack }: Props) => {
    const router = useRouter()
    const { currentAiPrompt, setCurrentAiPrompt } = useCreativeAIStore()

    const handleBack = () => {
        onBack()
    }

    return (
        <motion.div
            className="space-y-6 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Button
                onClick={handleBack}
                variant="outline"
                className="mb-4"
            >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back
            </Button>
            <motion.div
                variants={itemVariants}
                className='text-center space-y-2'
            >
                <h1 className='text-4xl font-bold text-primary'>
                    Generate with <span className='text-vivid'>Creative AI</span>

                </h1>
                <p className='text-primary'>what would like to create today?</p>
            </motion.div>

            <motion.div
                className="bg-primary/10 p-4 rounded-xl"
                variants={itemVariants}
            >
                <div className="flex flex-col sm:flex-row justify-between gap-3 items-center rounded-xl">
                    <Input
                        value={currentAiPrompt || ''}
                        onChange={(e) => setCurrentAiPrompt(e.target.value)}
                        placeholder="Enter Prompt and add to the cards..."
                        className="text-base sm:text-xl border-0 focus-visible:ring-0 shadow-none p-0 bg-transparent flex-grow"
                        required
                    />
                </div>
            </motion.div>

        </motion.div>
    )
}

export default CreateAI
