import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.youku.phone',
  name: '优酷视频',
  groups: [
    {
      key: 10,
      name: '星图金融-去优酷领酷金币',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'app',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '[id="ice-container"] >n @ImageButton[text="TB1Mg1SGQP2gK0jSZPxXXacQpXa-72-72"][clickable=true]',
          ],
          activityIds: ['com.youku.unic.container.UnicContainerActivity'],
        },
      ],
    },
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
