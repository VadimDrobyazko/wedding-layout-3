import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import styles from './MapSection.module.css'

export default function MapSection() {
  const { venue } = useWeddingConfig()
  const ref = useReveal(styles.visible)

  return (
    <section className={styles.section}>
      <div className={styles.bg} style={{ backgroundImage: 'url(/images/location.webp)' }} aria-hidden='true' />
      <div className={styles.overlay} aria-hidden='true' />
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
        {venue.mapLink && (
          <a
            href={venue.mapLink}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.mapButton}
          >
            <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
              <path d='M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z' />
              <circle cx='12' cy='10' r='3' />
            </svg>
            Відкрити на карті
          </a>
        )}
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
