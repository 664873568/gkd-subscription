import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.smile.gifmaker',
  name: '快手',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '欢迎使用快手-同意并继续',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
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
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
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
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="跳过"][vid="splash_skip_text"][clickable=true] <n [vid="splash_video_cover"] <n FrameLayout < [vid="splash_content"]',
          ],
          activityIds: [
            'com.kuaishou.commercial.splash.v3.view.SplashV3Activity',
          ],
        },
      ],
    },
  ],
});
