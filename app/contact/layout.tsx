import MainLayout from '@/components/main-layout'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Contact | Porto+",
    description: "Untung Budiman Personal Portofolio",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    )
}
