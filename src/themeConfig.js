export default {
    color_scheme: {
        // Brand (Black)
        primary:         '#1C1D21',

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

        // Kyanite (акцентный голубой)
        kyanite_500:     '#00AAFF',
        kyanite_600:     '#0088CC',
        kyanite_700:     '#006699',

        // Emerald (success)
        emerald_500:     '#26BF8C',

        // Ruby (critical)
        ruby_300:        '#F7839A',
        ruby_500:        '#F23057',

        // Amber (warning)
        amber_300:       '#FEBB7A',
        amber_500:       '#FE8E21',
        amber_600:       '#CB721A',
        amber_700:       '#985514',

        // Aquamarine (бирюзовый)
        aquamarine_500:  '#00C2CC',

        // Tanzanite (фиолетовый)
        tanzanite_500:   '#7551E0',

        // Transparent
        black_transparent_5:  'rgba(28, 29, 33, 0.05)',
        black_transparent_10: 'rgba(28, 29, 33, 0.10)',
        black_transparent_15: 'rgba(28, 29, 33, 0.15)',
        black_transparent_20: 'rgba(28, 29, 33, 0.20)',
        onyx_500_transparent_20: 'rgba(124, 133, 145, 0.20)',
    },

    theme_colors: {
        // Окно
        frame:                        'white',              // #FCFCFC
        frame_inactive:               'onyx_50',            // #F2F3F4

        // Вкладки
        tab_background_text:          'primary',            // #1C1D21
        tab_background_separator:     'kyanite_500',        // #00AAFF
        tab_line:                     'onyx_100',           // #E5E7E9
        tab_loading:                  'kyanite_500',        // #00AAFF
        tab_selected:                 'white',              // #FCFCFC
        tab_text:                     'primary',            // #1C1D21

        // Тулбар
        toolbar:                      'onyx_25',            // #F8F9F9
        toolbar_text:                 'primary',            // #1C1D21
        toolbar_top_separator:        'onyx_150',           // #D8DBDE
        toolbar_bottom_separator:     'onyx_150',           // #D8DBDE
        toolbar_vertical_separator:   'onyx_150',           // #D8DBDE

        // Поля ввода
        toolbar_field:                'white',              // #FCFCFC
        toolbar_field_text:           'primary',            // #1C1D21
        toolbar_field_border:         'onyx_150',           // #D8DBDE
        toolbar_field_focus:          'white',              // #FCFCFC
        toolbar_field_text_focus:     'primary',            // #1C1D21
        toolbar_field_border_focus:   'kyanite_500',        // #00AAFF
        toolbar_field_highlight:      'onyx_100',           // #E5E7E9
        toolbar_field_highlight_text: 'primary',            // #1C1D21

        // Кнопки
        button_background_active:     'onyx_500_transparent_20', // rgba(124, 133, 145, 0.20)
        button_background_hover:      'onyx_500_transparent_20', // rgba(124, 133, 145, 0.20)

        // Иконки
        icons:                        'onyx_600',           // #636A74
        icons_attention:              'kyanite_500',        // #00AAFF

        // Боковая панель
        sidebar:                      'white',              // #FCFCFC
        sidebar_text:                 'primary',            // #1C1D21
        sidebar_border:               'onyx_150',           // #D8DBDE
        sidebar_highlight:            'onyx_300',           // #B0B6BD
        sidebar_highlight_text:       'primary',            // #1C1D21
        sidebar_highlight_border:     'onyx_300',           // #B0B6BD

        // Всплывающие меню
        popup:                        'onyx_100',           // #E5E7E9
        popup_text:                   'primary',            // #1C1D21
        popup_border:                 'onyx_150',           // #D8DBDE
        popup_highlight:              'white',              // #FCFCFC
        popup_highlight_text:         'kyanite_500',        // #00AAFF
    },

    theme_experiment_colors: {
        // Основные акценты
        '--primary':                               'kyanite_500',        // #00AAFF
        '--primary-color':                         'kyanite_500',        // #00AAFF
        '--button-primary-text-color':             'white',              // #FCFCFC
        '--button-primary-border-color':           'kyanite_500',        // #00AAFF
        '--button-primary-background-color':       'kyanite_500',        // #00AAFF
        '--button-primary-hover-background-color': 'kyanite_700',        // #006699

        // Фоны
        '--layout-background-0': 'white',              // #FCFCFC
        '--layout-background-1': 'onyx_25',            // #F8F9F9
        '--layout-background-2': 'onyx_50',            // #F2F3F4
        '--layout-color-1':      'primary',            // #1C1D21
        '--bg-color':            'white',              // #FCFCFC

        // Список писем
        '--tree-view-bg':                     'white',              // #FCFCFC
        '--tree-view-header-hover-bg':        'onyx_25',            // #F8F9F9
        '--tree-view-header-hover-active-bg': 'onyx_50',            // #F2F3F4

        '--new-folder-color': 'kyanite_500',        // #00AAFF

        // Боковая панель иконок
        '--spaces-bg-color':                 'white',              // #FCFCFC
        '--spaces-button-active-text-color': 'white',              // #FCFCFC
        '--spaces-button-active-bg-color':   'kyanite_500',        // #00AAFF

        // Иконки папок
        '--folder-color-inbox':         'kyanite_500',        // #00AAFF
        '--folder-color-draft':         'amber_500',          // #FE8E21
        '--folder-color-sent':          'aquamarine_500',     // #00C2CC
        '--folder-color-archive':       'onyx_400',           // #969DA7
        '--folder-color-spam':          'ruby_500',           // #F23057
        '--folder-color-trash':         'onyx_500',           // #7C8591
        '--folder-color-template':      'amber_300',          // #FEBB7A
        '--folder-color-newsletter':    'emerald_500',        // #26BF8C
        '--folder-color-rss':           'amber_600',          // #CB721A
        '--folder-color-outbox':        'kyanite_500',        // #00AAFF
        '--folder-color-folder':        'kyanite_500',        // #00AAFF
        '--folder-color-folder-filter': 'tanzanite_500',      // #7551E0
        '--folder-color-folder-rss':    'amber_700',          // #985514

        // Бейджи непрочитанных
        '--folderpane-unread-new-count-background': 'kyanite_500',        // #00AAFF
        '--folderpane-unread-count-text':           'white',              // #FCFCFC
        '--folderpane-unread-count-background':     'onyx_400',           // #969DA7

        // Иконки в списке писем
        '--thread-pane-flag-fill':     'amber_500',           // #FE8E21
        '--thread-pane-flag-stroke':   'amber_600',           // #CB721A
        '--thread-pane-spam-fill':     'ruby_300',            // #F7839A
        '--thread-pane-spam-stroke':   'ruby_500',            // #F23057
        '--thread-pane-unread-fill':   'kyanite_500',         // #00AAFF
        '--thread-pane-unread-stroke': 'kyanite_600',         // #0088CC

        // Управление аккаунтом
        '--accounts-bg-color':             'white',              // #FCFCFC
        '--button-hover-background-color': 'onyx_100',           // #E5E7E9
        '--primary-color-hover':           'kyanite_700',        // #006699
        '--btn-bg':                        'onyx_50',            // #F2F3F4
        '--btn-bg-hover':                  'onyx_100',           // #E5E7E9

        // Календарь
        '--viewHighlightBorderColor':     'kyanite_500',        // #00AAFF
        '--viewTodayLabelColor':          'white',              // #FCFCFC
        '--viewTodayLabelBackground':     'kyanite_700',        // #006699
    },
};
