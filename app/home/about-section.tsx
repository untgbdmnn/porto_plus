import AnimatedButton from '@/components/framer/button'
import ScrollVelocity from '@/components/magicui/ScrollVelocity';
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation';
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";


export default function AboutSection() {
  const t = useTranslations("Hero-Section");
  const router = useRouter();
  return (
    <div className='lg:py-10 py-2 h-full w-full'>
      <div className='flex items-center h-full w-full justify-center flex-col'>
        <AnimatedButton>About</AnimatedButton>
        <div className='lg:px-20 px-2 h-full w-full relative'>

          <div className='flex flex-col items-center my-10 justify-center'>
            <h1 className='text-2xl font-black'>About Me</h1>
            <h2 className='text-sm font-semibold'>Bridging Technology and Creativity</h2>
          </div>

          <div className='lg:grid flex flex-col lg:grid-cols-3 gap-3.5'>
            <h1 className='col-span-2 text-base'>{t('about-desc')}</h1>
            <h1 className='text-base text-end'>{t('about-subdesc')}</h1>
          </div>

          <div className='flex items-center my-6 cursor-pointer underline hover:text-blue-600 duration-200 transition-colors ease-in-out' onClick={() => router.push('/about')}>
            <h1 className='text-sm font-semibold'>Find Out More</h1>
            <FiArrowUpRight className='size-5' />
          </div>

        </div>
      </div>
      <div className='w-full py-1.5 select-none cursor-pointer'>
        <ScrollVelocity
          texts={['Web Developer', 'Full-Stack Engineer']}
          velocity={100}
          className="lg:text-5xl text-3xl select-none cursor-pointer"
        />
      </div>
    </div>
  )
}
