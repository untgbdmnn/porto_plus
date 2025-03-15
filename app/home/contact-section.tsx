"use client"
import AnimatedButton from '@/components/framer/button'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SendHorizonalIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ContactFooter } from '@/components/main-layout'

export default function ContactSection() {
    const t = useTranslations("Kontak")
    return (
        <div className='lg:py-10 py-16 w-full h-full'>
            <div className='flex items-center h-full w-full justify-center flex-col'>
                <AnimatedButton>Contact</AnimatedButton>
            </div>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center my-10 justify-center'>
                    <h1 className='text-2xl font-black text-center'>{t('title')}</h1>
                    <h2 className='text-sm font-semibold text-center px-10'>{t('subtitle')}</h2>
                </div>
            </div>
            <div className='w-full'>
                <div className='lg:grid lg:grid-cols-2 flex flex-col gap-x-5 gap-y-2 px-3'>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Input name='name' id='name' placeholder='Type your name...' />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Input name='email' id='email' placeholder='Type your email...' />
                    </div>
                    <div className='col-span-2'>
                        <label htmlFor="message">Message</label>
                        <Textarea name='message' id='message' placeholder='Type your message...' className='min-h-20' />
                    </div>
                    <motion.button whileHover={{ scale: 1 }} whileTap={{ rotate: 0.5, scale: 1 }} className={cn(buttonVariants(), 'col-span-2 cursor-pointer')}>
                        <SendHorizonalIcon />
                        {t('kirim')}
                    </motion.button>
                </div>
            </div>
            <ContactFooter />
        </div>
    )
}
