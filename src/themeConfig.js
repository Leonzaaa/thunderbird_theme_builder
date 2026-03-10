export default {
    color_scheme: {
        // Brand & Accent (Dark Blue)
        brand:           '#F40B17',
        brand_hover:     '#DC0A15',
        accent:          '#4995FF',   // lazurit_400 — light blue
        accent_hover:    '#1662CC',   // lazurit_600

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

        // Lazurit (акцентный синий) — без 400/500 (дублируют accent)
        lazurit_100:     '#D2E5FF',
        lazurit_150:     '#BBD8FF',
        lazurit_200:     '#A4CAFF',
        lazurit_300:     '#77B0FF',
        lazurit_700:     '#114A99',
        lazurit_800:     '#0B3166',
        lazurit_900:     '#08254C',
        lazurit_950:     '#061933',

        // Emerald (success)
        emerald_100:     '#D4F2E8',
        emerald_300:     '#7DD9BA',
        emerald_500:     '#26BF8C',
        emerald_600:     '#1E9970',
        emerald_700:     '#177354',
        emerald_800:     '#0F4C38',
        emerald_900:     '#0B392A',

        // Ruby (critical)
        ruby_100:        '#FCD6DD',
        ruby_300:        '#F7839A',
        ruby_500:        '#F23057',
        ruby_600:        '#C22646',
        ruby_700:        '#911D34',
        ruby_800:        '#611323',
        ruby_900:        '#490E1A',

        // Amber (warning)
        amber_100:       '#FFE8D3',
        amber_300:       '#FEBB7A',
        amber_500:       '#FE8E21',
        amber_600:       '#CB721A',
        amber_700:       '#985514',
        amber_800:       '#66390D',
        amber_900:       '#4C2B0A',

        // Kyanite (голубой)
        kyanite_500:     '#00AAFF',
        kyanite_600:     '#0088CC',

        // Jade (зелёный)
        jade_500:        '#29A33D',
        jade_600:        '#218231',

        // Coral
        coral_500:       '#FF7E70',
        coral_600:       '#CC655A',

        // Aquamarine (бирюзовый)
        aquamarine_500:  '#00C2CC',
        aquamarine_600:  '#009BA3',

        // Tanzanite (фиолетовый)
        tanzanite_500:   '#7551E0',
        tanzanite_600:   '#5E41B4',

        // Amethyst
        amethyst_500:    '#A35FE3',

        // Rubellite
        rubellite_500:   '#C951E0',

        // Transparent
        black_transparent_5:  'rgba(28, 29, 33, 0.05)',
        black_transparent_10: 'rgba(28, 29, 33, 0.10)',
        black_transparent_15: 'rgba(28, 29, 33, 0.15)',
        black_transparent_20: 'rgba(28, 29, 33, 0.20)',
        black_transparent_70: 'rgba(28, 29, 33, 0.70)',
        white_transparent_5:  'rgba(252, 252, 252, 0.05)',
        white_transparent_10: 'rgba(252, 252, 252, 0.10)',
    },

    theme_colors: {
        // Окно
        frame:                        'primary',            // #1C1D21
        frame_inactive:               'primary',            // #1C1D21

        // Вкладки
        tab_background_text:          'white',              // #FCFCFC
        tab_background_separator:     'onyx_700',           // #4A5057
        tab_line:                     'accent',             // #4995FF
        tab_loading:                  'accent',             // #4995FF
        tab_selected:                 'onyx_900',          // #25282B
        tab_text:                     'white',              // #FCFCFC

        // Тулбар
        toolbar:                      'onyx_950',          // #191B1D
        toolbar_text:                 'white',              // #FCFCFC
        toolbar_top_separator:        'onyx_800',          // #32353A
        toolbar_bottom_separator:     'onyx_800',          // #32353A
        toolbar_vertical_separator:    'onyx_800',          // #32353A

        // Поля ввода
        toolbar_field:                'onyx_900',          // #25282B
        toolbar_field_text:           'white',              // #FCFCFC
        toolbar_field_border:         'onyx_700',           // #4A5057
        toolbar_field_focus:          'onyx_800',          // #32353A
        toolbar_field_text_focus:     'white',              // #FCFCFC
        toolbar_field_border_focus:   'accent',             // #4995FF
        toolbar_field_highlight:      'accent',             // #4995FF
        toolbar_field_highlight_text: 'white',              // #FCFCFC

        // Кнопки
        button_background_active:     'onyx_700',           // #4A5057
        button_background_hover:      'onyx_800',           // #32353A

        // Иконки
        icons:                        'onyx_300',           // #B0B6BD
        icons_attention:              'accent',             // #4995FF

        // Боковая панель
        sidebar:                      'primary',            // #1C1D21
        sidebar_text:                 'white',              // #FCFCFC
        sidebar_border:               'onyx_800',          // #32353A
        sidebar_highlight:            'lazurit_950',       // #061933
        sidebar_highlight_text:       'white',              // #FCFCFC
        sidebar_highlight_border:     'accent',             // #4995FF

        // Всплывающие меню
        popup:                        'onyx_900',          // #25282B
        popup_text:                   'white',              // #FCFCFC
        popup_border:                 'onyx_700',           // #4A5057
        popup_highlight:              'lazurit_950',       // #061933
        popup_highlight_text:        'white',              // #FCFCFC
    },

    theme_experiment_colors: {
        // Основные акценты
        '--primary':                               'accent',             // #4995FF
        '--primary-color':                         'accent',             // #4995FF
        '--button-primary-text-color':             'white',              // #FCFCFC
        '--button-primary-border-color':           'accent',             // #4995FF
        '--button-primary-background-color':       'accent',             // #4995FF
        '--button-primary-hover-background-color': 'accent_hover',      // #77B0FF

        // Фоны
        '--layout-background-0': 'primary',            // #1C1D21
        '--layout-background-1': 'onyx_950',          // #191B1D
        '--layout-background-2': 'onyx_900',          // #25282B
        '--layout-color-1':      'white',              // #FCFCFC
        '--bg-color':            'primary',            // #1C1D21

        // Список писем
        '--tree-view-bg':                     'primary',            // #1C1D21
        '--tree-view-header-hover-bg':        'onyx_950',          // #191B1D
        '--tree-view-header-hover-active-bg': 'onyx_900',          // #25282B

        '--new-folder-color': 'accent',             // #4995FF

        // Боковая панель иконок
        '--spaces-bg-color':                 'primary',            // #1C1D21
        '--spaces-button-active-text-color': 'white',              // #FCFCFC
        '--spaces-button-active-bg-color':   'accent',             // #4995FF

        // Иконки папок
        '--folder-color-inbox':         'accent',             // #4995FF
        '--folder-color-draft':         'amber_500',          // #FE8E21
        '--folder-color-sent':          'aquamarine_500',     // #00C2CC
        '--folder-color-archive':       'onyx_400',           // #969DA7
        '--folder-color-spam':          'ruby_500',           // #F23057
        '--folder-color-trash':         'onyx_500',           // #7C8591
        '--folder-color-template':      'amber_300',          // #FEBB7A
        '--folder-color-newsletter':    'emerald_500',        // #26BF8C
        '--folder-color-rss':           'amber_600',          // #CB721A
        '--folder-color-outbox':        'accent',             // #4995FF
        '--folder-color-folder':        'accent',             // #4995FF
        '--folder-color-folder-filter': 'tanzanite_500',      // #7551E0
        '--folder-color-folder-rss':    'amber_700',          // #985514

        // Бейджи непрочитанных
        '--folderpane-unread-new-count-background': 'accent',             // #4995FF
        '--folderpane-unread-count-text':           'white',              // #FCFCFC
        '--folderpane-unread-count-background':     'onyx_700',           // #4A5057

        // Иконки в списке писем
        '--thread-pane-flag-fill':     'amber_500',           // #FE8E21
        '--thread-pane-flag-stroke':   'amber_600',           // #CB721A
        '--thread-pane-spam-fill':     'ruby_300',            // #F7839A
        '--thread-pane-spam-stroke':   'ruby_500',           // #F23057
        '--thread-pane-unread-fill':   'accent',              // #4995FF
        '--thread-pane-unread-stroke': 'accent_hover',        // #77B0FF

        // Управление аккаунтом
        '--accounts-bg-color':             'primary',            // #1C1D21
        '--button-hover-background-color': 'onyx_800',          // #32353A
        '--primary-color-hover':           'accent_hover',      // #77B0FF
        '--btn-bg':                        'onyx_900',          // #25282B
        '--btn-bg-hover':                  'onyx_800',          // #32353A

        // Календарь
        '--viewHighlightBorderColor':     'accent',             // #4995FF
        '--viewDayBoxSelectedBackground': 'lazurit_950',       // #061933
        '--viewTodayLabelColor':          'white',              // #FCFCFC
        '--viewTodayLabelBackground':     'accent',             // #4995FF
    },
};
