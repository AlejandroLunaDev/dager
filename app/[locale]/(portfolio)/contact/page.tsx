import SliderParagraph from '@/app/shared/components/SliderParagraph/SliderParagraph'
import React from 'react'
import FormContact from './components/FormContact'
import { useTranslations } from 'next-intl';
import TapHint from '@/app/shared/components/tapHint/TapHint';
import { BsMouse } from 'react-icons/bs';

export default function Contact() {
  const t = useTranslations('Contact');
  const b = useTranslations('PortfolioLanding');
  return (
    <>
    
    <section>
      <SliderParagraph title={t('title')}  text='' />
      <TapHint paragraphText={b('tapHint.text')} Icon={BsMouse} />
    </section>
    <section>
    <FormContact />
    </section>
    </>
  )
}
