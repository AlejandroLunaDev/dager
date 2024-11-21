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
      <div className={styles.design}>
        <div className={styles.videoContainer}>
 
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={!audioEnabled} // Si el audio está habilitado, desmutea el video
            playsInline
            src="/video/dotDager.mp4"
          ></video>
                   <button onClick={toggleAudio} className={styles.toggleButton}>
            <span className={styles.text}>
              {audioEnabled ? t('SoundButton.off') : t('SoundButton.on')}
            </span>
          </button>
        </div>
        <div className={styles.text}>
          <h1>{t('title')}</h1>
          <p>{t('design.text')}</p>
        </div>
      </div>
    </section>
  );
}
