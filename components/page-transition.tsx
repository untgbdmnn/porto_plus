import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Gretings from './gretings';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {

        setIsAnimating(true);

        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const path = {
        "/home": "Home",
        "/about": "About",
        "/contact": "Contact",
        "/portofolio": "Portofolio",
    }
    const pathname = usePathname() as keyof typeof path;
    const isHome = pathname === '/home';
    return (
        <div className='px-3 lg:px-5'>
            {children}
            <motion.div
                className='fixed inset-0 top-0 left-0 w-full h-screen origin-bottom bg-foreground z-[99999999]'
                initial={{ y: '100%' }}
                animate={isAnimating ? { y: '0%' } : { y: '100%' }}
                transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                {isHome ? <Gretings /> :
                    <div className='text-background uppercase text-3xl font-bold h-full w-full flex items-center justify-center'>{path[pathname]}</div>
                }
            </motion.div>
        </div>
    );
}