"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { BiFoodMenu } from "react-icons/bi";
import { Button } from './ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import SwitchDarkMode from './SwitchTheme';
import { ThemeAnimationType } from '@/lib/theme';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const [isHovered, setIsHovered] = useState(false);

    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(theme === 'dark')

    const handleDarkModeChange = (isDark: boolean) => {
        setIsDarkMode(isDark)
    }

    return (
        <div className='min-h-screen h-full w-full relative'>
            {/* Header App */}
            <div className='px-3 py-1.5'>
                <div className='flex items-center justify-between'>
                    <Link
                        href="/home"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)} className='transition-all duration-600 ease-in-out icon-logo'>
                        {isHovered ? "Untung Budiman" : "Porto+"}
                    </Link>
                    <div className='flex flex-row items-center justify-between gap-2'>
                        <SwitchDarkMode
                            animationType={ThemeAnimationType.CIRCLE}
                            styleId="circle-animation"
                            isDarkMode={isDarkMode}
                            onDarkModeChange={handleDarkModeChange}
                        />
                        <Button size="icon" className='cursor-pointer'>
                            <BiFoodMenu className='size-4' />
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
