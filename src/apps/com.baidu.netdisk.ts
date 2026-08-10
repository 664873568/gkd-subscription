import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.netdisk',
  name: '百度网盘',
  groups: [
    //看视频-com.byazt.gd.Stub_Standard_Portrait_Activity
    {
      key: 20,
      name: '看视频-跳过-去体验*秒可立即领奖',
      matchRoot: true,
      actionMaximum: 3,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="我要加速领奖"] <<n * +n * [text$="跳过"] -n [text~="[0-9]+s"]',
            '@[text="我要加速领奖"] <<n * -n * [text$="跳过"] -n [text~="[0-9]+s"]',
            '@[text="立即前往"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要加速"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="立即前往加速"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要直接拿奖励"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            '@[text="我要直接拿奖励"] <<n * -n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
            'TextView - @[text="去体验"] <<n * +n * [text$="跳过"] -n [text~="去体验[0-9]+秒可立即领奖"]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-跳过-限时领取',
      matchRoot: true,
      actionMaximum: 6,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="7b144c81c2cb181f"] < * -n [text="恭喜获得奖励"]',
            '@[text="71255184fc23ad74"] < * - * [text="恭喜获得优惠券"]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="1301a2d542c5e480"] < * + [text="倒计时后将放弃优惠券"]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 23,
      name: '看视频-跳过-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 24,
      name: '看视频-礼包-再逛*秒后可领奖',
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
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 25,
      name: '看视频-礼包-再逛*秒后可领奖-下滑',
      matchRoot: true,
      actionMaximum: 3,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          order: 0,
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
          matches: [
            '[text="需要下滑浏览更多才能领取奖励哦"] < * - [id="root"] @[id="_scrollView"][childCount>1]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
        {
          order: 1,
          action: 'click',
          matches: [
            '[text="需要下滑浏览更多才能领取奖励哦"] < * - [id="root"] [id="_scrollView"][childCount=1] @[text="立即打开"]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 26,
      name: '看视频-礼包-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          excludeMatches: [
            '[text="svg%3e"] + [text~="再逛[0-9]+秒后可领奖"]',
            '[text~="[1-9][0-9]*秒"] - [text="Rkt+ZKm7ZwiYnxjnD71pWy80P5LJAAAAAElFTkSuQmCC"]',
          ],
          matches: [
            'FrameLayout - FrameLayout - FrameLayout >n @RelativeLayout[clickable=true]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 27,
      name: '看视频-礼包-奖励已领取-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@RelativeLayout[clickable=true] <<n * + * [text="svg%3e"] + [text="奖励已领取"]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 28,
      name: '看视频-礼包-跳过-*s后可领取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="立即体"] <<n * - * [text="跳过"] < * -n * ImageView + [text~="[0-9]+s后可领取奖励"]',
            //'@[text="立即体验"] <<n * - * [text="跳过"] < * -n * ImageView + [text~="[0-9]+s后可领取奖励"]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 29,
      name: '看视频-下滑-×',
      matchRoot: true,
      actionMaximum: 6,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
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
          matches: ['@[id="root"] + [text="需要下滑浏览更多才能领取奖励哦"]'],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 30,
      name: '看视频-下滑-已发放-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="svg%3e"] <<n * +n * [text="已发放"]'],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 31,
      name: '看视频-领取成功-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            'ImageView < @LinearLayout[clickable=true] -n LinearLayout > [text="领取成功"]',
            'TextView[text="跳过"] < @LinearLayout[clickable=true] -n LinearLayout > [text="领取成功"]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    {
      key: 32,
      name: '看视频-限时领取-×',
      matchRoot: true,
      actionMaximum: 6,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="icon-close.e3e3211b"] -n * [text="限时领取"]'],
          activityIds: ['com.byazt.gd.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.byazt.gd.Stub_Standard_Activity
    {
      key: 33,
      name: '看视频-跳过-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 16000,
          matches: ['@[id="floatingBuyBar"] - [id="web"]'],
          activityIds: ['com.byazt.gd.Stub_Standard_Activity'],
        },
      ],
    },
    {
      key: 34,
      name: '看视频-二级广告页-byazt',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 16000,
          matches: [
            'View - View - @LinearLayout [id="web"] + [id="floatingBuyBar"]',
          ],
          activityIds: ['com.byazt.gd.Stub_Standard_Activity'],
        },
      ],
    },
    //看视频-com.byazt.ff.Stub_Standard_Portrait_Activity
    {
      key: 35,
      name: '看视频-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@Image < [id="694d63"] < [id="ef6da1"]'],
          activityIds: ['com.byazt.ff.Stub_Standard_Portrait_Activity'],
        },
      ],
    },
    //看视频-com.kwad.sdk.api.proxy.app.KsRewardVideoActivity
    {
      key: 40,
      name: '看视频-礼包-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="跳过"] <<n [desc="skip_button"] <n * - * [desc="gift_box"]',
          ],
          activityIds: ['com.kwad.sdk.api.proxy.app.KsRewardVideoActivity'],
        },
      ],
    },
    //看视频-com.qq.e.ads.PortraitADActivity
    {
      key: 50,
      name: '看视频-完成App.*，即可获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="点击下载或打开第三方应用"] <<n * +n * [text~="完成App.*，即可获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '看视频-打开App体验*秒，即可获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="点击打开或下载第三方应用"] <<n * +n * [text~="打开App体验[0-9]+秒，即可获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 52,
      name: '看视频-免-恭喜获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView < FrameLayout <n * < * - * [text="恭喜获得奖励"] < * + FrameLayout ImageView + FrameLayout',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 53,
      name: '看视频-恭喜获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView < FrameLayout < FrameLayout < LinearLayout <n * -n * [text="已完成浏览15秒，提前获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 54,
      name: '看视频-恭喜获得奖励！-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView - * [text="恭喜获得奖励！"]'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 55,
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
      key: 56,
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
      key: 57,
      name: '看视频-奖励将于*秒后发放',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="我要更快拿奖"] < FrameLayout <n * +n * [text="奖励将于"] + [text~="[0-9]+"] + [text="秒后发放"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 58,
      name: '看视频-已完成浏览10秒，提前获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView <<n * -n * [text="已完成浏览10秒，提前获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 59,
      name: '看视频-奖励将于*秒后发放-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'ImageView < FrameLayout < @FrameLayout + * [text="查看详情"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    //看视频-com.qq.e.ads.PortraitADActivity-微信
    {
      key: 60,
      name: '看视频-微信-提前拿奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text*="微信"] <n FrameLayout - [text="提前拿奖励"] - [text~="试看[0-9]+ 秒短剧"]',
            '@[text*="微信"] <n FrameLayout - [text="提前拿奖励"] - [text~="玩[0-9]+ 秒小游戏"]',
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
      matchDelay: 2000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'ImageView < @FrameLayout + FrameLayout >2 ImageView + * [text*="微信"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 62,
      name: '看视频-微信-阅读小说 可获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="点击去微信看全文"] <<n * - * [text="阅读小说"] + [text="可获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 63,
      name: '看视频-微信-恭喜已经获得奖励！',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView < FrameLayout < FrameLayout - [text="恭喜已经获得奖励！"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    //看视频-.platform.business.incentive.advertise.ui.AdvertiseActivity
    {
      key: 100,
      name: '看视频-关闭广告',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="关闭广告"][vid="btn_close"]'],
          activityIds: [
            '.platform.business.incentive.advertise.ui.AdvertiseActivity',
          ],
        },
      ],
    },
    {
      key: 199,
      name: '会员频道-会员等级体系新升级-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@TextView[clickable=true] -2 [text="会员等级体系新升级"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    //任务中心
    //第一轮：25.09.28-25.12.26
    //第二轮：25.12.27-26.03.26
    //第三轮：26.03.27-26.06.24
    //第四轮：26.06.25-26.09.22
    //任务中心-.ui.cloudp2p.RichMediaActivity
    //每日签到
    {
      key: 200,
      name: '签到成功-看视频积分翻倍',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageButton[text="fanbei"][clickable=true] -n [text="qiandao"] - View > [text="c"]',
          ],
          activityIds: [
            '.ui.cloudp2p.RichMediaActivity',
            '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
          ],
        },
      ],
    },
    {
      key: 201,
      name: '签到成功-今日积分已翻倍',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageButton[text="c"][clickable=true] < View + [text="qiandao"] +n [text="yifanbei"]',
          ],
          activityIds: [
            '.ui.cloudp2p.RichMediaActivity',
            '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
          ],
        },
      ],
    },
    {
      key: 202,
      name: '开宝箱+5积分',
      matchRoot: true,
      actionMaximum: 6,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          matches: [
            '[id="task-system-main"] >n @View[clickable=true] >n [text="开宝箱"] + [text="+5积分"]',
          ],
          activityIds: [
            '.ui.cloudp2p.RichMediaActivity',
            '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          matches: [
            '[id="task-system-main"] >n @View[clickable=true] > [text~="[0-9]+:[0-9]+后开启点我减[0-9]+分钟"]',
          ],
          activityIds: [
            '.ui.cloudp2p.RichMediaActivity',
            '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
          ],
        },
      ],
    },
    {
      key: 203,
      name: '开宝箱-*后开启点我减*分钟',
      matchRoot: true,
      actionMaximum: 6,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: [
            '[id="task-system-main"] >n @View[clickable=true] > [text~="[0-9]+:[0-9]+后开启点我减[0-9]+分钟"]',
          ],
          activityIds: [
            '.ui.cloudp2p.RichMediaActivity',
            '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
          ],
        },
      ],
    },
    //做任务赚积分
    //日常任务
    {
      key: 210,
      name: '日常任务-会员日-任务已完成 点击去领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'View > View > @[text="done"][clickable=true] + [text=" "] + [text="2bd7c5199a3f9703e3ae80849"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 211,
      name: '日常任务-集勋章抽金条手机',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="lingqujiangli"][clickable=true] - View > [text="task-close"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 212,
      name: '日常任务-小程序点图文',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="left_button"] <<n * +n * [text="恭喜获得"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 213,
      name: '日常任务-体验一刻相册',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="left_button"][clickable=true] +2 [text="福利来袭X-永久无限空间限时抢"][vid="middle_title_text"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 214,
      name: '日常任务-去玩游戏合成3次',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 30000,
          matches: ['@[id="GameCanvas"] < [id="Cocos2dGameContainer"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 215,
      name: '日常任务-去寻道砍树3次',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="lingqujiangli"] < @View[text=""][clickable=true] + [desc="close"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 219,
      name: '日常任务-奇妙赏',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="lingqujiangli"] < @View[text=""][clickable=true] - View [text="task-close"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    //最新AI功能
    {
      key: 220,
      name: '最新AI功能-云一朵文件智能整理',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[id="android:id/button1"] <<n * -n [text="Z 侏罗纪：重生"][vid="text1"]',
          ],
          activityIds: ['.ui.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            '[text="智能整理"][vid="ui_id_menu_text"] <n @RelativeLayout[clickable=true]',
          ],
          activityIds: ['.ui.MainActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: ['.aigc.ui.activity.AigcChatActivity'],
        },
      ],
    },
    {
      key: 221,
      name: '最新AI功能-体验AI笔记',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[vid="cover"] < @RelativeLayout[clickable=true] < [vid="recent_pager"] <<n * +n * [text="选视频生成ai笔记"][vid="tv_title"]',
          ],
          activityIds: ['.servicepage.video.ui.VideoServiceActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: [
            '[text="笔记"][vid="view_video_content_child_tab_item_layout_text"] < RelativeLayout < @LinearLayout[clickable=true] <<n * +n * [text="选视频生成ai笔记"][vid="tv_title"]',
          ],
          activityIds: ['.video.VideoPlayerActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: ['.video.VideoPlayerActivity'],
        },
      ],
    },
    {
      key: 222,
      name: '最新AI功能-体验AI拍一拍',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="take_ai_photo_button"] <<n * + * [text="体验AI拍一拍"][vid="tv_title"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: [
            '.scan.ai.camera.ui.classifyscenepage.ScanAiCameraClassifySceneActivity',
          ],
        },
      ],
    },
    {
      key: 2221,
      name: '最新AI功能-体验AI拍一拍-立即拍摄',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text="立即拍摄"][vid="button_online_large_sample_take_shot"][focusable=true]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: [
            '.scan.ai.camera.ui.classifyscenepage.ScanAiCameraClassifySceneActivity',
          ],
        },
      ],
    },
    {
      key: 2222,
      name: '最新AI功能-体验AI拍一拍-返回',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="take_ai_photo_button"] <<n * + * [text="体验AI拍一拍"][vid="tv_title"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@ImageView[clickable=true] + [desc="自动消除"] + [desc="手动消除"]',
          ],
          activityIds: [
            '.scan.ai.camera.ui.classifyscenepage.ScanAiCameraClassifySceneActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[desc="确认退出"][clickable=true] - [desc="再考虑下"] < * - [desc="提示"]',
          ],
          activityIds: [
            '.scan.ai.camera.ui.classifyscenepage.ScanAiCameraClassifySceneActivity',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: ['@ImageView[clickable=true] +2 [desc="保存"]'],
          activityIds: [
            '.scan.ai.camera.ui.classifyscenepage.ScanAiCameraClassifySceneActivity',
          ],
        },
        {
          preKeys: [0, 1, 2, 3],
          key: 4,
          action: 'back',
          actionDelay: 2000,
          matches: [
            '@[vid="ocr_bottom_image"] < [vid="bottom_image_container"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
      ],
    },
    {
      key: 223,
      name: '最新AI功能-体验AI去水印',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="take_ai_photo_button"] <<n * + * [text="体验AI去水印"][vid="tv_title"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: [
            '.scan.ai.camera.ui.classifyscenepage.ScanAiCameraClassifySceneActivity',
          ],
        },
      ],
    },
    {
      key: 2223,
      name: '最新AI功能-体验AI去水印-返回',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[vid="take_ai_photo_button"] <<n * + * [text="体验AI去水印"][vid="tv_title"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@ImageView[clickable=true] + [desc="自动消除"] + [desc="手动消除"]',
          ],
          activityIds: [
            '.scan.ai.camera.ui.classifyscenepage.ScanAiCameraClassifySceneActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[desc="确认退出"][clickable=true] - [desc="再考虑下"] < * - [desc="提示"]',
          ],
          activityIds: [
            '.scan.ai.camera.ui.classifyscenepage.ScanAiCameraClassifySceneActivity',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: ['@ImageView[clickable=true] +2 [desc="保存"]'],
          activityIds: [
            '.scan.ai.camera.ui.classifyscenepage.ScanAiCameraClassifySceneActivity',
          ],
        },
        {
          preKeys: [0, 1, 2, 3],
          key: 4,
          action: 'back',
          actionDelay: 2000,
          matches: [
            '@[vid="ocr_bottom_image"] < [vid="bottom_image_container"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
      ],
    },
    {
      key: 224,
      name: '最新AI功能-体验AI变清晰',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="take_ai_photo_button"] <<n * + * [text="体验AI变清晰"][vid="tv_title"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: [
            '.scan.ai.camera.ui.classifyscenepage.ScanAiCameraClassifySceneActivity',
          ],
        },
      ],
    },
    {
      key: 225,
      name: '最新AI功能-体验AI照相馆',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text="dyr-dt"] < @View[text=""][clickable=true] <<n * + * [text="点击写真模板"][vid="tv_title"]',
          ],
          activityIds: ['.scan.ui.aiphotostudio.AiPhotoStudioWebViewActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: ['.scan.ui.aiphotostudio.AiPhotoStudioWebViewActivity'],
        },
      ],
    },
    {
      key: 226,
      name: '最新AI功能-体验AI消除',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="take_ai_photo_button"] <<n * + * [text="体验AI消除"][vid="tv_title"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: [
            '.scan.ai.camera.ui.classifyscenepage.ScanAiCameraClassifySceneActivity',
          ],
        },
      ],
    },
    {
      key: 227,
      name: '最新AI功能-体验AI去手写',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="take_ai_photo_button"] <<n * + * [text="体验AI去手写"][vid="tv_title"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: [
            '.scan.ui.aiphotostudio.AiPhotoStudioWebViewActivity',
            '.scan.ai.camera.ui.classifyscenepage.ScanAiCameraClassifySceneActivity',
          ],
        },
      ],
    },
    {
      key: 228,
      name: '最新AI功能-去体验错题收集',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="相册导入"][vid="question_collect_gallery"] <<n * + * [text="拍摄错题并录入"][vid="tv_title"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          key: 1,
          actionDelay: 1000,
          preKeys: [0],
          anyMatches: [
            '[text="4月25日"][vid="text_view_date"] < LinearLayout + @ViewGroup[clickable=true] <<n * + * [text="确定（0/99）"][vid="btn_confirm"]',
            '[text="2025年12月27日"][vid="text_view_date"] < LinearLayout + @ViewGroup[clickable=true] <<n * + * [text="确定（0/99）"][vid="btn_confirm"]',
            '@[vid="imageview_checkbox"] <<n [vid="grid_item_layout"][index=1] <<n [vid="fragment_container"] + [vid="bottom_bar"] > [text="已选：0/99"][vid="select_count_text"]',
          ],
          activityIds: [
            '.kmp.bridge.KmpSharedActivity',
            '.ui.localfile.selectfile.LocalImageSelectActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 1000,
          anyMatches: [
            '@[text="确定（1/99）"][vid="btn_confirm"][clickable=true]',
            '@[text="完成"][vid="done_button"] - [text="已选：1/99"][vid="select_count_text"]',
          ],
          activityIds: [
            '.kmp.bridge.KmpSharedActivity',
            '.ui.localfile.selectfile.LocalImageSelectActivity',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: [
            'ImageView - @ImageView[clickable=true] - ImageView - View <<n * + * [text="拍摄错题并录入"][vid="tv_title"]',
          ],
          activityIds: [
            '.kmp.bridge.KmpSharedActivity',
            '.ui.localfile.selectfile.LocalImageSelectActivity',
            'com.baidu.flutter.netdisk.documentscan.OCRRectifyActivity',
          ],
        },
        {
          preKeys: [0, 1, 2, 3],
          key: 4,
          matches: [
            '@[desc="录入错题"][clickable=true] -n [desc="已选择 1 道题目"] <<n * + * [text="拍摄错题并录入"][vid="tv_title"]',
          ],
          activityIds: [
            '.ui.localfile.selectfile.LocalImageSelectActivity',
            'com.baidu.flutter.netdisk.documentscan.OCRRectifyActivity',
          ],
        },
        {
          preKeys: [0, 1, 2, 3, 4],
          key: 5,
          matches: [
            '@[text="全部保存"][clickable=true] <<n * + * [text="拍摄错题并录入"][vid="tv_title"]',
          ],
          activityIds: ['.scan.paper.learn.LearnWebViewActivity'],
        },
        {
          preKeys: [0, 1, 2, 3, 4, 5],
          key: 6,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: ['.scan.paper.learn.LearnWebViewActivity'],
        },
      ],
    },
    {
      key: 229,
      name: '最新AI功能-去体验拍题解题',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="take_photo_button"] <<n * + * [text="拍摄题目并解题"][vid="tv_title"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@ImageView[clickable=true] -2 [desc="每次只框一题，识别更准确"] <<n * + * [text="拍摄题目并解题"][vid="tv_title"]',
          ],
          activityIds: [
            'com.baidu.flutter.netdisk.documentscan.OCRRectifyActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: [
            'com.baidu.flutter.netdisk.documentscan.OCRRectifyActivity',
          ],
        },
      ],
    },
    //功能任务
    {
      key: 230,
      name: '功能任务-去刷一刷首页',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
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
          matches: [
            '@[vid="sticky_nested_layout"] > [vid="stickyContentView"]',
          ],
          activityIds: ['.ui.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="任务完成"][vid="tv_title"] -n [vid="gif_lottie_view"][clickable=true]',
          ],
          activityIds: ['.ui.MainActivity'],
        },
      ],
    },
    {
      key: 231,
      name: '功能任务-浏览书城小说30s',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="任务完成"][vid="tv_title"] -n [vid="gif_lottie_view"][clickable=true]',
          ],
          activityIds: ['.bdreader.ui.view.NovelMainActivity'],
        },
      ],
    },
    {
      key: 232,
      name: '功能任务-去逛逛游戏频道',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@TextView[text=""][clickable=true] - TextView[clickable=true] < View -n * [text="游戏中心"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 233,
      name: '功能任务-浏览短剧30s',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="layout_drag"][clickable=true] >n [text="任务完成"][vid="tv_title"]',
          ],
          activityIds: ['.playerlet.ui.ShortPlayServiceActivity'],
        },
      ],
    },
    {
      key: 235,
      name: '功能任务-去体验云打印-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageButton +n [text="立即使用"] <<n [text="简单打印"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 236,
      name: '功能任务-去体验云打印-手机相册',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: ['@[text="上传中..."] - View < View < View'],
          matches: [
            '@[text=""][clickable=true] + [id="noticeSwiper"] <<n * + * [text="上传任意文件"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="未选择任何文件"][clickable=true] - [text="手机相册"] <<n * + * [text="上传任意文件"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 237,
      name: '功能任务-去体验云打印-确定',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="确定"][clickable=true] - [text="预览"] <<n * + * [text="上传任意文件"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@View[text=""][clickable=true] > TextView[clickable=true] + [text="任务完成领奖"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    //26.07.09-29.07.31 集勋章 赢大奖
    //做任务赢勋章抽大奖
    {
      key: 300,
      name: '好运签日历',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[desc="关闭按钮"] < @View[clickable=true] < * - * [text="sign-shop"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    //工作星球-一键生成PPT
    {
      key: 301,
      name: '工作星球-一键生成PPT',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[vid="send_msg_icon"] <n [vid="genflow_input_container"]',
          ],
          activityIds: ['.aigc.ui.activity.AigcChatActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: ['@[vid="layout_drag"][clickable=true] >n [vid="iv_close"]'],
          activityIds: ['.aigc.ui.activity.AigcChatActivity'],
        },
      ],
    },
    //工作星球-模拟面试练习
    {
      key: 302,
      name: '工作星球-模拟面试练习',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[vid="view_anchor"] + [vid="ll_tip"] > [text="我知道了"][vid="iv_close"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: ['@[vid="layout_drag"][clickable=true] >n [vid="iv_close"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    //工作星球-智能剪辑出片
    {
      key: 303,
      name: '工作星球-智能剪辑出片',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: ['@[text="transBtn"] < View + View >n [desc="关闭按钮"]'],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          matches: [
            '@[vid="send_msg_icon"] <n [vid="genflow_input_container"]',
          ],
          activityIds: ['.aigc.ui.activity.AigcChatActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 2000,
          matches: [
            '@[vid="title_quit"][clickable=true] <<n * +n * [text="任务处理中…"][vid="genflow_sub_desc"]',
          ],
          activityIds: ['.aigc.ui.activity.AigcChatActivity'],
        },
      ],
    },
    //学习星球-一键生成笔记
    {
      key: 304,
      name: '学习星球-一键生成笔记',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: ['@[vid="cover"] <<n [vid="recent_pager"]'],
          activityIds: ['.servicepage.video.ui.VideoServiceActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          matches: [
            '[text="笔记"][vid="view_video_content_child_tab_item_layout_text"] < RelativeLayout < @LinearLayout[clickable=true] <<n * + * [text="我知道了"][vid="iv_close"]',
          ],
          activityIds: ['.video.VideoPlayerActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 5000,
          matches: ['@[vid="layout_drag"][clickable=true] >n [vid="iv_close"]'],
          activityIds: ['.video.VideoPlayerActivity'],
        },
      ],
    },
    //学习星球-纸质资料扫描
    {
      key: 305,
      name: '学习星球-纸质资料扫描',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: ['@[vid="rb_camera"] -n * [vid="tv_no_records"]'],
          activityIds: ['.scan.ui.ScanActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          matches: [
            '@ImageView[clickable=true] <<n [vid="ocr_title_bar_container"] +n [text="拍摄纸质资料，生成高清电子版"][vid="take_photo_tip"]',
          ],
          activityIds: ['.ocr.OCRTakePhotoActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 2000,
          matches: ['@[vid="iv_back"] + [vid="iv_title"] + [vid="iv_search"]'],
          activityIds: ['.scan.ui.ScanActivity'],
        },
      ],
    },
    //学习星球-
    {
      key: 306,
      name: '学习星球-录音',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: ['@[vid="bottom_btn"] < [vid="container_bottom_btn"]'],
          activityIds: ['.listen.notes.ui.activity.ListenNoteMainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: ['@[vid="layout_drag"][clickable=true] >n [vid="iv_close"]'],
          activityIds: ['.listen.notes.ui.activity.ListenNotesPlayActivity'],
        },
      ],
    },
    //生活星球-记录成长轨迹
    {
      key: 307,
      name: '生活星球-记录成长轨迹',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@View[clickable=true] + [text="成长轨迹"] <<n * + * [text="我知道了"][vid="iv_close"]',
          ],
          activityIds: ['.cloudimage.ui.view.AlbumServiceActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          matches: ['[text="做同款"] < @View'],
          activityIds: ['.kmp.bridge.KmpSharedActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 2000,
          matches: [
            '[text="手动选图"] < @View[clickable=true] -n [text="为你智能匹配相关照片"]',
          ],
          activityIds: ['.kmp.bridge.KmpSharedActivity'],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          actionDelay: 2000,
          matches: ['[text="确定"] < @View[clickable=true] - [text="已选5张"]'],
          activityIds: ['.kmp.bridge.KmpSharedActivity'],
        },
        {
          preKeys: [0, 1, 2, 3],
          key: 4,
          actionDelay: 5000,
          matches: ['@[vid="layout_drag"][clickable=true] >n [vid="iv_close"]'],
          activityIds: ['.kmp.bridge.KmpSharedActivity'],
        },
      ],
    },
    //生活星球-生成写真照片
    {
      key: 308,
      name: '生活星球-生成写真照片',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="dyr-dt"] < @View <<n [vid="rl_red_bag_root"] + * [text="我知道了"][vid="iv_close"]',
          ],
          activityIds: ['.scan.ui.aiphotostudio.AiPhotoStudioWebViewActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: ['@[vid="layout_drag"][clickable=true] >n [vid="iv_close"]'],
          activityIds: ['.scan.ui.aiphotostudio.AiPhotoStudioWebViewActivity'],
        },
      ],
    },
    //生活星球-新建我的相簿
    {
      key: 309,
      name: '生活星球-新建我的相簿',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@ImageView[clickable=true] - View <<n * + * [vid="photo_books_album"]',
          ],
          activityIds: ['.cloudimage.ui.view.AlbumServiceActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          matches: ['@View[clickable=true] >n [text="新建自定义相簿"]'],
          activityIds: ['.kmp.bridge.KmpSharedActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 2000,
          matches: [
            '@[text="立即创建"][clickable=true][focusable=true] -n [text="新建相簿"]',
          ],
          activityIds: ['.kmp.bridge.KmpSharedActivity'],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          actionDelay: 5000,
          matches: ['@[vid="layout_drag"][clickable=true] >n [vid="iv_close"]'],
          activityIds: ['.kmp.bridge.KmpSharedActivity'],
        },
      ],
    },
    //
    {
      key: 310,
      name: '任务完成获得时光',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[desc="关闭按钮"] < @View[clickable=true] < * - * View[clickable=true] [text="btn"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    {
      key: 311,
      name: '恭喜你获得',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[desc="关闭按钮"] < @View[clickable=true] < * - * View[clickable=true] [text="prize-btn"]',
          ],
          activityIds: ['.ui.cloudp2p.RichMediaActivity'],
        },
      ],
    },
    //首页功能类
    {
      key: 400,
      name: '开启安全备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="暂不开启"][vid="not_open"][clickable=true] - [text="开启安全备份"][vid="btn_text"]',
          ],
          activityIds: ['.ui.MainActivity', '.ui.NewQuickSettingsActivity'],
        },
      ],
    },
    {
      key: 401,
      name: '开启照片自动备份',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="暂不开启"][vid="dialog_button_cancel"][clickable=true] -n [text="是否开启照片自动备份？"][vid="content_info"]',
          ],
          activityIds: ['.ui.NewQuickSettingsActivity'],
        },
      ],
    },
    {
      key: 402,
      name: '百度网盘更新啦',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="下次再说"][vid="left_btn"][clickable=true] < [vid="bottom_layout"] -n [text="百度网盘更新啦"][vid="title_tv"]',
          ],
          activityIds: [
            '.ui.MainActivity',
            '.operation.ui.offlinepkg.coincenter.CoinCenterActivity',
          ],
        },
      ],
    },
    {
      key: 403,
      name: '喜欢“百度网盘”吗？',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          action: 'back',
          matches: [
            '@[text="以后再说"][vid="tv_left_btn"][clickable=true] -n [text="喜欢“百度网盘”吗？"][vid="tv_title"]',
          ],
          activityIds: ['.ui.MainActivity'],
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
            '@[text="跳过"] + [text~="[0-9]"]',
            '@[text~="跳过 [0-9]"][clickable=true]',
            '@[text~="跳过 [0-9]"][vid="countdown"]',
            '@[text~="[0-9] \\\\| 跳过"][clickable=true]',
            '@[vid="ms_skipView"] < [vid="ms_skipView_container"]',
            '@[text~="跳过 0[0-9]"][vid="tv_skip"][clickable=true]',
            '@[text="跳过"] <n FrameLayout < [vid="content"] < FrameLayout < LinearLayout + View',
            '@View[clickable=true] <3 FrameLayout <2 FrameLayout < [vid="content"] < FrameLayout < LinearLayout + View',
          ],
          activityIds: ['.advertise.ui.SplashAdActivity'],
        },
      ],
    },
    {
      key: 501,
      name: '首页广告-跳过 *',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text~="跳过 [0-9]"][vid="countdown"]'],
          activityIds: ['.ui.MainActivity'],
        },
      ],
    },
    {
      key: 510,
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
