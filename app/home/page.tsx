import React from 'react'
import { useLocale } from 'next-intl';

export default function HomePage() {
  const locale = useLocale()
  return (
    <div className=''>HomePage - {locale}</div>
  )
}
