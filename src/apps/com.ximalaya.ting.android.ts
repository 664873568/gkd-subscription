import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ximalaya.ting.android',
  name: '喜马拉雅',
  groups: [
    //赚金币-.host.activity.MainActivity
    {
      key: 0,
      name: '赚金币-看广告签到',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text^="看广告签到"] < ViewGroup -3 HorizontalScrollView',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '赚金币-看广告领金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text~="看广告领\\\\d+金币"] < @ViewGroup <n ViewGroup -n ViewGroup',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '赚金币-瓜分百亿金币-看广告领金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text^="看广告领金币"] <<n * [text="瓜分百亿金币"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '赚金币-瓜分百亿金币-超幸运！可抽随机金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: ['@[text="超幸运！可抽随机金币"] <<n * [text="赚金币"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '赚金币-听书赚金币-去领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: ['@[text="去领取"] <<n * [text="听书赚金币"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '赚金币-看广告额外获得',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: ['@[text="看广告额外获得"] <<n * [text="赚金币"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '赚金币-看广告得金币-看广告',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 4000,
          excludeMatches: ['@[text="100"] <<n * [text="看广告得金币"]'],
          matches: ['@[text="看广告"] <<n * [text="看广告得金币"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '赚金币-看广告得金币-看广告领',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 4000,
          matches: [
            '@[vid="main_watch_ad_button"] <<n * [text="看广告得金币"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '赚金币-看广告得金币-我知道了',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="我知道了"] <<n * [text="看广告得金币"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 10,
      name: '赚金币-立即抽奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="立即抽奖"] <<n * [text="赚金币"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 15,
      name: '赚金币-限时领金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: ['@[text="限时领金币"] <<n * [text="赚金币"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 16,
      name: '赚金币-点击并浏览5秒即可额外获得金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text^="点击并浏览"][vid="main_watch_ad_button"] <<n * [text^="签到成功"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 17,
      name: '赚金币-点击并浏览-我知道了',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[vid="main_watch_ad_button"] <<n * [text^="签到成功"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="我知道了"] <<n * [text="恭喜获得"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 18,
      name: '赚金币-恭喜获得-我知道了',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="我知道了"] <<n * [text="恭喜获得"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 19,
      name: '赚金币-恭喜获得-开心收下',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="开心收下"] - ImageView < ViewGroup - [text="金币"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    //赚金币-翻卡/大转盘
    {
      key: 20,
      name: '赚金币-翻卡赢9999金币-去翻卡',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: ['@[text="去翻卡"] <<n * [text="翻卡赢9999金币"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 21,
      name: '赚金币-翻卡赢9999金币-翻下一位',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="翻下一位"] <n * - * >n [text="再翻一次"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 22,
      name: '赚金币-翻卡赢9999金币-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: [
            '@ViewGroup - ViewGroup < ViewGroup + ViewGroup >n [text="翻下一位"]',
          ],
          matches: [
            '@ViewGroup - ViewGroup < ViewGroup + ViewGroup >n [text="再翻一次"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 23,
      name: '赚金币-翻卡赢9999金币-直接领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="直接领取"] <<n * [text="翻卡赢9999金币"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 24,
      name: '赚金币-幸运大转盘-首次免费',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="首次免费"] <<n * [text="幸运大转盘"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 25,
      name: '赚金币-幸运大转盘-免费抽大奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="免费\\n抽大奖"] <<n * [text="幸运大转盘"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 26,
      name: '赚金币-幸运大转盘-看*个广告免费抽',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text^="个广告免费抽"] <<n * [text="幸运大转盘"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 27,
      name: '赚金币-幸运大转盘-看广告额外领',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="看广告额外领"] <<n * [text="幸运大转盘"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 28,
      name: '赚金币-幸运大转盘-开心收下',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="开心收下"] <<n * [text="幸运大转盘"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    //赚金币-每日任务
    {
      key: 30,
      name: '赚金币-每日任务-点一下开机广告-领金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="领金币"] <<n * [text="点一下开机广告"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 31,
      name: '赚金币-每日任务-点一下开机广告-看广告额外领',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="看广告额外领"] <<n * [text="点一下开机广告"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 32,
      name: '赚金币-每日任务-拆红包领金币-去领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: ['@[text="去领取"] <<n * [text="拆红包领金币"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 33,
      name: '赚金币-每日任务-拆红包领金币-红包雨-开',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView <<n * -n * <<n * -n * <<n * -n * >n [text="红包雨"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 34,
      name: '赚金币-每日任务-拆红包领金币-红包雨-看广告翻倍领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="看广告翻倍领取"] <<n * [text="红包雨"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 35,
      name: '赚金币-每日任务-拆红包领金币-红包雨-开心收下',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="开心收下"] <<n * [text="红包雨"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 36,
      name: '赚金币-每日任务-领取喝水补贴-去领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: ['@[text="去领取"] <<n * [text="领取喝水补贴"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 37,
      name: '赚金币-每日任务-领取喝水补贴-健康喝水打卡',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="第1杯水"] <<n * [text="健康喝水打卡"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 38,
      name: '赚金币-每日任务-领取喝水补贴-健康喝水打卡-看广告翻倍领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="看广告翻倍领取"] <<n * [text="健康喝水打卡"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 39,
      name: '赚金币-每日任务-换量任务-领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="领取"] <<n * [text="每日任务"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 40,
      name: '赚金币-每日任务-换量任务-领取-我知道了',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="我知道了"] <<n * [text="每日任务"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '赚金币-每日任务-换量任务-下载百度极速版',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@WebView[text="下载百度极速版"] <<n * TextView[text="下载百度极速版"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 42,
      name: '赚金币-每日任务-换量任务-下载百度极速版-<返回',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 2000,
          matches: ['@[desc="返回"] <<n * TextView[text="下载百度极速版"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 43,
      name: '赚金币-每日任务-换量任务-饿了么果园-<返回',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 2000,
          matches: ['@[desc="返回"] <<n * TextView[text$="果园"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    //兑好礼
    {
      key: 48,
      name: '兑好礼-看广告+500金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="看广告+500金币"] <<n * [text="兑好礼"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 49,
      name: '兑好礼-看视频即可到账',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView < [desc="关闭"] + [text="看视频即可到账"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    //免费领时长
    {
      key: 50,
      name: '免费领时长-做任务领更多时长-去完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="去完成"] <<n * [text="做任务领更多时长"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '免费领时长-做任务领更多时长-去分享',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="去分享"] <<n * [text="做任务领更多时长"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 52,
      name: '免费领时长-做任务领更多时长-去领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="去领取"] <<n * [text="做任务领更多时长"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 53,
      name: '免费领时长-听书领现金-去加倍',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="去加倍"] <<n * [text="听书领现金"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 54,
      name: '免费领时长-听书领现金-领取|看广告领',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          excludeMatches: ['@[text="去加倍"] <<n * [text="听书领现金"]'],
          matches: [
            '@[text="领取" || text="看广告领"] <<n * [text="听书领现金"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 55,
      name: '免费领时长-听书领现金-看视频再得',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text^="看视频再得"] <<n * [text="听书领现金"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 56,
      name: '免费领时长-看视频-已获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="host_reward_close_button"] - [text="已获得奖励"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 57,
      name: '免费领时长-看视频-已获得免费收听时长-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="host_reward_close_button"] - [text="已获得免费收听时长"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    //点击并浏览页面
    {
      key: 90,
      name: '点击并浏览页面-领取奖励-已获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="点击并浏览页面5s领取奖励"] <<n * [text="点击并浏览页面领取奖励"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="host_reward_close_button"] - [text="已获得奖励"] <<n * [text="查看详情"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    //点击广告领取奖励
    {
      key: 91,
      name: '点击广告领取奖励-领取奖励-已获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="点击广告领取奖励"] <<n * [text="点击广告获得奖励"]',
            '@[vid="host_bubble_ad_action_btn"] <<n * [vid="host_reward_tip"]',
            '@[vid="host_action_view_layout"] <<n * [vid="host_reward_tip"]',
            '@[vid="host_rl_download_layout"] <<n * [vid="host_reward_tip"]',
            '@[vid="host_video_ad_h5_layout_start_btn"] <<n * [vid="host_reward_tip"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="host_reward_close_button"] - [text="已获得奖励"] <<n * [text="查看详情"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    //看视频-com.bytedance.sdk.openadsdk.core.activity.base.TTDelegateActivity
    {
      key: 100,
      name: '看视频-跳过-×-应用详情+立即下载',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 15000,
          matches: [
            '@ImageView + [text="应用详情"] <<n * +n *[text="立即下载"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.activity.base.TTDelegateActivity',
          ],
        },
      ],
    },
    {
      key: 101,
      name: '看视频-跳过-继续观看',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="继续观看"] + [text="坚持退出"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.activity.base.TTDelegateActivity',
          ],
        },
      ],
    },
    //看视频-com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity
    {
      key: 110,
      name: '看视频-去领奖-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@RelativeLayout <<n * + * >n [text="奖励已领取"] - [text="svg%3e"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23494046'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
        },
      ],
    },
    //看视频-com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity
    {
      key: 120,
      name: '看视频-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          anyMatches: [
            '@[text^="我要"] <<n *[text$="跳过"]',
            '@[text$="体验"] <<n *[text$="跳过"]',
            '@[text="立即前往"] <<n *[text$="跳过"]',
            '@[text="再试一次"] <<n *[text$="跳过"]',
            '@[text="去领奖励"] <<n *[text$="跳过"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 121,
      name: '看视频-跳过-奖励已领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text$="跳过"] -n [text="奖励已领取"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 122,
      name: '反馈-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'ImageView < LinearLayout < LinearLayout - FrameLayout > [text="反馈"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 123,
      name: '看视频-限时领取',
      matchRoot: true,
      actionMaximum: 5,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="icon-close.e3e3211b"] -n View > [text="限时领取"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 124,
      name: '看视频-已发放-×',
      matchRoot: true,
      actionMaximum: 5,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="svg%3e"] <<n * [text="已发放"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    //看视频-com.qq.e.ads.PortraitADActivity
    {
      key: 130,
      name: '看视频-我要更快拿奖-奖励将于*秒后发放-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="我要更快拿奖"] <<n * [text="奖励将于"]'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 131,
      name: '看视频-已完成浏览*秒，提前获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView <<n * -n * <n * -n * >n [text^="已完成浏览"]'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    //看视频-com.tencentmusic.ad.tmead.core.activity.TMECoreActivity
    {
      key: 140,
      name: '看视频-观看完视频，可获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ViewGroup[index=3][childCount=1] <<n * [vid="tme_ad_tv_top_tips"]',
          ],
          activityIds: [
            'com.tencentmusic.ad.tmead.core.activity.TMECoreActivity',
          ],
        },
      ],
    },
    {
      key: 141,
      name: '看视频-点击退出关闭视频',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[desc="点击退出关闭视频"] <<n * [vid="tme_ad_tv_top_tips"]',
          ],
          activityIds: [
            'com.tencentmusic.ad.tmead.core.activity.TMECoreActivity',
          ],
        },
      ],
    },
    {
      key: 142,
      name: '看视频-立即抢购',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: [
            '@View < ViewGroup <3 ViewGroup <<n ViewGroup -2 ViewGroup >3 View',
          ],
          matches: [
            '@View < ViewGroup <4 ViewGroup <<n ViewGroup +2 ViewGroup >3 View',
          ],
          activityIds: [
            'com.tencentmusic.ad.tmead.core.activity.TMECoreActivity',
          ],
        },
      ],
    },
    {
      key: 143,
      name: '看视频-点击商品再得额外奖励500金币-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 15000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@TextView - Image <<n * [text="点击商品再得额外奖励500金币"]',
            '@TextView + View <<n * [text="点击商品再得额外奖励500金币"]',
          ],
          activityIds: ['com.tencent.ams.tg.ADActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 10000,
          matches: [
            '@View + ImageView <<n * [text="恭喜已获得额外奖励500金币"]',
          ],
          activityIds: ['com.tencent.ams.tg.ADActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          excludeMatches: [
            '@ViewGroup[index=3][childCount=1] <<n * [vid="tme_ad_tv_top_tips"]',
          ],
          matches: [
            '@ViewGroup <<2 ViewGroup - ViewGroup <<n ViewGroup - ViewGroup >3 View',
          ],
          activityIds: [
            'com.tencentmusic.ad.tmead.core.activity.TMECoreActivity',
          ],
        },
      ],
    },
    {
      key: 144,
      name: '看视频-可获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: [
            '@[desc="关闭广告"][vid="tme_ad_iv_close"] + [vid="tme_ad_top_tips_container"]',
          ],
          matches: [
            '@[desc="关闭广告"][vid="tme_ad_endcard_close"] + [vid="tme_ad_endcard_window"]',
          ],
          activityIds: [
            'com.tencentmusic.ad.tmead.core.activity.TMECoreActivity',
          ],
        },
      ],
    },
    //申请授权
    {
      key: 200,
      name: '喜马拉雅申请授权使用-拒绝',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="拒绝"] <n * -n * >n [text="喜马拉雅申请授权使用"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 201,
      name: '喜马拉雅申请授权使用-返回',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: [
            '@[desc="返回"] <<n [vid="comp_actionbar_home"] +n LinearLayout',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 300,
      name: '恭喜获得VIP免费听权益-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="main_free_listen_time_close_iv"] +n [text="恭喜获得VIP免费听权益"][vid="main_free_listen_time_title_tv"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    //首页功能类
    {
      key: 400,
      name: '发现新版本-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[desc="取消"] <<n * [text="发现新版本"]'],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 401,
      name: '开启通知权限-暂不开启',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="暂不开启"] <<n * [text="防止后台播放异常，建议开启通知权限"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 500,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="跳过"] < [vid="host_splash_fragment_root_lay"]',
            '@[desc="跳过广告"][vid="xm_ad_host_count_down_click_lay"] - [desc="跳过广告"][vid="xm_ad_host_count_down_click_lay_no_click_view"] - [text="跳过广告"][vid="xm_ad_host_count_down_text"] < [vid="host_splash_skip_layout"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
  ],
});
