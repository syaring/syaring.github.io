import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'en-US',
  title: 'syaring\'s blog',
  description: 'blog service using vuepress',
  theme: defaultTheme({
    sidebar: [
      {
        text: '테스트 1',
        link: '/TIL',
      },
      {
        text: '테스트 2',
        link: '/test2',
      }
    ],
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'TIL',
        link: '/til'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/syaring/vuepress-blog',
      }
    ],
  }),
});
