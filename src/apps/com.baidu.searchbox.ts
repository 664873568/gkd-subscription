import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.searchbox',
  name: '百度',
  groups: [
    {
      key: 0,
      name: '浏览好物-返回领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="立即领取"] <<n [text="搜有红包 - 百度"]'],
          activityIds: ['com.baidu.browser.search.LightSearchActivity'],
        },
      ],
    },
  ],
});
