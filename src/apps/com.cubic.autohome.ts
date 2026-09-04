import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cubic.autohome',
  name: '汽车之家',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '开启通知-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="开启通知，重要消息不遗漏"][vid="tv_title"] +n @[vid="re_close"][clickable=true] > [vid="page_operation_icon"]',
          ],
          activityIds: ['null'],
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
            '@[text="跳过"] <<n * [text="活动"]',
            '@[text="跳过"][vid="ad_splash_skip"] <<n * [text="广告"][vid="ad_splash_label"]',
          ],
          activityIds: ['.LogoActivity'],
        },
      ],
    },
  ],
});
