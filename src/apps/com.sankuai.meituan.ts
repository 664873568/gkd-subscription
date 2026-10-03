import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 1,
      name: '每日刮刮乐-去完成',
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
    //赚钱中心
    {
      key: 10,
      name: '浏览App-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.meituan.android.mrn.container.MRNStandardActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[getChild(1).text="点击合作任务赚金币"] + ViewGroup > @ViewGroup[clickable=true] > ViewGroup > ViewGroup + ViewGroup > [text="去完成"]',
          ],
        },
        {
          key: 1,
          excludeMatches: [
            '[getChild(1).text="点击合作任务赚金币"] + ViewGroup > @ViewGroup[clickable=true] > ViewGroup > ViewGroup + ViewGroup > [text="去完成"]',
          ],
          matches: [
            '[getChild(1).text="点击合作任务赚金币"] + ViewGroup > @ViewGroup[clickable=true] > ViewGroup > ViewGroup + ViewGroup > [text="立即领取"]',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '看视频赚更多金币',
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
      key: 12,
      name: '看短剧，额外得金币',
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
      key: 13,
      name: '看短剧-短剧签到',
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
            '[vid="tv_container_snapshot"] + * @ViewGroup[clickable=true] > ViewGroup > ViewGroup > [text="短剧签到"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[vid="tv_container_snapshot"] + * @ViewGroup[clickable=true] > ViewGroup > ViewGroup > [text="领取今天看剧补贴"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[vid="tv_container_snapshot"] + * @ViewGroup[clickable=true] > ViewGroup > ViewGroup > [text="明天继续领补贴"]',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '添加*到桌面-不感兴趣',
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
    //看视频
    {
      key: 20,
      name: '看视频-恭喜获得奖励*×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView <<n * [text="恭喜获得奖励"]'],
          activityIds: ['com.qq.e.ads.PortraitADActivity'],
        },
      ],
    },
    {
      key: 21,
      name: '看视频-去看看',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
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
      key: 22,
      name: '看视频-点击广告得',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="立即打开"] <<n * [text^="点击广告得"]'],
          activityIds: ['.msv.page.activity.MSVPageActivity'],
        },
      ],
    },
    {
      key: 23,
      name: '看视频-<+×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 15000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 10000,
          matches: ['@ImageView + ImageView + TextView'],
          activityIds: ['com.ubix.ssp.open.comm.UBiXWebViewActivity'],
        },
      ],
    },
    {
      key: 24,
      name: '看视频-完成跳转可领取-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 15000,
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
    //飞猪旅行-去美团赚20元|星图金融-去美团APP看视频
    {
      key: 39,
      name: '看视频-任务已完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'app',
      activityIds: ['.msv.page.activity.MSVPageActivity'],
      rules: [
        {
          key: 0,
          action: 'back',
          matches: ['@[vid="toast_container"] > [text="任务已完成"]'],
        },
        {
          key: 1,
          action: 'back',
          actionDelay: 10000,
          matches: [
            'ViewPager > FrameLayout > RelativeLayout > RelativeLayout > @[vid="msv_back"][clickable=true]',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '新版本抢先体验-暂不升级',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="新版本抢先体验"] +n @[text="暂不升级"][vid="btn_cancel"][clickable=true] + [text="立即升级"]',
          ],
          activityIds: [
            'com.meituan.android.pt.homepage.activity.MainActivity',
          ],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
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
