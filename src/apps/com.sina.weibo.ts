import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 0,
      name: '连续签到',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@TextView[clickable=true] -n [text^="连续签到"]'],
          activityIds: ['.browser.WeiboBrowser'],
        },
      ],
    },
    {
      key: 1,
      name: '浏览微博 完成任务',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
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
          actionCd: 2000,
          matches: [
            '[text="浏览微博\\n完成任务"] <n [vid="root_rl"] <  RelativeLayout < [vid="floating_window"] -n * @[vid="view_recycler"]',
          ],
          activityIds: ['.MainTabActivity'],
        },
      ],
    },
    {
      key: 10,
      name: 'YY-去微博赚红包',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'app',
      activityIds: ['.browser.WeiboBrowser'],
      rules: [
        {
          matches: ['@[text="任务完成\\n返回YY"]'],
          activityIds: ['.browser.WeiboBrowser'],
        },
      ],
    },
    {
      key: 11,
      name: '星图金融-去微博签到领红包',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'app',
      rules: [
        {
          excludeMatches: ['@[text="任务完成\\n返回YY"]'],
          actionDelay: 5000,
          matches: [
            '[vid="rlThemeTitleBar"] > @[vid="titleLeft"][clickable=true] + [text="用户任务中心"][vid="titleText"]',
          ],
          activityIds: ['.browser.WeiboBrowser'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '选择通知类型-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[vid="bt_cancel"][clickable=true] <n FrameLayout < [vid="vg_bottom"] < [vid="vg_all"] < [id="android:id/content"]',
          ],
          activityIds: ['.notifyguidev2.NotifyGuideV2Activity'],
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
          matches: [
            '@[text="跳过"] < FrameLayout <n FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['.browser.WeiboBrowser', 'null'],
        },
      ],
    },
  ],
});
