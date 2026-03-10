# DIT System Light для Thunderbird

Заготовка темы `system-light` для Mozilla Thunderbird в стиле ДИТ. Названия и описания подготовлены, палитру и набор иконок можно добавить позже.

## Быстрый старт

```bash
npm install
npm run build
```

Готовая тема: `build/dit-system-light-thunderbird.xpi`

## Структура проекта

```text
src/
  themeConfig.js          — цветовая палитра и привязка к элементам интерфейса
  themeCustomStyles.scss  — дополнительные CSS-правила
  build.js                — скрипт сборки
build/
  dit-system-light-thunderbird.xpi — собранная тема (после build)
```

## Как редактировать цветовую схему

### 1. Определите цвета

Откройте `src/themeConfig.js`. Все цвета находятся в `color_scheme`:

```javascript
color_scheme: {
    mts_red:       '#ED1C24',
    bg_deep:       '#121214',
    bg_surface:    '#1C1C1E',
    text_primary:  '#F5F5F7',
    // ...
}
```

### 2. Привяжите цвета к элементам интерфейса

В `theme_colors` назначьте имена цветов элементам Thunderbird:

```javascript
theme_colors: {
    frame:    'bg_deep',       // #121214  — фон заголовка окна
    tab_line: 'mts_red',      // #ED1C24  — линия-акцент активной вкладки
    sidebar:  'bg_deep',      // #121214  — фон дерева папок
    // ...
}
```

В `theme_experiment_colors` переопределяются CSS-переменные Thunderbird для более глубокой кастомизации (цвета иконок папок, бейджи, календарь и т.д.).

### 3. Кастомные стили (опционально)

Редактируйте `src/themeCustomStyles.scss` для CSS-правил, выходящих за рамки цветового маппинга — скроллбары, эффекты при наведении на ссылки, стилизация непрочитанных писем и т.д.

### 4. Кастомные иконки (опционально)

По умолчанию тема перекрашивает стандартные иконки Thunderbird через цвета в `theme_experiment_colors` (например `--folder-color-inbox`, `--folder-color-trash` и т.д.). Этого достаточно для большинства случаев.

Но если вы хотите **полностью заменить иконки** на свои (другая форма, другой дизайн) — это тоже возможно.

#### Шаг 1. Создайте папку для ассетов

```text
src/
  assets/
    icon.png
    theme-frame.png
    folder-inbox.svg
    folder-draft.svg
    folder-sent.svg
    folder-archive.svg
    folder-spam.svg
    folder-trash.svg
    folder-template.svg
    folder-folder.svg
    ...
```

Рекомендуемый формат для иконок интерфейса — **SVG**. Для иконки дополнения в менеджере дополнений удобнее использовать `icon.png`. Для фоновых изображений шапки можно использовать PNG, JPEG, SVG или GIF.

Принятая в проекте схема имен:

- `icon.png` — иконка самой темы в менеджере дополнений Thunderbird (`manifest.icons`)
- `theme-frame.png` — необязательное изображение шапки окна для `images.theme_frame`
- `folder-*.svg` — кастомные иконки папок и системных разделов, которые потом подключаются через CSS

#### Шаг 2. Подключите папку ассетов в build.js

`src/build.js` уже настроен правильно:

```javascript
import { build } from 'thunderbird-theme-builder';
import theme from './themeConfig.js';

build(theme, { stylesPath: 'themeCustomStyles.scss', assetsDir: 'src/assets' });
```

При сборке все файлы из `src/assets/` копируются в корень темы и доступны по имени файла. Это соответствует документации `thunderbird-theme-builder`: ресурсы из `assetsDir` упаковываются в `.xpi`, а в `theme` и CSS используются относительные пути от корня расширения.

Если в `src/assets/` появится `icon.png`, сборка автоматически зарегистрирует его в `manifest.icons`. Если файла пока нет, сборка пройдет без ошибки.

#### Шаг 3. Переопределите иконки через CSS

В `src/themeCustomStyles.scss` укажите, какие иконки заменить. Ссылайтесь на файлы просто по имени (без пути), т.к. при сборке они попадают в корень.

Можно заменять только часть иконок: добавляйте CSS-правила только для тех файлов, которые реально подготовлены. Остальные иконки Thunderbird останутся стандартными.

```scss
td.folder-icon-inbox img {
    content: url('folder-inbox.svg') !important;
}
td.folder-icon-draft img {
    content: url('folder-draft.svg') !important;
}
td.folder-icon-sent img {
    content: url('folder-sent.svg') !important;
}
td.folder-icon-archive img {
    content: url('folder-archive.svg') !important;
}
td.folder-icon-spam img {
    content: url('folder-spam.svg') !important;
}
td.folder-icon-trash img {
    content: url('folder-trash.svg') !important;
}
```

#### Шаг 4. Как найти нужный CSS-селектор

У каждого элемента интерфейса Thunderbird свой CSS-класс. Чтобы его узнать:

1. Откройте Thunderbird
2. Нажмите `Ctrl+Shift+I` — откроется Developer Toolbox
3. Используйте инспектор (кнопка "Pick an element") — кликните на иконку, которую хотите заменить
4. В панели справа увидите CSS-класс и текущий `background-image` / `content`
5. Скопируйте селектор и переопределите его в `themeCustomStyles.scss`

#### Шаг 5. Соберите и проверьте

```bash
npm run build
```

Никаких дополнительных настроек в Thunderbird не нужно — иконки, стили и цвета упаковываются в один `.xpi` файл и применяются автоматически при установке темы. Всё идёт из коробки.

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

## Палитра цветов

Палитра для `system-light` будет добавлена позже, после подготовки финальных цветов.

## Лицензия

MIT
