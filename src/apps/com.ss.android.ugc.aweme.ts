import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    //发财金
    {
      key: 0,
      name: '发财金已到账-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 20000,
          matches: ['@[desc="券红包"] <<n * [vid="buu"]'],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
  ],
});
