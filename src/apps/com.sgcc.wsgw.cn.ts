import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sgcc.wsgw.cn',
  name: '网上国网',
  groups: [
    {
      key: 0,
      name: '签到成功-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['ImageButton < View - @TextView[text=""][clickable=true] -2 [text="签到成功"]'],
          activityIds: ['com.sgcc.wsgw.mainbundle.ElectricTitleActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
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
  ],
});
