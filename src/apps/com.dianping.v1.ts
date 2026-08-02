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
          matches: [
            'ImageView < @FrameLayout <3 FrameLayout + ImageView[clickable=true]',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@ImageView[clickable=true] - FrameLayout >2 ImageView'],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '浏览完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
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
      name: '返回寻宝-恭喜获得',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[desc="返回"][clickable=true] <<n * + * [text="恭喜获得"] + [text="100点金币"]',
          ],
          activityIds: [
            'com.dianping.shopshell.PexusPoiActivity',
            'com.dianping.nova.picasso.DPPicassoBoxActivity',
            'com.sankuai.waimai.business.restaurant.poicontainer.WMRestaurantActivity',
          ],
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
          anyMatches: [
            '@ImageView[clickable=true] < FrameLayout - FrameLayout > ImageView',
            '@ImageView[clickable=true] < FrameLayout - FrameLayout >3 ImageView',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '新版本抢先体验-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[vid="update_close_icon"][clickable=true] + [text="新版本抢先体验"][vid="update_title"]',
          ],
          activityIds: ['.NovaMainActivity'],
        },
      ],
    },
  ],
});
