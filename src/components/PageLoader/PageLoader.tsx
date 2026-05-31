import { useState, useEffect } from 'react'
import styles from './PageLoader.module.css'

type Props = {
  progress: number
  done: boolean
  couple?: { bride: string; groom: string }
}

export default function PageLoader({ progress, done, couple }: Props) {
  const [visible, setVisible] = useState(true)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    if (!done) return
    const t1 = setTimeout(() => setHiding(true), 0)
    const t2 = setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = ''
      document.body.classList.add('page-loaded')
    }, 900)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [done])

  if (!visible) return null

  return (
    <div className={`${styles.overlay} ${hiding ? styles.hiding : ''}`}>
      <div className={styles.content}>
        {couple ? (
          <p className={styles.names}>
            <span>{couple.bride}</span>
            <span className={styles.amp}>&</span>
            <span>{couple.groom}</span>
          </p>
        ) : (
          <span className={styles.ampersand}>&</span>
        )}
        <div className={styles.track}>
          <div className={styles.bar} style={{ width: `${progress}%` }} />
        </div>
        <p className={styles.label}>Запрошення формується</p>
      </div>
    </div>
  )
}
