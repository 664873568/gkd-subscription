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
      name: '每日任务-限时任务',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[desc="YY游仓"] <<n ViewFactoryHolder'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '每日任务-打开',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="打开"] <n View -n [text="提示"]',
            '@[text="确定"] <n View -n [text="提示"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '每日任务-搜索',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 1000,
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
    //连续签到
    {
      key: 20,
      name: '每天领钱-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@View - [text$="自动关闭"] - ViewFactoryHolder'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 21,
      name: '连续签到-立即签到',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="立即签到"] <<n * [text="连续签到"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '未成年模式-我知道了',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text="我知道了"] <<n * [text="未成年模式"]'],
          activityIds: ['.MainActivity'],
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
          matches: ['@[text="跳过"] + [text~="[0-9]"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@View - [text$="s后自动关闭"] - [desc="HomepageActWindowImage"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
  ],
});
