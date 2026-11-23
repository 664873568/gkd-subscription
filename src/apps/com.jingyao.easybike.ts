import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingyao.easybike',
  name: '哈啰',
  groups: [
    {
      key: 0,
      name: '兑换中心-兑换',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      activityIds: ['com.chengle.lib.game.web.WebGameActivity'],
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 0.4981',
            top: 'width * 1.1073',
          },
          matches: [
            '[text="游戏中心"] >n [text="兑换中心"] + View > @View[index=6]',
          ],
        },
        {
          key: 1,
          matches: [
            '[text="游戏中心"] >n [text="卡券详情"] +n View > [text="兑换"][clickable=true]',
          ],
        },
      ],
    },
    //奖励金
    {
      key: 10,
      name: '奖励金-立即签到',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.alipay.mobile.nebulacore.ui.H5Activity',
        'com.hellobike.atlas.business.portal.PortalActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="立即签到"][vid="tvSignInClick"][clickable=true] < LinearLayout < FrameLayout <n ViewGroup < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[vid="ivClose"][clickable=true] - [vid="rlDialogContent"] >n [text="签到成功，"][vid="tvAdRewardTip"]',
          ],
        },
        {
          key: 2,
          matches: [
            '@[vid="tvSignInClickWithAds"] <n LinearLayout < LinearLayout < FrameLayout <n ViewGroup < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '奖励金-领奖成功',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.alipay.mobile.nebulacore.ui.H5Activity',
        'com.qq.e.ads.PortraitADActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@[text~="点击广告翻倍领|下一个视频"] < LinearLayout <n FrameLayout <n FrameLayout <n LinearLayout <n FrameLayout <n RelativeLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'View - @ImageView[clickable=true] - TextView < FrameLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.qq.e.ads.ADActivity'],
        },
        {
          key: 2,
          name: '领奖成功，已到账-×',
          matches: [
            '@[vid="rewardV2Close"][clickable=true] <n RelativeLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text~="点击广告翻倍领|下一个视频"] < LinearLayout <n FrameLayout <n FrameLayout <n LinearLayout <n FrameLayout <n RelativeLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '浏览广告，领超多奖励金-去浏览',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="去浏览"][vid="btnTaskAction"] <n [vid="flAdContainer"] - [vid="ivTaskText"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 10000,
          matches: [
            '@ImageView < FrameLayout + RecyclerView + FrameLayout >n [text="立即下载"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
        {
          preKeys: [0],
          key: 2,
          actionDelay: 10000,
          matches: [
            '@[text="去浏览"][vid="btnTaskAction"] <n [vid="flAdContainer"] - [vid="ivTaskText"]',
          ],
          activityIds: ['com.qq.e.ads.ADActivity'],
        },
      ],
    },
    {
      key: 13,
      name: '二级广告页-<',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="微博客户端"][vid="title"] < [vid="top_center_llt"] - @[vid="left_img"][clickable=true] < [vid="main_rlt"] < [vid="top_bar"] < [vid="rl_bar"]',
          ],
          activityIds: [
            'com.hellobike.bundlelibrary.web.WebActivity',
            'com.hellobike.advertbundle.webview.AdvWebActivity',
          ],
        },
      ],
    },
    //[id="welfare_surprise_tasks"]
    {
      key: 14,
      name: '奖励金-限时薅羊毛',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
      rules: [
        {
          key: 0,
          name: '领任务',
          actionDelay: 2000,
          matches: [
            '[text="领任务"] <n @View[clickable=true] -n [text="限时薅羊毛"] < View < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            '[text="领奖励"] <n @View[clickable=true] -n [text="限时薅羊毛"] < View < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          key: 1,
          name: '领奖励',
          matches: [
            '[text="领奖励"] <n @View[clickable=true] -n [text="限时薅羊毛"] < View < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
      ],
    },
    //[id="welfare_advertisement_video"]
    {
      key: 15,
      name: '奖励金-看视频赚奖励金',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.beizi.ad.v2.activity.BeiZiNewRewardVideoActivity'],
      rules: [
        {
          key: 0,
          name: '看视频',
          actionDelay: 2000,
          matches: [
            '@[text="看视频"][clickable=true] -n [text="看视频赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '奖励金-看视频',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.beizi.ad.v2.activity.BeiZiNewRewardVideoActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="beizi_reward_video_privilege_dialog_container_ll"] >n [text="提前领奖"][vid="beizi_reward_video_privilege_dialog_interaction_title_tv"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="关闭广告"][vid="beizi_reward_video_cancel_privilege_dialog_tv"][clickable=true] <n * + * [text="立即领取 ｜ 关闭广告"][vid="beizi_reward_video_ad_get_rewards_close_tv"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[text="已经获得奖励 ｜ 关闭"][vid="beizi_reward_video_ad_end_car_close_tv"][clickable=true]',
          ],
        },
      ],
    },
    //[id="welfare_task"]
    {
      key: 17,
      name: '奖励金-做任务赚奖励金',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.beizi.ad.v2.activity.BeiZiNewRewardVideoActivity'],
      rules: [
        {
          key: 0,
          name: '去浏览',
          actionDelay: 2000,
          matches: [
            '[text="去浏览"] <n @View[clickable=true] < View < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          key: 1,
          name: '领任务',
          actionDelay: 2000,
          matches: [
            '[text="领任务"] - [getChild(0).text!~="点一点.*|邀.*|完成.*|电商.*"] <n @View[clickable=true] < View < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            '[text="去浏览"] <n @View[clickable=true] < View < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '[text="去领取"] <n View <n @View[clickable=true] < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          key: 2,
          name: '去领取',
          actionDelay: 2000,
          matches: [
            '[text="去领取"] <n View <n @View[clickable=true] < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            '[text="去浏览"] <n @View[clickable=true] < View < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
      ],
    },
    //[id="treasure_box_float"]
    {
      key: 18,
      name: '奖励金-开宝箱',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.beizi.ad.v2.activity.BeiZiNewRewardVideoActivity'],
      rules: [
        {
          key: 0,
          name: '开宝箱',
          actionDelay: 2000,
          matches: [
            'Image < View - Image < @View[clickable=true] < [id="treasure_box_float"] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            '@[text="ca36acbe_close_popup"][clickable=true] <n View <n [id="treasure_box_float"] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          key: 1,
          name: '选*奖励金',
          actionDelay: 2000,
          matches: [
            '[text~="选.*奖励金"] < @View[clickable=true] - [text="看视频领"] <n View <n [id="treasure_box_float"] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
      ],
    },
    //游戏中心
    {
      key: 20,
      name: '游戏中心-热门推荐/新游速递',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          anyMatches: [
            '[text="开玩"] <n View <n @View[index=1][clickable=true] - [getChild(1).getChild(0).text="再玩2个热门推荐各60秒"] < View <n View < View <n View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '[text="开玩"] <n View <n @View[index=2][clickable=true] -2 [getChild(1).getChild(0).text="再玩1个热门推荐60秒"] < View <n View < View <n View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '@View[index=0][clickable=true] < ListView < View - [getChild(1).getChild(0).text="再玩2个新游速递各60秒"] < View <n View < View <n View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '@View[index=1][clickable=true] <n ListView < View - [getChild(1).getChild(0).text="再玩1个新游速递60秒"] < View <n View < View <n View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            'View - @TextView[clickable=true] - TextView < View < View < View <n View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
        {
          key: 1,
          action: 'back',
          actionDelay: 60000,
          matches: [
            '@[vid="float_change_view"][clickable=true] >n ViewGroup > [vid="float_close"]',
          ],
          activityIds: ['com.chengle.lib.game.web.WebGameActivity'],
        },
        {
          key: 2,
          actionDelay: 1000,
          anyMatches: [
            '[text="尝试下这些游戏吧～"][vid="stay_title"] +n @[text="不用了，退出游戏"][vid="stay_exit"][clickable=true] + [text="取消"][vid="stay_cancel"]',
            '[text="快给这款游戏评个分吧～告诉其他骑行侠"][vid="rate_title"] +n [text="评完啦 ，退出游戏"][vid="rate_sure"][clickable=true] + @[text="暂不评论"][vid="rate_cancel"]',
          ],
          activityIds: ['com.chengle.lib.game.web.WebGameActivity'],
        },
      ],
    },
    {
      key: 21,
      name: '游戏中心-大家都在玩',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 100,
          },
          actionCd: 200,
          matches: [
            'TextView < @View < View - [id="game-navbar"] < View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            '@[text~="再玩.*个(热门推荐|新游速递).*60秒"] < View <n View < View <n View < View <n View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
        {
          key: 1,
          matches: [
            '[text="开玩"] <n View <n @View[index=1][clickable=true] - [getChild(1).getChild(0).text="再玩2个大家都在玩各60秒"] < View <n View < View <n View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
        {
          key: 2,
          matches: [
            '[text="开玩"] <n View <n @View[index=2][clickable=true] - [getChild(1).getChild(0).text="再玩1个大家都在玩60秒"] < View <n View < View <n View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
        {
          preKeys: [1,2],
          key: 3,
          action: 'back',
          actionDelay: 60000,
          matches: [
            '@[vid="float_change_view"][clickable=true] >n ViewGroup > [vid="float_close"]',
          ],
          activityIds: ['com.chengle.lib.game.web.WebGameActivity'],
        },
        {
          preKeys: [3],
          key: 4,
          anyMatches: [
            '[text="尝试下这些游戏吧～"][vid="stay_title"] +n @[text="不用了，退出游戏"][vid="stay_exit"][clickable=true] + [text="取消"][vid="stay_cancel"]',
            '[text="快给这款游戏评个分吧～告诉其他骑行侠"][vid="rate_title"] +n [text="评完啦 ，退出游戏"][vid="rate_sure"][clickable=true] + @[text="暂不评论"][vid="rate_cancel"]',
          ],
          activityIds: ['com.chengle.lib.game.web.WebGameActivity'],
        },
      ],
    },
    {
      key: 22,
      name: '游戏中心-签到',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
      rules: [
        {
          key: 0,
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            duration: 200,
          },
          actionCd: 200,
          actionMaximum: 3,
          matches: [
            'TextView < @View < View - [id="game-navbar"] < View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            '@[text~="再玩.*个.*60秒"] < View <n View < View <n View < View <n View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            '@[text="一键领取"][clickable=true] <n View <n View < View <n View < View <n View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 1000,
          matches: [
            '[text="签到"] <n @View[clickable=true] <n View <n View < View <n View < View <n View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          actionDelay: 1000,
          matches: [
            '@[text="好的"] <n View[clickable=true] < View < View <n View < View < View <n View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          actionDelay: 5000,
          matches: [
            'View - @TextView[clickable=true] - TextView < View < View < View <n View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
      ],
    },
    //看视频-com.qq.e.ads.PortraitADActivity
    {
      key: 30,
      name: '看视频-微信-×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.qq.e.ads.PortraitADActivity',
        'com.qq.e.ads.ADActivity',
      ],
      rules: [
        {
          key: 0,
          name: '拿奖励',
          matches: [
            '@[text~=".*微信.*(看|玩).*"][index=parent.childCount.minus(1)] <n FrameLayout <n LinearLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            'FrameLayout - @ImageView < LinearLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '恭喜获得奖励-×',
          matches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            'FrameLayout - @[text~=".*拿奖励"] - TextView < LinearLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.windmill.sdk.widget.InterstitialView_4012003
    {
      key: 100,
      name: '看视频-广告-关闭',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="tobid_interstitial_skip_ll"][clickable=true] > [text="关闭"][vid="tobid_interstitial_skip_text"]',
          ],
          activityIds: ['com.windmill.sdk.widget.InterstitialView_4012003'],
        },
      ],
    },
    //首页功能类
    {
      key: 400,
      name: '开启消息通知-取消',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="取消"][clickable=true] < * < [vid="bottomContainer"] -2 [vid="topContainer"] > [text="开启消息通知"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulacore.ui.H5Activity',
            'com.hellobike.atlas.business.portal.PortalActivity',
          ],
        },
      ],
    },
    {
      key: 498,
      name: '广告-奖励金-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            'View[clickable=true] > View > Image[text~="[0-9a-z]{32}"] + @TextView[clickable=true]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 499,
      name: '广告-游戏中心-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="游戏中心"] >n [text="1331192856345702400"] + @[text="NeuBVlqVn9Ix3bCeUqHdW"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
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
          anyMatches: [
            '[vid="view_bottom_logo"] >n @[text="跳过"]',
            '@[text~="跳过 [0-9]"][vid="tv_skip"][clickable=true] < [vid="on_skip_view"]',
          ],
          activityIds: ['com.hellobike.atlas.business.portal.PortalActivity'],
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
            '[vid="hbDialogLayout"] >n @[vid="actionDialogClose"]',
            '[vid="creativeContainer"] >n @[vid="actionDialogClose"]',
            '[vid="creativeContainer"] + @[vid="actionDialogClose"][clickable=true]',
          ],
          activityIds: ['com.hellobike.atlas.business.portal.PortalActivity'],
        },
      ],
    },
  ],
});
