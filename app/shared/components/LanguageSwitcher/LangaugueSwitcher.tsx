'use client';
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Image from 'next/image';
import styles from './LanguageSwitcher.module.scss';

export default function LanguageSwitcher() {
  const [selectedLang, setSelectedLang] = useState('en');

  useEffect(() => {
    const currentLang = Cookies.get('NEXT_LOCALE') || 'en';
    setSelectedLang(currentLang);
  }, []);

  const handleSelectLanguage = (lang: string) => {
    Cookies.set('NEXT_LOCALE', lang, { expires: 365 });
    setSelectedLang(lang);

    // Cambiar el idioma sin perder la ruta actual
    const currentPath = window.location.pathname;

    // Eliminar el idioma actual de la ruta
    const newPath = currentPath.replace(/^\/(en|es|pt)/, '');
    
    // Redirigir al nuevo idioma
    window.location.href = `/${lang}${newPath}`;
  };

  const languages = [
    { code: 'en', flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg', alt: 'English' },
    { code: 'es', flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg', alt: 'Español' },
  ];

  return (
    <div className={styles.languageSwitcher}>
      <div className={styles.sliderContainer}>
        <div className={styles.flagSlider}>
          {languages.map((lang) => (
            <div 
              key={lang.code} 
              className={`${styles.flagItem} ${selectedLang === lang.code ? styles.selected : ''}`} 
              onClick={() => handleSelectLanguage(lang.code)}
            >
              <Image
                src={lang.flag}
                alt={lang.alt}
                width={40}
                height={30}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
