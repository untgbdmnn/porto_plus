import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip'
import { cn } from '@/lib/utils'

type ButtonTooltipProps = {
    children: React.ReactNode
    label: string
    className?: string
}

export default function ButtonTooltip({ children, label, className }: ButtonTooltipProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className='w-fit'>{children}</TooltipTrigger>
                <TooltipContent>
                    <p className={cn('', className)}>{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

    )
}
