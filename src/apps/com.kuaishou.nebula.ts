import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  groups: [
    {
      key: 0,
      name: '百度网盘-去快手极速版点赞',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[text="与奖品擦肩而过"] +n View [text="重新选择商品"]'],
          activityIds: ['com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity'],
        },
        {
          action: 'back',
          matches: [
            '@[desc="查找"][vid="search_btn"] - [desc="返回"][vid="left_btn"]',
          ],
          activityIds: ['com.yxcorp.gifshow.detail.PhotoDetailActivity'],
        },
        {
          matches: ['@[vid="like_icon"][visibleToUser=true]'],
          activityIds: ['com.yxcorp.gifshow.HomeActivity'],
        },
        {
          matches: ['@ImageView[clickable=true] + [text="邀好友得大额红包"]'],
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
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="打开推送通知"][vid="title"] +n * >n @[text="忽略"][vid="negative"][clickable=true] +n [text="去打开"][vid="positive"]',
          ],
          activityIds: ['com.yxcorp.gifshow.detail.PhotoDetailActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '版本更新-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[getChild(1).text="版本更新"&&getChild(3).getChild(0).text="免打扰升级"] + [vid="iv_close"][clickable=true]',
          ],
          activityIds: ['com.yxcorp.gifshow.HomeActivity'],
        },
      ],
    },
  ],
});
