import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duowan.mobile',
  name: 'YY',
  groups: [
    {
      key: 0,
      name: '打开通知权限-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="iv_close"] <<n * [text="打开通知权限"]'],
          activityIds: ['.basemedia.watchlive.activity.LiveTemplateActivity'],
        },
      ],
    },
  ],
});
