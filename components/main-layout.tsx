"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { BiFoodMenu } from "react-icons/bi";
import { Button } from './ui/button';
import { useTheme } from 'next-themes';
import SwitchDarkMode from './switch-theme';
import { ThemeAnimationType } from '@/lib/theme';
import SwitchLang from './switch-lang';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from 'next/navigation';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');
    const [sheet, setSheet] = useState(false);

    const pathname = usePathname();

    const handleDarkModeChange = (isDark: boolean) => {
        setIsDarkMode(isDark);
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const menuItems = [
        {
            label: 'Home',
            href: '/home',
        },
        {
            label: 'About',
            href: '/about',
        },
        {
            label: 'Portofolio',
            href: '/portofolio',
        },
        {
            label: 'Contact',
            href: '/contact',
        }
    ]

    return (
        <div className='h-full w-full'>
            {/* Header App */}
            <div className='px-3 h-full py-1.5'>
                <div className='flex items-center h-full justify-between'>
                    <Link
                        href="/home"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)} className='transition-all duration-600 ease-in-out icon-logo'>
                        {isHovered ? "Untung Budiman" : "Porto+"}
                    </Link>
                    <div className='flex flex-row items-center justify-between gap-2'>
                        <div className={`flex items-center justify-between gap-2.5 ${isScrolled ? 'hidden' : ''}`}>
                            <SwitchLang />
                            <SwitchDarkMode
                                animationType={ThemeAnimationType.CIRCLE}
                                styleId="circle-animation"
                                isDarkMode={isDarkMode}
                                onDarkModeChange={handleDarkModeChange}
                            />
                        </div>
                        {/* MenuButton */}
                        {!sheet && (
                            <Button size="icon" className={`cursor-pointer transition-all duration-1000 ease-in-out ${isScrolled ? 'fixed top-5 right-5' : ''}`} onClick={() => setSheet(true)} >
                                <BiFoodMenu className='size-4' />
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            <div className='px-3 lg:px-5'>
                {children}
            </div>
            <div className='fixed w-full bottom-0 py-1 text-sm text-center'>
                &copy; 2025 - Untung Budiman | Porto+
            </div>
            <Sheet open={sheet} onOpenChange={() => setSheet(!sheet)}>
                <SheetContent className='w-3/4 lg:w-1/3'>
                    <div className='flex h-full items-center justify-between flex-col'>
                        <SheetHeader className='w-full flex flex-row-reverse items-center justify-between'>
                            <SheetClose onClick={() => setSheet(!sheet)} className='flex items-center justify-end'>
                                <div className=''>
                                    <AiOutlineClose className='dark:text-white text-black size-5' />
                                </div>
                            </SheetClose>
                            <SheetTitle className='text-lg'>Navigation</SheetTitle>
                        </SheetHeader>
                        <div className='w-full px-10'>
                            <div className='flex flex-col w-full gap-7'>
                                {menuItems.map((item, index) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link key={index} href={item.href} className={`${isActive ? "font-black border-l-2 border-black pl-5" : "hover:pl-3"} text-5xl py-2 transition-transform duration-500 ease-in-out`} >{item.label}</Link>
                                    )
                                })}
                            </div>
                        </div>
                        <div className='py-5'>
                            <div>
                                <h1 className='uppercase'>Social</h1>
                            </div>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}
