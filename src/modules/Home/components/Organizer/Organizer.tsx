import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import styles from './Organizer.module.css'

export default function Organizer() {
  const { organizer } = useWeddingConfig()
  const ref = useReveal(styles.visible)

  return (
    <footer className={styles.footer}>
      <div ref={ref} className={styles.inner}>
        <h2 className={styles.heading}>Контакти</h2>
        <div className={styles.divider} aria-hidden='true' />
        <p className={styles.role}>{organizer.role}</p>
        <p className={styles.name}>{organizer.name}</p>
        <a href={`tel:${organizer.phone.replace(/\s/g, '')}`} className={styles.phone}>
          {organizer.phone}
        </a>
        {organizer.note && <p className={styles.note}>{organizer.note}</p>}
        {organizer.telegramGroup && (
          <a
            href={organizer.telegramGroup}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.tgButton}
          >
            <svg width='20' height='20' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
              <path d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.17 13.31l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.983.249z' />
            </svg>
            Telegram-група весілля
          </a>
        )}
      </div>
    </footer>
  )
}
