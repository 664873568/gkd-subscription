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
      activityIds: ['.plugin.appbrand.ui.AppBrandUI'],
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
      activityIds: ['.plugin.appbrand.ui.AppBrandUI'],
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
      name: '中国电信湖北客服',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.plugin.appbrand.ui.AppBrandUI'],
      rules: [
        {
          key: 0,
          name: '广告-×',
          matches: ['[getChild(0).getChild(0).text="广告"] + @Image'],
        },
        {
          key: 1,
          name: '签到',
          actionDelay: 2000,
          matches: ['@Image <n View < View - [text$="套餐"]'],
          excludeMatches: [
            '[getChild(0).getChild(0).text="广告"] + @Image',
            '@[text="签到"] - [getChild(0).text="每日签到"] < View - [text="做任务 赚星币"]',
            '[getChild(2).text="做任务 赚星币"] +n View > View > View > [getChild(1).text^="消耗星币"] + [getChild(0).text="兑换"]',
          ],
        },
        {
          key: 2,
          name: '每日签到',
          matches: [
            '@[text="签到"] - [getChild(0).text="每日签到"] < View - [text="做任务 赚星币"]',
          ],
          excludeMatches: ['[getChild(0).getChild(0).text="广告"] + @Image'],
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
          activityIds: ['.plugin.appbrand.ui.AppBrandUI'],
        },
      ],
    },
    {
      key: 10,
      name: '京东金融',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.plugin.appbrand.ui.AppBrandUI'],
      rules: [
        {
          key: 0,
          name: '频道栏',
          actionDelay: 3000,
          matches: [
            '[desc="￼"] - [desc="￼"] - @[desc="￼"] - [desc="￼"] - [desc="￼"] < View < View < View < ScrollView < View <n View < View < View + [desc="￼"] + [desc="￼"] + [desc="￼"]',
          ],
          excludeMatches: [
            'ImageView[desc="￼"] - @[desc="特价"] - [desc="首页"]',
            '[desc="￼"] - [desc="￼"] - View - [desc="搜索"] - View - [desc="￼"] - [desc="首页"] - @[desc="特价"] - [desc="￼"] < View',
          ],
        },
        {
          key: 1,
          name: '特价',
          actionDelay: 2000,
          anyMatches: [
            'ImageView[desc="￼"] - @[desc="特价"] - [desc="首页"]',
            '[desc="￼"] - [desc="￼"] - View - [desc="搜索"] - View - [desc="￼"] - [desc="首页"] - @[desc="特价"] - [desc="￼"] < View',
          ],
        },
        {
          key: 2,
          actionDelay: 2000,
          matches: [
            '[desc="去首页逛逛"] <n View < [name$="View"] < View - ImageView[desc="￼"] - ImageView[desc="￼"]',
          ],
        },
        {
          key: 3,
          name: '现金抽抽乐',
          actionDelay: 2000,
          matches: [
            '@[desc="关闭"][clickable=true] <n ViewGroup < FrameLayout < FrameLayout < ViewGroup <n * [text="现金抽抽乐"]',
          ],
        },
        {
          preKeys: [0, 1, 2, 3, 4],
          key: 4,
          actionDelay: 2000,
          matches: [
            '@[desc="关闭"][clickable=true] <n ViewGroup < FrameLayout < FrameLayout < ViewGroup <n FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0, 1, 2, 3, 4, 5],
          key: 5,
          action: 'back',
          matches: [
            '[text="微信"][vid="icon_tv"] <n LinearLayout < RelativeLayout < LinearLayout < RelativeLayout <n FrameLayout < FrameLayout < @[id="android:id/content"]',
          ],
          activityIds: ['.ui.LauncherUI'],
        },
      ],
    },
    {
      key: 11,
      name: '京东购物-弹窗广告-×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.plugin.appbrand.ui.AppBrandUI'],
      rules: [
        {
          key: 0,
          matches: [
            '@[desc="不再接收弹窗"] <n View < View < View < View < FrameLayout < FrameLayout < FrameLayout < RelativeLayout < FrameLayout <n RelativeLayout < FrameLayout < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[desc="确认关闭"] <n View < View < View < View < FrameLayout < FrameLayout < FrameLayout < RelativeLayout < FrameLayout <n RelativeLayout < FrameLayout < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[desc="确认关闭"] <n View < View < View < View < FrameLayout < FrameLayout < FrameLayout < RelativeLayout < FrameLayout <n RelativeLayout < FrameLayout < FrameLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //26.10.20-26.12.31 幸运大转盘
    {
      key: 12,
      name: '京东小哥-幸运大转盘',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.plugin.appbrand.ui.AppBrandUI'],
      rules: [
        {
          key: 0,
          name: '弹窗广告-×',
          matches: [
            '@Image < View - [getChild(0).name$="Image"] < View < View <n View <n WebView',
          ],
        },
        {
          key: 1,
          name: '天天抽大奖',
          matches: [
            '[text="百元现金来领"] < View - [text="天天抽大奖"] < View < @View > View > Image',
          ],
          excludeMatches: [
            '@Image < View < View <n View < View < View < View - TextView < WebView',
            '@Image[width=height] < View < View < View < View < View - TextView < WebView',
            '@[text~="抽奖按钮 剩余.*次"][clickable=true] < View <n View < View < View < View < [id*="/pages/luckyGift/index"] < [id="app"] < WebView',
          ],
        },
        {
          key: 2,
          name: '签到',
          matches: [
            '@[text="签到"] < View <n View <n View - [text="获得更多抽奖次数"]',
          ],
        },
        {
          key: 3,
          name: '去领取',
          actionDelay: 2000,
          matches: [
            '@[text="去领取"] < View <n View <n View - [text="获得更多抽奖次数"]',
          ],
          excludeMatches: [
            '@[text="签到"] < View <n View <n View - [text="获得更多抽奖次数"]',
            '@Image < View < View <n View < View < View < View - TextView < WebView',
            '@Image[width=height] < View < View < View < View < View - TextView < WebView',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          name: '返回-<',
          action: 'back',
          actionDelay: 5000,
          anyMatches: [
            '@Image < View < View <n View < View < View < View - TextView < WebView',
            '@Image[width=height] < View < View < View < View < View - TextView < WebView',
          ],
        },
        {
          key: 5,
          name: '领取',
          actionDelay: 2000,
          matches: [
            '@[text="领取+1"] < View <n View <n View - [text="获得更多抽奖次数"]',
          ],
        },
        {
          key: 6,
          name: '立即抽奖',
          actionDelay: 2000,
          matches: [
            '@[text~="抽奖按钮 剩余[1-9]次"][clickable=true] < View <n View < View < View < View < [id*="/pages/luckyGift/index"] < [id="app"] < WebView',
          ],
          excludeMatches: [
            '@[text~="签到|去领取|领取+1"] < View <n View <n View - [text="获得更多抽奖次数"]',
            '@TextView[width=height] - [getChild(3).text~="我知道了|领取成功"] < View <n View < [id*="/pages/luckyGift/index"] < [id="app"] < WebView',
          ],
        },
        {
          key: 7,
          name: '我知道了|领取成功-×',
          matches: [
            '@TextView[width=height] - [getChild(3).text~="我知道了|领取成功"] < View <n View < [id*="/pages/luckyGift/index"] < [id="app"] < WebView',
          ],
          excludeMatches: [
            '@[text~="签到|去领取|领取+1"] < View <n View <n View - [text="获得更多抽奖次数"]',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '迅雷-看广告-领取',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="领取"] <<n * [text="看广告免费领取迅雷云添加次数"]',
          ],
          excludeMatches: ['@[text="关闭"] <<n * [text="已获得奖励"]'],
          activityIds: ['.plugin.appbrand.ui.AppBrandUI'],
        },
      ],
    },
    {
      key: 21,
      name: '迅雷-关闭-已获得奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 30000,
          matches: ['@[text="关闭"] <<n * [text="已获得奖励"]'],
          activityIds: ['.plugin.appbrand.ui.AppBrandUI'],
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
      activityIds: ['.plugin.appbrand.ui.AppBrandUI'],
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
    //功能应用类
    {
      key: 40,
      name: '权限申请-取消',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 30000,
          matches: [
            '@[text="取消"][vid="mm_alert_cancel_btn"][clickable=true] < LinearLayout < LinearLayout <n LinearLayout < LinearLayout < [id="android:id/content"]',
          ],
          activityIds: ['.ui.LauncherUI'],
        },
      ],
    },
  ],
});
