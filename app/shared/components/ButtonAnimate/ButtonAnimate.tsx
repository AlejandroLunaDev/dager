// ButtonAnimate.tsx
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import styles from './ButtonAnimate.module.scss';
import { Link } from '@/i18n/routing';

interface ButtonAnimateProps {
  href?: string; 
  download?: boolean; 
  children: React.ReactNode;
  hoverText?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

export default function ButtonAnimate({
  href,
  download,
  children,
  hoverText,
  onClick,
  type = 'button',
}: ButtonAnimateProps) {
  const isLink = Boolean(href);

  return isLink ? (
    <Link
      href={href ?? '/'}
      passHref
      target='_blank'
      download={download}
      className={`${styles.animatedCommon} ${styles.animatedLink}`}  // Se añaden las clases
      onClick={onClick}
    >
      <span className={styles.defaultText}>{children}</span>
      <span className={styles.hoverContent}>
        {hoverText || children} <MdOutlineKeyboardDoubleArrowRight />
      </span>
    </Link>
  ) : (
    <button
      className={`${styles.animatedCommon} ${styles.animatedButton}`}  // Se añaden las clases
      type={type}
      onClick={onClick}
    >
      <span className={styles.defaultText}>{children}</span>
      <span className={styles.hoverContent}>
        {hoverText || children} <MdOutlineKeyboardDoubleArrowRight />
      </span>
    </button>
  );
}
