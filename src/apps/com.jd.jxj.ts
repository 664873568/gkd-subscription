import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jxj',
  name: '京粉',
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
          matches: [
            '@[text~="[0-9]s跳过"][vid="btn_skip"][clickable=true] - [vid="iv_launch_ad"]',
          ],
          activityIds: ['.modules.main.SlidingTabActivity'],
        },
      ],
    },
  ],
});
