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
          actionDelay: 30000,
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
          actionDelay: 30000,
          matches: ['@ViewGroup <<n [vid="bzx"] <<n [vid="gdz"]'],
          activityIds: [
            'com.ss.android.ugc.aweme.search.common.activity.ECSearchActivity',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '看视频-返回领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 30000,
          excludeMatches: ['ImageView - @ImageView < ViewGroup -3 ScrollView'],
          matches: ['@ImageView < ViewGroup -3 ScrollView'],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-直播-返回',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 30000,
          matches: ['@[vid="cso"] <<n * LiveMeasureOnceRelativeLayout'],
          activityIds: ['com.ss.android.ugc.aweme.live.LivePlayActivity'],
        },
      ],
    },
  ],
});
