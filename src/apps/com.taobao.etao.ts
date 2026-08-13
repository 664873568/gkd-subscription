import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.etao',
  name: '一淘',
  groups: [
    //签到领钱
    {
      key: 0,
      name: '签到领钱-签到',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="O1CN01zgOxbV1KnJSkjY2Fc_!!6000000001208-2-tps-150-150"] < * + [text="签到"]',
          ],
          activityIds: ['com.taobao.sns.activity.ISWebViewActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="福狸中心"] >n @[text="TB16l86YLb2gK0jSZK9XXaEgFXa-92-92.png_100x100.jpg_"]',
          ],
          activityIds: ['com.taobao.sns.activity.ISWebViewActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '签到领钱-逛大促会场',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 3000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="O1CN01s1PguR1l0l6N6MumX_!!6000000004757-2-tps-211-210"] < * + [text="逛大促会场"]',
          ],
          activityIds: ['com.taobao.sns.activity.ISWebViewActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 3000,
          matches: [
            '[vid="left_panel"] > @[desc="返回"][clickable=true] + * [vid="tvTitle"]',
          ],
          activityIds: ['com.taobao.sns.tms.CommonTMSActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[text="O1CN01s1PguR1l0l6N6MumX_!!6000000004757-2-tps-211-210"] < * + [text="领取"] + [text="逛大促会场"]',
          ],
          activityIds: ['com.taobao.sns.activity.ISWebViewActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '签到领钱-打开',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 3000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          fastQuery: true,
          matches: ['@[text="打开"][clickable=true] - [text="取消"]'],
          activityIds: ['com.taobao.sns.tms.CommonTMSActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '签到领钱-去点淘领红包',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 3000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text="下载/打开APP"] < @View[clickable=true] <<n * - * [text="去点淘领红包"][vid="tvTitle"]',
          ],
          activityIds: ['com.taobao.sns.tms.CommonTMSActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="打开"] - [text="取消"]'],
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
