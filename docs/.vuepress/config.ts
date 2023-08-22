import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default'
import { sitemapPlugin } from 'vuepress-plugin-sitemap2';

export default defineUserConfig({
  lang: 'en-US',
  title: 'syaring\'s blog',
  description: 'blog service using vuepress',
  base: "/",
  theme: defaultTheme({
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'workout 🏋️‍♀️',
        link: '/workout/running/photo'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/syaring/vuepress-blog',
      },
    ],
    sidebar: {
      '/home/': [
        {
          text: '홈',
          link: '/',
        }
      ],
      '/workout/': [
        {
          text: 'running',
          children: ['/workout/running/photo.md', '/workout/running/2023_summer_challenge.md'],
        },
      ]
    },
  }),
  plugins: [
    sitemapPlugin({ hostname: "https://syaring.github.io" }),
  ],
});
