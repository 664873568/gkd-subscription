import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    //抖音月付
    {
      key: 0,
      name: '我的月付金-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: ['@Button <<n * [text="我的月付金"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '关注订阅-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@View - [text="关注订阅"]'],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '限时任务-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@Image < View < View <<n * [text="42ac405e908cfee5ececcd2c91c42714.png~tplv-49obo7mizy-75compress"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '限时任务-我的月付金-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 1,
          matches: ['@Image < View < View <<n * [text="42ac405e908cfee5ececcd2c91c42714.png~tplv-49obo7mizy-75compress"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 5000,
          matches: ['@Button <<n * [text="我的月付金"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    //理财-发财金
    {
      key: 10,
      name: '理财-首页广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView - ImageView < ViewGroup - ScrollView'],
          activityIds: [
            'com.tt.miniapphost.placeholder.MiniAppHostStackActivity0',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '理财-首页广告-发财金已到账-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@ImageView - ImageView < ViewGroup - ScrollView'],
          activityIds: [
            'com.tt.miniapphost.placeholder.MiniAppHostStackActivity0',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 21000,
          matches: ['@[desc="关闭"] <<n * [vid^="bu"]'],
          activityIds: [
            'com.tt.miniapphost.placeholder.MiniAppHostStackActivity0',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '理财-发财金已到账-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 21000,
          matches: ['@[desc="关闭"][vid="axq"] <<n * [vid^="bu"]'],
          activityIds: [
            'com.tt.miniapphost.placeholder.MiniAppHostStackActivity0',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '券红包-发财金已到账-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 21000,
          matches: ['@[desc="券红包"] <<n * [vid^="bu"]'],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 14,
      name: '基金落地页-发财金已到账-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 21000,
          matches: ['[text="基金落地页"] >n @Button <<n * [vid="bux"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 15,
      name: '每周投-发财金已到账-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 21000,
          matches: ['[text^="每周投"] >n @Button <<n * [vid="bux"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    //车主服务
    {
      key: 20,
      name: '我的保障-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@ImageButton <<n * [text$="tplv-49obo7mizy-75compress"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 21,
      name: '我的保障-完善健康档案',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: ['@Image <<n * [desc="完善健康档案"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 22,
      name: '我的保障-完善健康档案-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'back',
          matches: ['@ImageButton <<n * [text$="tplv-49obo7mizy-75compress"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 5000,
          matches: ['@Image <<n * [desc="完善健康档案"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 38,
      name: '车主服务-点击查看',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@ViewGroup - ViewGroup < ViewGroup + ViewGroup + ViewGroup[index=2][childCount=0]',
          ],
          activityIds: ['.cjpay.hostimpl.container.CJLiveDummyActivity'],
        },
      ],
    },
    {
      key: 39,
      name: '车主服务-车主卡券',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['[id="nav-bar"] <<n [text="车主卡券"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    //充值中心
    {
      key: 40,
      name: '充值中心',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView < ViewGroup[index=3]'],
          activityIds: ['.main.MainActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '赚签到金-签到得',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ViewGroup[index=0][childCount=0] < ViewGroup[index=6][childCount=1]',
          ],
          activityIds: [
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
        },
      ],
    },
    {
      key: 42,
      name: '赚签到金-更多任务',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ViewGroup[index=0][childCount=0] < ViewGroup[index=2][childCount=2]',
          ],
          activityIds: [
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
        },
      ],
    },
    {
      key: 43,
      name: '娱乐影音-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['[desc="bilibili"] - ImageView'],
          activityIds: [
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
        },
      ],
    },
    {
      key: 44,
      name: '天天用好券-浏览好物-返回领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 31000,
          matches: ['@[text="返回领取"] <<n * [desc="返回"]'],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 45,
      name: '天天用好券-放弃优惠-返回',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="放弃优惠"] <<n * [desc="返回"]'],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 46,
      name: '天天用好券-返回',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 31000,
          matches: ['@[text="返回领取"] <<n * [desc="返回"]'],
          activityIds: ['.live.LiveDummyActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="放弃优惠"] <<n * [desc="返回"]'],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    //看视频
    {
      key: 50,
      name: '看视频-返回领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 31000,
          excludeMatches: ['ImageView - @ImageView < ViewGroup -3 ScrollView'],
          matches: ['@ImageView < ViewGroup -3 ScrollView'],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '看视频-任务完成 返回领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 31000,
          matches: ['@ImageView < [desc^="任务完成 返回领取"]'],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
  ],
});
