import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    {
      key: 0,
      name: '正在跳转...-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@[vid="common_webview_navbar_left"] <<n * [text^="正在跳转"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '跳转中...-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@[vid="common_webview_navbar_left"] <<n * [text^="跳转中"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '商品详情-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@[vid="common_webview_navbar_left"] <<n * [text="商品详情"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '去玩游戏领大奖-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 1000,
          matches: [
            '@[vid="common_webview_navbar_left"] <<n * [text="去玩游戏领大奖"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '去APP完成任务-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: ['@[text$="完成任务"] <<n * [text="bottom.21109d9b"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '任务完成-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: ['@[text="任务完成，奖励已到账"] <<n * [text="bottom.21109d9b"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '此功能需访问飞猪旅行APP-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[vid="common_webview_navbar_left"] <<n * [text="此功能需访问飞猪旅行APP"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '打开飞猪',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          excludeMatches: ['@[vid="common_webview_navbar_left"] <<n * [text="此功能需访问飞猪旅行APP"]'],
          matches: ['@[text="打开飞猪"] <3 [id="__endCallTop__"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
  ],
});
