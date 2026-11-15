import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '软件升级-取消升级',
      forcedTime: 600000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="取消升级"][vid="tvNo"][clickable=true] < LinearLayout <n [vid="llContent"] <n RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['.common.ConfirmDialogActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      forcedTime: 600000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="跳过"][vid="btSkip"][clickable=true] <n [vid="rlSplashImage"] < [id="android:id/content"]',
          ],
          activityIds: ['.activity.SplashActivity'],
        },
      ],
    },
  ],
});
