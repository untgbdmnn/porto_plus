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
import { AiOutlineClose, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion'
import PageTransition from './page-transition';
import ClickSpark from './ui/ClickSpark';
import { useTranslations } from 'next-intl';
import { MdOutlineLocationOn } from "react-icons/md";
import SocialButton from './social-button';

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

    return (
        <ClickSpark sparkColor={theme === 'dark' ? 'white' : 'black'}
            sparkSize={15}
            sparkRadius={35}
            sparkCount={8}
            extraScale={0.7}
            duration={400}>
            <AnimatePresence mode='wait'>
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
                                    <Button size="icon" className={`cursor-pointer transition-all z-[99] duration-1000 ease-in-out ${isScrolled ? 'fixed top-5 right-5' : ''}`} onClick={() => setSheet(true)} >
                                        <BiFoodMenu className='size-4' />
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                    <PageTransition>
                        {children}
                    </PageTransition>
                    <div className='fixed bg-background w-full bottom-0 py-1 text-sm text-center z-30'>
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
            </AnimatePresence >
        </ClickSpark>
    )
}


export function ContactFooter() {
    const t = useTranslations("Kontak")
    return (
        <div className='w-full h-full bg-foreground text-background rounded-sm mt-5'>
            <div className='flex flex-row items-center justify-between py-2 px-3'>
                <div className=''>
                    <div className=''>
                        <h1 className='text-xl font-black'>{t('hubungisaya')}</h1>
                        <h1 className='text-base font-semibold'>Untung Budiman</h1>
                    </div>
                    <div className=''>
                        <h1 className='flex flex-row items-center justify-start gap-1.5 text-sm'><AiOutlineMail className='hidden lg:block' /> untungbudiman.dev@gmail.com</h1>
                        <h1 className='flex flex-row items-center justify-start gap-1.5 text-sm'><AiOutlinePhone className='hidden lg:block' /> +62 85184808340</h1>
                        <h1 className='flex flex-row items-center justify-start gap-1.5 text-sm'><MdOutlineLocationOn className='hidden lg:block' /> Yogyakarta, Indonesia</h1>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-end'>
                    <h1 className='text-base font-bold'>Navigation</h1>
                    <div className='flex flex-col items-center justify-center'>
                        {menuItems.map((item, index) => {
                            return (
                                <Link key={index} href={item.href}>{item.label}</Link>
                            )
                        })}
                    </div>
                </div>
                <div className='flex items-center justify-between flex-col gap-1 h-full'>
                    <h1 className='text-sm font-bold'>Social</h1>
                    <SocialButton className='gap-2' />
                </div>
            </div>
        </div>
    )
}