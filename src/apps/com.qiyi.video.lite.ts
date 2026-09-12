import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qiyi.video.lite',
  name: '爱奇艺极速版',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '欢迎使用爱奇艺极速版-同意并继续',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="欢迎使用爱奇艺极速版"][vid="title"] < * + [vid="btn_layout"] > [text="不同意"][vid="cancel_btn"] + @[text="同意并继续"][vid="confirm_btn"][clickable=true]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
