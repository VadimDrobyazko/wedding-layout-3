# Wedding Template — Brief for Developer

## Що потрібно зробити

Замінити хардкод даних у шаблоні на динамічний fetch з CRM-дашборду.
Тобто замість статичного `config.js` — дані тягнуться з API по slug клієнта.

---

## Готова інфраструктура

### Дашборд (вже задеплоєний)

```
https://dashboard-wedding.vercel.app
```

### Публічний API ендпоінт

```
GET https://dashboard-wedding.vercel.app/api/public/{slug}
```

- Без авторизації
- CORS відкритий (будь-який origin)
- Повертає тільки PUBLISHED клієнтів (чернетки → 404)

### Env змінні у шаблоні (вже є в .env)

```
REACT_APP_DASHBOARD_URL=https://dashboard-wedding.vercel.app/
REACT_APP_PHOTOS_URL=https://pub-ce7207c60e2f4fed94b5a23d8d27f90c.r2.dev
```

---

## Fetch функція

```js
async function fetchWedding(slug) {
  const res = await fetch(`${process.env.REACT_APP_DASHBOARD_URL}api/public/${slug}`)
  if (!res.ok) return null
  return res.json()
}
```

---

## Структура відповіді API

```js
{
  id: string,
  slug: string,
  bride: string,        // ім'я нареченої
  groom: string,        // ім'я нареченого
  eventDate: string,    // ISO datetime або null

  coupleSection: {
    title: string | null,
    subtitle: string | null,
    bgImage: string | null,
    coupleImage: string | null,
    enabled: boolean
  } | null,

  waitingSection: {
    title: string | null,
    text: string | null,
    image: string | null,      // шлях до фото, базовий URL: REACT_APP_PHOTOS_URL
    enabled: boolean
  } | null,

  storySection: {
    title: string | null,
    cover: string | null,
    enabled: boolean,
    items: [{ id, year, text, image, order }]
  } | null,

  dresscodeSection: {
    title: string | null,
    text: string | null,
    palette: string[],
    image: string | null,
    enabled: boolean
  } | null,

  timelineSection: {
    title: string | null,
    cover: string | null,
    enabled: boolean,
    items: [{ id, time, title, text, image, order }]
  } | null,

  venueSection: {
    title: string | null,
    address: string | null,
    mapUrl: string | null,
    image: string | null,
    enabled: boolean
  } | null,

  organizerSection: {
    name: string | null,
    phone: string | null,
    email: string | null,
    avatar: string | null,
    enabled: boolean
  } | null
}
```

---

## Як slug потрапляє в шаблон

Slug береться з URL. Наприклад:

- `mysite.com/bohdana-vadym` → slug = `bohdana-vadym`

```js
const slug = window.location.pathname.split('/').filter(Boolean)[0]
```

---

## Що треба зробити в шаблоні

1. Знайти де зараз хардкодяться дані (config.js або подібний файл)
2. Замінити на `fetchWedding(slug)` при завантаженні сторінки
3. Поки дані грузяться — показати лоадер
4. Якщо API повернув `null` — показати помилку або fallback

---

## Приклад інтеграції (React)

```jsx
import { useEffect, useState } from 'react'

export default function WeddingPage() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const slug = window.location.pathname.split('/').filter(Boolean)[0]
    fetch(`${process.env.REACT_APP_DASHBOARD_URL}api/public/${slug}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        setData(d)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Завантаження...</div>
  if (!data) return <div>Сторінку не знайдено</div>

  return (
    <div>
      <h1>
        {data.bride} & {data.groom}
      </h1>
      {/* решта компонентів */}
    </div>
  )
}
```
