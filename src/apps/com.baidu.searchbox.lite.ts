import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.searchbox.lite',
  name: '百度极速版',
  groups: [
    //现金长签到
    {
      key: 0,
      name: '现金长签到-去观看',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text="去观看"] <<n [text="现金长签到"]'],
          activityIds: ['com.baidu.searchbox.hybrid.container.TaskImmerseBrowserActivity'],
        },
      ],
    },
    //看视频-返回|跳过|关闭
    {
      key: 20,
      name: '看视频-已获得奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: ['@[vid="obfuscated"] - [text="广告"] <<n * [text="已获得奖励"]'],
          activityIds: ['com.baidu.nadcore.lp.reward.NadRewardVideoActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="残忍离开"] <<n * [text="再看一个领取更多福利"]'],
          activityIds: ['com.baidu.nadcore.lp.reward.NadRewardVideoActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text="跳过"] <<5 RelativeLayout[vid="obfuscated"]'],
          activityIds: ['com.baidu.searchbox.MainActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '升级-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[desc="关闭"] <<n * [text="立即升级"]'],
          activityIds: ['com.baidu.searchbox.update.UpdateDialogActivity'],
        },
      ],
    },
  ],
});
