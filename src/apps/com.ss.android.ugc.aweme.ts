import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    //抖音月付
    {
      key: 0,
      name: '游戏中心-⊙',
      matchRoot: true,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      activityIds: ['com.minigame.merge.miniapphost.placeholder.MiniGameActivity0'],
      rules: [
        {
          key: 0,
          actionDelay: 5000,
          matches: [
            '@[desc="关闭"] <n ViewGroup - FrameLayout > [desc="游戏中心"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@ImageView - ViewGroup < ViewGroup - ScrollView'],
        },
      ],
    },
    {
      key: 1,
      name: '抖音月付-挑战任务-得惊喜盲盒',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@FrameLayout[clickable=true]  > FrameLayout > [id*="cj_plugin:id"] + FrameLayout',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '抖音月付-天天预约领金币',
      matchRoot: true,
      matchDelay: 2000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[desc="看视频"] + [desc~="[0-9]+"] + [desc="秒"] + [desc="领"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          action: 'swipe',
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 200,
          },
          actionMaximum: 10,
          actionDelay: 5000,
          anyMatches: [
            '@[desc="视频"][vid="viewpager"] <<n * +n * [text~="看00:[0-9][0-9]领预约奖励"]',
            '@[desc="视频"][vid="viewpager"] <<n * +n * [text~="00:[0-9][0-9]"]',
          ],
          activityIds: ['.main.MainActivity'],
        },
        {
          matches: ['@[text="点击领预约奖励"]'],
          activityIds: ['.main.MainActivity'],
        },
        {
          matches: ['@[desc="领取金币"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          matches: ['@ViewGroup[index=6] -n * > [desc="金币领取成功"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          matches: ['@[desc="立即预约领取"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          matches: ['HorizontalScrollView > LinearLayout > ViewGroup + ViewGroup > @ImageView + ViewGroup + ImageView'],//恭喜获得惊喜奖励×
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '手机充值-广告-×live',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[desc="关闭"][clickable=true] - * > [text="190521fc43254cb0b96fe55e90fa4dfa~tplv-20ashz96qn-1"]', //放心借
          ],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '手机充值-广告-×bullet',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[desc="关闭"][clickable=true] - * > [text="2ec70291e3984ad789797699237a21b8~tplv-20ashz96qn-1"]', //恭喜获得
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '我的钱包-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[desc="关闭"][clickable=true] + * >n @ImageView +3 [desc="开心收下"]',
          ],
          activityIds: ['.wallet.ui.WalletActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '支付成功',
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['.live.LiveDummyHybridTransparentActivity'],
      rules: [
        {
          matches: [
            '@ImageButton[clickable=true] < View +2 * [text="0a4743e049dbbda4e58e6fdc8fab9e7a.png~tplv-49obo7mizy-75compress"]',//去升级
          ],
        },
        {
          action: 'back',
          actionDelay: 1000,
          matches: [
            '@[desc="返回"] +n ScrollView [desc="返回商户"]',
          ],
        },
        {
          actionDelay: 1000,
          matches: [
            '@[text^="nP+4b4Fvph+"] + View >n [text="您有1个奖励待领取"]',
          ],
        },
      ],
    },
    //理财-发财金
    {
      key: 10,
      name: '理财-首页广告',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
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
      name: '理财-*发财金已到账',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@FrameLayout[clickable=true] > FrameLayout > [id*="cj_plugin:id"] + FrameLayout > ImageView',
          ],
          activityIds: [
            '.live.LiveDummyActivity', //券红包
            '.bullet.ui.BulletContainerActivity', //基金落地页-每周投
            'com.tt.miniapphost.placeholder.MiniAppHostStackActivity0', //行情
          ],
        },
      ],
    },
    //车主服务-领能量兑现金
    {
      key: 20,
      name: '车主服务-指引图',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="649ee8243b12970232522a8be6b33c44.png~tplv-49obo7mizy-png75"] -2 [desc="箭头"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 21,
      name: '车主服务-广告',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="车主服务"] >n ImageButton + @ImageButton[clickable=true]',
          ],
          activityIds: [
            '.wallet.ui.WalletActivity',
            '.bullet.ui.BulletContainerActivity',
            '.cjpay.hostimpl.container.CJLiveDummyActivity',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '车主服务-每日签到',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="立即领取"] < View <n View -n [text="f080e982ef1f044bb33ea0eb0eab9b5c.png~tplv-49obo7mizy-75compress"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            '@Image < View - View > [text="f080e982ef1f044bb33ea0eb0eab9b5c.png~tplv-49obo7mizy-75compress"]',
          ],
        },
      ],
    },
    //浏览赚能量
    {
      key: 23,
      name: '车主服务-保险商城',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          matches: [
            'Image < @View[clickable=true] <<n View + [text="9aa97892d6882edf9eb17221d3d9f0b3.png~tplv-49obo7mizy-75compress"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            '@Image < View + [text="b2353ab71ceb1a18d61081ee5554d385.png~tplv-49obo7mizy-75compress"] + View > [text="74d6f58b0fa1e485326f55622391637e.png~tplv-49obo7mizy-75compress"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 1000,
          matches: ['@[text="仍要退出"] + [text="立即收下"]'],
        },
      ],
    },
    {
      key: 24,
      name: '车主服务-信用卡',
      matchRoot: true,
      matchDelay: 5000,
      resetMatch: 'activity',
      activityIds: ['.live.LiveDummyActivity'],
      rules: [
        {
          matches: [
            '@Button[clickable=true] - View > [text$="~tplv-20ashz96qn-1"]',
          ],
        },
        {
          actionDelay: 1000,
          matches: [
            '@[desc="返回 按钮"] + ViewGroup > [desc="信用卡还款"]',
          ],
        },
        {
          actionDelay: 1000,
          matches: [
            '@[desc="残忍离开"] < ViewGroup -n [desc="你有信用卡还款金未使用，确认离开吗"]',
          ],
        },
      ],
    },
    {
      key: 25,
      name: '车主服务-食安保/运费险',
      matchRoot: true,
      matchDelay: 5000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          matches: [
            'Image < @View[clickable=true] + View > [text="5d5e1ba17a3090fb80016b75d2fc8758.png~tplv-49obo7mizy-75compress"]',
          ],
        },
        {
          matches: [
            '@[text="仍要退出"] + [text="立即收下"]',
          ],
        },
      ],
    },
    {
      key: 26,
      name: '车主服务-我的保障',
      matchRoot: true,
      matchDelay: 5000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          anyMatches: [
            '@ImageButton <<n * +n * [text="01a5e1e730630a185cbd7e5910f29b68.png~tplv-49obo7mizy-75compress"]',
            '@ImageButton <<n * +n * [text="609bb43258ed9006c7db8fca60dcef7e.png~tplv-49obo7mizy-png75"]',
          ],
        },
        {
          actionDelay: 1000,
          matches: [
            '@Image < View + [text="40998dca3d938f5fd378d6c1738e1ded.png~tplv-49obo7mizy-png75"]',
          ],
        },
        {
          actionDelay: 1000,
          matches: [
            '@ImageButton[text="0f11e8da0dede4385b4d24d1fc6f2aa4.png~tplv-49obo7mizy-75compress"]',
          ],
        },
      ],
    },
    {
      key: 27,
      name: '车主服务-查电费',
      matchRoot: true,
      matchDelay: 5000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Button[desc="关闭"] - View > [text$="~tplv-20ashz96qn-1"]',
          ],
          activityIds: [
            'com.bytedance.android.anniex.container.AnnieXHostActivity',
          ],
        },
        {
          matches: ['@[desc="返回"] + [text="生活缴费"]'],
          activityIds: [
            '.live.LiveDummyActivity',
            'com.bytedance.android.anniex.container.AnnieXHostActivity',
          ],
        },
      ],
    },
    {
      key: 28,
      name: '车主服务-月付金',
      matchRoot: true,
      matchDelay: 5000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          anyMatches: [
            '@[text="4e964e31c8e5c69e83752f7466a5c3c5.png~tplv-49obo7mizy-whq:0:0:q75"]',
            '@Image < View < View <<n * [text="42ac405e908cfee5ececcd2c91c42714.png~tplv-49obo7mizy-75compress"]',
          ],
        },
        {
          actionDelay: 5000,
          matches: [
            '[text="我的月付金"] >n View[clickable=true] > @Button[clickable=true]',
          ],
        },
        {
          actionDelay: 1000,
          matches: [
            '@[desc="返回"][clickable=true] < [id="headerLeftBar"][clickable=true] + [text="抖音月付"]',
          ],
        },
        {
          actionDelay: 1000,
          matches: [
            '[text="车主服务"] >n @ImageButton[clickable=true] + * [text="恭喜完成任务"]',
          ],
        },
      ],
    },
    {
      key: 29,
      name: '车主服务-抽免单',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['Image < @View[clickable=true] + [desc="doupay"]'],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 30,
      name: '车主服务-去懂车帝',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView[clickable=true] < LinearLayout + [text="懂车帝"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    //更多任务
    {
      key: 31,
      name: '车主服务-从「钱包」访问车主服务',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['.cjpay.hostimpl.container.CJLiveDummyActivity'],
      rules: [
        {
          key: 0,
          action: 'back',
          matches: [
            '@ViewGroup - ViewGroup < ViewGroup + ViewGroup + ViewGroup[index=2][childCount=0]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="我知道了"] - [text="AaIe25teg7ljAAAAAElFTkSuQmCC"]',
          ],
        },
      ],
    },
    {
      key: 32,
      name: '车主服务-搜索「车险」进入频道',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      activityIds: ['.search.activity.SearchResultActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@ViewGroup[index=1][childCount=0] <<n * - * [desc="返回"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: [
            '@ImageButton[clickable=true] - ImageButton <<n * -n * [text="d60d1c8ebb042992a1535132108f5843.png~tplv-49obo7mizy-png75"]',
          ],
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
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ViewGroup[childCount=0] < ViewGroup[childCount=2] -n ScrollView',
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
      matchDelay: 2000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
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
      matchDelay: 1000,
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
    //预约影音娱乐1元秒杀
    {
      key: 44,
      name: '赚充值金-娱乐影音',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          anyMatches: [
            '@[desc="芒果TV"] - ImageView < ViewGroup',
            '@[desc="腾讯视频"] - ImageView < ViewGroup',
            '@[desc="bilibili"] - ImageView < ViewGroup',
          ],
          activityIds: [
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
        },
      ],
    },
    //浏览精选好物
    {
      key: 45,
      name: '赚充值金-天天用好券-浏览好物-返回领取',
      matchRoot: true,
      matchTime: 40000,
      resetMatch: 'activity',
      activityIds: ['.live.LiveDummyActivity'],
      rules: [
        {
          matches: [
            '@[desc="返回"][clickable=true] <<n [id="mix-navbar"] +n * [text="浏览好物"] + [text="返回领取"]',
          ],
        },
        {
          matches: ['@[text="放弃优惠"] <<n * [desc="返回"]'],
        },
      ],
    },
    //看视频
    {
      key: 50,
      name: '看视频-任务完成 返回领取',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView < [desc="任务完成 返回领取，关闭，按钮"]'],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
  ],
});
