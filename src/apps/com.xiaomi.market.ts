import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.market',
  name: '应用商店',
  groups: [
    {
      key: 0,
      name: '应用商店-小米应用商店-关闭',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 16000,
          anyMatches: ['@[desc="关闭"] -n * >n [text="小米应用商店"]'],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
