'use client';
import { useEffect, useRef, useState } from 'react';
import Typewriter from 'react-typewriter-effect'; // Importa la librería
import styles from './SliderParagraph.module.scss';

interface Props {
  title?: string;
  text?: string;
}

export default function SliderParagraph({ title, text }: Props) {
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad
  const titleRef = useRef<HTMLHeadingElement>(null); // Referencia al título

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cuando el título esté completamente visible
        if (entry.isIntersecting) {
          setIsVisible(true); // Activa la animación de escritura
        } else {
          setIsVisible(false); // Desactiva la animación de escritura
        }
      },
      {
        threshold: 0.5, // Cuando el 50% del título esté visible
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current); // Observar el título
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current); // Limpiar el observador
      }
    };
  }, []);

  return (
    <div className={styles['slider-paragraph']}>
      {title && (
        <h1 ref={titleRef}>
          {isVisible && (
            <Typewriter
              text={title} // El texto que quieres que se escriba
              cursorColor="transparent" // Desactiva el cursor
              startDelay={500} // Retraso antes de comenzar el efecto
              typeSpeed={100} // Velocidad de tipeo (ms)
              deleteSpeed={50} // Velocidad de eliminación (ms)
              delaySpeed={2000} // Retraso después de completar la escritura
            />
          )}
        </h1>
      )}
      {text && <p>{text}</p>}
    </div>
  );
}
