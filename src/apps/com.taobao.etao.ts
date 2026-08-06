import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.etao',
  name: '一淘',
  groups: [
    {
      key: 0,
      name: '签到领钱-逛大促会场',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[vid="left_panel"] > @[desc="返回"][clickable=true] + * [vid="tvTitle"]',
          ],
          activityIds: ['com.taobao.sns.tms.CommonTMSActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '签到领钱-打开',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 3000,
          matches: [
            '@[text="打开"][clickable=true] - [text="取消"] < * < [vid="buttonPanel"] -2 [vid="topPanel"] [text="提示"][vid="alertTitle"]',
          ],
          activityIds: ['com.taobao.sns.tms.CommonTMSActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '签到领钱-去点淘领红包',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '[text="下载/打开APP"] < @View[clickable=true] <<n * - * [text="去点淘领红包"][vid="tvTitle"]',
          ],
          activityIds: ['com.taobao.sns.tms.CommonTMSActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="打开"] - [text="取消"] <<n [vid="buttonPanel"] -n [vid="topPanel"] [text="提示"][vid="alertTitle"]',
          ],
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
