import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duowan.mobile',
  name: 'YY',
  groups: [
    {
      key: 0,
      name: '提现-50元',
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@View[clickable=true] > [text="50元"] + [text="今日份数已用完"]',
            '@TextView[clickable=true] + View > View > TextView',
          ],
          matches: [
            '@View[clickable=true] > [text="50元"] + [text="连续签到20天"] + [text="条件达成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@TextView[clickable=true] + View > View > TextView'],
        },
      ],
    },
    //做任务·看直播·赚金币
    {
      key: 1,
      name: '天天签到赢金币-登录领取',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@TextView[clickable=true] - [text="登录领取"][clickable=true] <n * -n * [text="天天签到赢金币！"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'TextView[clickable=true] - @[text="登录领取"][clickable=true] <n * -n * [text="天天签到赢金币！"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[text="同意并登录"][clickable=true] -n [text="温馨提示"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '天天签到赢金币-立即签到',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="立即签到"][clickable=true] -n * > [text="天天签到赢金币！"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@TextView[clickable=true][index=parent.childCount.minus(1)] -n * > [text="天天签到赢金币！"]',
          ],
        },
      ],
    },
    //做任务
    {
      key: 3,
      name: '做任务-领奖励',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@TextView[clickable=true] - [text="马上完成"] -n [text="恭喜获得"]',
            '@TextView[clickable=true] - * [text="恭喜获得"] +n [text="我知道了"] + [text="去完成"]',
          ],
          matches: ['@[text="领奖励"][clickable=true] < View <n View'],
        },
        {
          key: 1,
          anyMatches: [
            '@TextView[clickable=true] - [text="马上完成"] -n [text="恭喜获得"]',
            '@TextView[clickable=true] - * [text="恭喜获得"] +n [text="我知道了"] + [text="去完成"]',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '做任务-去完成-浏览App',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@[text="领奖励"][clickable=true] < View <n View',
            '@TextView[clickable=true] - [text="马上完成"] -n [text="恭喜获得"]',
            '@TextView[clickable=true] - * [text="恭喜获得"] +n [text="我知道了"] + [text="去完成"]',
          ],
          actionDelay: 1000,
          matches: [
            '@[text="去完成"][clickable=true] < View <n View[getChild(0).text!~="关注1位主播|直播间1次发言|充值1次|看广告视频领金币|送出0.1元礼物"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(1).text="温馨提示"] +n View > [text="取消任务"] + @[text="确认"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          matches: [
            '@[text="打开"][vid="btn_ok"][clickable=true] -n [text="取消"][vid="btn_cancel"] < * -n * [text="提醒"][vid="message"]',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          action: 'back',
          matches: ['@[desc="YY游仓"]'],
        },
      ],
    },
    {
      key: 5,
      name: '做任务-去完成-关注1位主播',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="确定"][vid="btn_ok"][clickable=true] -n [text="取消"][vid="btn_cancel"] < * -n * [text*="频道"][vid="message"]',
          ],
          activityIds: ['.basemedia.watchlive.activity.LiveTemplateActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '做任务-去完成-看广告视频领金币',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: [
            '@[text="去完成"][clickable=true] < View <n View[getChild(0).text!~="关注1位主播|直播间1次发言|充值1次|看广告视频领金币|送出0.1元礼物"]',
          ],
          actionDelay: 1000,
          matches: [
            '@[text="去完成"][clickable=true] < View <n View[getChild(0).text="看广告视频领金币"]',
          ],
          activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
        },
      ],
    },
    //看视频-com.qq.e.ads.PortraitADActivity
    {
      key: 10,
      name: '看视频-微信-提前拿奖励',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text~=".*[0-9]+ 秒.*"] + [text="提前拿奖励"] + * > @[text*="微信"][index=parent.childCount.minus(1)]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
        {
          key: 1,
          matches: [
            '@ImageView < FrameLayout + FrameLayout >n ImageView + * > [text*="微信"][index=parent.childCount.minus(1)]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '看视频-奖励将于*秒后发放',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="我要更快拿奖"] < FrameLayout <n * +n * [text="奖励将于15秒后发放"]',
            '@[text="我要更快拿奖"] < FrameLayout <n * +n * [text="奖励将于"] + [text~="[0-9]+"] + [text="秒后发放"]',
            '@[text="扭动/点击去玩小游戏提前拿奖"] <n LinearLayout < FrameLayout <n * +n * [text="奖励将于"] + [text~="[0-9]+"] + [text="秒后发放"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
        {
          key: 1,
          actionDelay: 15000,
          matches: [
            'View - @ImageView[clickable=true] - TextView < FrameLayout + WebView', //二级广告页
          ],
          activityIds: ['com.qq.e.ads.ADActivity'],
        },
        {
          key: 2,
          anyMatches: [
            '@ImageView < FrameLayout < FrameLayout - [text="恭喜获得奖励"]',
            '@ImageView < FrameLayout < FrameLayout < LinearLayout <n * -n * > [text="已完成浏览10秒，提前获得奖励"]',
            '@ImageView < FrameLayout < FrameLayout < LinearLayout <n * -n * > [text^="继续"][index=parent.childCount.minus(1)]', //继续畅玩微信小游戏-继续了解详情
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 12,
      name: '看视频-*秒后点击广告，即可获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(0).getChild(0).text="点击广告，即可获得奖励"] + * @[text="点击广告拿奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 15000,
          matches: [
            'View - @ImageView[clickable=true] - TextView < FrameLayout + WebView', //二级广告页
          ],
          activityIds: ['com.qq.e.ads.ADActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@ImageView < FrameLayout - FrameLayout[getChild(0).name$="ImageView"] - FrameLayout > [text="恭喜获得奖励"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    //导流结果弹窗
    {
      key: 38,
      name: '导流结果弹窗-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="导流结果弹窗"] >n [text="继续参与活动"] < * + @TextView[clickable=true]',
          ],
          activityIds: [
            'com.yy.mobile.ui.splash.SplashActivity',
            'com.yy.mobile.ui.common.JsSupportWebAcitivity',
          ],
        },
      ],
    },
    {
      key: 39,
      name: '导流结果弹窗-收下并送出',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'TextView[clickable=true] - * > @[text="收下并送出"][clickable=true] + [desc="任务完成后即可领取奖励"]',
          ],
          activityIds: ['.basemedia.watchlive.activity.LiveTemplateActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '打开通知权限-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="iv_close"][clickable=true] - * > [text="打开通知权限"] +n [text="去开启"]',
          ],
          activityIds: ['.basemedia.watchlive.activity.LiveTemplateActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '发现新版本-立即下载-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="btn_cancel"][clickable=true] +n [vid="button_container"] > [text="立即下载"][vid="btn_ok"]',
          ],
          activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
        },
      ],
    },
    {
      key: 42,
      name: '未成年模式-知道了',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="知道了"][vid="ok_btn"][clickable=true] - * [text="未成年模式"][vid="title"] +n [text="开启未成年模式"][vid="tips_text"]',
          ],
          activityIds: ['com.yy.mobile.ui.splash.SplashActivity'],
        },
      ],
    },
    {
      key: 43,
      name: '剪切板-不允许',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="不允许"][vid="btn_cancel"][clickable=true] < * -n * > [text="“YY”想访问您的剪切板"][vid="message"]',
          ],
          activityIds: [
            'com.yy.mobile.ui.splash.SplashActivity',
            'com.yy.mobile.ui.common.JsSupportWebAcitivity',
            'com.yy.mobile.plugin.homepage.ui.home.HomeActivity',
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
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text~="[0-9]"][vid="tvCounter"] - [text="跳过"] < @[vid="llCounter"][clickable=true] +n [text="广告"][vid="tv_adFlag"]',
          ],
          activityIds: ['com.yy.mobile.ui.splash.SplashActivity'],
        },
      ],
    },
  ],
});
