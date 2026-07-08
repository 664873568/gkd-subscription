import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.livelite',
  name: '抖音商城',
  groups: [
    {
      key: 0,
      name: '浏览好物-返回领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 31000,
          matches: ['@[text="返回领取"] <<n * [id="recharge-pendant"]'],
          activityIds: ['com.ss.android.ugc.aweme.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '领现金-任务完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 31000,
          matches: ['@ViewGroup <<n [vid="bzx"] <<n [vid="gdz"]'],
          activityIds: [
            'com.ss.android.ugc.aweme.search.common.activity.ECSearchActivity',
          ],
        },
      ],
    },
    //充值中心-充值金
    {
      key: 20,
      name: '天天赚话费-每日签到',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ViewGroup[index=0][childCount=0] < ViewGroup[index=2][childCount=2]'],
          activityIds: ['com.bytedance.android.shopping.store.tabkit.container.TabKitActivity'],
        },
      ],
    },
    {
      key: 21,
      name: '天天赚话费-更多任务',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ViewGroup[index=0][childCount=0] < ViewGroup[index=2][childCount=2]'],
          activityIds: ['com.bytedance.android.shopping.store.tabkit.container.TabKitActivity'],
        },
      ],
    },
    {
      key: 22,
      name: '天天用好券-浏览好物-返回领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 31000,
          matches: ['@[text="返回领取"] <<n * [desc="返回"]'],
          activityIds: ['com.ss.android.ugc.aweme.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 23,
      name: '天天用好券-放弃优惠-返回',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="放弃优惠"] <<n * [desc="返回"]'],
          activityIds: ['com.ss.android.ugc.aweme.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 24,
      name: '天天用好券-返回',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 31000,
          matches: ['@[text="返回领取"] <<n * [desc="返回"]'],
          activityIds: ['com.ss.android.ugc.aweme.live.LiveDummyActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="放弃优惠"] <<n * [desc="返回"]'],
          activityIds: ['com.ss.android.ugc.aweme.live.LiveDummyActivity'],
        },
      ],
    },
    //看视频
    {
      key: 30,
      name: '看视频-返回领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 31000,
          excludeMatches: ['ImageView - @ImageView < ViewGroup -3 ScrollView'],
          matches: ['@ImageView < ViewGroup -3 ScrollView'],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
    {
      key: 31,
      name: '看视频-任务完成 返回领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 31000,
          matches: ['@ImageView < [desc^="任务完成 返回领取"]'],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
    {
      key: 32,
      name: '看视频-直播-返回',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 31000,
          matches: ['@[vid="cso"] <<n * LiveMeasureOnceRelativeLayout'],
          activityIds: ['com.ss.android.ugc.aweme.live.LivePlayActivity'],
        },
      ],
    },
  ],
});
