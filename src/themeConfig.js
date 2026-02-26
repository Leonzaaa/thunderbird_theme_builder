export default {
    color_scheme: {
        // Brand & Accent
        brand:           '#F40B17',
        brand_hover:     '#DC0A15',
        accent:          '#0D50F2',
        accent_hover:    '#0C48DA',

        // Brand (Black)
        primary:         '#1C1D21',
        on_primary:      '#191A1E',

        // White
        white:           '#FCFCFC',

        // Onyx (серая шкала)
        onyx_25:         '#F8F9F9',
        onyx_50:         '#F2F3F4',
        onyx_100:        '#E5E7E9',
        onyx_150:        '#D8DBDE',
        onyx_200:        '#CBCED3',
        onyx_300:        '#B0B6BD',
        onyx_400:        '#969DA7',
        onyx_500:        '#7C8591',
        onyx_600:        '#636A74',
        onyx_700:        '#4A5057',
        onyx_800:        '#32353A',
        onyx_900:        '#25282B',
        onyx_950:        '#191B1D',

        // Lazurit (синий)
        lazurit_400:     '#4995FF',
        lazurit_500:     '#1C7BFF',

        // Ruby (красный — основной акцент в этой теме)
        ruby_100:        '#FCD6DD',
        ruby_300:        '#F7839A',
        ruby_500:        '#F23057',
        ruby_600:        '#C22646',

        // Coral
        coral_100:       '#FFE5E2',
        coral_300:       '#FFB2A9',
        coral_500:       '#FF7E70',

        // Emerald (success)
        emerald_500:     '#26BF8C',

        // Amber (warning)
        amber_300:       '#FEBB7A',
        amber_500:       '#FE8E21',
        amber_600:       '#CB721A',
        amber_700:       '#985514',

        // Kyanite (голубой)
        kyanite_500:     '#00AAFF',

        // Aquamarine (бирюзовый)
        aquamarine_500:  '#00C2CC',

        // Tanzanite (фиолетовый)
        tanzanite_500:   '#7551E0',
    },

    theme_colors: {
        // Окно — светлый фон
        frame:                        'white',              // #FCFCFC
        frame_inactive:               'white',              // #FCFCFC

        // Вкладки
        tab_background_text:          'primary',            // #1C1D21
        tab_background_separator:     'onyx_150',           // #D8DBDE
        tab_line:                     'brand',              // #F40B17
        tab_loading:                  'coral_500',          // #FF7E70
        tab_selected:                 'white',              // #FCFCFC
        tab_text:                     'primary',            // #1C1D21

        // Тулбар
        toolbar:                      'onyx_25',            // #F8F9F9
        toolbar_text:                 'primary',            // #1C1D21
        toolbar_top_separator:        'onyx_150',           // #D8DBDE
        toolbar_bottom_separator:     'onyx_150',           // #D8DBDE
        toolbar_vertical_separator:   'onyx_150',           // #D8DBDE

        // Поля ввода
        toolbar_field:                'onyx_50',            // #F2F3F4
        toolbar_field_text:           'primary',            // #1C1D21
        toolbar_field_border:         'onyx_150',           // #D8DBDE
        toolbar_field_focus:          'white',              // #FCFCFC
        toolbar_field_text_focus:     'primary',            // #1C1D21
        toolbar_field_border_focus:   'brand',              // #F40B17
        toolbar_field_highlight:      'brand',              // #F40B17
        toolbar_field_highlight_text: 'white',              // #FCFCFC

        // Кнопки
        button_background_active:     'onyx_100',           // #E5E7E9
        button_background_hover:      'onyx_50',            // #F2F3F4

        // Иконки
        icons:                        'onyx_600',           // #636A74
        icons_attention:              'brand',              // #F40B17

        // Боковая панель
        sidebar:                      'white',              // #FCFCFC
        sidebar_text:                 'primary',            // #1C1D21
        sidebar_border:               'onyx_150',           // #D8DBDE
        sidebar_highlight:            'ruby_100',           // #FCD6DD
        sidebar_highlight_text:       'primary',            // #1C1D21
        sidebar_highlight_border:     'brand',              // #F40B17

        // Всплывающие меню
        popup:                        'white',              // #FCFCFC
        popup_text:                   'primary',            // #1C1D21
        popup_border:                 'onyx_150',           // #D8DBDE
        popup_highlight:              'ruby_100',           // #FCD6DD
        popup_highlight_text:         'primary',            // #1C1D21
    },

    theme_experiment_colors: {
        // Основные акценты — красный Brand
        '--primary':                               'brand',              // #F40B17
        '--primary-color':                         'brand',              // #F40B17
        '--button-primary-text-color':             'white',              // #FCFCFC
        '--button-primary-border-color':           'brand',              // #F40B17
        '--button-primary-background-color':       'brand',              // #F40B17
        '--button-primary-hover-background-color': 'brand_hover',       // #DC0A15

        // Фоны
        '--layout-background-0': 'white',              // #FCFCFC
        '--layout-background-1': 'onyx_25',            // #F8F9F9
        '--layout-background-2': 'onyx_50',            // #F2F3F4
        '--layout-color-1':      'primary',            // #1C1D21
        '--bg-color':            'white',              // #FCFCFC

        // Список писем
        '--tree-view-bg':                     'white',              // #FCFCFC
        '--tree-view-header-hover-bg':        'onyx_50',            // #F2F3F4
        '--tree-view-header-hover-active-bg': 'onyx_100',           // #E5E7E9

        '--new-folder-color': 'brand',              // #F40B17

        // Боковая панель иконок
        '--spaces-bg-color':                 'white',              // #FCFCFC
        '--spaces-button-active-text-color': 'white',              // #FCFCFC
        '--spaces-button-active-bg-color':   'brand',              // #F40B17

        // Иконки папок
        '--folder-color-inbox':         'brand',              // #F40B17
        '--folder-color-draft':         'amber_500',          // #FE8E21
        '--folder-color-sent':          'aquamarine_500',     // #00C2CC
        '--folder-color-archive':       'onyx_400',           // #969DA7
        '--folder-color-spam':          'ruby_500',           // #F23057
        '--folder-color-trash':         'onyx_500',           // #7C8591
        '--folder-color-template':      'amber_300',          // #FEBB7A
        '--folder-color-newsletter':    'emerald_500',        // #26BF8C
        '--folder-color-rss':           'amber_600',          // #CB721A
        '--folder-color-outbox':        'lazurit_500',        // #1C7BFF
        '--folder-color-folder':        'coral_500',          // #FF7E70
        '--folder-color-folder-filter': 'tanzanite_500',      // #7551E0
        '--folder-color-folder-rss':    'amber_700',          // #985514

        // Бейджи непрочитанных
        '--folderpane-unread-new-count-background': 'brand',              // #F40B17
        '--folderpane-unread-count-text':           'white',              // #FCFCFC
        '--folderpane-unread-count-background':     'onyx_200',           // #CBCED3

        // Иконки в списке писем
        '--thread-pane-flag-fill':     'amber_500',           // #FE8E21
        '--thread-pane-flag-stroke':   'amber_600',           // #CB721A
        '--thread-pane-spam-fill':     'ruby_300',            // #F7839A
        '--thread-pane-spam-stroke':   'ruby_500',            // #F23057
        '--thread-pane-unread-fill':   'brand',               // #F40B17
        '--thread-pane-unread-stroke': 'brand_hover',         // #DC0A15

        // Управление аккаунтом
        '--accounts-bg-color':             'white',              // #FCFCFC
        '--button-hover-background-color': 'onyx_50',            // #F2F3F4
        '--primary-color-hover':           'brand_hover',        // #DC0A15
        '--btn-bg':                        'onyx_50',            // #F2F3F4
        '--btn-bg-hover':                  'onyx_100',           // #E5E7E9

        // Календарь
        '--viewHighlightBorderColor':     'brand',              // #F40B17
        '--viewDayBoxSelectedBackground': 'ruby_100',           // #FCD6DD
        '--viewTodayLabelColor':          'white',              // #FCFCFC
        '--viewTodayLabelBackground':     'brand',              // #F40B17
    },
};
