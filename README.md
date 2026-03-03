# DIT 2026 для Thunderbird

Тёмная тема для Mozilla Thunderbird в фирменном стиле ДИТ 2026.


## Быстрый старт

```bash
npm install
npm run build
```

Готовая тема: `build/mts-thunderbird.xpi`

## Структура проекта

```
src/
  themeConfig.js          — цветовая палитра и привязка к элементам интерфейса
  themeCustomStyles.scss  — дополнительные CSS-правила
  build.js                — скрипт сборки
build/
  mts-thunderbird.xpi     — собранная тема (после build)
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

```
src/
  assets/
    inbox.svg
    sent.svg
    trash.svg
    ...
```

Рекомендуемый формат — **SVG** (масштабируется без потерь). PNG тоже подойдёт.

#### Шаг 2. Подключите папку ассетов в build.js

Откройте `src/build.js` и добавьте `assetsDir`:

```javascript
import { build } from 'thunderbird-theme-builder';
import theme from './themeConfig.js';

build(theme, { stylesPath: 'themeCustomStyles.scss', assetsDir: 'src/assets' });
```

После этого при сборке все файлы из `src/assets/` будут скопированы в корень темы и доступны по имени файла.

#### Шаг 3. Переопределите иконки через CSS

В `src/themeCustomStyles.scss` укажите, какие иконки заменить. Ссылайтесь на файлы просто по имени (без пути), т.к. при сборке они попадают в корень:

```scss
td.folder-icon-inbox img {
    content: url('inbox.svg') !important;
}
td.folder-icon-sent img {
    content: url('sent.svg') !important;
}
td.folder-icon-trash img {
    content: url('trash.svg') !important;
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
        theme_frame: 'header-bg.png',
    },
};
```

Файл `header-bg.png` должен лежать в `src/assets/`.

## Сборка

```bash
npm run build
```

Результат: `build/mts-thunderbird.xpi`

## Установка в Thunderbird

### Из файла

1. Откройте Thunderbird
2. Перейдите в **Настройки** > **Дополнения и темы** (`Ctrl+Shift+A`)
3. Нажмите шестерёнку > **Установить дополнение из файла...**
4. Выберите `build/mts-thunderbird.xpi`

### Для разработки (быстрая перезагрузка)

1. Откройте Thunderbird
2. Перейдите в **Инструменты** > **Средства разработки** > **Отладка дополнений** (или введите `about:debugging` в адресной строке)
3. Нажмите **Загрузить временное дополнение** > выберите `build/mts-thunderbird.xpi`
4. После правок запустите `npm run build` и нажмите **Перезагрузить** в about:debugging

## Полезные инструменты Thunderbird

- **Developer Toolbox** (`Ctrl+Shift+I` в Thunderbird) — инспектор элементов интерфейса для поиска CSS-селекторов
- **about:config** — расширенные настройки Thunderbird
- **about:debugging** — управление временными дополнениями

## Палитра цветов

| Имя            | HEX       | Где используется                              |
|----------------|-----------|-----------------------------------------------|
| MTS Red        | `#ED1C24` | Основной акцент, вкладки, кнопки, Входящие    |
| MTS Red Dark   | `#BF1118` | Hover на кнопках, тёмный акцент               |
| MTS Red Light  | `#FF4D54` | Спам, фильтры, загрузка вкладок               |
| Coral          | `#F68B86` | Иконки обычных папок                          |
| Blush          | `#FDE5DD` | Запасной светлый акцент                       |
| Blue           | `#0A84FF` | Исходящие, ссылки                             |
| Green          | `#30D158` | Рассылки                                      |
| Orange         | `#FF9F0A` | Черновики, RSS                                |
| Yellow         | `#FFD60A` | Избранные, шаблоны                            |
| Teal           | `#64D2FF` | Отправленные                                  |
| BG Deep        | `#121214` | Глубокий фон — рамка, боковая панель          |
| BG Surface     | `#1C1C1E` | Основной фон — тулбар, список писем           |
| BG Card        | `#2C2C2E` | Карточки — поля ввода, выделение              |
| BG Elevated    | `#3A3A3C` | Приподнятые элементы — рамки полей, кнопки    |
| Text Primary   | `#F5F5F7` | Основной текст                                |
| Text Secondary | `#A1A1A6` | Второстепенный текст, архив                   |
| Text Muted     | `#636366` | Приглушённый текст, корзина                   |

## Лицензия

MIT
