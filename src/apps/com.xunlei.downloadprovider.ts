import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunlei.downloadprovider',
  name: '迅雷',
  groups: [
    {
      key: 0,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[id$="wm_pop_pic_close"] +n [id$="layout_ad_logo"]',
          ],
          activityIds: ['.linkhub.dlpanel.AddLinkToHubActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="feedback_first_new_dialog_close"] - [text="您觉得当前广告如何"][vid="feedback_first_new_dialog_title"]',
          ],
          activityIds: ['.linkhub.dlpanel.AddLinkToHubActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[id$="noah_interstitial_close_button"] <<n [id$="noah_interstitial_media_view"]',
          ],
          activityIds: ['com.noah.adn.huichuan.view.HCCommonActivity'],
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
          matches: [
            '@[text^="跳过"][vid="adprof_splash_skip_text"] < [vid="adprof_splash_skip_ll"]',
          ],
          activityIds: ['.launch.LaunchActivity'],
        },
      ],
    },
  ],
});
