const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Whirl",
  tagline: "This was supposed to be catchy but turns out it's boring instead",
  url: "https://whirl.codes",
  favicon: "img/favicon.ico",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  titleDelimiter: "::", // Defaults to `|`
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
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
          {
           tagName: "title",
            content: "Whirl",
          },
          {
           tagName: "sitetitle",
            content: "whirl.codes",
          },
          {
           tagName: "description",
            content:
              "Heyy There! I am Whirl a 13yo self taught full stack developer",
          },
          {
           tagName: "keywords",
            content:
              " Discord , node.js  , node , nodejs , javascript , js , developer , backend , frontend , full stack , coder , whirl , whirlwhirls.ml , whirl2 whirl's website,whirl xd, whirlx , whirl ,whirl.codes site , whirl.codes , whirl21 , whirl twitter , whirl dev , whirl.whirls , whirlpool , whirls whirlpool , whirl pro , whirl , whirl xd site",
          },
          {
           tagName: "og:image",
            content:
              "https://cdn.discordapp.com/attachments/853630541571162132/863418634251665408/whirldev.gif",
          },
          {
           tagName: "theme-color",
            content: "#00FFFF",
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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
   
      image: "img/whirll.gif",

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
