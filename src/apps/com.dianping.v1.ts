import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dianping.v1',
  name: '大众点评',
  groups: [
    {
      key: 0,
      name: '返回寻宝',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 6000,
          matches: [
            '@ImageView[index=1][childCount=0] +n [desc="food_poi_favor"] <<n * [text="恭喜获得"] + [text="100点金币"]',
          ],
          activityIds: ['com.dianping.shopshell.PexusPoiActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '继续开宝箱集卡',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView[clickable=true] < FrameLayout - FrameLayout >3 ImageView',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '查看附近的店',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView[clickable=true] < FrameLayout - FrameLayout > ImageView[clickable=true]',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
      ],
    },
  ],
});
