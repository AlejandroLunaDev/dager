
import styles from './PortfolioParagraph.module.scss';

interface Props {
  paragraphText?: string;
  children?: React.ReactNode;
}

const PortfolioParagraph: React.FunctionComponent<Props> = ({
  paragraphText,
  children,
}): JSX.Element => {
  return (
    <p className={styles['portfolio-paragraph']}>
      {paragraphText ?? children}
    </p>
  );
};

export default PortfolioParagraph;
