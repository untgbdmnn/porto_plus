"use client"

import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import IDFlag from '@/assets/icons/indonesia-flag.png'
import ENFlag from '@/assets/icons/united-states.png'
import { useLocale } from 'next-intl'
import Image from 'next/image'
import { setUserLocale } from '@/i18n/locale'

export default function SwitchLang() {
    const locale = useLocale()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className='p-[6px] px-3 uppercase'>
                    <Image src={locale === 'en' ? ENFlag : IDFlag} alt={locale} className='size-4'/>
                    {locale}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setUserLocale('en')}>
                    EN
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setUserLocale('id')}>
                    ID
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
