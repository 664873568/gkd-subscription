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
          key: 0,
          actionDelay: 1000,
          matches: [
            '@ImageView < FrameLayout <n FrameLayout + ImageView[clickable=true]',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@ImageView[clickable=true] - FrameLayout >2 ImageView',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '浏览完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 15000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="浏览完成"] - ImageView - ImageView < FrameLayout'],
          activityIds: [
            'com.dianping.nova.picasso.DPPicassoBoxActivity',
            'com.meituan.android.mrn.container.MRNBaseActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '返回寻宝',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 15000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 1000,
          anyMatches: [
            '@[text="恭喜获得"] + [text="100点金币"]',
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
      key: 3,
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
    {
      key: 4,
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
      key: 5,
      name: '继续开宝箱集卡-开宝箱得金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@ImageView[clickable=true] < FrameLayout - FrameLayout >3 ImageView',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@FrameLayout > ImageView + ImageView + FrameLayout > [text="x"]',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
      ],
    },
  ],
});
