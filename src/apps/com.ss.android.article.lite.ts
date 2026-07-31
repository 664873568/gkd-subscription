import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.lite',
  name: '今日头条极速版',
  groups: [
    {
      key: 0,
      name: 'YY-去头条极速版',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          anyMatches: [
            '[text="搜你想看的"][desc="搜索框，搜你想看的"] < * - @[desc="返回"] <<n * - * [text="点击赚钱"]',
            '[text="搜你想看的"][desc="搜索框，搜你想看的"] < * - @[desc="返回"] <<n * - * [text="登录领钱"]',
          ],
          activityIds: ['com.ss.android.ugc.detail.activity.TikTokActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '升级版本-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[desc="关闭"] -n [text="升级版本"]'],
          activityIds: ['com.ss.android.ugc.detail.activity.TikTokActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 5000,
          anyMatches: [
            '[text="搜你想看的"][desc="搜索框，搜你想看的"] < * - @[desc="返回"] <<n * - * [text="点击赚钱"]',
            '[text="搜你想看的"][desc="搜索框，搜你想看的"] < * - @[desc="返回"] <<n * - * [text="登录领钱"]',
          ],
          activityIds: ['com.ss.android.ugc.detail.activity.TikTokActivity'],
        },
      ],
    },
  ],
});
