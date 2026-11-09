import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dianping.v1',
  name: '大众点评',
  groups: [
    //26.01.12起 点金币
    {
      key: 0,
      name: '点金币-每日签到',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.NovaMainActivity',
        'com.dianping.nova.picasso.DPPicassoBoxActivity',
      ],
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: [
            'FrameLayout[clickable=true] > FrameLayout[clickable=true] + @FrameLayout[clickable=true] >n [text="立即签到"]',
          ],
        },
        {
          key: 1,
          name: '三餐奖励',
          action: 'clickCenter',
          matches: [
            '@FrameLayout[clickable=true] > [text~="今日.*餐奖励"] - FrameLayout > [text="必得"]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '点金币-做任务领奖励',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 2000,
          matches: [
            '@FrameLayout[clickable=true] > [text!~="今日.*餐奖励"] - FrameLayout > [text="必得"]',
          ],
          excludeMatches: [
            '@ImageView[clickable=true] <n FrameLayout <n FrameLayout <n FrameLayout < [vid="picasso_view"]',
            'FrameLayout[clickable=true] > FrameLayout[clickable=true] + @FrameLayout[clickable=true] >n [text="立即签到"]',
            '@FrameLayout[clickable=true] > [text!~="今日.*餐奖励"] - FrameLayout > [text="可领"]',
          ],
          activityIds: [
            '.NovaMainActivity',
            'com.dianping.nova.picasso.DPPicassoBoxActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          matches: [
            '@FrameLayout[clickable=true] > ImageView + ImageView + [text="浏览完成"]',
          ],
          activityIds: [
            'com.dianping.base.web.ui.NovaTitansActivity', //随Visa探英伦风情
            'com.dianping.nova.picasso.DPPicassoBoxActivity', //浏览免费试频道//浏览当地人推荐榜
            'com.meituan.android.mrn.container.MRNBaseActivity', //逛精选团购 享超值优惠
            'com.meituan.android.mrnx.container.MRNXStandardActivity', //逛精选团购 享超值优惠-闪电特惠
          ],
        },
        {
          key: 2,
          action: 'clickCenter',
          actionDelay: 2000,
          matches: [
            '@FrameLayout[clickable=true] > [text!~="今日.*餐奖励"] - FrameLayout > [text="可领"]',
          ],
          excludeMatches: [
            '@ImageView[clickable=true] <n FrameLayout <n FrameLayout <n FrameLayout < [vid="picasso_view"]',
          ],
          activityIds: [
            '.NovaMainActivity',
            'com.dianping.nova.picasso.DPPicassoBoxActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '点金币-做任务领奖励-去完成',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 2000,
          matches: [
            '[text="去完成"] < @FrameLayout[clickable=true] <n FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < ViewGroup <n RecyclerView <n FrameLayout <n FrameLayout < FrameLayout <n FrameLayout <n FrameLayout <n FrameLayout < [vid="picasso_view"]',
          ],
          excludeMatches: [
            '[text="立即领"] < @FrameLayout[clickable=true] <n FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < ViewGroup <n RecyclerView <n FrameLayout <n FrameLayout < FrameLayout <n FrameLayout <n FrameLayout <n FrameLayout < [vid="picasso_view"]',
          ],
          activityIds: [
            '.NovaMainActivity',
            'com.dianping.nova.picasso.DPPicassoBoxActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          matches: [
            '@FrameLayout[clickable=true] > ImageView + ImageView + [text="浏览完成"]',
          ],
          activityIds: [
            'com.dianping.base.web.ui.NovaTitansActivity', //随Visa探英伦风情
            'com.dianping.nova.picasso.DPPicassoBoxActivity', //浏览免费试频道//浏览当地人推荐榜
            'com.meituan.android.mrn.container.MRNBaseActivity', //逛精选团购 享超值优惠
            'com.meituan.android.mrnx.container.MRNXStandardActivity', //逛精选团购 享超值优惠-闪电特惠
          ],
        },
        {
          key: 2,
          action: 'clickCenter',
          matches: [
            '[text="立即领"] < @FrameLayout[clickable=true] <n FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < ViewGroup <n RecyclerView <n FrameLayout <n FrameLayout < FrameLayout <n FrameLayout <n FrameLayout <n FrameLayout < [vid="picasso_view"]',
          ],
          activityIds: [
            '.NovaMainActivity',
            'com.dianping.nova.picasso.DPPicassoBoxActivity',
          ],
        },
        {
          key: 3,
          matches: [
            '@ImageView[clickable=true] <n FrameLayout <n FrameLayout <n FrameLayout < [vid="picasso_view"]',
          ],
          excludeMatches: [
            '[text~="去完成|立即领"] < @FrameLayout[clickable=true] <n FrameLayout < FrameLayout < FrameLayout < FrameLayout < FrameLayout < ViewGroup <n RecyclerView <n FrameLayout <n FrameLayout < FrameLayout <n FrameLayout <n FrameLayout <n FrameLayout < [vid="picasso_view"]',
          ],
          activityIds: [
            '.NovaMainActivity',
            'com.dianping.nova.picasso.DPPicassoBoxActivity',
          ],
        },
      ],
    },
    {
      key: 39,
      name: '星图金融-去大众点评赢免单',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.NovaMainActivity',
        'com.dianping.nova.picasso.DPPicassoBoxActivity',
      ],
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 5000,
          matches: [
            '[desc="back"] < @FrameLayout[clickable=true] <n FrameLayout <n FrameLayout <n FrameLayout < [vid="picasso_view"]',
          ],
          excludeMatches: [
            'FrameLayout[clickable=true] > FrameLayout[clickable=true] + @FrameLayout[clickable=true] >n [text="立即签到"]',
            '@FrameLayout[clickable=true] > [text!~="今日.*餐奖励"] - FrameLayout > [text="必得" || text="可领"]',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '新版本抢先体验-×',
      forcedTime: 60000,
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
