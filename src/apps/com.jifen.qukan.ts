import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jifen.qukan',
  name: '趣头条',
  groups: [
    {
      key: 0,
      name: '首页-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="tv_splash_ad_skip"] + [vid="ll_logo_ad_bottom"]'],
          activityIds: ['null'],
        },
      ],
    },
    {
      key: 1,
      name: '限时福利-自动看视频',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="tv_countdown"] -n [vid="xad_dialog_image"]'],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
