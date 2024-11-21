import React from 'react';
import MilestoneCard from './components/MilestoneCard/MilestoneCard';
import styles from './FourthSlide.module.scss';
import { useTranslations } from 'next-intl';


interface Milestone {
  title: string;
  period: string;
  company: string;
  description: string;
}
const FourthSlide = () => {
  const t = useTranslations('FourthSlide');

  // Convierte las claves de `milestones` a un arreglo
  const milestones = Object.values(t.raw('milestones'));

  return (
    <div className={styles.container}>
      <header>
        <h1>{t('title')}</h1>
      </header>

      {milestones.map((milestone: unknown, index: number) => {
  const milestoneAsMilestone = milestone as Milestone;
  return (
    <div key={index} className={styles['milestone-card']}>
      <MilestoneCard
        title={milestoneAsMilestone.title}
        period={milestoneAsMilestone.period}
        company={milestoneAsMilestone.company}
        description={milestoneAsMilestone.description}
      />
    </div>
  );
})}
    </div>
  );
};

export default FourthSlide;
