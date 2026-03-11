import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const resourcesDir = resolve(__dirname, '..', 'resources');
const assetsDir = resolve(__dirname, '..', 'src', 'assets');

if (!existsSync(assetsDir)) mkdirSync(assetsDir, { recursive: true });

const ICON_COLOR = '#636A74'; // onyx_600 — icons color from themeConfig

const mapping = {
  // Group 1 — Folder pane
  'folder-inbox.svg':    'directbox-receive_icon.svg',
  'folder-sent.svg':     'send_icon.svg',
  'folder-draft.svg':    'edit_icon.svg',
  'folder-archive.svg':  'archive_icon.svg',
  'folder-trash.svg':    'delete_icon.svg',
  'folder-spam.svg':     'danger_icon.svg',
  'folder-template.svg': 'document_icon.svg',
  'folder-outbox.svg':   'directbox-send_icon.svg',
  'folder-folder.svg':   'folder_icon.svg',
  'folder-rss.svg':      'radio_icon.svg',
  'folder-filter.svg':   'filter_icon.svg',

  // Group 2 — Toolbar
  'toolbar-getmsg.svg':    'download_icon.svg',
  'toolbar-newmsg.svg':    'pen_icon.svg',
  'toolbar-reply.svg':     'undo_icon.svg',
  'toolbar-replyall.svg':  'messages-2_icon.svg',
  'toolbar-forward.svg':   'redo_icon.svg',
  'toolbar-delete.svg':    'delete_icon.svg',
  'toolbar-archive.svg':   'archive_icon.svg',
  'toolbar-junk.svg':      'danger_icon.svg',
  'toolbar-tag.svg':       'tag_icon.svg',
  'toolbar-print.svg':     'print_icon.svg',
  'toolbar-move.svg':      'folder_icon.svg',
  'toolbar-goback.svg':    'arrow-left_icon.svg',
  'toolbar-goforward.svg': 'arrow-right_icon.svg',
  'toolbar-search.svg':    'search_icon.svg',

  // Group 3 — Spaces toolbar
  'spaces-mail.svg':        'email_icon.svg',
  'spaces-addressbook.svg': 'profile-2user_icon.svg',
  'spaces-calendar.svg':    'calendar_icon.svg',
  'spaces-tasks.svg':       'task_icon.svg',
  'spaces-chat.svg':        'message_icon.svg',
  'spaces-settings.svg':    'setting_icon.svg',

  // Group 4 — Thread pane
  'thread-star.svg':       'star_icon.svg',
  'thread-attachment.svg': 'link_icon.svg',
  'thread-junk.svg':       'danger_icon.svg',
  'thread-unread.svg':     'record_icon.svg',

  // Group 5 — Tab favicons
  'tab-mail.svg':     'email_icon.svg',
  'tab-calendar.svg': 'calendar_icon.svg',
  'tab-tasks.svg':    'task_icon.svg',
  'tab-addons.svg':   'setting-2_icon.svg',
  'tab-chat.svg':     'message_icon.svg',

  // Group 6 — Thread pane replied/forwarded indicators
  'thread-replied.svg':   'undo_icon.svg',
  'thread-forwarded.svg': 'redo_icon.svg',
};

let count = 0;
for (const [targetName, sourceName] of Object.entries(mapping)) {
  const srcPath = resolve(resourcesDir, sourceName);
  if (!existsSync(srcPath)) {
    console.warn(`  SKIP: ${sourceName} not found`);
    continue;
  }

  let svg = readFileSync(srcPath, 'utf-8');
  svg = svg
    .replace(/fill="black"/g, `fill="${ICON_COLOR}"`)
    .replace(/fill="#171717"/g, `fill="${ICON_COLOR}"`)
    .replace(/fill="#1C1D21"/g, `fill="${ICON_COLOR}"`);

  writeFileSync(resolve(assetsDir, targetName), svg, 'utf-8');
  count++;
  console.log(`  ${sourceName} -> ${targetName}`);
}

console.log(`\n  Done: ${count} icons prepared in src/assets/`);
