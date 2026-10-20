import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 0,
      name: '中国电信湖北客服-星币兑好礼-话费',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(2).text="做任务 赚星币"] +n View > View > View > [getChild(0).text$="话费"] + [getChild(0).text="兑换"]',
          ],
          excludeMatches: [
            '[text="星币兑换温馨提示"] +n View > [text="取消"] + [text="确认兑换"]',
            '[text="短信验证码"] + View > View + [text="获取验证码"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="星币兑换温馨提示"] +n View > [text="取消"] + [text="确认兑换"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: ['[text="短信验证码"] + View > View + [text="获取验证码"]'],
        },
        {
          preKeys: [2],
          key: 3,
          matches: ['@Image + Image + [text="恭喜您，兑换成功！"]'],
        },
      ],
    },
    {
      key: 1,
      name: '中国电信湖北客服-星币兑好礼-翼支付权益金',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(2).text="做任务 赚星币"] + View > View > View > [getChild(0).text$="翼支付权益金"] + [getChild(0).text="兑换"]',
          ],
          excludeMatches: [
            '[text="星币兑换温馨提示"] +n View > [text="取消"] + [text="确认兑换"]',
            '[text="短信验证码"] + View > View + [text="获取验证码"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="星币兑换温馨提示"] +n View > [text="取消"] + [text="确认兑换"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: ['[text="短信验证码"] + View > View + [text="获取验证码"]'],
        },
        {
          preKeys: [2],
          key: 3,
          matches: ['@Image + Image + [text="恭喜您，兑换成功！"]'],
        },
      ],
    },
    {
      key: 2,
      name: '中国电信湖北客服-广告-×',
      forcedTime: 60000,
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
          name: '签到',
          actionDelay: 3000,
          matches: ['[getChild(2).text="5星权益"] + @Image'],
          excludeMatches: [
            '[getChild(2).text="做任务 赚星币"] +n View > View > View > [getChild(1).text^="消耗星币"] + [getChild(0).text="兑换"]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '中国电信App-广告-×',
      forcedTime: 60000,
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
      name: '京东金融',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.plugin.appbrand.ui.AppBrandUI00'],
      rules: [
        {
          key: 0,
          name: '频道栏',
          actionDelay: 5000,
          matches: [
            '@ImageView[desc="￼"][index=2] <n View < View < View < ScrollView < View <n View < View < View + ImageView[desc="￼"] + ImageView[desc="￼"] + ImageView[desc="￼"]',
          ],
          excludeMatches: [
            'ImageView[desc="￼"] - @[desc="特价"] - [desc="首页"]',
            'ImageView[desc="￼"] - [desc="首页"] - @[desc="特价"] - ImageView[desc="￼"] < View',
            '[desc="¥"] - @ImageView[desc="￼"] <n ScrollView < View <n View < View < View + ImageView[desc="￼"] + ImageView[desc="￼"] + ImageView[desc="￼"]',
          ],
        },
        {
          key: 1,
          name: '特价',
          anyMatches: [
            'ImageView[desc="￼"] - @[desc="特价"] - [desc="首页"]',
            'ImageView[desc="￼"] - [desc="首页"] - @[desc="特价"] - ImageView[desc="￼"] < View',
          ],
          excludeMatches: [
            '[desc="¥"] - @ImageView[desc="￼"] <n ScrollView < View <n View < View < View + ImageView[desc="￼"] + ImageView[desc="￼"] + ImageView[desc="￼"]',
          ],
        },
        {
          key: 2,
          name: '9.9包邮',
          matches: [
            '[desc="¥"] - @ImageView[desc="￼"] <n ScrollView < View <n View < View < View + ImageView[desc="￼"] + ImageView[desc="￼"] + ImageView[desc="￼"]',
          ],
        },
        {
          preKeys: [0, 1, 2, 3],
          key: 3,
          action: 'back',
          matches: [
            '@[desc="关闭"][clickable=true] <n ViewGroup < FrameLayout < FrameLayout < ViewGroup <n FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [3, 4],
          key: 4,
          action: 'back',
          matches: ['[id="android:id/content"] + * [id="android:id/text1"]'],
          activityIds: ['.ui.LauncherUI'],
        },
      ],
    },
    {
      key: 20,
      name: '迅雷-看广告-领取',
      forcedTime: 60000,
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
      key: 21,
      name: '迅雷-关闭-已获得奖励',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
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
      key: 22,
      name: '迅雷-看广告',
      forcedTime: 60000,
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
});
