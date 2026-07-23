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
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text="能量红包"] <<n * [text="首页"]'],
          activityIds: ['.home.HomeActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '首页-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text^="O1CN01TD5wn71Ptmtb9GAxE"] <<n [vid="poplayer_penetrate_view_id"]',
          ],
          activityIds: ['.splash.ui.ImageSplashActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '首页-能量红包-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: [
            '@[text^="O1CN01TD5wn71Ptmtb9GAxE"] <<n [vid="poplayer_penetrate_view_id"]',
          ],
          activityIds: ['.splash.ui.ImageSplashActivity'],
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
      key: 3,
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
      key: 4,
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
      key: 5,
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
      key: 6,
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
          matches: [
            '@[vid="anythink_myoffer_btn_close_id"] + [vid="anythink_myoffer_btn_close_shade_id"]',
          ],
          activityIds: ['com.anythink.core.common.inner.ui.ATPortraitActivity'],
        },
      ],
    },
    //看视频-com.baidu.mobads.sdk.api.*
    {
      key: 30,
      name: '看视频-精选推荐',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView - [text="反馈"] +3 View'],
          snapshotUrls: ['https://i.gkd.li/i/23561480'],
          activityIds: ['com.baidu.mobads.sdk.api.MobRewardVideoActivity'],
        },
      ],
    },
    {
      key: 31,
      name: '看视频-二级页-< ×',
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
    //看视频-com.anythink.basead.ui.ATPortraitActivity.*
    {
      key: 40,
      name: '看视频-跳过↓',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text^="我要"] <<n * +n * >n [text$="跳过"]',
            '@[text$="体验"] <<n * +n * >n [text$="跳过"]',
            '@[text^="立即"] <<n * +n * >n [text$="跳过"]',
            '@[text="再试一次"] <<n * +n * >n [text$="跳过"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 41,
      name: '看视频-跳过-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="跳过"] -n [text="奖励已领取"] <<n * [text="反馈"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    {
      key: 42,
      name: '看视频-跳转快应用-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView + ImageView +n [text="反馈"]'],
          snapshotUrls: ['https://i.gkd.li/i/23547990'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.activity.base.TTWebPageActivity',
          ],
        },
      ],
    },
    //看视频-com.kwad.sdk.api.proxy.app.FeedDownloadActivity
    {
      key: 50,
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
      key: 51,
      name: '看视频-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[desc="18d5b4"] <<n * [desc="virtualNode"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    //看视频-com.qq.e.ads.*
    {
      key: 60,
      name: '看视频-微信-提前拿奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text*="微信"] <n FrameLayout - [text="提前拿奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 61,
      name: '看视频-微信-恭喜获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView < FrameLayout + FrameLayout >2 ImageView',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 62,
      name: '看视频-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@ImageView[width=48&&height=48] < FrameLayout < FrameLayout',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@ImageView[width=48&&height=48] < FrameLayout < FrameLayout',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 63,
      name: '看视频-二级广告页-×',
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
      key: 70,
      name: '看视频-奖励已到账',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 31000,
          matches: [
            '@View[clickable=true] < RelativeLayout + ImageView',
          ],
          activityIds: ['com.qumeng.advlib.ui.front.InciteADActivity'],
        },
      ],
    },
    {
      key: 71,
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
      key: 80,
      name: '看视频-恭喜获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@ImageView - [text="恭喜获得奖励"]'],
          activityIds: ['com.ubix.ssp.open.comm.UBiXVideoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@ImageView - ImageView +5 TextView'],
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
    //首页广告类
    {
      key: 498,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text^="跳过"][clickable=true]',
            '@[vid="anythink_myoffer_splash_skip_area"] > [text$="跳过"]',
          ],
          activityIds: [
            'com.fliggy.android.fliggy_3ad_sdk.Fliggy3adSplashActivity',
          ],
        },
      ],
    },
    {
      key: 499,
      name: '首页广告-跳过广告',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="跳过"] + [text="5814"]',
            '@[id$="ms_skipView"] <<n * [id$="ms_img_meishu_ad_tag"]',
            '@[text="跳过广告"][vid="splash_skip_hint_tv"] <<n [vid="splash_biz_skip_ad"]',
          ],
          activityIds: [
            'com.alipay.mobile.quinox.LauncherActivity',
            '.splash.ui.VideoSplashActivity',
          ],
        },
      ],
    },
    {
      key: 500,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text^="O1CN01TD5wn71Ptmtb9GAxE_"]'],
          activityIds: ['.home.HomeActivity'],
        },
      ],
    },
  ],
});
