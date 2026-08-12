import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.trip',
  name: '飞猪旅行',
  groups: [
    //天天集能量-.splash.ui.ImageSplashActivity
    {
      key: 0,
      name: '首页-能量红包',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="能量红包"] <<n * [text="首页"]'],
          activityIds: ['.home.HomeActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '天天集能量-天降惊喜-x',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text^="O1CN016QjBQ71TI0eIdtVRX"] <<n [text="天天集能量"]',
          ],
          activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '天天集能量-领取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="领取奖励"] <<n [text="天天集能量"]'],
          activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '天天集能量-任意点击一个酒店',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@[text^="O1CN01rnXVgw22mFh20KuMa"] <<n [text="飞猪订酒店 真划算"]',
          ],
          activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '天天集能量-浏览APP返回页',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView[index=0][childCount=0] < FrameLayout[index=1][childCount=1]',
          ],
          activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '*已安装完成，是否立即打开？-取消',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="取消"][clickable=true] + [text="打开"]'],
          activityIds: [
            'com.smartdigimkt.sdk.basead.ui.web.WebLandPageActivity',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '天天集能量-网页无法打开',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView + ImageView + [text="网页无法打开"]'],
          activityIds: [
            'com.smartdigimkt.sdk.basead.ui.web.WebLandPageActivity',
          ],
        },
      ],
    },
    //看视频-com.anythink.basead.ui.ATPortraitActivity
    {
      key: 20,
      name: '看视频-免看本次广告',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="免看本次广告"][vid="anythink_myoffer_inctask_cta"] <<n * [vid="anythink_myoffer_btn_close_id"]',
          ],
          activityIds: ['com.anythink.basead.ui.ATPortraitActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="anythink_myoffer_btn_close_id"] <<n * [text="点击查看详情"][vid="anythink_myoffer_cta_button_major"]',
          ],
          activityIds: ['com.anythink.basead.ui.ATPortraitActivity'],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-广告-浏览-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="anythink_myoffer_btn_close_id"][clickable=true]'],
          activityIds: ['com.anythink.core.common.inner.ui.ATPortraitActivity'],
        },
      ],
    },
    {
      key: 22,
      name: '看视频-广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="跳过"][clickable=true] - * [text="点击跳转至第三方页面"]'],
          activityIds: ['com.anythink.core.common.inner.ui.activity.ATMixSplashActivity'],
        },
      ],
    },
    //看视频-com.baidu.mobads.sdk.api.*
    {
      key: 30,
      name: '看视频-广告-×',
      matchRoot: true,
      actionMaximum: 2,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          order: 0,
          matches: [
            '@ImageView[clickable=true] + ImageView + [text="点击或滑动查看奖励"]',//立即领取
          ],
          activityIds: ['com.baidu.mobads.sdk.api.MobRewardVideoActivity'],
        },
        {
          order: 1,
          anyMatches: [
            '@ImageView[clickable=true] - * [text="反馈"] <n * + * [text="摇动手机  了解更多"]',//去看看
            '@ImageView[clickable=true] - * [text="反馈"] +n RelativeLayout +n RelativeLayout > View',//去看看
            '@ImageView[clickable=true] - * [text="反馈"] <n * + RelativeLayout + RelativeLayout + View',//去看看
          ],
          activityIds: ['com.baidu.mobads.sdk.api.MobRewardVideoActivity'],
        },
      ],
    },
    {
      key: 31,
      name: '看视频-精选推荐',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView - [text="反馈"] +3 View'],
          activityIds: ['com.baidu.mobads.sdk.api.MobRewardVideoActivity'],
        },
      ],
    },
    {
      key: 32,
      name: '看视频-二级广告页baidu',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@View + View +2 View'],
          activityIds: ['com.baidu.mobads.sdk.api.AppActivity'],
        },
      ],
    },
    //看视频-com.beizi.ad.v2.activity.BeiZiNewRewardVideoActivity
    {
      key: 40,
      name: '看视频-跳过-*秒后可领取奖励-已经获得奖励"]',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="已经获得奖励 ｜ 关闭"][clickable=true]'],
          activityIds: ['com.beizi.ad.v2.activity.BeiZiNewRewardVideoActivity'],
        },
      ],
    },
    //看视频-com.byazt.mw.Stub_Standard_Portrait_Activity
    {
      key: 50,
      name: '看视频-跳过-去体验*秒可立即领奖byazt.mw',
      matchRoot: true,
      actionMaximum: 3,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="我要加速"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="立即前往加速"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
          ],
          activityIds: ['com.byazt.mw.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 51,
      name: '看视频-跳过-限时奖励byazt.mw',
      matchRoot: true,
      actionMaximum: 6,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="恭喜获得奖励"]',
            '@[text=""] - [text="恭喜获得限时奖励"]',
          ],
          activityIds: ['com.byazt.mw.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 52,
      name: '看视频-跳过-奖励已领取byazt.mw',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
          activityIds: ['com.byazt.mw.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 53,
      name: '看视频-礼包-再逛*秒后可领奖byazt.mw',
      matchRoot: true,
      actionMaximum: 3,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="我要加速"] <<n * +n * [text="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要立即领奖"] <<n * -n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
            '@[text="我要减广告时长"] <<n * -n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
          ],
          activityIds: ['com.byazt.mw.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 54,
      name: '看视频-礼包-奖励已领取byazt.mw',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@RelativeLayout[clickable=true] <<n * + * [text="svg%3e"] + [text="奖励已领取"]',
          ],
          activityIds: ['com.byazt.mw.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 55,
      name: '看视频-礼包-*s后可领取奖励-领取成功-×"]',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'ImageView < *[clickable=true] -n *[clickable=true] ImageView + [text="领取成功"]',
          ],
          activityIds: ['com.byazt.mw.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.byazt.sr.Stub_Standard_Portrait_Activity
    {
      key: 60,
      name: '看视频-跳过-去体验*秒可立即领奖byazt.sr',
      matchRoot: true,
      actionMaximum: 3,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="我要加速"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要立即领奖"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
          ],
          activityIds: ['com.byazt.sr.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 61,
      name: '看视频-跳过-奖励已领取byazt.sr',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
          activityIds: ['com.byazt.sr.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 62,
      name: '看视频-礼包-再逛*秒后可领奖byazt.sr',
      matchRoot: true,
      actionMaximum: 3,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="我要立即领奖"] <<n * -n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
            '@[text="我要减广告时长"] <<n * -n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
          ],
          activityIds: ['com.byazt.sr.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 63,
      name: '看视频-礼包-限时领取byazt.sr',
      matchRoot: true,
      actionMaximum: 3,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="7b144c81c2cb181f"] < * - * [text="恭喜获得奖励"] <<n * -n * [text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
          ],
          activityIds: ['com.byazt.sr.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 64,
      name: '看视频-礼包-<byazt.sr',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'FrameLayout - FrameLayout - FrameLayout @RelativeLayout[clickable=true]',
          ],
          activityIds: ['com.byazt.sr.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity
    {
      key: 70,
      name: '看视频-跳过-去体验*秒可立即领奖.b.c',
      matchRoot: true,
      actionMaximum: 3,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="我要加速"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 71,
      name: '看视频-跳过-限时奖励.b.c',
      matchRoot: true,
      actionMaximum: 6,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="恭喜获得奖励"]',
            '@[text=""] - [text="恭喜获得限时奖励"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 72,
      name: '看视频-跳过-奖励已领取.b.c',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    //看视频-com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity
    {
      key: 80,
      name: '看视频-跳过↓',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="我要"] <<n * +n * >n [text$="跳过"]',
            '@[text="体验"] <<n * +n * >n [text$="跳过"]',
            '@[text="立即"] <<n * +n * >n [text$="跳过"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 81,
      name: '看视频-跳过-奖励已领取.b.s',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="跳过"] -n [text="奖励已领取"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 82,
      name: '看视频-二级广告页bytedance',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView + ImageView +2 [text="反馈"]'],
          snapshotUrls: ['https://i.gkd.li/i/23547990'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.activity.base.TTWebPageActivity',
          ],
        },
      ],
    },
    //看视频-com.kwad.sdk.api.proxy.app.*
    {
      key: 90,
      name: '看视频-立即领取-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="跳过"] <<n * [text="立即获取"] < [desc="button_1030047"]',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.FeedDownloadActivity'],
        },
      ],
    },
    {
      key: 91,
      name: '看视频-跳过-立即领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            'ImageView - @[desc="sky_lantern_main"][clickable=true] <<n * +n * [text="跳过"]',
            '[text="点击下载免看广告"] <n @[desc="sky-lantern-easy-playable_scene2_actionBtn"][clickable=true] <<n * +n * [text="跳过"]',
            '[text="点击跳转免看广告"] <n @[desc="sky-lantern-easy-playable_scene2_actionBtn"][clickable=true] <<n * +n * [text="跳过"]',
            '[text="点击或滑动点击下载免看广告"] < [desc="sky-lantern-easy-playable_scene3_actionBtn"][clickable=true] <<n * +n * [text="跳过"]',
            '[text="点击或滑动点击跳转免看广告"] < [desc="sky-lantern-easy-playable_scene3_actionBtn"][clickable=true] <<n * +n * [text="跳过"]',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 92,
      name: '看视频-跳过-礼包-看*秒可直接拿奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="点击跳转拿奖励"][clickable=true] <<n * + * [text~="看[0-9]+秒可直接拿奖励"] - ImageView < * + [desc="skip_button"] [text="跳过"] ',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 93,
      name: '看视频-跳过-礼包',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="跳过"][clickable=true] <<n * - * [desc="gift_box"]',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 94,
      name: '看视频-礼包-免费获取-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'ImageView < ViewGroup[clickable=true] < @ViewGroup[clickable=true] < [desc="close_button"] - * [desc="call_button"] > [text="免费获取"] <<n * - * [desc="gift_box"] > ImageView',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    //看视频-com.qq.e.ads.*
    {
      key: 100,
      name: '看视频-微信-提前拿奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text*="微信"] <n FrameLayout - [text="提前拿奖励"]'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 16000,
          matches: ['ImageView < @FrameLayout + FrameLayout >2 ImageView'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 101,
      name: '看视频-微信-恭喜获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 16000,
          matches: ['ImageView < @FrameLayout + FrameLayout >2 ImageView'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 102,
      name: '看视频-微信-阅读小说 可获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text="可获得奖励"] - [text="阅读小说"] < * <n * + RecyclerView >n @LinearLayout > [text="点击去微信看全文"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 16000,
          matches: [
            'WebView - FrameLayout > TextView + @ImageView[clickable=true] + View',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 1000,
          matches: [
            '@ImageView < FrameLayout < FrameLayout - [text="恭喜已经获得奖励！"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 104,
      name: '看视频-奖励将于*秒后发放',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="我要更快拿奖"] < FrameLayout <n * +n * [text~="奖励将于[0-9]+秒后发放"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 105,
      name: '看视频-恭喜获得奖励-×qq',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            'ImageView < FrameLayout < @FrameLayout < LinearLayout <n * -n * [text~="已完成浏览[0-9]+秒，提前获得奖励"]',
            'ImageView < FrameLayout < @FrameLayout - [text="恭喜获得奖励"] < LinearLayout < * -n * [text~="已完成浏览[0-9]+秒，提前获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 106,
      name: '看视频-二级广告页qq',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView - TextView <<n * [id="BlockApp_unique"]'],
          activityIds: ['com.qq.e.ads.ADActivity'],
        },
      ],
    },
    //看视频-com.qumeng.advlib.ui.front.InciteADActivity
    {
      key: 110,
      name: '看视频-奖励已到账',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 31000,
          matches: ['@View[clickable=true] < RelativeLayout + ImageView'],
          activityIds: ['com.qumeng.advlib.ui.front.InciteADActivity'],
        },
      ],
    },
    {
      key: 111,
      name: '看视频-完成APP下载-即可领取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@View[clickable=false] <<n FrameLayout -2 RelativeLayout > View',
          ],
          activityIds: ['com.qumeng.advlib.ui.front.InciteADActivity'],
        },
      ],
    },
    //看视频-com.ubix.ssp.open.comm.UBiXVideoActivity
    {
      key: 120,
      name: '看视频-点击广告并跳转获取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="立即下载"][clickable=true] <<n * -n [text="点击广告并跳转获取奖励"]',
          ],
          activityIds: ['com.ubix.ssp.open.comm.UBiXVideoActivity'],
        },
      ],
    },
    {
      key: 121,
      name: '看视频-恭喜获得奖励-×ubix',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView[clickable=true] - [text="恭喜获得奖励"]'],
          activityIds: ['com.ubix.ssp.open.comm.UBiXVideoActivity'],
        },
      ],
    },
    //首页功能类
    {
      key: 400,
      name: '下载并安装-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="fliggy_update_cancel_btn"] <<n * [text="下载并安装"][vid="fliggy_update_ok_tv"]',
          ],
          activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
        },
      ],
    },
    {
      key: 499,
      name: '首页-引导',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[desc="跳过"][clickable=true]'],
          activityIds: ['.home.HomeActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 500,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="跳过"][clickable=true]',
            '[text~="跳过  [0-9]"] < @[id$="vilon_close_miss"]',
            '@[vid="anythink_myoffer_splash_skip_area"] > [text="跳过"]',
          ],
          activityIds: [
            'com.fliggy.android.fliggy_3ad_sdk.Fliggy3adSplashActivity',
          ],
        },
      ],
    },
    {
      key: 501,
      name: '首页广告-跳过广告',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="跳过"] + [text="5814"]',
            '@[id$="ms_skipView"] < [id$="ms_skipView_container"]',
            '[text="跳过广告"][vid="splash_skip_hint_tv"] <<n @[vid="splash_biz_skip_ad"]',
          ],
          activityIds: [
            '.splash.ui.ImageSplashActivity',
            '.splash.ui.VideoSplashActivity',
            'com.alipay.mobile.quinox.LauncherActivity',
            'com.fliggy.android.fliggy_3ad_sdk.Fliggy3adSplashActivity',
          ],
        },
      ],
    },
    {
      key: 502,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text^="O1CN01TD5wn71Ptmtb9GAxE_"] <<n [vid="poplayer_penetrate_view_id"]',
          ],
          activityIds: ['.home.HomeActivity', '.splash.ui.ImageSplashActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="能量红包"] <<n * [text="首页"]'],
          activityIds: ['.home.HomeActivity'],
        },
      ],
    },
    {
      key: 503,
      name: '首页-能量红包-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="跳过"] + [text="5814"]',
            '@[id$="ms_skipView"] < [id$="ms_skipView_container"]',
            '[text="跳过广告"][vid="splash_skip_hint_tv"] <<n @[vid="splash_biz_skip_ad"]',
          ],
          activityIds: [
            '.splash.ui.ImageSplashActivity',
            '.splash.ui.VideoSplashActivity',
            'com.alipay.mobile.quinox.LauncherActivity',
            'com.fliggy.android.fliggy_3ad_sdk.Fliggy3adSplashActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text^="O1CN01TD5wn71Ptmtb9GAxE"] <<n [vid="poplayer_penetrate_view_id"]',
          ],
          activityIds: ['.home.HomeActivity', '.splash.ui.ImageSplashActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: ['@[text="能量红包"] <<n * [text="首页"]'],
          activityIds: ['.home.HomeActivity'],
        },
      ],
    },
    {
      key: 504,
      name: '广告-礼包-剩余*s-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="sdm_myoffer_btn_close_id"] <<n * -n * [vid="sdm_myoffer_tv_reward_tips_icon_id"] + [text~="剩余 [0-9]+s"][vid="sdm_myoffer_tv_reward_tips_id"]',
          ],
          activityIds: ['com.smartdigimkt.sdk.basead.ui.ATPortraitActivity'],
        },
      ],
    },
  ],
});
