import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '中国电信湖北客服-星币兑好礼-*元话费',
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[text="星币兑换温馨提示"] +n View > [text="取消"] + [text="确认兑换"]',
            '[text="短信验证码"] + View > View + [text="获取验证码"]',
          ],
          matches: ['[getChild(0).text$="元话费"] + View > [text="兑换"]'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['[text="星币兑换温馨提示"] +n View > [text="取消"] + [text="确认兑换"]'],
        },
        {
          preKeys: [1],
          key: 2,
          matches: ['[text="短信验证码"] + View > View + [text="获取验证码"]'],
        },
      ],
    },
    {
      key: 1,
      name: '中国电信湖北客服-星币兑好礼-*元翼支付权益金',
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[text="星币兑换温馨提示"] +n View > [text="取消"] + [text="确认兑换"]',
            '[text="短信验证码"] + View > View + [text="获取验证码"]',
          ],
          matches: ['[getChild(0).text$="元翼支付权益金"] + View > [text="兑换"]'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['[text="星币兑换温馨提示"] +n View > [text="取消"] + [text="确认兑换"]'],
        },
        {
          preKeys: [1],
          key: 2,
          matches: ['[text="短信验证码"] + View > View + [text="获取验证码"]'],
        },
      ],
    },
    {
      key: 2,
      name: '中国电信湖北客服-广告-×',
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
      rules: [
        {
          key: 0,
          matches: ['[getChild(0).getChild(0).text="广告"] + @Image'],
        },
        {
          key: 1,
          matches: ['@Image + Image + [text="恭喜您，兑换成功！"]'],
        },
      ],
    },
    {
      key: 3,
      name: '中国电信App-广告-×',
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[id="launchAppView"] +n View > [text="广告"] +n @Image[index=3] +n [text="7天内不再提示"]',
          ],
          activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
        },
      ],
    },
    {
      key: 10,
      name: '迅雷-看广告-领取',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
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
      name: '迅雷-看广告',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
      rules: [
        {
          key: 0,
          excludeMatches: ['@[text="关闭"] <<n * [text="已获得奖励"]'],
          matches: [
            '@[text="领取"] <<n * [text="看广告免费领取迅雷云添加次数"]',
          ],
        },
        {
          preKeys: 0,
          key: 1,
          actionDelay: 30000,
          matches: ['@[text="关闭"] <<n * [text="已获得奖励"]'],
        },
      ],
    },
      ],
    },
  ],
});
