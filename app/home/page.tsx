"use client"

import { GlobeDemo } from '@/components/hero-globe';
import { ShinyButton } from '@/components/magicui/shiny-button';
import RotatingText from '@/components/ui/RotatingText';
import { useTranslations } from 'next-intl';
import React from 'react';

export default function HomePage() {
  const t = useTranslations("Hero-Section")
  return (
    <div className=''>
      <GlobeDemo>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-3xl text-center px-5 font-black select-none lg:text-5xl'>{t('hero-title')}</h1>
          <div className='flex lg:flex-row flex-col items-center justify-center gap-x-2 mt-5'>
            <h1 className='text-xl font-black'>Untung Budiman</h1>
            <RotatingText
              texts={['Web Developer', 'Frontend Developer', 'Backend Developer']}
              mainClassName="bg-foreground text-background w-45 px-2 rounded-sm font-black flex items-center lg:justify-start justify-center"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.030}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </div>
        </div>
      </GlobeDemo>
      <div></div>
    </div>
  );
}