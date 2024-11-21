
import SliderParagraph from '@/app/shared/components/SliderParagraph/SliderParagraph';
import styles from './FirstSlide.module.scss';
import { useTranslations } from 'next-intl';
import Image from 'next/image';



export default function FirstSlide() {
  const t = useTranslations('FirstSlide');
  return (
    <article className={styles.hero}>
        <Image src='/image/soyYo.jpg' width={500} height={500} alt='dotDager'></Image>
      <SliderParagraph title={t('title')} text= {t('text')}/>
 

    </article>
  );
}
