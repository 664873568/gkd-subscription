import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.mms',
  name: '短信',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '天翼安全提醒-取消',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="保存"] - @[text="取消"][clickable=true] < [vid="buttonPanel"] <n [vid="parentPanel"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
