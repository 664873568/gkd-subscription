import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jifen.qukan',
  name: '趣头条',
  groups: [
    {
      key: 0,
      name: '限时福利-*s后自动看视频',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[vid="iv_close"] +n @[text~="[0-9]s后自动看视频"][vid="tv_countdown"][clickable=true] + [vid="ll_bootom"] > [text="直接签到"][vid="tv_sign_derect"]',
          ],
          activityIds: ['com.jifen.qkbase.main.MainActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '[vid="img_splash_ad"] + @[text~="跳过 [0-9]s"][vid="tv_splash_ad_skip"][clickable=true]',
            '[vid="img_splash_ad"] >n @[desc="CLOSE_AD"][vid="fanti_ad_count_and_skip_container_ex"][clickable=true] > [vid="fanti_ad_count_and_skip_container"] > [text="跳过"][vid="fanti_ad_txt_skip"] + [text~="[0-9]"][vid="fanti_ad_txt_count_down"]',
          ],
          activityIds: ['com.jifen.qkbase.main.MainActivity'],
        },
      ],
    },
  ],
});
