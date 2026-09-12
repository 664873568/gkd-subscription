import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.UCMobile',
  name: 'UC浏览器',
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
            '[text="个人信息保护指引"][vid="title"] +n [text="不同意"][vid="not_agree"] + @[text="同意"][vid="agree"][clickable=true]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
