'use client';
import React, { useState, useEffect } from 'react';
import styles from './FourthSlide.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useTranslations } from 'next-intl';
import ProjectCard from './components/ProjectCard';
import Modal from './components/Modal/Modal';

const FourthSlide = () => {
  const t = useTranslations('FourthSlide');
  
  const [modalOpen, setModalOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  const openModal = (src: string) => {
    setIframeSrc(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIframeSrc('');
  };

  // Definir proyectos con los datos de las traducciones (o cargarlos desde un archivo JSON si es necesario)
  const projects = [
    {
      thumbnail: '/image/gatogame.png',
      title: t('projects.project1.title'),
      description: t('projects.project1.description'),
      demoUrl: 'https://coyoteke.com/littlePrince/pet.html',
    },
    {
      thumbnail: '/image/princi-pito.png',
      title: t('projects.project2.title'),
      description: t('projects.project2.description'),
      demoUrl: 'https://coyoteke.com/littlePrince/',
    },
    {
      thumbnail: '/image/lumberjack.png',
      title: t('projects.project3.title'),
      description: t('projects.project3.description'),
      demoUrl: 'https://tbot.xyz/lumber/',
    }
  ];

  // Detectar cambios en el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 480);
      setIsTablet(width > 480 && width <= 1024);
    };

    handleResize(); // chequeo inicial
    window.addEventListener('resize', handleResize); // escuchar para cambios de tamaño de ventana

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      <h1>{t('title')}</h1> {/* Título traducido desde el JSON */}

      {/* En desktop, se muestran las cards estáticas */}
      {!isMobile && !isTablet ? (
        <div className={styles.cardsContainer}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <ProjectCard
                thumbnail={project.thumbnail}
                title={project.title}
                description={project.description}
                onViewDemo={() => openModal(project.demoUrl)}
              />
            </div>
          ))}
        </div>
      ) : (
        // En tablet y mobile, se convierte en un carrusel
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={isTablet ? 2 : 1}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          className={styles.swiper}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <ProjectCard
                thumbnail={project.thumbnail}
                title={project.title}
                description={project.description}
                onViewDemo={() => openModal(project.demoUrl)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Modal */}
      <Modal isOpen={modalOpen} onClose={closeModal} iframeSrc={iframeSrc} />
    </div>
  );
};

export default FourthSlide;
