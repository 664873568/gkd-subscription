import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '看广告-领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 1000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: ['@[text="关闭"] <<n * [text="已获得奖励"]'],
          matches: [
            '@[text="领取"] <<n * [text="看广告免费领取迅雷云添加次数"]',
          ],
          activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
        },
      ],
    },
    {
      key: 1,
      name: '关闭-已获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 35000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 30000,
          matches: ['@[text="关闭"] <<n * [text="已获得奖励"]'],
          activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
        },
      ],
    },
    {
      key: 2,
      name: '看广告-已获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 35000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: ['@[text="关闭"] <<n * [text="已获得奖励"]'],
          matches: [
            '@[text="领取"] <<n * [text="看广告免费领取迅雷云添加次数"]',
          ],
          activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
        },
        {
          preKeys: 0,
          key: 1,
          actionDelay: 30000,
          matches: ['@[text="关闭"] <<n * [text="已获得奖励"]'],
          activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
        },
      ],
    },
    {
      key: 3,
      name: '已获得奖励-看广告',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 35000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 30000,
          matches: ['@[text="关闭"] <<n * [text="已获得奖励"]'],
          activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
        },
        {
          preKeys: 0,
          key: 1,
          excludeMatches: ['@[text="关闭"] <<n * [text="已获得奖励"]'],
          matches: [
            '@[text="领取"] <<n * [text="看广告免费领取迅雷云添加次数"]',
          ],
          activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
        },
      ],
    },
  ],
});
