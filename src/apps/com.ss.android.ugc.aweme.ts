import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    //抖音月付·月付金
    {
      key: 0,
      name: '月付金-签到可得',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@View[clickable=true] > [text="签到可得"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: ['@ImageView - ViewGroup < ViewGroup - ScrollView'],
        },
      ],
    },
    {
      key: 1,
      name: '月付金-浏览小游戏',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@View[clickable=true] > [text="浏览小游戏"]',
            '@[text="去看看"][clickable=true] - View[clickable=true] > [text="浏览难不倒你吧小游戏得月付金"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 15000,
          matches: ['@[desc="关闭"] <n ViewGroup - FrameLayout > [desc="游戏中心"]'],
          activityIds: [
            'com.minigame.merge.miniapphost.placeholder.MiniGameActivity0',
          ],
        },
        {
          preKeys: [0,1],
          key: 2,
          actionDelay: 1000,
          matches: ['@ImageView - ViewGroup < ViewGroup - ScrollView'],
          activityIds: [
            'com.minigame.merge.miniapphost.placeholder.MiniGameActivity0',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '月付金-浏览钱包页面',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@View[clickable=true] > [text="浏览钱包页面"]',
            '@[text="去完成"][clickable=true] - View[clickable=true] > [text="查看我的钱包"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: ['@ImageView - ViewGroup < ViewGroup - ScrollView'],
        },
      ],
    },
    {
      key: 3,
      name: '月付金-浏览天天开宝箱活动',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="去抽奖"][clickable=true] - View[clickable=true] > [text="浏览天天开宝箱活动"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: ['@ImageView - ViewGroup < ViewGroup - ScrollView'],
        },
      ],
    },
    {
      key: 4,
      name: '月付金-天天抽披哥入场券',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="去抽奖"][clickable=true] - View[clickable=true] > [text="天天抽披哥入场券"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            '@FrameLayout[clickable=true]  > FrameLayout > [id*="cj_plugin:id"] + FrameLayout',
          ],
        },
      ],
    },
    //天天预约领金币
    {
      key: 10,
      name: '天天预约领金币-看视频*秒领',
      matchRoot: true,
      matchDelay: 2000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionMaximum: 1,
          matches: [
            '@[desc="看视频"] + [desc~="[0-9]+"] + [desc="秒"] + [desc="领"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          key: 1,
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
          key: 2,
          actionDelay: 1000,
          matches: ['@[text="点击领预约奖励"]'],
          activityIds: ['.main.MainActivity'],
        },
        {
          key: 3,
          actionDelay: 1000,
          matches: ['@[desc="领取金币"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          key: 4,
          actionDelay: 1000,
          matches: ['@ViewGroup[index=6] -n * > [desc="金币领取成功"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          key: 5,
          actionDelay: 1000,
          matches: ['@[desc="立即预约领取"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          key: 6,
          actionDelay: 1000,
          matches: [
            'HorizontalScrollView > LinearLayout > ViewGroup + ViewGroup > @ImageView + ViewGroup + ImageView',
          ], //恭喜获得惊喜奖励×
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '天天预约领金币-立即领取',
      matchRoot: true,
      matchDelay: 2000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 0.4992',
            top: 'width * 1.2793',
          },
          matches: [
            'HorizontalScrollView > LinearLayout > ViewGroup + @ViewGroup[childCount=6][index=1]',
          ], //立即领取
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          key: 1,
          actionDelay: 1000,
          matches: [
            'HorizontalScrollView > LinearLayout > ViewGroup + ViewGroup[childCount=7] > @ViewGroup[index=6]',
          ], //金币领取成功
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          key: 2,
          actionDelay: 1000,
          matches: [
            'HorizontalScrollView > LinearLayout > ViewGroup[childCount=4] > @ViewGroup[index=2] > FrameLayout > View',
          ], //选择你的惊喜奖励-选我
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          key: 3,
          actionDelay: 1000,
          matches: [
            'HorizontalScrollView > LinearLayout > ViewGroup + ViewGroup > ViewGroup + @ImageView',
          ], //金币预约成功-我知道了-×
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    //理财-发财金
    {
      key: 12,
      name: '理财-广告',
      matchRoot: true,
      matchDelay: 1000,
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
      key: 13,
      name: '理财-*发财金已到账',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 20000,
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
      matchDelay: 1000,
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
      matchDelay: 2000,
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
      matchDelay: 3000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          matches: ['@View[clickable=true] > [text="保险商城"]'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            'Image < @View[clickable=true] <<n View + [text="9aa97892d6882edf9eb17221d3d9f0b3.png~tplv-49obo7mizy-75compress"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 1000,
          matches: [
            '@Image < View + [text="b2353ab71ceb1a18d61081ee5554d385.png~tplv-49obo7mizy-75compress"] + View > [text="74d6f58b0fa1e485326f55622391637e.png~tplv-49obo7mizy-75compress"]',
          ],
        },
        {
          preKeys: [0, 1,2],
          key: 3,
          actionDelay: 1000,
          matches: ['@[text="仍要退出"] + [text="立即收下"]'],
        },
      ],
    },
    {
      key: 24,
      name: '车主服务-信用卡',
      matchRoot: true,
      matchDelay: 3000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@View[clickable=true] > [text="信用卡"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          key: 1,
          actionDelay: 1000,
          matches: [
            '@Button[clickable=true] - View > [text$="~tplv-20ashz96qn-1"]',
          ],
          activityIds: ['.live.LiveDummyActivity'],
        },
        {
          key: 2,
          actionDelay: 1000,
          matches: ['@[desc="返回 按钮"] + ViewGroup > [desc="信用卡还款"]'],
          activityIds: ['.live.LiveDummyActivity'],
        },
        {
          key: 3,
          actionDelay: 1000,
          matches: [
            '@[desc="残忍离开"] < ViewGroup -n [desc="你有信用卡还款金未使用，确认离开吗"]',
          ],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 25,
      name: '车主服务-食安保/运费险',
      matchRoot: true,
      matchDelay: 3000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@View[clickable=true] > [text="食安保"]',
            '@View[clickable=true] > [text="运费险"]',
          ],
        },
        {
          key: 1,
          actionDelay: 1000,
          matches: [
            'Image < @View[clickable=true] + View > [text="5d5e1ba17a3090fb80016b75d2fc8758.png~tplv-49obo7mizy-75compress"]',
          ],
        },
        {
          key: 2,
          actionDelay: 1000,
          matches: ['@[text="仍要退出"] + [text="立即收下"]'],
        },
      ],
    },
    {
      key: 26,
      name: '车主服务-充值中心',
      matchRoot: true,
      matchDelay: 3000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@View[clickable=true] > [text="充值中心"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          key: 1,
          actionDelay: 1000,
          anyMatches: [
            '@ImageView[index=0][childCount=0] < ViewGroup[index=2][childCount=6]',
            '@ImageView[index=0][childCount=0] < ViewGroup[index=3][childCount=6]',
          ],
          activityIds: ['.main.MainActivity'],
        },
      ],
    },
    {
      key: 27,
      name: '车主服务-我的保障',
      matchRoot: true,
      matchDelay: 3000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          matches: ['@View[clickable=true] > [text="我的保障"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          key: 1,
          actionDelay: 1000,
          anyMatches: [
            '@ImageButton <<n * +n * [text="01a5e1e730630a185cbd7e5910f29b68.png~tplv-49obo7mizy-75compress"]',
            '@ImageButton <<n * +n * [text="609bb43258ed9006c7db8fca60dcef7e.png~tplv-49obo7mizy-png75"]',
          ],
        },
        {
          key: 2,
          actionDelay: 1000,
          matches: [
            '@Image < View + [text="40998dca3d938f5fd378d6c1738e1ded.png~tplv-49obo7mizy-png75"]',
          ],
        },
        {
          key: 3,
          actionDelay: 1000,
          matches: [
            '@ImageButton[text="0f11e8da0dede4385b4d24d1fc6f2aa4.png~tplv-49obo7mizy-75compress"]',
          ],
        },
      ],
    },
    {
      key: 28,
      name: '车主服务-查电费',
      matchRoot: true,
      matchDelay: 3000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@View[clickable=true] > [text="查电费"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          key: 1,
          actionDelay: 1000,
          matches: [
            '@Button[desc="关闭"] - View > [text$="~tplv-20ashz96qn-1"]',
          ],
          activityIds: [
            'com.bytedance.android.anniex.container.AnnieXHostActivity',
          ],
        },
        {
          key: 2,
          actionDelay: 1000,
          matches: ['@[desc="返回"] + [text="生活缴费"]'],
          activityIds: [
            '.live.LiveDummyActivity',
            'com.bytedance.android.anniex.container.AnnieXHostActivity',
          ],
        },
      ],
    },
    {
      key: 29,
      name: '车主服务-月付金',
      matchRoot: true,
      matchDelay: 3000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          matches: ['@View[clickable=true] > [text="月付金"]'],
        },
        {
          key: 1,
          actionDelay: 1000,
          anyMatches: [
            '@[text="4e964e31c8e5c69e83752f7466a5c3c5.png~tplv-49obo7mizy-whq:0:0:q75"]',
            '@Image < View < View <<n * [text="42ac405e908cfee5ececcd2c91c42714.png~tplv-49obo7mizy-75compress"]',
          ],
        },
        {
          key: 2,
          actionDelay: 1000,
          matches: [
            '[text="我的月付金"] >n View[clickable=true] > @Button[clickable=true]',
          ],
        },
        {
          key: 3,
          actionDelay: 1000,
          matches: [
            '@[desc="返回"][clickable=true] < [id="headerLeftBar"][clickable=true] + [text="抖音月付"]',
          ],
        },
        {
          key: 4,
          actionDelay: 1000,
          matches: [
            '[text="车主服务"] >n @ImageButton[clickable=true] + * [text="恭喜完成任务"]',
          ],
        },
      ],
    },
    {
      key: 30,
      name: '车主服务-抽免单',
      matchRoot: true,
      matchDelay: 3000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@View[clickable=true] > [text="抽免单"]'],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          key: 1,
          actionDelay: 1000,
          matches: ['Image < @View[clickable=true] + [desc="doupay"]'],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 31,
      name: '车主服务-去懂车帝',
      matchRoot: true,
      matchDelay: 3000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          matches: ['@View[clickable=true] > [text="去懂车帝"]'],
        },
        {
          key: 1,
          actionDelay: 1000,
          matches: [
            '@ImageView[clickable=true] < LinearLayout + [text="懂车帝"]',
          ],
        },
      ],
    },
    //更多任务
    {
      key: 32,
      name: '车主服务-从「钱包」访问车主服务',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 3000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text="从「钱包」访问车主服务"] +n @[text="去完成"][clickable=true]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          key: 1,
          actionDelay: 1000,
          action: 'back',
          matches: [
            '@ViewGroup - ViewGroup < ViewGroup + ViewGroup + ViewGroup[index=2][childCount=0]',
          ],
          activityIds: ['.cjpay.hostimpl.container.CJLiveDummyActivity'],
        },
        {
          preKeys: [0,1],
          key: 2,
          matches: [
            '@[text="我知道了"] - [text="AaIe25teg7ljAAAAAElFTkSuQmCC"]',
          ],
          activityIds: ['.cjpay.hostimpl.container.CJLiveDummyActivity'],
        },
      ],
    },
    {
      key: 33,
      name: '车主服务-搜索「车险」进入频道',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 3000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text="搜索「车险」进入频道"] +n @[text="去完成"][clickable=true]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          key: 1,
          actionDelay: 1000,
          matches: [
            '@ViewGroup[index=1][childCount=0] <<n * - * [desc="返回"]',
          ],
          activityIds: ['.search.activity.SearchResultActivity'],
        },
        {
          preKeys: [0,1],
          key: 2,
          actionDelay: 1000,
          matches: [
            '@ImageButton[clickable=true] - ImageButton <<n * -n * [text="d60d1c8ebb042992a1535132108f5843.png~tplv-49obo7mizy-png75"]',
          ],
          activityIds: ['.search.activity.SearchResultActivity'],
        },
      ],
    },
    //充值中心-充值金
    {
      key: 40,
      name: '充值中心',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
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
      matchDelay: 5000,
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
      matchDelay: 5000,
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
      matchDelay: 5000,
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
      matchDelay: 5000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@ImageView < [desc="任务完成 返回领取，关闭，按钮"]'],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
      ],
    },
    //手机充值
    {
      key: 60,
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
      key: 61,
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
    //我的钱包
    {
      key: 70,
      name: '我的钱包-广告-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
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
      key: 71,
      name: '支付成功',
      matchRoot: true,
      matchDelay: 5000,
      resetMatch: 'activity',
      activityIds: ['.live.LiveDummyHybridTransparentActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@ImageButton[clickable=true] < View +2 * [text="0a4743e049dbbda4e58e6fdc8fab9e7a.png~tplv-49obo7mizy-75compress"]', //去升级
          ],
        },
        {
          key: 1,
          actionDelay: 1000,
          action: 'back',
          matches: ['@[desc="返回"] +n ScrollView [desc="返回商户"]'],
        },
        {
          key: 2,
          actionDelay: 1000,
          matches: [
            '@[text^="nP+4b4Fvph+"] + View >n [text="您有1个奖励待领取"]',
          ],
        },
      ],
    },
  ],
});
