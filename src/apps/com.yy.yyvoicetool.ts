import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yy.yyvoicetool',
  name: 'YY语音',
  groups: [
    {
      key: 0,
      name: '每日任务-领奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
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
      key: 2,
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
