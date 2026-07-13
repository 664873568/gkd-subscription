import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    //金币任务中心-com.baidu.baidumaps.MapsActivity
    {
      key: 0,
      name: '金币任务中心-签到日历-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@TextView[index=8][childCount=0] <n [id="sign-dialog"]'],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '金币任务中心-去逛逛-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@TextView[index=0][childCount=0][clickable=true] <<n AlertDialog',
          ],
          activityIds: ['null', 'com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '金币任务中心-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@TextView[index=8][childCount=0] <n [id="sign-dialog"]'],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@TextView[index=0][childCount=0][clickable=true] <<n AlertDialog',
          ],
          activityIds: ['null', 'com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '金币任务中心-恭喜获得任务奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@TextView[index=4][childCount=0][clickable=true] <<n AlertDialog',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '金币任务中心-我知道了-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="我知道了"] <<n * [text="连做7天任务,最高领7200"]'],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '金币任务中心-继续看视频领金币-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@TextView[clickable=true] <<n * [text="继续看视频领金币"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '地图图区-好车主-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 1000,
          matches: [
            '@[desc="返回"][vid="title_btn_left"] <<n * [text="签到送好礼"][vid="title"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '地图图区-千问-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 1000,
          matches: [
            '@[desc="返回"][vid="title_btn_left"] <<n * [text="千问-阿里 AI 助手"][vid="title"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '地图图区-飞猪-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 1000,
          matches: [
            '@[desc="返回"][vid="title_btn_left"] <<n * [text="此功能需访问飞猪旅行APP"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '正在载入',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 1000,
          matches: ['@[text="正在载入"][vid="bm_progress_message"]'],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    //免费抽大奖
    {
      key: 10,
      name: '免费抽大奖-立即领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="立即领取"] < View -2 [text="cjjinbi"]'],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '免费抽大奖-再试一次',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="再试一次"] < View -2 [text="cjduojinbi"]'],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    //看视频-com.byazt.ff.Stub_Standard_Portrait_Activity
    {
      key: 20,
      name: '看视频-限时跳一跳-继续播放视频内容',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="继续播放视频内容"] -n * >n [text="9395b4e3ffe08bfb"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@Image < View +n [text="点击立即领取"]'],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: ['@Image < View +n [text="上滑或点击领取"]'],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-礼包-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="我要立即领奖"] <<n * [text="svg%3e"] + [text^="再逛"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: [
            '@ImageView <<n [desc="close_button"] <<n * [desc="gift_box"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 22,
      name: '看视频-限时领取',
      matchRoot: true,
      actionMaximum: 5,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="7b144c81c2cb181f"] <<n * [text="限时领取"]'],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.byazt.xs.Stub_Standard_Portrait_Activity
    {
      key: 30,
      name: '看视频-点击打开-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Image < [id="7b5368"] < [id="01dce7"] - [id="aa39b4"] > [text="反馈"][id="665045"]',
          ],
          activityIds: ['com.byazt.xs.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 31,
      name: '看视频-跳过-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 30000,
          matches: [
            '@[text$="跳过"][id="f6243b"] <<n * [text="反馈"][id="b9e33b"]',
          ],
          activityIds: ['com.byazt.xs.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 32,
      name: '看视频-反馈-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@Image < [id="694d63"] <<n * [text="反馈"][id="136354"]'],
          activityIds: ['com.byazt.xs.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.kwad.sdk.api.proxy.app.KsRewardVideoActivity
    {
      key: 40,
      name: '看视频-我要免看本次广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="我要免看本次广告"] <<n * [text="跳过"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '看视频-点击下载免看广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text^="点击下载免看广告"] <<n * [text="跳过"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 42,
      name: '看视频-拿奖励-礼包-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="点击跳转拿奖励"] <<n * [text$="可直接拿奖励"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            '@ViewGroup < [desc="close_button"] <<n * [desc="gift_box"]',
            '@[text="跳过"] <<n [desc="skip_button"] <<n * [desc="gift_box"]',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 43,
      name: '看视频-恭喜获得福利',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text^="点击跳转免看广告"] <<n * [text^="恭喜获得"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 44,
      name: '看视频-立即领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[desc="sky_lantern_main"] <<n * [text="跳过"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    //看视频-com.kwad.sdk.api.proxy.app.KsRewardVideoActivity
    {
      key: 50,
      name: '浏览APP-< ×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 11000,
          matches: [
            '@[id$="ksad_kwad_web_navi_back"] + [id$="ksad_kwad_web_navi_close"] + [id$="ksad_kwad_titlebar_title"]',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.AdWebViewActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="残忍离开"] <<n * [text="真的不再看看了吗？"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.AdWebViewActivity'],
        },
      ],
    },
    //看视频-com.qq.e.ads.PortraitADActivity
    {
      key: 60,
      name: '看视频-点击广告拿奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="点击广告拿奖励"] <<n * [text="点击广告，即可获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@ImageView < FrameLayout -2 FrameLayout > [text="恭喜获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 61,
      name: '看视频-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@ImageView < FrameLayout < LinearLayout <2 FrameLayout + ImageView',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@ImageView < FrameLayout + LinearLayout + ImageView'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 62,
      name: '看视频-打开App',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="点击下载或打开第三方应用"] <<n * [text="打开App体验15秒，即可获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    //看视频-com.sigmob.sdk.base.common.PortraitAdActivity
    {
      key: 70,
      name: '看视频-浏览领取奖励-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="立即前往"] <<n * [text$="跳过"]',
            '@[text="立即试玩"] <<n * [text$="跳过"]',
          ],
          activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="跳过"] - [text="奖励已下发"] - [text="反馈"]'],
          activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
        },
      ],
    },
    {
      key: 71,
      name: '看视频-已获得奖励-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text$="跳过"] - [text="已获得奖励"] <2 [id="close_btn"] - [text="反馈"]',
          ],
          activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[id="close_btn"] - [text="反馈"]'],
          activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
        },
      ],
    },
    //看视频-com.windmill.sdk.widget.InterstitialView_4012003
    {
      key: 80,
      name: '看视频-广告-跳过-关闭',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="关闭"][vid="tobid_interstitial_skip_text"]'],
          activityIds: ['com.windmill.sdk.widget.InterstitialView_4012003'],
        },
      ],
    },
  ],
});
