import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.missevan',
  name: '猫耳FM',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '用户协议与隐私政策提示-同意',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="用户协议与隐私政策提示"][vid="title"] +n [text="不同意"][vid="disagree"] + @[text="同意"][vid="agree"][clickable=true]',
          ],
          activityIds: ['null'],
        },
      ],
    },
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
