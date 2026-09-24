import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youku.phone',
  name: '优酷视频',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '用户协议及隐私保护-同意并继续',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="用户协议及隐私保护"][vid="yk_dialog_title"] +n LinearLayout > @[text="同意并继续"][vid="yk_dialog_yes"][clickable=true]',
          ],
          activityIds: ['.ActivityWelcome'],
        },
      ],
    },
  ],
});
