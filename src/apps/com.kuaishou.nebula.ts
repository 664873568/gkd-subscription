import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  groups: [
    {
      key: 0,
      name: '打卡失败',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[text="与奖品擦肩而过"] +n View [text="重新选择商品"]'],
          activityIds: ['com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '点赞',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[vid="like_icon"][visibleToUser=true]'],
          activityIds: ['com.yxcorp.gifshow.HomeActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '打卡失败-点赞',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'back',
          matches: ['@[text="与奖品擦肩而过"] +n View [text="重新选择商品"]'],
          activityIds: ['com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[vid="like_icon"][visibleToUser=true]'],
          activityIds: ['com.yxcorp.gifshow.HomeActivity'],
        },
      ],
    },
  ],
});
