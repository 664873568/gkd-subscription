import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yy.yyvoicetool',
  name: 'YY语音',
  groups: [
    {
      key: 0,
      name: '通用',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          name: '确定跳转至新频道-确定',
          matches: [
            '@[text="确定"][clickable=true] -n [text="取消"] < View - [getChild(0).text="当前频道已收藏"] - ImageButton - [text="提示"] < View < View <n View < [id="root"]',
          ],
        },
        {
          key: 1,
          name: '是否踢出频道-确定',
          matches: [
            '@[text="确定"][clickable=true] - [text="取消"] - [getChild(0).text="您已在其他设备频道内，是否踢出频道？"] < View < View < ViewGroup < [id="android:id/content"]',
          ],
        },
      ],
    },
    //天天领金币
    {
      key: 10,
      name: '立即签到',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="立即签到"][clickable=true][index=parent.childCount.minus(1)]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@TextView[clickable=true] - [getChild(0).text="恭喜获得"] > [text="我知道了"] + [text="去完成"]',
          ],
        },
        {
          key: 2,
          matches: [
            '@TextView[clickable=true] + [getChild(childCount.minus(1)).text="继续赚金币"]',
          ],
        },
      ],
    },
    //每日任务
    {
      key: 11,
      name: '每日任务-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[text="去完成"][clickable=true] -n [text!~="访问指定频道|频道内发言|收藏任意频道|赠送红贝壳礼物"] < View < View -n [text="每日任务"] < View <n [id="mainPanelWrapper"] <n View <n View < [id="root"]',
          ],
          excludeMatches: [
            '@[text="立即签到"][clickable=true][index=parent.childCount.minus(1)]',
            '@[text="领奖励"][clickable=true] < View < View -n [text="每日任务"] < View <n [id="mainPanelWrapper"] <n View <n View < [id="root"]',
            '@[text$="打开"][clickable=true] -n [text="取消"] < View -n ImageButton - [text="提示"] < View < View <n View < [id="root"]',
            '@TextView[clickable=true] - View < View < View <n View < WebView < WebView < ViewGroup < ViewFactoryHolder < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '浏览App',
          matches: [
            '@[text$="打开"][clickable=true] -n [text="取消"] < View -n ImageButton - [text="提示"] < View < View <n View < [id="root"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          name: '访问YY游仓',
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@[desc="YY游仓"] < View <n View < View < View < View <n [id="fun-root"] < View < WebView < WebView < ViewGroup < ViewFactoryHolder < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          name: '去搜索热门频道',
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@[text="取消"] - [desc="删除"] - EditText < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 4,
          anyMatches: [
            '@[text="领奖励"][clickable=true] <n View < View -n [text="每日任务"] < View <n [id="mainPanelWrapper"] <n View <n View < [id="root"]',
          ],
          excludeMatches: [
            '@[text="立即签到"][clickable=true][index=parent.childCount.minus(1)]',
            '@[text$="打开"][clickable=true] -n [text="取消"] < View -n ImageButton - [text="提示"] < View < View <n View < [id="root"]',
            '@TextView[clickable=true] - View < View < View <n View < WebView < WebView < ViewGroup < ViewFactoryHolder < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          matches: [
            '@TextView[clickable=true] - View < View < View <n View < WebView < WebView < ViewGroup < ViewFactoryHolder < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '每日任务-去完成-收藏任意频道',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[text="去完成"][clickable=true] -n [text="收藏任意频道"] < View < View -n [text="每日任务"] < View <n [id="mainPanelWrapper"] <n View <n View < [id="root"]',
          ],
          excludeMatches: [
            '@[text=~"去完成|领奖励"][clickable=true] -n [text!~="访问指定频道|频道内发言|收藏任意频道|赠送红贝壳礼物"] < View < View -n [text="每日任务"] < View <n [id="mainPanelWrapper"] <n View <n View < [id="root"]',
            '@TextView[clickable=true] - View < View < View <n View < WebView < WebView < ViewGroup < ViewFactoryHolder < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="收藏"] < @View[clickable=true] <n View < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          action: 'back',
          actionDelay: 5000,
          matches: [
            '[text^="直播间号"] - @View[clickable=true] - View - View[clickable=true][childCount=0] <n View < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [0],
      key: 13,
      name: '每日任务-去完成-访问指定频道',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.MainActivity'],
      rules: [
        {
          key: 13,
          actionDelay: 2000,
          matches: [
            '@[text="去完成"][clickable=true] -n [text~="访问指定频道|频道内发言"] < View < View -n [text="每日任务"] < View <n [id="mainPanelWrapper"] <n View <n View < [id="root"]',
          ],
          excludeMatches: [
            '@[text~="去完成|领奖励"][clickable=true] -n [text!~="访问指定频道|频道内发言|赠送红贝壳礼物"] < View < View -n [text="每日任务"] < View <n [id="mainPanelWrapper"] <n View <n View < [id="root"]',
            '@TextView[clickable=true] - View < View < View <n View < WebView < WebView < ViewGroup < ViewFactoryHolder < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0,13],
          key: 1,
          name: '点击聊天框',
          matches: [
            '[text="说点什么吧..."] < @View[clickable=true] <n View < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '点击表情',
          matches: [
            '@View[clickable=true] - ViewFactoryHolder <n View < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          name: '选择表情',
          matches: [
            '@View[clickable=true] < View < View <n View <n View < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          name: '发送表情',
          matches: [
            '[text="发送"] < @View[clickable=true] <n View < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          name: '返回',
          action: 'back',
          matches: [
            '[text^="直播间号"] - @View[clickable=true] - View - View[clickable=true][childCount=0] <n View < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '每日任务-去完成-完成应用下载|完成应用浏览|完成页面浏览',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.MainActivity',
        'com.noah.adn.huichuan.view.ui.dialog.HcDownLoadDialog',
        'com.noah.adn.huichuan.webview.BrowserActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[text="去完成"][clickable=true] <n LinearLayout < FrameLayout <n FrameLayout < FrameLayout < ViewFactoryHolder <n View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text~="去完成|领奖励"][clickable=true] -n [text!~="赠送红贝壳礼物"] < View < View -n [text="每日任务"] < View <n [id="mainPanelWrapper"] <n View <n View < [id="root"]',
            '@TextView[clickable=true] - View < View < View <n View < WebView < WebView < ViewGroup < ViewFactoryHolder < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="取消"][vid="noah_adn_dialog_download_cancel"][clickable=true] -n [text="应用详情"][vid="adn_dialog_download_title"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          matches: [
            '@[vid="noah_close_icon"][clickable=true] - [vid="noah_titleView"] - [vid="noah_back_icon"]',
          ],
        },
        {
          key: 3,
          matches: [
            '@[text="领奖励"] <n LinearLayout < FrameLayout <n FrameLayout < FrameLayout < ViewFactoryHolder <n View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            '@TextView[clickable=true] - View < View < View <n View < WebView < WebView < ViewGroup < ViewFactoryHolder < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '每日任务-看视频',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[text="看视频"][clickable=true] <n [id="mainPanelWrapper"] <n View <n View < [id="root"] < View < WebView < WebView < ViewGroup < ViewFactoryHolder < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text~="去完成|领奖励"] <n LinearLayout < FrameLayout <n FrameLayout < FrameLayout < ViewFactoryHolder <n View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
            '@TextView[clickable=true] - View < View < View <n View < WebView < WebView < ViewGroup < ViewFactoryHolder < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
            'Button -n @TextView[clickable=true] < View < View <n View < WebView < WebView < ViewGroup < ViewFactoryHolder < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
          activityIds: ['.MainActivity'],
        },
        {
          key: 1,
          matches: [
            '@[text="领金币"][clickable=true] <n [id="mainPanelWrapper"] <n View <n View < [id="root"] < View < WebView < WebView < ViewGroup < ViewFactoryHolder < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            'Button -n @TextView[clickable=true] < View < View <n View < WebView < WebView < ViewGroup < ViewFactoryHolder < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            'Button -n @TextView[clickable=true] < View < View <n View < WebView < WebView < ViewGroup < ViewFactoryHolder < View < View < ComposeView < ViewGroup <n FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '进频道-立即领取',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="，累计待领取"] +n [text="金币"] + @View[clickable=true] > [text="full.1aa72883"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    //看视频-com.mcto.sspsdk.ssp.activity.QyTrueViewActivity
    {
      key: 20,
      name: '看视频-*秒后可领取奖励mcto',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.mcto.sspsdk.ssp.activity.QyTrueViewActivity'],
      rules: [
        {
          key: 0,
          action: 'none',
          matches: [
            '@[text="关闭"][vid="qy_count_down_close"][clickable=true] -n [text~="[0-9]+秒后可领取奖励"][vid="qy_count_down_desc"] < [vid="qy_count_down_btn"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="关闭"][vid="qy_count_down_close"][clickable=true] < [vid="qy_count_down_btn"]',
          ],
        },
      ],
    },
    //看视频-com.noah.adn.huichuan.view.rewardvideo.HCRewardVideoActivity
    {
      key: 30,
      name: '看视频-点击跳转后停留*秒立即获奖noah',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.noah.adn.huichuan.view.ui.dialog.HcDownLoadDialog',
        'com.noah.adn.huichuan.view.rewardvideo.HCRewardVideoActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '@[text="取消"][vid="noah_adn_dialog_download_cancel"][clickable=true] -n [text="应用详情"][vid="adn_dialog_download_title"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[vid="noah_reward_click_tips_v2_container"][clickable=true] > [vid="noah_reward_click_tips_v2_countdown"]',
          ],
          excludeMatches: [
            '@[vid="noah_hc_close_button"][clickable=true] - [vid="noah_hc_countdown_split"] - [text="奖励已发放"][vid="noah_hc_countdown_view"]',
            '@[vid="noah_hc_close_button"][clickable=true] < * <n * < * < * -n * [text="恭喜获得奖励"][vid="noah_reward_click_tips_v2_countdown"]',
          ],
        },
        {
          key: 2,
          anyMatches: [
            '@[vid="noah_hc_close_button"][clickable=true] - [vid="noah_hc_countdown_split"] - [text="奖励已发放"][vid="noah_hc_countdown_view"]',
            '@[vid="noah_hc_close_button"][clickable=true] < * <n * < * < * -n * [text="恭喜获得奖励"][vid="noah_reward_click_tips_v2_countdown"]',
          ],
        },
      ],
    },
    {
      key: 31,
      name: '看视频-完成两个任务，立即领奖noah',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.noah.adn.huichuan.view.rewardvideo.HCRewardVideoActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text~="点击或下载后体验[0-9]+秒立即领奖"][vid="noah_multi_task_ad2_task_hint"] + * @[text="立即打开"][vid="noah_multi_task_ad2_cta"][clickable=true]',
          ],
        },
        {
          key: 1,
          matches: [
            '[text~="点击或下载后体验[0-9]+秒立即领奖"][vid="noah_multi_task_ad1_task_hint"] + * @[text="立即打开"][vid="noah_multi_task_ad1_cta"][clickable=true]',
          ],
          excludeMatches: [
            '[text~="点击或下载后体验[0-9]+秒立即领奖"][vid="noah_multi_task_ad2_task_hint"] + * @[text="立即打开"][vid="noah_multi_task_ad2_cta"][clickable=true]',
          ],
        },
        {
          key: 2,
          matches: [
            '@[vid="noah_hc_close_button"][clickable=true] <n [vid="noah_hc_countdown_container"] < * < * < * - * [vid="noah_component_30_task_finish"]', //恭喜获得奖励
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '版本更新-稍后再说',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="稍后再说"][clickable=true] - [text="立即更新"] -n [text="版本更新"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '未成年模式-我知道了',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text="我知道了"] < @View -n [text="未成年模式"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 42,
      name: '开启消息通知-取消',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="开启消息通知"] +n * @[text="取消"][clickable=true] +n [text="立即启用"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@View > [text="跳过"] + [text~="[0-9]"]'],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '首页广告-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@View - [text$="自动关闭"] - ImageView < View < View < View < ViewGroup < [id="android:id/content"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
  ],
});
