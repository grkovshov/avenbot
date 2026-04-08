// @ts-check

/**
 * Sidebar для документации AvenBot.
 * Структура повторяет порядок sidebar_position в md-файлах.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Руководство',
      collapsed: false,
      collapsible: false,
      items: [
        'intro',
        'yclients',
        'assistant',
        'notifications',
        'telegram-setup',
        'max',
        'whatsapp',
        'chats',
      ],
    },
    {
      type: 'category',
      label: 'Дополнительно',
      collapsed: false,
      collapsible: false,
      items: [
        'telegram',
        'telegram-notifications',
      ],
    },
  ],
};

export default sidebars;
