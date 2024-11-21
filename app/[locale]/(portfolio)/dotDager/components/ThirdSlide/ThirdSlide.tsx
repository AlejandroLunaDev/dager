import Image from 'next/image';
import styles from './ThirdSilide.module.scss';
import { useTranslations } from 'next-intl';

export default function ThirdSlide() {
  const t = useTranslations('ThirdSlide');
  return (
    <section className={styles.skills}>
      <header>
        <h1>{t('title')}</h1>
        <p>
          {t('text')}
        </p>
      </header>
      <div className={styles.divider}></div>
      <main>
        <div className={styles.frontend}>
          <h1>Frontend</h1>
          <ul className={styles.frontendListIcon}>
            <li>
              <figure>
                <Image
                  src='../svgs/javascript.svg'
                  width={100}
                  height={100}
                  alt='javascript'
                />
              </figure>
              <span>Javascript</span>
            </li>
            <li>
              <figure>
                <Image
                  src='../svgs/typescript.svg'
                  width={100}
                  height={100}
                  alt='typescript'
                />
              </figure>
              <span>Typescript</span>
            </li>
            <li>
              <figure>
                <Image
                  width={100}
                  height={100}
                  src='../svgs/react.svg'
                  alt='react'
                />
              </figure>
              <span>React</span>
            </li>
            <li>
              <figure>
                <Image
                  width={100}
                  height={100}
                  src='../svgs/nextjs.svg'
                  alt='nextJS'
                />
              </figure>
              <span>NextJS</span>
            </li>
            <li>
              <figure className={styles.large}>
                <Image
                  src='../svgs/html.svg'
                  alt='html'
                  width={100}
                  height={100}
                />
              </figure>
              <span>HTML</span>
            </li>
            <li>
              <figure className={styles.large}>
                <Image
                  width={100}
                  height={100}
                  src='../svgs/css.svg'
                  alt='css'
                />
              </figure>
              <span>CSS</span>
            </li>
            <li>
              <figure className={styles.large}>
                <Image
                  width={100}
                  height={100}
                  src='../svgs/tailwind.svg'
                  alt='tailwind'
                />
              </figure>
              <span>Tailwind</span>
            </li>
            <li>
              <figure className={styles.large}>
                <Image
                  width={100}
                  height={100}
                  src='../svgs/sass.svg'
                  alt='sass'
                />
              </figure>
              <span>Sass</span>
            </li>
          </ul>
          <ul className={styles.frontendList}>
            <li>
              <h4>{t('h4.languages')}</h4>
              <p>Javascript, Typescript</p>
            </li>
            <li>
              <h4>{t('h4.frameworks')}</h4>
              <p>React, NextJS</p>
            </li>
            <li>
              <h4>{t('h4.toolsLibraries')}</h4>
              <p>Tailwind, Sass, Figma</p>
            </li>
            <li>
              <h4>{t('h4.core')}</h4>
              <p>HTML, CSS</p>
            </li>
          </ul>
        </div>
        <div className={styles.backend}>
          <h1>Backend</h1>
          <ul className={styles.backendListIcon}>
            <li>
              <figure>
                <Image
                  width={100}
                  height={100}
                  src='../svgs/node.svg'
                  alt='Node'
                />
              </figure>
              <span>Node.js</span>
            </li>
            <li>
              <figure>
                <Image
                  width={100}
                  height={100}
                  src='../svgs/express.svg'
                  alt='express'
                />
              </figure>
              <span>Express</span>
            </li>
            <li>
              <figure>
                <Image
                  width={100}
                  height={100}
                  src='../svgs/nestjs.svg'
                  alt='NestJS'
                />
              </figure>
              <span>NestJS</span>
            </li>
            <li>
              <figure>
                <Image
                  width={30}
                  height={30}
                  src='../svgs/mongoDB.svg'
                  alt='mongo'
                />
              </figure>
              <span>MongoDB</span>
            </li>
          </ul>
          <ul className={styles.backendList}>
            <li>
              <h4>{t('h4.languages')}</h4>
              <p>Node.js (Javascript, Typescript)</p>
            </li>
            <li>
              <h4>{t('h4.frameworks')}</h4>
              <p>Express, NestJS</p>
            </li>
            <li>
              <h4>{t('h4.database')}</h4>
              <p>MongoDB</p>
            </li>
            <li>
              <h4>{t('h4.api')}</h4>
              <p>RESTful</p>
            </li>
          </ul>
        </div>
      </main>
 {/*      <div className={styles.divider1}></div> */}
    </section>
  );
}
