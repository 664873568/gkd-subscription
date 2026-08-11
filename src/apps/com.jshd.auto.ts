import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jshd.auto',
  name: '自动按键点击',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '好评-不再提醒',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[vid="iv_close"][clickable=true] +n * @[text="不再提醒"][vid="tv_refuse"][clickable=true]',
          ],
          activityIds: ['.ui.SplashActivity'],
        },
      ],
    },
  ],
});
