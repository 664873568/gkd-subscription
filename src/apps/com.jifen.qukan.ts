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
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text$="自动看视频"][vid="tv_countdown"] -n [vid="xad_dialog_image"]',
          ],
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
            '[vid="img_splash_ad"] >n @[desc="CLOSE_AD"][vid="fanti_ad_count_and_skip_container_ex"][clickable=true] > [vid="fanti_ad_count_and_skip_container"] > [text^="跳过"][vid="fanti_ad_txt_skip"] + [text~="[0-9]"][vid="fanti_ad_txt_count_down"]',
          ],
          activityIds: ['null', 'com.jifen.qkbase.main.MainActivity'],
        },
      ],
    },
  ],
});
