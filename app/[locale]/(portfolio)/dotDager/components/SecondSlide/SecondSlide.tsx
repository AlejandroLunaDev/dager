'use client';
import { useTranslations } from 'next-intl';
import { useState, useRef } from 'react';
import styles from './SecondSlide.module.scss';

export default function SecondSlide() {
  const t = useTranslations('SecondSlide');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);

  // Función para habilitar el sonido
  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
  };

  return (
    <section className={styles.info}>
      <h1>{t('title')}</h1>

      <div className={styles.design}>
        <div className={styles.videoContainer}>
          <button onClick={toggleAudio} className={styles.toggleButton}></button>
          {/* Texto debajo del botón */}
          <small className={styles.audioText}>
            {audioEnabled ? 'Desactivar sonido' : 'Activar sonido'}
          </small>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={!audioEnabled} // Si el audio está habilitado, desmutea el video
            playsInline
            src="/video/dotDager.mp4"
          ></video>
        </div>
        <p>{t('design.text')}</p>
      </div>
    </section>
  );
}
