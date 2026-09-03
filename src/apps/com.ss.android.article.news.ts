import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 0,
      name: 'YY-打开今日头条',
      matchRoot: true,
      matchDelay: 5000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[desc="返回"][clickable=true] <<n MeasureOnceRelativeLayout2 [text="登录赚钱"]',
            '@[desc="返回"][clickable=true] <<n * - * MeasureOnceRelativeLayout2[clickable=true] [text="登录赚钱"]',
          ],
          activityIds: ['com.ss.android.ugc.detail.activity.TikTokActivity'],
        },
      ],
    },
  ],
});
