import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 0,
      name: '通用-返回',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        '.personel.FloatViewActivity',
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 1,
          action: 'back',
          anyMatches: [
            '[text="点击立即返回"] - [getChild(0).getChild(0).text="已完成"] < LinearLayout <n RelativeLayout < @RelativeLayout[clickable=true] - * [text~="此功能需访问京东金融APP|JoyAI|健康好礼限时领|图片|省钱中心|加载页面|73d4ea791bcfd553.png!q70|做任务赚京豆"]',
            '[text="点击立即返回"] - [getChild(0).getChild(0).text="已完成"] < LinearLayout <n RelativeLayout < @RelativeLayout[clickable=true] - * [desc="返回"] +n RelativeLayout > [text*="金融" || text="京东特价版补贴购" || text="加载页面"]',
            '[text="点击立即返回"] - [getChild(0).getChild(0).text="已完成"] < LinearLayout <n RelativeLayout < @RelativeLayout[clickable=true] - * [desc="返回"] +n RelativeLayout[width=0][childCount=0]',
          ],
        },
        {
          key: 2,
          action: 'back',
          matches: [
            '@[desc="返回"][clickable=true] +n RelativeLayout > [text="京东健康" || text="看视频赚现金" || text="去京东金融领京豆" || text="去金融APP签到领现金"][vid="titleText"]',
          ],
        },
        {
          key: 3,
          action: 'back',
          actionDelay: 6000,
          anyMatches: [
            '[text="back"] < @View[clickable=true] < View < [id="J_ui-div"] +n * [text="此功能需访问京东金融APP"]',
            '[text="back"] < @View[clickable=true] < View < [id="app"] < [id="J_ui-div"] +n * [text="此功能需访问京东金融APP"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 4,
          action: 'back',
          actionDelay: 6000,
          matches: [
            '[text="京东健康APP下载"] >n @[text="back"][clickable=true] + [text="健康好礼限时领"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [
        10, 12, 20, 30, 40, 50, 51, 60, 61, 70, 74, 80, 90, 100, 110, 120, 130,
        200,
      ],
      key: 1,
      name: '通用-返回-scopeKeys',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        '.personel.FloatViewActivity',
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
        'com.jd.lib.jshop.jshop.JshopMainShopActivity',
        'com.jd.lib.productdetail.ProductDetailActivity',
        'com.jd.lib.videoimmersionstyleb.view.activity.VideoImmersionStyleBActivity',
        'com.jingdong.hybrid.halfsheet.WebHalfSheetActivity',
      ],
      rules: [
        {
          preKeys: [60, 70, 100],
          key: 0,
          anyMatches: [
            '@ImageButton[desc="关闭"][clickable=true] - [text="天天抽奖"] < View < [id="app"] < WebView < *',
            '@ImageButton[desc="marketing"][clickable=true] - [desc="status"] < View < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@ImageView[width=height] - FrameLayout < RelativeLayout < FrameLayout < FrameLayout <n FrameLayout + [vid="un_status_bar_view"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [
            0, 1, 10, 20, 30, 40, 50, 51, 60, 61, 70, 74, 80, 90, 100, 120, 190,
            200,
          ],
          key: 1,
          name: '已完成 点击立即返回',
          action: 'back',
          matches: [
            '[text="点击立即返回"] - [getChild(0).getChild(0).text="已完成"] < LinearLayout <n RelativeLayout < @RelativeLayout[clickable=true] <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0, 2, 60, 61, 70, 100],
          key: 2,
          name: '已完成 点击立即返回×',
          action: 'back',
          actionDelay: 6000,
          matches: [
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
          ],
        },
        {
          preKeys: [12, 13, 60, 61, 70, 200],
          key: 3,
          action: 'back',
          actionDelay: 6000,
          matches: [
            '@[text="返回按钮"][clickable=true] < View < View < [id="app"] < WebView < *',
          ],
        },
        {
          preKeys: [0, 4, 30, 40, 70, 100],
          key: 4,
          name: '抽彩票券和手机',
          action: 'back',
          actionDelay: 6000,
          matches: [
            '@[text=""][clickable=true] < LinearLayout < ViewGroup <n ViewGroup < FrameLayout < LinearLayout <n ViewGroup < LinearLayout < ViewGroup < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [60, 100],
          key: 5,
          name: 'JoyAI',
          action: 'back',
          actionDelay: 6000,
          matches: [
            '@TextView[clickable=true] - TextView < View < View < [id="joyai-root"] < View < WebView < *',
          ],
        },
        {
          preKeys: [60, 110],
          key: 6,
          name: '圈子',
          action: 'back',
          actionDelay: 8000,
          matches: [
            '@[desc="退出圈子"][clickable=true] < View < View < [id="app"] <n WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [50, 60, 100, 110],
          key: 7,
          name: '看视频',
          action: 'back',
          actionDelay: 8000,
          matches: [
            '@[desc="返回"][clickable=true] < LinearLayout < FrameLayout < LinearLayout < ViewGroup < LinearLayout <n RelativeLayout < FrameLayout < LinearLayout <n FrameLayout < FrameLayout < ViewGroup < [id="android:id/content"]',
          ],
          activityIds: ['com.jd.lib.Discovery.view.DiscoveryActivity'],
        },
        {
          preKeys: [120],
          key: 8,
          name: '笔笔返现',
          action: 'back',
          actionDelay: 6000,
          matches: [
            'TextView - @TextView[clickable=true] < View < View < [id="app"] < WebView < *',
          ],
        },
        {
          preKeys: [130],
          key: 9,
          name: '添加药师微信-关闭页面',
          actionDelay: 6000,
          matches: [
            '@[desc="关闭页面"][vid="web_close"][clickable=true] -n [desc="返回"] < RelativeLayout <n [vid="root_layout"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [70],
      key: 2,
      name: '通用-返回-店铺页',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.jshop.jshop.JshopMainShopActivity',
        'com.jd.lib.productdetail.ProductDetailActivity',
      ],
      rules: [
        {
          preKeys: [70],
          key: 0,
          action: 'back',
          actionDelay: 6000,
          matches: [
            '@[desc="返回"][clickable=true] < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout <n FrameLayout < FrameLayout <n ViewGroup < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [
        10, 20, 30, 40, 50, 51, 60, 61, 70, 80, 90, 100, 120, 130, 190,
      ],
      key: 3,
      name: '通用-返回-商品页',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.jd.lib.productdetail.ProductDetailActivity'],
      rules: [
        {
          preKeys: [3, 10, 20, 30, 40, 70, 80, 90, 100, 120, 130, 190],
          key: 0,
          action: 'back',
          actionDelay: 6000,
          matches: [
            '@[desc="返回"][clickable=true] <n RelativeLayout < RelativeLayout <n RelativeLayout < DrawerLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [60, 61],
          key: 1,
          action: 'back',
          actionDelay: 10000,
          matches: [
            '@[desc="返回"][clickable=true] <n RelativeLayout < RelativeLayout <n RelativeLayout < DrawerLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [50, 51],
          key: 2,
          action: 'back',
          actionDelay: 20000,
          matches: [
            '@[desc="返回"][clickable=true] <n RelativeLayout < RelativeLayout <n RelativeLayout < DrawerLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [40, 50, 51, 60, 61, 70, 80, 90, 100, 110, 130],
      key: 4,
      name: '通用-返回-活动会场页',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
      ],
      rules: [
        {
          preKeys: [0, 40, 50, 51, 70, 80, 100, 130],
          key: 0,
          action: 'back',
          actionDelay: 6000,
          matches: [
            '@ImageView[desc="返回"][clickable=true] < RelativeLayout <n [vid="root_layout"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [110],
          key: 1,
          action: 'back',
          actionDelay: 8000,
          anyMatches: [
            '@ImageView[desc="返回"][clickable=true] < RelativeLayout <n [vid="root_layout"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [60, 61],
          key: 2,
          action: 'back',
          actionDelay: 10000,
          matches: [
            '@ImageView[desc="返回"][clickable=true] < RelativeLayout <n [vid="root_layout"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [10, 60, 61, 70, 110, 120, 130, 200],
      key: 5,
      name: '通用-返回-活动会场页J_babelOptPage',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
      ],
      rules: [
        {
          preKeys: [0, 10, 60, 61, 70, 110, 130, 200],
          key: 0,
          action: 'back',
          actionDelay: 6000,
          matches: [
            '@View[index=parent.childCount.minus(1)] < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
            '@ImageView[desc="返回"][clickable=true] < RelativeLayout <n [vid="root_layout"]',
          ],
        },
        {
          preKeys: [110],
          key: 1,
          action: 'back',
          actionDelay: 8000,
          matches: [
            '@View[index=parent.childCount.minus(1)] < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            '@RelativeLayout[clickable=true] - RelativeLayout < [id="android:id/content"]',
            '@ImageView[desc="返回"][clickable=true] < RelativeLayout <n [vid="root_layout"]',
          ],
        },
        {
          preKeys: [120],
          key: 2,
          action: 'back',
          actionDelay: 6000,
          matches: [
            '@[vid="layout_id_topNavi"][childCount=2][index=parent.childCount.minus(1)] <n ViewGroup < LinearLayout < ViewGroup < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [40, 100, 110, 120],
      key: 6,
      name: '通用-返回-看直播',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.mylive.view.activity.VideoLiveRoomActivity',
        'com.jd.lib.videoimmersionstyleb.view.activity.VideoImmersionStyleBActivity',
      ],
      rules: [
        {
          preKeys: [40, 100, 110, 120],
          key: 0,
          name: '建议开启边看边听-暂不开启',
          matches: [
            '@[text="暂不开启"][vid="jd_dialog_pos_button"][clickable=true] < [vid="ll_btns"] -n [text="建议开启边看边听"][vid="jd_dialog_title"]',
          ],
          activityIds: [
            'com.jd.lib.mylive.view.activity.VideoLiveRoomActivity',
            'null',
          ],
        },
        {
          preKeys: [0, 1, 40, 100, 120],
          key: 1,
          action: 'back',
          actionDelay: 6000,
          matches: [
            'ImageView < @[desc="关闭直播间"][clickable=true] < ViewGroup < FrameLayout <n FrameLayout < FrameLayout <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0, 2, 110],
          key: 2,
          action: 'back',
          actionDelay: 8000,
          matches: [
            'ImageView < @[desc="关闭直播间"][clickable=true] < ViewGroup < FrameLayout <n FrameLayout < FrameLayout <n [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [100, 200],
      key: 7,
      name: '通用-返回-游戏',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jingdong.manto.ui.MantoActivityUp1',
        'com.jingdong.manto.ui.MantoActivitySingleProcessUp',
      ],
      rules: [
        {
          preKeys: [100],
          key: 0,
          actionDelay: 6000,
          matches: [
            '@[desc="关闭"][clickable=true] - [desc="更多"] < LinearLayout <n LinearLayout < LinearLayout <n RelativeLayout <n LinearLayout <n FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [200],
          key: 1,
          actionDelay: 30000,
          matches: [
            '@[desc="关闭"][clickable=true] - [desc="更多"] < LinearLayout <n LinearLayout < LinearLayout <n RelativeLayout <n LinearLayout <n FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          name: '知道啦',
          matches: [
            '@[text="知道啦"][clickable=true] - LinearLayout - ImageView - ViewGroup < ViewGroup < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 3,
          name: '退出游戏',
          matches: [
            '@[text="退出游戏"][clickable=true] < LinearLayout -n RelativeLayout > [text="添加桌面快捷入口"][vid="game_add_to_desk_title"] + [vid="btn_close"]',
          ],
        },
        {
          preKeys: [0, 1, 3],
          key: 4,
          action: 'back',
          matches: [
            '@[desc="返回"][clickable=true] <n RelativeLayout < RelativeLayout[clickable=true] <n RelativeLayout < DrawerLayout < RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.jd.lib.productdetail.ProductDetailActivity'],
        },
        {
          preKeys: [0, 1, 3],
          key: 5,
          action: 'back',
          matches: [
            '@[desc="返回"][clickable=true] < RelativeLayout <n RelativeLayout < RelativeLayout < RelativeLayout < LinearLayout <n RelativeLayout <n FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          activityIds: ['.WebActivity'],
        },
        {
          preKeys: [0, 1, 3],
          key: 6,
          action: 'back',
          matches: [
            '@[vid="common_navi_root"][childCount=1][clickable=true] - RelativeLayout < RelativeLayout - ImageView < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          activityIds: ['.WebActivity'],
        },
      ],
    },
    {
      scopeKeys: [110],
      key: 8,
      name: '通用-返回-看小说赚钱',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.WebActivity'],
      rules: [
        {
          preKeys: [110],
          key: 0,
          name: '弹窗广告-×',
          matches: [
            '@ImageButton[clickable=true] - ImageButton < View < View <n View < View < [id="app"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 1000,
          matches: [
            'View[index=parent.childCount.minus(1)] - @TextView[clickable=true] < View < View < View <n View < View < [id="app"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@ImageButton[clickable=true] - ImageButton < View < View <n View < View < [id="app"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [1],
          actionDelay: 1000,
          key: 2,
          matches: [
            '@[desc="关闭"][clickable=true] <n View < View <n View < View < [id="app"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          action: 'back',
          actionDelay: 8000,
          matches: [
            '@[desc="返回"][clickable=true] < RelativeLayout <n RelativeLayout < RelativeLayout < RelativeLayout < LinearLayout <n RelativeLayout <n FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [50, 51, 60, 70, 100, 120],
      key: 9,
      name: '通用-返回-逛看病买药频道',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jingdong.common.jdreactFramework.activities.JDReactNativeCommonActivity',
      ],
      rules: [
        {
          preKeys: [50, 51, 70, 100, 120],
          key: 0,
          name: '弹窗广告-×',
          actionDelay: 1000,
          anyMatches: [
            '@ImageView[width=height] < ViewGroup - ImageView < ViewGroup < ViewGroup < ViewGroup < FrameLayout < [id="android:id/content"]',
            '@ImageView[width=height] < ViewGroup - ImageView < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < [id="android:id/content"]',
            '@ImageView < ViewGroup < ViewGroup <n ViewGroup <n ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [50, 51, 100, 120],
          key: 1,
          position: {
            left: 'width * 40',
            top: 'height * 40',
          },
          name: '弹窗广告-×<0',
          actionDelay: 1000,
          matches: [
            '@ImageView[height<0] < ViewGroup - ImageView < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0, 1, 50, 51, 60, 100, 120],
          key: 2,
          name: '逛看病买药频道-<',
          actionDelay: 6000,
          matches: [
            'ImageView[width=height] < @ViewGroup < ViewGroup < ViewGroup <n ViewGroup <n ViewGroup <n ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout < RelativeLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [2, 3],
          key: 3,
          name: '逛看病买药频道-暂时离开',
          matches: [
            '[text="暂时离开"] < @ViewGroup < ViewGroup <n ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [70, 120],
          key: 4,
          name: '恭喜您获得-去首页领取',
          matches: [
            'ImageView[width=height] < ViewGroup -n @ViewGroup[childCount=0] - [text="京豆"] -n ImageView < ViewGroup < ViewGroup < ViewGroup < ViewGroup < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          name: '首页-频道',
          matches: [
            '@[desc="看病买药"][clickable=true] > ViewGroup > [text="看病买药"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
        {
          preKeys: [5],
          key: 6,
          name: '恭喜您领取成功-开心收下',
          matches: [
            'ImageView[width=height] < ViewGroup -n @ViewGroup[childCount=0] -n [text="京豆"] -n ImageView < ViewGroup < ViewGroup < ViewGroup < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //24.04.08-29.07.31 京东超市-每日签到 汪贝狂欢日 每月月底最后3天
    //https://pro.m.jd.com/mall/active/3xhqjGH1wMz5FaMgrfYhR22sFvqz/index.html
    //https://pro.m.jd.com/mall/active/3nh7HzSjYemGqAHSbktTrf8rrH8M/index.html
    {
      key: 10,
      name: '赚更多汪贝-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 10,
          matches: [
            '[getChild(2).text="coin"] + @[text!~="去邀请|已完成"][clickable=true]',
          ],
        },
        {
          preKeys: [10],
          key: 11,
          action: 'back',
          actionDelay: 6000,
          matches: ['@TextView[clickable=true] < LinearLayout < ViewGroup'],
        },
      ],
    },
    {
      key: 11,
      name: '每日签到-汪贝兑换商城-兑换-京东超市卡',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text="汪贝日每天10点抢"] +2 @[text="兑换"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="是否确认兑换"] +n [text="取消"] + @[text="确认"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '每日签到-签到得卡',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="签到得卡"][clickable=true] <n [id="follow-signin-business-floor"] < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] <n [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          preKeys: [0],
          key: 12,
          matches: [
            '@ImageButton[clickable=true] <n View < View < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '京东超市-关闭弹窗',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[getChild(childCount.minus(1)).text="京东超市"] + @[getChild(0).text="关闭弹窗"][clickable=true]',
          ],
          activityIds: [
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
      ],
    },
    //来赚钱-限时秒杀
    //https://pro.m.jd.com/mall/active/kyQuYENcpSTbAcsdQXKHaa9oCdG/index.html
    {
      key: 14,
      name: '限时秒杀-立即抢',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.WebActivity', 'com.jd.lib.ttt.page.TTTMultiPageActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="立即抢"][clickable=true] -n [text="0.1"] <n View <n View <n [id="welfare-flash-sale"] <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] <n [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="立即兑换"] < View < View <n View < View < View < View < View < [id="hello"] < [id="m_common_content"] < WebView < *',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[text="立即兑换"] < View < View <n View < View < View < View < View < [id="hello"] < [id="m_common_content"] < WebView < *',
          ],
        },
      ],
    },
    //京东超市-黑色星期五 4.9抢15枚鸡蛋-周四 20:00/20:30/22:00-周五 10:00/16:00/20:00/22:00
    //https://pro.m.jd.com/mall/active/6g7nXqEqSD9FXFB4cStkfWD47qJ/index.html
    {
      key: 15,
      name: '京东超市-黑色星期五-领券抢',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          actionCd: 100,
          anyMatches: [
            '@[text="领券抢"][clickable=true] -n [text="趣尝鲜五谷鲜鸡蛋15枚"] < View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@[text="领券抢"][clickable=true] - [getChild(1).text="15枚鲜蛋"] < View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          activityIds: [
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '京东超市-黑色星期五-签到有奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="黑色星期五"] >n [id="blackFiveSignInFloor"] > @[text^="签到有奖"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.0639',
          },
          actionDelay: 2000,
          matches: ['[text="黑色星期五"] >n @[id="blackFiveSignInFloor"]'],
        },
      ],
    },
    //25.08.01开始 京东特价-天天签到抽奖
    //https://pro.m.jd.com/mall/active/4WMAPf9VCBdEE8Rva1AVEPH7CBbj/index.html
    {
      key: 20,
      name: '天天签到抽奖-逛一逛',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 20,
          matches: [
            'View[clickable=true] +n [text!~="分享得红包最高8.8"] +n @View[clickable=true] > [text="逛一逛"]',
          ],
          activityIds: [
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
      ],
    },
    //25.10.11-26.12.31 京东秒杀-天天刮京豆
    //https://pro.m.jd.com/mall/active/LXrBwmgGwkJs5GpTLn9qh2vhpeC/index.html-天天领豆
    //https://pro.m.jd.com/mall/active/25xqCADVDNAd1wTHojZv2p37yKBG/index.html-京豆
    //https://pro.m.jd.com/mall/active/4E1fFrgX1eGtWTc5KBNFzXMrh6xn/index.html
    {
      key: 30,
      name: '天天刮京豆-去浏览',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 30,
          actionDelay: 2000,
          matches: [
            '@[text~=".*(去浏览|去完成)"][clickable=true] - [text!*="AI"] <n View <n View <n * <n [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    {
      scopeKeys: [30],
      key: 31,
      name: '天天刮京豆-去完成-从我的-京豆访问',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          preKeys: [30],
          key: 1,
          name: '前往【我的】页面',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.68',
          },
          anyMatches: [
            '@TextView[clickable=true] + [getChild(1).desc="关闭"] > [getChild(1).desc^="从我的-京豆访问"] > TextView + Button[desc^="从我的-京豆访问"]',
            '@TextView[clickable=true] + [getChild(1).text="关闭"] > [getChild(1).text^="从我的-京豆访问"] > TextView + Button[text^="从我的-京豆访问"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            'GridView >n ViewGroup > @Button[clickable=true] > ViewGroup > [text="京豆"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
    {
      scopeKeys: [30],
      key: 32,
      name: '天天刮京豆-去完成-访问互动游戏',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          preKeys: [30],
          key: 1,
          name: '点击【我的】-互动游戏',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.65',
          },
          matches: [
            '@TextView[clickable=true] + [getChild(1).text="关闭"] > [getChild(1).text^="访问互动游戏"] > TextView + Button[text^="访问互动游戏"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            'GridView >n ViewGroup > Button > @ViewGroup[clickable=true] > ViewGroup > [text="互动游戏"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[text="互动游戏"] >n @View[clickable=true] > [text="点击返回"]',
          ],
        },
      ],
    },
    {
      key: 33,
      name: '天天刮京豆-去刮卡',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          name: '开心收下-×',
          matches: [
            '@[text="关闭"] - [text~="[0-9]秒后自动关闭"] < View[clickable=true] < View <n View <n [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 1,
          name: '去刮卡',
          matches: [
            '@[text~=".*去刮卡"][clickable=true] <n View <n View <n * <n [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '@[text~=".*(去浏览|去完成)"][clickable=true] - [text!*="AI"] <n View <n View <n * <n [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 2,
          name: '做任务解锁刮卡',
          anyMatches: [
            '@[desc="全部任务"][clickable=true] - [desc="做任务解锁刮卡"] - [desc="秒杀领豆"] - View > Button[desc~="做任务解锁刮卡 (?!.*AI).*做任务"]',
            '@TextView[clickable=true] - [text="做任务解锁刮卡"] - TextView - * TextView[text~=".*浏览 刮卡.*"]',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            'View - @TextView[clickable=true] - TextView < View <n View <n [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 3,
          name: '立即刮卡',
          actionDelay: 3000,
          anyMatches: [
            'TextView - @[desc="立即刮卡"][clickable=true] - TextView <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            'Button - @[text="立即刮卡"][clickable=true] - Button <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
            'View - @TextView[clickable=true] - TextView < View <n View <n [id^="bab_aid"] < WebView < *',
            'View > [text="关闭"] + View > TextView + @Button[text!~="AI.*|.*已刮卡"][clickable=true]',
            '@[text="刮下一张"][clickable=true] + [text="稍后再说"]',
            'Image < View < View < View - @TextView[clickable=true] < Dialog <n [id^="bab_aid"] < WebView < *',
            'View > TextView + View > @View[clickable=true] > [text~="[0-9]秒后自动关闭"] + [desc="关闭"]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          name: '刮下一张',
          matches: [
            '[text="天天领豆"] >n @[text="刮下一张"][clickable=true] + [text="稍后再说"]',
          ],
        },
        {
          preKeys: [3],
          key: 5,
          name: '刮下一张×',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.675',
          },
          matches: [
            'Image < View < View < View - @TextView[clickable=true] < Dialog <n [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '[text="天天领豆"] >n @[text="刮下一张"][clickable=true] + [text="稍后再说"]',
          ],
        },
        {
          key: 6,
          matches: [
            'View > TextView + View > @View[clickable=true] > [text~="[0-9]秒后自动关闭"] + [desc="关闭"]',
          ],
        },
      ],
    },
    {
      key: 34,
      name: '天天刮京豆-点*个商品',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text="个商品"] -n [text="点"] <<n * View[index=0][childCount=10] > View[index=0] >n @[getChild(0).getChild(0).text="image"][clickable=true]',
          ],
          excludeMatches: [
            'View - @TextView[clickable=true] - TextView < View <n View <n [id^="bab_aid"] < [text="天天领豆"] < *',
            '[text="全部任务"] - @[text="立即刮卡"][clickable=true] - [text="秒杀领豆"] - * Button[text~=".*待刮卡.*"]',
            '@[desc="全部任务"][clickable=true] - [desc="做任务解锁刮卡"] - [desc="秒杀领豆"] - View > Button[desc~="做任务解锁刮卡 (?!.*AI).*做任务"]',
            '@TextView[clickable=true] - [text="做任务解锁刮卡"] - TextView - * TextView[text~=".*浏览 刮卡.*"]',
            'TextView - @[desc="立即刮卡" || text="立即刮卡"][clickable=true] - TextView <n View  <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@RelativeLayout[clickable=true] >n [text*="继续浏览" || text="已完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="个商品"] -n [text="点"] <<n * View[index=1][childCount=10] > View[index=0] >n @[getChild(0).getChild(0).text="image"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          matches: [
            '[text="个商品"] -n [text="点"] <<n * View[index=0][childCount=10] > View[index=1] >n @[getChild(0).getChild(0).text="image"][clickable=true]',
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          name: '点击领取*京豆',
          matches: [
            '[text="京豆"] -n [text="点击领取"] < View < View - [text="图片"]  < View < @View[clickable=true] <n [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          name: '恭喜你获得奖励-我知道了-×',
          matches: [
            '@TextView[clickable=true] + [text~="[0-9]+"] + [text="京豆"] + [text="我知道了"]',
          ],
        },
      ],
    },
    //25.12.05-26.03.31 京东省钱卡
    //https://mcard.jd.com/?cardIdEnc=_vxHkMHQS98=&channel=202512051713
    {
      key: 40,
      name: '京东省钱卡做任务得奖励-去访问',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.WebActivity'],
      rules: [
        {
          key: 40,
          matches: [
            '@[text="去访问"][clickable=true] <n View -n [text="做任务得奖励"] < View < View <n View < View <n View <n [id="sskTopContentId"] < [id="root"] <n View < [text="京东省钱卡"] < *',
          ],
          excludeMatches: [
            '@[text="签到"][clickable=true] <n View <n View <n View <n View <n [id="sskTopContentId"] < [id="root"] <n View < [text="京东省钱卡"] < *',
            '@TextView[clickable=true] - [getChild(0).text="领取成功，恭喜获得"] < View < View <n View < [text="京东省钱卡"] < *',
            '@[text="领取奖励"][clickable=true] <n View -n [text="做任务得奖励"] < View < View <n View < View <n View <n [id="sskTopContentId"] < [id="root"] <n View < [text="京东省钱卡"] < *',
            '@Image[clickable=true] -n [text="奖励已领取"] < View < View <n [id="sskTopContentId"] < [id="root"] <n View < [text="京东省钱卡"] < *',
          ],
        },
        {
          key: 11,
          matches: [
            '@[text="领取奖励"][clickable=true] <n View -n [text="做任务得奖励"] < View < View <n View < View <n View <n [id="sskTopContentId"] < [id="root"] <n View < [text="京东省钱卡"] < *',
          ],
        },
        {
          preKeys: [11],
          key: 12,
          matches: [
            '@Image[clickable=true] -n [text="奖励已领取"] < View < View <n [id="sskTopContentId"] < [id="root"] <n View < [text="京东省钱卡"] < *',
          ],
        },
      ],
    },
    {
      key: 41,
      name: '京东省钱卡-签到',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="签到"][clickable=true] <n View <n View <n View <n View <n [id="sskTopContentId"] < [id="root"] <n View < [text="京东省钱卡"] < *',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@TextView[clickable=true] - [getChild(0).text="领取成功，恭喜获得"] < View < View <n View < [text="京东省钱卡"] < *',
          ],
        },
      ],
    },
    //26.01.01-26.12.31 国家补贴×超级补贴-天天领补贴
    //https://pro.m.jd.com/mall/active/DvFPmKRas9GYjDPZjT9NT14BAv6/index.html
    {
      key: 50,
      name: '天天领补贴-去完成+京豆',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          name: '弹窗广告-×',
          matches: [
            '@TextView[clickable=true][index=parent.childCount.minus(1)] - View < View < View < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 50,
          actionDelay: 2000,
          anyMatches: [
            '[text~="去看看|去完成"] - [text*="京豆"] -2 [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '[text~="去看看|去完成"] - [getChild(1).text*="京豆"] - [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            'TextView[clickable=true] - @View[clickable=true] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '[text="领取奖励"] - [text*="京豆"] -2 [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '[text="领取奖励"] - [getChild(1).text*="京豆"] - [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@TextView[clickable=true] -n [text="开心收下"] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 11,
          anyMatches: [
            '[text="领取奖励"] - [text*="京豆"] -2 [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '[text="领取奖励"] - [getChild(1).text*="京豆"] - [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            'TextView[clickable=true] - @View[clickable=true] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@TextView[clickable=true] -n [text="开心收下"] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          preKeys: [11],
          key: 12,
          matches: [
            '@TextView[clickable=true] -n [text="开心收下"] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    {
      key: 51,
      name: '天天领补贴-去完成+抽奖机会',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 51,
          actionDelay: 2000,
          anyMatches: [
            '[text~="去看看|去完成"] - [text*="抽奖机会"] -2 [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '[text~="去看看|去完成"] - [getChild(1).text*="抽奖机会"] - [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '[text~="去看看|去完成"] - [text*="京豆"] -2 [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '[text~="去看看|去完成"] - [getChild(1).text*="京豆"] - [text!~="分享.*|邀请.*"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '[text="领取奖励"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@TextView[clickable=true] -n [text="开心收下"] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 11,
          matches: [
            '[text="领取奖励"] <n @View[clickable=true] <n View < View <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          preKeys: [11],
          key: 12,
          matches: [
            '@TextView[clickable=true] -n [text="开心收下"] <n View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    //26.03.15-27.05.31 便宜包邮-天天砸金蛋
    //https://pro.m.jd.com/mall/active/3iXU1kvcZaGz6Xf9L3cJ9aCS6ShN/index.html
    {
      key: 60,
      name: '天天砸金蛋-去完成+京豆',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 60,
          actionDelay: 2000,
          anyMatches: [
            '@[text="去完成"][clickable=true] - [text*="京豆"] <n View <n View <n View - Button < View < View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@[text="去完成"][clickable=true] - [getChild(0).text*="京豆"] <n View <n View <n View - Button < View < View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          activityIds: [
            '.MainFrameActivity',
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
      ],
    },
    {
      key: 61,
      name: '天天砸金蛋-去完成+抽奖机会',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 61,
          actionDelay: 2000,
          anyMatches: [
            '@[text="去完成"][clickable=true] - [text="完成任务，可获得奖励"] <n View <n View <n View - Button < View < View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@[text="去完成"][clickable=true] - [getChild(0).text="完成任务，可获得奖励"] <n View <n View <n View - Button < View < View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '@[text="去完成"][clickable=true] - [text*="京豆"] <n View <n View <n View - Button < View < View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@[text="去完成"][clickable=true] - [getChild(0).text*="京豆"] <n View <n View <n View - Button < View < View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@TextView[clickable=true] - View < View < View - Button[desc="关闭弹窗"] < View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          activityIds: [
            '.MainFrameActivity',
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
      ],
    },
    {
      key: 62,
      name: '天天砸金蛋-砸一下',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.MainFrameActivity',
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@[text~="砸一下.*"][clickable=true] <n View <n View <n View - Button < View < View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '@[text="去完成"][clickable=true] <n View <n View <n View - Button < View < View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@TextView[clickable=true] - View < View < View - Button[desc="关闭弹窗"] < View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 1,
          matches: [
            '@TextView[clickable=true] - View < View < View - Button[desc="关闭弹窗"] < View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    //26.03.25-27.03.24 月黑风高-月光宝盒
    //https://pro.m.jd.com/mall/active/3MwGoRXcgfa3yFYKujMC2AsjmB3h/index.html
    {
      key: 70,
      name: '月光宝盒-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
      rules: [
        {
          key: 70,
          actionDelay: 2000,
          matches: [
            '@[text="去完成"][clickable=true] <n [getChild(1).text!~="邀请.*"] <n View - [text="做任务 赚次数"] <n View < View < View < View <n [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text="去完成"] < @View[clickable=true] <n View <n View <n [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
            '[text="去完成"] < @View[clickable=true] <n View < View < View <n View <n [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
            '@[text="待领奖"][clickable=true] <n [getChild(1).text!~="邀请.*"] <n View - [text="做任务 赚次数"] <n View < View < View < View <n [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
            '@[text="开心收下"][clickable=true] <n View <n View <n [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 11,
          matches: [
            '@[text="待领奖"][clickable=true] <n [getChild(1).text!~="邀请.*"] <n View - [text="做任务 赚次数"] <n View < View < View < View <n [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 12,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.606',
          },
          matches: [
            '[text="开心收下"][clickable=true] <n View <n @View <n [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [11],
          key: 13,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.606',
          },
          actionDelay: 1000,
          matches: [
            '@View[childCount=2] - [id="chunk3"] - [id="J_babelOpt"] < [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text="开心收下"][clickable=true] <n View <n View <n [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 14,
          actionDelay: 5000,
          matches: [
            '[text="做任务 赚次数"] - @TextView[clickable=true] < View < View < View < View <n [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text~="去完成|待领奖"][clickable=true] <n [getChild(1).text!~="邀请.*"] <n View - [text="做任务 赚次数"] <n View < View < View < View <n [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [70],
      key: 71,
      name: '月光宝盒-去完成-从首页访问月黑风高',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          preKeys: [70],
          key: 1,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.606',
          },
          anyMatches: [
            '[text="去完成"] < @View[clickable=true] <n View <n View <n [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
            '[text="去完成"] < @View[clickable=true] <n View < View < View <n View <n [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [70],
          key: 2,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.606',
          },
          actionDelay: 1000,
          matches: [
            '@View[childCount=2] - [id="chunk3"] - [id="J_babelOpt"] < [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text="去完成"] < @View[clickable=true] <n View < View < View <n View <n [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          matches: [
            '@[desc="月黑风高"][clickable=true] > ViewGroup > [text="月黑风高"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            '@[text="075e15f06e18eb7f.png!q50"] < View < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout <n ViewPager < RelativeLayout < ViewGroup < [vid="layout_main"]',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          name: '赚次数',
          matches: [
            '@TextView[clickable=true] - TextView - TextView <n View < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [70],
      key: 72,
      name: '月光宝盒-去完成-预约月黑风高商品',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          preKeys: [0, 70],
          key: 0,
          matches: [
            '[text="预约商品"] - [text~="[0-2]/3"] < View < View < View < View - [id="dark-moon-feeds-container"] >n TextView +n View > TextView + @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: [
            '[text="返回领奖"] - [text="已完成"] < View < @View[clickable=true] < View < View - [id="dark-moon-feeds-container"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [70],
      key: 73,
      name: '月光宝盒-立即抽奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          preKeys: [1, 2, 14],
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text~="[1-9][0-9]*"] <n View < @View[clickable=true] <n View < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            'Image < View < @View[clickable=true] <n View < View <n [id^="bab_aid"] < WebView < *',
            'View[childCount=1] - View - TextView - [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.585',
          },
          actionDelay: 1000,
          matches: [
            'Image < View < @View[clickable=true] <n View < View <n [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.585',
          },
          actionDelay: 1000,
          matches: [
            'View[childCount=1] - View - TextView - [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            'Image < View < @View[clickable=true] <n View < View <n [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    {
      key: 74,
      name: '月光宝盒-盲盒礼包',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 74,
          matches: [
            '@[text="立即开"][clickable=true] <n View < View < View < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '[text~="[1-9][0-9]*"] <n View < @View[clickable=true] <n View < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 11,
          matches: [
            '@[text="点击领取"][clickable=true] <n View < View < View < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    //26.04.01-27.03.31 京东秒杀-幸运奖励
    //https://pro.m.jd.com/mall/active/Md9FMi1pJXg2q7qc8CmE9FNYDS4/index.html
    //https://pro.m.jd.com/mall/active/43mNbs4F53FUMVin65VHVYYKB94f/index.html
    //https://pro.m.jd.com/mall/active/z9JX362NWYGwm6TwWpaQ5UBnWW9/index.html
    {
      key: 80,
      name: '京东秒杀-幸运奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@[id="cardViewIcon"] > [text="幸运奖励"] + [getChild(0).text="待领"] + [text="去解锁"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '恭喜您获得-去首页领取',
          matches: [
            '[id="signView_main_portal"] - * [getChild(2).text="秒后自动关闭"] +n @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[desc="秒杀"][clickable=true] > ViewGroup > [text="秒杀"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
        {
          key: 3,
          matches: [
            '@[id="cardViewIcon"] > [text="幸运奖励"] + [getChild(0).text="待领"] + [text="点击领取"]',
          ],
        },
        {
          preKeys: [2, 3],
          key: 4,
          name: '恭喜您获得-开心收下',
          matches: [
            '[id="signView_main_portal"] - * [getChild(2).text="秒后自动关闭"] +n @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [2, 3],
          key: 5,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.67',
          },
          matches: [
            '[text="京东秒杀"] >n @[id="J_babelOpt"] + [id="chunk2"] + [id="chunk10"]',
          ],
          excludeMatches: [
            '[id="signView_main_portal"] - * [getChild(2).text="秒后自动关闭"] +n @TextView[clickable=true]',
          ],
        },
      ],
    },
    //26.05.14-27.05.13 领券中心-天天领京豆
    //https://pro.m.jd.com/mall/active/VAjs3vpayA513UwxL5XC4eGBXqY/index.html?babelChannel=ttt128&linkTopTab=best&jumpTab=1&visitScene=page1
    {
      key: 90,
      name: '天天领京豆-×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          matches: [
            '[id="coupon-center-main-panel-"] +n [index=parent.childCount.minus(1)] >n TextView + Te1tView + @TextView[index=parent.childCount.minus(1)][clickable=true]',
          ],
        },
      ],
    },
    //26.06.28-27.05.31 互动游戏
    //https://pro.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html
    {
      key: 100,
      name: '互动游戏-逛一逛/去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.babel.view.activity.BabelActivity',
        'com.jd.lib.productdetail.ProductDetailActivity',
      ],
      rules: [
        {
          key: 100,
          name: '逛一逛|去完成',
          actionDelay: 2000,
          matches: [
            '[text~="逛一逛|去完成"] < @View[clickable=true] -n [text~="浏览.*"] <n View < View <n View - [text="做任务 攒经验"] < View <n View < View < View <n [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 11,
          name: '做任务 攒经验-×',
          actionDelay: 5000,
          matches: [
            '[text="做任务 攒经验"] < View - @TextView[clickable=true] < View < View < View <n [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '[text~="逛一逛|去完成"] < @View[clickable=true] -n [text~="浏览.*"] <n View < View <n View - [text="做任务 攒经验"] < View <n View < View < View <n [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    {
      key: 101,
      name: '互动游戏-签到领奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
      rules: [
        {
          key: 0,
          name: '签到领奖',
          matches: [
            '@[text^="今日奖励"][clickable=true] < [id="ihub-wg-skeleton-id-online-gift"] < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] <n [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '[text~="立即签到|明天继续|我知道了"] < @View[clickable=true] <n View <n View <n View < View < View < View <n [id^="bab_aid"] < WebView < *',
            '@TextView[clickable=true] <n View < View < View < View <n [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 1,
          name: '立即签到',
          matches: [
            '[text="立即签到"] < @View[clickable=true] <n View <n View <n View < View < View < View <n [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 2,
          name: '开心收下',
          matches: [
            '@[text="开心收下"][clickable=true] <n View <n View < View < View < View < View < View < View < View <n [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 3,
          name: '我知道了',
          matches: [
            '[text="我知道了"] < @View[clickable=true] <n View <n View <n View < View < View < View <n [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '@[text="开心收下"][clickable=true] <n View <n View < View < View < View < View < View < View < View <n [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 4,
          name: '明天继续',
          matches: [
            '[text="明天继续"] < @View[clickable=true] <n View <n View <n View < View < View < View <n [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '@[text="开心收下"][clickable=true] <n View <n View < View < View < View < View < View < View < View <n [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 5,
          name: '攒经验 ›',
          actionDelay: 2000,
          anyMatches: [
            '@[text="攒经验 ›"][clickable=true] < View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@[text="攒经验 ›"][clickable=true] < View <n View <n View < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] <n [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '@[text^="今日奖励"][clickable=true] < [id="ihub-wg-skeleton-id-online-gift"] < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] <n [id^="bab_aid"] < WebView < *',
            '@TextView[clickable=true] <n View < View < View < View <n [id^="bab_aid"] < WebView < *',
            '@[text="开心收下"][clickable=true] <n View <n View < View < View < View < View < View < View < View <n [id^="bab_aid"] < WebView < *',
            '[text="做任务 攒经验"] < View - @TextView[clickable=true] < View < View < View <n [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 6,
          name: '领取',
          actionDelay: 2000,
          matches: [
            '@Button[desc="领取"][clickable=true] <n View < View < View <n View < View < View - [text="全部奖励已解锁"] <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '[text="做任务 攒经验"] < View - @TextView[clickable=true] < View < View < View <n [id^="bab_aid"] < WebView < *',
            '@[text="开心收下"][clickable=true] <n View <n View < View < View < View < View < View < View < View <n [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    //26.08.20-27.08.18 权益中心-签到开盲盒
    //https://pro.m.jd.com/mall/active/34bpxyqcsNkowPnSfyhS1c11qwga/index.html
    {
      key: 110,
      name: '签到开盲盒-去浏览',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.WebActivity',
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 11,
          actionDelay: 2000,
          matches: [
            '@Button[desc="点击领取"][clickable=true] <n View <n [name$="Dialog"] < [name$="Dialog"] <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 110,
          actionDelay: 2000,
          anyMatches: [
            '@[desc$="去浏览" || text$="去浏览"][clickable=true] <n View <n [name$="Dialog"] < [name$="Dialog"] <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@[desc$="去浏览" || text$="去浏览"][clickable=true] <n View <n View <n [name$="Dialog"] < [name$="Dialog"] <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    //26.08.21-27.05.13 整点秒杀 抢20元金券-天天赚京豆
    //https://pro.m.jd.com/mall/active/3iXU1kvcZaGz6Xf9L3cJ9aCS6ShN/index.html
    {
      key: 120,
      name: '天天赚京豆-去完成+京豆',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 120,
          actionDelay: 2000,
          anyMatches: [
            '@[text="去完成"][clickable=true] -2 [text!~=".*砸金蛋机会"] -2 [text!~="看视频赚现金|下单抽大奖"] -n [text="做任务"] < View <n View <n View <n View <n View <n View < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@[text="去完成"][clickable=true] -2 [text!~=".*砸金蛋机会"] -2 [text!~="看视频赚现金|下单抽大奖"] -n [text="做任务"] < View <n View <n View <n View <n View <n View <n View < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '[text="0153164076a67fc0"] < @View[clickable=true] <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    {
      key: 121,
      name: '天天赚京豆-去完成+砸金蛋机会',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 121,
          actionDelay: 2000,
          anyMatches: [
            '@[text="去完成"][clickable=true] -2 [text~=".*砸金蛋机会"] -2 [text!~="看视频赚现金|下单抽大奖"] -n [text="做任务"] < View <n View <n View <n View <n View <n View < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@[text="去完成"][clickable=true] -2 [text~=".*砸金蛋机会"] -2 [text!~="看视频赚现金|下单抽大奖"] -n [text="做任务"] < View <n View <n View <n View <n View <n View <n View < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '@[text="去完成"][clickable=true] -2 [text!~=".*砸金蛋机会"] -2 [text!~="看视频赚现金|下单抽大奖"] -n [text="做任务"] < View <n View <n View <n View <n View <n View < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@[text="去完成"][clickable=true] -2 [text!~=".*砸金蛋机会"] -2 [text!~="看视频赚现金|下单抽大奖"] -n [text="做任务"] < View <n View <n View <n View <n View <n View <n View < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    {
      scopeKeys: [120],
      key: 122,
      name: '天天赚京豆-去完成-完成任务',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          preKeys: [120],
          key: 0,
          matches: [
            '[text="0153164076a67fc0"] < @View[clickable=true] <n View < View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'ImageView < @[desc="领券中心20元金券"][clickable=true] < ViewGroup <n ViewGroup < HorizontalScrollView < ViewGroup < ViewGroup < FrameLayout < FrameLayout <n RecyclerView < FrameLayout < LinearLayout < LinearLayout < RelativeLayout < RelativeLayout <n ViewPager < RelativeLayout < LinearLayout <n RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[text="01530f20f0d81f23"] < @View[clickable=true] < View <n View <n View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < * < FrameLayout < RelativeLayout < FrameLayout < LinearLayout <n RelativeLayout < RelativeLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
      ],
    },
    {
      key: 123,
      name: '天天赚京豆-砸一下',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text~="砸一下 \\\\(剩余[1-9][0-9]*次\\\\)"][clickable=true] <n View < View <n View <n View <n View <n View < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@[text~="砸一下 \\\\(剩余[1-9][0-9]*次\\\\)"][clickable=true] <n View < View <n View <n View <n View <n View <n View < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '@[text="去完成"][clickable=true] -2 [text!~=".*砸金蛋机会"] -2 [text!~="看视频赚现金|下单抽大奖"] -n [text="做任务"] < View <n View <n View <n View <n View <n View < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '@[text="去完成"][clickable=true] -2 [text!~=".*砸金蛋机会"] -2 [text!~="看视频赚现金|下单抽大奖"] -n [text="做任务"] < View <n View <n View <n View <n View <n View <n View < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '[text="02760480480fb046"] < @View[clickable=true] <n View <n View <n View <n View < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          preKeys: [0, 1],
          key: 1,
          matches: [
            '[text="02760480480fb046"] < @View[clickable=true] <n View <n View <n View <n View < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    //26.11.03-26.12.31 健康守护
    //https://pro.m.jd.com/mall/active/22waCSVVgE7bZ2PNR8EcuphmZAHd/index.html
    {
      key: 130,
      name: '健康守护-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.WebActivity'],
      rules: [
        {
          key: 130,
          name: '去完成',
          actionDelay: 2000,
          matches: [
            '@TextView[clickable=true] - [text!~=".*邀请.*"] -3 [text*="0/1" || text~=".*[0-2]/3.*"] <n View <n View < View < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    //26.11.23-26.12.31 美的家电套购福利专区
    //https://pro.m.jd.com/mall/active/wszNtgGCK3HW3nVckCB9V5AUuy3/index.html
    {
      key: 140,
      name: '美的8888-去搜索',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 140,
          name: '去搜索',
          actionDelay: 2000,
          matches: [
            '@[text="去搜索>"][clickable=true] < View <n View <n View < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          preKeys: [140],
          key: 11,
          name: '返回<',
          actionDelay: 5000,
          matches: [
            'Button[desc="返回"] < @ViewGroup[clickable=true] < ViewGroup < ViewGroup < FrameLayout < FrameLayout < FrameLayout < RelativeLayout < FrameLayout < RelativeLayout < LinearLayout < LinearLayout <n FrameLayout < FrameLayout < ViewGroup < DrawerLayout < FrameLayout <n FrameLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.jd.lib.search.view.Activity.ProductListActivity'],
        },
      ],
    },
    //26.10.12-26.11.11 京享红包
    //https://u.jd.com/FDT8Var
    {
      key: 190,
      name: '京享红包',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
        'com.jd.lib.productdetail.ProductDetailActivity',
      ],
      rules: [
        {
          key: 150,
          actionDelay: 2000,
          matches: [
            '[text="去完成"] < @View[clickable=true] <n View <n View <n View <n View < View < [id="union-coupon-sdk"] < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          key: 11,
          matches: [
            '[text="4c1b204204e75dd7"] < View < View < @View[clickable=true] <n View <n View <n View < View < [id="union-coupon-sdk"] < View <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    //汪汪庄园
    //https://joypark.jd.com?activityId=99DZNpaCTAv8f4TuKXr0Ew
    {
      key: 200,
      name: '汪汪庄园-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.WebActivity'],
      rules: [
        {
          key: 200,
          name: '去完成',
          actionDelay: 2000,
          actionMaximum: 3,
          matches: [
            '@TextView[clickable=true] - [text~="完成可得汪币.*"] - [text!~="精选好物热卖中.*"] <n View < View <n View - [text="close"] < View < View <n View <n [id="root"] < View < WebView < *',
          ],
        },
      ],
    },
    {
      key: 201,
      name: '汪汪庄园-离线汪币奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.WebActivity'],
      rules: [
        {
          key: 0,
          name: '确定-×',
          matches: [
            '@[text="close"][clickable=true] - [text="offline_bottom_btn"] <n View < View <n View <n [id="root"] < View < WebView < *',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '赚汪币',
          matches: [
            '[id="newJoy"] - @ImageButton[clickable=true] <n View <n [id="root"] < View < WebView < *',
          ],
          excludeMatches: [
            '@[text="close"][clickable=true] <n View < View <n View <n [id="root"] < View < WebView < *',
          ],
        },
      ],
    },
    //京东笔笔返
    //https://ipay.jd.com/pages/bbf/index
    {
      key: 210,
      name: '笔笔返-×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'Dialog > [getChild(0).text="今日限时福利"] + @Button[text=""][clickable=true]',
          ],
          activityIds: ['.WebActivity'],
        },
      ],
    },
    //直播-天天签到福利
    //https://lives.jd.com
    //https://zhibo.jd.com
    {
      key: 220,
      name: '天天签到福利',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.jdlivelistlib.view.activity.FaxianLiveListActivity',
      ],
      rules: [
        {
          key: 0,
          matches: ['[text="签到领取"] < @ViewGroup -n [text="天天领好礼"]'],
          excludeMatches: [
            '[text="签到领取"] < @View[clickable=true] <n View < View <n View < View < [id="app"] < WebView < *',
          ],
        },
        {
          key: 1,
          matches: [
            '[text="签到领取"] < @View[clickable=true] <n View < View <n View < View < [id="app"] < WebView < *',
          ],
        },
      ],
    },
    //京豆摇一摇
    //https://pro.m.jd.com/mall/active/3v9ux57AgAdJ6PuFPijC6HZzFYkC/index.html
    {
      key: 299,
      name: '京豆摇一摇',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.jdlivelistlib.view.activity.FaxianLiveListActivity',
      ],
      rules: [
        {
          key: 0,
          name: '立即开摇',
          actionMaximum: 1,
          matches: [
            '@ImageButton[clickable=true] - View < View < [id="Femobile_sellshake"] <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
          excludeMatches: [
            '@TextView[clickable=true] <n View + [text="摇一摇"] <n View <n View <n [id="Femobile_sellshake"] <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
            '[text="继续开"] < @View[clickable=true] <n View <n View <n [id="Femobile_sellshake"] <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          preKeys: [0, 1],
          key: 1,
          name: '开',
          matches: [
            '@TextView[clickable=true] <n View + [text="摇一摇"] <n View <n View <n [id="Femobile_sellshake"] <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          preKeys: [1, 2],
          key: 2,
          name: '继续开',
          matches: [
            '[text="继续开"] < @View[clickable=true] <n View <n View <n [id="Femobile_sellshake"] <n View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    //批量操作类
    //店铺关注
    //https://shop.m.jd.com/favorite/home
    //https://pro.m.jd.com/mall/active/2WUEUPEgJ6bMgeW6CatRVTViJ9xU/index.html
    {
      key: 300,
      name: '店铺关注',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Button[desc^="关注"][clickable=true] > [getChild(0).getChild(0).text~="[0-9]{2,}"] - ViewGroup > [text="关注"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
    {
      key: 301,
      name: '店铺关注-取消关注',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.setting.view.activity.PersonalMultiTabActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="管理"][clickable=true] < LinearLayout <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="取消关注"][clickable=true] - [getChild(0).desc="已选0个店铺"] < View <n View < View < View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[text="取消关注"][clickable=true] - [getChild(0).desc~="已选[1-9]+个店铺"] < View <n View < View < View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@[desc="确定"][clickable=true] -n [text="取消关注"] < AlertDialog < View <n View <n [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    {
      key: 302,
      name: '商品收藏-取消收藏',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.setting.view.activity.PersonalMultiTabActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="管理"][clickable=true] < LinearLayout <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[desc="全选未选择"][clickable=true] < View < View <n View <n View < View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[text="取消收藏(10)"][clickable=true] - [getChild(0).desc="全选已选择"] < View <n View <n View < View < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView < *',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@[text="确定"][clickable=true] -n [text="取消收藏"] < AlertDialog <n View <n [id^="bab_aid"] < WebView < *',
          ],
        },
      ],
    },
    {
      key: 303,
      name: '商品足迹-删除',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.setting.view.activity.PersonalMultiTabActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="管理"][clickable=true] < LinearLayout <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'View - @ImageView < ViewGroup < ViewGroup <n ViewGroup < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < RecyclerView < ViewPager < FrameLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            'View < @ViewGroup - View - ViewGroup < ViewGroup <n ViewGroup < FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < RecyclerView < ViewPager < FrameLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 400,
      name: '去开启通知-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[desc="关闭"][clickable=true] - * [text="去开启通知"]'],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
    {
      key: 401,
      name: '申请通知权限-取消',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="取消"][clickable=true] < [getChild(1).text="去打开"] -n [text="京东需要申请通知权限"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
    {
      key: 402,
      name: '手机存储空间不足-稍后处理',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="稍后处理"][vid="jd_dialog_pos_button"][clickable=true] < [vid="ll_btns"] -n [text="手机存储空间不足"][vid="jd_dialog_title"]',
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 500,
      name: '首页广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="跳过"] < [desc="跳过"][clickable=true] <n RelativeLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
    {
      key: 501,
      name: '弹窗广告-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            'ViewGroup[clickable=true] + ViewGroup > @[desc="关闭"][clickable=true] > ImageView',
            '[desc="关闭"] < @FrameLayout[clickable=true] <n ViewGroup < FrameLayout < FrameLayout < FrameLayout < FrameLayout + LinearLayout > [id="android:id/content"]',
          ],
          activityIds: ['.MainFrameActivity', '.WebActivity'],
        },
      ],
    },
  ],
});
