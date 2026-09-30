import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.video',
  name: '西瓜视频',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '个人信息保护指引-同意',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="个人信息保护指引"] +n [text="不同意"] + @[text="同意"][clickable=true]',
          ],
          activityIds: ['.activity.SplashActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '发送通知-拒绝',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="是否允许“西瓜视频”发送通知"] +n @[text="拒绝"][clickable=true] + [text="始终允许"]',
          ],
          activityIds: ['.activity.SplashActivity'],
        },
      ],
    },
  ],
});
