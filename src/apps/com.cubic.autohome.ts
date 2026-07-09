import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cubic.autohome',
  name: '汽车之家',
  groups: [
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[text="跳过"] <<n * [text="活动"]',
            '@[text="跳过"][vid="ad_splash_skip"] <<n * [text="广告"][vid="ad_splash_label"]',
          ],
          activityIds: ['.LogoActivity'],
        },
      ],
    },
  ],
});
