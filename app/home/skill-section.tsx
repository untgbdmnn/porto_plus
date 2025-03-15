import AnimatedButton from '@/components/framer/button'
import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaBootstrap, FaCss3Alt, FaLaravel, FaPhp, FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoPostgresql, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { motion } from 'framer-motion';


export default function SkillSection() {
    return (
        <div className='lg:py-10 py-16 h-full w-full'>
            <div className='flex items-center h-full w-full justify-center flex-col'>
                <AnimatedButton>Skills</AnimatedButton>
                <div className='px-2 h-full w-full relative'>

                    <div className='flex flex-col items-center my-10 justify-center'>
                        <h1 className='text-2xl font-black text-center lg:text-start'>Skill Set: Full-Stack Developer</h1>
                        <h2 className='text-sm font-semibold text-center lg:text-start'>Combining Creativity and Technology for Optimal Results</h2>
                    </div>

                    <div className='w-full h-full relative'>
                        <div className='h-full w-full flex items-center justify-center min-h-36'>

                            <div className='flex items-center justify-center gap-5 flex-wrap'>

                                <motion.div drag
                                    dragDirectionLock
                                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                    dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                                    dragElastic={0.5} className='border bg-background flex items-center justify-center gap-1.5 p-2 rounded-sm px-4 text-xl font-black cursor-pointer hover:bg-[#E34F26] hover:text-background transition-colors duration-200 ease-in-out dark:hover:text-white'>
                                    <AiFillHtml5 className='size-7' />HTML
                                </motion.div>
                                <motion.div drag
                                    dragDirectionLock
                                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                    dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                                    dragElastic={0.5} className='border bg-background flex items-center justify-center gap-1.5 p-2 rounded-sm px-4 text-xl font-black cursor-pointer hover:bg-[#1572B6] hover:text-background transition-colors duration-200 ease-in-out dark:hover:text-white'>
                                    <FaCss3Alt className='size-7' />CSS
                                </motion.div>
                                <motion.div drag
                                    dragDirectionLock
                                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                    dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                                    dragElastic={0.5} className='border bg-background flex items-center justify-center gap-1.5 p-2 rounded-sm px-4 text-xl font-black cursor-pointer hover:bg-[#F7DF1E] hover:text-background transition-colors duration-200 ease-in-out dark:hover:text-white'>
                                    <BiLogoJavascript className='size-7' />Javascript
                                </motion.div>
                                <motion.div drag
                                    dragDirectionLock
                                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                    dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                                    dragElastic={0.5} className='border bg-background flex items-center justify-center gap-1.5 p-2 rounded-sm px-4 text-xl font-black cursor-pointer hover:bg-[#3178C6] hover:text-background transition-colors duration-200 ease-in-out dark:hover:text-white'>
                                    <BiLogoTypescript className='size-7' />Typescript
                                </motion.div>
                                <motion.div drag
                                    dragDirectionLock
                                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                    dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                                    dragElastic={0.5} className='border bg-background flex items-center justify-center gap-1.5 p-2 rounded-sm px-4 text-xl font-black cursor-pointer hover:bg-[#777BB4] hover:text-background transition-colors duration-200 ease-in-out dark:hover:text-white'>
                                    <FaPhp className='size-7' />PHP
                                </motion.div>
                                <motion.div drag
                                    dragDirectionLock
                                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                    dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                                    dragElastic={0.5} className='border bg-background flex items-center justify-center gap-1.5 p-2 rounded-sm px-4 text-xl font-black cursor-pointer hover:bg-[#7952B3] hover:text-background transition-colors duration-200 ease-in-out dark:hover:text-white'>
                                    <FaBootstrap className='size-7' />Bootstrap
                                </motion.div>
                                <motion.div drag
                                    dragDirectionLock
                                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                    dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                                    dragElastic={0.5} className='border bg-background flex items-center justify-center gap-1.5 p-2 rounded-sm px-4 text-xl font-black cursor-pointer hover:bg-[#06B6D4] hover:text-background transition-colors duration-200 ease-in-out dark:hover:text-white'>
                                    <BiLogoTailwindCss className='size-7' />Tailwind
                                </motion.div>
                                <motion.div drag
                                    dragDirectionLock
                                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                    dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                                    dragElastic={0.5} className='border bg-background flex items-center justify-center gap-1.5 p-2 rounded-sm px-4 text-xl font-black cursor-pointer hover:bg-[#61DAFB] hover:text-background transition-colors duration-200 ease-in-out dark:hover:text-white'>
                                    <FaReact className='size-7' />React
                                </motion.div>
                                <motion.div drag
                                    dragDirectionLock
                                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                    dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                                    dragElastic={0.5} className='border bg-background flex items-center justify-center gap-1.5 p-2 rounded-sm px-4 text-xl font-black cursor-pointer hover:bg-foreground hover:text-background transition-colors duration-200 ease-in-out '>
                                    <RiNextjsFill className='size-7' />NextJs
                                </motion.div>
                                <motion.div drag
                                    dragDirectionLock
                                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                    dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                                    dragElastic={0.5} className='border bg-background flex items-center justify-center gap-1.5 p-2 rounded-sm px-4 text-xl font-black cursor-pointer hover:bg-[#FF2D20] hover:text-background transition-colors duration-200 ease-in-out dark:hover:text-white'>
                                    <FaLaravel className='size-7' />Laravel
                                </motion.div>
                                <motion.div drag
                                    dragDirectionLock
                                    dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                                    dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
                                    dragElastic={0.5} className='border bg-background flex items-center justify-center gap-1.5 p-2 rounded-sm px-4 text-xl font-black cursor-pointer hover:bg-[#4169E1] hover:text-background transition-colors duration-200 ease-in-out dark:hover:text-white'>
                                    <BiLogoPostgresql className='size-7' />PostgreSQL
                                </motion.div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
