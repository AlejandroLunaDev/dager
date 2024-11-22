import Image from 'next/image';
import styles from './ThirdSlide.module.scss';
import { useTranslations } from 'next-intl';

export default function ThirdSlide() {
  const t = useTranslations('ThirdSlide');
  const interests: Record<string, string> = t.raw('interests');

  return (
    <section className={styles.skills}>
      <div className={styles.interest}>
        <h1>{t('title')}</h1>
        <ul>
          {Object.values(interests).map((interest, index) => (
            <li key={index} className={styles.interestItem}>
              <span role="img" aria-label="pickle">
                🥒
              </span>
              {interest}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/image/dagermask.png" alt="skills" width={500} height={500} />
        <div className={styles.overlay}></div>
      </div>
    </section>
  );
}
