import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wudaokou.hippo',
  name: '盒马',
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
          matches: ['@[text$="跳过"][vid="splash_skip"]'],
          activityIds: ['.launcher.splash.SplashActivity'],
        },
      ],
    },
  ],
});
