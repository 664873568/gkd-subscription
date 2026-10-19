import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 0,
      name: '通用-返回',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        '.personel.FloatViewActivity',
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          action: 'back',
          anyMatches: [
            '[text="点击立即返回"] - [getChild(0).getChild(0).text="已完成"] < LinearLayout <n RelativeLayout < @RelativeLayout[clickable=true] - * [text~="JoyAI|此功能需访问京东金融APP|健康好礼限时领|图片|省钱中心|加载页面|73d4ea791bcfd553.png!q70"]',
            '[text="点击立即返回"] - [getChild(0).getChild(0).text="已完成"] < LinearLayout <n RelativeLayout < @RelativeLayout[clickable=true] - * [desc="返回"] +n RelativeLayout > [text*="金融" || text="加载页面"]',
          ],
        },
        {
          key: 1,
          action: 'back',
          actionDelay: 6000,
          matches: [
            '@[desc="返回"][clickable=true] +n RelativeLayout > [text="京东健康" || text$="签到领现金" || text="看视频赚现金"]',
          ],
        },
        {
          key: 2,
          action: 'back',
          actionDelay: 6000,
          matches: [
            '[text="back"] < @View[clickable=true] < View < [id="app"] < [id="J_ui-div"] +n * [text="此功能需访问京东金融APP"]',
          ],
        },
        {
          key: 3,
          action: 'back',
          actionDelay: 6000,
          matches: [
            '[text="京东健康APP下载"] >n @[text="back"][clickable=true] + [text="健康好礼限时领"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [
        10, 12, 20, 30, 40, 41, 50, 60, 64, 70, 80, 90, 100, 110, 120, 130,
      ],
      key: 1,
      name: '通用-返回-scopeKeys',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        '.personel.FloatViewActivity',
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.Discovery.view.DiscoveryActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
        'com.jd.lib.jshop.jshop.JshopMainShopActivity',
        'com.jd.lib.productdetail.ProductDetailActivity',
        'com.jd.lib.mylive.view.activity.VideoLiveRoomActivity',
        'com.jd.lib.videoimmersionstyleb.view.activity.VideoImmersionStyleBActivity',
        'com.jingdong.manto.ui.MantoActivityUp1',
        'com.jingdong.manto.ui.MantoActivitySingleProcessUp',
        'com.jingdong.hybrid.halfsheet.WebHalfSheetActivity',
        'com.jingdong.common.jdreactFramework.activities.JDReactNativeCommonActivity',
      ],
      rules: [
        {
          key: 0,
          action: 'back',
          anyMatches: [
            '@[desc="关闭按钮"][clickable=true] - [text=" "]',
            '@TextView[index=parent.childCount.minus(1)][clickable=true] - TextView - [text="能源工坊"] < View < View < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < [name*="core"]',
          ],
        },
        {
          preKeys: [
            0, 1, 10, 20, 30, 40, 41, 50, 51, 60, 64, 70, 80, 90, 100, 110, 120,
            130,
          ],
          key: 1,
          name: '已完成 点击立即返回',
          action: 'back',
          matches: [
            '[text="点击立即返回"] - [getChild(0).getChild(0).text="已完成"] < LinearLayout <n RelativeLayout < @RelativeLayout[clickable=true] <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0, 2, 50, 51, 60, 90],
          key: 2,
          name: '已完成 点击立即返回×',
          action: 'back',
          actionDelay: 11000,
          matches: [
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
          ],
        },
        {
          preKeys: [
            3, 10, 20, 30, 40, 41, 50, 51, 60, 70, 80, 90, 100, 110, 120, 130,
          ],
          key: 3,
          action: 'back',
          actionDelay: 11000,
          matches: [
            '@[desc="返回"][clickable=true] <n RelativeLayout < RelativeLayout[clickable=true]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [4, 10, 50, 51, 60],
          key: 4,
          action: 'back',
          actionDelay: 11000,
          matches: [
            '@View[index=parent.childCount.minus(1)] < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < [name*="core"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [5, 90],
          key: 5,
          name: '去JoyAI抽20元',
          action: 'back',
          actionDelay: 6000,
          matches: [
            '@TextView[clickable=true] - TextView < View < View < [id="joyai-root"] < View < WebView < [name*="core"]',
          ],
        },
        {
          preKeys: [6, 100],
          key: 6,
          name: '笔笔返现',
          action: 'back',
          actionDelay: 6000,
          matches: [
            'TextView - @TextView[clickable=true] < View < View < [id="app"] < WebView < [name*="core"]',
          ],
        },
        {
          preKeys: [7, 12, 13, 50, 51, 60, 110, 120, 200],
          key: 7,
          action: 'back',
          actionDelay: 6000,
          matches: [
            '@[text="返回按钮"][clickable=true] < View < View < [id="app"] < WebView < [name*="core"]',
          ],
        },
        {
          preKeys: [8, 30],
          key: 8,
          action: 'back',
          actionDelay: 11000,
          matches: [
            '@[text=""][clickable=true] < LinearLayout < ViewGroup <n ViewGroup < FrameLayout < LinearLayout <n ViewGroup < LinearLayout < ViewGroup < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [9, 40, 41, 50, 51, 60, 70, 90],
          key: 9,
          action: 'back',
          actionDelay: 11000,
          anyMatches: [
            '@[desc="返回"][clickable=true] < LinearLayout < ViewGroup < LinearLayout <n RelativeLayout <n FrameLayout < LinearLayout < FrameLayout < FrameLayout < ViewGroup < [id="android:id/content"]',
            '@[desc="返回"][clickable=true] < RelativeLayout <n RelativeLayout < RelativeLayout < RelativeLayout < LinearLayout <n RelativeLayout <n FrameLayout < LinearLayout < [id="android:id/content"]',
            '@[desc="返回"][clickable=true] < RelativeLayout <n RelativeLayout < RelativeLayout < RelativeLayout < LinearLayout <n RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
            '@[desc="返回"][clickable=true] < LinearLayout < FrameLayout < LinearLayout < ViewGroup < LinearLayout <n RelativeLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < ViewGroup < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [12, 90],
          key: 12,
          name: '建议开启边看边听-暂不开启',
          action: 'back',
          actionDelay: 6000,
          matches: [
            '[text="立即开启"] - @[text="暂不开启"][clickable=true] < LinearLayout -n [text="建议开启边看边听"]',
          ],
          activityIds: ['null'],
        },
        {
          preKeys: [12,13, 90],
          key: 13,
          name: '关闭直播间',
          action: 'back',
          actionDelay: 6000,
          matches: [
            'ImageView < @[desc="关闭直播间"][clickable=true] < ViewGroup < FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [14, 15, 90],
          key: 14,
          name: '游戏-关闭',
          actionDelay: 6000,
          matches: [
            '@[desc="关闭"][clickable=true] - [desc="更多"] < LinearLayout <n LinearLayout < LinearLayout <n RelativeLayout < LinearLayout <n FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [14, 15],
          key: 15,
          name: '知道啦',
          matches: [
            '@[text="知道啦"][clickable=true] - LinearLayout - ImageView - ViewGroup < ViewGroup < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [14, 16],
          key: 16,
          name: '游戏-退出游戏',
          matches: [
            '@[text="退出游戏"][clickable=true] + [text="添加到桌面"][clickable=true]',
          ],
        },
        {
          preKeys: [17, 40, 41, 100],
          key: 17,
          name: '逛看病买药频道-×',
          action: 'back',
          actionDelay: 6000,
          matches: [
            '@ImageView < ViewGroup - ImageView < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [18, 40, 41, 100],
          key: 18,
          name: '逛看病买药频道-××',
          action: 'back',
          actionDelay: 6000,
          matches: [
            'ImageView[width=height] < @ViewGroup < ViewGroup - FrameLayout > FrameLayout > ImageView[width=height]',
          ],
        },
        {
          preKeys: [16, 18, 19, 40, 41, 100],
          key: 19,
          name: '逛看病买药频道-<',
          action: 'back',
          actionDelay: 6000,
          matches: [
            'ImageView[width=height] < @ViewGroup < ViewGroup + ViewGroup + ViewGroup + ViewGroup > ViewGroup > ViewGroup > ImageView[width=height]',
          ],
        },
      ],
    },
    //24.04.08-29.07.31 京东超市-每日签到 汪贝狂欢日 每月月底最后3天
    //https://pro.m.jd.com/mall/active/3xhqjGH1wMz5FaMgrfYhR22sFvqz/index.html
    //https://pro.m.jd.com/mall/active/3nh7HzSjYemGqAHSbktTrf8rrH8M/index.html
    {
      key: 10,
      name: '赚更多汪贝-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 10,
          matches: [
            '[getChild(2).text="coin"] + @[text!~="去邀请|已完成"][clickable=true]',
          ],
        },
        {
          preKeys: [10],
          key: 11,
          action: 'back',
          actionDelay: 6000,
          matches: ['@TextView[clickable=true] < LinearLayout < ViewGroup'],
        },
      ],
    },
    {
      key: 11,
      name: '每日签到-汪贝兑换商城-兑换-京东超市卡',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text="汪贝日每天10点抢"] +2 @[text="兑换"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="是否确认兑换"] +n [text="取消"] + @[text="确认"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '每日签到-签到得卡',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[id="follow-signin-business-floor"] > View > @[text="签到得卡"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 12,
          matches: [
            '[text="每日签到"] >n [text="已连签"] +n @Image[width=height][clickable=true][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '京东超市-关闭弹窗',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[getChild(childCount.minus(1)).text="京东超市"] + @[getChild(0).text="关闭弹窗"][clickable=true]',
          ],
          activityIds: [
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
      ],
    },
    //京东超市-黑色星期五 4.9抢15枚鸡蛋-周四 20:00/20:30/22:00-周五 10:00/16:00/20:00/22:00
    //https://pro.m.jd.com/mall/active/6g7nXqEqSD9FXFB4cStkfWD47qJ/index.html
    {
      key: 14,
      name: '京东超市-黑色星期五-领券抢',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      rules: [
        {
          actionCd: 100,
          actionMaximum: 1000,
          anyMatches: [
            '[text="黑色星期五"] >n [text="趣尝鲜五谷鲜鸡蛋15枚"] +n @[text="领券抢"][clickable=true]',
            '[text="黑色星期五"] >n [getChild(1).text="15枚鲜蛋"] + @[text="领券抢"][clickable=true]',
          ],
          activityIds: [
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '京东超市-黑色星期五-签到有奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="黑色星期五"] >n [id="blackFiveSignInFloor"] > @[text^="签到有奖"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.0639',
          },
          actionDelay: 2000,
          matches: ['[text="黑色星期五"] >n @[id="blackFiveSignInFloor"]'],
        },
      ],
    },
    //25.08.01开始 京东特价-天天签到抽奖
    //https://pro.m.jd.com/mall/active/4WMAPf9VCBdEE8Rva1AVEPH7CBbj/index.html
    {
      key: 20,
      name: '天天签到抽奖-逛一逛',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 20,
          matches: [
            'View[clickable=true] +n [text!~="分享得红包最高8.8"] +n @View[clickable=true] > [text="逛一逛"]',
          ],
          activityIds: [
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
      ],
    },
    //25.10.11-26.12.31 京东秒杀-天天刮京豆
    //https://pro.m.jd.com/mall/active/LXrBwmgGwkJs5GpTLn9qh2vhpeC/index.html-天天领豆
    //https://pro.m.jd.com/mall/active/25xqCADVDNAd1wTHojZv2p37yKBG/index.html-京豆
    //https://pro.m.jd.com/mall/active/4E1fFrgX1eGtWTc5KBNFzXMrh6xn/index.html
    {
      key: 30,
      name: '天天刮京豆-去浏览',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 30,
          actionDelay: 2000,
          matches: [
            '@[text~=".*(去浏览|去完成)"][clickable=true] - [text!*="AI"] <n View <n View <n * <n [id^="bab_aid"] < WebView < [name*="core"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [30],
      key: 31,
      name: '天天刮京豆-去完成-从我的-京豆访问',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          preKeys: [30],
          key: 1,
          name: '前往【我的】页面',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.68',
          },
          anyMatches: [
            '@TextView[clickable=true] + [getChild(1).desc="关闭"] > [getChild(1).desc^="从我的-京豆访问"] > TextView + Button[desc^="从我的-京豆访问"]',
            '@TextView[clickable=true] + [getChild(1).text="关闭"] > [getChild(1).text^="从我的-京豆访问"] > TextView + Button[text^="从我的-京豆访问"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            'GridView >n ViewGroup > @Button[clickable=true] > ViewGroup > [text="京豆"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
    {
      scopeKeys: [30],
      key: 32,
      name: '天天刮京豆-去完成-访问互动游戏',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          preKeys: [30],
          key: 1,
          name: '点击【我的】-互动游戏',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.65',
          },
          matches: [
            '@TextView[clickable=true] + [getChild(1).text="关闭"] > [getChild(1).text^="访问互动游戏"] > TextView + Button[text^="访问互动游戏"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            'GridView >n ViewGroup > Button > @ViewGroup[clickable=true] > ViewGroup > [text="互动游戏"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[text="互动游戏"] >n @View[clickable=true] > [text="点击返回"]',
          ],
        },
      ],
    },
    {
      key: 33,
      name: '天天刮京豆-去刮卡',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          name: '开心收下-×',
          matches: [
            '@[text="关闭"] - [text~="[0-9]秒后自动关闭"] < View[clickable=true] < View <n View <n [id^="bab_aid"] < WebView < [name*="core"]',
          ],
        },
        {
          key: 1,
          name: '去刮卡',
          matches: [
            '@[text~=".*去刮卡"][clickable=true] <n View <n View <n * <n [id^="bab_aid"] < WebView < [name*="core"]',
          ],
          excludeMatches: [
            '@[text~=".*(去浏览|去完成)"][clickable=true] - [text!*="AI"] <n View <n View <n * <n [id^="bab_aid"] < WebView < [name*="core"]',
          ],
        },
        {
          key: 2,
          name: '做任务解锁刮卡',
          anyMatches: [
            '@[desc="全部任务"][clickable=true] - [desc="做任务解锁刮卡"] - [desc="秒杀领豆"] - View > Button[desc~="做任务解锁刮卡 (?!.*AI).*做任务"]',
            '@TextView[clickable=true] - [text="做任务解锁刮卡"] - TextView - * TextView[text~=".*浏览 刮卡.*"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            'View - @TextView[clickable=true] - TextView < View <n View <n [id^="bab_aid"] < WebView < [name*="core"]',
          ],
        },
        {
          key: 3,
          name: '立即刮卡',
          actionDelay: 3000,
          anyMatches: [
            'TextView - @[desc="立即刮卡"][clickable=true] - TextView <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < [name*="core"]',
            'Button - @[text="立即刮卡"][clickable=true] - Button <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < [name*="core"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            'View - @TextView[clickable=true] - TextView < View <n View <n [id^="bab_aid"] < WebView < [name*="core"]',
            'View > [text="关闭"] + View > TextView + @Button[text!~="AI.*|.*已刮卡"][clickable=true]',
            '@[text="刮下一张"][clickable=true] + [text="稍后再说"]',
            'Image < View < View < View - @TextView[clickable=true] < Dialog <n [id^="bab_aid"] < WebView < [name*="core"]',
            'View > TextView + View > @View[clickable=true] > [text~="[0-9]秒后自动关闭"] + [desc="关闭"]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          name: '刮下一张',
          matches: [
            '[text="天天领豆"] >n @[text="刮下一张"][clickable=true] + [text="稍后再说"]',
          ],
        },
        {
          preKeys: [3],
          key: 5,
          name: '刮下一张×',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.675',
          },
          matches: [
            'Image < View < View < View - @TextView[clickable=true] < Dialog <n [id^="bab_aid"] < WebView < [name*="core"]',
          ],
          excludeMatches: [
            '[text="天天领豆"] >n @[text="刮下一张"][clickable=true] + [text="稍后再说"]',
          ],
        },
        {
          key: 6,
          matches: [
            'View > TextView + View > @View[clickable=true] > [text~="[0-9]秒后自动关闭"] + [desc="关闭"]',
          ],
        },
      ],
    },
    {
      key: 34,
      name: '天天刮京豆-点*个商品',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text="个商品"] -n [text="点"] <<n * View[index=0][childCount=10] > View[index=0] >n @[getChild(0).getChild(0).text="image"][clickable=true]',
          ],
          excludeMatches: [
            'View - @TextView[clickable=true] - TextView < View <n View <n [id^="bab_aid"] < [text="天天领豆"] < [name*="core"]',
            '[text="全部任务"] - @[text="立即刮卡"][clickable=true] - [text="秒杀领豆"] - * Button[text~=".*待刮卡.*"]',
            '@[desc="全部任务"][clickable=true] - [desc="做任务解锁刮卡"] - [desc="秒杀领豆"] - View > Button[desc~="做任务解锁刮卡 (?!.*AI).*做任务"]',
            '@TextView[clickable=true] - [text="做任务解锁刮卡"] - TextView - * TextView[text~=".*浏览 刮卡.*"]',
            'TextView - @[desc="立即刮卡" || text="立即刮卡"][clickable=true] - TextView <n View  <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < [name*="core"]',
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="个商品"] -n [text="点"] <<n * View[index=1][childCount=10] > View[index=0] >n @[getChild(0).getChild(0).text="image"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          matches: [
            '[text="个商品"] -n [text="点"] <<n * View[index=0][childCount=10] > View[index=1] >n @[getChild(0).getChild(0).text="image"][clickable=true]',
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          name: '点击领取*京豆',
          matches: [
            '[text="京豆"] -n [text="点击领取"] < View < View - [text="图片"]  < View < @View[clickable=true] <n [id^="bab_aid"] < WebView < [name*="core"]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          name: '恭喜你获得奖励-我知道了-×',
          matches: [
            '@TextView[clickable=true] + [text~="[0-9]+"] + [text="京豆"] + [text="我知道了"]',
          ],
        },
      ],
    },
    //26.01.01-26.12.31 国家补贴×超级补贴-天天领补贴
    //https://pro.m.jd.com/mall/active/DvFPmKRas9GYjDPZjT9NT14BAv6/index.html
    //恭喜获得惊喜福利
    {
      key: 40,
      name: '天天领补贴-去完成+京豆',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 40,
          actionDelay: 2000,
          matches: [
            '[text~="去看看|去完成"] - [getChild(1).text*="京豆"] - [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
          ],
          excludeMatches: [
            'TextView[clickable=true] - @View[clickable=true] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
            '[text="领取奖励"] - [getChild(1).text*="京豆"] - [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
            '@TextView[clickable=true] -n [text="开心收下"] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
          ],
        },
        {
          key: 11,
          name: '访问国补×超补小组件-去完成',
          matches: [
            'TextView[clickable=true] - @View[clickable=true] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
          ],
        },
        {
          key: 12,
          matches: [
            '[text="领取奖励"] - [getChild(1).text*="京豆"] - [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
          ],
          excludeMatches: [
            'TextView[clickable=true] - @View[clickable=true] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
            '@TextView[clickable=true] -n [text="开心收下"] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
          ],
        },
        {
          preKeys: [12],
          key: 13,
          matches: [
            '@TextView[clickable=true] -n [text="开心收下"] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
          ],
        },
      ],
    },
    {
      key: 41,
      name: '天天领补贴-去完成+抽奖机会',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 41,
          actionDelay: 2000,
          matches: [
            '[text="领取奖励"] - [getChild(1).text*="抽奖机会"] - [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
          ],
          excludeMatches: [
            '[text~="去看看|去完成|领取奖励"] - [getChild(1).text*="京豆"] - [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
            '[text="领取奖励"] - [getChild(1).text*="抽奖机会"] - [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
            '@TextView[clickable=true] -n [text="开心收下"] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
          ],
        },
        {
          key: 11,
          matches: [
            '[text="领取奖励"] - [getChild(1).text*="抽奖机会"] - [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
          ],
        },
        {
          preKeys: [11],
          key: 12,
          matches: [
            '@TextView[clickable=true] -n [text="开心收下"] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] -n [text="开心收下"] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
          ],
        },
        {
          key: 13,
          actionDelay: 5000,
          matches: [
            '@[text="关闭"][clickable=true] <n View < View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
          ],
          excludeMatches: [
            '[text~="去看看|去完成|领取奖励"] - View - [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
            '@TextView[clickable=true] -n [text="开心收下"] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < [text="国家补贴x超级补贴"] < [name*="core"]',
          ],
        },
      ],
    },
    //26.03.15-27.05.31 便宜包邮-天天砸金蛋
    //https://pro.m.jd.com/mall/active/3iXU1kvcZaGz6Xf9L3cJ9aCS6ShN/index.html
    {
      key: 50,
      name: '天天砸金蛋-去完成+京豆',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 50,
          actionDelay: 2000,
          matches: [
            '[getChild(0).getChild(0).text="规则"] + View > View > [text*="京豆"] + @[text="去完成"][clickable=true]',
          ],
          activityIds: [
            '.MainFrameActivity',
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
      ],
    },
    {
      key: 51,
      name: '天天砸金蛋-去完成+砸蛋机会',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 51,
          actionDelay: 2000,
          matches: [
            '[getChild(0).getChild(0).text="规则"] + View > View > [text*="砸蛋机会"] + @[text="去完成"][clickable=true]',
          ],
          excludeMatches: [
            '[getChild(0).getChild(0).text="规则"] + View > View > [text*="京豆"] + @[text="去完成"][clickable=true]',
          ],
          activityIds: [
            '.MainFrameActivity',
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
      ],
    },
    {
      key: 52,
      name: '天天砸金蛋-砸一下',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.MainFrameActivity',
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(0).getChild(0).text="规则"] + View > View > [text="提醒我每日砸蛋"] +3 @[text~="砸一下\\\\(剩余[0-9]+次\\\\)"][clickable=true]',
          ],
          excludeMatches: [
            '[getChild(0).getChild(0).text="规则"] + View > View > TextView +5 @[text="去完成"][clickable=true]',
            '[desc="关闭弹窗" || text="关闭弹窗"][clickable=true] + View > View > View + @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 1,
          matches: [
            '[desc="关闭弹窗" || text="关闭弹窗"][clickable=true] + View > View > View + @TextView[clickable=true]',
          ],
        },
        {
          key: 2,
          matches: [
            '[getChild(0).getChild(0).text="规则"] - @TextView[clickable=true] < View - [text="关闭弹窗"]',
          ],
          excludeMatches: [
            '[getChild(0).getChild(0).text="规则"] + View > View > [text*="京豆"] + @[text="去完成"][clickable=true]',
            '[getChild(0).getChild(0).text="规则"] + View > View > [text="提醒我每日砸蛋"] +3 @[text~="砸一下\\\\(剩余[0-9]+次\\\\)"][clickable=true]',
          ],
        },
      ],
    },
    //26.03.25-27.03.24 月黑风高-月光宝盒
    //https://pro.m.jd.com/mall/active/3MwGoRXcgfa3yFYKujMC2AsjmB3h/index.html
    {
      key: 60,
      name: '月光宝盒-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 60,
          excludeMatches: [
            '[text="做任务 赚次数"] + View > [getChild(1).text!~="邀请.*"] > @[text="待领奖"][clickable=true]',
            '[text="开心收下"] +n @View[clickable=true] > View > Image[text="02760900900ad74e.png!q50"]',
            'TextView[clickable=true] - View > @View[clickable=true] > [text="去完成"]',
          ],
          actionDelay: 2000,
          matches: [
            '[text="做任务 赚次数"] + View > [getChild(1).text!~="邀请.*"] > @[text="去完成"][clickable=true]',
          ],
        },
        {
          key: 11,
          matches: [
            '[text="做任务 赚次数"] + View > [getChild(1).text!~="邀请.*"] > @[text="待领奖"][clickable=true]',
          ],
        },
        {
          preKeys: [11],
          key: 12,
          matches: [
            '[text="开心收下"] +n @View[clickable=true] > View > Image[text="02760900900ad74e.png!q50"]',
          ],
        },
        {
          preKeys: [11],
          key: 13,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.585',
          },
          actionDelay: 1000,
          matches: [
            '@View[childCount=2] - [id="chunk3"] - [id="J_babelOpt"] < [id^="bab_aid"] < WebView < [name*="core"]',
          ],
          excludeMatches: [
            '[text="开心收下"] +n @View[clickable=true] > View > Image[text="02760900900ad74e.png!q50"]',
          ],
        },
        {
          key: 14,
          excludeMatches: [
            '[text="做任务 赚次数"] + View > [getChild(1).text!~="邀请.*"] > @[text~="去完成|待领奖"][clickable=true]',
          ],
          actionDelay: 5000,
          matches: ['@TextView[clickable=true] + [text="做任务 赚次数"]'],
        },
      ],
    },
    {
      scopeKeys: [60],
      key: 61,
      name: '月光宝盒-去完成-从首页访问月黑风高',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          preKeys: [60],
          key: 1,
          matches: [
            'TextView[clickable=true] - View > @View[clickable=true] > [text="去完成"]',
          ],
        },
        {
          preKeys: [60],
          key: 2,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.63',
          },
          matches: [
            '@View[childCount=2] - [id="chunk3"] - [id="J_babelOpt"] < [id^="bab_aid"] < WebView < [name*="core"]',
          ],
          excludeMatches: [
            'TextView[clickable=true] - View > @View[clickable=true] > [text="去完成"]',
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          matches: [
            '@[desc="月黑风高"][clickable=true] > ViewGroup > [text="月黑风高"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            '[text="月黑风高"] >n @View[clickable=true] > [text="075e15f06e18eb7f.png!q50"]',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          name: '赚次数',
          matches: [
            '[getChild(0).text="03e62ee40ce952ef.png!q50"] +n [text="规则"] + TextView + @TextView[clickable=true]',
          ],
        },
      ],
    },
    {
      scopeKeys: [60],
      key: 62,
      name: '月光宝盒-去完成-预约月黑风高商品',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 1,
          matches: [
            '[text="预约成功"] +n [text="暂不开启"] + @[text="去开启"][clickable=true]',
          ],
        },
        {
          key: 2,
          matches: [
            '[getChild(0).text*="去开启吧"] + [getChild(0).text="取消"] > @[text="确定"][clickable=true]',
          ],
        },
        {
          key: 3,
          matches: [
            '[id="dark-moon-feeds-container"] + View > TextView + View > @[text="跳过"][clickable=true]',
          ],
        },
        {
          preKeys: [60, 1, 2, 3, 4],
          key: 4,
          matches: [
            '[text="预约商品"] - [text~="[0-2]/3"] < View < View < View - [id="dark-moon-feeds-container"] >n TextView +n View > TextView + @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          matches: [
            '[text="返回领奖"] - [text="已完成"] < View < @View[clickable=true] < View - [id="dark-moon-feeds-container"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [60],
      key: 63,
      name: '月光宝盒-立即抽奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          preKeys: [2, 3, 13],
          key: 1,
          matches: ['@View[clickable=true] > View > [text~="[1-9][0-9]*"]'],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[getChild(1).getChild(0).text="再抽一次"] + @View[clickable=true] > View > Image',
          ],
        },
        {
          preKeys: [1],
          key: 3,
          matches: [
            '[getChild(childCount.minus(1)).text="开心收下"] + @Button[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 64,
      name: '月光宝盒-盲盒礼包',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 64,
          excludeMatches: [
            '@View[clickable=true] > View > [text~="[1-9][0-9]*"]',
          ],
          matches: [
            '[text="逛10秒，开最高188元盲盒礼包！"] + @[text="立即开"][clickable=true]',
          ],
        },
        {
          key: 11,
          matches: [
            '[text="任务完成，快去领取盲盒奖励吧！"] + @[text="点击领取"][clickable=true]',
          ],
        },
      ],
    },
    {
      scopeKeys: [70],
      key: 65,
      name: '月光宝盒-京东秒杀',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          preKeys: [4, 5],
          key: 0,
          excludeMatches: ['@View[clickable=true] > View > [text="0*"]'],
          matches: [
            'RecyclerView > @ViewGroup[clickable=true] > [text="月黑风高"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="月黑风高"] >n @View[clickable=true] > [text="075e15f06e18eb7f.png!q50"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '赚次数',
          matches: [
            '[getChild(0).text="03e62ee40ce952ef.png!q50"] +n [text="规则"] + TextView + @TextView[clickable=false]',
          ],
        },
      ],
    },
    //26.04.01-27.03.31 京东秒杀-幸运奖励
    //https://pro.m.jd.com/mall/active/Md9FMi1pJXg2q7qc8CmE9FNYDS4/index.html
    //https://pro.m.jd.com/mall/active/43mNbs4F53FUMVin65VHVYYKB94f/index.html
    //https://pro.m.jd.com/mall/active/z9JX362NWYGwm6TwWpaQ5UBnWW9/index.html
    {
      key: 70,
      name: '京东秒杀-幸运奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@[id="cardViewIcon"] > [text="幸运奖励"] + [getChild(0).text="待领"] + [text="去解锁"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '恭喜您获得-去首页领取',
          matches: [
            '[id="signView_main_portal"] - * [getChild(2).text="秒后自动关闭"] +n @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[desc="秒杀"][clickable=true] > ViewGroup > [text="秒杀"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
        {
          key: 3,
          matches: [
            '@[id="cardViewIcon"] > [text="幸运奖励"] + [getChild(0).text="待领"] + [text="点击领取"]',
          ],
        },
        {
          preKeys: [2, 3],
          key: 4,
          name: '恭喜您获得-开心收下',
          matches: [
            '[id="signView_main_portal"] - * [getChild(2).text="秒后自动关闭"] +n @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [2, 3],
          key: 5,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.67',
          },
          matches: [
            '[text="京东秒杀"] >n @[id="J_babelOpt"] + [id="chunk2"] + [id="chunk10"]',
          ],
          excludeMatches: [
            '[id="signView_main_portal"] - * [getChild(2).text="秒后自动关闭"] +n @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [4, 5],
          key: 6,
          matches: [
            '[id="signView_main_portal"] > [id="beanContainer"] > View > [id="secKill_bean_sign_view"] > [id="homeSignButton"]',
          ],
        },
      ],
    },
    //26.05.14-27.05.13 领券中心-天天领京豆
    //https://pro.m.jd.com/mall/active/VAjs3vpayA513UwxL5XC4eGBXqY/index.html?babelChannel=ttt128&linkTopTab=best&jumpTab=1&visitScene=page1
    {
      key: 80,
      name: '天天领京豆-×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          matches: [
            '[id="coupon-center-main-panel-"] +n [index=parent.childCount.minus(1)] >n TextView + Te1tView + @TextView[index=parent.childCount.minus(1)][clickable=true]',
          ],
        },
      ],
    },
    //26.06.28-27.05.31 互动游戏
    //https://pro.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html
    {
      key: 90,
      name: '互动游戏-逛一逛/去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
      rules: [
        {
          key: 90,
          excludeMatches: [
            '[text="互动游戏"] >n TextView[clickable=true] + * View[clickable=true] > [text~="立即签到|明天继续|我知道了"]',
          ],
          actionDelay: 2000,
          matches: [
            '[text="互动游戏"] >n [text="做任务 攒经验"] + * [getChild(2).text!~="参加.*|通过.*|升级.*|击败.*"] > @View[clickable=true] > [text~="逛一逛|去完成"]',
          ],
        },
        {
          key: 11,
          excludeMatches: [
            '[text="互动游戏"] >n [text="做任务 攒经验"] + * [getChild(2).text!~="参加.*|通过.*|升级.*|击败.*"] > @View[clickable=true] > [text~="逛一逛|去完成"]',
          ],
          actionDelay: 3000,
          matches: [
            '[text="互动游戏"] >n @TextView[clickable=true] + [getChild(0).text="做任务 攒经验"]',
          ],
        },
      ],
    },
    {
      key: 91,
      name: '互动游戏-立即签到',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="互动游戏"] >n TextView[clickable=true] + * @View[clickable=true] > [text="立即签到"]',
          ],
        },
        {
          key: 1,
          matches: [
            '[text="互动游戏"] >n @TextView[clickable=true] + * View[clickable=true] > [text="明天继续"]',
          ],
        },
        {
          key: 2,
          matches: [
            '[text="互动游戏"] >n @TextView[clickable=true] + * View[clickable=true] > [text="我知道了"]',
          ],
        },
        {
          key: 3,
          matches: [
            '[text="互动游戏"] >n @TextView[clickable=true] < View +n View > View > [text="开心收下"]',
          ],
        },
        {
          key: 4,
          matches: [
            '[text="互动游戏"] >n [text="赚京豆"] >n [text="攒经验 ›"][clickable=true]',
          ],
          excludeMatches: [
            '[text="互动游戏"] >n TextView[clickable=true] + * View[clickable=true] > [text~="立即签到|明天继续|我知道了"]',
            '[text="互动游戏"] >n TextView[clickable=true] < View +n View > View > [text="开心收下"]',
            '[text="互动游戏"] >n [text="做任务 攒经验"] + * [getChild(2).text!~="参加.*|通过.*|升级.*|击败.*"] > @View[clickable=true] > TextView',
          ],
        },
      ],
    },
    {
      key: 92,
      name: '互动游戏-领取',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="互动游戏"] >n [text="赚京豆"] >n [text="全部奖励已解锁"] + * >n @[text="领取"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="互动游戏"] >n [text="京豆奖励"] +n @[text="开心收下"][clickable=true]',
          ],
        },
        {
          key: 2,
          excludeMatches: [
            '[text="互动游戏"] >n [text="赚京豆"] >n [text="攒经验 ›"][clickable=true]',
            '[text="互动游戏"] >n [text="赚京豆"] >n [text="全部奖励已解锁"] + * >n @[text="领取"][clickable=true]',
          ],
          actionDelay: 5000,
          matches: [
            '@[text="返回"][clickable=true] < View <<n [text="互动游戏"] < [name*="core"]',
          ],
        },
      ],
    },
    //26.08.21-27.05.13 整点秒杀 抢20元金券-天天赚京豆
    //https://pro.m.jd.com/mall/active/3iXU1kvcZaGz6Xf9L3cJ9aCS6ShN/index.html
    {
      key: 100,
      name: '天天赚京豆-去完成+京豆',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 100,
          actionDelay: 2000,
          matches: [
            '[getChild(1).getChild(0).text="0276054033614b7c"] + View > View > [text!~="下单抽大奖|逛京东快递频道"] +2 [text!~=".*砸金蛋机会"] +2 @[text="去完成"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 101,
      name: '天天赚京豆-去完成+砸金蛋机会',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 101,
          actionDelay: 2000,
          matches: [
            '[getChild(1).getChild(0).text="0276054033614b7c"] + View > View > [text!~="下单抽大奖|逛京东快递频道"] +2 [text~=".*砸金蛋机会"] +2 @[text="去完成"][clickable=true]',
          ],
          excludeMatches: [
            '[getChild(1).getChild(0).text="0276054033614b7c"] + View > View > [text!~="下单抽大奖|逛京东快递频道"] +2 [text!~=".*砸金蛋机会"] +2 @[text="去完成"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 102,
      name: '天天赚京豆-砸一下',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(1).getChild(0).text="0276054033614b7c"] + View > View > [text="提醒我每日砸蛋"] +3 @[text~="砸一下 \\\\(剩余[1-9][0-9]*次\\\\)"][clickable=true]',
          ],
          excludeMatches: [
            '[getChild(1).getChild(0).text="0276054033614b7c"] + View > View > [text!~="下单抽大奖|逛京东快递频道"] +2 [text!~=".*砸金蛋机会"] +2 @[text="去完成"][clickable=true]',
            '[getChild(1).text="恭喜成功获得"] +n @[getChild(0).text="02760480480fb046"][clickable=true]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 1,
          matches: [
            '[getChild(1).text="恭喜成功获得"] +n @[getChild(0).text="02760480480fb046"][clickable=true]',
          ],
        },
        {
          key: 2,
          actionDelay: 5000,
          matches: [
            '@[getChild(0).text="0276030030cd6ece"][clickable=true] - [getChild(0).text="0276054033614b7c"]',
          ],
          excludeMatches: [
            '[getChild(1).getChild(0).text="0276054033614b7c"] + View > View > [text!~="下单抽大奖|逛京东快递频道"] +4 @[text="去完成"][clickable=true]',
            '[getChild(1).getChild(0).text="0276054033614b7c"] + View > View > [text="提醒我每日砸蛋"] +3 @[text~="砸一下 \\\\(剩余[1-9][0-9]*次\\\\)"][clickable=true]',
            '[getChild(1).text="恭喜成功获得"] +n @[getChild(0).text="02760480480fb046"][clickable=true]',
          ],
        },
      ],
    },
    //26.09.01-26.09.10 京东新品-重磅新品月
    //https://pro.m.jd.com/mall/active/3CSJigaYv3gZC6tRkd3eyUhKfhyc/index.html
    {
      key: 110,
      name: '新品互动-去浏览',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 110,
          matches: [
            '[text="新品互动"] +n [getChild(0).text!~="购买.*|邀请.*"] > @[text="去浏览"][clickable=true]',
          ],
          activityIds: ['.WebActivity'],
        },
      ],
    },
    //26.09.16-26.10.31 「我AI我家·星主播」
    //https://pro.m.jd.com/mall/active/2r4H8Y9vqUbjevMFZ1o5ir7XJbEg/index.html
    {
      key: 120,
      name: '「我AI我家·星主播」',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text="寻鲜争霸赛 为TA投票"] >n @View[clickable=true] > [text="做任务赚人气值"]',
          ],
        },
        {
          preKeys: [0],
          key: 120,
          actionDelay: 2000,
          anyMatches: [
            '@[text="去完成"][clickable=true] -2 [text^="逛逛大闸蟹"]',
            '@[text="去完成"][clickable=true] -2 [text^="逛逛佳沛"]',
          ],
        },
        {
          preKeys: [120],
          key: 11,
          actionDelay: 6000,
          matches: [
            'WebView >n [id="J_babelOptPage"] >n @TextView[clickable=true] + View + TextView',
          ],
        },
        {
          key: 12,
          matches: [
            '[text="寻鲜争霸赛 为TA投票"] >n @[text="关闭"][clickable=true] -2 View > [text~="恭喜获得[0-9]人气值"]',
          ],
        },
      ],
    },
    //26.10.12-26.11.11 京享红包
    //https://u.jd.com/FDT8Var
    {
      key: 130,
      name: '京享红包',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
        'com.jd.lib.productdetail.ProductDetailActivity',
      ],
      rules: [
        {
          key: 130,
          matches: [
            '[text="去完成"] < @View[clickable=true] <n View <n View <n View <n View < View < [id="union-coupon-sdk"] < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < [name*="core"]',
          ],
        },
        {
          key: 11,
          matches: [
            '[text="4c1b204204e75dd7"] < View < View < @View[clickable=true] <n View <n View <n View < View < [id="union-coupon-sdk"] < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < [name*="core"]',
          ],
        },
      ],
    },
    //26.10.12-26.11.11 母婴来了/运动来了
    //https://u.jd.com/FDT8Var
    {
      scopeKeys: [1],
      key: 140,
      name: '母婴来了/运动来了-去签到/去浏览',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          name: '每日签到',
          anyMatches: [
            '@TextView[clickable=true] - TextView < View < View < View < View <n View < View < View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < [name*="core"]',
            '@TextView[clickable=true] - TextView < View < View < View <n View < View < View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < [name*="core"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] - TextView <n View < View < View < View <n View -n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < [name*="core"]',
          ],
        },
        {
          preKeys: [3, 11, 141],
          key: 140,
          anyMatches: [
            '@TextView[clickable=true] - TextView <n View < View < View < View <n View < View < View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < [name*="core"]',
            '@TextView[clickable=true] - TextView < View <n View < View <n View < View < View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < [name*="core"]',
          ],
        },
        {
          preKeys: [0],
          key: 141,
          name: '签到成功/今日打卡成功-我知道了-×',
          matches: [
            '@TextView[clickable=true] - TextView <n View < View < View < View <n View -n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < [name*="core"]',
            '@TextView[clickable=true] - View < View < View < View <n View -n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < [name*="core"]',
          ],
        },
      ],
    },
    //京东笔笔返
    //https://ipay.jd.com/pages/bbf/index
    {
      key: 200,
      name: '笔笔返-×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 200,
          matches: [
            'Dialog > [getChild(0).text="今日限时福利"] + @Button[text=""][clickable=true]',
          ],
          activityIds: ['.WebActivity'],
        },
      ],
    },
    //批量操作类
    //店铺关注
    //https://shop.m.jd.com/favorite/home
    //https://pro.m.jd.com/mall/active/2WUEUPEgJ6bMgeW6CatRVTViJ9xU/index.html
    {
      key: 300,
      name: '店铺关注',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Button[desc^="关注"][clickable=true] > [getChild(0).getChild(0).text~="[0-9]{2,}"] - ViewGroup > [text="关注"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
    {
      key: 301,
      name: '店铺关注-取消关注',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.setting.view.activity.PersonalMultiTabActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[id^="com.jd.lib.setting.feature:id"] > @[text="管理"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="店铺关注"] >n [text="取消关注"] - [getChild(1).text="已选0个店铺"] > @CheckBox[clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[text="店铺关注"] >n @[text="取消关注"][clickable=true] - [getChild(1).text~="已选[1-9][0-9]*个店铺"] > CheckBox',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[text="店铺关注"] >n [text="取消关注"] +n [text="取消"] + @[text="确定"][clickable=true]',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 400,
      name: '去开启通知-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[desc="关闭"][clickable=true] - * [text="去开启通知"]'],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
    {
      key: 401,
      name: '申请通知权限-取消',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="京东需要申请通知权限"] +n [getChild(1).text="去打开"] > @[text="取消"][clickable=true]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 500,
      name: '首页广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[desc="跳过"][clickable=true] > [text="跳过"]'],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
    {
      key: 501,
      name: '首页广告-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            'ViewGroup[clickable=true] + ViewGroup > @[desc="关闭"][clickable=true] > ImageView',
            'ViewGroup > FrameLayout[clickable=true] + @FrameLayout[clickable=true] > [desc="关闭"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
  ],
});
