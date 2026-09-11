import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 1,
      name: '每日刮刮乐-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(0).getChild(1).text^="x"] + @[getChild(0).name$="ImageView"][clickable=true] + ImageView + ImageView',
          ],
          activityIds: ['com.meituan.android.mrn.container.MRNBaseActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(0).getChild(1).text^="x"] + @ImageView + ImageView',
          ],
          activityIds: ['com.meituan.android.mrn.container.MRNBaseActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: ['@ImageView - [text="明天不来奖励失效"]'],
          activityIds: ['com.meituan.android.mrn.container.MRNBaseActivity'],
        },
      ],
    },
    //赚钱中心
    {
      key: 10,
      name: '访问APP赚-去完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[getChild(1).text="访问APP赚"] + ViewGroup > @ViewGroup[clickable=true] > ViewGroup > ViewGroup + ViewGroup > [text="去完成"]',
          ],
          activityIds: [
            'com.meituan.android.mrn.container.MRNStandardActivity',
          ],
        },
      ],
    },
    //看视频
    {
      key: 20,
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
      key: 21,
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
      key: 22,
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
      key: 23,
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
      key: 24,
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
    //飞猪旅行-去美团赚20元
    {
      key: 39,
      name: '看视频-任务已完成',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches: ['@[vid="toast_container"] > [text="任务已完成"]'],
          activityIds: ['.msv.page.activity.MSVPageActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '新版本抢先体验-暂不升级',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="新版本抢先体验"] +n @[text="暂不升级"][vid="btn_cancel"][clickable=true] + [text="立即升级"]',
          ],
          activityIds: [
            'com.meituan.android.pt.homepage.activity.MainActivity',
          ],
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
