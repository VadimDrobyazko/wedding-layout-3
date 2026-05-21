# Миграция: убрать slug-роутинг

Применяется ко всем шаблонам, которые используют `/:slug` роутинг.

## Что удалить

```
src/router/          ← вся папка
src/clients/         ← вся папка
src/modules/Home/page/WeddingPage.tsx
```

## Что изменить

### src/App.tsx

```tsx
import { WeddingConfigProvider } from '@context/WeddingConfigContext'
import { GuestProvider } from '@context/GuestContext'
import config from '@config/wedding.config'
import MainLayout from '@layouts/main/MainLayout'
import Home from '@modules/Home/page/Home'
import './App.css'

const App = () => (
  <WeddingConfigProvider value={config}>
    <GuestProvider value={null}>
      <MainLayout>
        <Home />
      </MainLayout>
    </GuestProvider>
  </WeddingConfigProvider>
)

export default App
```

### src/layouts/main/MainLayout.tsx

Заменить `<Outlet />` на `children`:

```tsx
import type { ReactNode } from 'react'
import styles from './MainLayout.module.css'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.mainContainer}>
      {children}
    </div>
  )
}
```

## Под каждого клиента

Редактируй только один файл:

```
src/config/wedding.config.ts  ← имена, дата, место, таймлайн, дресскод и т.д.
```

Картинки кладёшь в `public/images/` или используешь R2-ссылки в конфиге.
