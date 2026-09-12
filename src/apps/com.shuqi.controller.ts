import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.shuqi.controller',
  name: '书旗小说',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '欢迎使用-同意并继续',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="欢迎使用"][vid="dialog_title"] +n LinearLayout > [text="不同意"][vid="btn_left"] +n @[text="同意并继续"][vid="btn_right"][clickable=true]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
