import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 0,
      name: 'YY-打开今日头条',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.ss.android.ugc.detail.activity.TikTokActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 5000,
          anyMatches: [
            '@[text~="登录领钱|点击赚钱|登录赚钱"] < FrameLayout <n ViewGroup < ViewGroup < MeasureOnceRelativeLayout2 < MeasureOnceRelativeLayout2 <n [id="android:id/content"]',
            '@[text~="登录领钱|点击赚钱|登录赚钱"] < View <n View < View < View < View < ComposeView < FrameLayout <n MeasureOnceRelativeLayout2 < FrameLayout < LinearLayout <n [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          anyMatches: [
            '[text="仍然离开"] < @View[clickable=true] <n View < View < View < View < ComposeView < [id="android:id/content"]',
            '[text="仍然离开"] < View < @View[clickable=true] <n View < View < View < View < ComposeView < [id="android:id/content"]',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '个人信息保护指引-同意',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: [
            '[text="个人信息保护指引"] +n @[text="同意"][clickable=true]',
          ],
          activityIds: ['null'],
        },
        {
          key: 1,
          matches: [
            '[text="个人信息保护指引"] +n @FrameLayout[clickable=true] > [text="同意"][desc="同意，按钮"]',
          ],
          activityIds: ['.activity.MainActivity'],
        },
      ],
    },
  ],
});
