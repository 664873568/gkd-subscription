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
          matches: ['@ImageButton <<n View[id^="8ED650F5"] <<n [text="U惠湖北"]'],
          activityIds: ['.liteapp.app.UPLiteAppActivity1'],
        },
      ],
    },
  ],
});
