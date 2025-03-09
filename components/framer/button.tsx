import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedButtonProps {
    className?: string
    children: React.ReactNode
}

export default function AnimatedButton({ children, className }: AnimatedButtonProps) {
    return (
        <motion.button whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} drag dragConstraints={{ top: -5, right: 5, bottom: 10, left: -10 }} className={cn('bg-foreground/15 font-bold tracking-widest px-6 py-1 rounded-sm uppercase text-sm cursor-pointer backdrop-blur-lg', className)} >{children}</motion.button>
    )
}
