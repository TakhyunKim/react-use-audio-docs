// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "React Use Audio",
  tagline: "Easily play, pause, and stop sound with React hooks",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Takhyun Kim", // Usually your GitHub org/user name.
  projectName: "react use audio", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/TakhyunKim/react-use-audio-docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "React Use Audio",
        logo: {
          alt: "logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/TakhyunKim/react-use-audio/releases",
            label: "Releases",
            position: "left",
          },
          {
            href: "https://www.npmjs.com/package/react-use-audio",
            label: "npm",
            position: "right",
          },
          {
            href: "https://github.com/TakhyunKim/react-use-audio",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "FAQ",
                to: "/docs/getting-started/faq",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "npm",
                href: "https://www.npmjs.com/package/react-use-audio",
              },
              {
                label: "Releases",
                href: "https://github.com/TakhyunKim/react-use-audio/releases",
              },
              {
                label: "GitHub",
                href: "https://github.com/TakhyunKim/react-use-audio",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TakhyunKim`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
