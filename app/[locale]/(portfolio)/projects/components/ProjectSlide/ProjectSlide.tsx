import Image from 'next/image';
import styles from './ProjectSlide.module.scss';
import ButtonAnimate from '@/app/shared/components/ButtonAnimate/ButtonAnimate';
import { CSSProperties } from 'react';

interface ProjectSlideProps {
  projectNumber: string;
  projectName: string;
  technologies: string[];
  description: string;
  projectImage: string;
  demoLink: string;
  githubLink: string;
  background?: CSSProperties['background'];
}

export default function ProjectSlide({
  projectNumber,
  projectName,
  technologies,
  description,
  projectImage,
  demoLink,
  githubLink,
  background,
}: ProjectSlideProps) {
  return (
    <div className={`${styles.projectSlide} `} style={{ background }}>
      <div className={styles.projectHeader}>

        <div className={styles.technologies}>
          <span>{technologies.join(' ● ')}</span>
          <Image
          width={500}
          height={500}
          src={`../svgs/${projectNumber}.svg`}
          alt={`number ${projectNumber}`}
          className={styles.projectNumber}
        />
          <figure>
            <Image
              width={500}
              height={500}
              src={`/images/${projectImage}.png`}
              alt={projectName}
            />
          </figure>
        </div>
      </div>

      <div className={styles.projectContent}>
        <article>
          <header>
            <h1>{projectName}</h1>
            <ul>
              {technologies.map((tech, index) => (
                <li key={index}>
                  <Image
                    width={100}
                    height={100}
                    src={`../svgs/${tech}.svg`}
                    alt={tech}
                  />
                </li>
              ))}
            </ul>
          </header>
          <div className={styles.description}>
            <p>{description}</p>
            <div className={styles.buttons}>
            {demoLink && (
                <div>
                  <ButtonAnimate href={demoLink} hoverText="Demo">
                    Demo
                  </ButtonAnimate>
                </div>
              )}
              <div>

              <ButtonAnimate href={githubLink} hoverText="GitHub" >
                GitHub
              </ButtonAnimate>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
