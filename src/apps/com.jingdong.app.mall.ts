import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 1,
      name: '浏览-已完成-点击立即返回',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@RelativeLayout - RelativeLayout[id$="/a75"] > DrawerLayout[id$="/o7"]',
          ],
          activityIds: ['com.jd.lib.productdetail.ProductDetailActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '限时补贴-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[desc="关闭"] < * - [text="立即使用"] -3 [text="仅限店铺内部分商品"]',
          ],
          activityIds: ['com.jd.lib.productdetail.ProductDetailActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '优惠券奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@TextView < View +2 View <<n * [text="开心收下"]'],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '服饰美妆-暂时离开',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[text*="立即领取"] <<n [text="服饰美妆"]'],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '浏览游戏-⊙',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 30000,
          matches: ['@[vid="aqw"] <<n * TextureView'],
          activityIds: ['com.jingdong.manto.ui.MantoActivityUp1'],
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
            '@[text="跳过"] < [desc="跳过"] -2 [desc="启动图广告"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
  ],
});
