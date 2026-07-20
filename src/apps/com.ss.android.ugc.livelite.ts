import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.livelite',
  name: '抖音商城',
  groups: [
    //充值中心-天天赚话费
    {
      key: 40,
      name: '天天赚话费-更多任务',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 9000,
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
      key: 41,
      name: '天天赚话费-赚充值金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
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
      key: 42,
      name: '天天赚话费-再赚充值金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: [
            '@ViewGroup[index=0][childCount=0] < ViewGroup[index=3][childCount=1] -2 ViewGroup[desc~="\\\\d+00"]',
          ],
          activityIds: [
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
        },
      ],
    },
    {
      key: 43,
      name: '天天赚话费-天天用好券-返回领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 3000,
          matches: ['@[text="返回领取"] - [text="浏览好物"]'],
          activityIds: ['com.ss.android.ugc.aweme.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 44,
      name: '天天赚话费-天天用好券-放弃优惠',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[desc="返回"] <<n * [text="放弃优惠"]'],
          activityIds: ['com.ss.android.ugc.aweme.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 45,
      name: '天天赚话费-天天用好券',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 3000,
          matches: ['@[text="返回领取"] - [text="浏览好物"]'],
          activityIds: ['com.ss.android.ugc.aweme.live.LiveDummyActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: ['@[desc="返回"] <<n * [text="放弃优惠"]'],
          activityIds: ['com.ss.android.ugc.aweme.live.LiveDummyActivity'],
        },
      ],
    },
    //看视频
    {
      key: 60,
      name: '看视频-任务完成 返回领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 3000,
          excludeMatches: ['ImageView - @ImageView < ViewGroup -3 ScrollView'],
          matches: ['@ImageView < ViewGroup -3 ScrollView'],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
    {
      key: 61,
      name: '看视频-直播',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 30000,
          matches: [
            '@[desc="关闭"][vid="crt"] <n LiveMeasureOnceRelativeLayout',
          ],
          activityIds: ['com.ss.android.ugc.aweme.live.LivePlayActivity'],
        },
      ],
    },
    {
      key: 62,
      name: '看视频--任务完成 返回领取-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 30000,
          matches: [
            '@[desc="关闭"][vid="crt"] <n LiveMeasureOnceRelativeLayout',
          ],
          activityIds: ['com.ss.android.ugc.aweme.live.LivePlayActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          excludeMatches: ['ImageView - @ImageView < ViewGroup -3 ScrollView'],
          matches: ['@ImageView < ViewGroup -3 ScrollView'],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 400,
      name: '检测到更新',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text="以后再说"] < LinearLayout -n [text="检测到更新"]'],
          activityIds: ['com.ss.android.ugc.aweme.main.MainActivity'],
        },
      ],
    },
  ],
});
