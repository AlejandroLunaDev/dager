'use client';
import Typewriter from 'typewriter-effect';
import styles from './SliderParagraph.module.scss';

interface Props {
  title?: string;
  text?: string;
}

export default function SliderParagraph({ title, text }: Props) {
  return (
    <div className={styles['slider-paragraph']}>
      {title && (
        <h1 className={styles['typewriter']}>
          <Typewriter
            options={{
              strings: [title], // Texto para escribir
              autoStart: true,
              loop: true, // Activar loop
              delay: 100, // Velocidad de tipeo
              deleteSpeed: 150, // Velocidad de borrado
              cursor: '|', // Agrega el cursor animado
            }}
          />
        </h1>
      )}
      {text && <p>{text}</p>}
    </div>
  );
}
