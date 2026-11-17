import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hunantv.imgo.activity',
  name: '芒果TV',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '个人信息保护政策-同意并继续',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="个人信息保护政策"][vid="tvTitle"] +n [vid="btnLayout"] > [vid="ll_two_buttons"] > [vid="rightBtnFrame"] > @[text="同意并继续"][vid="tvRightBtn"][clickable=true]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[text="跳过"][vid="mgmi_ad_skip_text"] <n [vid="layout_boot_skip"]',
            '@[text*="跳过"][clickable=true] < View < View <n View < View < View < View < WebView < WebView < RelativeLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
          ],
          activityIds: ['com.mgtv.ui.ad.AdSchemaSplashActivity'],
        },
      ],
    },
  ],
});
