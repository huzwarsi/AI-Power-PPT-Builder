import React, { Suspense } from 'react'
import CreatePageSkeleton from './_Components/CreatePage/CreatePageSkeleton'
import RenderPage from './_Components/RenderPage'

type Props = {}

const page = (props: Props) => {
    return (
        <main className='w-full h-full pt-6'>
            <Suspense fallback={<CreatePageSkeleton />}></Suspense>
            <RenderPage />
        </main>
    )
}

export default page