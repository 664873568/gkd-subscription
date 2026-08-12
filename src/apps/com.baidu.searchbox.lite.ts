import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.searchbox.lite',
  name: '百度极速版',
  groups: [
    //26.07.23-26.09.11 暑期免费看
    {
      key: 0,
      name: '暑期免费看-去完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="去完成"][clickable=true]'],
          activityIds: [
            'com.baidu.searchbox.lightbrowser.LightBrowserActivityExt1',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: [
            '@FrameLayout[clickable=true] >n [text="领取奖励"][vid="obfuscated"]',
          ],
          activityIds: [
            'com.baidu.searchbox.video.feedflow.tab.VideoTabActivity',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '暑期免费看-抽10次',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: ['[text="去完成"][clickable=true]'],
          matches: [
            '[text~="剩余抽纪念票次数：[1-9][0-9]+ 次"] - * @View[clickable=true] > [text="chou10"]',
          ],
          activityIds: [
            'com.baidu.searchbox.lightbrowser.LightBrowserActivityExt1',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: [
            '@[text="close6"][clickable=true] + [text="draw-card-title-bg"] + [text="获得10张纪念票"]',
          ],
          activityIds: [
            'com.baidu.searchbox.lightbrowser.LightBrowserActivityExt1',
          ],
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
          matches: [
            '@[vid="obfuscated"] - [text="广告"] <<n * [text="已获得奖励"]',
          ],
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
