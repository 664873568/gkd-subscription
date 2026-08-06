import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kwai.videoeditor',
  name: '快影',
  groups: [
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[text~="跳过 [0-9]"]',
            '[text~="[0-9]"] - @[text="跳过"] < * +2 ImageView',
          ],
          activityIds: ['.commercialization.splash.GeneralAdSplashActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@ImageView[clickable=true] - * [text="广告"]',
            '@ImageView[clickable=false] < FrameLayout <2 * + * [text="上滑/点击了解更多内容"]',
          ],
          activityIds: ['.commercialization.splash.GeneralAdSplashActivity'],
        },
      ],
    },
  ],
});
