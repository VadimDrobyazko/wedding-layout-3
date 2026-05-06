import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import styles from './Looks.module.css'

export default function Looks() {
  const { dresscode } = useWeddingConfig()
  const headingRef = useReveal(styles.visible)
  const cardRef = useReveal(styles.visible)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 ref={headingRef} className={styles.heading}>
          Дрес-код
        </h2>
        <div className={styles.divider} aria-hidden='true' />
        {dresscode.hint && <p className={styles.hint}>{dresscode.hint}</p>}
        {dresscode.description && (
          <p className={styles.description}>{dresscode.description}</p>
        )}
      </div>
      <div className={styles.colors}>
        {dresscode.colors.map((item) => (
          <div key={item.name} ref={cardRef} className={styles.card}>
            <img className={styles.cardImg} src={item.img} alt={item.name} />
            <span className={styles.cardName} style={{ color: item.textColor }}>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
