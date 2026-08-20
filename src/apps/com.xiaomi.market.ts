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
      matchDelay: 16000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[desc="关闭"] <<n * [text="小米应用商店"]'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '隐私政策更新-同意',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="隐私政策更新"][vid="tv_title"] +n [text="退出应用"][vid="tv_negative"] + @[text="同意"][vid="tv_positive"][clickable=true]',
          ],
          activityIds: ['.business_ui.main.MarketTabActivity'],
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
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[desc="关闭"][vid="iv_close"]'],
          activityIds: ['.business_ui.main.MarketTabActivity'],
        },
      ],
    },
  ],
});
