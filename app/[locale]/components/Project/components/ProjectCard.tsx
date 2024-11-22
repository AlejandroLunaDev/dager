/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps {
  thumbnail: string;
  title: string;
  description: string;
  onViewDemo: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ thumbnail, title, description, onViewDemo }) => {
  return (
    <div className={styles.card}>
      <img
        src={thumbnail}
        alt={`${title} Thumbnail`}
        className={styles.thumbnail}
        width={500} 
        height={500} 
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onViewDemo}>View Demo</button>
    </div>
  );
};

export default ProjectCard;
