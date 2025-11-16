import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 0,
      name: '黑色星期五-领券抢',
      matchRoot: true,
      forcedTime: 1000,
      actionMaximum: 100,
      actionCd: 100,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="领券抢"] <<n [text="黑色星期五"] >n [text="15枚无抗鲜蛋"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23548893'],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
      ],
    },
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
            '@[index=parent.childCount.minus(1)] - [id$="/a75"] > [id$="/bco"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23382180'],
          activityIds: ['com.jd.lib.productdetail.ProductDetailActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '显示补贴-关闭',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[desc="关闭"] < * - [text="立即使用"] -3 [text="仅限店铺内部分商品"]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/23425057'],
          activityIds: ['com.jd.lib.productdetail.ProductDetailActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '服饰美妆-暂时离开',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[text*="立即领取"] <<n [text="服饰美妆"]'],
          snapshotUrls: ['https://i.gkd.li/i/23396514'],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
      ],
    },
  ],
});
