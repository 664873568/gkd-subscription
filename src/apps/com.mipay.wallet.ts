import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mipay.wallet',
  name: '钱包',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '通知权限提醒-取消',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="通知权限提醒"][vid="title"] +n [vid="buttons"] > @[text="取消"][vid="cancel"][clickable=true] + [text="设置"][vid="confirm"]',
          ],
          activityIds: ['com.xiaomi.jr.app.MiFinanceActivity'],
        },
      ],
    },
  ],
});
