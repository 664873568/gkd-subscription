import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.duowan.kiwi',
  name: '虎牙直播',
  groups: [
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
            '@[text="跳过"] <<n * [text="广告"]',
            '@[text="跳过"][vid="skip_time"] <<n [vid="ad_aplash"]',
          ],
          activityIds: ['.homepage.Homepage'],
        },
      ],
    },
  ],
});
