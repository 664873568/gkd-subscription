import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 0,
      name: '连续签到-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
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
      name: '任务完成 返回YY',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text="任务完成\\n返回YY"]'],
          activityIds: ['.browser.WeiboBrowser'],
        },
      ],
    },
    {
      key: 2,
      name: '任务完成 返回YY-连续签到-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: ['@TextView[clickable=true] -n [text^="连续签到"]'],
          activityIds: ['.browser.WeiboBrowser'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="任务完成\\n返回YY"]'],
          activityIds: ['.browser.WeiboBrowser'],
        },
      ],
    },
    {
      key: 3,
      name: '浏览微博 完成任务',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'swipe',
          actionMaximum: 3,
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
          matches: [
            '@[vid="root_rl"] > [text="浏览微博\\n完成任务"]',
          ],
          activityIds: ['.MainTabActivity'],
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
          matches: ['@[text="跳过"] < FrameLayout - [text="广告"]'],
          activityIds: ['.browser.WeiboBrowser', 'null'],
        },
      ],
    },
  ],
});
