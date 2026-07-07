import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingyao.easybike',
  name: '哈啰',
  groups: [
    //游戏中心
    {
      key: 0,
      name: '游戏中心-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="NeuBVlqVn9Ix3bCeUqHdW"] - [text="1331192856345702400"] <<n [text="游戏中心"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    //首页功能类
    {
      key: 40,
      name: '开启消息通知-取消',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: ['@[text="取消"] <<n * [text="开启消息通知"]'],
          activityIds: ['com.hellobike.atlas.business.portal.PortalActivity'],
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
          matches: ['@[text="跳过"] <<n * [vid="view_bottom_logo"]'],
          activityIds: ['com.hellobike.atlas.business.portal.PortalActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[vid="actionDialogClose"] <<n * [vid="hbDialogLayout"]'],
          activityIds: ['com.hellobike.atlas.business.portal.PortalActivity'],
        },
      ],
    },
  ],
});
