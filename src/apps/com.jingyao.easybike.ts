import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingyao.easybike',
  name: '哈啰',
  groups: [
    //奖励金
    {
      key: 0,
      name: '奖励金-立即签到',
      matchDelay: 1000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        'com.alipay.mobile.nebulacore.ui.H5Activity',
        'com.hellobike.atlas.business.portal.PortalActivity',
      ],
      rules: [
        {
          matches: [
            '[vid="magicBoxSignIn"] + * @[text="立即签到"][vid="tvSignInClick"][clickable=true]',
          ],
        },
        {
          actionDelay: 1000,
          matches: [
            '@[vid="ivClose"][clickable=true] - [vid="rlDialogContent"] >n [text="签到成功，"][vid="tvAdRewardTip"]',
          ],
        },
        {
          actionDelay: 1000,
          matches: [
            '[vid="magicBoxSignIn"] + * >n [text~="点击广告再领[0-9]+奖励金"][vid="tvSignInClickWithAds"] <n [vid="btnSignInClickWithAds"] <n * + [vid="adViewBanner"] >n @LinearLayout[clickable=true]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 1,
      name: '奖励金-领奖成功',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
      rules: [
        {
          actionDelay: 1000,
          matches: [
            '[text="点击广告 再得"] < @[vid="btnRewardClickWithAds"] <2 [vid="adViewBannerLayout"] -2 [vid="ll_tips"] >n [text="领奖成功，"][vid="tvAdRewardTip"]',
          ],
        },
        {
          actionDelay: 1000,
          excludeMatches: [
            '[text="点击广告 再得"] < @[vid="btnRewardClickWithAds"] <2 [vid="adViewBannerLayout"] -2 [vid="ll_tips"] >n [text="领奖成功，"][vid="tvAdRewardTip"]',
          ],
          matches: [
            '@[vid="ivClose"][clickable=true] - [vid="rlDialogContent"] [text="领奖成功，"][vid="tvAdRewardTip"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '浏览广告，领超多奖励金-去浏览',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 1000,
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
      key: 3,
      name: '奖励金-二级广告页-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: [
            '@[vid="left_img"][clickable=true] < [vid="main_rlt"] < [vid="top_bar"] < [vid="rl_bar"] + * [id="mf-app"]',
          ],
          matches: [
            '@[vid="left_img"][clickable=true] + [vid="top_center_llt"] [vid="title"]',
          ],
          activityIds: [
            'com.hellobike.bundlelibrary.web.WebActivity',
            'com.hellobike.advertbundle.webview.AdvWebActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '奖励金-任务完成-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="ivClose"][clickable=true] - [vid="rlDialogContent"] >n [text="任务完成，"][vid="tvAdRewardTip"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    //做任务赚奖励金
    {
      key: 5,
      name: '奖励金-看视频领大量奖励金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      activityIds: ['com.beizi.ad.v2.activity.BeiZiNewRewardVideoActivity'],
      rules: [
        {
          //观看*秒广告领取奖励
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
    {
      key: 9,
      name: '奖励金-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@View[clickable=true] + [text="奖励金"]'],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    //游戏中心
    {
      key: 10,
      name: '游戏中心-热门推荐/新游速递',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          anyMatches: [
            '[text="开玩"] <n View <n @View[index=1][clickable=true] - * [text="再玩2个热门推荐各60秒"]',
            '[text="开玩"] <n View <n @View[index=2][clickable=true] -n * [text="再玩1个热门推荐60秒"]',
            '@View[index=0][clickable=true] < ListView < * - * [text="再玩2个新游速递各60秒"]',
            '@View[index=1][clickable=true] <n ListView < * - * [text="再玩1个新游速递60秒"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 60000,
          matches: [
            '@[vid="float_change_view"][clickable=true] >n ViewGroup > [vid="float_close"]',
          ],
          activityIds: ['com.chengle.lib.game.web.WebGameActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          anyMatches: [
            '[text="尝试下这些游戏吧～"][vid="stay_title"] +n @[text="不用了，退出游戏"][vid="stay_exit"][clickable=true] + [text="取消"][vid="stay_cancel"]',
            '[text="快给这款游戏评个分吧～告诉其他骑行侠"][vid="rate_title"] +n [text="评完啦 ，退出游戏"][vid="rate_sure"][clickable=true] + @[text="暂不评论"][vid="rate_cancel"]',
          ],
          activityIds: ['com.chengle.lib.game.web.WebGameActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '游戏中心-大家都在玩',
      matchRoot: true,
      matchDelay: 2000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'swipe',
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
          actionCd: 200,
          actionMaximum: 3,
          matches: [
            '[id="game-navbar"] + @View >n [text="新游速递"] + [text="任务已完成，获得45金币，明天再来吧"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          anyMatches: [
            '[text="开玩"] <n View <n @View[index=1][clickable=true] - * [text="再玩2个大家都在玩各60秒"]',
            '[text="开玩"] <n View <n @View[index=2][clickable=true] -n * [text="再玩1个大家都在玩60秒"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          action: 'back',
          actionDelay: 60000,
          matches: [
            '@[vid="float_change_view"][clickable=true] >n ViewGroup > [vid="float_close"]',
          ],
          activityIds: ['com.chengle.lib.game.web.WebGameActivity'],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          anyMatches: [
            '[text="尝试下这些游戏吧～"][vid="stay_title"] +n @[text="不用了，退出游戏"][vid="stay_exit"][clickable=true] + [text="取消"][vid="stay_cancel"]',
            '[text="快给这款游戏评个分吧～告诉其他骑行侠"][vid="rate_title"] +n [text="评完啦 ，退出游戏"][vid="rate_sure"][clickable=true] + @[text="暂不评论"][vid="rate_cancel"]',
          ],
          activityIds: ['com.chengle.lib.game.web.WebGameActivity'],
        },
      ],
    },
    {
      key: 12,
      name: '游戏中心-签到',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
      rules: [
        {
          key: 0,
          action: 'swipe',
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
            '[id="game-navbar"] + @View >n [text="大家都在玩"] + [text="任务已完成，获得20金币，明天再来吧"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: ['[text="游戏中心"] >n [text="一键领取"][clickable=true]'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 1000,
          matches: [
            '[text="游戏中心"] >n @View[clickable=true] > [text="oXpz4laBxppU0AAAAASUVORK5CYII="] + [text="签到"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          actionDelay: 1000,
          matches: [
            '[text="游戏中心"] >n @View[clickable=true] > [text~="恭喜获得 [0-9]+ 金币"] + [text="好的"]',
          ],
        },
      ],
    },
    //看视频-com.qq.e.ads.PortraitADActivity
    {
      key: 20,
      name: '看视频-微信-提前拿奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text*="微信"] <n FrameLayout - [text="提前拿奖励"] - [text~="试看[0-9]+ 秒短剧"]',
            '@[text*="微信"] <n FrameLayout - [text="提前拿奖励"] - [text~="玩[0-9]+ 秒小游戏"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-微信-恭喜获得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: [
            'ImageView < @FrameLayout + FrameLayout >2 ImageView + FrameLayout [text*="微信"]',
          ],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    //看视频-com.windmill.sdk.widget.InterstitialView_4012003
    {
      key: 100,
      name: '看视频-广告-关闭',
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
      name: '首页广告-×',
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
