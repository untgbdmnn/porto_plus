import { FocusCards } from '@/components/ui/focus-cards';
import { useTranslations } from 'next-intl'
import React from 'react'
import Portofolio from '@/assets/images/portofolio.png'
import Breezio from '@/assets/images/brezio.png';
import CVForm from '@/assets/images/cvform.png'
import { ContactFooter } from '@/components/main-layout';

export default function PortofolioPage() {
  const t = useTranslations("Portofolio");
  const cards = [
    {
      title: "Comming Soon",
    },
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
    {
      title: "CV Form",
      desc: t('desc-cvform'),
      src: CVForm,
      url: "/portofolio/cv-form"
    },
  ];
  return (
    <div className='py-6'>
      <div className='flex items-start justify-start lg:items-center lg:justify-center flex-col'>
        <h1 className='text-3xl text-start lg:text-center font-black text-foreground'>{t("portofolioyangsayabuat")}</h1>
        <h1 className='text-sm text-start lg:text-center'>{t("descportofolioyangsayabuat")}</h1>
        <p className='my-3 text-sm text-start lg:text-center px-0 lg:px-10'>{t('descportopage')}</p>
      </div>
      <div className='lg:px-5 px-0 mt-5 pb-10'>
        <FocusCards cards={cards} className='lg:grid lg:grid-cols-2 lg:gap-5 flex flex-col items-center justify-center gap-3' />
      </div>
      <div className='mb-5'>
        <ContactFooter />
      </div>
    </div>
  )
}
