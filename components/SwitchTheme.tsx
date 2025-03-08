'use client'

import { useModeAnimation, ReactThemeSwitchAnimationProps } from '@/lib/theme'
import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export interface SwitchDarkModeProps extends ReactThemeSwitchAnimationProps {
    className?: string
    isDarkMode: boolean
    onDarkModeChange: (isDark: boolean) => void
    styleIcon?: string
}

const SwitchDarkMode: React.FC<SwitchDarkModeProps> = ({
    styleIcon = '',
    isDarkMode: externalDarkMode,
    onDarkModeChange,
    ...props
}) => {
    const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
        ...props,
        isDarkMode: externalDarkMode,
        onDarkModeChange,
        duration: 1500,
        easing: 'ease-in-out',
    })

    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <Button ref={ref} type='button' size="icon" variant="outline" onClick={toggleSwitchTheme} className='cursor-pointer'>
            {isLight ? <Sun className={cn('size-4 cursor-pointer', styleIcon)} /> : <MoonStar className={cn('size-4 cursor-pointer', styleIcon)} />}
        </Button>
    )
}

export default SwitchDarkMode