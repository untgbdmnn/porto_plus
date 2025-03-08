'use client'

import { useModeAnimation, ReactThemeSwitchAnimationProps } from '@/lib/theme'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { MoonStar, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export interface SwitchDarkModeProps extends ReactThemeSwitchAnimationProps {
    className?: string
    isDarkMode: boolean
    onDarkModeChange: (isDark: boolean) => void
}

const SwitchDarkMode: React.FC<SwitchDarkModeProps> = ({
    isDarkMode: externalDarkMode,
    onDarkModeChange,
    ...props
}) => {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();
    const { ref, toggleSwitchTheme } = useModeAnimation({
        ...props,
        isDarkMode: externalDarkMode,
        onDarkModeChange,
        duration: 1500,
        easing: 'ease-in-out',
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const isLight = theme === 'light';

    return (
        <Button
            ref={ref}
            type='button'
            size="icon"
            variant="outline"
            onClick={toggleSwitchTheme}
            className='cursor-pointer p-[8px]'
        >
            {isLight ? (
                <Sun className={cn('size-4 cursor-pointer')} />
            ) : (
                <MoonStar className={cn('size-4 cursor-pointer')} />
            )}
        </Button>
    );
};

export default SwitchDarkMode;