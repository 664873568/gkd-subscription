import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smzdm.client.android',
  name: '什么值得买',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '及时接收重要通知-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="及时接收重要通知"][vid="tv_title"] + @[vid="iv_close"][clickable=true] +n [text="去开启"][vid="btn_go"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
    {
      key: 41,
      name: '读取剪贴板情况说明-暂不允许',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="读取剪贴板情况说明"][vid="tv_title"] +n [vid="button_container"] > @[text="暂不允许"][clickable=true] + [text="允许"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
