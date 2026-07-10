import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 0,
      name: 'U惠湖北-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageButton <<2 View[index=1][childCount=1] <<n [text="U惠湖北"]',
          ],
          activityIds: ['.liteapp.app.UPLiteAppActivity1'],
        },
      ],
    },
  ],
});
