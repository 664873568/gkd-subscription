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
      resetMatch: 'activity',
      activityIds: [
        'com.taobao.sns.tms.CommonTMSActivity',
        'com.taobao.sns.activity.ISWebViewActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            'View > @View[getChild(0).text="O1CN01zgOxbV1KnJSkjY2Fc_!!6000000001208-2-tps-150-150"] + [text="签到"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@View[getChild(0).text="TB16l86YLb2gK0jSZK9XXaEgFXa-92-92.png_100x100.jpg_"] + [text="领取"] + [text="签到"]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '签到领钱-浏览任务',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.taobao.sns.tms.CommonTMSActivity',
        'com.taobao.sns.activity.ISWebViewActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            'View > @View[(getChild(0).text="O1CN01s1PguR1l0l6N6MumX_!!6000000004757-2-tps-211-210")&&(getChild(2).text!^="已领")] + [text!~="去中国移动逛逛"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 3000,
          matches: [
            '[vid="left_panel"] > @[desc="返回"][clickable=true] + * [vid="tvTitle"]',//逛大促会场
          ],
        },
        {
          preKeys: [0],
          key: 2,
          matches: [
            '[text="下载/打开APP"] < @View[clickable=true] <<n * - * [text="去点淘领红包"][vid="tvTitle"]',//去点淘领红包
          ],
        },
        {
          preKeys: [0,2],
          actionDelay: 3000,
          key: 3,
          matches: ['@[text="打开"][clickable=true] - [text="取消"]'],
        },
        {
          key: 4,
          matches: [
            '@View[getChild(0).text="O1CN01s1PguR1l0l6N6MumX_!!6000000004757-2-tps-211-210"] + [text="领取"] + [text!~="去中国移动逛逛"]',
          ],
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
