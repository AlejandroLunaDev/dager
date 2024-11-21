// components/MilestoneCard/MilestoneCard.tsx

import styles from './MilestoneCard.module.scss';

interface MilestoneCardProps {
  title: string;
  period: string;
  company: string;
  description: string;
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({
  title,
  period,
  company,
  description,
}) => {
  return (
    <div className={styles['milestone-card']}>
      <header>
        <h2>{title}</h2>
        <span>{period}</span>
      </header>
      <small>{company}</small>
      <p className="description">{description}</p>
    </div>
  );
};

export default MilestoneCard;
