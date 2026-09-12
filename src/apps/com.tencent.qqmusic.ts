import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '流量提醒-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[desc="关闭"][vid="close_btn"][clickable=true] - * > [text="流量提醒"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
