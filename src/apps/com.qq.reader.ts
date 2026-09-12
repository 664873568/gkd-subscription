import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qq.reader',
  name: 'QQ阅读',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '欢迎使用QQ阅读-同意',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="不同意"][vid="dont_agree"] - @[text="同意"][vid="agree"][clickable=true] -n * [text="欢迎使用QQ阅读"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
