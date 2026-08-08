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
            'ImageView[clickable=true] - FrameLayout > @FrameLayout[clickable=true] > ImageView',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            '@ImageView[clickable=true] -n FrameLayout >n [text="额外送你200金币奖励～"]',
            '@ImageView[clickable=true] - FrameLayout > FrameLayout[clickable=true] >n [text~="\\\\([0-9]s\\\\) "]',
          ],
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
          action: 'clickCenter',
          excludeMatches: [
            'ViewGroup >n FrameLayout[clickable=true] > [text="去完成"]',
          ],
          matches: [
            '@FrameLayout[clickable=true] > ImageView + ImageView + FrameLayout [text="x"]',
          ],
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
          actionDelay: 3000,
          matches: [
            '@ImageView[clickable=true] < FrameLayout - FrameLayout >n FrameLayout[clickable=true] > ImageView',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          excludeMatches: [
            'ViewGroup >n FrameLayout[clickable=true] > [text="去完成"]',
          ],
          matches: [
            '@FrameLayout[clickable=true] > ImageView + ImageView + FrameLayout [text="x"]',
          ],
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
          action: 'clickCenter',
          matches: [
            '@FrameLayout[clickable=true] > ImageView + ImageView + [text="浏览完成"]',
          ],
          activityIds: [
            'com.dianping.base.web.ui.NovaTitansActivity', //随Visa探英伦风情
            'com.dianping.nova.picasso.DPPicassoBoxActivity', //浏览免费试频道
            'com.meituan.android.mrn.container.MRNBaseActivity', //逛精选团购 享超值优惠
          ],
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
          action: 'clickCenter',
          matches: [
            'ImageView - ImageView < FrameLayout < @FrameLayout[clickable=true] < * - * [text="恭喜获得"] + [text="100点金币"]',
          ],
          activityIds: [
            'com.dianping.shopshell.PexusPoiActivity',
            'com.dianping.nova.picasso.DPPicassoBoxActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '今日累计奖励-领取',
      matchRoot: true,
      actionMaximum: 3,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '[text="今日累计奖励"] < * < * + * @FrameLayout[clickable=true] > [text="领取"]',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '星图金融-返回',
      matchRoot: true,
      actionMaximum: 3,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          excludeMatches: [
            '@FrameLayout[clickable=true] > ImageView + ImageView + FrameLayout [text="x"]',
          ],
          matches: [
            '@[desc="back"] <<n * - * FrameLayout[clickable=false] > FrameLayout[index=2] > [text="已领取"]',
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
