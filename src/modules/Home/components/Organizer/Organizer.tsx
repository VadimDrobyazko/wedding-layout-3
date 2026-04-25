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
      </div>
    </footer>
  )
}
