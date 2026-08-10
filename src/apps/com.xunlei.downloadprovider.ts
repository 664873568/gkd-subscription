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
          matches: ['@[id$="wm_pop_pic_close"] +n [id$="layout_ad_logo"]'],
          activityIds: ['.linkhub.dlpanel.AddLinkToHubActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="feedback_first_new_dialog_close"][clickable=true] - [text="您觉得当前广告如何"][vid="feedback_first_new_dialog_title"]',
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
    {
      key: 20,
      name: '广告-反馈-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@ImageView < ViewGroup < ViewGroup < ViewGroup < * + * [text="反馈"]',
          ],
          activityIds: ['com.byazt.mz.Stub_Standard_Portrait_Activity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[vid="feedback_first_new_dialog_close"][clickable=true] - [text="您觉得当前广告如何"][vid="feedback_first_new_dialog_title"]',
          ],
          activityIds: ['.frame.MainTabActivity'],
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
            'LinearLayout > @[text="跳过"] + [text~="[0-9]"]',
          ],
          activityIds: ['.launch.LaunchActivity'],
        },
      ],
    },
  ],
});
