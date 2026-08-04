import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.suning.mobile.snbank',
  name: '苏商银行',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '用户服务政策提示',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="同意"][vid="tv_statement_accept"][clickable=true] -2 [text="暂不同意"][vid="tv_statement_refuse"] < [vid="ll_statement_actions"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
