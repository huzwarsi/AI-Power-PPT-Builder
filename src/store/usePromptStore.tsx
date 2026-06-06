import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

// Page types
type Page = 'create' | 'creative-ai' | 'create-scratch'

// Store type
type PromptStore = {
    page: Page
    setPage: (page: Page) => void
}

// Zustand store
const usePromptStore = create<PromptStore>()(
    devtools(
        persist(
            (set) => ({
                page: 'create',

                setPage: (page: Page) => {
                    set({ page })
                },
            }),
            {
                name: 'prompts',
            }
        )
    )
)

export default usePromptStore