import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import styles from './MapSection.module.css'

export default function MapSection() {
  const { venue } = useWeddingConfig()
  const ref = useReveal(styles.visible)

  return (
    <section className={styles.section}>
      <div ref={ref} className={styles.inner}>
        <h2 className={styles.heading}>Локація</h2>
        <div className={styles.divider} aria-hidden='true' />
        <p className={styles.name}>{venue.name}</p>
        {venue.description && <p className={styles.description}>{venue.description}</p>}
        <dl className={styles.details}>
          {venue.details.map(({ label, value }) => (
            <div key={label} className={styles.detailRow}>
              <dt className={styles.detailLabel}>{label}</dt>
              <dd className={styles.detailValue}>{value}</dd>
            </div>
          ))}
        </dl>
        {venue.mapIframe && (
          <div
            className={styles.mapWrapper}
            dangerouslySetInnerHTML={{ __html: venue.mapIframe }}
          />
        )}
      </div>
    </section>
  )
}
