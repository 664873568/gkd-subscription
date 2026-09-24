import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.litetao',
  name: '淘宝特价版',
  groups: [
    {
      key: 10,
      name: '星图金融-去淘宝特价版逛逛',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          actionMaximum: 2,
          matches: [
            '[vid="main_frame_container"] > [vid="id_content"] > [vid="homepage_root_layout"] > [vid="home_swipe_refresh"]',
          ],
          activityIds: ['com.taobao.ltao.maintab.MainFrameActivity'],
        },
      ],
    },
  ],
});
