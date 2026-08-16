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
      matchDelay: 10000,
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
      name: '直播-返回',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 10000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@[desc="查找"][vid="search_btn"] - [desc="返回"][vid="left_btn"]',
          ],
          activityIds: ['com.yxcorp.gifshow.detail.PhotoDetailActivity'],
        },
      ],
    },
    {
      key: 2,
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
    //功能应用类
    {
      key: 40,
      name: '打开推送通知-忽略',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="打开推送通知"][vid="title"] +n * >n @[text="忽略"][vid="negative"][clickable=true] +n [text="去打开"][vid="positive"]',
          ],
          activityIds: ['com.yxcorp.gifshow.detail.PhotoDetailActivity'],
        },
      ],
    },
  ],
});
