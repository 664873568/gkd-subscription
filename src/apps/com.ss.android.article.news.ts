import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 0,
      name: 'YY-打开今日头条',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          anyMatches: [
            '[text="搜你想看的"][desc="搜索框，搜你想看的"] < * - @[desc="返回"] <<n * - * [text="登录赚钱"]',
            '[text="搜你想看的"][desc="搜索框，搜你想看的"] < * - @[desc="返回"] <<n * +n * [text="登录赚钱"]',
          ],
          activityIds: ['com.ss.android.ugc.detail.activity.TikTokActivity'],
        },
      ],
    },
  ],
});
