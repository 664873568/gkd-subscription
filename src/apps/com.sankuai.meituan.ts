import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    //看视频
    {
      key: 10,
      name: '看视频-恭喜获得奖励*×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView <<n * [text="恭喜获得奖励"]'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '看视频-去看看',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="去看看"] <<n * [text="广告"]'],
          activityIds: [
            'com.meituan.android.mrn.container.MRNStandardActivity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '看视频-点击广告得',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="立即打开"] <<n * [text^="点击广告得"]'],
          activityIds: ['.msv.page.activity.MSVPageActivity'],
        },
      ],
    },
    {
      key: 13,
      name: '看视频-<+×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 15000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 10000,
          matches: ['@ImageView + ImageView + TextView'],
          activityIds: ['com.ubix.ssp.open.comm.UBiXWebViewActivity'],
        },
      ],
    },
    {
      key: 14,
      name: '看视频-完成跳转可领取-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 15000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@ViewGroup[clickable=true] - ViewGroup[clickable=true] -n [text="完成跳转可领取"]',
          ],
          activityIds: ['.msv.page.activity.MSVPageActivity'],
        },
      ],
    },
    {
      key: 15,
      name: '看视频-任务已完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches: ['@[vid="toast_container"] > [text="任务已完成"]'],
          activityIds: ['.msv.page.activity.MSVPageActivity'],
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
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '[vid="fl_template_ad"] >n @[id$="ms_skipView"]',
            '[vid="fl_template_ad"] >n @View[clickable=true]',
            '[vid="fl_template_ad"] >n @[text~="跳过 [0-9]"][clickable=true]',
            '[vid="fl_template_ad"] >n @[id$="sdm_myoffer_splash_skip_area"][clickable=true] > [text~="[0-9]s \\\\| 跳过"][id$="sdm_myoffer_splash_skip"]',
          ],
          activityIds: ['.msv.page.outsidead.splashad.MSVSplashAdActivity'],
        },
      ],
    },
  ],
});
