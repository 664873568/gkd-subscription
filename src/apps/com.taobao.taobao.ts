import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    //天猫超市
    {
      key: 0,
      name: '天猫超市-好运签-做任务',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      activityIds: ['com.taobao.themis.container.app.TMSActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="领任务"] <<n [id="panel-content"] <<n [text="天猫超市"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: [
            '@[text="任务已完成"] <n [desc="任务已完成 快去领奖励"] <<n [text^="天猫超市"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[text="领奖励"] <<n [id="panel-content"] <<n [text="天猫超市"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: [
            '@[text="领任务"] <<n [id="panel-content"] <<n [text="天猫超市"]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '天猫超市-好运签-做任务-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: [
            '@[text="领任务"] <<n [id="panel-content"] <<n [text="天猫超市"]',
            '@[text="领奖励"] <<n [id="panel-content"] <<n [text="天猫超市"]',
          ],
          matches: [
            '@[text^="O1CN01UKt34q1bWga0WWl5L"] <2 * +n * >n [text="已领奖"]',
          ],
          activityIds: ['com.taobao.themis.container.app.TMSActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[desc="关闭按钮"] - [vid="poplayer_native_state_id"]'],
          activityIds: ['com.taobao.tao.welcome.Welcome'],
        },
      ],
    },
  ],
});
