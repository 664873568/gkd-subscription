import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yy.yyvoicetool',
  name: 'YY语音',
  groups: [
    //每日任务
    {
      key: 0,
      name: '每日任务-领奖励',
      matchRoot: true,
      actionMaximum: 5,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="领奖励"] <<n * [text="每日任务"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '每日任务-我知道了',
      matchRoot: true,
      actionMaximum: 5,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="我知道了"] -4 [text="恭喜获得"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '每日任务-领奖励-我知道了',
      matchRoot: true,
      actionMaximum: 5,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="领奖励"] <<n * [text="每日任务"]'],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="我知道了"] -4 [text="恭喜获得"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '每日任务-我知道了',
      matchRoot: true,
      actionMaximum: 5,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 2000,
          matches: ['@[text="取消"] - [desc="删除"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    //每日任务-看视频有惊喜
    {
      key: 10,
      name: '每日任务-看视频有惊喜-去完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: ['@[text="去完成"] <<n * [text^="看视频有惊喜"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '每日任务-看视频有惊喜-已获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="t110b9a9301b88144c7d47d8196"] <<n * [text="已获得奖励"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
  ],
});
