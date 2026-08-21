import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '打开推送通知-忽略',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="打开推送通知"][vid="title"] +n [vid="button"] >n @[text="忽略"][vid="negative"][clickable=true] +n [text="去打开"][vid="positive"]',
          ],
          activityIds: ['com.yxcorp.gifshow.detail.PhotoDetailActivity'],
        },
      ],
    },
  ],
});
