import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.missevan',
  name: '猫耳FM',
  groups: [
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text~="[0-9]"][vid="skip"] - [text="跳过"][vid="skip_title"] < [vid="skip_layout"][clickable=true]',
          ],
          activityIds: ['.activity.MainActivity'],
        },
      ],
    },
  ],
});
