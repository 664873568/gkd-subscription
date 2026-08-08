import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kwai.videoeditor',
  name: '快影',
  groups: [
    //看视频-com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity
    {
      key: 20,
      name: '看视频-全屏广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@Image[clickable=false] <<n * - * [text="点击到落地页或三方APP"]',
            '@Image[clickable=false] <<n * -n * [text="反馈"] <<n * + * [text="轻触或上滑"]',
            '@ImageView[clickable=false] < * - * [text="反馈"] <<n * + * [text="点击或上滑打开"]',
          ],
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
          ],
        },
      ],
    },
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
