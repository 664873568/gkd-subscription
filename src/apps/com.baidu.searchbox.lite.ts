import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.searchbox.lite',
  name: '百度极速版',
  groups: [
    //26.05.25开始 每日福利-每日开红包得奖励
    {
      key: 10,
      name: '每日福利-开红包',
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="去领取"][clickable=true] -2 [text="今日送你免费红包 （0/1）"]',
          ],
          activityIds: [
            'com.baidu.searchbox.hybrid.container.TaskImmerseBrowserActivity',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '每日福利-看广告', //*s后可领取奖励
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="去完成"][clickable=true] -2 [text="看3个广告得1个红包 （0/3）"]',
            '@[text="继续看"][clickable=true] -2 [text~="看3个广告得1个红包 （[0-2]/3）"]',
          ],
          activityIds: [
            'com.baidu.searchbox.hybrid.container.TaskImmerseBrowserActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            '@ImageView[clickable=true] - [text="广告"] - * [text="已完成任务"]',
            '@ImageView[clickable=true] - [text="广告"] - * [text="已领取1金币"]',
          ],
          activityIds: [
            'com.baidu.nadcore.lp.reward.NadRewardVideoActivity',
            'com.baidu.nadcore.lp.reward.v2.NadRewardVideoActivityV2',
          ],
        },
        {
          preKeys: [0,1],
          key: 2,
          matches: [
            '[text="再看一个领取更多福利"][clickable=true] + LinearLayout > FrameLayout > @[text="残忍离开"][clickable=true]',
          ],
          activityIds: [
            'com.baidu.nadcore.lp.reward.NadRewardVideoActivity',
            'com.baidu.nadcore.lp.reward.v2.NadRewardVideoActivityV2',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '每日福利-看视频*个',
      matchRoot: true,
      matchDelay: 2000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="去完成"][clickable=true] -2 [text="看10个视频得1个红包 （0/10）"]',
            '@[text="继续看"][clickable=true] -2 [text~="看10个视频得1个红包 （[0-9]/10）"]',
          ],
          activityIds: [
            'com.baidu.searchbox.hybrid.container.TaskImmerseBrowserActivity',
          ],
        },
        {
          action: 'swipe',
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 200,
          },
          actionCd: 5000,
          actionMaximum: 20,
          matches: [
            '@[vid="video_flow_cmp_list"] <<n * +n * [text~="再看[0-9]+个\\\\n可得红包"]',
          ],
          activityIds: [
            'com.baidu.searchbox.video.feedflow.tab.VideoTabActivity',
          ],
        },
        {
          matches: [
            '@ViewGroup[clickable=true] > ViewGroup + ViewGroup > ImageView + [text="点击领取\\n1个红包"]',
          ],
          activityIds: [
            'com.baidu.searchbox.video.feedflow.tab.VideoTabActivity',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '每日福利-看视频*秒',
      matchRoot: true,
      matchDelay: 3000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="去完成"][clickable=true] -2 [text="看2分钟视频得1个红包"]',
            '@[text="继续看"][clickable=true] -2 [text="看2分钟视频得1个红包"]',
          ],
          activityIds: [
            'com.baidu.searchbox.hybrid.container.TaskImmerseBrowserActivity',
          ],
        },
        {
          action: 'swipe',
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 200,
          },
          actionCd: 12000,
          actionMaximum: 20,
          matches: [
            '@[vid="video_flow_cmp_list"] <<n * +n * [text~="再看[0-9]+秒\\\\n可得红包"]',
          ],
          activityIds: [
            'com.baidu.searchbox.video.feedflow.tab.VideoTabActivity',
          ],
        },
        {
          matches: [
            '@ViewGroup[clickable=true] > ViewGroup + ViewGroup > ImageView + [text="点击领取\\n1个红包"]',
          ],
          activityIds: [
            'com.baidu.searchbox.video.feedflow.tab.VideoTabActivity',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '每日福利-开红包',
      matchRoot: true,
      matchDelay: 3000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: ['[text="去完成"][clickable=true]'],
          matches: [
            '[text="达到20元立即提现"] +n * > @View[clickable=true] + [text="提升幸运"][clickable=true]',
          ],
          activityIds: [
            'com.baidu.searchbox.hybrid.container.TaskImmerseBrowserActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="开心收下"][clickable=true] < * -n * [text="恭喜获得现金红包"]',
          ],
          activityIds: [
            'com.baidu.searchbox.hybrid.container.TaskImmerseBrowserActivity',
          ],
        },
      ],
    },
    //26.07.23-26.09.11 暑期免费看
    {
      key: 20,
      name: '暑期免费看-去完成',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="去完成"][clickable=true]'],
          activityIds: [
            'com.baidu.browser.search.LightSearchActivity',
            'com.baidu.searchbox.lightbrowser.LightBrowserActivityExt1',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: ['@FrameLayout[clickable=true] >n [text="领取奖励"]'],
          activityIds: [
            'com.baidu.searchbox.video.feedflow.tab.VideoTabActivity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '暑期免费看-抽10次',
      matchRoot: true,
      matchDelay: 2000,
      actionMaximum: 20,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: ['[text="去完成"][clickable=true]'],
          matches: [
            '[text~="剩余抽纪念票次数：[1-9][0-9]+ 次"] - @View[clickable=true] > [text="chou10"]',
          ],
          activityIds: [
            'com.baidu.browser.search.LightSearchActivity',
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
            'com.baidu.browser.search.LightSearchActivity',
            'com.baidu.searchbox.lightbrowser.LightBrowserActivityExt1',
          ],
        },
      ],
    },
    //看视频-返回|跳过|关闭
    {
      key: 30,
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
