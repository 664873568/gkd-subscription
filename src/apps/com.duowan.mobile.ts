import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duowan.mobile',
  name: 'YY',
  groups: [
    //做任务赢金币
    {
      key: 0,
      name: '做任务赢金币-登录领取',
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
          preKeys: [0,1],
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
      name: '做任务赢金币-立即签到',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
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
      name: '做任务赢金币-打开',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="提醒"][vid="message"] >n @[text="打开"][vid="btn_ok"]',
          ],
          activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
        },
      ],
    },
    {
      key: 3,
      name: '做任务赢金币-任务已完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@TextView - [text="前往领取"] -n * [text="任务已完成"]',
          ],
          activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
        },
      ],
    },
    {
      key: 4,
      name: '做任务赢金币-领奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="领奖励"]'],
          activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
        },
      ],
    },
    {
      key: 5,
      name: '做任务赢金币-恭喜获得-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@TextView  - [text="马上完成"] -n [text="恭喜获得"]'],
          activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
        },
      ],
    },
    {
      key: 6,
      name: '做任务赢金币-领奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="领奖励"]'],
          activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@TextView  - [text="马上完成"] -n [text="恭喜获得"]'],
          activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
        },
      ],
    },
    {
      key: 7,
      name: '做任务赢金币-访问YY游仓',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[desc="YY游仓"]'],
          activityIds: ['com.yy.mobile.ui.common.JsSupportWebAcitivity'],
        },
      ],
    },
    {
      key: 8,
      name: '导流结果弹窗',
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
    //功能类
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
            '[text="未成年模式"][vid="title"] >n @[text="知道了"][vid="ok_btn"]',
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
            '[text="“YY”想访问您的剪切板"][vid="message"] >n @[text="不允许"][vid="btn_cancel"]',
          ],
          activityIds: [
            'com.yy.mobile.ui.splash.SplashActivity',
            'com.yy.mobile.ui.common.JsSupportWebAcitivity',
          ],
        },
      ],
    },
  ],
});
