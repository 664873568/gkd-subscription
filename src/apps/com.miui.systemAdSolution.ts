import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.systemAdSolution',
  name: '智能服务',
  groups: [
    //首页广告类
    {
      key: 50,
      name: '首页-跳过广告',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[text~="跳过广告 [0-9]"][vid="view_skip_button"][clickable=true]',
            '@[text~="跳过 \\\\| [0-9]"][vid="view_skip_button"][clickable=true]',
          ],
        },
      ],
    },
  ],
});
