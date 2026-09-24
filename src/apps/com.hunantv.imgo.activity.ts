import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hunantv.imgo.activity',
  name: '芒果TV',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '首页-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="个人信息保护政策"][vid="tvTitle"] +n [vid="btnLayout"] > [vid="ll_two_buttons"] > [vid="rightBtnFrame"] > @[text="同意并继续"][vid="tvRightBtn"][clickable=true]',
          ],
          activityIds: ['com.mgtv.ui.ad.AdSchemaSplashActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[text~="跳过 [0-9]"][clickable=true]',
            '@[text="跳过"][vid="mgmi_ad_skip_text"] <n [vid="layout_boot_skip"]',
          ],
          activityIds: ['com.mgtv.ui.ad.AdSchemaSplashActivity'],
        },
      ],
    },
  ],
});
