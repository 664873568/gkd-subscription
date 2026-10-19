import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.suning.mobile.epa',
  name: '星图金融',
  groups: [
    //天天领现金
    {
      key: 0,
      name: '天天领现金-×',
      forcedTime: 60000,
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
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.suning.webview.H5SystemBaseActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[getChild(0).text="去完成"] - [getChild(0).getChild(0).text!~="去中国移动领话费"] < View < @View[clickable=true] <n View <n View < View <n View < [id="app"] < View < WebView < WebView < FrameLayout < [vid="h5_base_layout"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            '[getChild(2).text^="快影APP下载"] + [vid="layout_system_webview_frameLayout"] >n @View[clickable=true] > [text="立即下载App"]', //去快影APP赚奖励
            '[getChild(2).text="跳转虎牙"] + [vid="layout_system_webview_frameLayout"] >n [id="root"] > @View[clickable=true]', //去虎牙看游戏直播
            '[getChild(2).text="签到领半价洗车"] + [vid="layout_system_webview_frameLayout"] >n @TextView[clickable=true]', //去汽车之家领车币
            '[getChild(2).text="体验丰巢APP比价返现"] + [vid="layout_system_webview_frameLayout"] >n @[id="loadbtn"][clickable=true]', //去丰巢领现金奖励
          ],
        },
        {
          key: 2,
          actionDelay: 3000,
          matches: [
            '[text~="今日头条.*|UC.*|百度|快手|飞猪|番茄畅听|YY.*|.*APP.*|.*领.*|淘宝.*|.*苏.*|.*酷.*|闲鱼.*|美团|QQ音乐|微博.*|.*任务.*|.*虎牙|一刻相册.*"][vid="title"] -n @[vid="imageView_backToPreviousPage"][clickable=true] < [vid="layout_header"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [1],
      key: 2,
      name: '天天领现金-去完成-签到领大额红包',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.suning.webview.H5SystemBaseActivity'],
      rules: [
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(1).getChild(0).text="立即使用"] + @ImageButton[clickable=true]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@View[clickable=true] > [text~="签到领[0-9]+(积分|元红包)"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: ['@ImageButton[clickable=true] - * [text="去抽奖"]'],
        },
        {
          preKeys: [2, 3],
          key: 4,
          matches: [
            '@ImageButton[clickable=true] < View < View < View + [id="mainViewWrapper"] >n [text~="再赚[0-9]+积分"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [1],
      key: 3,
      name: '天天领现金-去完成-去逛星选商城频道',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          preKeys: [0],
          actionDelay: 6000,
          matches: [
            '@ImageButton[clickable=true] < View < View < View < [id="home-page"] < [id="app"] < View < WebView < WebView < FrameLayout < [vid="h5_base_layout"]',
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '天天领现金-一键领取',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text~="[0-9]+金币"] -n @ImageButton[clickable=true] <n View <n View <n View < View <n View < [id="app"] < View < WebView < WebView < FrameLayout < [vid="h5_base_layout"]',
          ],
          excludeMatches: [
            '[getChild(0).text="去完成"] - [getChild(0).getChild(0).text!~="去中国移动领话费"] < View < @View[clickable=true] <n View <n View < View <n View < [id="app"] < View < WebView < WebView < FrameLayout < [vid="h5_base_layout"]',
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '天天领现金-<',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 5000,
          matches: [
            '[text="天天领现金"] - @ImageButton[clickable=true] < View < View < View < View <n View < [id="app"] < View < WebView < WebView < FrameLayout < [vid="h5_base_layout"]',
          ],
          excludeMatches: [
            '[getChild(0).text="去完成"] - [getChild(0).getChild(0).text!~="去中国移动领话费"] < View < @View[clickable=true] <n View <n View < View <n View < [id="app"] < View < WebView < WebView < FrameLayout < [vid="h5_base_layout"]',
            '[text~="[0-9]+金币"] -n @ImageButton[clickable=true] <n View <n View <n View < View <n View < [id="app"] < View < WebView < WebView < FrameLayout < [vid="h5_base_layout"]',
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="财顾"][vid="tab_name"] <n [vid="normal_tab"] < @[vid="tab4"][clickable=true] <n [vid="tab_container"] < [vid="home_tab_layout"] <n [vid="layout_base"]',
          ],
          activityIds: ['.launcher.LauncherActivity'],
        },
      ],
    },
    {
      scopeKeys: [10],
      key: 6,
      name: '立即领取-领金币-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.launcher.LauncherActivity',
        'com.suning.webview.H5SystemBaseActivity',
      ],
      rules: [
        {
          key: 0,
          name: '立即领取',
          anyMatches: [
            '[text="立即领取"] < @View[clickable=true] <n View <n View <n View < WebView < WebView < FrameLayout <n [vid="h5_base_layout"]',
            '[text="立即领取"] < @View[clickable=true] <n View <n View <n [id="wrapper"] < [id="app"] < View < WebView < WebView <n FrameLayout < [vid="h5_base_layout"]',
          ],
        },
        {
          key: 1,
          name: '领金币',
          actionDelay: 2000,
          anyMatches: [
            '@ImageButton[clickable=true] < View < View <n View < WebView < WebView < FrameLayout <n [vid="h5_base_layout"]',
            '@ImageButton[clickable=true] < View < View <n [id="wrapper"] < [id="app"] < View < WebView < WebView <n FrameLayout < [vid="h5_base_layout"]',
          ],
          excludeMatches: [
            '@ImageButton[clickable=true] <n View < View < View <n View < WebView < WebView <n FrameLayout < [vid="h5_base_layout"]',
            '@ImageButton[clickable=true] <n View < View < View <n View <n View < WebView < WebView < FrameLayout < [vid="h5_base_layout"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '去完成',
          anyMatches: [
            '@[text="去完成"][clickable=true] <n View <n View < View <n View < View <n View < WebView < WebView <n FrameLayout < [vid="h5_base_layout"]',
            '@[text="去完成"][clickable=true] <n View <n View < View <n View < View <n View <n View < WebView < WebView < FrameLayout < [vid="h5_base_layout"]',
          ],
        },
        {
          preKeys: [1],
          key: 3,
          name: '查看我的金币/去领取',
          anyMatches: [
            '[text~="查看我的金币|去领取"] < @View[clickable=true] <n View < View < View <n View < View <n View < WebView < WebView <n FrameLayout < [vid="h5_base_layout"]',
            '[text~="查看我的金币|去领取"] < @View[clickable=true] <n View < View < View <n View < View <n View <n View < WebView < WebView < FrameLayout < [vid="h5_base_layout"]',
          ],
          excludeMatches: [
            '@[text="去完成"][clickable=true] <n View <n View < View <n View < View <n View < WebView < WebView <n FrameLayout < [vid="h5_base_layout"]',
            '@[text="去完成"][clickable=true] <n View <n View < View <n View < View <n View <n View < WebView < WebView < FrameLayout < [vid="h5_base_layout"]',
          ],
        },
        {
          preKeys: [2, 14],
          key: 4,
          actionDelay: 6000,
          anyMatches: [
            '@ImageButton[clickable=true] < View + [getChild(0).text="红包签到"]', //参与签到赢红包
            '[id="app"] > [id="wrapper"] > View > View > @ImageButton[clickable=true]', //访问瞳瞳AI
            '[id="app"] > [id="wrapper"] > View > @ImageButton[clickable=true] + View > [text="播客"]', //去播客听新闻
            '[vid="title"] -n @[vid="imageView_backToPreviousPage"][clickable=true] < [vid="layout_header"]', //[text~="猜涨跌|星灿会员|财富|基金"]
          ],
        },
      ],
    },
    //看热点领金币
    {
      key: 7,
      name: '看热点领金币-看视频-赚金币',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.suning.webview.H5SystemBaseActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[getChild(0).getChild(1).text="看热点领金币"] +2 View > View > @View[clickable=true] > [text="去完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 11,
          matches: [
            '[getChild(1).text="视频号" || getChild(2).text="视频号"] + * [getChild(1).text="100金币"] + @ImageButton[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '看热点领金币-看资讯-赚金币',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.suning.webview.H5SystemBaseActivity'],
      rules: [
        {
          key: 12,
          actionDelay: 2000,
          matches: [
            '[getChild(0).getChild(1).text="看热点领金币"] +3 View > View > @View[clickable=true] > [text="去完成"]',
          ],
          excludeMatches: [
            '[getChild(0).getChild(1).text="看热点领金币"] +2 View > View > @View[clickable=true] > [text="去完成"]',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '看热点领金币-看短剧-赚金币',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.suning.webview.H5SystemBaseActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[getChild(0).getChild(1).text="看热点领金币"] +n View > View > @[text="去看剧"][clickable=true]',
          ],
          excludeMatches: [
            '[getChild(0).getChild(1).text="看热点领金币"] +n View > View > @View[clickable=true] > [text="去完成"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 1,
          matches: [
            '[text$="集全"] < View <n @View[clickable=true] < View <n View <n View <n [id="wrapper"] < [id="app"] < View < WebView < WebView < FrameLayout < [vid="h5_base_layout"]',
          ],
        },
        {
          preKeys: [1, 13],
          key: 13,
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 200,
          },
          matches: [
            '[vid="h5_base_layout"] >n View > View > @ImageButton[width<height][clickable=true] + ImageButton',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '看热点领金币-日常福利-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.suning.webview.H5SystemBaseActivity'],
      rules: [
        {
          key: 14,
          actionDelay: 2000,
          matches: [
            '[getChild(0).getChild(1).text="看热点领金币"] +n View > View > View > [getChild(0).getChild(0).text!~="体验AI搜索"] + @View[clickable=true] > [text="去完成"]',
          ],
          excludeMatches: [
            '[getChild(0).getChild(1).text="看热点领金币"] +n View > View > @View[clickable=true] > [text="去完成"]',
            '[getChild(0).getChild(1).text="看热点领金币"] +n View > View > @[text="去看剧"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '看热点领金币-一键领取',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[getChild(0).getChild(1).text="看热点领金币"] + View > View > @ImageButton[clickable=true] +n [text~="[0-9]+金币"]',
          ],
          excludeMatches: [
            '[getChild(0).getChild(1).text="看热点领金币"] +n View > View > @View[clickable=true] > [text="去完成"]',
            '[getChild(0).getChild(1).text="看热点领金币"] +n View > View > @[text="去看剧"][clickable=true]',
            '[getChild(0).getChild(1).text="看热点领金币"] +n View > View > View > [getChild(0).getChild(0).text!~="体验AI搜索"] + @View[clickable=true] > [text="去完成"]',
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
      ],
    },
    //金价狂飙 天天攒金
    {
      key: 20,
      name: '金价狂飙 天天攒金',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.suning.webview.H5SystemBaseActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[id="taskList"] > ListView > @View[clickable=true] > [text="做任务"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 15000,
          matches: [
            'TextView[vid="title"] -n @[vid="imageView_backToPreviousPage"][clickable=true] < [vid="layout_header"]',
          ],
        },
      ],
    },
    //首页功能类
    {
      key: 40,
      name: '立即升级-×',
      forcedTime: 60000,
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
      name: '开启通知-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="开启通知"] +n @TextView[index=parent.childCount.minus(1)][clickable=true]',
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
      key: 51,
      name: '首页广告-×',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[vid="get_coupon_close"][clickable=true] - [vid="get_coupon_btn"]',
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
