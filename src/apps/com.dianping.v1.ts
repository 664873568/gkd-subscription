import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dianping.v1',
  name: '大众点评',
  groups: [
    {
      key: 0,
      name: '立即签到',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView < FrameLayout <n FrameLayout + ImageView[clickable=true]',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '返回寻宝',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView[index=1][childCount=0] - ImageView[index=0][childCount=0] <<4 FrameLayout',
          ],
          activityIds: [
            'com.dianping.shopshell.PexusPoiActivity',
            'com.sankuai.waimai.business.restaurant.poicontainer.WMRestaurantActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '浏览完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="浏览完成"] - ImageView - ImageView',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
      ],
    },
    {
      key: 3,
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
      key: 4,
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
