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
            '[text="提现"] >n @View[clickable=true] > [text="50元"] + [text="今日份数已用完"]',
          ],
          matches: ['[text="提现"] >n @View[clickable=true] > [text="50元"]'],
        },
        {
          key: 1,
          matches: [
            '@[text="打开"][vid="btn_ok"][clickable=true] -n [text="取消"][vid="btn_cancel"] < * -n * [text="提示"][vid="message"]',
          ],
        },
        {
          key: 2,
          matches: [
            '[text="提现"] >n @TextView[clickable=true] + View > View > TextView',
          ],
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
      key: 10,
      name: '做任务-领奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="领奖励"][clickable=true] < View <n View[index=3]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            '@TextView[clickable=true] -n [text="恭喜获得"] + [text="马上完成"]',
            '@TextView[clickable=true] - * [text="恭喜获得"] +n [text="我知道了"] + [text="去完成"]',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '做任务-去完成-访问YY游仓',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          matches: [
            '@[text="去完成"][clickable=true] < View -n [text="访问YY游仓"] < View[index=3]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: ['@[desc="YY游仓"]'],
        },
      ],
    },
    {
      key: 12,
      name: '做任务-去完成-浏览App',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@[text="领奖励"][clickable=true] < View <n View',
          ],
          anyMatches: [
            '@[text="去完成"][clickable=true] < View -n [text="打开YY语音"] < View[index=3]',
            '@[text="去完成"][clickable=true] < View -n [text="去头条极速版"] < View[index=3]',
            '@[text="去完成"][clickable=true] < View -n [text="打开今日头条"] < View[index=3]',
            //'@[text="去完成"][clickable=true] < View -n [text="关注1位主播"] < View[index=3]',
            '@[text="去完成"][clickable=true] < View -n [text="打开星图金融"] < View[index=4]',
            '@[text="去完成"][clickable=true] < View -n [text="去快手极速版"] < View[index=4]',
            '@[text="去完成"][clickable=true] < View -n [text="打开携程旅行"] < View[index=4]',
            '@[text="去完成"][clickable=true] < View -n [text="打开京东金融"] < View[index=4]',
            '@[text="去完成"][clickable=true] < View -n [text="打开百度地图"] < View[index=4]',
            //'@[text="去完成"][clickable=true] < View -n [text="充值1次"] < View[index=4]',
            //'@[text="去完成"][clickable=true] < View -n [text="看广告视频领金币"] < View[index=5]',
            //'@[text="去送礼"][clickable=true] < View -n [text="送出0.1元礼物"] < View[index=6]',
            '@[text="去完成"][clickable=true] < View -n [text="去微博赚红包"] < View[index=7]',
            '@[text="去完成"][clickable=true] < View -n [text="打开QQ音乐"] < View[index=7]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="打开"][vid="btn_ok"][clickable=true] -n [text="取消"][vid="btn_cancel"] < * -n * [text="提醒"][vid="message"]',
          ],
        },
        {
          key: 2,
          matches: [
            '@TextView[clickable=true] - [text="前往领取"] -n * [text="任务已完成"]',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '做任务-去完成-关注1位主播',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@[text="去完成"][clickable=true] < View -n [text="打开QQ音乐"] < View',
          ],
          matches: [
            '@[text="去完成"][clickable=true] < View -n [text="关注1位主播"] < View[index=3]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="确定"][vid="btn_ok"][clickable=true] -n [text="取消"][vid="btn_cancel"] < * -n * [text*="频道"][vid="message"]',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '看直播',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="做任务赢金币"] >n @View[clickable=true] >n [text~="[0-9]+分钟"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@TextView[clickable=true] - [text="知道了"] -n [text="恭喜获得"]',
          ],
        },
      ],
    },
    //导流结果弹窗
    {
      key: 30,
      name: '导流结果弹窗-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="导流结果弹窗"] >n [text="继续参与活动"] < * + @TextView',
          ],
          activityIds: [
            'com.yy.mobile.ui.splash.SplashActivity',
            'com.yy.mobile.ui.common.JsSupportWebAcitivity',
          ],
        },
      ],
    },
    {
      key: 31,
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
          matches: ['[text="打开通知权限"] >n @[vid="iv_close"]'],
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
            '@[vid="btn_cancel"] +n [vid="button_container"] > [text="立即下载"][vid="btn_ok"]',
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
  ],
});
