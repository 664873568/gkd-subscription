import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.UCMobile',
  name: 'UC浏览器',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '个人信息保护指引-同意',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="同意"][vid="agree"][clickable=true] -n [text="个人信息保护指引"][vid="title"]',
          ],
          activityIds: ['com.uc.browser.InnerUCMobile','null'],
        },
      ],
    },
    {
      key: 41,
      name: '温馨提示-同意并进入',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="同意并进入"][clickable=true] < View - * [text="温馨提示"]',
          ],
          activityIds: ['com.uc.browser.InnerUCMobile'],
        },
      ],
    },
  ],
});
