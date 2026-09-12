import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '欢迎使用快手-同意并继续',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="欢迎使用快手"][vid="title"] +n [vid="button"] > @[text="同意并继续"][vid="positive"][clickable=true]',
          ],
          activityIds: ['com.yxcorp.gifshow.detail.PhotoDetailActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '打开推送通知-忽略',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="打开推送通知"][vid="title"] +n [vid="button"] >n @[text="忽略"][vid="negative"][clickable=true]',
          ],
          activityIds: ['com.yxcorp.gifshow.detail.PhotoDetailActivity'],
        },
      ],
    },
  ],
});
