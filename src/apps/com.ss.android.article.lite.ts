import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.lite',
  name: '今日头条极速版',
  groups: [
    {
      key: 0,
      name: 'YY-去头条极速版',
      matchRoot: true,
      matchTime: 20000,
      matchDelay: 6000,
      resetMatch: 'activity',
      actionMaximum: 1,
      rules: [
        {
          anyMatches: [
            '@[desc="返回"][clickable=true] <<n * - MeasureOnceRelativeLayout2 [text="登录领钱"]',
            '@[desc="返回"][clickable=true] <<n * - * MeasureOnceRelativeLayout2[clickable=true] [text="点击赚钱"]',
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
      matchTime: 20000,
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
          matches: [
            'MeasureOnceRelativeLayout2[clickable=true] -2 * [index=0][childCount=2] @[desc="返回"] ',
          ],
          activityIds: ['com.ss.android.ugc.detail.activity.TikTokActivity'],
        },
      ],
    },
  ],
});
