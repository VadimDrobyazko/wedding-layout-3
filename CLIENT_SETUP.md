# Як додати нового клієнта

## Що це за репо
Шаблон весільного сайту **v3**. Кожен клієнт — окремий форк цього репо з власним конфігом і деплоєм.

## Крок 1 — Клонуй шаблон

```bash
git clone https://github.com/VadimDrobyazko/wedding-layout-3 v3-anya-vlad
cd v3-anya-vlad
npm install
```

## Крок 2 — Налаштуй конфіг клієнта

Відкрий `src/config/wedding.config.ts` і заміни дані:

```ts
couple: { bride: 'Аня', groom: 'Влад' },
event: {
  date: '14 серпня 2026',
  dateShort: '14.08.2026',
  city: 'Київ',
  ...
}
```

## Крок 3 — Зміни назву Worker

Відкрий `wrangler.jsonc` і встанови назву за конвенцією `v{N}-{client-slug}`:

```jsonc
{
  "name": "v3-anya-vlad",
  ...
}
```

## Крок 4 — Задеплой

```bash
CLOUDFLARE_API_TOKEN=<твій_токен> npx wrangler deploy
```

## Результат

Клієнт доступний на:
```
https://invite-me.it.com/v3/anya-vlad
```

## Конвенція назв

| Шаблон | Назва Worker | URL |
|--------|-------------|-----|
| v1 | `v1-anya-vlad` | `invite-me.it.com/v1/anya-vlad` |
| v2 | `v2-petro-oksana` | `invite-me.it.com/v2/petro-oksana` |
| v3 | `v3-ivan-maria` | `invite-me.it.com/v3/ivan-maria` |
| v4 | `v4-sasha-kate` | `invite-me.it.com/v4/sasha-kate` |

> Slug — лише латиниця та дефіс, наприклад: `anya-vlad`, `petro-oksana`
