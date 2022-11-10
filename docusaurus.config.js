// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mcjty',
  tagline: 'Maker of RFTools, McJtyLib, Deep Resonance, and Gear Swapper.',
  url: 'https://mcjty.tomheaton.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tomheaton',
  projectName: 'mcjty-website',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // TODO: add mods and tutorials as docs
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/tomheaton/mcjty-website/tree/main/',
        },
        blog: false, /*{
          showReadingTime: true,
          editUrl:
            'https://github.com/tomheaton/mcjty-website/tree/main/',
        },*/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // disableSwitch: false, //true
      // respectPrefersColorScheme: true,
      navbar: {
        title: 'McJty Wiki',
        logo: {
          alt: 'McJty Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorials',
          },
          // TODO: add mod docs
          /*{
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Mod Docs',
          },*/
          /*{
            to: '/blog',
            label: 'Blog',
            position: 'left'
          },*/
          {
            href: 'https://github.com/mcjtymods',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Tutorials',
            items: [
              {
                label: '1.19',
                to: '/docs/1.19',
              },
              {
                label: '1.18',
                to: '/docs/1.18',
              },
              {
                label: '1.17',
                to: '/docs/1.17',
              },
              {
                label: '1.14-1.15-1.16',
                to: '/docs/1.14-1.15-1.16',
              },
              {
                label: '1.12',
                to: '/docs/1.12',
              },
            ],
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'TODO: mod docs',
                to: '/docs/intro',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCYMg1JQw3syJBgPeW6m68lA',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/YaWr7Zb',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/McJty',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/user/McJty',
              },
              {
                label: 'Twitch',
                href: 'https://www.twitch.tv/McJty',
              },
            ],
          },
          {
            title: 'More',
            items: [
              /*{
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: 'Source Code',
                href: 'https://github.com/tomheaton/mcjty-website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} McJty`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [
            "gradle",
            "java"
        ]
      },
    }),
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ]
};

module.exports = config;
