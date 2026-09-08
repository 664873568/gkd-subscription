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
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageButton[clickable=true] + View[getChild(0).text~="点击.*|[0-9]s后.*"]',
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '天天领现金-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: [
            '@ImageButton[clickable=true] + View[getChild(0).text~="点击.*|[0-9]s后.*"]',
          ],
          actionDelay: 1000,
          matches: [
            '@View[clickable=true] > View > [getChild(0).getChild(0).text!~="去中国移动领话费|签到领大额红包|去逛星选商城频道"] + View > [text="去完成"]',
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '天天领现金-签到领大额红包',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.suning.webview.H5SystemBaseActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@View[clickable=true] > View > [getChild(0).getChild(0).text!~="去中国移动领话费|签到领大额红包|去逛星选商城频道"] + View > [text="去完成"]',
          ],
          actionDelay: 1000,
          matches: [
            '@View[clickable=true] > View > [getChild(0).getChild(0).text="签到领大额红包"] + View > [text="去完成"]',
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@View[clickable=true] > [text~="签到领[0-9]+(积分|元红包)"] +n * > Image',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@ImageButton[clickable=true] - [text="仍要放弃"] - [text="继续赚积分"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: ['[id="mainViewWrapper"] >n @ImageButton[clickable=true]'],
        },
        {
          preKeys: [0, 1, 2, 3],
          key: 4,
          actionDelay: 1000,
          matches: ['@ImageButton[clickable=true] < * + * [text="红包签到"]'],
        },
      ],
    },
    {
      key: 3,
      name: '天天领现金-去逛星选商城频道',
      matchRoot: true,
      matchDelay: 5000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@View[clickable=true] > View > [getChild(0).getChild(0).text!~="去中国移动领话费|去逛星选商城频道"] + View > [text="去完成"]',
          ],
          actionDelay: 1000,
          matches: [
            '@View[clickable=true] > View > [getChild(0).getChild(0).text="去逛星选商城频道"] + View > [text="去完成"]',
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@ImageButton[clickable=true] < View + [text="星选商城"]'],
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
          matches: [
            '@[vid="txt_dialog_reject"][clickable=true] +n [vid="txt_dialog_commit"]',
          ],
          activityIds: [
            '.launcher.LauncherActivity',
            'com.suning.webview.H5SystemBaseActivity',
          ],
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
      matchDelay: 1000,
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
  ],
});
