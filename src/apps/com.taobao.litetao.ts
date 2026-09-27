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
      activityIds: ['com.taobao.ltao.maintab.MainFrameActivity'],
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 5000,
          matches: [
            '[vid="main_frame_container"] > [vid="id_content"] > [vid="homepage_root_layout"] > [vid="home_swipe_refresh"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 1,
          action: 'back',
          actionCd: 100,
          matches: [
            '[vid="main_frame_container"] > [vid="id_content"] > [vid="homepage_root_layout"] > [vid="home_swipe_refresh"]',
          ],
        },
      ],
    },
  ],
});
