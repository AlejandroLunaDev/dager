'use client';
import { useTranslations } from 'next-intl';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './SecondSlide.module.scss';

export default function SecondSlide() {
  const t = useTranslations('SecondSlide');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);

  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
  };

  return (
    <section className={styles.info}>
      <div className={styles.design}>
        <div className={styles.videoContainer}>
          <h1>{t('title')}</h1>

          <video
            ref={videoRef}
            autoPlay
            loop
            muted={!audioEnabled}
            playsInline
            src="/video/dotDager.mp4"
          ></video>

          {/* Botón con animación de temblor brusco */}
          <motion.button
            onClick={toggleAudio}
            className={styles.toggleButton}
            animate={{
              x: [0, -40, 40, -15, 15, -10, 10, -5, 5, 0], // Temblor fuerte en eje x
              rotate: [0, -10, 10, -7, 7, -5, 5, 0], // Rotación pronunciada
            }}
            transition={{
              duration: 0.6, // Temblor rápido y dinámico
              ease: 'easeInOut', // Transición suave
              repeat: Infinity, // Se repite indefinidamente
              repeatDelay: 5, // Pausa de 10 segundos
            }}
          >
            <span className={styles.text}>
              {audioEnabled ? t('SoundButton.off') : t('SoundButton.on')}
            </span>
          </motion.button>
        </div>
        <div className={styles.text}>
          <h1>{t('title')}</h1>
          <p>{t('design.text')}</p>
        </div>
      </div>
    </section>
  );
}
