import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    //任务中心
    {
      key: 10,
      name: '文档扫描-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@[text="文档扫描"] <<n * [text="拍摄纸质资料，生成高清电子版"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '加载中…-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 3000,
          matches: [
            '@[vid="left_button"] +2 [text="加载中…"][vid="middle_title_text"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 19,
      name: '游戏中心-好礼通行证-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="关闭"] -2 [text="point"] <<n [text="游戏中心"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@TextView -2 [text="好礼通行证"] <<n [text="游戏中心"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    //看视频-返回|跳过|关闭
    {
      key: 21,
      name: '看视频-点击广告拿奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="点击广告拿奖励"] <<n * [text="点击广告，即可获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 22,
      name: '看视频-新人专享福利-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView - [text="新人专享福利"]'],
          activityIds: ['com.qq.e.ads.ADActivity'],
        },
      ],
    },
    {
      key: 23,
      name: '看视频-恭喜获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView[width=48&&height=48] <<n * [text="恭喜获得奖励"]'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 25,
      name: '看视频-完成App安装',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="点击下载或打开第三方应用"] <<n * [text="完成App安装，即可获得奖励"]'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@ImageView[width=48&&height=48] <<n * [text="恭喜获得奖励"]'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 25,
      name: '看视频-完成App安装',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="点击下载或打开第三方应用"] <<n * [text="完成App安装，即可获得奖励"]'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 37,
      name: '红果免费短剧',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 15000,
          matches: [
            '@[text="打开红果免费短剧 免费短剧尽在此处"] <<n [text="红果免费短剧"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 38,
      name: '看视频-微信-进入微信小游戏',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: [
            '@ImageView < FrameLayout + * > * [text^="进入微信小游戏"]',
          ],
          matches: [
            '@[text^="进入微信小游戏"] <<n * [text="提前拿奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 39,
      name: '看视频-微信-恭喜获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView < FrameLayout + * > * [text^="进入微信小游戏"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    //首页功能类
    {
      key: 40,
      name: '开启安全备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[text="暂不开启"] - [text="开启安全备份"]'],
          activityIds: ['.ui.NewQuickSettingsActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '开启照片自动备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@[text="暂不开启"][vid="dialog_button_cancel"] -n [text="是否开启照片自动备份？"][vid="content_info"]',
          ],
          activityIds: ['.ui.NewQuickSettingsActivity'],
        },
      ],
    },
    {
      key: 49,
      name: '广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text^="跳过"]'],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
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
          anyMatches: [
            '@[text^="跳过"][vid="tv_skip"]',
            '@[text^="跳过"][vid="countdown"]',
            '@[text="跳过"] <<n * [text="上滑或点击"]',
          ],
          activityIds: ['.advertise.ui.SplashAdActivity'],
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
          matches: ['@[vid="iv_close"] + [vid="cl_content"]'],
          activityIds: ['.ui.MainActivity'],
        },
      ],
    },
  ],
});
