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
      actionMaximum: 2,
      matchDelay: 2000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@ImageButton + View >n [text="点击去UC"]',
            '@ImageButton + View >n [text="点击去移动"]',
            '@ImageButton + View >n [text="点击去头条极速"]',
            '@ImageButton + View >n [text~="[0-9]s后去中国移动"]',
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '天天领现金-签到领大额红包',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 2000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@View[clickable=true] > [text~="签到领[0-9]+(积分|元红包)"] +n * > Image',
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            '@ImageButton[clickable=true] - [text="仍要放弃"] - [text="继续赚积分"]',
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 1000,
          matches: ['[id="mainViewWrapper"] >n @ImageButton[clickable=true]'],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          actionDelay: 1000,
          matches: ['@ImageButton[clickable=true] < * + * [text="红包签到"]'],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '天天领现金-去逛星选商城频道',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageButton[clickable=true] < * + [text="星选商城"]'],
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
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="txt_dialog_reject"] +n [vid="txt_dialog_commit"]'],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '开通消息通知-暂不开通',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="暂不开通"][vid="new_push_guide_cancel"] <n [vid="new_push_root_view"]',
          ],
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
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="bottom_sale_info_close"][clickable=true] +n [vid="bottom_sale_info_btn"]',
          ],
          activityIds: [
            '.launcher.LauncherActivity',
            'com.suning.webview.H5SystemBaseActivity',
          ],
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
            '@[vid="bottom_sale_info_close"][clickable=true] +n [vid="bottom_sale_info_btn"]',
          ],
          activityIds: [
            '.launcher.LauncherActivity',
            'com.suning.webview.H5SystemBaseActivity',
          ],
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
