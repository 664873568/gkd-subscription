import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    //天猫超市
    {
      key: 0,
      name: '天猫超市-好运签-摇一摇',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          matches: ['@[id="YVHLmvad9Z56"] <<n [text="天猫超市"]'],
          snapshotUrls: ['https://i.gkd.li/i/23561893'],
          activityIds: ['com.taobao.themis.container.app.TMSActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '天猫超市-好运签-兑赠金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['com.taobao.themis.container.app.TMSActivity'],
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 2000,
          matches: ['@[text="兑赠金立即兑换"] <<n [text="天猫超市"]'],
          snapshotUrls: ['https://i.gkd.li/i/23561893'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          matches: ['@[text="知道了"] <<n [text="天猫超市"]'],
          snapshotUrls: ['https://i.gkd.li/i/23561924'],
        },
      ],
    },
    {
      key: 2,
      name: '天猫超市-好运签-做任务赚好运值',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['com.taobao.themis.container.app.TMSActivity'],
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: ['@[text="做任务赚好运值"] <<n [text="天猫超市"]'],
          snapshotUrls: ['https://i.gkd.li/i/23561950'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          matches: [
            '@[text="领任务"] <3 * < [id="panel-content"] <<n [text="天猫超市"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23561997'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          action: 'back',
          matches: ['@[desc="任务已完成 快去领奖励"] <<n [text="天猫超市"]'],
          snapshotUrls: ['https://i.gkd.li/i/23562013'],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          action: 'clickCenter',
          matches: ['@[text="领奖励"] <<n [text="天猫超市"]'],
          snapshotUrls: ['https://i.gkd.li/i/23562109'],
        },
        {
          preKeys: [0, 1, 2, 3],
          key: 4,
          actionDelay: 2000,
          action: 'clickCenter',
          excludeMatches: [
            '@[text^="O1CN01UKt34q1bWga0WWl5L"] <2 * +n * >n [text="领奖励"]',
          ],
          matches: [
            '@[text^="O1CN01UKt34q1bWga0WWl5L"] <2 * +n * >n [text="领任务"]',
            '@[text^="O1CN01UKt34q1bWga0WWl5L"] <2 * +n * >n [text="已领奖"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23566423'],
        },
      ],
    },
  ],
});
