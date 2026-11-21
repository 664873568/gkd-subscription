import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xs.fm.lite',
  name: '番茄音乐（原畅听音乐）',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '个人信息保护指引-同意',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="同意"][clickable=true] < FrameLayout <n LinearLayout -n [text="个人信息保护指引"]',
          ],
          activityIds: ['com.dragon.read.pages.splash.SplashActivity', 'null'],
        },
      ],
    },
  ],
});
