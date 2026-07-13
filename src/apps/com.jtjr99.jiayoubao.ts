import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jtjr99.jiayoubao',
  name: '加油宝',
  groups: [
    //首页广告类
    {
      key: 50,
      name: '首页-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text^="跳过"][vid="btn_skip"]'],
          activityIds: ['.module.ucenter.enter.SplashScreenActivity'],
        },
      ],
    },
  ],
});
