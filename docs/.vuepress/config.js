// .vuepress/config.js
module.exports = {
    title: "DeepSighting",
    theme: '@vuepress/theme-blog',
    themeConfig: {
      dateFormat: 'YYYY-MM-DD',
      nav: [
        {
          text: '博客',
          link: '/',
        },
        {
          text: '标签',
          link: '/tag/',
        },
      ],
      footer: {
        contact: [
          {
            type: 'github',
            link: 'https://github.com/git-wangchao',
          },
          {
            type: 'mail',
            link: '18888351756@163.com',
          },
        ],
        copyright: [
          {
            text: '鲁ICP备17054969号',
            link: '/',
          },
          {
            text: 'CharlieWang © 2020-present',
            link: '/',
          },
        ]
      },
      smoothScroll: true
    }
  }