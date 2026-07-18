import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dz.hmjc',
  name: '河马剧场',
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
          matches: ['@[text="跳过"] + [text~="\\\\d"]'],
          activityIds: ['com.dz.business.main.ui.MainActivity'],
        },
      ],
    },
  ],
});
