import AnimatedButton from '@/components/framer/button'
import React from 'react'
import { motion } from 'framer-motion'
import { FocusCards } from '@/components/ui/focus-cards';
import Portofolio from '@/assets/images/portofolio.png'
import Breezio from '@/assets/images/brezio.png';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';

export default function PortoSection() {
    const t = useTranslations("Portofolio")
    const cards = [
        {
            title: "Portofolio",
            desc: t('desc-portofolio'),
            src: Portofolio,
            url: "/portofolio/portofolio"
        },
        {
            title: "Breezio",
            desc: t('desc-breezio'),
            src: Breezio,
            url: "/portofolio/breezio"
        },
    ];

    return (
        <div className='lg:py-10 py-16 h-full w-full'>
            <div className='flex items-center h-full w-full justify-center flex-col'>
                <AnimatedButton>Portofolio</AnimatedButton>
            </div>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center my-10 justify-center'>
                    <h1 className='text-2xl font-black'>My Previous Projects</h1>
                    <h2 className='text-sm font-semibold'> A Compilation of My Accomplished Projects</h2>
                </div>
            </div>

            <div className='grid grid-cols-1 w-full gap-1'>
                <FocusCards cards={cards} />
            </div>

            <motion.div whileHover={{ scale: 0.9 }} whileTap={{ rotate: 20 }} className='text-base border border-foreground rounded-sm px-5 cursor-pointer hover:text-blue-500 transition-colors my-3 w-fit'>
                <Link href="/portofolio" className='flex items-center justify-center gap-1'>More Projects <MoveUpRight className='size-4' /></Link>
            </motion.div>

        </div>
    )
}