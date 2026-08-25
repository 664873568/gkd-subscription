import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.BaiduMap',
  name: '百度地图',
  groups: [
    //金币任务中心-com.baidu.baidumaps.MapsActivity
    {
      key: 0,
      name: '金币任务中心-签到日历-××',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.baidumaps.MapsActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[id="sign-dialog"] > [text~="已签到[0-9]+/14天"] +n @TextView[text=""][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'AlertDialog > [text="去逛逛"] -n * > @TextView[text=""][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 1,
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
      key: 2,
      name: '金币任务中心-恭喜获得任务奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@TextView[text=""][clickable=true] -n * [text="恭喜获得任务奖励"]',
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
          matches: [
            '@TextView[text=""][clickable=true] <n * +n * [text="我知道了"]',
          ],
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
            '@TextView[text=""][clickable=true] < * + * [text="继续看视频领金币"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '地图图区',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[desc="返回"][vid="title_btn_left"] - * [text="签到送好礼"][vid="title"]',
            '@[desc="返回"][vid="title_btn_left"] - * [text="千问-阿里 AI 助手"][vid="title"]',
            '@[desc="返回"][vid="title_btn_left"] <<n [vid="title_bar"] + [vid="frameLayout1"] >n [text="此功能需访问飞猪旅行APP"]',
            '@[desc="返回"][vid="title_btn_left"] <<n [vid="title_bar"] + [vid="frameLayout1"] >n [text="恭喜获得"] + [text="任务已完成\\n请返回到列表领取奖励"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '正在载入',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[text="正在载入"][vid="bm_progress_message"]'],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '全屏广告',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@ImageView < ViewGroup < ViewGroup - * [text="反馈"] <<n * + * [text="上滑或点击"] + [text="跳转至详情页或第三方应用"]',
            '@ImageView < ViewGroup < ViewGroup < ViewGroup -n * [text="反馈"] <<n * + * [text="向上滑动 或 点击"] + * > [text="跳转至详情页或第三方应用"]',
            '@ImageView < ViewGroup < ViewGroup < ViewGroup -n * [text="反馈"] <<n * -n * [text="向上滑动 或 点击"] + * > [text="跳转至详情页或第三方应用"]',
          ],
          activityIds: ['com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity'],
        },
      ],
    },
    //免费抽大奖
    {
      key: 10,
      name: '免费抽大奖-免费抽奖',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'none',
          matches: [
            '[text="免费抽大奖"] +n * > @View[clickable=true] [text="免费抽奖"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            '[text="立即领取"] < @View[clickable=true] - [text~="恭喜抽中 [0-9]+00 金币"]',
            '@TextView[text=""][clickable=true] <n * + * [text~="恭喜抽中 [0-9]0 金币"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '免费抽大奖-恭喜获得金币奖励',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '[text="立即领取"] < @View[clickable=true] - [text~="恭喜抽中 [0-9]+00 金币"]',
            '[text="再试一次"] < @View[clickable=true] - [text~="恭喜抽中 [0-9]+00 金币"]',
            '@TextView[text=""][clickable=true] <n * + * [text~="恭喜抽中 [0-9]0 金币"]',
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
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="我要加速领奖"] <<n * +n * [text$="跳过"] -n [text~="[0-9]+s"]',
            '@[text="我要加速领奖"] <<n * -n * [text$="跳过"] -n [text~="[0-9]+s"]',
            '@[text="去体验"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要加速"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要加速"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="立即前往加速"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要立即领奖"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要直接拿奖励"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
        {
          key: 1,
          actionDelay: 15000,
          matches: [
            '@ImageView[clickable=true] + ImageView[clickable=true] +2 [text="反馈"]',//二级广告页
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Activity'],
        },
        {
          key: 2,
          actionDelay: 1000,
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-礼包-再逛*秒后可领奖',
      matchRoot: true,
      matchDelay: 1000,
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
          key: 1,
          anyMatches: [
            '@[text="恭喜获得红包"]',
            '@[text=""] - [text="恭喜获得限时红包"]',
            '@[text="恭喜获得奖励"]',
            '@[text=""] - [text="恭喜获得限时奖励"]',
            '@[text="7b144c81c2cb181f"] -n * > [text="限时领取"]',
            '@[text="7b144c81c2cb181f"] < * -n * > [text="限时领取"]',
            '@[text="7875bbac9bb10fdf82dc16f0a72edb8a__20260312icon-close"] <<n * -n * [text="c7cd142a32b09ca4"]', //限时拆盲盒领奖励
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
        {
          key: 2,
          action: 'swipe',
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
          actionCd: 1000,
          matches: [
            '[text="需要下滑浏览更多才能领取奖励哦"] < * - [id="root"] @[id="_scrollView"][childCount>1]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
        {
          key: 3,
          actionCd: 1000,
          matches: [
            '[text="需要下滑浏览更多才能领取奖励哦"] < * - [id="root"] [id="_scrollView"][childCount=1] >n @TextView',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
        {
          key: 4,
          matches: [
            '@RelativeLayout[clickable=true] <<n * + * [text="svg%3e"] + [text="奖励已领取"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
        {
          key: 5,
          actionDelay: 1000,
          excludeMatches: [
            '[text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
            '[text~="[1-9][0-9]*秒"] - [text="Rkt+ZKm7ZwiYnxjnD71pWy80P5LJAAAAAElFTkSuQmCC"]',
          ],
          matches: [
            'FrameLayout - FrameLayout - FrameLayout >n @RelativeLayout[clickable=true]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 22,
      name: '看视频-下滑-已发放-*秒',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="7b144c81c2cb181f"] -n * > [text="限时领取"]',
            '@[text="7b144c81c2cb181f"] < * -n * > [text="限时领取"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
        {
          key: 1,
          action: 'swipe',
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
          actionCd: 1000,
          matches: [
            '[text="需要下滑浏览更多才能领取奖励哦"] - [id="root"] > @[id="app"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
        {
          key: 2,
          matches: ['@[text="svg%3e"] < * < * +n * [text="已发放"]'],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 23,
      name: '看视频-礼包-×b1',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@ImageView <<n [desc="close_button"] <<n * [desc="gift_box"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 24,
      name: '看视频-礼包-×b2',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          preKeys: [0],
          key: 1,
          matches: ['ImageView < @ViewGroup <<n * - * [desc="gift_box"]'],
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
            '@[text="继续播放视频内容"] -n * [text="9395b4e3ffe08bfb"]',
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
      name: '看视频-跳过 *s',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            'Image < View < View < View < @View - * [text="反馈"] < * + * [text="点击取消静音"]',
            '@[text$="跳过"] - [text="0s"] < View <n View < View -n * [text="反馈"] < * + * [text="点击取消静音"]',
          ],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 27,
      name: '看视频-广告-反馈 ×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@Image <<n * - * [text="反馈"] <<n * + * [text="上滑或点击"] + [text="跳转至详情页或第三方应用"]',
            'ImageView < LinearLayout[clickable=true] < @LinearLayout[clickable=true] - * [text="反馈"] <<n * + * [text=" 立即查看 "]',
            '@ImageView < ViewGroup < ViewGroup < ViewGroup - * [text="点击到落地页或三方APP"] <<n * + * [text="关闭悬浮球可继续浏览应用"]',//京东-惊喜等你拿
          ],
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
          matches: ['@Image < View < View + View'],
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
          matches: ['@[text$="跳过"] - [text="反馈"]'],
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
          matches: ['@Image < View - [text="反馈"]'],
          activityIds: ['com.byazt.xs.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity
    {
      key: 40,
      name: '看视频-bytedance',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
          activityIds: ['com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity'],
        },
      ],
    },
    //看视频-com.kwad.sdk.api.proxy.app.KsRewardVideoActivity
    {
      key: 50,
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
      key: 51,
      name: '看视频-点击下载免看广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="点击下载免看广告"] <<n * [text="跳过"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 52,
      name: '看视频-跳过-礼包-下载app/看*秒可直接拿奖励',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="点击下载拿奖励"][clickable=true] <<n * + * [text="下载app可直接拿奖励"] - ImageView < * + [desc="skip_button"] [text="跳过"]',
            '@[text="点击下载拿奖励"][clickable=true] <<n * + * [text~="看[0-9]+秒可直接拿奖励"] - ImageView < * + [desc="skip_button"] [text="跳过"]',
            '@[text="点击跳转拿奖励"][clickable=true] <<n * + * [text~="看[0-9]+秒可直接拿奖励"] - ImageView < * + [desc="skip_button"] [text="跳过"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 16000,
          matches: [
            '@[id$="ksad_kwad_web_navi_back"] + [id$="ksad_kwad_web_navi_close"] + [id$="ksad_kwad_titlebar_title"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[text="残忍离开"] +n [text="留下看看"] <n * -n [text="真的不再看看了吗？"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: [
            '@[text="跳过"][clickable=true] <<n * - * [desc="gift_box"]',
          ],
        },
      ],
    },
    {
      key: 53,
      name: '看视频-礼包-×k',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['ImageView < @ViewGroup <n * + * [desc="gift_box"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 54,
      name: '看视频-礼包-跳过',
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
      key: 55,
      name: '看视频-恭喜获得福利',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="点击跳转免看广告"] <<n * [text="恭喜获得"]'],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    {
      key: 56,
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
    {
      key: 57,
      name: '看视频-礼包-免费获取-×',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: [
            '@[id$="ksad_end_close_btn"][clickable=true] - [text="免费获取"] < * - * > [id$="ksad_end_reward_icon"]',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    //看视频-com.qq.e.ads.PortraitADActivity
    {
      key: 60,
      name: '看视频-微信-提前拿奖励',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text*="微信"][index=parent.childCount.minus(1)] <n * - [text="提前拿奖励"] - [text~="试看[0-9]+ 秒短剧"]',
            '@[text*="微信"][index=parent.childCount.minus(1)] <n * - [text="提前拿奖励"] - [text~="玩[0-9]+ 秒小游戏"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
        {
          key: 1,
          actionDelay: 15000,
          matches: ['@ImageView < FrameLayout + FrameLayout >2 ImageView'], //二级广告页
          activityIds: ['com.qq.e.ads.ADActivity'],
        },
        {
          key: 2,
          matches: [
            'ImageView < @FrameLayout + FrameLayout >2 ImageView + * [text*="微信"][index=parent.childCount.minus(1)]', //恭喜获得奖励
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 61,
      name: '看视频-恭喜获得奖励！-×',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView[clickable=true] -2 ImageView + LinearLayout > [text="恭喜获得奖励！"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 63,
      name: '看视频-点击广告拿奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.qq.e.ads.PortraitADActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="点击广告拿奖励"] <<n * [text="点击广告，即可获得奖励"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@ImageView < FrameLayout -2 FrameLayout > [text="恭喜获得奖励"]',
          ],
        },
      ],
    },
    {
      key: 64,
      name: '看视频-广告-××',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@ImageView < FrameLayout < FrameLayout + * [text="滑动/点击了解更多"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@ImageView < FrameLayout < FrameLayout + * [text="立即下载"]',
            '@ImageView < FrameLayout < FrameLayout + * [text="下载游戏"]',
            //'@ImageView < FrameLayout < FrameLayout + FrameLayout[getChild(2).getChild(1).name$="TextView"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 65,
      name: '看视频-广告-×qq',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView < FrameLayout + LinearLayout + ImageView'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 66,
      name: '看视频-免-恭喜获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView <<4 * - * [text="恭喜获得奖励"]'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 67,
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
      key: 68,
      name: '看视频-打开App体验*秒，即可获得奖励',
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
    {
      key: 70,
      name: '看视频-奖励将于*秒后发放',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.qq.e.ads.PortraitADActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="我要更快拿奖"] < FrameLayout <n * +n * [text="奖励将于"] + [text~="[0-9]+"] + [text="秒后发放"]',
          ],
        },
        {
          key: 1,
          matches: [
            'ImageView < FrameLayout < @FrameLayout < LinearLayout <n * -n * [text~="已完成浏览[0-9]+秒，提前获得奖励"]',
          ],
        },
      ],
    },
    //看视频-com.sigmob.sdk.base.common.PortraitAdActivity
    {
      key: 80,
      name: '看视频-跳过-浏览*秒领取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '[text="立即前往"] < @View[clickable=true] <<n * -n * [text~="浏览[0-9]+秒领取奖励"] + [id="close_btn"] [text$="跳过"]',
            '[text="立即试玩"] < @View[clickable=true] <<n * -n * [text~="浏览[0-9]+秒领取奖励"] + [id="close_btn"] [text$="跳过"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 10000,
          matches: ['@ImageView[clickable=true] + [text="正在跳转"]'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: ['@[text="跳过"] - [text="奖励已下发"]'],
        },
      ],
    },
    {
      key: 81,
      name: '看视频-跳过-奖励已下发',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
      rules: [
        {
          key: 0,
          matches: ['@[text="跳过"] <n [id="close_btn"] - [text="奖励已下发"]'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[id="close_btn"][clickable=true] - [text="反馈"] - * [text="马上去看看"]',
          ],
        },
      ],
    },
    {
      key: 82,
      name: '看视频-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[id="close_btn"][clickable=true]'],
          activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
        },
      ],
    },
    {
      key: 84,
      name: '看视频-跳过-*s后可领取奖励-免',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '[text="立即前往"] <n @View[clickable=true] <<n * -n * [id="close_btn"] > [text="免"] + [text~="[0-9]+s后可领取奖励"] + [text$="跳过"]',
            '[text="立即试玩"] <n @View[clickable=true] <<n * -n * [id="close_btn"] > [text="免"] + [text~="[0-9]+s后可领取奖励"] + [text$="跳过"]',
          ],
          activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
        },
        {
          key: 1,
          actionDelay: 10000,
          matches: ['@ImageView[clickable=true] <<n * + * [id="ldbody"]'],
          activityIds: ['com.sigmob.sdk.base.common.AdActivity'],
        },
        {
          key: 2,
          matches: [
            '@[text$="跳过"][clickable=true] - [text="已获得奖励"] - [text="免"] < [id="close_btn"]',
          ],
          activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
        },
        {
          key: 3,
          matches: [
            '@[id="close_btn"][clickable=true] - [text="反馈"] - * [text="马上去看看"]',
          ],
          activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
        },
      ],
    },
    {
      key: 86,
      name: '看视频-跳过-点击领取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="立即领取奖励"] <<n * -n * [text="跳过"]',
            '@[text="点击领奖"] <<n * -n * [text="点击领取奖励"] +n * [text="跳过"]',
          ],
          activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
        },
      ],
    },
    {
      key: 87,
      name: '看视频-跳过-点击领取奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[id="close_btn"] < * + * [id="close_btn"] + * [text="点击前往"]',
          ],
          activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
        },
      ],
    },
    {
      key: 88,
      name: '看视频-跳过-*s后获取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 0.500',
            top: 'width * 0.152',
          },
          matches: [
            '[text="抽奖"] <<n @View -n View [text~="[0-9]+s后获取奖励"] + [id="close_btn"] >n [text="跳过"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[id="close_btn"][clickable=true]'],
        },
      ],
    },
    {
      key: 88,
      name: '看视频-跳过-已获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.sigmob.sdk.base.common.PortraitAdActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="反馈"] + [text="已获得奖励"] + [id="close_btn"] > @[text="跳过"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[id="close_btn"][clickable=true] - [text="反馈"] - * [text="马上去看看"]',
          ],
        },
      ],
    },
    //看视频-com.windmill.sdk.widget.InterstitialView_4012003
    {
      key: 90,
      name: '看视频-广告-跳过-关闭',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="关闭"][vid="tobid_interstitial_skip_text"] < @[vid="tobid_interstitial_skip_ll"][clickable=true]',
          ],
          activityIds: ['com.windmill.sdk.widget.InterstitialView_4012003'],
        },
      ],
    },
    //功能应用类
    {
      key: 400,
      name: '隐私保护指引-暂不开启',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="暂不开启"][vid="term_first_btn"][clickable=true] -n [text="隐私保护指引"][vid="term_title"]',
          ],
          activityIds: ['com.baidu.baidumaps.guide.TermsActivity'],
        },
      ],
    },
    {
      key: 401,
      name: '开启推送通知-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="push_close"][clickable=true] - * > [vid="imgGif"] + * > [text="以后再说"][vid="cancel"] + [text="去开启"][vid="go_setting"]',
          ],
          activityIds: ['com.baidu.baidumaps.MapsActivity'],
        },
      ],
    },
  ],
});
