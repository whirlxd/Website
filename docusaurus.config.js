const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/**
 * @Param [File Puprose] = Docusarus Config File
 */
// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Whirl",
  tagline: "This was supposed to be catchy but turns out it's boring instead",
  url: "https://whirl.codes",
  favicon: "img/favicon.ico",
  baseUrl: "/",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  titleDelimiter: "::",
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        offlineModeActivationStrategies: ["standalone"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/favicon-32x32.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/img/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/apple-touch-icon.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/favicon-16x16,png",
            color: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/favicon-32x32.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000",
          },
        ],
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/Whirl21/Website/tree/prod",
          blogSidebarTitle: "Posts",
          blogSidebarCount: "ALL",
          blogTitle: "Whirl's Blog",
          blogDescription:
            "Whirl's Personal blog where he whirls about ... um idk?",
          postsPerPage: "ALL",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Whirl`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        docs: false,
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Home",
        style: "dark",

        items: [
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/whirl21/website",
            position: "right",
            className: "github-icon",
            "aria-label": "GitHub repository",
          },
          {
            type: "dropdown",
            label: "Socials",
            position: "right",
            items: [
              {
                href: "https://twitter.com/whirl21",
                label: "Twitter",
              },
              {
                href: "https://discord.gg/jCtAPhKDee",
                label: "Discord",
              },
              {
                href: "https://github.com/whirl21",
                label: "GitHub",
              },
            ],
          },
        ],
      },
      footer: {
        style: "dark",

        copyright: `Copyright © ${new Date().getFullYear()} Built with 🧠 By <a href="https://github.com/whirl21">Whirl</a> `, // You can also put own HTML here
      },
      metadatas: [
        /*
        <meta name="title" content="Whirl">
<meta name="description" content="Heyy There! I am Whirl a 13yo self taught full stack developer">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://whirl.codes/">
<meta property="og:title" content="Whirl">
<meta property="og:description" content="Heyy There! I am Whirl a 13yo self taught full stack developer">
<meta property="og:image" content="https://whirl.codes/img/whirll.gif">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://whirl.codes/">
<meta property="twitter:title" content="Whirl">
<meta property="twitter:description" content="Heyy There! I am Whirl a 13yo self taught full stack developer">
<meta property="twitter:image" content="https://whirl.codes/img/whirll.gif"> */
        {
          name: "title",
          content: "Whirl",
        },
        {
          name: "description",
          content:
            "Heyy There! I am Whirl a 13yo self taught full stack developer",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:url",
          content: "https://whirl.codes",
        },
        {
          name: "og:site_name",
          content: "Whirl",
        },
        {
          name: "og:description",
          content:
            "Heyy There! I am Whirl a 13yo self taught full stack developer",
        },
        {
          name: "keywords",
          content:
            " Discord , node.js  , node , nodejs , javascript , js , developer , backend , frontend , full stack , coder , whirl , whirlwhirls.ml , whirl2 whirl's website,whirl xd, whirlx , whirl ,whirl.codes site , whirl.codes , whirl21 , whirl twitter , whirl dev , whirl.whirls , whirlpool , whirls whirlpool , whirl pro , whirl , whirl xd site",
        },
        {
          name: "og:image",
          content:
            "https://media.discordapp.net/attachments/853661005871185950/858966288570515476/SPOILER_whirldev.gif",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          name: "twitter:title",
          content: "Whirl",
        },
        {
          name: "twitter:description",
          content:
            "Heyy There! I am Whirl a 13yo self taught full stack developer",
        },
        {
          name: "twitter:url",
          content: "https://whirl.codes",
        },
        {
          name: "twitter:image",
          content:
            "https://media.discordapp.net/attachments/853661005871185950/858966288570515476/SPOILER_whirldev.gif",
        },
        {
          name: "theme-color",
          content: "#00FFFF",
        },
      ],

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: "support_us",
        content:
          'Do not forget to join my discord server by clicking <a target="_blank" href="https://discord.gg/jCtAPhKDee"">here</a>',
        backgroundColor: "#ffff00",
        textColor: "#00000",
        isCloseable: true,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        switchConfig: {
          darkIcon: "🌑",
          lightIcon: "🌕",
        },
      },
    }),
};
