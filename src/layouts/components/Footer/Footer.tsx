import styles from './Footer.module.css'
import { useWeddingConfig } from '@context/WeddingConfigContext'

export default function Footer() {
  const { couple, event } = useWeddingConfig()

  return (
    <footer className={styles.footer}>
      <p className={styles.names}>{couple.bride} &amp; {couple.groom}</p>
      <p className={styles.date}>{event.dateShort} &nbsp;·&nbsp; {event.city}</p>
      <a
        className={styles.credit}
        href="https://www.instagram.com/invite.me.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        DESIGNED BY INVITE.ME.LINK
      </a>
    </footer>
  )
}
