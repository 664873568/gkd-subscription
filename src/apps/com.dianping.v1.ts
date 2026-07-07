import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dianping.v1',
  name: '大众点评',
  groups: [
    {
      key: 0,
      name: '返回寻宝',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@ImageView[clickable=false] - ImageView[clickable=false] < FrameLayout[clickable=false] < FrameLayout[clickable=true]',
          ],
          activityIds: ['com.dianping.shopshell.PexusPoiActivity'],
        },
      ],
    },
  ],
});
