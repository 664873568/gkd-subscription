import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fcbox.hiveconsumer',
  name: '丰巢',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '发现新版本-取消',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="暂不登录先逛逛 ＞"][vid="tv_login_guest_mode"][clickable=true]',
          ],
          activityIds: [
            'kt.com.fcbox.hiveconsumer.app.business.login.LoginActivity',
          ],
        },
      ],
    },
  ],
});
