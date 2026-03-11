# DIT System Light для Thunderbird

Светлая тема `system-light` для Mozilla Thunderbird в стиле ДИТ. Включает полную цветовую палитру, 42 кастомные SVG-иконки и стилизацию календаря.

## Быстрый старт

```bash
npm install
node scripts/prepare-icons.js
npm run build
```

Готовая тема: `build/dit-system-light-thunderbird.xpi`

## Структура проекта

```text
src/
  themeConfig.js          — цветовая палитра и привязка к элементам интерфейса
  themeCustomStyles.scss  — CSS-правила, включая переопределение иконок
  build.js                — скрипт сборки
  assets/
    icon.png              — иконка темы в менеджере дополнений
    folder-*.svg          — иконки папок (11 шт.)
    toolbar-*.svg         — иконки тулбара (14 шт.)
    spaces-*.svg          — иконки Spaces-панели (6 шт.)
    thread-*.svg          — иконки списка писем (6 шт.)
    tab-*.svg             — иконки вкладок (5 шт.)
scripts/
  prepare-icons.js        — подготовка SVG-иконок из resources/
resources/
  *.svg                   — исходные иконки DIT Design System (~550 шт.)
build/
  dit-system-light-thunderbird.xpi — собранная тема (после build)
```

## Как редактировать цветовую схему

### 1. Определите цвета

Откройте `src/themeConfig.js`. Все цвета находятся в `color_scheme`:

```javascript
color_scheme: {
    primary:         '#1C1D21',
    white:           '#FCFCFC',
    onyx_25:         '#F8F9F9',
    kyanite_500:     '#00AAFF',
    // ...
}
```

### 2. Привяжите цвета к элементам интерфейса

В `theme_colors` назначьте имена цветов элементам Thunderbird:

```javascript
theme_colors: {
    frame:    'white',           // #FCFCFC  — фон заголовка окна
    tab_line: 'onyx_100',       // #E5E7E9  — линия активной вкладки
    sidebar:  'white',          // #FCFCFC  — фон дерева папок
    // ...
}
```

В `theme_experiment_colors` переопределяются CSS-переменные Thunderbird для более глубокой кастомизации (цвета иконок папок, бейджи, календарь и т.д.).

### 3. Кастомные стили (опционально)

Редактируйте `src/themeCustomStyles.scss` для CSS-правил, выходящих за рамки цветового маппинга — скроллбары, эффекты при наведении на ссылки, стилизация непрочитанных писем и т.д.

### 4. Кастомные иконки

Тема полностью заменяет стандартные иконки Thunderbird на кастомные из набора DIT Design System. Иконки покрывают 6 областей интерфейса:

| Группа | Количество | Область UI |
|--------|-----------|------------|
| Folder pane | 11 | Входящие, Отправленные, Черновики, Архив, Корзина, Спам, Шаблоны, Исходящие, Папка, RSS, Фильтр |
| Toolbar | 14 | Получить почту, Написать, Ответить, Ответить всем, Переслать, Удалить, Архив, Спам, Тег, Печать, Переместить, Назад, Вперёд, Поиск |
| Spaces toolbar | 6 | Почта, Адресная книга, Календарь, Задачи, Чат, Настройки |
| Thread pane | 4 | Звёздочка, Вложение, Спам, Непрочитанное |
| Tab favicons | 5 | Почта, Календарь, Задачи, Чат, Дополнения |
| Reply/Forward | 2 | Индикатор ответа, Индикатор пересылки |

**Итого: 42 кастомные иконки.**

#### Как работает подготовка иконок

Исходные SVG-иконки (24x24, `fill="black"`) лежат в `resources/`. Скрипт `scripts/prepare-icons.js` берёт нужные иконки, заменяет цвет заливки на подходящий для текущей темы и копирует в `src/assets/` с правильными именами.

Для **светлой** темы цвет заливки: `#636A74` (onyx_600 из палитры).
Для **тёмной** темы цвет заливки: `#FCFCFC` (white из палитры).

#### Шаг 1. Подготовьте иконки

```bash
node scripts/prepare-icons.js
```

Скрипт создаёт 42 SVG-файла в `src/assets/`:

```text
src/assets/
  folder-inbox.svg        # Folder pane
  folder-sent.svg
  folder-draft.svg
  folder-archive.svg
  folder-trash.svg
  folder-spam.svg
  folder-template.svg
  folder-outbox.svg
  folder-folder.svg
  folder-rss.svg
  folder-filter.svg
  toolbar-getmsg.svg      # Unified Toolbar
  toolbar-newmsg.svg
  toolbar-reply.svg
  toolbar-replyall.svg
  toolbar-forward.svg
  toolbar-delete.svg
  toolbar-archive.svg
  toolbar-junk.svg
  toolbar-tag.svg
  toolbar-print.svg
  toolbar-move.svg
  toolbar-goback.svg
  toolbar-goforward.svg
  toolbar-search.svg
  spaces-mail.svg         # Spaces toolbar
  spaces-addressbook.svg
  spaces-calendar.svg
  spaces-tasks.svg
  spaces-chat.svg
  spaces-settings.svg
  thread-star.svg         # Thread pane
  thread-attachment.svg
  thread-junk.svg
  thread-unread.svg
  tab-mail.svg            # Tab favicons
  tab-calendar.svg
  tab-tasks.svg
  tab-addons.svg
  tab-chat.svg
  thread-replied.svg      # Reply/Forward indicators
  thread-forwarded.svg
  icon.png                # Theme icon (добавляется вручную)
```

#### Шаг 2. Соберите тему

```bash
npm run build
```

Все файлы из `src/assets/` попадают в корень XPI. CSS-правила в `themeCustomStyles.scss` ссылаются на них по имени: `url('folder-inbox.svg')`.

#### Маппинг: resources → src/assets

Скрипт `scripts/prepare-icons.js` содержит полный маппинг исходных иконок на целевые файлы. Чтобы **заменить** какую-то иконку на другую из набора:

1. Откройте `scripts/prepare-icons.js`
2. Найдите нужную строку, например: `'folder-inbox.svg': 'directbox-receive_icon.svg'`
3. Замените исходный файл на другой из `resources/`
4. Запустите `node scripts/prepare-icons.js` заново
5. Пересоберите: `npm run build`

#### CSS-селекторы (TB 115+ Supernova)

Тема использует актуальные CSS-селекторы для Thunderbird 115+:

**Folder pane:**
```css
#folderTree li[data-folder-type="inbox"] > .container > .icon { content: url('folder-inbox.svg') !important; }
```

**Unified Toolbar:**
```css
#button-getmsg { list-style-image: url('toolbar-getmsg.svg') !important; }
```

**Spaces toolbar:**
```css
#mailButton img { content: url('spaces-mail.svg') !important; }
```

**Tab favicons:**
```css
.tab-icon-image[src*="messenger"] { content: url('tab-mail.svg') !important; }
```

**Thread pane:**
```css
.tree-view-row-flag img { content: url('thread-star.svg') !important; }
```

Полный набор правил — в `src/themeCustomStyles.scss`.

#### Как найти CSS-селектор для нового элемента

1. Откройте Thunderbird
2. Нажмите `Ctrl+Shift+I` — откроется Developer Toolbox
3. Используйте инспектор (кнопка "Pick an element") — кликните на иконку
4. В панели справа увидите CSS-класс и текущий `content` / `list-style-image`
5. Добавьте правило в `themeCustomStyles.scss`

#### Фоновое изображение заголовка окна

Отдельный случай — фон шапки окна. Его можно задать прямо в `src/themeConfig.js`, добавив секцию `images`:

```javascript
export default {
    color_scheme: { ... },
    theme_colors: { ... },
    theme_experiment_colors: { ... },
    images: {
        theme_frame: 'theme-frame.png',
    },
};
```

Файл `theme-frame.png` должен лежать в `src/assets/`.

## Сборка

```bash
npm run build
```

Результат: `build/dit-system-light-thunderbird.xpi`

## Установка в Thunderbird

### Из файла

1. Откройте Thunderbird
2. Перейдите в **Настройки** > **Дополнения и темы** (`Ctrl+Shift+A`)
3. Нажмите шестерёнку > **Установить дополнение из файла...**
4. Выберите `build/dit-system-light-thunderbird.xpi`

### Для разработки (быстрая перезагрузка)

1. Откройте Thunderbird
2. Перейдите в **Инструменты** > **Средства разработки** > **Отладка дополнений** (или введите `about:debugging` в адресной строке)
3. Нажмите **Загрузить временное дополнение** > выберите `build/dit-system-light-thunderbird.xpi`
4. После правок запустите `npm run build` и нажмите **Перезагрузить** в about:debugging

## Полезные инструменты Thunderbird

- **Developer Toolbox** (`Ctrl+Shift+I` в Thunderbird) — инспектор элементов интерфейса для поиска CSS-селекторов
- **about:config** — расширенные настройки Thunderbird
- **about:debugging** — управление временными дополнениями

## Лицензия

MIT
