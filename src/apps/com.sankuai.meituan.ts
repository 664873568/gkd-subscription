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
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ViewGroup[clickable=true] - ViewGroup[clickable=true] -n [text="完成跳转可领取"]',
          ],
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
            '@[text$="跳过"] <<n [vid="fl_template_ad"]',
            '@[id$="ms_skipView"] <<n [vid="fl_template_ad"]',
            '@View[clickable=true] <<n [vid="fl_template_ad"]',
          ],
          activityIds: ['.msv.page.outsidead.splashad.MSVSplashAdActivity'],
        },
      ],
    },
  ],
});
