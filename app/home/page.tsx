"use client"

import React, { useState, useEffect } from 'react';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // 4 detik

    return () => clearTimeout(timer); // Membersihkan timer jika komponen di-unmount sebelum waktu habis
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div>Halo (Indonesia)</div>
        <div>Hello (English)</div>
        <div>Bonjour (French)</div>
        <div>Hola (Spanish)</div>
        <div>Ciao (Italian)</div>
        <div>こんにちは (Japanese)</div>
        <div>你好 (Chinese)</div>
        <div>안녕하세요 (Korean)</div>
      </div>
    );
  }

  return (
    <div className=''>
      <div>sadas</div>
    </div>
  );
}