import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sup.android.superb',
  name: '皮皮虾',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '个人信息保护指引-同意',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="同意"][clickable=true] <n LinearLayout - [getChild(0).text="个人信息保护指引"] < LinearLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.sup.android.base.MainActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '开启推送通知-以后再说',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="开启推送通知"] +n LinearLayout > @[text="以后再说"][clickable=true] + [text="马上开启"][clickable=true]',
          ],
          activityIds: ['com.sup.android.base.MainActivity'],
        },
      ],
    },
  ],
});
