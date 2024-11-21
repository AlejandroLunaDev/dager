/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './ContactAction.module.scss';
export interface Item {
  id: number;
  name: string;
}
export default function ContactAction({ items: items }: { items: Item[] }) {
  const connectVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: items.length * 0.1 + 0.5 // Retraso después de todos los ítems y la imagen
      }
    }
  };
  return (
    <motion.div className={styles.connect} variants={connectVariants}>
      <p>Connect</p>
      <div className={styles.icons}>
        <a
          href='https://github.com/MarianoVilla'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub size={35} />
        </a>
        <a
          href='https://www.linkedin.com/in/mariano-luis-villa/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin size={35} />
        </a>
      </div>
    </motion.div>
  );
}
