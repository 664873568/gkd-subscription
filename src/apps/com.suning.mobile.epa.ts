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
          anyMatches: [
            '@ImageButton[clickable=true] + View[getChild(0).getChild(0).text~="点击.*|[0-9]s后.*"]',
            '@ImageButton[clickable=true] + View[getChild(0).text~="[0-9]s后.*"]',
          ],
          activityIds: [
            '.ui.init.SplashActivity',
            'com.suning.webview.H5SystemBaseActivity',
          ],
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
          key: 0,
          matches: [
            '@View[clickable=true] > View > [getChild(0).getChild(0).text!~="去中国移动领话费"] + View > [text="去完成"]',
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            '[desc="快影"] +n @View[clickable=true] > [text="立即下载App"]',//去快影APP赚奖励
            '[getChild(2).text="跳转虎牙"] + [vid="layout_system_webview_frameLayout"] >n [id="root"] > @View[clickable=true]',//去虎牙看游戏直播
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
        {
          key: 2,
          actionDelay: 3000,
          anyMatches: [
            '[vid="layout_header"] > @[vid="imageView_backToPreviousPage"] + [vid="title"] + [vid="webview_title_line"]',//去头条极速版赚钱
            '[vid="layout_header"] > [vid="imageView_backToPreviousPage"] + @[vid="imageView_exitWebView"] + [vid="title"] + [vid="webview_title_line"]',
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
        {
          preKeys: [0],
          key: 3,
          actionDelay: 2000,
          matches: [
            '@View[clickable=true] > [text~="签到领[0-9]+(积分|元红包)"] +n * > Image',//签到领大额红包
          ],
        },
        {
          preKeys: [3],
          key: 4,
          action: 'back',
          actionDelay: 2000,
          matches: [
            '@ImageButton[clickable=true] < View < View < View + [id="mainViewWrapper"] >n [text~="再赚[0-9]+积分"]',
          ],
        },
        {
          preKeys: [0],
          key: 5,
          actionDelay: 5000,
          matches: ['@ImageButton[clickable=true] < View + [text="星选商城"]'],//去逛星选商城频道
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '天天领现金-一键领取',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: [
            '@View[clickable=true] > View > [getChild(0).getChild(0).text!~="去中国移动领话费"] + View > [text="去完成"]',
          ],
          matches: [
            '[getChild(0).getChild(1).text="天天领现金"] + View > View > @ImageButton[clickable=true] +n [text~="[0-9]+金币"]',
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
      name: '开启通知-暂不开通',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="开启通知"][vid="new_push_guide_open"] + @[text="暂不开通"][vid="new_push_guide_cancel"][clickable=true]',
          ],
          activityIds: [
            '.launcher.LauncherActivity',
            'com.suning.webview.H5SystemBaseActivity',
          ],
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
