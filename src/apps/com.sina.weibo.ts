import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sina.weibo',
  name: '微博',
  groups: [
    {
      key: 0,
      name: '连续签到-任务完成 返回YY',
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'app',
      activityIds: ['.browser.WeiboBrowser'],
      rules: [
        {
          key: 0,
          matches: ['@TextView[clickable=true] -n [text^="连续签到"]'],
        },
        {
          key: 1,
          matches: ['@[text="任务完成\\n返回YY"]'],
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
            '@[text="跳过"] < * - [text="广告"]',
            '@[text="跳过"] < * - * > [text="广告"]',
          ],
          activityIds: ['.browser.WeiboBrowser', 'null'],
        },
      ],
    },
  ],
});
