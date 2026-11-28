import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.trip',
  name: '飞猪旅行',
  groups: [
    {
      key: 0,
      name: '通用-浏览App返回页',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text=""] < FrameLayout < @LinearLayout[clickable=true] < LinearLayout < FrameLayout < [vid="fliggyx_navigation_bar_left"]',
          ],
          excludeMatches: [
            '[text="正在打开支付宝应用"] < WebView < * <n WebView <n [vid="trip_pull_container"] <n * [text=""]',
          ],
        },
        {
          key: 1,
          actionDelay: 10000,
          matches: [
            '[text="正在打开支付宝应用"] < WebView < * <n WebView <n [vid="trip_pull_container"] <n * [text=""] < FrameLayout < @LinearLayout[clickable=true] < LinearLayout < FrameLayout < [vid="fliggyx_navigation_bar_left"]',
          ],
        },
      ],
    },
    //22.06.21-27.09.30 天天集能量-.splash.ui.ImageSplashActivity
    {
      key: 10,
      name: '天天集能量-天降惊喜',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
      rules: [
        {
          matches: [
            '@Button[clickable=true] - Image < View < View <n View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '天天集能量-惊喜任务-下载',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@Button[text$="元"][clickable=true] <n View <n View < View <n View < View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
          excludeMatches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
            '@Button[clickable=true] - Image < View < View <n View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '立即下载',
          anyMatches: [
            '@[text="立即下载"] <n FrameLayout < FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
            '[text="取消下载"] - @View[clickable=true] -n ImageView[width=height] - ImageView < RelativeLayout < RelativeLayout < RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: [
            'com.baidu.mobads.sdk.api.BdShellActivity',
            'fliggyx.android.unicorn.ActWebviewActivity',
          ],
        },
        {
          key: 2,
          name: '已安装完成，是否立即打开-取消',
          matches: [
            '@[text="取消"][clickable=true] < LinearLayout < ScrollView <n LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          matches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout <n * [text="立即打开"]',
          ],
        },
        {
          key: 4,
          matches: [
            '@Button[text="领取奖励"][clickable=true] <n View <n View < View <n View < View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '天天集能量-惊喜任务-返回',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@Button[text$="元"][clickable=true] <n View <n View < View <n View < View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
          excludeMatches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
            '@Button[clickable=true] - Image < View < View <n View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
        },
        {
          key: 1,
          name: '取消下载',
          actionDelay: 3000,
          anyMatches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
            '@[text="取消下载"][clickable=true] -n ImageView[width=height] - ImageView < RelativeLayout < RelativeLayout < RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: [
            'com.baidu.mobads.sdk.api.BdShellActivity',
            'fliggyx.android.unicorn.ActWebviewActivity',
          ],
        },
        {
          key: 2,
          name: '二级广告页×<',
          actionDelay: 11000,
          anyMatches: [
            '@ImageView[id$="dp_close_iv"][width=height][clickable=true] < LinearLayout < RelativeLayout < [id="android:id/content"]',
            'View - TextView - @View[clickable=true] - View < RelativeLayout < LinearLayout < RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: [
            'com.beizi.ad.v2.activity.BZDpActivity',
            'com.baidu.mobads.sdk.api.AppActivity',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          actionDelay: 11000,
          matches: [
            'View - @ImageView[clickable=true] - TextView < FrameLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.qq.e.ads.ADActivity'],
        },
        {
          key: 4,
          matches: [
            '@Button[text="领取奖励"][clickable=true] <n View <n View < View <n View < View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '天天集能量-看视频领现金',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '@Button[text!~=".*逛中国移动|去淘宝点商品领红包|去支付宝领(福利|现金)|.*许愿星|.*抽奖券|.*猜对价格领奖励"][clickable=true] < View <n View -n Image < View < View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
          excludeMatches: [
            '@Button[clickable=true] - Image < View < View <n View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
            '@Button[text~=".*元|领取奖励"][clickable=true] <n View <n View < View <n View < View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            '@View[clickable=true] < [id="root"] < View < [text*="虎牙"] < * <n WebView <n [vid="trip_pull_container"]',
            '@TextView[clickable=true] - TextView < View < [text*="UC极速版"] < * <n WebView <n [vid="trip_pull_container"]',
            '@TextView[clickable=true] <n View < [id="app"] < View < [text="全民K歌"] < * <n WebView <n [vid="trip_pull_container"]',
            '@[text="打开盒马APP"][clickable=true] < View < [id="app"] < [text*="盒马"] < * <n WebView <n [vid="trip_pull_container"]',
            '[text="立即下载App"] < @View[clickable=true] <n View < View < [text*="快影"] < * <n WebView <n [vid="trip_pull_container"]',
            '@TextView[clickable=true] < View < [id="app"] < View < [text="海量小说漫剧 随心看"] < * <n WebView <n [vid="trip_pull_container"]',
            '@[text="快速进入"][clickable=true] < View <n [id="login"] < View < [text="登录"] < View <n View <n View < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          name: '任意点击一个酒店',
          action: 'back',
          matches: [
            '[text="飞猪订酒店 真划算"] < View -n @TextView[clickable=true] - TextView < View < View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '天天集能量-看视频领现金-许愿星/抽奖券',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
      rules: [
        {
          actionDelay: 2000,
          matches: [
            '@Button[text~="去淘宝点商品领红包|去支付宝领(福利|现金)|.*许愿星|.*抽奖券"][clickable=true] < View <n View <n View < View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
          excludeMatches: [
            '@Button[text!~=".*逛中国移动|去淘宝点商品领红包|去支付宝领(福利|现金)|.*许愿星|.*抽奖券|.*猜对价格领奖励"][clickable=true] < View <n View -n Image < View < View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '天天集能量-赚能量抵钱-赚更多能量',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
      rules: [
        {
          name: '赚更多能量',
          actionDelay: 5000,
          matches: [
            'View[index=parent.childCount.minus(1)] - @Button[clickable=true] <n View < View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
          excludeMatches: [
            '@Button[text!~=".*逛中国移动|.*猜对价格领奖励"][clickable=true] < View <n View -n Image < View < View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
            '[getChild(1).text="做任务赚能量"] - @Button[clickable=true] <n View <n View <n View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '天天集能量-赚能量抵钱-做任务赚能量',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[text~=".*能量"][clickable=true] -2 [text!~="逛中国移动|去点击商品领红包|去猜价格并返回猜价页"] <n View <n View < View < View <n View <n View <n View <n View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
          excludeMatches: [
            '@Button[text!~=".*逛中国移动|.*猜对价格领奖励"][clickable=true] < View <n View -n Image < View < View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
            '@[text="领取奖励"][clickable=true] <n View <n View < View < View <n View <n View <n View <n View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@TextView[clickable=true] - TextView < View < [text="UC极速版X飞猪"] < * <n WebView <n [vid="trip_pull_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          actionDelay: 5000,
          matches: [
            '@[text=""][clickable=true] <n View < View < [id="pcraft-container"] < [id="root"] < [text="猪猪宝库"] < * <n WebView <n [vid="trip_pull_container"]',
          ],
        },
        {
          key: 3,
          matches: [
            '@[text="领取奖励"][clickable=true] <n View <n View < View < View <n View <n View <n View <n View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
        },
        {
          key: 4,
          matches: [
            '@[text="立即领"][clickable=true] <n View <n View <n View < View <n View <n View <n View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
          excludeMatches: [
            '@[text~=".*能量|领取奖励"][clickable=true] -2 [text!~="逛中国移动|去点击商品领红包|去猜价格并返回猜价页"] <n View <n View < View < View <n View <n View <n View <n View < View <n View < [id="pcraft-container"] < [id="root"] < WebView < * <n WebView <n [vid="trip_pull_container"]',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '天天集能量-加载中',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 3000,
          matches: [
            '@ImageView[vid="progress"] < [vid="body"] - ImageView < FrameLayout < [id="android:id/content"]',
          ],
          activityIds: [
            'fliggyx.android.unicorn.ActWebviewActivity',
            'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
          ],
        },
      ],
    },
    //天天集能量-广告
    {
      key: 20,
      name: '天天集能量-广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '[id$="ms_skipView"] < @[id$="ms_skipView_container"]',
            '@[text="跳过"][clickable=true] <n RelativeLayout < FrameLayout < [id="android:id/content"]',
            '[text~=".*跳过|.*Skip"][vid="sdm_myoffer_splash_skip"] < @[vid="sdm_myoffer_splash_skip_area"][clickable=true]',
            '[text~=".*跳过"][vid="anythink_myoffer_splash_skip"] < @[vid="anythink_myoffer_splash_skip_area"][clickable=true]',
            '[text*="跳过"] < @FrameLayout[clickable=true] < FrameLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
          activityIds: [
            'com.fliggy.android.fliggy_3ad_sdk.Fliggy3adSplashActivity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '天天集能量-广告-礼包-剩余*s-×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.smartdigimkt.sdk.basead.ui.ATPortraitActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(2).getChild(1).text~="剩余 .*s"] -n * @[text="免看本次广告"][vid="sdm_myoffer_inctask_cta"]',
          ],
        },
        {
          key: 1,
          matches: [
            '[getChild(2).getChild(1).text~="剩余 .*s"] -n * @[text="点此领取奖励"][vid="sdm_myoffer_inctask_cta"][clickable=true]',
          ],
        },
        {
          key: 2,
          matches: [
            '@[vid="sdm_myoffer_btn_countdown_close_id"][clickable=true] < LinearLayout - * [text="已获得奖励"][vid="sdm_myoffer_tv_reward_tips_id"]',
          ],
        },
      ],
    },
    //看视频-com.anythink.basead.ui.ATPortraitActivity
    {
      key: 30,
      name: '看视频-免看本次广告',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.anythink.basead.ui.ATPortraitActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="免看本次广告"][vid="anythink_myoffer_inctask_cta"] <<n * [vid="anythink_myoffer_btn_close_id"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="anythink_myoffer_btn_close_id"] <<n * [text="点击查看详情"][vid="anythink_myoffer_cta_button_major"]',
          ],
        },
      ],
    },
    {
      key: 31,
      name: '看视频-广告-浏览-×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.anythink.core.common.inner.ui.ATPortraitActivity'],
      rules: [
        {
          key: 0,
          action: 'none',
          matches: [
            '[vid="anythink_myoffer_count_down_view_id"] < LinearLayout <n [vid="anythink_myoffer_rl_root"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[vid="anythink_myoffer_btn_close_id"][clickable=true] < FrameLayout < LinearLayout <n [vid="anythink_myoffer_rl_root"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '二级广告页',
          matches: [
            'View - @ImageView[clickable=true] - TextView < FrameLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.qq.e.ads.ADActivity'],
        },
      ],
    },
    {
      key: 32,
      name: '看视频-广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="跳过"][clickable=true] - * [text="点击跳转至第三方页面"]',
          ],
          activityIds: [
            'com.anythink.core.common.inner.ui.activity.ATMixSplashActivity',
          ],
        },
      ],
    },
    //看视频-com.baidu.mobads.sdk.api.MobRewardVideoActivity
    {
      key: 40,
      name: '看视频-跳过/×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.baidu.mobads.sdk.api.MobRewardVideoActivity',
        'com.baidu.mobads.sdk.api.BdShellActivity',
      ],
      rules: [
        {
          key: 0,
          name: '去体验.*秒可直接拿奖励',
          actionDelay: 1000,
          matches: [
            '[text~=".*体验.*秒立即领奖|我要加速领奖|返回继续体验"] <n @RelativeLayout[clickable=true] <n RelativeLayout <n RelativeLayout <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text="已领取奖励"] <n RelativeLayout < RelativeLayout <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '残忍离开',
          matches: [
            '@[text="残忍离开"][clickable=true] <n RelativeLayout < RelativeLayout < RelativeLayout <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '*奖励-跳过',
          matches: [
            '@[text="跳过"][clickable=true] <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text~="去体验.*秒可直接拿奖励|.*s后可领取奖励"] <n RelativeLayout < RelativeLayout <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
            '@[text="跳过"][clickable=true] < RelativeLayout < RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '恭喜获得奖励-跳过',
          matches: [
            '@[text="跳过"][clickable=true] < RelativeLayout < RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text~="去体验.*秒可直接拿奖励|.*s后可领取奖励"] <n RelativeLayout < RelativeLayout <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 4,
          name: '×',
          anyMatches: [
            '@ImageView[clickable=true] < RelativeLayout < RelativeLayout <n RelativeLayout < [id="android:id/content"]',
            '@ImageView[width=height][clickable=true] - [text="反馈"] <n RelativeLayout < RelativeLayout < RelativeLayout < [id="android:id/content"]',
            '@ImageView[width=height][clickable=true] - RelativeLayout - RelativeLayout < RelativeLayout - RelativeLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text~="去体验.*秒可直接拿奖励|.*s后可领取奖励"] <n RelativeLayout < RelativeLayout <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 5,
          matches: [
            'TextView - @ImageView[clickable=true] <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text~="去体验.*秒可直接拿奖励|.*s后可领取奖励"] <n RelativeLayout < RelativeLayout <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.beizi.ad.v2.activity.BeiZiNewRewardVideoActivity
    {
      key: 50,
      name: '看视频-关闭',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.beizi.ad.v2.activity.BeiZiNewRewardVideoActivity'],
      rules: [
        {
          key: 0,
          name: '观看*秒广告领取奖励/*秒后可领取奖励',
          actionDelay: 1000,
          matches: [
            '@[text~="提前领奖|继续领奖"] <n LinearLayout <n LinearLayout < LinearLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '残忍离开',
          actionDelay: 5000,
          matches: [
            '@[text="残忍离开"][clickable=true] <n LinearLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '关闭广告',
          matches: [
            '@[text="关闭广告"][clickable=true] <n LinearLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '关闭',
          matches: [
            '@TextView[text~="(立即领取 ｜ 关闭广告)|(已经获得奖励 ｜ 关闭)"][clickable=true] < LinearLayout <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text~="观看.*秒广告领取奖励"][clickable=true] < LinearLayout <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
            '@[text="关闭广告"][clickable=true] <n LinearLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.byazt.*.Stub_Standard_Portrait_Activity
    {
      key: 60,
      name: '看视频-跳过-byazt.*',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.byazt.mw.Stub_Standard_Portrait_Activity',
        'com.byazt.mw.Stub_Standard_Activity',
        'com.byazt.sr.Stub_Standard_Portrait_Activity',
        'com.byazt.sr.Stub_Standard_Activity',
        'com.byazt.tj.Stub_Standard_Portrait_Activity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          anyMatches: [
            '@[text~="去体验|立即前往|立即前往加速|我要加速|我要立即领奖|我要直接拿奖励"] <<n * [text~="去体验.*秒可立即领奖"] +n [text$="跳过"]',
            '@[text~="点击查看|立即领奖|我要加速领奖|我要直接拿奖励|恭喜获得神秘惊喜"] <<n * [text~=".*s"] + [text$="跳过"]',
            '@[text~="去体验.*秒立即领奖"] <<n * [text~=".*s"] + [text="｜跳过"]',
            '@[text~="我要立即领奖|我要减广告时长|返回继续体验"] <<n * [text="svg%3e"] + [text~="再逛.*秒后可领奖"]',
            '@View[clickable=true] - [text="reward_pop_get"] <<n * [text="svg%3e"] + [text~="再逛.*秒后可领奖"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 15000,
          anyMatches: [
            '[text="已领取"] >n @[text="svg+xml;base64"]',
            '@ImageView[clickable=true] < [getChild(1).text="应用详情"] +n [text="立即下载"]',
            'LinearLayout > FrameLayout + FrameLayout > FrameLayout > WebView - FrameLayout > TextView + @ImageView[clickable=true] + View',
            'LinearLayout > FrameLayout - LinearLayout > RelativeLayout > ImageView + @ImageView[clickable=true] + TextView + [text="反馈"]', //二级广告页
          ],
        },
        {
          preKeys: [0],
          key: 2,
          action: 'back',
          actionDelay: 15000,
          matches: ['View - View - LinearLayout >n WebView > WebView > View'],
        },
        {
          key: 3,
          anyMatches: [
            '@Image < * +n [text="限时奖励点击领取"]',
            '@[getChild(0).text="3ca6ab446dec1c57"] + [getChild(0).text="恭喜获得优惠券"]',
            '@[getChild(0).text="7b144c81c2cb181f"] -n [getChild(0).text="限时领取"]', //恭喜获得奖励
            '@[getChild(0).text="恭喜获得奖励"] + [getChild(1).getChild(1).text="以实际活动为准"]', //惊喜福利-限时优惠权益
            '@TextView - [text="恭喜获得限时奖励"] < * + [getChild(1).getChild(1).text="以实际活动为准"]', //限时优惠权益
            '[getChild(1).text="上滑或点击领取"] + [getChild(0).text="恭喜获得限时奖励"] > TextView[index=parent.childCount.minus(1)]',
          ],
        },
        {
          key: 4,
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 1000,
          },
          matches: [
            '@[id="_scrollView"][childCount>1] <n [id="app"] < [id="root"] + [getChild(0).text="需要下滑浏览更多才能领取奖励哦"] <n WebView < WebView < FrameLayout < FrameLayout < LinearLayout < FrameLayout < FrameLayout <n FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 5,
          matches: [
            '@TextView < View <n View <n View <n View < [id="_scrollView"][childCount=1] <n [id="app"] < [id="root"] + [getChild(0).text="需要下滑浏览更多才能领取奖励哦"] <n WebView < WebView < FrameLayout < FrameLayout < LinearLayout < FrameLayout < FrameLayout <n FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 6,
          anyMatches: [
            '@[text$="跳过"] -n [text="奖励已领取"]',
            '@RelativeLayout[clickable=true] <<n * + * [text="svg%3e"] + [text="奖励已领取"]',
          ],
        },
        {
          key: 7,
          actionDelay: 1000,
          matches: [
            '@RelativeLayout[clickable=true] < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text="svg%3e"] + [text~="再逛.*秒后可领奖"]',
            '[text~=".*秒"] - [text="Rkt+ZKm7ZwiYnxjnD71pWy80P5LJAAAAAElFTkSuQmCC"]',
          ],
        },
      ],
    },
    {
      key: 61,
      name: '看视频-跳过-回答正确可直接领奖byazt.mw',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text$="答对直接领奖"] <<n * + * [text="跳过"] -n [text="回答正确可直接领奖"]',
          ],
          activityIds: ['com.byazt.mw.Stub_Standard_Portrait_Activity'],
        },
        {
          key: 1,
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
        },
      ],
    },
    {
      key: 62,
      name: '看视频-礼包-*s后可领取奖励byazt.mw',
      forcedTime: 60000,
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
      key: 70,
      name: '看视频-跳过-礼包-*s后可领取奖励byazt.sr',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            'ImageView < @LinearLayout[clickable=true] -n LinearLayout[clickable=true] > ImageView + [text="领取成功"]',
            '[text="跳过"] < @LinearLayout[clickable=true] -n LinearLayout[clickable=true] > ImageView + [text="领取成功"]',
          ],
          activityIds: ['com.byazt.sr.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity
    {
      key: 80,
      name: '看视频-跳过-去体验*秒可立即领奖bsoc',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
      ],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="我要加速"] <<n * -n * [text$="跳过"] -n [text~="去体验.*秒可立即领奖"]',
          ],
        },
        {
          key: 1,
          anyMatches: [
            '@[text="恭喜获得奖励"]',
            '@[text=""] - [text="恭喜获得限时奖励"]',
          ],
        },
        {
          key: 2,
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
        },
      ],
    },
    {
      key: 81,
      name: '看视频-跳过-礼包-*s后可领取奖励bsoc',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="跳过"] < @LinearLayout[clickable=true] -n LinearLayout[clickable=true] > ImageView + [text="领取成功"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    //看视频-com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity
    {
      key: 90,
      name: '看视频-跳过-去体验*秒可立即领奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        'com.bytedance.sdk.openadsdk.core.activity.base.TTWebPageActivity',
      ],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="我要"] <<n * +n * >n [text$="跳过"]',
            '@[text="体验"] <<n * +n * >n [text$="跳过"]',
            '@[text="立即"] <<n * +n * >n [text$="跳过"]',
          ],
        },
        {
          key: 1,
          actionDelay: 15000,
          matches: ['@ImageView + ImageView +2 [text="反馈"]'], //二级广告页
        },
        {
          key: 2,
          matches: ['@[text="跳过"] -n [text="奖励已领取"]'],
        },
      ],
    },
    //看视频-com.kwad.sdk.api.proxy.app.FeedDownloadActivity
    //看视频-com.kwad.sdk.api.proxy.app.KsRewardVideoActivity
    //看视频-com.kwad.sdk.api.proxy.app.KSRewardLandScapeVideoActivity
    {
      key: 100,
      name: '看视频-跳过-礼包-kwad',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.kwad.sdk.api.proxy.app.AdWebViewActivity',
        'com.kwad.sdk.api.proxy.app.FeedDownloadActivity',
        'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
        'com.kwad.sdk.api.proxy.app.KSRewardLandScapeVideoActivity',
      ],
      rules: [
        {
          key: 0,
          name: '*|*秒后可领取奖励|看*秒可直接拿奖励',
          anyMatches: [
            '@[text~=".*免看.*广告|点击下载.*|点击跳转.*|.*拿奖励.*|.*再试一次.*"][clickable=true] < ViewGroup <n ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout <n [id="android:id/content"]',
            '@[text~=".*免看.*广告|点击下载.*|点击跳转.*|.*拿奖励.*|.*再试一次.*"][clickable=true] <n ViewGroup <n ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout <n [id="android:id/content"]',
          ],
          excludeMatches: [
            'ImageView < @[desc="gift_box"][clickable=true] < ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
            '@[desc~=".*easy-playable_scene.*_actionBtn"][clickable=true] <n ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '点击灯笼领券',
          matches: [
            '@[desc="sky_lantern_main"][clickable=true] <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '点击领取“天选福袋',
          matches: [
            '@[desc~=".*easy-playable_scene.*_iconView"][clickable=true] <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '恭喜获得天选福利',
          matches: [
            '@[desc~=".*easy-playable_scene.*_actionBtn"][clickable=true] <n ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 4,
          name: '跳过',
          anyMatches: [
            '@[text="跳过"][clickable=true] < ViewGroup < [desc="skip_button"] <n ViewGroup <n ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
            '@[text="跳过"][clickable=true] < ViewGroup < [desc="skip_button"] <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text~=".*秒后可领取奖励|看.*秒可直接拿奖励"] <n ViewGroup[clickable=true] < ViewGroup <n ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout <n [id="android:id/content"]',
            '@[text~="[0-9]+"] < ViewGroup + [desc="sound_button"] <n ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
            '@[text~="[0-9]+"] < ViewGroup + [desc="sound_button"] <n ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 5,
          name: '×-立即获取|免费获取',
          anyMatches: [
            'ImageView < ViewGroup < @ViewGroup[clickable=true] < [desc="close_button"] <n ViewGroup <n ViewGroup < ViewGroup <n ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
            'ImageView < ViewGroup < @ViewGroup[clickable=true] < [desc="close_button"] <n ViewGroup <n ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
            'ImageView < ViewGroup < @ViewGroup[clickable=true] < [desc="close_button"] <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 6,
          name: '二级广告页-< ×',
          matches: [
            'TextView - @ImageView[width=height][id$="close"][clickable=true] - ImageView[id$="back"] < RelativeLayout < LinearLayout < RelativeLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 7,
          name: '残忍离开',
          matches: [
            '@[text="残忍离开"][clickable=true] < LinearLayout <n LinearLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.meishu.sdk.activity.MeishuRewardVideoPlayerActivity
    {
      key: 110,
      name: '看视频-广告-×meishu',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.meishu.sdk.activity.MeishuRewardVideoPlayerActivity'],
      rules: [
        {
          key: 0,
          matches: [
            'ImageView < @RelativeLayout[clickable=true] < LinearLayout <n RelativeLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.qq.e.ads.PortraitADActivity
    {
      key: 120,
      name: '看视频-微信-提前拿奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.qq.e.ads.PortraitADActivity',
        'com.qq.e.ads.ADActivity',
      ],
      rules: [
        {
          key: 0,
          name: '拿奖励',
          matches: [
            '@[text~=".*微信.*(看|玩).*"][index=parent.childCount.minus(1)] <n FrameLayout <n LinearLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            'FrameLayout - @ImageView < LinearLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]', //恭喜获得奖励
          ],
        },
        {
          key: 1,
          name: '恭喜获得奖励-×',
          matches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            'FrameLayout - @[text~=".*拿奖励"] - TextView < LinearLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 121,
      name: '看视频-微信-阅读小说 可获得奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.qq.e.ads.PortraitADActivity',
        'com.qq.e.ads.ADActivity',
      ],
      rules: [
        {
          key: 0,
          name: '阅读小说 可获得奖励',
          matches: [
            '[text="点击去微信看全文"] < @LinearLayout <<n * - * [text="阅读小说"] + [text="可获得奖励"]',
          ],
        },
        {
          key: 1,
          name: '恭喜已经获得奖励！-×',
          matches: [
            '@ImageView < FrameLayout < FrameLayout - [text="恭喜已经获得奖励！"]',
          ],
        },
      ],
    },
    {
      key: 122,
      name: '看视频-奖励将于*秒后发放',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      activityIds: [
        'com.qq.e.ads.PortraitADActivity',
        'com.qq.e.ads.ADActivity',
      ],
      rules: [
        {
          key: 0,
          name: '奖励将于*秒后发放',
          anyMatches: [
            '[text~=".*更快拿奖"] < @FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text~=".*提前拿奖"] <n LinearLayout < @FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text="扭动/点击"] <n LinearLayout <n @FrameLayout <n FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '残忍离开|放弃福利',
          anyMatches: [
            '@[text="残忍离开"] <n FrameLayout < FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text="放弃福利"] < @FrameLayout <n LinearLayout < FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '*秒后点击广告*，即可获得奖励',
          matches: [
            '@[text~="点击广告.*拿奖励"] < FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text~=".*秒后点击广告.*，即可获得奖励"] < @FrameLayout < FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '二级广告页-×',
          actionDelay: 5000,
          anyMatches: [
            'View - @ImageView[clickable=true] - TextView < FrameLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
            'View - ProgressBar - @ImageView[clickable=true] - TextView < FrameLayout < LinearLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 4,
          name: '恭喜获得奖励-×',
          actionDelay: 1000,
          anyMatches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout <n FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout <n LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout <n LinearLayout <n FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text^="奖励将于"] < LinearLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '@[text^="奖励将于"] < LinearLayout < LinearLayout < LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '@[text^="奖励将于"] < LinearLayout < LinearLayout < LinearLayout <n FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text~=".*点击广告，即可获得奖励"] < @FrameLayout < FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text~="立即安装|立即体验|去微信看看"] <n @FrameLayout <n * <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text="扭动/点击"] <n LinearLayout <n @FrameLayout <n FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 5,
          name: '滑动/点击了解更多|扭动/点击*|点击下载或打开第三方应用-×',
          anyMatches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout <n FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout < LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text~=".*更快拿奖"] < @FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text~=".*提前拿奖"] <n LinearLayout < @FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text~="立即安装|立即体验|去微信看看"] <n @FrameLayout <n * <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text="扭动/点击"] <n LinearLayout <n @FrameLayout <n FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 6,
          name: '立即安装|立即体验|去微信看看|扭动/点击*-×',
          anyMatches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout < FrameLayout <n FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 8,
          name: '*已安装完成，是否立即打开？-取消',
          actionDelay: 1000,
          matches: [
            '@[text="取消"][clickable=true] < LinearLayout < ScrollView - * [text$="已安装完成，是否立即打开？"]',
          ],
          activityIds: ['com.qq.e.ads.DialogActivity'],
        },
        {
          key: 9,
          name: '浏览页面*秒后即可获得奖励',
          actionDelay: 1000,
          matches: [
            '@ImageView[clickable=true] - [getChild(0).text="恭喜获得奖励！"] - ImageView < LinearLayout < RelativeLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.qumeng.advlib.ui.front.InciteADActivity
    {
      key: 130,
      name: '看视频-体验APP，提前拿奖励-×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.qumeng.advlib.ui.front.InciteADActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            'View < LinearLayout < @RelativeLayout[clickable=true] < FrameLayout <n LinearLayout + [text="  广告"]',
          ],
        },
        {
          key: 1,
          name: '奖励已到账-×',
          matches: [
            '@ImageView[clickable=true] - RelativeLayout - ImageView - FrameLayout - FrameLayout < RelativeLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '奖励已到账-⊙',
          position: {
            left: 'width * 0.415',
            top: 'height * 0.5',
          },
          actionDelay: 1000,
          matches: [
            'ImageView - ImageView < FrameLayout - @View[clickable=true] < RelativeLayout <n RelativeLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 131,
      name: '看视频-*秒后可领奖励-×qumeng',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.qumeng.advlib.ui.front.InciteADActivity'],
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 0.39',
            top: 'height * 0.045',
          },
          matches: [
            '[text="广\\n告"] <n LinearLayout <n FrameLayout < RelativeLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="放弃奖励"][clickable=true] <n RelativeLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.smartdigimkt.sdk.basead.ui.web.WebLandPageActivity
    {
      key: 140,
      name: '看视频-完成APP下载-即可领取奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.smartdigimkt.sdk.basead.ui.web.WebLandPageActivity'],
      rules: [
        {
          name: '二级广告页',
          matches: [
            'TextView - @ImageView[width=height][clickable=true] - ImageView < LinearLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.ubix.ssp.open.comm.UBiXVideoActivity
    {
      key: 150,
      name: '看视频-点击广告并跳转获取奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.ubix.ssp.open.comm.UBiXVideoActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="立即下载"][clickable=true] <<n * -n [text="点击广告并跳转获取奖励"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[text$="广告"] -n [text="恭喜获得奖励"] < RelativeLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          matches: ['@ImageView[clickable=true] - [text="恭喜获得奖励"]'],
        },
        {
          key: 3,
          action: 'none',
          matches: [
            '@ImageView[clickable=true] - [text$="秒后获取奖励"] < RelativeLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 400,
      name: '温馨提示-同意',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[vid="privacy_tips_container"] > [text="温馨提示"][vid="privacy_dialog_title"] +n @[text="同意"][vid="btn_privacy_dialog_positive"][clickable=true]',
          ],
          activityIds: ['null'],
        },
      ],
    },
    {
      key: 401,
      name: '下载并安装-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
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
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[desc="跳过"] <n FrameLayout[clickable=true] - [vid="action_bar_root"]',
          ],
          activityIds: ['.home.HomeActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 500,
      name: '首页广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 20000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[id$="ms_skipView"] < [id$="ms_skipView_container"]',
            '@[vid="splash_biz_skip_ad"] >n [text="跳过广告"][vid="splash_skip_hint_tv"]',
          ],
          activityIds: [
            '.splash.ui.ImageSplashActivity',
            '.splash.ui.VideoSplashActivity',
            'com.alipay.mobile.quinox.LauncherActivity',
          ],
        },
      ],
    },
    {
      key: 501,
      name: '首页广告-×',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 20000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text^="O1CN01TD5wn71Ptmtb9GAxE_"] <<n [vid="poplayer_penetrate_view_id"]',
          ],
          activityIds: ['.home.HomeActivity', '.splash.ui.ImageSplashActivity'],
        },
      ],
    },
    {
      key: 502,
      name: '首页-能量红包',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'RecyclerView > FrameLayout > LinearLayout > LinearLayout > @FrameLayout[clickable=true] > [text="能量红包"]',
          ],
          activityIds: ['.home.HomeActivity'],
        },
      ],
    },
  ],
});
