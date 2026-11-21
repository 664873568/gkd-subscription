import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.luna.music',
  name: '汽水音乐',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '个人信息保护指引-同意',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="同意"][clickable=true] <n LinearLayout -n [text="个人信息保护指引"] < LinearLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.luna.biz.main.main.MainActivity'],
        },
      ],
    },
  ],
});
