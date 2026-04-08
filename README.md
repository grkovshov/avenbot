# AvenBot Docs

Документация для AvenBot — ИИ-ассистента для бизнеса. Сайт построен на [Docusaurus 3](https://docusaurus.io/) и по структуре полностью повторяет документацию OldboyBot.

## Установка

```bash
npm install
```

## Локальный запуск

```bash
npm run start
```

Команда запускает локальный dev-сервер и открывает браузер. Большинство изменений подхватывается на лету без перезагрузки.

## Сборка

```bash
npm run build
```

Команда генерирует статический контент в каталог `build`. Его можно задеплоить на любой статический хостинг.

## Деплой

С использованием SSH:

```bash
USE_SSH=true npm run deploy
```

Без SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

При использовании GitHub Pages эта команда соберёт сайт и запушит его в ветку `gh-pages`.

## Структура

```
aven-docs/
├── docs/                  # markdown-страницы документации
│   ├── intro.md           # «Начало работы»
│   ├── yclients.md        # Подключение к YClients
│   ├── assistant.md       # Создание ассистента
│   ├── notifications.md   # Настройка уведомлений
│   ├── telegram-setup.md  # Подключение Telegram
│   ├── max.md             # Подключение Max
│   ├── whatsapp.md        # Подключение WhatsApp
│   ├── chats.md           # Мониторинг чатов
│   ├── telegram.md        # Telegram бот + Business
│   ├── telegram-notifications.md # Уведомления в Telegram
│   └── assets/            # картинки для документации
├── src/css/custom.css     # фирменные стили AVEN
├── static/img/            # логотип, favicon, soc-карточка
├── docusaurus.config.js   # основная конфигурация
├── sidebars.js            # структура бокового меню
└── package.json
```

## Добавление новой страницы

1. Создайте файл `docs/<name>.md` с frontmatter:
   ```md
   ---
   sidebar_position: 11
   ---

   # Заголовок страницы
   ```
2. Добавьте id страницы в `sidebars.js` в нужной категории.
3. Положите картинки в `docs/assets/aven/` и ссылайтесь на них как `![](assets/aven/имя.png)`.
