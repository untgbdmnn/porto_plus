import React from 'react'

export default function PageTransition({ children }: { children: React.ReactNode }) {
    return (
        <div className='px-3 lg:px-5'>
            {children}
        </div>
    )
}
