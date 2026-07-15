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
          matches: ['@Button <<n [text="我的月付金"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '限时任务',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@[text="4e964e31c8e5c69e83752f7466a5c3c5.png~tplv-49obo7mizy-whq:0:0:q75"]',
            '@Image < View < View <<n * [text="42ac405e908cfee5ececcd2c91c42714.png~tplv-49obo7mizy-75compress"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '限时任务-我的月付金-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="4e964e31c8e5c69e83752f7466a5c3c5.png~tplv-49obo7mizy-whq:0:0:q75"]',
            '@Image < View < View <<n * [text="42ac405e908cfee5ececcd2c91c42714.png~tplv-49obo7mizy-75compress"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 5000,
          matches: ['@Button <<n [text="我的月付金"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 3,
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
      key: 4,
      name: '抖音月付-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: ['@[desc="返回"] <<n * [text="抖音月付"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '游戏中心-⊙',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 10000,
          matches: [
            '@[desc="关闭"][vid="axq"] <<n * [desc="游戏中心"][vid="b8+"]',
          ],
          activityIds: [
            'com.minigame.merge.miniapphost.placeholder.MiniGameActivity0',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@ImageView - ViewGroup < ViewGroup - ScrollView'],
          activityIds: [
            'com.minigame.merge.miniapphost.placeholder.MiniGameActivity0',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '我的钱包-我知道了',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="我知道了"] - [text="AaIe25teg7ljAAAAAElFTkSuQmCC"]',
          ],
          activityIds: ['.cjpay.hostimpl.container.CJLiveDummyActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '支付成功-奖励待领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text^="nP+4b4Fvph+"] + View >n [text="您有1个奖励待领取"]',
          ],
          activityIds: ['.live.LiveDummyHybridTransparentActivity'],
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
          matches: ['[text="基金落地页"] >n @Button <<n * [vid^="bu"]'],
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
          matches: ['[text^="每周投"] >n @Button <<n * [vid^="bu"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    //车主服务
    {
      key: 20,
      name: '车主服务-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageButton[index=1][childCount=0] - ImageButton <<n [text="车主服务"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 21,
      name: '车主服务-立即领取-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 1000,
          matches: [
            '@[text="立即领取"] <<n * [text="f080e982ef1f044bb33ea0eb0eab9b5c.png~tplv-49obo7mizy-75compress"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@Image < View - View > [text="f080e982ef1f044bb33ea0eb0eab9b5c.png~tplv-49obo7mizy-75compress"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 22,
      name: '我的保障-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@ImageButton <<n * [text="01a5e1e730630a185cbd7e5910f29b68.png~tplv-49obo7mizy-75compress"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 23,
      name: '我的保障-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@[desc="返回"][vid="ed-"] <<n * [text="我的保障"][vid="title"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 24,
      name: '我的保障-<-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'back',
          matches: [
            '@ImageButton <<n * [text="01a5e1e730630a185cbd7e5910f29b68.png~tplv-49obo7mizy-75compress"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@[desc="返回"][vid="ed-"] <<n * [text="我的保障"][vid="title"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 25,
      name: '信用卡还款-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@Button[desc="关闭"] - View'],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 26,
      name: '信用卡还款-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: ['@[desc="返回 按钮"] <<n * [desc="信用卡还款"]'],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 27,
      name: '信用卡还款-<-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@Button[desc="关闭"] - View'],
          activityIds: ['.live.LiveDummyActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 5000,
          matches: ['@[desc="返回 按钮"] <<n * [desc="信用卡还款"]'],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 28,
      name: '生活缴费-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: ['@[desc="返回"] + [text="生活缴费"]'],
          activityIds: [
            'com.bytedance.android.anniex.container.AnnieXHostActivity',
          ],
        },
      ],
    },
    {
      key: 29,
      name: '抖音支付-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Image < View + [desc="doupay"] <<n [text="抖音支付优惠阵地"]',
          ],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 30,
      name: '恭喜完成任务-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text^="svg+xml;base64"] + View >n [text="cloud-background.cbba3c7a"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 31,
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
      key: 32,
      name: '车主服务-车险',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ViewGroup[index=1][childCount=0] <<n * [desc="返回"][vid="by+"]',
          ],
          activityIds: ['.search.activity.SearchResultActivity'],
        },
      ],
    },
    {
      key: 33,
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
    //充值中心-充值金
    {
      key: 40,
      name: '充值中心',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '@ImageView[index=0][childCount=0] < ViewGroup[index=2][childCount=6]',
            '@ImageView[index=0][childCount=0] < ViewGroup[index=3][childCount=6]',
          ],
          activityIds: ['.main.MainActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '赚充值金-更多任务',
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
      key: 42,
      name: '赚充值金-赚充值金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: [
            '@ViewGroup[index=0][childCount=0] < ViewGroup[index=4][childCount=1] - ViewGroup[index=3][childCount=2]',
          ],
          activityIds: [
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
        },
      ],
    },
    {
      key: 43,
      name: '赚充值金-再赚充值金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ViewGroup[index=0][childCount=0] < ViewGroup[index=3][childCount=1] -2 [desc$="00"]',
          ],
          activityIds: [
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
        },
      ],
    },
    {
      key: 44,
      name: '娱乐影音-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@[desc="bilibili"] - ImageView < ViewGroup',
            '@[desc="芒果TV"] - ImageView < ViewGroup',
          ],
          activityIds: [
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
        },
      ],
    },
    {
      key: 45,
      name: '天天用好券-浏览好物-返回领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[text="返回领取"] <<n * [desc="返回"]'],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 46,
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
      key: 47,
      name: '天天用好券-返回',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'back',
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
      name: '看视频-任务完成 返回领取-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView < [desc^="任务完成 返回领取"]'],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
  ],
});
