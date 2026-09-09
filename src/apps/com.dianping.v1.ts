import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dianping.v1',
  name: '大众点评',
  groups: [
    //探店寻宝
    {
      key: 0,
      name: '探店寻宝-立即签到',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: [
            'ImageView[clickable=true] - FrameLayout > @FrameLayout[clickable=true] > ImageView',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          anyMatches: [
            '@ImageView[clickable=true] -n FrameLayout >n [text="额外送你200金币奖励～"]',
            'FrameLayout[getChild(0).name$="ImageView"] + FrameLayout > @FrameLayout[clickable=true] >n [text~="\\\\([0-9]s\\\\)"]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '探店寻宝-日常任务-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            'ImageView[clickable=true] + FrameLayout >n ViewGroup >5 @FrameLayout[clickable=true] > [text="立即领"]',
          ],
          actionDelay: 2000,
          action: 'clickCenter',
          matches: [
            'ImageView[clickable=true] + FrameLayout >n ViewGroup >5 @FrameLayout[clickable=true] > [text="去完成"]',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
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
            'ImageView[clickable=true] + FrameLayout >n ViewGroup >5 @FrameLayout[clickable=true] > [text="立即领"]',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
        {
          key: 3,
          excludeMatches: [
            'ImageView[clickable=true] + FrameLayout >n ViewGroup >5 @FrameLayout[clickable=true] > [text~="去完成|立即领"]',
          ],
          matches: [
            '@ImageView[clickable=true] + FrameLayout >n ViewGroup >5 FrameLayout[clickable=true] > TextView',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '每日签到-开宝箱得金币',
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          excludeMatches: [
            'ViewGroup >n FrameLayout[clickable=true] > [text="去完成"]',
            'ImageView[clickable=true] + FrameLayout >n ViewGroup >5 @FrameLayout[clickable=true] > [text~="去完成|立即领"]',
            '@ImageView[clickable=true] < FrameLayout - FrameLayout[getChild(1).getChild(0).clickable=true] - FrameLayout > ImageView', //继续开宝箱集卡
          ],
          actionDelay: 2000,
          matches: [
            '@FrameLayout[clickable=true] > ImageView + ImageView + FrameLayout > [text="x"]', //开宝箱得金币
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          anyMatches: [
            'ImageView - ImageView < FrameLayout < @FrameLayout[clickable=true] < * - * [text="恭喜获得"] + [text="100点金币"]',
            'ImageView - ImageView < FrameLayout < @FrameLayout[clickable=true] < FrameLayout < FrameLayout + [id$="android:id/navigationBarBackground"]', //返回寻宝
          ],
          activityIds: [
            'com.dianping.shopshell.PexusPoiActivity',
            'com.dianping.nova.picasso.DPPicassoBoxActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          anyMatches: [
            '@ImageView[clickable=true] < FrameLayout - FrameLayout[getChild(1).getChild(0).clickable=true] - FrameLayout > ImageView', //继续开宝箱集卡
            '@ImageView[clickable=true] < FrameLayout - FrameLayout >n [text="10元免单券"]', //集卡得免单
            '@ImageView[clickable=true] < FrameLayout - FrameLayout > ImageView < FrameLayout -2 FrameLayout >n [text="10元免单券"]',
            '@ImageView[clickable=true] < FrameLayout - FrameLayout > ImageView[clickable=true] < FrameLayout - FrameLayout[clickable=false] >n ImageView', //查看附近的店
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '每日签到-今日累计奖励-领取',
      matchRoot: true,
      matchDelay: 3000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: [
            '@FrameLayout[clickable=true] > ImageView + ImageView + FrameLayout > [text="x"]', //开宝箱得金币
          ],
          action: 'clickCenter',
          matches: [
            '[text="今日累计奖励"] < * < * + * @FrameLayout[clickable=true] > [text="领取"]',
          ],
          activityIds: ['com.dianping.nova.picasso.DPPicassoBoxActivity'],
        },
      ],
    },
    {
      key: 10,
      name: '星图金融-返回',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          excludeMatches: [
            '[text="今日累计奖励"] < * < * + * @FrameLayout[clickable=true] > [text="领取"]',
            '@FrameLayout[clickable=true] > ImageView + ImageView + FrameLayout >n [text="x"]',
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
