import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
// import { ConfigOptions } from '@graphql-markdown/types'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Regolith Docs',
  tagline: 'Documentation for Regolith.rocks',
  favicon: '/favicons/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.regolith.rocks',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@graphql-markdown/docusaurus',
      /** @type {import('@graphql-markdown/types').ConfigOptions} */
      {
        schema: './node_modules/@regolithco/common/dist/schema.graphql',
        rootPath: './docs', // docs will be generated under './docs/swapi' (rootPath/baseURL)
        baseURL: '/api',
        linkRoot: '/',
        homepage: './api',
        printTypeOptions: {
          // codeSection: false, // disable code section, same as CLI flag --noCode
          // deprecated: 'group', // group deprecated entities, same as CLI flag --deprecated group
          exampleSection: {
            directive: 'example',
          },
          hierarchy: 'api', // disable type API grouping, same as CLI flag --hierarchy entity
          // parentTypePrefix: false, // disable parent prefix, same as CLI flag --noParentType
          // relatedTypeSection: false, // disable related type sections, same as CLI flag --noRelatedType
          // typeBadges: false, // disable type attribute badges, same as CLI flag --noTypeBadges
        },
        loaders: {
          GraphQLFileLoader: '@graphql-tools/graphql-file-loader', // local file schema
        },
        // Optional advanced settings
        // pretty: true,
        skipDocDirective: ['@admin_only'],
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'releases',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'releases',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: './releases',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        gtag: {
          trackingID: 'G-3PVXRZZ8B3',
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: '/', // Serve docs at site root
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',          
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
        algolia: {
      // The application ID provided by Algolia
      appId: 'OYB5FRZZH6',

      // Public API key: it is safe to commit it
      apiKey: 'cd830e3602a8fcf2cbe9847f77186a8a',

      indexName: 'docs.regolith.rocks',

      // Optional: see doc section below
      contextualSearch: true,
        },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: 'img/RockIcon.svg',
    navbar: {
      title: 'Regolith Docs',
      logo: {
        alt: 'Regolith Logo',
        src: 'img/RockIcon.svg',
      },
      items: [
        { to: '/site', label: 'Site', position: 'left' },
        { to: '/survey-corps', label: 'Survey Corps', position: 'left' },
        { to: '/api', label: 'API', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/releases', label: 'Release Notes', position: 'right' },
        {
          href: 'https://github.com/RegolithCo/Regolith-Docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'API',
          items: [
            {
              label: 'GraphQL API',
              to: '/api',
            },
            {
              label: 'GraphQL Schema',
              to: '/docs/api/schema',
            },
          ],
        },
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'X',
        //       href: 'https://x.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/facebook/docusaurus',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Regolith Co. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
