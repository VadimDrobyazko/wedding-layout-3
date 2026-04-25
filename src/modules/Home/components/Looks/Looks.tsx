import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import styles from './Looks.module.css'

export default function Looks() {
  const { dresscode } = useWeddingConfig()
  const ref = useReveal(styles.visible)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 ref={ref} className={styles.heading}>
          Дрес-код
        </h2>
        <div className={styles.divider} aria-hidden='true' />
        <p className={styles.hint}>{dresscode.hint}</p>
        <p className={styles.description}>{dresscode.description}</p>
        <div className={styles.palette} aria-label='Кольорова палітра'>
          {dresscode.palette.map((color) => (
            <span
              key={color}
              className={styles.swatch}
              style={{ backgroundColor: color }}
              title={color}
              aria-label={color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
