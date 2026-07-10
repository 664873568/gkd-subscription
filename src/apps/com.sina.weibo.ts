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
          matches: ['@TextView - CheckBox - [text^="连续签到"]'],
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
          matches: ['@[text="任务完成\\n返回YY"] <<n [text="用户任务中心"]'],
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
          matches: ['@TextView - CheckBox - [text^="连续签到"]'],
          activityIds: ['.browser.WeiboBrowser'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="任务完成\\n返回YY"] <<n [text="用户任务中心"]'],
          activityIds: ['.browser.WeiboBrowser'],
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
          matches: ['@[text="跳过"] <<n * [text="广告"]'],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
