import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
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
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    //理财-发财金
    {
      key: 10,
      name: '理财-首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView - ImageView < ViewGroup - ScrollView'],
          activityIds: [
            'com.tt.miniapphost.placeholder.MiniAppHostStackActivity0',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '发财金已到账-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 31000,
          matches: ['@[desc="券红包"] <<n * [vid="buu"]'],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    //看视频
    {
      key: 20,
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
      key: 21,
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
  ],
});
