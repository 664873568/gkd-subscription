import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.suning.mobile.epa',
  name: '星图金融',
  groups: [
    {
      key: 0,
      name: '首页-领现金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="领现金"] - * > [vid="item_img"]'],
          activityIds: ['.launcher.LauncherActivity'],
        },
      ],
    },
  ],
});
