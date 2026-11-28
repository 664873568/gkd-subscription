import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.kuwo.player',
  name: '酷我音乐',
  groups: [
    //金币提现
    //每天0:00,09:00,13:00,17:00,20:00刷新提现额度；金币有效期为金币获得后的60个自然日，记得尽快兑换喔～
    {
      key: 0,
      name: '金币提现-8.8元',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.activities.MainActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@TextView[clickable=true] -4 [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '[text="需要88000金币"] <n @View[clickable=true] -5 [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="提现次数用光"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@ImageButton[width=height][clickable=true] - View < View <n View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="需要88000金币"] <n @View[clickable=true] -5 [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '@[text="提现次数用光"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@ImageButton[width=height][clickable=true] - View < View <n View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '@ImageButton[width=height][clickable=true] - View < View <n View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '金币提现-2元',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.activities.MainActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@TextView[clickable=true] -4 [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '[text="需要20000金币"] <n @View[clickable=true] -(5,6) [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="提现次数用光"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@ImageButton[width=height][clickable=true] - View < View <n View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="需要20000金币"] <n @View[clickable=true] -(5,6) [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '@[text="提现次数用光"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@ImageButton[width=height][clickable=true] - View < View <n View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '@ImageButton[width=height][clickable=true] - View < View <n View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '金币提现-1元',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.activities.MainActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@TextView[clickable=true] -4 [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '[text="需要10000金币"] <n @View[clickable=true] -(5,6,7) [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="提现次数用光"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@ImageButton[width=height][clickable=true] - View < View <n View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="需要10000金币"] <n @View[clickable=true] -(5,6,7) [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '@[text="提现次数用光"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@ImageButton[width=height][clickable=true] - View < View <n View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[text="确认提现"][clickable=true] -n [text="金币提现"] <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '@ImageButton[width=height][clickable=true] - View < View <n View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
      ],
    },
    //赚钱
    {
      key: 10,
      name: '赚金币-大额金币任务',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.activities.MainActivity'],
      rules: [
        {
          key: 0,
          name: '去下载',
          actionDelay: 2000,
          matches: [
            '@[text="去下载"] <n View -n [text="大额金币任务"] < View < View < View <n View <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '@[name*="Image"][index=parent.childCount.minus(1)] <n View <n View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="开宝箱得金币"] <n View < View <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="去试玩"] <n View -n [text="大额金币任务"] < View < View < View <n View <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '立即下载|安装',
          anyMatches: [
            '@[text~="立即下载|安装"][clickable=true] < View <n [id="root"] <n WebView < WebView < RelativeLayout <n RelativeLayout < ScrollView < RelativeLayout < [id="android:id/content"]',
            '@[text~="立即下载|安装"][clickable=true] < View < View < View <n [id="root"] <n WebView < WebView < RelativeLayout <n RelativeLayout < ScrollView < RelativeLayout < [id="android:id/content"]',
            '@[text~="立即下载|安装"] <n View < View < View < View <n View <n View < View < [id="root"] <n WebView < WebView < RelativeLayout <n RelativeLayout < ScrollView < RelativeLayout < [id="android:id/content"]',
            '@[text~="立即下载|安装"] < View < View < View < View < View < View <n View <n View < View < [id="root"] <n WebView < WebView < RelativeLayout <n RelativeLayout < ScrollView < RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.qq.e.tg.PortraitADActivity'],
        },
        {
          key: 2,
          name: '返回',
          action: 'back',
          actionDelay: 5000,
          anyMatches: [
            '@[text~="打开"][clickable=true] < View <n [id="root"] <n WebView < WebView < RelativeLayout <n RelativeLayout < ScrollView < RelativeLayout < [id="android:id/content"]',
            '@[text~="打开"][clickable=true] < View < View < View <n [id="root"] <n WebView < WebView < RelativeLayout <n RelativeLayout < ScrollView < RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.qq.e.tg.PortraitADActivity'],
        },
        {
          key: 3,
          name: '去试玩',
          actionDelay: 2000,
          matches: [
            '@[text="去试玩"] <n View -n [text="大额金币任务"] < View < View < View <n View <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '@[name*="Image"][index=parent.childCount.minus(1)] <n View <n View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="开宝箱得金币"] <n View < View <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          key: 4,
          name: '试玩*秒，领取金币',
          actionDelay: 2000,
          matches: [
            '@[name*="Image"] -n @[text~="试玩.*秒，领取金币"] <n View <n View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          key: 5,
          name: '恭喜你获得奖励-×',
          actionDelay: 2000,
          matches: [
            '@Image -n [text="恭喜你获得奖励"] < View <n View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          key: 6,
          name: '去打开',
          actionDelay: 2000,
          matches: [
            '@[text="去打开"] -n [text!~="后打开再领金币"] - TextView < View <n View < View < View <n View <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '@[name*="Image"][index=parent.childCount.minus(1)] <n View <n View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="开宝箱得金币"] <n View < View <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text~="去下载|去试玩"] <n View -n [text="大额金币任务"] < View < View < View <n View <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '赚金币-惊喜任务',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.activities.MainActivity'],
      rules: [
        {
          key: 0,
          name: '去领取',
          actionDelay: 2000,
          matches: [
            '@[text="去领取"] <n [id="surpriseAdNew_surprise"] - [text="惊喜任务"] <n View <n View <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '@[name*="Image"][index=parent.childCount.minus(1)] <n View <n View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="开宝箱得金币"] <n View < View <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '赚金币-日常任务',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.activities.MainActivity'],
      rules: [
        {
          key: 14,
          name: '看视频拆红包-领取',
          matches: [
            '@[text="领取"] - [text="看视频拆红包"] - [text="日常任务"] < [id="dailyTask"] <n View <n View <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '@[name*="Image"][index=parent.childCount.minus(1)] <n View <n View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="开宝箱得金币"] <n View < View <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
            '@[text="去领取"] <n [id="surpriseAdNew_surprise"] - [text="惊喜任务"] <n View <n View <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          key: 11,
          name: '恭喜你获得奖励-×',
          matches: [
            '@ImageButton[index=parent.childCount.minus(1)][clickable=true] -n [text="恭喜你获得奖励"] < View <n View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '赚金币-开宝箱得金币',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.activities.MainActivity', 'com.qq.e.tg.ADActivity'],
      rules: [
        {
          key: 0,
          name: '开宝箱得金币',
          actionDelay: 2000,
          matches: [
            '@[text="开宝箱得金币"] <n View < View <n View < [id="root"] < View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
          excludeMatches: [
            '@[name*="Image"][index=parent.childCount.minus(1)] <n View <n View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '返回-< ×',
          actionDelay: 5000,
          matches: [
            'ImageView - View - TextView - @ImageView[clickable=true] - View < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text="点击商品打开京东再得100金币"] <n LinearLayout < LinearLayout < FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '赚金币-看广告详情5秒共领*金币',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.activities.MainActivity', 'com.qq.e.tg.ADActivity'],
      rules: [
        {
          key: 16,
          name: '看广告详情',
          matches: [
            '[text="看广告详情"] <n @View[clickable=true] <n View < View <n View < WebView < WebView < [vid="pull_to_fresh"]',
          ],
        },
      ],
    },
    //看广告
    {
      scopeKeys: [14, 16],
      key: 20,
      name: '看视频-点击广告浏览|后，看15秒可获得奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.activities.MainActivity',
        'com.tencentmusic.ad.tmead.core.activity.TMECoreActivity',
        'com.qq.e.tg.ADActivity',
      ],
      rules: [
        {
          preKeys: [14, 16],
          key: 0,
          name: '点击浏览15秒',
          actionDelay: 2000,
          matches: [
            'View < @ViewGroup < ViewGroup - ViewGroup < ViewGroup - ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n [vid="tme_ad_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '点击商品打开京东再得100金币',
          actionDelay: 1000,
          anyMatches: [
            'TextView - Image < View < View < View < View < View < View <n [id="feature-wrapper"] < View <n View < [id="app"] < WebView < WebView - LinearLayout > [text="点击商品打开京东再得100金币"]',
            'TextView - Image < View < View < View < View < View < View < [id="feature-wrapper"] < View <n View < [id="app"] < View < WebView < WebView - LinearLayout > [text="点击商品打开京东再得100金币"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '立即打开/打开京东APP',
          anyMatches: [
            '@[text="立即打开"][clickable=true] <n View < View < View < View < View < View < View < WebView < WebView <n LinearLayout < FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
            '[text="打开京东APP"] <n View < @[id="imk2FixedBottomBtn"][clickable=true] <n View <n View < WebView < WebView <n LinearLayout < FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text="恭喜已获得100金币"] <n LinearLayout < LinearLayout < FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '返回-< ×',
          actionDelay: 5000,
          matches: [
            '@[text="恭喜已获得100金币"] <n LinearLayout < LinearLayout < FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
            'ImageView - View - TextView - @ImageView[clickable=true] - View < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text="点击商品打开京东再得100金币"] <n LinearLayout < LinearLayout < FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [14, 16],
          key: 4,
          name: '下载游戏|下载应用|立即下载|立即抢购|去微信看看|查看详情',
          actionDelay: 2000,
          anyMatches: [
            'View < @ViewGroup - ViewGroup - ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n [vid="tme_ad_container"]',
            'View < @ViewGroup - ViewGroup - ViewGroup - ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n [vid="tme_ad_container"]',
            'View < @ViewGroup - ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n [vid="tme_ad_container"]',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          name: '返回-< ××',
          actionDelay: 15000,
          matches: [
            'ImageView - View - TextView - @ImageView[clickable=true] - View < FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [3, 5],
          key: 6,
          name: '恭喜已获得奖励-×',
          matches: [
            'ViewGroup < ViewGroup - ViewGroup < @ViewGroup[desc="点击退出关闭视频"] <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n [vid="tme_ad_container"]',
          ],
        },
        {
          key: 7,
          name: '恭喜已获得奖励-××',
          actionDelay: 5000,
          matches: [
            'ViewGroup < ViewGroup - ViewGroup < @ViewGroup[desc="点击退出关闭视频"] <n ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n [vid="tme_ad_container"]',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-5秒后点广告，可获得奖励|跳过',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.activities.MainActivity',
        'com.tencentmusic.ad.tmead.core.activity.TMECoreActivity',
        'com.qq.e.tg.ADActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击广告，可获得奖励',
          actionDelay: 2000,
          matches: [
            '[text="点击白色区域"] < @View[clickable=true] <n View < [id="root"] <n WebView < WebView < FrameLayout <n ViewGroup < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text~=".*秒后点广告，可获得奖励"][clickable=true] <n View < View <n View < [id="root"] <n WebView < WebView < FrameLayout <n ViewGroup < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '已获得奖励-跳过',
          actionDelay: 15000,
          matches: [
            '@[text="|跳过"][clickable=true] - [text="已获得奖励"] <n View < View <n View < [id="root"] <n WebView < WebView < FrameLayout <n ViewGroup < [id="android:id/content"]',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '立即更新-我再想想',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[desc="立即更新"][vid="right_pic"] - @[desc="我再想想"][vid="left_pic"][clickable=true] < LinearLayout <n RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['.activities.MainActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[desc="跳过"][vid="btnSkip"]',
            '[text="跳过"][vid="qq_skip_button"] < FrameLayout < @LinearLayout[clickable=true]',
            '[text="跳过"][vid="smallLogo_tvSkip"] < @[vid="smallLogo_rlSkip"][clickable=true]',
          ],
          activityIds: ['.activities.EntryActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '弹窗广告-×',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@TextView[clickable=true] < View < View <n View < WebView < WebView < [vid="webView"]',
            '@ImageView[vid="iv_business_personal_dia_close"][clickable=true] <n LinearLayout < RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['.activities.MainActivity'],
        },
      ],
    },
  ],
});
