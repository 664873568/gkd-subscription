import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kugou.android',
  name: '酷狗音乐',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '欢迎使用快手-同意并继续',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="同意并继续"][vid="positive"][clickable=true] < [vid="button"] -n [text="欢迎使用快手"][vid="title"]',
          ],
          activityIds: ['com.yxcorp.gifshow.HomeActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '服务条款和隐私保护提示-同意',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="服务条款和隐私保护提示"] +n @[text="同意"][clickable=true] + [text="不同意协议，进入基本功能模式"]',
          ],
          activityIds: ['com.kugou.common.privacy.AppStartPrivacyActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[desc="跳过"][clickable=true] <n [desc="SplashCard"] < [id="android:id/content"]',
            '[desc="跳过"] < @FrameLayout[clickable=true] <n [desc="GdtAdFrame"] < [desc="UniSplashCard"] < [id="android:id/content"]',
          ],
          activityIds: ['.app.MediaActivity'],
        },
      ],
    },
  ],
});
