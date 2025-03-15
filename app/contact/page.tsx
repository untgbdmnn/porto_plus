"use client"

import { ContactFooter } from '@/components/main-layout'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { SendHorizonalIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ContactPage() {
  const t = useTranslations("Kontak")
  return (
    <div className='py-6'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-black'>{t('maribekerjasama')}</h1>
        <h1 className='text-sm text-center'>{t('descmaribekerjasama')}</h1>
      </div>

      <div className='mt-10 flex items-center flex-col justify-center'>
        <h1 className='text-xl text-center font-semibold'>The Analytical Engine has no pretensions to originate anything. It can do whatever we know how to order it to perform.</h1>
        <h1 className='text-sm'>~ Ada Lovelace</h1>
      </div>

      <div className='space-y-2 mt-6'>
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
          <Textarea name='message' id='message' placeholder='Type your message...' className='lg:min-h-20 min-h-40' />
        </div>
        <motion.button whileHover={{ scale: 1 }} whileTap={{ rotate: 0.5, scale: 1 }} className={cn(buttonVariants(), 'col-span-2 cursor-pointer w-full')}>
          <SendHorizonalIcon />
          {t('kirim')}
        </motion.button>
      </div>
      <div className='mb-3'>
        <ContactFooter />
      </div>
    </div>
  )
}
