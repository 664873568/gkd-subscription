import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xs.fm',
  name: '番茄畅听',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '个人信息保护指引-同意',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="个人信息保护指引"] +n * [text="同意"][clickable=true]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
