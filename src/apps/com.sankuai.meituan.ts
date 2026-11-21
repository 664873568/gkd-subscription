import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 0,
      name: '赚钱中心-每日幸运号-去领号',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.meituan.android.mrn.container.MRNBaseActivity'],
      rules: [
        {
          key: 0,
          name: '恭喜获得幸运奖-开心收下-×',
          matches: [
            '@ImageView - ImageView - ViewGroup > [getChild(2).text~=".*金币已到账"] + [text="本期一等奖号码"]',
          ],
        },
        {
          key: 1,
          name: '幸运号领取成功-我知道了-×',
          matches: [
            'ImageView < @ViewGroup[clickable=true] - ViewGroup - ViewGroup - [text="等待开奖 拿188元现金"]',
          ],
        },
        {
          key: 2,
          name: '幸运号领取成功-开奖提醒我-×',
          matches: [
            'ImageView < @ViewGroup[clickable=true] - ViewGroup - [text="等待开奖 拿188元现金"]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '每日刮刮乐-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.meituan.android.mrn.container.MRNBaseActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(0).getChild(1).text^="x"] + @[getChild(0).name$="ImageView"][clickable=true] + ImageView + ImageView',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(0).getChild(1).text^="x"] + @ImageView + ImageView',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: ['@ImageView - [text="明天不来奖励失效"]'],
        },
      ],
    },
    {
      key: 2,
      name: '天天领现金-桌面登录礼',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.meituan.android.knb.core.StandardKnbActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="每日从桌面进入可提现"] +n @[text="提现"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[id="app"] > View > View > @[text="开心收下"][clickable=true] + [desc="关闭"]',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '赚钱中心-开宝箱',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.meituan.android.mrn.container.MRNStandardActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text~="点我领.*金币"] < ViewGroup <n ViewGroup <n @ViewGroup[clickable=true] - ScrollView >n [text="我的金币"]',
          ],
        },
        {
          key: 1,
          matches: [
            'ImageView < @ViewGroup[clickable=true] -n [text~="今日宝箱奖励.*万金币"] < ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup - ViewGroup >n [text="我的金币"]',
          ],
        },
      ],
    },
    //赚钱中心
    {
      key: 10,
      name: '赚钱中心-赚金币-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.meituan.android.mrn.container.MRNStandardActivity'],
      rules: [
        {
          key: 0,
          name: '去完成',
          actionDelay: 2000,
          matches: [
            '[text="去完成"] < ViewGroup <n ViewGroup  < @ViewGroup[clickable=true] < ViewGroup - ViewGroup > [text="点击合作任务赚金币"]',
          ],
          excludeMatches: [
            '[text~="点我领.*金币"] < ViewGroup <n ViewGroup < @ViewGroup[clickable=true] - ScrollView >n [text="我的金币"]',
            'ImageView < @ViewGroup[clickable=true] -n [text~="今日宝箱奖励.*万金币"] < ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup - ViewGroup >n [text="我的金币"]',
            'ScrollView - @ImageView - [text="更多金币"] < ViewGroup < ViewGroup < ViewGroup <n ViewGroup - ViewGroup >n [text="我的金币"][text="我的金币"]',
          ],
        },
        {
          key: 1,
          name: '更多金币-×',
          matches: [
            'ScrollView - @ImageView - [text="更多金币"] < ViewGroup < ViewGroup < ViewGroup <n ViewGroup - ViewGroup >n [text="我的金币"][text="我的金币"]',
          ],
        },
        {
          key: 2,
          name: '弹窗广告-×',
          matches: [
            'ImageView < @ViewGroup[clickable=true] < ViewGroup - FrameLayout >n [text="广告"]',
          ],
        },
        {
          key: 3,
          name: '返回-⊙',
          actionDelay: 5000,
          matches: [
            'ImageView < @[desc="返回"][clickable=true] <n ViewGroup < LinearLayout <n FrameLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.meituan.android.mgc.container.MGCGameActivity'],
        },
        {
          key: 4,
          name: '美团币-<',
          actionDelay: 5000,
          matches: [
            'ImageView - ImageView < @ViewGroup[clickable=true] < ViewGroup < ViewGroup < ViewGroup <n ViewGroup < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.meituan.android.mrn.container.MRNBaseActivity'],
        },
        {
          key: 11,
          name: '立即领取',
          actionDelay: 2000,
          matches: [
            '[text="立即领取"] < ViewGroup <n ViewGroup  < @ViewGroup[clickable=true] < ViewGroup - ViewGroup > [text="点击合作任务赚金币"]',
          ],
          excludeMatches: [
            '[text="去完成"] < ViewGroup <n ViewGroup  < @ViewGroup[clickable=true] < ViewGroup - ViewGroup > [text="点击合作任务赚金币"]',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '赚钱中心-看视频赚更多金币-去看视频',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.meituan.android.pt.homepage.activity.MainActivity'],
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
            duration: 200,
          },
          actionCd: 15000,
          matches: [
            '@[vid="tv_container_snapshot"] + * ViewGroup[childCount=7] >n [text="金币"] + ViewGroup > [text="万"]',
          ],
        },
        {
          key: 1,
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
          actionCd: 5000,
          anyMatches: [
            '@[vid="tv_container_snapshot"] + * [text="下滑视频"] + ViewGroup > [text="得现金"]',
            //'@[vid="tv_container_snapshot"] + * [text="1笔奖励已获得"] + ViewGroup + [text="奖励达成"]',
            //'@[vid="tv_container_snapshot"] + * [getChild(0).text="现金奖励"] + ViewGroup > [text*="看"]',
            //'@[vid="tv_container_snapshot"] + * [getChild(0).text="得现金"] + ViewGroup > [text="发放中"]',
            '@[vid="tv_container_snapshot"] + * [getChild(1).getChild(0).text~="上滑[0-9]+次"] + ViewGroup > ViewGroup > [text="得金币"]',
            //'@[vid="tv_container_snapshot"] + * [getChild(0).getChild(0).text="金币奖励"] + ViewGroup > ViewGroup > [text="发放中"]',
            //'@[vid="tv_container_snapshot"] + * [text="288"] + [text="已发放"]',
          ],
        },
        {
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
          actionCd: 5000,
          anyMatches: [
            '@[vid="tv_container_snapshot"] + * [text="上滑继续看视频"]',
            '@[vid="tv_container_snapshot"] + * [vid="msv_mount_download_button"] > [vid="msv_mount_button_card_frame"]',
          ],
        },
        {
          preKeys: [1],
          key: 3,
          action: 'back',
          actionCd: 100,
          matches: [
            '@[vid="tv_container_snapshot"] + * [getChild(0).text="明天再来"] + ViewGroup > [text="领现金"]',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '赚钱中心-看短剧得金币-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.msv.page.activity.MSVPageActivity',
        'com.meituan.android.pt.homepage.activity.MainActivity',
      ],
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
            duration: 200,
          },
          actionCd: 65000,
          matches: [
            '@[vid="tv_container_snapshot"] + * [getChild(2).getChild(1).text~="再看\\\\n[0-9]+集"] + ViewGroup > ViewGroup > [text^="得"]',
          ],
        },
        {
          key: 1,
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
          actionCd: 5000,
          anyMatches: [
            '@[vid="tv_container_snapshot"] + * [text="上滑继续看视频"]',
            '@[vid="tv_container_snapshot"] + * [vid="msv_mount_download_button"] > [vid="msv_mount_button_card_frame"]',
          ],
        },
        {
          key: 2,
          matches: [
            '[vid="tv_container_snapshot"] + * ViewGroup > @ViewGroup[clickable=true] > ViewGroup > [text="立"] + [text="即"] + [text="翻"] + [text="卡"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[vid="tv_container_snapshot"] + * @ViewGroup[clickable=true] > [text="一键翻卡"]',
          ],
        },
        {
          key: 4,
          matches: [
            '[vid="tv_container_snapshot"] + * @ViewGroup[clickable=true] > [text="继续看剧"]',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '看短剧-短剧签到',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.msv.page.activity.MSVPageActivity',
        'com.meituan.android.pt.homepage.activity.MainActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text="短剧签到"] < ViewGroup <n ViewGroup < @ViewGroup[clickable=true] - ViewGroup >n [text="金币"]',
          ],
          excludeMatches: [
            'ImageView < @ViewGroup[clickable=true] < ViewGroup - ViewGroup > [text="金币可兑换现金"]',
          ],
        },
        {
          key: 1,
          matches: [
            '[text="领取今天看剧补贴"] < ViewGroup < @ViewGroup[clickable=true] -n [text="金币可兑换现金"]',
          ],
        },
        {
          key: 2,
          matches: [
            '[text="明天继续领补贴"] < ViewGroup < @ViewGroup[clickable=true] -n [text="金币可兑换现金"]',
          ],
        },
        {
          key: 3,
          matches: [
            'ImageView < @ViewGroup[clickable=true] < ViewGroup - ViewGroup > [text="金币可兑换现金"]',
          ],
          excludeMatches: [
            '[text~=".*补贴"] < ViewGroup < @ViewGroup[clickable=true] -n [text="金币可兑换现金"]',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '打卡领金币',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          name: '补贴到账-恭喜获得-×',
          matches: [
            '@ImageView - ImageView < ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < FrameLayout < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          activityIds: [
            'com.meituan.android.mrn.container.MRNStandardActivity',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '添加*到桌面-不感兴趣',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[vid="hot_zone"] > @[vid="button_n"][clickable=true] + FrameLayout > [vid="button_y"]',
          ],
          activityIds: [
            'com.meituan.android.novel.library.page.ad.CommonTaskActivity',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '提现-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.meituan.android.mrn.container.MRNStandardActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '[text="去完成"] < @ViewGroup[clickable=true] -n [text="逛专区任务"] <n ViewGroup <n ViewGroup < ScrollView -n [text="日常任务加速提现"]',
            '[text="去完成"] < @ViewGroup[clickable=true] < ViewGroup -n [text="逛专区任务"] <n ViewGroup <n ViewGroup < ScrollView -n [text="日常任务加速提现"]',
          ],
          excludeMatches: [
            'ImageView < @ViewGroup[clickable=true] -n [text="完成任务可领"]',
            '[text="可领取"] < @ViewGroup[clickable=true] <n ViewGroup <n ViewGroup < ScrollView -n [text="日常任务加速提现"]',
            '[text="可领取"] < @ViewGroup[clickable=true] < ViewGroup <n ViewGroup <n ViewGroup < ScrollView -n [text="日常任务加速提现"]',
            'ImageView < @ViewGroup[clickable=true] < ViewGroup - ViewGroup > [text="已领取过"]',
          ],
        },
        {
          key: 1,
          actionDelay: 2000,
          matches: [
            '[text="去打开APP，返回赚现金"] < @ViewGroup[clickable=true] -n [text="完成任务可领"]',
          ],
        },
        {
          key: 2,
          actionDelay: 5000,
          matches: [
            'ImageView < @ViewGroup[clickable=true] -n [text="完成任务可领"]',
          ],
          excludeMatches: [
            '[text="去打开APP，返回赚现金"] < @ViewGroup[clickable=true] -n [text="完成任务可领"]',
          ],
        },
        {
          key: 3,
          actionDelay: 2000,
          anyMatches: [
            '[text="可领取"] < @ViewGroup[clickable=true] <n ViewGroup <n ViewGroup < ScrollView -n [text="日常任务加速提现"]',
            '[text="可领取"] < @ViewGroup[clickable=true] < ViewGroup <n ViewGroup <n ViewGroup < ScrollView -n [text="日常任务加速提现"]',
          ],
          excludeMatches: [
            'ImageView < @ViewGroup[clickable=true] < ViewGroup - ViewGroup > [text="已领取过"]',
          ],
        },
        {
          key: 4,
          matches: [
            'ImageView < @ViewGroup[clickable=true] < ViewGroup - ViewGroup > [text="已领取过"]',
          ],
        },
      ],
    },
    //看视频
    {
      key: 20,
      name: '看视频-*秒后点击广告得丰富奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.msv.page.activity.MSVPageActivity'],
      rules: [
        {
          key: 0,
          name: '点击立得丰富奖励',
          matches: [
            '[vid="msv_mount_button_card_frame"] < LinearLayout <n ViewGroup < @FrameLayout[clickable=true] < FrameLayout -n [vid="ll_task"] > [vid="ic_task"] + [text="点击立得丰富奖励"][vid="tv_task"]',
          ],
        },
        {
          key: 1,
          name: '二级广告页',
          action: 'back',
          matches: [
            '[text="随机获得惊喜红包"] - @[text="立即领取"] <n View < View < View < View <n [id="app"] < WebView < WebView < FrameLayout < LinearLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.meituan.android.knb.core.StandardKnbActivity'],
        },
        {
          key: 2,
          name: '已完成，返回领奖励-×',
          matches: [
            'ImageView < @FrameLayout[clickable=true] - [vid="ll_task"] > [vid="ic_task"] + [text="已完成，返回领奖励"][vid="tv_task"]',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-完成跳转可领取-×',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 15000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@ViewGroup[clickable=true] - ViewGroup[clickable=true] -n [text="完成跳转可领取"]',
          ],
          activityIds: ['.msv.page.activity.MSVPageActivity'],
        },
      ],
    },
    {
      key: 30,
      name: '看视频-去看看',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="去看看"] <<n * [text="广告"]'],
          activityIds: [
            'com.meituan.android.mrn.container.MRNStandardActivity',
          ],
        },
      ],
    },
    {
      key: 40,
      name: '看视频-恭喜获得奖励*×',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView <<n * [text="恭喜获得奖励"]'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 50,
      name: '看视频-<+×',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 15000,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 10000,
          matches: ['@ImageView + ImageView + TextView'],
          activityIds: ['com.ubix.ssp.open.comm.UBiXWebViewActivity'],
        },
      ],
    },
    //飞猪旅行-去美团赚20元|星图金融-去美团APP看视频
    {
      key: 399,
      name: '看视频-任务已完成',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          action: 'back',
          matches: ['@[vid="toast_container"] > [text="任务已完成"]'],
          activityIds: ['.msv.page.activity.MSVPageActivity'],
        },
        {
          key: 1,
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@[vid="iv_reader_back"][clickable=true] < [vid="scroll_back_view"]',
          ],
          activityIds: [
            'com.meituan.android.novel.library.page.reader.ReaderActivity',
          ],
        },
        {
          preKeys: [1, 2],
          key: 2,
          action: 'back',
          matches: [
            '[text="搜索"] <n View < View - @Image <<n [vid="container"] < [vid="msc_root"]',
          ],
          activityIds: [
            'com.meituan.android.novel.library.page.video.stream.NovelVideoActivity',
          ],
        },
        {
          key: 3,
          matches: [
            '@[vid="msv_back"][clickable=true] < RelativeLayout < RelativeLayout - * ImageView < @ViewGroup[clickable=true]  + [text="连续签到"]',
          ],
          activityIds: ['.msv.page.activity.MSVPageActivity'],
        },
        {
          key: 4,
          matches: [
            'ImageView < @ViewGroup[clickable=true] + ImageView + [text="无套路 一次性到账"] + ViewGroup + ViewGroup > [text="选一个免费拿"]',
          ],
          activityIds: ['.msv.page.activity.MSVPageActivity'],
        },
        {
          preKeys: [0, 1, 2, 3, 4, 5],
          key: 5,
          action: 'back',
          matches: ['@[vid="msv_back"][clickable=true] +n [vid="msv_search"]'],
          activityIds: ['.msv.page.activity.MSVPageActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 400,
      name: '发送通知-下次再说',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="下次再说"][vid="later"][clickable=true] -n [text="美团 App 想给你发送通知"] <n LinearLayout < FrameLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.meituan.android.pt.homepage.activity.MainActivity'],
        },
      ],
    },
    {
      key: 401,
      name: '新版本抢先体验-暂不升级',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="新版本抢先体验"] +n @[text="暂不升级"][vid="btn_cancel"][clickable=true] + [text="立即升级"]',
          ],
          activityIds: ['com.meituan.android.pt.homepage.activity.MainActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 500,
      name: '首页广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '[vid="fl_template_ad"] >n @[id$="ms_skipView"]',
            '[vid="fl_template_ad"] >n @View[clickable=true]',
            '[vid="fl_template_ad"] >n @[text~="跳过 [0-9]"][clickable=true]',
            '[vid="fl_template_ad"] >n @[id$="sdm_myoffer_splash_skip_area"][clickable=true] > [text~="[0-9]s \\\\| 跳过"][id$="sdm_myoffer_splash_skip"]',
          ],
          activityIds: ['.msv.page.outsidead.splashad.MSVSplashAdActivity'],
        },
      ],
    },
  ],
});
