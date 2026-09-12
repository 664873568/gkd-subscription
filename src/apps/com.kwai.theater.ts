import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kwai.theater',
  name: '喜番免费短剧',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '欢迎使用喜番免费短剧-同意',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="欢迎使用喜番免费短剧"][vid="privacy_title"] < * +n * > @[vid="ksad_tube_privacy_confirm_view"][clickable=true] > [text="同意"][vid="ksad_tube_dialog_confirm_text"]',
          ],
          activityIds: ['.api.component.HomeActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '打开通知-取消',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="打开通知不错过精彩好剧"][vid="content"] < [vid="body"] + [vid="button"] >n @[text="取消"][vid="negative"][clickable=true] +n [text="去打开"][vid="positive"]',
          ],
          activityIds: ['.api.component.HomeActivity'],
        },
      ],
    },
  ],
});
