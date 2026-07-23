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
          matches: ['@[text="下载/打开APP"] <<n [text="去点淘领红包"]'],
          activityIds: ['com.taobao.sns.tms.CommonTMSActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '更新提示',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text="取消"] + [text="好,升级"]'],
          activityIds: ['.app.homev4.HomeV4Activity'],
        },
      ],
    },
  ],
});
