import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.litetao',
  name: '淘宝特价版',
  groups: [
    {
      key: 10,
      name: '星图金融-去淘宝特价版逛逛',
      forcedTime: 60000,
      matchRoot: true,
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
          matches: [
            '[vid="main_frame_container"] > [vid="id_content"] > [vid="homepage_root_layout"] > [vid="home_swipe_refresh"]',
          ],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@[text="关闭"][clickable=true] < View +n [text="开心收下"]',
          ],
          activityIds: ['com.taobao.themis.container.app.TMSActivity'],
        },
      ],
    },
  ],
});
