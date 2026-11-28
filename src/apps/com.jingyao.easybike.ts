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
          actionDelay: 1000,
          matches: [
            '@[text="立即签到"][vid="tvSignInClick"][clickable=true] < LinearLayout < FrameLayout <n ViewGroup < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[vid="ivClose"][clickable=true] - RelativeLayout >n [text="签到成功，"][vid="tvAdRewardTip"]',
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
    //[id="welfare_surprise_tasks"]
    {
      key: 11,
      name: '奖励金-限时薅羊毛',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
      rules: [
        {
          key: 0,
          name: '去浏览',
          actionDelay: 2000,
          matches: [
            '[text="去浏览"] - [getChild(2).text~=".*[2-9][0-9]*"] <n @View[clickable=true] -n [text="限时薅羊毛"] < View < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            'TextView - @View < View - [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '@[text$="close_popup"][clickable=true] <n View <n [id="treasure_box_float"] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '[text="领奖励"] <n @View[clickable=true] -n [text="限时薅羊毛"] < View < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          key: 1,
          name: '领任务',
          actionDelay: 2000,
          matches: [
            '[text="领任务"] - [getChild(2).text~=".*[2-9][0-9]*"] <n @View[clickable=true] -n [text="限时薅羊毛"] < View < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            'TextView - @View < View - [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '@[text$="close_popup"][clickable=true] <n View <n [id="treasure_box_float"] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '[text~="去浏览|领奖励"] - [getChild(2).text~=".*[2-9][0-9]*"] <n @View[clickable=true] -n [text="限时薅羊毛"] < View < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          key: 2,
          name: '领奖励',
          actionDelay: 2000,
          matches: [
            '[text="领奖励"] - [getChild(2).text~=".*[2-9][0-9]*"] <n @View[clickable=true] -n [text="限时薅羊毛"] < View < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            'TextView - @View < View - [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '@[text$="close_popup"][clickable=true] <n View <n [id="treasure_box_float"] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '奖励金-限时薅羊毛-观看10秒广告领奖励金',
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
          name: '去浏览',
          matches: [
            '@[text="去浏览"][vid="btnTaskAction"] <n [vid="flAdContainer"] - [vid="ivTaskText"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '立即下载-×',
          actionDelay: 10000,
          matches: [
            '@ImageView < FrameLayout + RecyclerView + FrameLayout >n [text="立即下载"]',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '奖励金-限时薅羊毛-红包雨',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        'com.alipay.mobile.nebulacore.ui.H5Activity',
        'com.qq.e.ads.PortraitADActivity',
      ],
      rules: [
        {
          key: 0,
          name: '接红包',
          matches: [
            'Image < @View[clickable=true] < View - [text~="剩余时间.*秒"] < View < View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          key: 1,
          name: '继续领',
          actionDelay: 2000,
          matches: [
            '@[text~="继续领x[1-9]"][clickable=true] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          key: 2,
          name: '返回-<',
          actionDelay: 5000,
          matches: [
            '[text="预约下场提醒"] <n View - @[text="7f1888d8_back-white"][clickable=true] < View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
      ],
    },
    //[id="welfare_advertisement_video"]
    {
      key: 14,
      name: '奖励金-看视频赚奖励金',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
      rules: [
        {
          key: 0,
          name: '看视频',
          actionDelay: 2000,
          matches: [
            '@[text="看视频"][clickable=true] -n [text="看视频赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            'TextView - @View < View - [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '@[text$="close_popup"][clickable=true] <n View <n [id="treasure_box_float"] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
      ],
    },
    //[id="welfare_task"]
    {
      key: 15,
      name: '奖励金-做任务赚奖励金',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
      rules: [
        {
          key: 0,
          name: '去浏览',
          actionDelay: 2000,
          matches: [
            '[text="去浏览"] - [getChild(2).text~=".*[2-9][0-9]*"] <n @View[clickable=true] < View < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            'TextView - @View < View - [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '@[text$="close_popup"][clickable=true] <n View <n [id="treasure_box_float"] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '[text="去领取"] <n @View[clickable=true] < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '[text="去领取"] <n View <n @View[clickable=true] < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          key: 1,
          name: '去完成',
          actionDelay: 2000,
          anyMatches: [
            '[text="去完成"] - [getChild(0).text!~="邀.*|完成.*|电商.*"&&getChild(2).text~=".*[2-9][0-9]*"] <n @View[clickable=true] < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '[text="去完成"] - [getChild(0).text!~="邀.*|完成.*|电商.*"&&getChild(2).text~=".*[2-9][0-9]*"] <n @View[clickable=true] < View < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            'TextView - @View < View - [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '@[text$="close_popup"][clickable=true] <n View <n [id="treasure_box_float"] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '[text~="去浏览|去领取|领奖励"] - [getChild(0).text!~="邀.*|完成.*|电商.*"&&getChild(2).text~=".*[2-9][0-9]*"] <n @View[clickable=true] < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '[text~="去浏览|去领取|领奖励"] - [getChild(0).text!~="邀.*|完成.*|电商.*"&&getChild(2).text~=".*[2-9][0-9]*"] <n @View[clickable=true] < View < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          key: 2,
          name: '领任务',
          actionDelay: 2000,
          anyMatches: [
            '[text="领任务"] - [getChild(0).text!~="邀.*|完成.*|电商.*"&&getChild(2).text~=".*[2-9][0-9]*"] <n @View[clickable=true] < View < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '[text="领任务"] - [getChild(0).text!~="邀.*|完成.*|电商.*"&&getChild(2).text~=".*[2-9][0-9]*"] <n @View[clickable=true] < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            'TextView - @View < View - [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '@[text$="close_popup"][clickable=true] <n View <n [id="treasure_box_float"] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '[text~="去浏览|去完成|去领取|领奖励"] - [getChild(0).text!~="邀.*|完成.*|电商.*"&&getChild(2).text~=".*[2-9][0-9]*"] <n @View[clickable=true] < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '[text~="去浏览|去完成|去领取|领奖励"] - [getChild(0).text!~="邀.*|完成.*|电商.*"&&getChild(2).text~=".*[2-9][0-9]*"] <n @View[clickable=true] < View < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          preKeys: [0,1],
          key: 3,
          name: '二级广告页-×',
          action: 'back',
          actionDelay: 11000,
          matches: [
            '@[vid="h5_tv_nav_back_to_home"][clickable=true] < RelativeLayout <n LinearLayout < FrameLayout <n RelativeLayout < RelativeLayout <n RelativeLayout <n FrameLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.mpaas.mriver.integration.MriverActivityBase$SingletonActivity'],
        },
        {
          key: 4,
          matches: [
            '[text="微博客户端"][vid="title"] < [vid="top_center_llt"] - @[vid="left_img"][clickable=true] < [vid="main_rlt"] < [vid="top_bar"] < [vid="rl_bar"]',
          ],
          activityIds: [
            'com.hellobike.bundlelibrary.web.WebActivity',
            'com.hellobike.advertbundle.webview.AdvWebActivity',
          ],
        },
        {
          key: 5,
          name: '去领取|领奖励',
          actionDelay: 2000,
          anyMatches: [
            '[text~="去领取|领奖励"] <n @View[clickable=true] < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '[text~="去领取|领奖励"] <n View <n @View[clickable=true] < View -n [text="做任务赚奖励金"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            'TextView - @View < View - [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '@[text$="close_popup"][clickable=true] <n View <n [id="treasure_box_float"] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          key: 11,
          name: '还有*个任务-﹀',
          matches: [
            '[text~="还有.*个任务"] < @View[clickable=true] <n [id="welfare_task"] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '奖励金-做任务赚奖励金-每日领取吃饭补贴|每日领取睡觉补贴',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
      rules: [
        {
          key: 0,
          name: '领取*补贴',
          actionDelay: 2000,
          matches: [
            '[text~="领取.*补贴"] <n @View[clickable=true] < View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          key: 1,
          name: '恭喜您累积获得-开心收下-×',
          actionDelay: 2000,
          matches: [
            '@Image[clickable=true] - [getChild(0).text="恭喜您累积获得"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          key: 2,
          name: '返回-<',
          actionDelay: 5000,
          matches: [
            '@[text$="back-white"][clickable=true] < View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            '[text~="领取.*补贴"] <n @View[clickable=true] < View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '@Image[clickable=true] - [getChild(0).text="恭喜您累积获得"] < View <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
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
      activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
      rules: [
        {
          key: 0,
          name: '点击领',
          actionDelay: 2000,
          matches: [
            '@View[clickable=true] < [id="treasure_box_float"] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          excludeMatches: [
            'TextView - @View < View - [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '@[text$="close_popup"][clickable=true] <n View <n [id="treasure_box_float"] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          key: 1,
          name: '看视频领',
          actionMaximum: 1,
          actionDelay: 2000,
          matches: [
            '[text~="选.*奖励金"] < @View[clickable=true] - [text="看视频领"] <n View <n [id="treasure_box_float"] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
        {
          key: 2,
          name: '请选择宝箱奖励-×',
          actionDelay: 5000,
          matches: [
            '@[text$="close_popup"][clickable=true] <n View <n [id="treasure_box_float"] <n View <n View < [id="app"] <n WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '奖励金-看广告翻倍',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.alipay.mobile.nebulacore.ui.H5Activity',
        'com.beizi.ad.v2.activity.BeiZiNewRewardVideoActivity',
        'com.qq.e.ads.PortraitADActivity',
      ],
      rules: [
        {
          key: 0,
          name: '点击广告翻倍领',
          actionDelay: 1000,
          anyMatches: [
            '@[text="翻倍领取"] <n LinearLayout <n RelativeLayout < RelativeLayout <n RelativeLayout < [id="android:id/content"]',
            '[text="下个视频 "] < @RelativeLayout[clickable=true] <n RelativeLayout < RelativeLayout <n RelativeLayout < [id="android:id/content"]',
            '@[text="看广告赚奖励金"] <n RelativeLayout < FrameLayout <n LinearLayout < RelativeLayout < RelativeLayout < RelativeLayout < [id="android:id/content"]',
            '[text="点击广告翻倍领"] < @LinearLayout <n FrameLayout <n FrameLayout <n LinearLayout <n FrameLayout <n RelativeLayout < RelativeLayout < [id="android:id/content"]',
            '[text="下一个视频"] < @LinearLayout[clickable=true] < FrameLayout < FrameLayout <n LinearLayout <n FrameLayout <n RelativeLayout < RelativeLayout < [id="android:id/content"]',
            '[vid="wklayout"] < @LinearLayout[clickable=true] <n FrameLayout < FrameLayout < FrameLayout < FrameLayout < ViewPager < FrameLayout < FrameLayout < FrameLayout <n RelativeLayout < RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '二级广告页-×',
          matches: [
            'View - @ImageView[clickable=true] - TextView < FrameLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          name: '立即下载-×',
          actionDelay: 11000,
          matches: [
            '[text="立即下载"] <n @FrameLayout < FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '领奖成功，已到账-×',
          anyMatches: [
            '@[vid="ivClose"][clickable=true] <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
            '@[vid="rewardV2Close"][clickable=true] <n RelativeLayout < RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text="翻倍领取"] <n LinearLayout <n RelativeLayout < RelativeLayout <n RelativeLayout < [id="android:id/content"]',
            '[text="下个视频 "] < @RelativeLayout[clickable=true] <n RelativeLayout < RelativeLayout <n RelativeLayout < [id="android:id/content"]',
            '@[text="看广告赚奖励金"] <n RelativeLayout < FrameLayout <n LinearLayout < RelativeLayout < RelativeLayout < RelativeLayout < [id="android:id/content"]',
            '[text="点击广告翻倍领"] < @LinearLayout <n FrameLayout <n FrameLayout <n LinearLayout <n FrameLayout <n RelativeLayout < RelativeLayout < [id="android:id/content"]',
            '[text="下一个视频"] < @LinearLayout[clickable=true] < FrameLayout < FrameLayout <n LinearLayout <n FrameLayout <n RelativeLayout < RelativeLayout < [id="android:id/content"]',
            '[vid="wklayout"] < @LinearLayout[clickable=true] <n FrameLayout < FrameLayout < FrameLayout < FrameLayout < ViewPager < FrameLayout < FrameLayout < FrameLayout <n RelativeLayout < RelativeLayout <n RelativeLayout < [id="android:id/content"]',
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
          name: '开玩',
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
          name: '退出-⊙',
          action: 'back',
          actionDelay: 60000,
          matches: [
            '@[vid="float_close"] < ViewGroup <n LinearLayout < RelativeLayout < [vid="float_change_view"][clickable=true] <n RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.chengle.lib.game.web.WebGameActivity'],
        },
        {
          key: 2,
          actionDelay: 1000,
          anyMatches: [
            '@[text="不用了，退出游戏"][vid="stay_exit"][clickable=true] -n [text="尝试下这些游戏吧～"][vid="stay_title"] < LinearLayout < [id="android:id/content"]',
            '@[text="评完啦 ，退出游戏"][vid="rate_sure"][clickable=true] -n [text="快给这款游戏评个分吧～告诉其他骑行侠"][vid="rate_title"] < LinearLayout < [id="android:id/content"]',
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
          name: '上滑',
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
          actionMaximum: 3,
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
          name: '开玩',
          anyMatches: [
            '[text="开玩"] <n View <n @View[index=1][clickable=true] - [getChild(1).getChild(0).text="再玩2个大家都在玩各60秒"] < View <n View < View <n View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
            '[text="开玩"] <n View <n @View[index=2][clickable=true] - [getChild(1).getChild(0).text="再玩1个大家都在玩60秒"] < View <n View < View <n View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
        {
          preKeys: [1],
          key: 2,
          name: '退出-⊙',
          action: 'back',
          actionDelay: 60000,
          matches: [
            '@[vid="float_close"] < ViewGroup <n LinearLayout < RelativeLayout < [vid="float_change_view"][clickable=true] <n RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.chengle.lib.game.web.WebGameActivity'],
        },
        {
          preKeys: [2],
          key: 3,
          anyMatches: [
            '@[text="不用了，退出游戏"][vid="stay_exit"][clickable=true] -n [text="尝试下这些游戏吧～"][vid="stay_title"] < LinearLayout < [id="android:id/content"]',
            '@[text="评完啦 ，退出游戏"][vid="rate_sure"][clickable=true] -n [text="快给这款游戏评个分吧～告诉其他骑行侠"][vid="rate_title"] < LinearLayout < [id="android:id/content"]',
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
            '@[text="一键领取"][clickable=true] < View <n View <n View <n View < View <n View <n View < [id="app"] < WebView < WebView <n FrameLayout < [vid="h5_pc_container"]',
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
    //看视频-com.beizi.ad.v2.activity.BeiZiNewRewardVideoActivity
    {
      key: 30,
      name: '看视频-关闭',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.beizi.ad.v2.activity.BeiZiNewRewardVideoActivity'],
      rules: [
        {
          key: 0,
          name: '观看*秒广告领取奖励/*秒后可领取奖励',
          actionDelay: 1000,
          matches: [
            '@[text~="提前领奖|继续领奖"] <n LinearLayout <n LinearLayout < LinearLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '残忍离开',
          actionDelay: 5000,
          matches: [
            '@[text="残忍离开"][clickable=true] <n LinearLayout < RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '关闭广告',
          matches: [
            '@[text="关闭广告"][clickable=true] <n LinearLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '关闭',
          matches: [
            '@TextView[text~="(立即领取 ｜ 关闭广告)|(已经获得奖励 ｜ 关闭)"][clickable=true] < LinearLayout <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text~="观看.*秒广告领取奖励"][clickable=true] < LinearLayout <n RelativeLayout <n RelativeLayout < [id="android:id/content"]',
            '@[text="关闭广告"][clickable=true] <n LinearLayout <n RelativeLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.hellobike.homepage.dialog.welfare.flow.RewardProxyActivity
    {
      key: 40,
      name: '看视频-×hellobike',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.hellobike.homepage.dialog.welfare.flow.RewardProxyActivity'],
      rules: [
        {
          key: 0,
          matches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout <n FrameLayout <n FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.qq.e.ads.PortraitADActivity
    {
      key: 50,
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
    {
      key: 51,
      name: '看视频-微信-阅读小说 可获得奖励',
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
          name: '或向下滑动继续试读',
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 1000,
          },
          actionCd: 1000,
          matches: [
            '[text="或向下滑动继续试读"] <n LinearLayout <n FrameLayout < @RecyclerView <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text="继续体验15秒得奖励"] < LinearLayout < FrameLayout <n FrameLayout < FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '继续体验15秒得奖励',
          matches: [
            '@[text="继续体验15秒得奖励"] < LinearLayout < FrameLayout <n FrameLayout < FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '恭喜已经获得奖励！-×',
          matches: [
            '@[text="恭喜已经获得奖励！"] < LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text="可获得奖励"] - [text="阅读小说"] < @LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 52,
      name: '看视频-×qq',
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
          name: '奖励将于*秒后发放',
          anyMatches: [
            '[text~=".*更快拿奖"] < @FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text~=".*提前拿奖"] <n LinearLayout < @FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text="扭动/点击"] <n LinearLayout <n @FrameLayout <n FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '残忍离开|放弃福利',
          anyMatches: [
            '@[text="残忍离开"] <n FrameLayout < FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text="放弃福利"] < @FrameLayout <n LinearLayout < FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 2,
          name: '*秒后点击广告*，即可*得奖*',
          matches: [
            '@[text~="点击广告.*拿奖励"] < FrameLayout < FrameLayout < FrameLayout < LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text~=".*秒后点击广告.*，即可.*得奖.*"] < @FrameLayout < FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 3,
          name: '二级广告页-×',
          actionDelay: 5000,
          anyMatches: [
            'View - @ImageView[clickable=true] - TextView < FrameLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
            'View - ProgressBar - @ImageView[clickable=true] - TextView < FrameLayout < LinearLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 4,
          name: '恭喜获得奖励-×',
          actionDelay: 1000,
          anyMatches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout <n FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout <n LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout <n LinearLayout <n FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text^="奖励将于"] < LinearLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '@[text^="奖励将于"] < LinearLayout < LinearLayout < LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '@[text^="奖励将于"] < LinearLayout < LinearLayout < LinearLayout <n FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text~=".*点击广告.*，即可.*得奖.*"] < @FrameLayout < FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text~="立即安装|立即体验|去微信看看"] <n @FrameLayout <n * <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text="扭动/点击"] <n LinearLayout <n @FrameLayout <n FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 5,
          name: '滑动/点击了解更多|扭动/点击*|点击下载或打开第三方应用-×',
          anyMatches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout <n FrameLayout < FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout < LinearLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text~=".*更快拿奖"] < @FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text~=".*提前拿奖"] <n LinearLayout < @FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text~="立即安装|立即体验|去微信看看"] <n @FrameLayout <n * <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            '[text="扭动/点击"] <n LinearLayout <n @FrameLayout <n FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 6,
          name: '立即安装|立即体验|去微信看看|扭动/点击*-×',
          anyMatches: [
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout <n FrameLayout <n FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
            'ImageView[width=height][index=parent.childCount.minus(1)] < @FrameLayout < FrameLayout < FrameLayout <n FrameLayout < FrameLayout < RelativeLayout < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 8,
          name: '二级广告页-×打开小程序',
          matches: [
            'View - @ImageView[clickable=true] - TextView[text="打开小程序"] < FrameLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
          ],
        },
        {
          key: 9,
          name: '浏览页面*秒后即可获得奖励',
          matches: [
            '@[text="恭喜获得奖励！"] < LinearLayout <n LinearLayout < RelativeLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
            '@ImageView[width=height][index=parent.childCount.minus(1)][clickable=true] <n LinearLayout < RelativeLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text="秒后即可获得奖励"] - [text~="[0-9]+"] - [text="浏览页面"] < @LinearLayout <n LinearLayout < RelativeLayout < FrameLayout < FrameLayout <n LinearLayout < [id="android:id/content"]',
          ],
        },
      ],
    },
    //看视频-com.windmill.sdk.widget.InterstitialView_401200*
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
          activityIds: ['com.windmill.sdk.widget.InterstitialView'],
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
