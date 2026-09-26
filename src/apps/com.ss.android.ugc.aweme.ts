import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    //21.12.22开始 抖音月付·月付金
    {
      key: 10,
      name: '月付金-签到可得',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="我的月付金"] >n @View[clickable=true] > [text="签到可得"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="我的月付金"] >n [text="签到成功 月付金"] +n @ImageButton[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '月付金-赚月付金',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[text="我的月付金"] >n @View[clickable=true] > [text="签到可得"]',
            '[text="我的月付金"] >n [text="签到成功 月付金"] +n @ImageButton[clickable=true]',
          ],
          actionDelay: 2000,
          matches: [
            '[text="我的月付金"] >n View > View[ getChild(1).name$="TextView"] + TextView[text!~="去打车|买一笔|去上传"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          name: '浏览难不倒你吧小游戏得月付金',
          actionDelay: 15000,
          matches: [
            '@[desc="关闭"] <n ViewGroup - FrameLayout > [desc="游戏中心"]',
          ],
          activityIds: [
            'com.minigame.merge.miniapphost.placeholder.MiniGameActivity0',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '退出游戏',
          matches: ['@ImageView - ViewGroup < ViewGroup - ScrollView'],
          activityIds: [
            'com.minigame.merge.miniapphost.placeholder.MiniGameActivity0',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          name: '浏览钱包页面',
          action: 'back',
          actionDelay: 15000,
          matches: [
            'FrameLayout < [id*="plugin"] - FrameLayout < @FrameLayout < FrameLayout - * ViewGroup - ViewGroup < ViewGroup + ViewGroup + ViewGroup[index=2][childCount=0]',
          ],
          activityIds: ['.cjpay.hostimpl.container.CJLiveDummyActivity'],
        },
        {
          preKeys: [0],
          key: 4,
          name: '浏览天天开宝箱活动',
          actionDelay: 5000,
          action: 'back',
          matches: [
            'FrameLayout > FrameLayout > ViewGroup > FrameLayout > ImageView + TextView',
          ],
          activityIds: [
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
        },
        {
          preKeys: [0],
          key: 5,
          name: '月付金-浏览好物竞拍得月付金',
          action: 'back',
          actionDelay: 15000,
          matches: [
            'FrameLayout < [id*="plugin"] - FrameLayout < FrameLayout < FrameLayout',
          ],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    //26.07.20-26.08.20 理财-发财金
    {
      key: 20,
      name: '理财-广告',
      matchRoot: true,
      actionMaximum: 1,
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
      key: 21,
      name: '理财-发财金-立即签到',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          position: {
            left: 'width * 0.835',
            top: 'height * 0.185',
          },
          matches: [
            'ScrollView > HorizontalScrollView > LinearLayout > @ViewGroup > ImageView + ViewGroup + ViewGroup + ViewGroup + ImageView',//立即签到
          ],
          activityIds: ['com.tt.miniapphost.placeholder.MiniAppHostStackActivity0'],
        },
        {
          key: 1,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.8',
          },
          matches: [
            'ScrollView + ViewGroup > ViewGroup + ViewGroup > @ViewGroup[childCount>1] > ImageView', //签到领
          ],
          activityIds: ['com.tt.miniapphost.placeholder.MiniAppHostStackActivity0'],
        },
        {
          key: 2,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.43',
          },
          matches: [
            'ScrollView > HorizontalScrollView > @LinearLayout > ViewGroup + ImageView + ImageView', //立即签到
          ],
          activityIds: ['com.bytedance.android.anniex.container.AnnieXHostActivity'],
        },
        {
          preKeys: [0, 1，2],
          key: 3,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.8',
          },
          matches: [
            'ScrollView + ViewGroup > ViewGroup + ViewGroup > @ViewGroup[childCount>1] > ImageView', //开心收下
          ],
          activityIds: ['com.bytedance.android.anniex.container.AnnieXHostActivity'],
        },
      ],
    },
    {
      key: 22,
      name: '理财-*发财金已到账',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'back',
          matches: [
            'ImageView < FrameLayout - [id*="cj_plugin:id"] < FrameLayout < FrameLayout',
          ],
          activityIds: [
            '.live.LiveDummyActivity', //逛商城福利
            'com.tt.miniapphost.placeholder.MiniAppHostStackActivity0', //浏览行情信息
          ],
        },
        {
          key: 1,
          matches: [
            'ImageView < FrameLayout - [id*="cj_plugin:id"] < FrameLayout < FrameLayout - * @[desc="返回按钮"][clickable=true]', //浏览投资日历
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[desc="关闭"][clickable=true] + [text="先加入自选，行情来了不错过"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [1,2],
          key: 3,
          matches: [
            'ImageView < FrameLayout - [id*="cj_plugin:id"] < FrameLayout < FrameLayout - * @[desc="返回按钮"][clickable=true]', //浏览投资日历
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [0, 1, 3],
          key: 4,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.8',
          },
          matches: [
            'ScrollView + ViewGroup > ViewGroup + ViewGroup > @ViewGroup > ImageView', //开心收下
          ],
          activityIds: [
            'com.bytedance.android.anniex.container.AnnieXHostActivity',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '理财-发财金-抽发财金',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            'ScrollView + ViewGroup > ViewGroup + ViewGroup > @ViewGroup > ViewGroup +n ImageView',
          ],
          matches: [
            'ScrollView > HorizontalScrollView > LinearLayout > ViewGroup + ViewGroup + ImageView + @ViewGroup',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.8',
          },
          matches: [
            'ScrollView + ViewGroup > ViewGroup + ViewGroup > @ViewGroup > ImageView', //开心收下
          ],
        },
      ],
    },
    //车主服务-车主省钱-领省钱豆兑现金
    {
      key: 30,
      name: '省钱豆-每日签到',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
      ],
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
          matches: [
            '@Image < View - View > [text="f080e982ef1f044bb33ea0eb0eab9b5c.png~tplv-49obo7mizy-75compress"]',
          ],
        },
      ],
    },
    //浏览赚省钱豆
    {
      key: 31,
      name: '省钱豆-保险商城',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text~="浏览赚[0-9]+省钱豆"] + @View[clickable=true] > [text="保险商城"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(1).text="开心收下"] -n View > View > @View[clickable=true] > Image',
          ],
        },
        {
          preKeys: [0,1],
          key: 2,
          actionDelay: 5000,
          anyMatches: [
            '[id="nav-bar"] > @View[clickable=true] > Image',
            '[id="nav-bar"] > View > @[desc="关闭页面"][clickable=true],
          ],
        },
      ],
    },
    {
      key: 32,
      name: '省钱豆-信用卡',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text~="浏览赚[0-9]+省钱豆"] + @View[clickable=true] > [text="信用卡"]',
          ],
        },
        {
          preKeys: [0, 2],
          key: 1,
          matches: ['@Button[clickable=true] - View[clickable=true] > Image'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 5000,
          matches: ['@[desc="返回 按钮"] + ViewGroup > [desc="信用卡还款"]'],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@[desc="残忍离开"] < ViewGroup -n [desc="你有信用卡还款金未使用，确认离开吗"]',
          ],
        },
      ],
    },
    {
      key: 33,
      name: '省钱豆-食安保',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text~="浏览赚[0-9]+省钱豆"] + @View[clickable=true] > [text="食安保"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: ['[id="nav-bar"] > @View[clickable=true] > Image'],
        },
        {
          preKeys: [1],
          key: 2,
          matches: ['@[text="仍要退出"][clickable=true] + [text="立即收下"]'],
        },
        {
          preKeys: [2],
          key: 3,
          action: 'back',
          actionDelay: 5000,
          matches: [
            'FrameLayout > ViewGroup > ViewGroup - ViewGroup - ViewGroup > ViewGroup + @ViewGroup',
          ],
        },
      ],
    },
    {
      key: 34,
      name: '省钱豆-查电费',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text~="浏览赚[0-9]+省钱豆"] + @View[clickable=true] > [text="查电费"]',
          ],
          activityIds: [
            '.bullet.ui.BulletContainerActivity',
            '.cjpay.hostimpl.container.CJLiveDummyActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['[text$="~tplv-20ashz96qn-1"] < * + @Button[desc="关闭"]'],
          activityIds: [
            'com.bytedance.android.anniex.container.AnnieXHostActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 5000,
          matches: ['@[desc="返回"][clickable=true] + [text="生活缴费"]'],
          activityIds: [
            'com.bytedance.android.anniex.container.AnnieXHostActivity',
          ],
        },
      ],
    },
    {
      key: 35,
      name: '省钱豆-月付金',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text~="浏览赚[0-9]+省钱豆"] + @View[clickable=true] > [text="月付金"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: [
            '[text="我的月付金"] >n View[clickable=true] > @Button[clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: ['[text="抖音月付"] >n @[desc="返回"][clickable=true]'],
        },
        {
          preKeys: [2],
          key: 3,
          matches: ['@ImageButton[clickable=true] + * [text="恭喜完成任务"]'],
        },
      ],
    },
    {
      key: 36,
      name: '省钱豆-运费险',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text~="浏览赚[0-9]+省钱豆"] + @View[clickable=true] > [text="运费险"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: ['[id="nav-bar"] > @View[clickable=true] > Image'],
        },
        {
          preKeys: [1],
          key: 2,
          matches: ['@[text="仍要退出"][clickable=true] + [text="立即收下"]'],
        },
        {
          preKeys: [2],
          key: 3,
          action: 'back',
          actionDelay: 5000,
          matches: [
            'FrameLayout > ViewGroup > ViewGroup - ViewGroup - ViewGroup > ViewGroup + @ViewGroup',
          ],
        },
      ],
    },
    {
      key: 37,
      name: '省钱豆-抽免单',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text~="浏览赚[0-9]+省钱豆"] + @View[clickable=true] > [text="抽免单"]',
          ],
          activityIds: [
            '.bullet.ui.BulletContainerActivity',
            '.cjpay.hostimpl.container.CJLiveDummyActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: ['[desc="doupay"] - @View[clickable=true] > Image'],
          activityIds: ['.live.LiveDummyActivity'],
        },
      ],
    },
    {
      key: 38,
      name: '省钱豆-去懂车帝',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text~="浏览赚[0-9]+省钱豆"] + @View[clickable=true] > [text="去懂车帝"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@ImageView[clickable=true] < LinearLayout + [text="懂车帝"]',
          ],
        },
      ],
    },
    //更多任务
    {
      key: 39,
      name: '省钱豆-从「钱包」访问车主服务',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bullet.ui.BulletContainerActivity',
        '.cjpay.hostimpl.container.CJLiveDummyActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="今日已完成 明日继续"] +n [getChild(0).text="从「钱包」访问车主服务"] > @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 5000,
          matches: ['FrameLayout > ViewGroup[index=4] > @ViewGroup'],
        },
      ],
    },
    //充值中心-攒充值金兑优惠券
    {
      key: 40,
      name: '充值中心-广告-×',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'FrameLayout[childCount=4] > ViewGroup[index=parent.childCount.minus(1)] > ViewGroup > ViewGroup + ViewGroup',
          ],
          activityIds: [
            'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
          ],
        },
      ],
    },
    {
      key: 41,
      name: '充值中心-攒充值金',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
      ],
      rules: [
        {
          key: 0,
          name: '攒充值金',
          action: 'clickCenter',
          actionDelay: 5000,
          matches: [
            'FrameLayout[getChild(0).name$="TextureView"] + ViewGroup > ViewGroup > @ViewGroup[getChild(0).name$="ImageView"] + ViewGroup + ViewGroup',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '天天收集充值金-签到得',
          action: 'clickCenter',
          matches: [
            'ScrollView > HorizontalScrollView > LinearLayout > ViewGroup > ViewGroup > ViewGroup > ScrollView > HorizontalScrollView > LinearLayout > ViewGroup > ViewGroup',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '签到成功',
          action: 'clickCenter',
          matches: [
            'FrameLayout[getChild(0).name$="TextureView"] + @ImageView + ViewGroup + ViewGroup + ViewGroup > ViewGroup > ViewGroup',
          ],
        },
      ],
    },
    {
      key: 42,
      name: '充值中心-攒充值金-赚充值金',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.bytedance.android.shopping.store.tabkit.container.TabKitActivity',
      ],
      rules: [
        {
          key: 0,
          name: '去访问|去预约|去浏览|去看看',
          excludeMatches: [
            'FrameLayout[getChild(0).name$="TextureView"] + @ImageView + ViewGroup + ViewGroup + ViewGroup > ViewGroup > ViewGroup',
            'ViewGroup[getChild(1).getChild(0).name$="ScrollView"] + @ViewGroup[getChild(0).name$="ViewGroup"] + ViewGroup[getChild(0).getChild(0).name$="ViewGroup"]',
          ],
          action: 'clickCenter',
          actionDelay: 2000,
          matches: [
            'ViewGroup[getChild(1).getChild(0).name$="ScrollView"] + ViewGroup > ViewGroup[index=parent.childCount.minus(1)]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '从商城访问充值中心',
          action: 'clickCenter',
          matches: [
            'FrameLayout > LinearLayout > ViewGroup[childCount=5] > @ViewGroup[index=2][childCount=5]',
          ],
          activityIds: ['.main.MainActivity'],
        },
        {
          preKeys: [0],
          key: 2,
          name: '预约下月收集活动',
          action: 'clickCenter',
          matches: [
            '@[desc~="bilibili|芒果TV|腾讯视频"] - ImageView < ViewGroup',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          name: '预约影音娱乐1元秒杀',
          action: 'back',
          actionDelay: 5000,
          matches: [
            'FrameLayout > @ViewGroup + ViewGroup > ViewGroup > LinearLayout + ViewGroup',
          ],
        },
        {
          preKeys: [0],
          key: 4,
          name: '浏览精选好物',
          matches: [
            '@[desc="返回"][clickable=true] <<n [id="mix-navbar"] +n * [text="浏览好物"] + [text="返回领取"]',
          ],
          activityIds: ['.live.LiveDummyActivity'],
        },
        {
          preKeys: [4],
          key: 5,
          matches: ['@[text="放弃优惠"] <<n * [desc="返回"]'],
          activityIds: ['.live.LiveDummyActivity'],
        },
        {
          preKeys: [0],
          key: 6,
          name: '看1次短视频*3',
          action: 'clickCenter',
          actionDelay: 1000,
          matches: ['@ImageView < [desc="任务完成 返回领取，关闭，按钮"]'],
          activityIds: ['com.ss.android.excitingvideo.ExcitingVideoActivity'],
        },
        {
          preKeys: [1, 2, 3, 4, 5, 6],
          key: 7,
          name: '访问成功|任务完成|看视频完成',
          action: 'clickCenter',
          matches: [
            'FrameLayout[getChild(0).name$="TextureView"] + @ImageView + ViewGroup + ViewGroup + ViewGroup > ViewGroup > ViewGroup',
          ],
        },
      ],
    },
    //任务中心
    {
      key: 50,
      name: '任务中心-天天预约领金币-看视频*秒领',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            'HorizontalScrollView > LinearLayout > ViewGroup > @[desc="看视频"] + [desc~="[0-9]+"] + [desc="秒"] + [desc="领"] + [desc="直接领"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [0, 1],
          key: 1,
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
          actionCd: 5000,
          anyMatches: [
            '@[desc="视频"][vid="viewpager"] <<n * +n * [text~="看00:[0-9][0-9]领预约奖励"]',
            '@[desc="视频"][vid="viewpager"] <<n * +n * [text~="00:[0-9][0-9]"]',
          ],
          activityIds: ['.main.MainActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          action: 'clickCenter',
          anyMatches: [
            '@[text="点击领预约奖励"]',
            'FrameLayout > @ViewGroup[clickable=true] > View + FrameLayout > LinearLayout > ImageView',
          ],
          activityIds: ['.main.MainActivity'],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            'HorizontalScrollView > LinearLayout > ViewGroup > ViewGroup > @[desc="领取金币"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            '[getChild(0).desc="金币领取成功"] +n ViewGroup > @[desc="开心收下"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [4],
          key: 5,
          matches: [
            'ScrollView + ViewGroup > ViewGroup > FrameLayout + ImageView + ViewGroup + @ViewGroup + ViewGroup',//立即预约领金币
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [5],
          key: 6,
          matches: [
            'HorizontalScrollView > LinearLayout > ViewGroup > ViewGroup > @[desc="立即预约领取"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [6],
          key: 7,
          matches: [
            'HorizontalScrollView > LinearLayout > ViewGroup + ViewGroup > @ImageView + ImageView', //恭喜预约成功×
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [7],
          key: 8,
          matches: [
            'HorizontalScrollView > LinearLayout > ViewGroup + ViewGroup > @ImageView + ViewGroup + ImageView', //恭喜获得惊喜奖励×
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '任务中心-天天预约领金币-立即领取',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bullet.ui.BulletContainerActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            'HorizontalScrollView > LinearLayout[childCount=2] > ViewGroup > ViewGroup > ViewGroup + @ViewGroup + ViewGroup', //金币领取成功-看广告再赚-开心收下
          ],
          action: 'clickCenter',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.8',
          },
          actionDelay: 1000,
          matches: [
            '@HorizontalScrollView > LinearLayout > ViewGroup[childCount=6][index=1 || index=3]', //立即领取
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            'HorizontalScrollView > LinearLayout[childCount=2] > ViewGroup > ViewGroup > ViewGroup + @ViewGroup + ViewGroup', //金币领取成功-看广告再赚-开心收下
          ],
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 1000,
          matches: [
            'HorizontalScrollView > LinearLayout > ViewGroup[childCount=4] > @ViewGroup[index=2] > FrameLayout > View', //选择你的惊喜奖励-选我
          ],
        },
        {
          preKeys: [2],
          key: 3,
          actionDelay: 1000,
          matches: [
            'HorizontalScrollView > LinearLayout > ViewGroup + ViewGroup > ViewGroup + @ImageView', //金币预约成功-我知道了-×
          ],
        },
      ],
    },
    //手机充值
    {
      key: 60,
      name: '手机充值-广告-×',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[desc="关闭"][clickable=true] - * > [text="190521fc43254cb0b96fe55e90fa4dfa~tplv-20ashz96qn-1"]', //放心借
          ],
          activityIds: ['.live.LiveDummyActivity'],
        },
        {
          key: 1,
          matches: [
            '@[desc="关闭"][clickable=true] - * > [text="2ec70291e3984ad789797699237a21b8~tplv-20ashz96qn-1"]', //恭喜获得
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
      ],
    },
    //26.09.01-26.12.31 我的钱包-支付积分
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
            '@[desc="关闭"][clickable=true] + * > RelativeLayout[clickable=true] >n ImageView +n [desc="开心收下"]',
          ],
          activityIds: [
            '.wallet.ui.WalletActivity',
            '.cjpay.hostimpl.container.CJLiveDummyActivity',
          ],
        },
      ],
    },
    {
      key: 71,
      name: '我的钱包-今日签到',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.cjpay.hostimpl.container.CJLiveDummyActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            'FrameLayout > ViewGroup > [desc="返回 按钮"] - @ViewGroup > ViewGroup > ViewGroup', //立即签到
            'FrameLayout > ViewGroup > [desc="返回 按钮"] - @ViewGroup', //×
          ],
          anyMatches: [
            'HorizontalScrollView > LinearLayout > ViewGroup > ViewGroup > ScrollView > HorizontalScrollView > LinearLayout > ViewGroup > ViewGroup',
            'HorizontalScrollView > LinearLayout > ViewGroup > ViewGroup > ViewGroup > ViewGroup > [desc="玩法已升级"] + ViewGroup',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          actionDelay: 1000,
          matches: [
            'FrameLayout > ViewGroup > [desc="返回 按钮"] - @ViewGroup > ViewGroup > ViewGroup', //立即签到
          ],
        },
        {
          preKeys: [1],
          key: 71,
          position: {
            left: 'width*0.5',
            top: 'height*2.8',
          },
          matches: [
            'FrameLayout > ViewGroup > [desc="返回 按钮"] - @ViewGroup', //×
          ],
        },
      ],
    },
    {
      scopeKeys: [71],
      key: 72,
      name: '我的钱包-前往抖音月付看看',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          preKeys: [71],
          key: 0,
          matches: [
            '[desc~="前往抖音月付看看 滑动浏览30秒 抖币\\\\+[0-9]+ 去看看 按钮"] > ViewGroup',
          ],
          activityIds: ['.cjpay.hostimpl.container.CJLiveDummyActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@ImageButton[clickable=true] + [getChild(0).getChild(1).text="新人专享取现优惠"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[desc="返回"][clickable=true] < [id="headerLeftBar"] < [id="full-header"] + [id="JS_PageScroller"] > [id="with-scroll-content"] > View > [text="积分已到账"]',
          ],
          activityIds: ['.bullet.ui.BulletContainerActivity'],
        },
        {
          preKeys: [2],
          key: 3,
          position: {
            left: 'width*0.5',
            top: 'height*1.14',
          },
          matches: [
            'FrameLayout > ViewGroup > ViewGroup > @ViewGroup > ViewGroup + ScrollView + ViewGroup', //恭喜获得任务奖励-开心收下-×
          ],
          activityIds: ['.cjpay.hostimpl.container.CJLiveDummyActivity'],
        },
      ],
    },
    {
      key: 80,
      name: '支付成功',
      matchRoot: true,
      matchDelay: 1000,
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
          actionDelay: 5000,
          action: 'back',
          matches: ['@[desc="返回"] +n ScrollView [desc="返回商户"]'],
        },
        {
          key: 2,
          matches: [
            '@[text^="nP+4b4Fvph+"] + View >n [text="您有1个奖励待领取"]',
          ],
        },
      ],
    },
    {
      key: 81,
      name: '抖音乘车码开通福利-×',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            'HorizontalScrollView > LinearLayout > ViewGroup > ViewGroup + @ImageView + ViewGroup + ViewGroup + [desc="开心收下"]',
          ],
          activityIds: ['.live.LiveDummyHybridTransparentActivity'],
        },
      ],
    },
  ],
});
