import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dz.hmjc',
  name: '河马剧场',
  groups: [
    //福利中心
    {
      key: 0,
      name: '福利中心-立即签到',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text~="立即签到 \\\\+[0-9]{4}金币"] -n [text="连续签到得金币"] - ImageButton',
          ],
          activityIds: ['com.dz.business.main.ui.MainActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '福利中心-跳过-立即签到',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text^="跳过"][vid="mh_skip_view"]'],
          activityIds: [
            'com.dz.business.main.ui.MainActivity',
            'com.dz.business.splash.ui.HotSplashActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text~="立即签到 \\\\+[0-9]{4}金币"] -n [text="连续签到得金币"] - ImageButton',
          ],
          activityIds: ['com.dz.business.main.ui.MainActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '欢迎使用河马剧场-同意',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="欢迎使用河马剧场"][vid="tv_title"] +n [text="不同意"][vid="btn_refuse"] + @[text="同意"][vid="btn_agree"][clickable=true]',
          ],
          activityIds: ['com.dz.business.main.ui.MainActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '青少年模式-我知道了',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="青少年模式"][vid="tv_title"] +n @[text="我知道了"][vid="tv_determine"][clickable=true]',
          ],
          activityIds: ['com.dz.business.main.ui.MainActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text^="跳过"][vid="mh_skip_view"]'],
          activityIds: [
            'com.dz.business.main.ui.MainActivity',
            'com.dz.business.splash.ui.HotSplashActivity',
          ],
        },
      ],
    },
  ],
});
