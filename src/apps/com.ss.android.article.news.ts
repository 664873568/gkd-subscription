import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 0,
      name: 'YY-打开今日头条',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.ss.android.ugc.detail.activity.TikTokActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 5000,
          anyMatches: [
            '@[desc="返回"][clickable=true] <<n MeasureOnceRelativeLayout2 [text="登录赚钱"]',
            '@[desc="返回"][clickable=true] <<n * - * MeasureOnceRelativeLayout2[clickable=true] [text="登录赚钱"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="确定要离开？"] +n @[getChild(0).text="仍然离开"][clickable=true] + [getChild(0).text="继续观看"][clickable=true]',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '个人信息保护指引-同意',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '[text="个人信息保护指引"] +n @[text="同意"][clickable=true]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
