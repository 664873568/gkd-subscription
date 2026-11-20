import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tongcheng.android',
  name: '同程旅行',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '温馨提示-同意并继续',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="同意并继续"][vid="tv_ensure"][clickable=true] < LinearLayout -n [text="温馨提示"][vid="tv_title"] < RelativeLayout < LinearLayout < [id="android:id/content"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
