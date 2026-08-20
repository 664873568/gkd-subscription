import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duowan.mobile',
  name: 'YY',
  groups: [
    //做任务·看直播·赚金币
    {
      key: 0,
      name: '天天签到赢金币-登录领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@TextView[clickable=true] - [text="登录领取"][clickable=true] <n * -n * [text="天天签到赢金币！"]',
          ],
          activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'TextView[clickable=true] - @[text="登录领取"][clickable=true] <n * -n * [text="天天签到赢金币！"]',
          ],
          activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[text="同意并登录"][clickable=true] -n [text="温馨提示"]',
          ],
          activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
        },
      ],
    },
    {
      key: 1,
      name: '天天签到赢金币-立即签到',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="立即签到"] <<n * >n [text="天天签到赢金币！"]'],
          activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            '@TextView - [text="关注主播赚金币"] -n [text="成功领取今日金币"]',
            '@TextView - [text="关注主播赚金币"] -n [text="成功领取今日礼包"]',
          ],
          activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
        },
      ],
    },
    {
      key: 2,
      name: '做任务-去完成',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          anyMatches: [
            '@[text="去完成"][clickable=true] < * -n [text="访问YY游仓"]',
            '@[text="去完成"][clickable=true] < * -n [text="打开YY语音"]',
            '@[text="去完成"][clickable=true] < * -n [text="去头条极速版"]',
            '@[text="去完成"][clickable=true] < * -n [text="打开今日头条"]',
            '@[text="去完成"][clickable=true] < * -n [text="打开星图金融"]',
            '@[text="去完成"][clickable=true] < * -n [text="去快手极速版"]',
            '@[text="去完成"][clickable=true] < * -n [text="打开携程旅行"]',
            '@[text="去完成"][clickable=true] < * -n [text="打开京东金融"]',
            '@[text="去完成"][clickable=true] < * -n [text="打开百度地图"]',
            '@[text="去完成"][clickable=true] < * -n [text="去微博赚红包"]',
            '@[text="去完成"][clickable=true] < * -n [text="打开QQ音乐"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: ['@[desc="YY游仓"]'],
        },
        {
          preKeys: [0],
          key: 2,
          matches: [
            '@[text="打开"][vid="btn_ok"][clickable=true] -n [text="取消"][vid="btn_cancel"] < * -n * [text="提醒"][vid="message"]',
          ],
        },
        {
          key: 3,
          matches: ['@TextView - [text="前往领取"] -n * [text="任务已完成"]'],
        },
        {
          key: 4,
          matches: ['@[text="领奖励"]'],
        },
        {
          key: 5,
          matches: ['@TextView  - [text="马上完成"] -n [text="恭喜获得"]'],
        },
      ],
    },
    {
      key: 8,
      name: '做任务-频道-确定',
      desc: '你在其他设备上已登录频道，是否确认手机端进入频道，并将其他设备踢出频道？',
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
      key: 9,
      name: '提现-50元',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
      rules: [
        {
          key: 0,
          matches: ['[text="提现"] >n @View[clickable=true] > [text="50元"]'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="打开"][vid="btn_ok"][clickable=true] -n [text="取消"][vid="btn_cancel"] < * -n * [text="提示"][vid="message"]',
          ],
        },
      ],
    },
    //导流结果弹窗
    {
      key: 10,
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
      key: 11,
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
