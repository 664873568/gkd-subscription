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
    {
      key: 41,
      name: '温馨提示-同意并进入',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[getChild(0).text="温馨提示"] + View > @[text="同意并进入"][clickable=true] + [text="退出"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
