import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingyao.easybike',
  name: '哈啰',
  groups: [
    //奖励金
    {
      key: 0,
      name: '奖励金-签到',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="签到"][vid="tvSignInClick"] + [vid="btnSignInClickWithAds"] > @[text~="点击广告再领[0-9]+奖励金"][vid="tvSignInClickWithAds"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 1,
      name: '奖励金-任务完成-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="ivClose"][clickable=true] - [vid="rlDialogContent"] [text="任务完成，"][vid="tvAdRewardTip"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 2,
      name: '奖励金-领奖成功-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: [
            '[text="点击广告 再得"] < @[vid="btnRewardClickWithAds"] <2 [vid="adViewBannerLayout"] -2 [vid="ll_tips"] [text="领奖成功，"][vid="tvAdRewardTip"]',
          ],
          matches: [
            '@[vid="ivClose"][clickable=true] - [vid="rlDialogContent"] [text="领奖成功，"][vid="tvAdRewardTip"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 3,
      name: '领奖成功-点击广告 再得',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="点击广告 再得"] < @[vid="btnRewardClickWithAds"] <2 [vid="adViewBannerLayout"] -2 [vid="ll_tips"] [text="领奖成功，"][vid="tvAdRewardTip"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 4,
      name: '浏览广告，领超多奖励金-去浏览',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
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
            '@ImageView < FrameLayout + RecyclerView + FrameLayout [text="立即下载"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 5,
      name: '浏览广告，领超多奖励金-去浏览-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
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
            'View - @ImageView[clickable=true] - TextView < FrameLayout + WebView',
          ],
          activityIds: ['com.qq.e.ads.ADActivity'],
        },
      ],
    },
    {
      key: 6,
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
      key: 7,
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
      name: '游戏中心-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="NeuBVlqVn9Ix3bCeUqHdW"] - [text="1331192856345702400"] <<n [text="游戏中心"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
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
      key: 499,
      name: '广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@TextView[clickable=true] - [text="369c4aa0a0854d4cb5c262736c29adfa"]',//去抢购
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
            '@[text="跳过"] <<n * [vid="view_bottom_logo"]',
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
            '@[vid="actionDialogClose"] <<n * [vid="hbDialogLayout"]',
            '@[vid="actionDialogClose"] <<n * [vid="creativeContainer"]',
          ],
          activityIds: ['com.hellobike.atlas.business.portal.PortalActivity'],
        },
      ],
    },
  ],
});
