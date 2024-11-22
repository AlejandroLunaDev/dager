/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaDiscord } from 'react-icons/fa';
import styles from './FormContact.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import ButtonAnimate from '@/app/shared/components/ButtonAnimate/ButtonAnimate';
import { useTranslations } from 'next-intl';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function FormContact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Reinicia los datos
  };

  const t = useTranslations('Contact');

  return (
    <div className={styles.formContainer}>
      <div className={styles.form}>
        {!submitted && (
          <header>
            <h1>{t('form.title')}</h1>
            <p>{t('form.subtitle')}</p>
          </header>
        )}
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">{t('form.name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">{t('form.email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">{t('form.message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <ButtonAnimate type="submit" hoverText={t('form.button.hoverText')}>
              {t('form.button.text')}
            </ButtonAnimate>
          </form>
        ) : (
          <div className={styles.thankYouMessage}>
            <h2>{t('form.thankYouTitle')}</h2>
            <p>{t('form.thankYouMessage')}</p>

          </div>
        )}
      </div>
      <div className={styles.connect}>
        <div>
          <p>{t('title')}</p>
        </div>
        <div className={styles.logo}>
        <Image width={500} height={500} src="/image/despuesdelas12.png" alt="logo" />

        <div className={styles.icons}>
          <Link
            href="https://github.com/MarianoVilla"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ color: '#ffff' }} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mariano-luis-villa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin  style={{ color: '#ffff' }} />
          </Link>
          <Link
            href="https://www.youtube.com/@DotDager"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </Link>
          <Link
            href="https://discord.gg/4NFk6TamAB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord  />
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
