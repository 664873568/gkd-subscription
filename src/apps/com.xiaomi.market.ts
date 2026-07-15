import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.market',
  name: '应用商店',
  groups: [
    {
      key: 0,
      name: '小米应用商店-关闭',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 16000,
          anyMatches: ['@[desc="关闭"] <<n * [text="小米应用商店"]'],
          activityIds: ['null'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-关闭',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: ['@[desc="关闭"][vid="iv_close"]'],
          activityIds: ['.business_ui.main.MarketTabActivity'],
        },
      ],
    },
  ],
});
