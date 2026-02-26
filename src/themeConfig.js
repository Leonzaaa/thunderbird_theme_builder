export default {
    color_scheme: {
        // Brand & Accent
        brand:           '#F40B17',
        brand_hover:     '#DC0A15',

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
        lazurit_500:     '#1C7BFF',

        // Ruby (красный)
        ruby_300:        '#F7839A',
        ruby_500:        '#F23057',
        ruby_600:        '#C22646',
        ruby_800:        '#611323',

        // Coral
        coral_500:       '#FF7E70',

        // Emerald (success)
        emerald_500:     '#26BF8C',
        emerald_700:     '#177354',

        // Amber (warning)
        amber_300:       '#FEBB7A',
        amber_500:       '#FE8E21',
        amber_600:       '#CB721A',
        amber_700:       '#985514',

        // Aquamarine (бирюзовый)
        aquamarine_500:  '#00C2CC',

        // Tanzanite (фиолетовый)
        tanzanite_500:   '#7551E0',
    },

    theme_colors: {
        // Окно — тёмный фон (Surface/Background Dark = Onyx/950)
        frame:                        'onyx_950',           // #191B1D
        frame_inactive:               'onyx_950',           // #191B1D

        // Вкладки
        tab_background_text:          'onyx_300',           // #B0B6BD
        tab_background_separator:     'onyx_800',           // #32353A
        tab_line:                     'brand',              // #F40B17
        tab_loading:                  'coral_500',          // #FF7E70
        tab_selected:                 'onyx_900',           // #25282B
        tab_text:                     'white',              // #FCFCFC

        // Тулбар (Surface/Level-1 Dark = Onyx/900)
        toolbar:                      'onyx_900',           // #25282B
        toolbar_text:                 'white',              // #FCFCFC
        toolbar_top_separator:        'onyx_800',           // #32353A
        toolbar_bottom_separator:     'onyx_800',           // #32353A
        toolbar_vertical_separator:   'onyx_800',           // #32353A

        // Поля ввода (Fill/Input Dark = Onyx/950)
        toolbar_field:                'onyx_950',           // #191B1D
        toolbar_field_text:           'white',              // #FCFCFC
        toolbar_field_border:         'onyx_700',           // #4A5057
        toolbar_field_focus:          'onyx_900',           // #25282B
        toolbar_field_text_focus:     'white',              // #FCFCFC
        toolbar_field_border_focus:   'brand',              // #F40B17
        toolbar_field_highlight:      'brand',              // #F40B17
        toolbar_field_highlight_text: 'white',              // #FCFCFC

        // Кнопки
        button_background_active:     'onyx_700',           // #4A5057
        button_background_hover:      'onyx_800',           // #32353A

        // Иконки
        icons:                        'onyx_300',           // #B0B6BD
        icons_attention:              'brand',              // #F40B17

        // Боковая панель (Surface/Navigation Dark = Onyx/800)
        sidebar:                      'onyx_950',           // #191B1D
        sidebar_text:                 'white',              // #FCFCFC
        sidebar_border:               'onyx_800',           // #32353A
        sidebar_highlight:            'ruby_800',           // #611323
        sidebar_highlight_text:       'white',              // #FCFCFC
        sidebar_highlight_border:     'brand',              // #F40B17

        // Всплывающие меню (Overlay Dark = Onyx/950)
        popup:                        'onyx_900',           // #25282B
        popup_text:                   'white',              // #FCFCFC
        popup_border:                 'onyx_700',           // #4A5057
        popup_highlight:              'ruby_800',           // #611323
        popup_highlight_text:         'white',              // #FCFCFC
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
        '--layout-background-0': 'onyx_950',           // #191B1D
        '--layout-background-1': 'onyx_900',           // #25282B
        '--layout-background-2': 'onyx_800',           // #32353A
        '--layout-color-1':      'white',              // #FCFCFC
        '--bg-color':            'onyx_950',           // #191B1D

        // Список писем
        '--tree-view-bg':                     'onyx_950',           // #191B1D
        '--tree-view-header-hover-bg':        'onyx_800',           // #32353A
        '--tree-view-header-hover-active-bg': 'onyx_700',           // #4A5057

        '--new-folder-color': 'brand',              // #F40B17

        // Боковая панель иконок
        '--spaces-bg-color':                 'onyx_950',           // #191B1D
        '--spaces-button-active-text-color': 'white',              // #FCFCFC
        '--spaces-button-active-bg-color':   'brand',              // #F40B17

        // Иконки папок
        '--folder-color-inbox':         'brand',              // #F40B17
        '--folder-color-draft':         'amber_500',          // #FE8E21
        '--folder-color-sent':          'aquamarine_500',     // #00C2CC
        '--folder-color-archive':       'onyx_500',           // #7C8591
        '--folder-color-spam':          'ruby_500',           // #F23057
        '--folder-color-trash':         'onyx_600',           // #636A74
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
        '--folderpane-unread-count-background':     'onyx_700',           // #4A5057

        // Иконки в списке писем
        '--thread-pane-flag-fill':     'amber_500',           // #FE8E21
        '--thread-pane-flag-stroke':   'amber_600',           // #CB721A
        '--thread-pane-spam-fill':     'ruby_300',            // #F7839A
        '--thread-pane-spam-stroke':   'ruby_500',            // #F23057
        '--thread-pane-unread-fill':   'brand',               // #F40B17
        '--thread-pane-unread-stroke': 'brand_hover',         // #DC0A15

        // Управление аккаунтом
        '--accounts-bg-color':             'onyx_950',           // #191B1D
        '--button-hover-background-color': 'onyx_800',           // #32353A
        '--primary-color-hover':           'brand_hover',        // #DC0A15
        '--btn-bg':                        'onyx_800',           // #32353A
        '--btn-bg-hover':                  'onyx_700',           // #4A5057

        // Календарь
        '--viewHighlightBorderColor':     'brand',              // #F40B17
        '--viewDayBoxSelectedBackground': 'ruby_800',           // #611323
        '--viewTodayLabelColor':          'white',              // #FCFCFC
        '--viewTodayLabelBackground':     'brand',              // #F40B17
    },
};
