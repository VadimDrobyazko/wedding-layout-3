import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import styles from './Timing.module.css'

export default function Timing() {
  const { timeline } = useWeddingConfig()
  const headingRef = useReveal(styles.visible)
  const itemRef = useReveal(styles.visible)

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 ref={headingRef} className={styles.heading}>
          Програма дня
        </h2>
        <ol className={styles.timeline}>
          {timeline.map((item, i) => {
            const isLeft = i % 2 === 0
            const content = (
              <>
                <span className={styles.time}>{item.time}</span>
                <span className={styles.eventName}>{item.event}</span>
                {item.sub && <span className={styles.sub}>{item.sub}</span>}
              </>
            )
            return (
              <li
                key={item.time}
                ref={itemRef}
                className={`${styles.item} ${item.isDim ? styles.dim : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className={`${styles.cell} ${styles.cellLeft}`}>
                  {isLeft && content}
                </div>
                <div className={styles.center} aria-hidden='true'>
                  <div className={styles.dot} />
                </div>
                <div className={`${styles.cell} ${styles.cellRight}`}>
                  {!isLeft && content}
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
