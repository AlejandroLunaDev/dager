import ProjectSlide from './components/ProjectSlide/ProjectSlide';
import SliderParagraph from '@/app/shared/components/SliderParagraph/SliderParagraph';
import TapHint from '@/app/shared/components/tapHint/TapHint';
import { useTranslations } from 'next-intl';
import { BsMouse } from 'react-icons/bs';

export default function Projects() {
  const t = useTranslations('Projects');
  const b = useTranslations('PortfolioLanding');

  return (
    <>
      <section>
        <SliderParagraph
          title={t('title')}
          text={t('description')}
        />
        <TapHint paragraphText={b('tapHint.text')} Icon={BsMouse} />
      </section>
      {/* Project 1 */}
      <section>
        <ProjectSlide
          projectNumber="numberone"
          projectName={t('projects.numberone.name')}
          technologies={['react', 'typescript', 'tailwind', 'materialui']}  // Tecnologías fijas
          description={t('projects.numberone.description')}
          projectImage="proyectoone"
          demoLink={t('projects.numberone.demoLink')}
          githubLink={t('projects.numberone.githubLink')}
          background={t('projects.numberone.background')}
        />
      </section>
      {/* Project 2 */}
      <section>
        <ProjectSlide
          projectNumber="numbertwo"
          projectName={t('projects.numbertwo.name')}
          technologies={['react', 'typescript', 'tailwind', 'materialui', 'express', 'mongoDB']}  // Tecnologías fijas
          description={t('projects.numbertwo.description')}
          projectImage="projecttwo"
          demoLink={t('projects.numbertwo.demoLink')}
          githubLink={t('projects.numbertwo.githubLink')}
          background={t('projects.numbertwo.background')}
        />
      </section>
      {/* Project 3 */}
      <section>
        <ProjectSlide
          projectNumber="numberthree"
          projectName={t('projects.numberthree.name')}
          technologies={['html', 'css', 'javascript', 'sass']}  // Tecnologías fijas
          description={t('projects.numberthree.description')}
          projectImage="projectthree"
          demoLink={t('projects.numberthree.demoLink')}
          githubLink={t('projects.numberthree.githubLink')}
          background={t('projects.numberthree.background')}
        />
      </section>
      {/* Project 4 */}
      <section>
        <ProjectSlide
          projectNumber="numberfour"
          projectName={t('projects.numberfour.name')}
          technologies={['nextjs', 'typescript', 'zustand', 'tailwind']}  // Tecnologías fijas
          description={t('projects.numberfour.description')}
          projectImage="workwise"
          demoLink={t('projects.numberfour.demoLink')}
          githubLink={t('projects.numberfour.githubLink')}
          background={t('projects.numberfour.background')}
        />
      </section>
    </>
  );
}
