import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ximalaya.ting.lite',
  name: '喜马拉雅极速版',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '个人信息保护提示-同意',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="同意"][vid="host_btn_agree"][clickable=true] -n [text="个人信息保护提示"][vid="host_tv_title"] < RelativeLayout < FrameLayout < [id="android:id/content"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
