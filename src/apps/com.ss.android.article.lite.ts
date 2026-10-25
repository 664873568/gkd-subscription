import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.lite',
  name: '今日头条极速版',
  groups: [
    {
      key: 0,
      name: 'YY-去头条极速版',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.ss.android.ugc.detail.activity.TikTokActivity'],
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 5000,
          anyMatches: [
            '@[text~="登录领钱|点击赚钱|登录赚钱"] < FrameLayout <n ViewGroup < ViewGroup < MeasureOnceRelativeLayout2 < MeasureOnceRelativeLayout2 <n [id="android:id/content"]',
            '@[text~="登录领钱|点击赚钱|登录赚钱"] < View <n View < View < View < View < ComposeView < FrameLayout <n MeasureOnceRelativeLayout2 < FrameLayout < LinearLayout <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 1,
          action: 'back',
          anyMatches: [
            '@[text~="登录领钱|点击赚钱|登录赚钱"] < FrameLayout <n ViewGroup < ViewGroup < MeasureOnceRelativeLayout2 < MeasureOnceRelativeLayout2 <n [id="android:id/content"]',
            '@[text~="登录领钱|点击赚钱|登录赚钱"] < View <n View < View < View < View < ComposeView < FrameLayout <n MeasureOnceRelativeLayout2 < FrameLayout < LinearLayout <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
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
          anyMatches: [
            '[text="个人信息保护指引"] +n @[text="同意"][clickable=true]',
          ],
          activityIds: ['null'],
        },
      ],
    },
    {
      key: 41,
      name: '开启重要资讯通知-暂不开启-×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: ['@ImageView - ViewGroup < ViewGroup'],
          activityIds: ['.activity.SplashActivity'],
        },
      ],
    },
    {
      key: 42,
      name: '升级版本-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
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
          actionDelay: 1000,
          matches: [
            'MeasureOnceRelativeLayout2[clickable=true] -2 * [index=0][childCount=2] @[desc="返回"] ',
          ],
          activityIds: ['com.ss.android.ugc.detail.activity.TikTokActivity'],
        },
      ],
    },
  ],
});
