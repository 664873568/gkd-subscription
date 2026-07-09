import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.browser',
  name: '浏览器',
  groups: [
    {
      key: 0,
      name: '当前网站请求打开',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[text="允许"] <<n * [text$="QQ阅读"]',
            '@[text="允许"] <<n * [text$="阿里巴巴"]',
            '@[text="允许"] <<n * [text$="飞猪旅行"]',
            '@[text="允许"] <<n * [text$="快影"]',
            '@[text="允许"] <<n * [text$="携程旅行"]',
            '@[text="允许"] <<n * [text$="一淘"]',
          ],
          activityIds: ['.BrowserActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '快影APP下载',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="立即下载App"] <<n [text="快影APP下载-快手官方视频剪辑神器"]',
          ],
          activityIds: ['.BrowserActivity'],
        },
      ],
    },
  ],
});
