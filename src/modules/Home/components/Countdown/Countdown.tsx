import { useState, useEffect } from 'react'
import { useWeddingConfig } from '@context/WeddingConfigContext'
import { useReveal } from '@hooks/useReveal'
import styles from './Countdown.module.css'

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number }

function calculateTimeLeft(targetDate: string): TimeLeft {
  const diff = new Date(targetDate).getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  }
}

export default function Countdown() {
  const { event } = useWeddingConfig()
  const [time, setTime] = useState<TimeLeft>(() => calculateTimeLeft(event.weddingDate))
  const ref = useReveal(styles.visible)

  useEffect(() => {
    const id = setInterval(() => setTime(calculateTimeLeft(event.weddingDate)), 1000)
    return () => clearInterval(id)
  }, [event.weddingDate])

  const units = [
    { value: time.days, label: 'Днів' },
    { value: time.hours, label: 'Годин' },
    { value: time.minutes, label: 'Хвилин' },
    { value: time.seconds, label: 'Секунд' },
  ]

  return (
    <section className={styles.section}>
      <p className={styles.preText}>До нашого свята залишилось</p>
      <div className={styles.units}>
        {units.map(({ value, label }, i) => (
          <div
            key={label}
            ref={ref}
            className={styles.unit}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className={styles.value}>{String(value).padStart(2, '0')}</span>
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
