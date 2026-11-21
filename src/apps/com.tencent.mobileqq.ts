import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '用户协议及隐私政策概要-同意',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="同意"][vid="dialogRightBtn"][clickable=true] <n LinearLayout -n [text="用户协议及隐私政策概要"][vid="dialogTitle"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
    {
      key: 41,
      name: '登录',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="登录"][vid="btn_login"][clickable=true] <n LinearLayout <n FrameLayout < FrameLayout < RelativeLayout < [id="android:id/content"]',
          ],
          activityIds: ['.activity.LoginActivity'],
        },
      ],
    },
  ],
});
