import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.kukuai.app',
  name: '库库',
  groups: [
    //26.10.21-26.12.04 每日签到得网盘SVIP月卡
    {
      key: 0,
      name: '每日签到-立即签到',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="立即签到"][clickable=true] <n View < View <n View < WebView < WebView < ViewFactoryHolder < View < View < View < ComposeView < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[desc="去领取"][clickable=true] <n View < View <n View <n View < View <n View < WebView < WebView < ViewFactoryHolder < View < View < View < ComposeView < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '做任务-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@ImageButton[clickable=true] -n [text!~="邀请.*"] < View <n ListView <n View < WebView < WebView < ViewFactoryHolder < View < View < View < ComposeView < [id="android:id/content"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      scopeKeys: [1],
      key: 2,
      name: '做任务-去完成-与库库聊聊热门话题',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          preKeys: [0],
          key: 11,
          actionDelay: 2000,
          matches: [
            '[desc="发送"] < @View[clickable=true] <n View < View <n View < View < View < View < View < View < View < ComposeView < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [11],
          key: 12,
          actionDelay: 5000,
          matches: [
            '[desc="领积分"] < @View[clickable=true] < View <n View < View <n View < View < View < View < View < View < ComposeView < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [1],
      key: 3,
      name: '做任务-去完成-召唤任意专家并发起对话',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          preKeys: [0],
          key: 11,
          matches: [
            '@View[clickable=true] < View < View <n View < View < View < View < ComposeView < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [11],
          key: 12,
          matches: [
            '[text="召唤科研专家"] < @View[clickable=true] < View <n View < View < View < View < ComposeView < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [12],
          key: 13,
          actionDelay: 2000,
          matches: [
            '[desc="发送"] < @View[clickable=true] <n View < View <n View < View < View < View < View < View < View < ComposeView < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [13],
          key: 14,
          actionDelay: 5000,
          matches: [
            '[desc="领积分"] < @View[clickable=true] < View <n View < View <n View < View < View < View < View < View < ComposeView < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '去抽奖-立即抽奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text~="剩[1-9]次"] < @View[clickable=true] < View < View < View < WebView < WebView < ViewFactoryHolder < View < View < View < ComposeView < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@ImageButton[clickable=true] -n [text!~="邀请.*"] < View <n ListView <n View < WebView < WebView < ViewFactoryHolder < View < View < View < ComposeView < [id="android:id/content"]',
            'TextView -n @TextView[clickable=true] < View < View <n View < View < View < WebView < WebView < ViewFactoryHolder < View < View < View < ComposeView < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[text~="立即抽奖剩余[1-9]次"][clickable=true] <n View < View <n View < View < View < WebView < WebView < ViewFactoryHolder < View < View < View < ComposeView < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          matches: [
            '[text~="立即抽奖剩余0次"] -n @TextView[clickable=true] < View < View <n View < View < View < WebView < WebView < ViewFactoryHolder < View < View < View < ComposeView < [id="android:id/content"]',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '温馨提示-同意',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="同意"] < @View[clickable=true] -n [text="温馨提示"] < View < View < View < View < ViewGroup < [id="android:id/content"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '你希望我帮你做什么-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: [
            '[text="跳过"] < @View[clickable=true] -n [text="你希望我帮你做什么?"] <n View < View < View < View < ViewGroup < [id="android:id/content"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[desc="领积分"] < @View[clickable=true] < View <n View < View <n View < View < View < View < View < View < ComposeView < [id="android:id/content"]',
          ],
        },
      ],
    },
  ],
});
