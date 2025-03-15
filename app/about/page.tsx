"use client"

import { SpinningText } from '@/components/magicui/spinning-text'
import { Separator } from '@/components/ui/separator'
import { useTranslations } from 'next-intl'
import React from 'react'
import { AboutMe, Educate, Experience } from './content';
import { motion } from 'framer-motion'
import { ContactFooter } from '@/components/main-layout'

export default function AboutPage() {
  const t = useTranslations("About-Page");
  const [tabActive, setTabActive] = React.useState(0);

  const tabList = [
    { title: t('aboutMe'), content: <AboutMe /> },
    { title: t('educationex'), content: <Educate /> },
    { title: t('experienceex'), content: <Experience /> },
  ]

  const services = [
    { title: t('pengembanganweb') },
    { title: t('pengembanganbackend') },
    { title: t('pemeliharanweb') }
  ]

  return (
    <div className='py-6'>
      <div className='flex flex-col items-center justify-center relative select-none'>
        <h1 className='text-6xl font-black'>{t('slogan')}</h1>
      </div>

      <div className='relative py-10 flex items-center justify-end select-none'>
        <Separator className='bg-foreground' />
        <div className='bg-foreground size-26 rounded-full absolute  flex items-center justify-center lg:right-5'>
          <SpinningText className='absolute text-background uppercase' radius={4}>Untung budiman</SpinningText>
        </div>
      </div>

      <div className=''>
        <h1 className='text-xl font-black py-2'>Personal Overview</h1>
        <div className='flex flex-row items-center justify-start lg:gap-5 gap-2'>
          {tabList.map((item, index) => {
            return (
              <motion.button key={index} whileTap={{ rotate: 6, scale: 0.75 }} whileHover={{ scale: 0.9, boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)' }} onClick={() => setTabActive(index)} className={`px-3 py-1 rounded-sm cursor-pointer ${tabActive === index ? "bg-foreground text-background" : "outline outline-foreground"} `} >{item.title}</motion.button>
            )
          })}
        </div>
        <div className='py-5'>
          {tabList[tabActive].content}
        </div>
      </div>

      <div className='pb-10'>
        <h1 className='text-2xl font-black pb-8 px-2 flex justify-end items-center w-full'>{t('saya-dapat-membantu-anda')}</h1>
        <div className='lg:grid gap-4 lg:grid-cols-3 flex flex-col'>
          {services.map((item, index) => {
            return (
              <div key={index} className='lg:px-3 px-1 select-none'>
                <h1 className='text-sm font-bold capitalize flex items-center justify-between'>{index + 1} <span>my services</span></h1>
                <Separator className='bg-foreground' />
                <motion.div whileTap={{ scale: 0.75 }} className='p-5 cursor-pointer border mt-2 rounded-sm flex items-center justify-center'>
                  <h1 className='uppercase font-bold text-lg'>{item.title}</h1>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='mb-5'>
        <ContactFooter />
      </div>
    </div>
  )
}