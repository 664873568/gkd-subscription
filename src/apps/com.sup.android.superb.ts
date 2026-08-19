import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sup.android.superb',
  name: '皮皮虾',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '开启推送通知-以后再说',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '[text="开启推送通知"] +n * > @[text="以后再说"][clickable=true] + [text="马上开启"][clickable=true]',
          ],
          activityIds: ['com.sup.android.base.MainActivity'],
        },
      ],
    },
  ],
});
