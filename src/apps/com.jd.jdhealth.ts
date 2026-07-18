import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jdhealth',
  name: '京东健康',
  groups: [
    //功能应用类
    {
      key: 50,
      name: '发现新版本-取消',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text="取消"][vid="upgrade_cancel"]'],
          activityIds: ['.ui.activity.MainActivity'],
        },
      ],
    },
  ],
});
