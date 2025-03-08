"use client"
import { useState, useEffect } from 'react';

const translations: { [key: number]: string } = {
    1: 'Hello', // English
    2: 'Hola', // Spanish
    3: 'Ciao', // Italian
    4: 'Bonjour', // French
    5: 'Hallo', // German
    6: 'こんにちは', // Japanese (Konnichiwa)
    7: '안녕하세요', // Korean (Annyeonghaseyo)
    8: '你好', // Chinese (Nǐ hǎo)
    9: 'Привет', // Russian (Privet)
    10: 'مرحبا', // Arabic (Marhaba)
    11: 'Halo', // Indonesian
};

export default function Gretings() {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => (prevCount < 10 ? prevCount + 1 : 1));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='text-background w-full h-full flex items-center justify-center text-3xl font-bold'>
            {translations[count] || 'Halo'}
        </div>
    );
}