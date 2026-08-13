import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jtjr99.jiayoubao',
  name: '加油宝',
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
          matches: ['[text~="跳过[0-9]s"][vid="btn_skip"][clickable=true]'],
          activityIds: ['.module.ucenter.enter.SplashScreenActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[vid="iv_close"][clickable=true]'],
          activityIds: ['.module.home.MainTabActivity'],
        },
      ],
    },
    {
      key: 52,
      name: '广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[vid="iv_close"][clickable=true]'],
          activityIds: ['.module.ucenter.enter.SplashScreenActivity'],
        },
      ],
    },
  ],
});
