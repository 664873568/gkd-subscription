import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.livelite',
  name: '抖音商城',
  groups: [
    //充值中心-天天赚话费
    {
      key: 0,
      name: '天天赚话费-更多任务',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 2000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ViewGroup[childCount=0] < ViewGroup[childCount=2] -n ScrollView',
          ],
          activityIds: [
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '天天赚话费-赚充值金',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 2000,
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
      key: 2,
      name: '天天赚话费-再赚充值金',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 2000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ViewGroup[index=0][childCount=0] < ViewGroup[index=3][childCount=1] -2 ViewGroup[desc~="[0-9]+00"]',
          ],
          activityIds: [
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '天天赚话费-天天用好券-返回领取',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 2000,
      resetMatch: 'activity',
      activityIds: ['com.ss.android.ugc.aweme.live.LiveDummyActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[desc="返回"] <<n [id="mix-navbar"] +n [id="b05ddabf003f3617"] >n [text="浏览好物"] + [text="返回领取"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          action: 'back',
          matches: ['@[desc="返回"] <<n * [text="放弃优惠"]'],
        },
      ],
    },
    //看视频
    {
      key: 4,
      name: '看视频-任务完成 返回领取',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 30000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[desc="关闭"][vid="crt"] <n LiveMeasureOnceRelativeLayout',
          ],
          activityIds: ['com.ss.android.ugc.aweme.live.LivePlayActivity'],
        },
        {
          key: 1,
          actionDelay: 1000,
          matches: ['@ImageView < ViewGroup[childCount=1] -3 ScrollView'],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
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
