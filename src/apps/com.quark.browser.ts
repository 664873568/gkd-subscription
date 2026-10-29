import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.quark.browser',
  name: '夸克',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '个人信息保护指引-同意并继续',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="同意并继续"][clickable=true] <n LinearLayout -n [text="个人信息保护指引"] < LinearLayout < FrameLayout < [id="android:id/content"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
