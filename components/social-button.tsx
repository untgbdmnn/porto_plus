import React from 'react'
import ButtonTooltip from './ui/button-tooltip'
import { FaGithub, FaGitlab } from 'react-icons/fa'
import { cn } from '@/lib/utils'
import { BsTwitterX } from "react-icons/bs";

interface SocialButtonProps {
    direction?: 'vertical' | 'horizontal'
    className?:string
}

export default function SocialButton({ direction = "vertical", className }: SocialButtonProps) {
    const directionClass = direction === 'vertical' ? 'flex flex-col' : 'flex flex-row'
    return (
        <div className={cn('gap-1', className, directionClass)}>
            <ButtonTooltip label='Github'>
                <FaGithub className='size-6 cursor-pointer' />
            </ButtonTooltip>
            <ButtonTooltip label='Gitlab'>
                <FaGitlab className='size-6 cursor-pointer' />
            </ButtonTooltip>
            <ButtonTooltip label='Gitlab'>
                <BsTwitterX className='size-6 cursor-pointer' />
            </ButtonTooltip>
        </div>
    )
}

