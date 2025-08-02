import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/Main',
  title: "Lingua Logica",
  description: "一个国内的自制编程语言的小组织",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '加入交流群', link: '/加入交流群' }
    ],

    sidebar: [
      {
        text: '快速了解',
        items: [
          { text: '简介', link: '/快速开始' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lingua-Logica' }
    ]
  }
})
