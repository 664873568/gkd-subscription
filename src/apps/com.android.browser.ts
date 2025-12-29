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
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="允许"] <<n * [text="当前网站请求打开QQ阅读"]',
            '@[text="允许"] <<n * [text="当前网站请求打开阿里巴巴"]',
            '@[text="允许"] <<n * [text="当前网站请求打开一淘"]',
          ],
          activityIds: ['.BrowserActivity'],
        },
      ],
    },
  ],
});
