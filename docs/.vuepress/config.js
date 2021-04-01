/**
 * @see https://vuepress.vuejs.org/zh/
 */
module.exports = {
  port: "4000",
  dest: "dist",
  base: "/frontend-tutorial/",
  title: "FRONTEND-TUTORIAL",
  description: "前端教程",
  head: [["link", { rel: "icon", href: `/favicon.ico` }]],
  markdown: {
    externalLinks: {
      target: "_blank",
      rel: "noopener noreferrer",
    },
  },
  themeConfig: {
    logo: "images/dunwu-logo-100.png",
    repo: "dunwu/frontend-tutorial",
    repoLabel: "Github",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    smoothScroll: true,
    locales: {
      "/": {
        label: "简体中文",
        selectText: "Languages",
        editLinkText: "帮助我们改善此页面！",
        lastUpdated: "上次更新",
        nav: [
          {
            text: "基础",
            link: "/base/",
          },
          {
            text: "Nodejs",
            link: "/nodejs/",
            items: [
              {
                text: "Node.js 入门",
                link: "/nodejs/nodejs",
              },
              {
                text: "npm",
                link: "/nodejs/npm",
              },
              {
                text: "yarn",
                link: "/nodejs/yarn",
              },
            ],
          },
          {
            text: "前端工具",
            link: "/tool/",
            items: [
              {
                text: "Axios 入门",
                link: "/tool/axios",
              },
              {
                text: "Prettier 入门",
                link: "/tool/prettier",
              },
              {
                text: "Lodash 入门",
                link: "/tool/lodash",
              },
            ],
          },
          {
            text: "🎯 博客",
            link: "https://github.com/dunwu/blog",
            target: "_blank",
            rel: "",
          },
        ],
        sidebar: "auto",
        sidebarDepth: 2,
      },
    },
  },
  plugins: [
    [
      "@vuepress/active-header-links",
      {
        sidebarLinkSelector: ".sidebar-link",
        headerAnchorSelector: ".header-anchor",
      },
    ],
    ["@vuepress/back-to-top", true],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    ["@vuepress/medium-zoom", true],
    [
      "container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>",
      },
    ],
    [
      "container",
      {
        type: "upgrade",
        before: (info) => `<UpgradePath title="${info}">`,
        after: "</UpgradePath>",
      },
    ],
    ["flowchart"],
  ],
};
