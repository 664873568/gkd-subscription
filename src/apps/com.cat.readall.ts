import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cat.readall',
  name: '悟空浏览器',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '温馨提示-同意并继续',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="同意并继续"][clickable=true] <n LinearLayout <n LinearLayout < RelativeLayout < FrameLayout < FrameLayout < FrameLayout <n [id="android:id/content"]',
          ],
          activityIds: ['.activity.BrowserMainActivity'],
        },
      ],
    },
  ],
});
