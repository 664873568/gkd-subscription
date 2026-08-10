import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.suning.mobile.ebuy',
  name: '苏宁易购',
  groups: [
    {
      key: 0,
      name: '星图金融-返回',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 10000,
          matches: [
            '@[desc="返回"][vid="btn_back"][clickable=true] < [vid="layout_ucwv_back"] + [text="云钻魔法狮"][vid="title"]',
          ],
          activityIds: ['com.suning.mobile.ucwv.ui.WebViewActivity'],
        },
      ],
    },
  ],
});
