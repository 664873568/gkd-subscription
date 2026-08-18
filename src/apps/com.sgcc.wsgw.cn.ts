import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sgcc.wsgw.cn',
  name: '网上国网',
  groups: [
    //每日签到 兑好礼
    {
      key: 0,
      name: '每日签到-签到成功-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'ImageButton < View - @TextView[text=""][clickable=true] -2 [text="签到成功"]',
          ],
          activityIds: ['com.sgcc.wsgw.mainbundle.ElectricTitleActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '每日签到-抽中*个签到金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@TextView[clickable=true] - [text~="抽中[0-9]+个签到金"]'],
          activityIds: ['com.sgcc.wsgw.mainbundle.ElectricTitleActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '立即查看-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageButton[clickable=true] < * - * [text="立即查看"]'],
          activityIds: ['com.sgcc.wsgw.mainbundle.ElectricTitleActivity'],
        },
      ],
    },
    //兑换开放时间：2026年8月16日-2026年9月30日 每日11点更新
    {
      key: 3,
      name: '优惠券兑换-确认兑换',
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['com.sgcc.wsgw.mainbundle.ElectricTitleActivity'],
      rules: [
        {
          matches: [
            '[text~="\\\\（剩余([1-9]|[0-9][0-9])张\\\\）"] - * > @[text="立即兑换"][clickable=true] - ListView > [text="20元"]',
          ],
        },
        {
          matches: [
            '[text="即将兑换"] +n @[text="确认兑换"][clickable=true]',
          ],
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
            '[vid="rn_frame"] >n ViewGroup > ViewGroup > [text~="跳过\\\\([0-9]s\\\\)"]',
          ],
          activityIds: ['com.sgcc.wsgw.rnbundle.activity.HomeReactActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@ImageView < [desc="关闭"]'],
          activityIds: ['com.sgcc.wsgw.rnbundle.activity.HomeReactActivity'],
        },
      ],
    },
    {
      key: 52,
      name: '首页广告-系统检修升级公告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView < [desc="关闭"]'],
          activityIds: [
            'com.htjc.pay.lite.moudle.singleaccountelepay.SingleAccountElePayIndexActivity',
          ],
        },
      ],
    },
  ],
});
