// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AvenBot',
  tagline: 'Документация AvenBot — ИИ-ассистент для бизнеса',
  favicon: 'img/favicon.ico',

  url: 'https://grkovshov.github.io',
  baseUrl: '/avenbot/',

  // GitHub pages deployment config
  organizationName: 'grkovshov',
  projectName: 'avenbot',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  markdown: {
    mermaid: false,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/grkovshov/avenbot/tree/main/',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/aven-social-card.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AVEN',
        logo: {
          alt: 'AvenBot Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Документация',
          },
          {
            href: 'https://platform.avenbot.ru',
            label: 'Платформа',
            position: 'right',
          },
          {
            href: 'https://github.com/grkovshov/avenbot',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Начало работы',
                to: '/intro',
              },
              {
                label: 'Подключение к YClients',
                to: '/yclients',
              },
              {
                label: 'Создание ассистента',
                to: '/assistant',
              },
            ],
          },
          {
            title: 'Каналы связи',
            items: [
              {
                label: 'Telegram',
                to: '/telegram-setup',
              },
              {
                label: 'WhatsApp',
                to: '/whatsapp',
              },
              {
                label: 'Max',
                to: '/max',
              },
            ],
          },
          {
            title: 'Ссылки',
            items: [
              {
                label: 'Платформа AvenBot',
                href: 'https://platform.avenbot.ru',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/grkovshov/avenbot',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AvenBot. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },
    }),
};

export default config;
