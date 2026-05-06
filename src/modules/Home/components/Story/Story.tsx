import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import styles from './Story.module.css'

export default function Story() {
  const { story } = useWeddingConfig()
  const ref = useReveal(styles.visible)

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Love Story</h2>
      <div className={styles.divider} aria-hidden='true' />
      <ul className={styles.list}>
        {story.map(({ year, text }, i) => (
          <li
            key={year}
            ref={ref}
            className={styles.item}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className={styles.year}>{year}</span>
            <p className={styles.text}>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
