import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.suning.mobile.epa',
  name: '星图金融',
  groups: [
    //天天领现金
    {
      key: 0,
      name: '天天领现金-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@ImageButton + View >n [text="点击去移动"]',
            '@ImageButton + View >n [text~="\\\\ds后去中国移动"]',
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
      ],
    },
    //首页功能类
    {
      key: 40,
      name: '立即升级-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[vid="txt_dialog_reject"] +n [vid="txt_dialog_commit"]'],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页-领现金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="领现金"] - [vid="item_img_container"] > [vid="item_img"]',
          ],
          activityIds: ['.launcher.LauncherActivity'],
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
          matches: [
            '@[vid="bottom_sale_info_close"] + [vid="bottom_sale_info_img"]',
          ],
          activityIds: ['.launcher.LauncherActivity'],
        },
      ],
    },
    {
      key: 52,
      name: '首页广告-领现金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="bottom_sale_info_close"] + [vid="bottom_sale_info_img"]',
          ],
          activityIds: ['.launcher.LauncherActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="领现金"] - [vid="item_img_container"] > [vid="item_img"]',
          ],
          activityIds: ['.launcher.LauncherActivity'],
        },
      ],
    },
  ],
});
