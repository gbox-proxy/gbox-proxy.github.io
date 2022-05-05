// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GBox Proxy',
  tagline: 'Reverse proxy in front of any GraphQL server for caching, securing and monitoring.',
  url: 'https://gbox-proxy.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gbox-proxy',
  projectName: 'gbox-proxy.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({locale, versionDocsDirPath, docPath, version}) => {
              return `https://github.com/gbox-proxy/gbox-proxy.github.io/edit/main/${versionDocsDirPath}/${docPath}`;
          },
          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GBox Proxy',
        logo: {
          alt: 'Logo',
          src: 'img/gbox.png',
        },
        items: [
          {
            href: 'https://github.com/gbox-proxy/gbox',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        "logo": {
          "src": "img/gbox-full.png",
          "href": "/",
        },
        copyright: `Copyright © ${new Date().getFullYear()} GBox Proxy.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
