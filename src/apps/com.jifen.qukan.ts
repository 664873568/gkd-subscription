import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jifen.qukan',
  name: '趣头条',
  groups: [
    {
      key: 0,
      name: '限时福利-自动看视频',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text$="自动看视频"][vid="tv_countdown"] -n [vid="xad_dialog_image"]'],
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
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text^="跳过"] <<n [vid="img_splash_ad"]',
            '@[vid="tv_splash_ad_skip"] <<n [vid="img_splash_ad"]',
            '@[vid="tv_splash_ad_skip"] <<n [vid="img_splash_ad"]',
            '@[text^="跳过"][vid="fanti_ad_txt_skip"] <<n [vid="img_splash_ad"]',
          ],
          activityIds: ['com.jifen.qkbase.main.MainActivity', 'null'],
        },
      ],
    },
  ],
});
