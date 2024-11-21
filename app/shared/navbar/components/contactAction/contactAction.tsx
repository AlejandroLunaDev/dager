/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaDiscord } from 'react-icons/fa';
import styles from './ContactAction.module.scss';

export interface Item {
  id: number;
  name: string;
}

export default function ContactAction({ items }: { items: Item[] }) {
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
        {/* GitHub */}
        <a
          href="https://github.com/MarianoVilla"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={25} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mariano-luis-villa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={25} />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/channel/tu-canal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube size={25} />
        </a>

        {/* Discord */}
        <a
          href="https://discord.com/invite/tu-invitacion"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord size={25} />
        </a>
      </div>
    </motion.div>
  );
}
