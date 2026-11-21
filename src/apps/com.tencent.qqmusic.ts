import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.qqmusic',
  name: 'QQ音乐',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '用户协议和隐私政策概要-同意',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="同意"][clickable=true] - [getChild(0).text="用户协议和隐私政策概要"] <n LinearLayout < ScrollView < [id="android:id/content"]',
          ],
          activityIds: ['.activity.baseactivity.StartUpPrivacyPolicyActivity','null'],
        },
      ],
    },
    {
      key: 41,
      name: '流量提醒-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[desc="关闭"][vid="close_btn"][clickable=true] - * > [text="流量提醒"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
