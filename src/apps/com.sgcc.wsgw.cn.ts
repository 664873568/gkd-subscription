import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sgcc.wsgw.cn',
  name: '网上国网',
  groups: [
    {
      key: 49,
      name: '立即查看-×',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageButton[clickable=true] < * - * [text="立即查看"]'],
          activityIds: ['com.sgcc.wsgw.mainbundle.ElectricTitleActivity'],
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
          matches: [
            '@ImageView < [desc="关闭"] < ViewGroup <n ViewGroup +n [text="今日不再出现"]',
          ],
          activityIds: [
            'com.sgcc.wsgw.rnbundle.activity.HomeReactActivity',
            'com.htjc.pay.lite.moudle.singleaccountelepay.SingleAccountElePayIndexActivity',
          ],
        },
      ],
    },
  ],
});
