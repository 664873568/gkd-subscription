import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '中国电信湖北客服-星币兑好礼',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 1000,
      resetMatch: 'activity',
      activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
      rules: [
        {
          preKeys:[0],
          key: 1,
          excludeMatches: [
            '[text="星币兑换温馨提示"] +n View > [text="取消"] + [text="确认兑换"]',
          ],
          matches: [
            '[getChild(0).text~="5元翼支付权益金|10元话费"] + View > [text="兑换"]',
          ],
        },
        {
          key: 0,
          matches: [
            'text="星币兑换温馨提示"] +n View > [text="取消"] + [text="确认兑换"]',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '迅雷-看广告-领取',
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
      key: 11,
      name: '迅雷-关闭-已获得奖励',
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
      key: 12,
      name: '迅雷-看广告-已获得奖励',
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
      key: 13,
      name: '迅雷-已获得奖励-看广告',
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
