import MainLayout from '@/components/main-layout'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Home | Porto+",
    description: "Untung Budiman Personal Portofolio",
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    )
}
