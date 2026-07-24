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
          matches: [
            '@TextView[width=81&&height=81] <n [id="sign-dialog"]',
          ],
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
            '@TextView[width=81&&height=81] < * +n [text="去逛逛"] <n AlertDialog',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
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
          matches: [
            '@TextView[width=81&&height=81] <n [id="sign-dialog"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@TextView[width=81&&height=81] < * +n [text="去逛逛"] <n AlertDialog',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
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
            '@TextView[width=81&&height=81] -n * > [text="恭喜获得任务奖励"] <<n AlertDialog',
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
            '@TextView[width=81&&height=81] <<n * [text="继续看视频领金币"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '金币任务中心-兑换商城-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@TextView + TextView + [text="兑换记录"]'],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '地图图区',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          anyMatches: [
            '@[desc="返回"][vid="title_btn_left"] <<n [vid="title_bar"] + [vid="frameLayout1"] >n [text="此功能需访问飞猪旅行APP"]',
            '@[desc="返回"][vid="title_btn_left"] - RelativeLayout > [text="签到送好礼"][vid="title"]',
            '@[desc="返回"][vid="title_btn_left"] - RelativeLayout > [text="千问-阿里 AI 助手"][vid="title"]',
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
          matches: [
            '@[text="立即领取"] < View - [text^="恭喜抽中"][text$="00 金币"] - [text="cjjinbi"]',
          ],
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
          actionDelay: 3000,
          matches: [
            '@[text="再试一次"] < View - [text^="恭喜抽中"][text$="00 金币"] - [text="cjduojinbi"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 12,
      name: '免费抽大奖-立即领取-再试一次',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="立即领取"] < View - [text^="恭喜抽中"][text$="00 金币"] - [text="cjjinbi"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="再试一次"] < View - [text^="恭喜抽中"][text$="00 金币"] - [text="cjduojinbi"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 13,
      name: '免费抽大奖-再试一次-立即领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="再试一次"] < View - [text^="恭喜抽中"][text$="00 金币"] - [text="cjduojinbi"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="立即领取"] < View - [text^="恭喜抽中"][text$="00 金币"] - [text="cjjinbi"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    //看视频-com.byazt.ff.Stub_Standard_Portrait_Activity
    {
      key: 20,
      name: '看视频-跳过-去体验*秒可立即领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="立即前往加速"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="去体验"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text$="跳过"] -n [text="奖励已领取"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-跳过-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text$="跳过"] -n [text="奖励已领取"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 22,
      name: '看视频-礼包-再逛*秒后可领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="我要立即领奖"] <<n * -n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
            '@[text="我要减广告时长"] <<n * -n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
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
      key: 23,
      name: '看视频-礼包-×b',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          preKeys: [0],
          key: 1,
          matches: [
            'ImageView < @ViewGroup <<n * - * [desc="gift_box"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 24,
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
    {
      key: 25,
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
      key: 26,
      name: '看视频-广告-跳过',
      matchRoot: true,
      actionMaximum: 5,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@[text$="跳过"][id="f6243b"] - [text="0s"][id="e8f0d0"]',
          ],
          matches: ['@[text$="跳过"][id="f6243b"]'],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: ['@[text$="跳过"][id="f6243b"] - [text="0s"][id="e8f0d0"]'],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 27,
      name: '看视频-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@Image < [id="b6b02b"]',
            '@Image < [id="694d63"] < [id="ef6da1"] < [id="0ccb29"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 28,
      name: '看视频-反馈-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[desc="4cc53*"] <<n * [text="反馈"]'],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 29,
      name: '看视频-广告二级页-< ×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 16000,
          matches: ['@ImageView + ImageView +2 [text="反馈"]'],
          activityIds: ['com.byazt.ff.Stub_Standard_Activity'],
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
          matches: ['@Image < [id="7b5368"] < [id="01dce7"] + [id="aa39b4"]'],
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
            '@[text$="跳过"][id="f6243b"] - [text="反馈"][id="b9e33b"]',
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
          matches: ['@Image < [id="694d63"] - [text="反馈"][id="136354"]'],
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
          matches: ['@[text^="点击"][text*="拿奖励"] <<n * [text="跳过"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 16000,
          matches: [
            '@[id$="ksad_kwad_web_navi_back"] + [id$="ksad_kwad_web_navi_close"] + [id$="ksad_kwad_titlebar_title"]',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.AdWebViewActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: ['@[text="残忍离开"] <<n * [text="真的不再看看了吗？"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.AdWebViewActivity'],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: [
            'ImageView < @ViewGroup <<n * - * [desc="gift_box"]',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 43,
      name: '看视频-礼包-×k',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'ImageView < @ViewGroup <<n * - * [desc="gift_box"]',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 44,
      name: '看视频-礼包-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="跳过"] <<n * - * [desc="gift_box"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 45,
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
      key: 46,
      name: '看视频-立即领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: ['@[desc="sky_lantern_main"] <<n * [text="跳过"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
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
      name: '看视频-广告-××',
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
      name: '看视频-微信-提前拿奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text*="微信"] <<n * [text="提前拿奖励"]'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 63,
      name: '看视频-微信-恭喜获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          preKeys: [0],
          key: 1,
          matches: ['@ImageView < FrameLayout + FrameLayout >2 ImageView'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 64,
      name: '看视频-我要更快拿奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="我要更快拿奖"] < FrameLayout + LinearLayout > [text="继续看视频"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 65,
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
