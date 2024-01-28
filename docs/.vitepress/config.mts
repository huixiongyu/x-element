import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url)),
        '@com': fileURLToPath(new URL('../../src/components', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  title: 'X-Element',
  description: 'A component kits simulate to Element Plus',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/beginning' },
      { text: '组件', link: '/components/button' },
      { text: '文档', link: '/documents/index' },
      { text: '发布日志', link: '/logs' }
    ],

    sidebar: [
      {
        text: '基础',
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Icon 图标', link: '/components/icon' }
        ]
      },
      {
        text: '导航',
        items: [{ text: 'Dropdown 下拉菜单', link: '/components/dropdown' }]
      },
      {
        text: '数据展示',
        items: [
          { text: 'Collapse 折叠面板', link: '/components/collapse' },
          { text: 'Split 分割面板', link: '/components/split' },
          { text: 'Calendar 日历', link: '/components/calendar' }
        ]
      },
      {
        text: '表单',
        items: [
          { text: 'Form 表单', link: '/components/form' },
          { text: 'Input 输入', link: '/components/input' },
          { text: 'Switch 开关', link: '/components/switch' },
          { text: 'Select 选择器', link: '/components/select' }
        ]
      },
      {
        text: '反馈',
        items: [
          { text: 'Message 消息提示', link: '/components/message' },
          { text: 'Tooltip 文字提示', link: '/components/tooltip' },
          { text: 'Alert 提示', link: '/components/alert' },
          { text: 'Notification 通知', link: '/components/notification' }
        ]
      }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/huixiongyu/x-element' }]
  }
})
