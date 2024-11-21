
import TapHint from '@/app/shared/components/tapHint/TapHint';
import {
  FirstSlide,
  SecondSlide,
  ThirdSlide,
  FourthSlide,
  FifthSlide,
} from './components';
import { BsMouse } from 'react-icons/bs';
import { useTranslations } from 'next-intl';

export default function About() {
const t = useTranslations('PortfolioLanding');
  return (
    <>
      <section>
        <FirstSlide />
        <TapHint paragraphText={t('tapHint.text')} Icon={BsMouse} />
      </section>
      <section>
        <SecondSlide />
      </section>
      <section>
        <ThirdSlide />
      </section>
      <section>
        <FourthSlide />
      </section>
      <section>
        <FifthSlide />
      </section>
    </>
  );
}
