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
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 5000,
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
      name: '开宝箱得金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['ImageView - ImageView < FrameLayout[clickable=true]'],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '继续开宝箱集卡',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionMaximum: 2,
          matches: [
            '@ImageView[clickable=true] < FrameLayout - FrameLayout > ImageView[clickable=true]',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['ImageView - ImageView < FrameLayout[clickable=true]'],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '浏览完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[text="浏览完成"] - ImageView - ImageView < FrameLayout'],
          activityIds: ['com.meituan.android.mrn.container.MRNBaseActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '返回寻宝-恭喜获得',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'ImageView - ImageView < FrameLayout < @FrameLayout[clickable=true] < * - * [text="恭喜获得"] + [text="100点金币"]',
            //'@[desc="返回"][clickable=true] <<n * + * [text="恭喜获得"] + [text="100点金币"] <<n * + * FrameLayout[clickable=true] ImageView + ImageView',
          ],
          activityIds: ['com.dianping.shopshell.PexusPoiActivity'],
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
