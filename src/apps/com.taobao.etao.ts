import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.etao',
  name: '一淘',
  groups: [
    {
      key: 0,
      name: '去点淘领红包',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="下载//打开APP"] <<n [text="去点淘领红包"]'],
          activityIds: ['com.taobao.sns.tms.CommonTMSActivity'],
        },
      ],
    },
  ],
});
