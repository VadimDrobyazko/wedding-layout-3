import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import { photoUrl } from '@utils/photo'
import styles from './WaitingYou.module.css'

export default function WaitingYou() {
  const { waitingYou } = useWeddingConfig()
  const ref = useReveal(styles.visible)

  return (
    <section className={styles.section}>
      <div ref={ref} className={styles.inner}>
        <h2 className={styles.heading}>Чекаємо вас</h2>
        <div className={styles.divider} aria-hidden='true' />
        {waitingYou.photo && (
          <img className={styles.photo} src={photoUrl(waitingYou.photo)} alt='Наша пара' />
        )}
      </div>
    </section>
  )
}
