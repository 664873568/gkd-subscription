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
      name: '天天赚话费-更多任务',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ViewGroup[index=0][childCount=0] < ViewGroup[index=2][childCount=2]',
          ],
          activityIds: [
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '天天赚话费-赚充值金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ViewGroup[index=0][childCount=0] < ViewGroup[index=2][childCount=1] - ViewGroup[index=1][childCount=2]',
          ],
          activityIds: [
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '天天赚话费-再赚充值金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ViewGroup[index=0][childCount=0] < ViewGroup[index=3][childCount=1] -2 ViewGroup[desc$="00"]'],
          activityIds: ['com.bytedance.android.shopping.store.tabkit.container.TabKitActivity'],
        },
      ],
    },
    {
      key: 23,
      name: '天天用好券-返回领取-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 32000,
          matches: ['@[desc="返回"] <<n * [text="返回领取"]'],
          activityIds: ['com.ss.android.ugc.aweme.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 24,
      name: '天天用好券-放弃优惠-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[desc="返回"] <<n * [text="放弃优惠"]'],
          activityIds: ['com.ss.android.ugc.aweme.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 25,
      name: '天天用好券-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 32000,
          matches: ['@[desc="返回"] <<n * [text="返回领取"]'],
          activityIds: ['com.ss.android.ugc.aweme.live.LiveDummyActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[desc="返回"] <<n * [text="放弃优惠"]'],
          activityIds: ['com.ss.android.ugc.aweme.live.LiveDummyActivity'],
        },
      ],
    },
    //看视频
    {
      key: 30,
      name: '看视频-任务完成 返回领取-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 32000,
          excludeMatches: ['ImageView - @ImageView < ViewGroup -3 ScrollView'],
          matches: ['@ImageView < ViewGroup -3 ScrollView'],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
    {
      key: 31,
      name: '看视频-直播-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 32000,
          matches: ['@[desc="关闭"][vid="crt"] <<n LiveMeasureOnceRelativeLayout'],
          activityIds: ['com.ss.android.ugc.aweme.live.LivePlayActivity'],
        },
      ],
    },
    {
      key: 32,
      name: '看视频-任务完成 返回领取-直播-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 32000,
          matches: ['@[desc="关闭"][vid="crt"] <<n LiveMeasureOnceRelativeLayout'],
          activityIds: ['com.ss.android.ugc.aweme.live.LivePlayActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          excludeMatches: ['ImageView - @ImageView < ViewGroup -3 ScrollView'],
          matches: ['@ImageView < ViewGroup -3 ScrollView'],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
  ],
});
