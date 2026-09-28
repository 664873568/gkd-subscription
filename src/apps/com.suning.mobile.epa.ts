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
      activityIds: ['com.suning.webview.H5SystemBaseActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@View[clickable=true] > View > [getChild(0).getChild(0).text!~="去中国移动领话费"] + View > [text="去完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            '[getChild(2).text^="快影APP下载"] + [vid="layout_system_webview_frameLayout"] >n @View[clickable=true] > [text="立即下载App"]', //去快影APP赚奖励
            '[getChild(2).text="跳转虎牙"] + [vid="layout_system_webview_frameLayout"] > @View[clickable=true]', //去虎牙看游戏直播
            '[getChild(2).text="签到领半价洗车"] + [vid="layout_system_webview_frameLayout"] >n @TextView[clickable=true]', //去汽车之家领车币
            '[getChild(2).text="体验丰巢APP比价返现"] + [vid="layout_system_webview_frameLayout"] >n @[id="loadbtn"][clickable=true]', //去丰巢领现金奖励
          ],
        },
        {
          key: 2,
          actionDelay: 3000,
          matches: [
            '[vid="layout_header"] > @[vid="imageView_backToPreviousPage"] +n [vid="title"] + [vid="webview_title_line"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [1],
      key: 2,
      name: '天天领现金-去完成-签到领大额红包',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.suning.webview.H5SystemBaseActivity'],
      rules: [
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          matches: [
            '@View[clickable=true] > [text~="签到领[0-9]+(积分|元红包)"] +n * > Image',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          action: 'back',
          actionDelay: 2000,
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
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          preKeys: [0],
          actionDelay: 6000,
          matches: ['@ImageButton[clickable=true] < View + [text="星选商城"]'],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
      ],
    },
    {
      key: 4,
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
    //看热点领金币
    {
      key: 10,
      name: '看热点领金币-一键领取',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: [
            '[getChild(0).getChild(1).text="看热点领金币"] +2 View > View > @View[clickable=true] > [text="去完成"]',
            '[getChild(0).getChild(1).text="看热点领金币"] +3 View > View > @View[clickable=true] > [text="去完成"]',
            '[getChild(0).getChild(1).text="看热点领金币"] +4 View > View > @[text="去看剧"][clickable=true]',
            '[getChild(0).getChild(1).text="看热点领金币"] +5 View > View > View > @View[clickable=true] > [text="去完成"]',
          ],
          matches: [
            '[getChild(0).getChild(1).text="看热点领金币"] + View > View > @ImageButton[clickable=true] +n [text~="[0-9]+金币"]',
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '看热点领金币-看视频-赚金币',
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
          key: 1,
          matches: [
            '[getChild(1).text="视频号" || getChild(2).text="视频号"] + * [getChild(1).text="100金币"] + @ImageButton[clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[text="恭喜获得"] + [getChild(1).text="金币"] + View > @View[clickable=true] > [text="立即领取"]',
          ],
        },
        {
          preKeys: [2,5],
          key: 3,
          matches: [
            '[vid="h5_base_layout"] >n View > View > @ImageButton[clickable=true] + ImageButton',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            '[getChild(1).text="我的金币"] + View > View > View + @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          actionDelay: 6000,
          anyMatches: [
            '[id="app"] > [id="wrapper"] > View > View > @ImageButton[clickable=true]', //访问瞳瞳AI
            '[id="app"] > [id="wrapper"] > View > @ImageButton[clickable=true] + View > [text="播客"]', //去播客听新闻
            '[vid="layout_header"] > @[vid="imageView_backToPreviousPage"][clickable=true] +n [text~="猜涨跌|星灿会员|财富|基金"][vid="title"]', //访问猜涨跌-领星钻当钱花-浏览理财页面-浏览基金页面
          ],
        },
        {
          preKeys: [5],
          key: 6,
          excludeMatches: [
            '[getChild(1).text="我的金币"] + View > View > View + @[text="去完成"][clickable=true]',
          ],
          matches: [
            '[getChild(1).text="我的金币"] + View > View > @View[clickable=true] > [text="查看我的金币"]',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '看热点领金币-看资讯-赚金币',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.suning.webview.H5SystemBaseActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[getChild(0).getChild(1).text="看热点领金币"] +2 View > View > @View[clickable=true] > [text="去完成"]',
          ],
          actionDelay: 2000,
          matches: [
            '[getChild(0).getChild(1).text="看热点领金币"] +3 View > View > @View[clickable=true] > [text="去完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="恭喜获得"] + [getChild(1).text="金币"] + View > @View[clickable=true] > [text="立即领取"]',
          ],
        },
        {
          preKeys: [1,4],
          key: 2,
          matches: [
            '[vid="h5_base_layout"] >n View > View > @ImageButton[clickable=true] + ImageButton',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[getChild(1).text="我的金币"] + View > View > View + @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          actionDelay: 6000,
          anyMatches: [
            '[id="app"] > [id="wrapper"] > View > View > @ImageButton[clickable=true]', //访问瞳瞳AI
            '[id="app"] > [id="wrapper"] > View > @ImageButton[clickable=true] + View > [text="播客"]', //去播客听新闻
            '[vid="layout_header"] > @[vid="imageView_backToPreviousPage"][clickable=true] +n [text~="猜涨跌|星灿会员|财富|基金"][vid="title"]', //访问猜涨跌-领星钻当钱花-浏览理财页面-浏览基金页面
          ],
        },
        {
          preKeys: [4],
          key: 5,
          excludeMatches: [
            '[getChild(1).text="我的金币"] + View > View > View + @[text="去完成"][clickable=true]',
          ],
          matches: [
            '[getChild(1).text="我的金币"] + View > View > @View[clickable=true] > [text="查看我的金币"]',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '看热点领金币-看短剧-赚金币',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.suning.webview.H5SystemBaseActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[getChild(0).getChild(1).text="看热点领金币"] +3 View > View > @View[clickable=true] > [text="去完成"]',
          ],
          actionDelay: 2000,
          matches: [
            '[getChild(0).getChild(1).text="看热点领金币"] +4 View > View > @[text="去看剧"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(1).getChild(0).text="短剧"] + View > View > View > @View[clickable=true] > View > [text$="集全"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
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
            '[id="app"] > [id="wrapper"] > @View + View > View > ImageButton[clickable=true] + ImageButton',
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          matches: [
            '[text="恭喜获得"] + [getChild(1).text="金币"] + View > @View[clickable=true] > [text="立即领取"]',
          ],
        },
        {
          preKeys: [3,6],
          key: 4,
          matches: [
            '[vid="h5_base_layout"] >n View > View > @ImageButton[clickable=true] + ImageButton',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          matches: [
            '[getChild(1).text="我的金币"] + View > View > View + @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [5],
          key: 6,
          actionDelay: 6000,
          anyMatches: [
            '[id="app"] > [id="wrapper"] > View > View > @ImageButton[clickable=true]', //访问瞳瞳AI
            '[id="app"] > [id="wrapper"] > View > @ImageButton[clickable=true] + View > [text="播客"]', //去播客听新闻
            '[vid="layout_header"] > @[vid="imageView_backToPreviousPage"][clickable=true] +n [text~="猜涨跌|星灿会员|财富|基金"][vid="title"]', //访问猜涨跌-领星钻当钱花-浏览理财页面-浏览基金页面
          ],
        },
        {
          preKeys: [6],
          key: 7,
          excludeMatches: [
            '[getChild(1).text="我的金币"] + View > View > View + @[text="去完成"][clickable=true]',
          ],
          matches: [
            '[getChild(1).text="我的金币"] + View > View > @View[clickable=true] > [text="查看我的金币"]',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '看热点领金币-日常福利-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.suning.webview.H5SystemBaseActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[getChild(0).getChild(1).text="看热点领金币"] +4 View > View > @[text="去看剧"][clickable=true]',
          ],
          actionDelay: 2000,
          matches: [
            '[getChild(0).getChild(1).text="看热点领金币"] +5 View > View > View > @View[clickable=true] > [text="去完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 6000,
          anyMatches: [
            '@ImageButton[clickable=true] < View + [getChild(0).text="红包签到"]', //参与签到赢红包
            '[id="app"] > [id="wrapper"] > View > View > @ImageButton[clickable=true]', //访问瞳瞳AI
            '[id="app"] > [id="wrapper"] > View > @ImageButton[clickable=true] + View > [text="播客"]', //去播客听新闻
            '[vid="layout_header"] > @[vid="imageView_backToPreviousPage"][clickable=true] +n [text~="猜涨跌|星灿会员|财富|基金"][vid="title"]', //访问猜涨跌-领星钻当钱花-浏览理财页面-浏览基金页面
          ],
        },
      ],
    },
    {
      key: 15,
      name: '财顾-领金币',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          preKeys: [2],
          key: 0,
          matches: [
            '[id="app"] > [id="wrapper"] > View > View > @ImageButton[clickable=true] + ImageButton',
          ],
          activityIds: ['.launcher.LauncherActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(1).text="我的金币"] + View > View > View + @[text="去完成"][clickable=true]',
          ],
          activityIds: ['.launcher.LauncherActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 6000,
          anyMatches: [
            '[id="app"] > [id="wrapper"] > View > View > @ImageButton[clickable=true]', //访问瞳瞳AI
            '[id="app"] > [id="wrapper"] > View > @ImageButton[clickable=true] + View > [text="播客"]', //去播客听新闻
            '[vid="layout_header"] > @[vid="imageView_backToPreviousPage"][clickable=true] +n [text~="猜涨跌|星灿会员|财富|基金"][vid="title"]', //访问猜涨跌-领星钻当钱花-浏览理财页面-浏览基金页面
          ],
          activityIds: ['com.suning.webview.H5SystemBaseActivity'],
        },
      ],
    },
    //金价狂飙 天天攒金
    {
      key: 20,
      name: '金价狂飙 天天攒金',
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
          matches: [
            '[getChild(1).text="我的金币"] + View > View > View + @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 11000,
          matches: [
            '[vid="layout_header"] > @[vid="imageView_backToPreviousPage"][clickable=true] +n TextView[vid="title"]', //浏览定期理财-浏览自选页
          ],
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
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'LinearLayout > @ViewGroup[clickable=true] > [vid="item_content_container"] > [text="领现金"]',
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
