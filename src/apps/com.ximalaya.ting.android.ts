import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ximalaya.ting.android',
  name: '喜马拉雅',
  groups: [
    //赚金币
    {
      key: 0,
      name: '赚金币-连续签到满7天,抽30000金币-看广告签到',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text^="看广告签到"] <<n * [text="赚金币"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '赚金币-连续签到满7天,抽30000金币-立即抽奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="立即抽奖"] <<n * [text="赚金币"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '赚金币-本周连续7天百亿金币等你来瓜分-看广告领金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: [
            '@[text^="看广告领金币"] <<n * [text="赚金币"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '赚金币-本周连续7天百亿金币等你来瓜分-超幸运！可抽随机金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: [
            '@[text="超幸运！可抽随机金币"] <<n * [text="赚金币"]',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
    {
      key: 4,
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
      key: 5,
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
      key: 6,
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
      key: 7,
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
      key: 8,
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
      key: 9,
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
      key: 10,
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
      key: 11,
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
      key: 12,
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
      key: 13,
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
      key: 14,
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
      key: 15,
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
      key: 16,
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
      key: 17,
      name: '赚金币-幸运大转盘-开心收下',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="开心收下"] <<n * [text="幸运大转盘"]'],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 18,
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
      key: 19,
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
      key: 20,
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
      key: 21,
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
      key: 22,
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
      key: 23,
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
      key: 24,
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
      key: 25,
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
      key: 26,
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
      key: 27,
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
      key: 28,
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
      key: 29,
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
      key: 30,
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
      key: 31,
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
      key: 32,
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
      key: 40,
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
    //看视频
    {
      key: 100,
      name: '看视频-跳过↑',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          anyMatches: [
            '@[text^="我要"] <<n * -n * >n [text$="跳过"]', //我要加速
            '@[text$="体验"] <<n * -n * >n [text$="跳过"]',
            '@[text="立即前往"] <<n * -n * >n [text$="跳过"]',
            '@[text="再试一次"] <<n * -n * >n [text$="跳过"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 101,
      name: '看视频-跳过↓',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 2000,
          anyMatches: [
            '@[text^="我要"] <<n * +n * >n [text$="跳过"]', //我要直接拿奖励
            '@[text$="体验"] <<n * +n * >n [text$="跳过"]',
            '@[text="再试一次"] <<n * +n * >n [text$="跳过"]',
            '@[text="去领奖励"] <<n * +n * >n [text$="跳过"]',
            '@[text="拿奖励"] <<n * +n * >n [text$="拿奖励"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTRewardVideoActivity',
          ],
        },
      ],
    },
    {
      //未适配
      key: 102,
      name: '看视频-跳过↓-体验',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: [
            '[text="可提前20秒领奖"] -n @[text$="体验"] <<n * +n * >n [text$="跳过"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.kwad.sdk.api.proxy.app.KsRewardVideoActivity',
          ],
        },
      ],
    },
    {
      key: 103,
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
      key: 104,
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
    //看视频-返回|跳过|关闭
    {
      key: 107,
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
    {
      key: 108,
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
      key: 109,
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
      key: 110,
      name: '看视频-我要更快拿奖-奖励将于*秒后发放-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="我要更快拿奖"] <<n * [text="奖励将于"]',
          ],
          activityIds: [
            'com.qq.e.ads.PortraitADActivity',
          ],
        },
      ],
    },
    {
      key: 111,
      name: '看视频-已完成浏览*秒，提前获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView <<n * -n * <n * -n * >n [text^="已完成浏览"]',
          ],
          activityIds: [
            'com.qq.e.ads.PortraitADActivity',
          ],
        },
      ],
    },
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
          matches: [
            '@[desc="返回"] <<n [vid="comp_actionbar_home"] +n LinearLayout',
          ],
          activityIds: ['.host.activity.MainActivity'],
        },
      ],
    },
  ],
});
