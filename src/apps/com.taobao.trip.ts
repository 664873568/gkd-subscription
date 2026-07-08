import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.trip',
  name: '飞猪旅行',
  groups: [
    //天天集能量
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
      name: '天天集能量-看视频赚钱',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'none',
          matches: ['@[text="看视频赚钱"] <<n [text="天天集能量"]'],
          activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
        },
      ],
    },
    {
      key: 2,
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
      name: '看视频-跳过-立即领取',
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
    //看视频
    {
      //*暂未适配*//
      key: 10,
      name: '看视频-跳过↑',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="我要加速"] <<n * [text$="跳过"]',
            '@[text$="体验"] <<n * -n * >n [text$="跳过"]',
            '@[text="立即前往"] <<n * -n * >n [text$="跳过"]',
            '@[text="再试一次"] <<n * [text$="跳过"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 11,
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
      //*暂未适配*//
      key: 12,
      name: '看视频-跳过-×-应用详情+立即下载',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 15000,
          matches: [
            '@ImageView + [text="应用详情"] <<n * +n *[text="立即下载"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      //*暂未适配*//
      key: 13,
      name: '看视频-跳过-继续观看',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="继续观看"] <<n * +n * >n [text="跳过"]'],
          snapshotUrls: ['https://i.gkd.li/i/23497387'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 14,
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
    {
      //*暂未适配*//
      key: 15,
      name: '看视频-去领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="去领奖"] <<n * -n * >n [text="svg%3e"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    //看视频-返回|跳过|关闭
    {
      key: 16,
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
    {
      key: 17,
      name: '看视频-跳过-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 100,
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
      //*暂未适配*//
      key: 18,
      name: '看视频-礼包-领取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 100,
          matches: [
            '@[text="跳过" || desc="close_button"] <<n * -n * >n [desc="gift_box"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23476056', //跳过-继续体验
            'https://i.gkd.li/i/23476161', //跳过
            'https://i.gkd.li/i/23476430', //免费获取>×
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      //*暂未适配*//
      key: 19,
      name: '看视频-跳过-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView <<n * -n * >n [text="反馈"]'],
          snapshotUrls: ['https://i.gkd.li/i/23545935'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      //*暂未适配*//
      key: 20,
      name: '看视频-温馨提示-去领取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="去领取奖励"] -n * >n [text="温馨提示"]'],
          snapshotUrls: ['https://i.gkd.li/i/23547170'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-限时特权 免看广告',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="anythink_myoffer_inctask_cta"] <<n * +n * > [vid="anythink_myoffer_btn_close_id"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23561418',
            'https://i.gkd.li/i/23561474',
          ],
          activityIds: ['com.anythink.basead.ui.ATPortraitActivity', 'null'],
        },
      ],
    },
    {
      key: 22,
      name: '看视频-限时特权 免看广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['ImageView +2 * > [vid="anythink_myoffer_btn_close_id"]'],
          snapshotUrls: ['https://i.gkd.li/i/23561459'],
          activityIds: ['com.anythink.basead.ui.ATPortraitActivity'],
        },
      ],
    },
    {
      key: 23,
      name: '看视频-完成APP下载-即可领取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['com.qumeng.advlib.ui.front.InciteADActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          matches: [
            '@ImageView - RelativeLayout > View <<n [vid="action_bar_root"] >n [text="  广告"] + [text*="点众快看"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23561396'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="关闭广告"] - [text="去下载拿奖励"] - [text="只要完成APP下载，即可领取奖励"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23561405'],
        },
      ],
    },
    {
      key: 24,
      name: '看视频-精选推荐',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView - [text="反馈"] +n * > [text="精选推荐"]'],
          snapshotUrls: ['https://i.gkd.li/i/23561480'],
          activityIds: ['com.baidu.mobads.sdk.api.MobRewardVideoActivity'],
        },
      ],
    },
    //看视频-二级
    {
      key: 31,
      name: '看视频-跳转快应用-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@ImageView + ImageView +n [text="反馈"]'],
          snapshotUrls: ['https://i.gkd.li/i/23547990'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.activity.base.TTWebPageActivity',
            'null',
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
            '@[text$="跳过"] < [vid="anythink_myoffer_splash_skip_area"]',
            '@[vid="splash_skip_hint_tv"] <<n [vid="splash_biz_skip_ad"]',
            '@[text^="跳过"] <<n * [vid="splash_biz_bottom_image"]',
            '@[text="跳过"] + [text="5814"]',
            '@[id$="ms_skipView"] <<n * [id$="ms_img_meishu_ad_tag"]',
          ],
          activityIds: [
            'com.fliggy.android.fliggy_3ad_sdk.Fliggy3adSplashActivity',
          ],
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
          matches: ['@[text^="O1CN01TD5wn71Ptmtb9GAxE"] <<n [text="CRM Poplayer Page"]'],
          activityIds: ['.home.HomeActivity'],
        },
      ],
    },
  ],
});
