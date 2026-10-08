import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    //23.07.01-25.06.30 蚂蚁投资者教育基地
    {
      key: 10,
      name: '蚂蚁投资者教育基地-完成浏览',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[id="ppage-index-index"] > View > @View > [getChild(1).text="浏览1篇投教精选内容"] > [text="去完成"]',
          ],
          matches: ['[id="ppage-index-index"] >n @[text="出发寻宝"]'],
        },
        {
          preKeys: [0,3],
          key: 1,
          matches: [
            '[id="ppage-index-index"] >n Image - [getChild(0).text="发现1个盲盒"] > @[text="立即打开"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.95',
          },
          matches: [
            '[id="ppage-index-index"] > View > @View > [getChild(1).text="浏览1篇投教精选内容"] > [text="去完成"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          actionDelay: 5000,
          matches: [
            '[id$="ic_back_btn"] < LinearLayout < @[id$="back_btn_container"][clickable=true]',
          ],
          activityIds: ['com.alipay.android.living.activity.LivingDetailActivity'],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            '[id="ppage-index-index"] >n Image - [getChild(0).text="任务完成"] > [text="收下并继续探险"]',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '蚂蚁投资者教育基地-完成答题得300奖学金-领取奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@TextView[clickable=true] +n * > [text="获得以下奖励"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[id="ppage-index-index"] >n [text="恭喜你"] +n @[text="收下了"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '[id="ppage-index-index"] >n [getChild(0).text="任务完成"] + @Image',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '蚂蚁投资者教育基地-浏览1篇投教精选内容',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          matches: ['[id="ppage-index-index"] >n @[text="立即打开"]'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[id="ppage-index-index"] >n @View > [text="浏览1篇投教精选内容"] +n [text="去完成"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 5000,
          anyMatches: [
            '@[desc="返回"][clickable=true] + * [text="理财盘友圈"]',
            '@[id$="back_btn_container"] < * -n * [text="蚂蚁投资者教育基地"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: [
            '[id="ppage-index-index"] >n [getChild(0).text="任务完成"] + @Image',
          ],
        },
      ],
    },
    //25.01.05-26.12.31 赚工分 兑红包
    {
      key: 20,
      name: '赚工分-我知道了',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="我知道了"][clickable=true] <n * + View[clickable=true] > Image',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '赚工分-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="80q"] +n @[text="去完成"][index=11][clickable=true]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '任务完成 返回领奖>',
          action: 'clickCenter',
          matches: [
            '[desc*="180020570000060569"] > WebView > [text="Smallfish App"] > [id="app"] > View > @View[clickable=true] > View + TextView',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
          ],
        },
      ],
    },
    //25.06.10开始 菜鸟-每日现金任务
    {
      key: 30,
      name: '菜鸟-每日现金任务',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          anyMatches: [
            '@View[getChild(0).getChild(0).text="0.12元"&&getChild(1).getChild(0).text="现金"]',
            'View > @[text="0.01元"][index=0] + TextView',
          ],
        },
        {
          key: 1,
          actionDelay: 4000,
          matches: [
            '@[desc="返回"][clickable=true] < RelativeLayout <n * - * [text~="前往菜鸟APP|打开淘宝闪购"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          actionDelay: 5000,
          matches: [
            '[text=""] < [id$="auiconView_backButton"] < @[desc="返回"][clickable=true] + * [text="支付宝·芭芭农场" || text="蚂蚁庄园"]',
          ],
        },
        {
          key: 3,
          matches: ['View > @[text="领奖"] + TextView'],
        },
      ],
    },
    //26.04.16-26.12.31 芝麻粒
    {
      key: 40,
      name: '芝麻粒-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[id="zhima-accumulation-daily-task"] > View > View > @View[clickable=true] > [text!~="去租赁下单"] + [text="+"] + [text~="[2-9][0-9]"] + [text="去完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="返回>"] - [text="已浏览完成"] < View <n @View[clickable=true] < View < [id="app"] < [text="Smallfish App"] < WebView <n [desc*="180020570000060569"] < FrameLayout <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          action: 'back',
          actionDelay: 5000,
          anyMatches: [
            '[text=""] < [id$="auiconView_backButton"] < @[desc="返回"][clickable=true]',
            '[text=""] < [id$="auiconView_homeButton"] < @[desc="返回首页"][clickable=true]',
          ],
        },
        {
          key: 3,
          excludeMatches: [
            '[id="zhima-accumulation-daily-task"] > View > View > @View[clickable=true] > [text!~="去租赁下单"] + [text="+"] + [text~="[2-9][0-9]"] + [text="去完成"]',
          ],
          matches: [
            '[id="home-container"] > [text="芝麻粒玩法"] - * @[text="一键收取"][clickable=true]',
          ],
        },
      ],
    },
    //26.09.30-26.10.31 芝麻粒
    {
      key: 41,
      name: '芝麻粒炼金-炼金',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          name: '恭喜获得-立即使用/去使用',
          matches: [
            '[text="芝麻粒炼金"] > [id="app"] + View > Dialog >n @Image[clickable=true]',
          ],
        },
        {
          preKeys: [0,1],
          key: 1,
          actionCd: 200,
          matches: [
            '[text="芝麻粒炼金"] > [id="app"] >n @View[clickable=true] > View + [text="每次消耗5粒"] + [text~="[1-9][0-9]*"]',
          ],
        },
        {
          key: 2,
          excludeMatches: [
            '[text="芝麻粒炼金"] >n [getChild(2).text="0"] - View > @View[clickable=true] > View > [text="10"] + [text="粒"]',
          ],
          matches: [
            '[text="芝麻粒炼金"] > [id="app"] > View + @View[clickable=true] > View > [text="100"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [41],
      key: 42,
      name: '芝麻粒炼金-次日礼包',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 2,
          actionDelay: 2000,
          matches: [
            '[text="芝麻粒炼金"] >n [getChild(2).text="0"] - View > @View[clickable=true] > View > [text="10"] + [text="粒"]',
          ],
        },
        {
          preKeys: [0,1,2],
          key: 3,
          matches: [
            '[text="芝麻粒炼金"] >n [text="次日礼包"] + [getChild(2).text="明日可领取"] > @View[clickable=true] > TextView',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            '[text="返回>"] - [text="已浏览完成"] < View <n @View[clickable=true] < View < [id="app"] < [text="Smallfish App"] < WebView <n [desc*="180020570000060569"] < FrameLayout <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [3,5],
          key: 5,
          action: 'back',
          actionDelay: 5000,
          anyMatches: [
            '[text=""] < [id$="auiconView_backButton"] < @[desc="返回"][clickable=true]',
            '[text=""] < [id$="auiconView_homeButton"] < @[desc="返回首页"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 43,
      name: '芝麻粒炼金-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="芝麻粒炼金"] >n [id="accumulateListContainer"] > @View[clickable=true] > [getChild(0).text!~="玩.*|去玩.*"] +n [text~="\\\\+[2-9][0-9]"] +n [text="去完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="返回>"] - [text="已浏览完成"] < View <n @View[clickable=true] < View < [id="app"] < [text="Smallfish App"] < WebView <n [desc*="180020570000060569"] < FrameLayout <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          action: 'back',
          actionDelay: 5000,
          anyMatches: [
            '[text=""] < [id$="auiconView_backButton"] < @[desc="返回"][clickable=true]',
            '[text=""] < [id$="auiconView_homeButton"] < @[desc="返回首页"][clickable=true]',
          ],
        },
        {
          key: 3,
          excludeMatches: [
            '[text="芝麻粒炼金"] >n [id="accumulateListContainer"] > @View[clickable=true] > [getChild(0).text!~="玩.*|去玩.*"] +n [text~="\\\\+[2-9][0-9]"] +n [text="去完成"]',
          ],
          matches: [
            '[text="芝麻粒炼金"] >n @[text="一键收取"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 44,
      name: '芝麻粒-滑一滑*秒得奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 1000,
          },
          actionCd: 3000,
          actionMaximum: 6,
          matches: [
            '@[id="app"][clickable=true] <<n * + * [text~="滑一滑[0-9]+秒得奖励"]',
          ],
        },
        {
          key: 1,
          excludeMatches: [
            '@[id="app"][clickable=true] <<n * + * [text~="滑一滑[0-9]+秒得奖励"]',
          ],
          matches: ['@[desc="返回"][clickable=true] + * [text="先用后付购物"]'],
        },
      ],
    },
    //26.07.14-26.12.31 支付宝·芝麻信用·京豆夺宝
    //做任务领支金豆
    {
      key: 45,
      name: '支金豆-去抽签',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          matches: [
            'View[clickable=true] > [text="抽今日财运签"] +n View > @[text="去抽签"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'View[clickable=true] > @View[clickable=true] >n [id^="_js_tiny_video_wrapper"] > [id^="_js_tiny_video_canvas"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[text="营销活动"] + [getChild(0).text="去完成"] + @TextView[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 46,
      name: '支金豆-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            'View[clickable=true] > [text~="坚持.*|抽.*|逛一逛.*|挖一挖.*"] +n View > @[text="领取"][clickable=true]',
          ],
          actionDelay: 2000,
          matches: [
            'View[clickable=true] > [text~="坚持.*|抽.*|逛一逛.*|挖一挖.*"] +n View > @[text="去完成"][clickable=true]',
          ],
        },
        {
          key: 1,
          matches: [
            'View[clickable=true] > [text~="坚持.*|抽.*|逛一逛.*|挖一挖.*"] +n View > @[text="领取"][clickable=true]',
          ],
        },
      ],
    },
    //26.06.01-27.06.30 好家缴费金
    {
      key: 50,
      name: '好家缴费金-今日签到',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@View[clickable=true] > [text="今日签到"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 51,
      name: '好家缴费金-去完成-任务完成 返回领奖>',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: ['@View[clickable=true] > [text="今日签到"]'],
          matches: [
            '[getChild(0).text^="逛一逛"] +2 [text="去完成"][clickable=true]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          matches: [
            '[desc*="180020570000041693"] >n [text="悬浮球模版"] > [id="app"] > @TextView[clickable=true]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
          ],
        },
      ],
    },
    {
      key: 52,
      name: '好家缴费金-领奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[getChild(0).text="完成1笔生活缴费"] +4 [text="领奖励"][clickable=true]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    //26.06.01-26.09.30 充值缴费-享清凉一夏
    {
      key: 60,
      name: '享清凉一夏-做任务 得抽奖机会',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          matches: ['View > @[text="领任务"][clickable=true]'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['View > @[text="去完成"][clickable=true]'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            'FrameLayout > [desc*="180020570000015088"] >n [text="Smallfish App"] > @[id="app"][clickable=true] > TextView',
          ],
        },
      ],
    },
    {
      key: 61,
      name: '享清凉一夏-立即抽奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: ['View > @[text~="领任务|去完成"][clickable=true]'],
          matches: [
            '[id="ant-render-id-CPT_6a3de4489f7f618191b3aaae"] > View > View > @View[clickable=true] > TextView',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(0).text="恭喜获得"] + @[text="关闭"][clickable=true]',
          ],
        },
      ],
    },
    //冲鸭攒话费
    {
      key: 90,
      name: '冲鸭攒话费-签到',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(0).getChild(0).id="today-sign-coin"] + @[getChild(0).text="今日签到"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.686',
          },
          actionDelay: 5000,
          matches: [
            '@FrameLayout < FrameLayout - WebView - FrameLayout < FrameLayout < [id$="h5_pc_container"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 1000,
          },
          actionDelay: 5000,
          matches: ['@[id="__react-content"] >n [text="滑动浏览得"]'],
        },
      ],
    },
    {
      key: 91,
      name: '冲鸭攒话费-任务-点外卖领红包',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 1000,
          anyMatches: [
            '@[text="去完成"] - * > [text="逛闪购领大额红包"]',
            '@[text="去完成"] - * > [text="点外卖领红包"]',
            '@[text="去完成"] - * > [text="去借呗领5元话费红包"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          actionDelay: 5000,
          anyMatches: [
            '@[desc="返回"][clickable=true] <<n * - * [id="p-2021003183669766-title-icon"]',
            '[id="__react-content"] >n @Button[clickable=true] + [text="请选择地址"]',
            '@[desc="返回"][clickable=true] <<n * - * [text="借呗"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.686',
          },
          actionDelay: 5000,
          matches: [
            '@FrameLayout < FrameLayout - WebView - FrameLayout < FrameLayout < [id$="h5_pc_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          actionDelay: 5000,
          matches: [
            '[id$="ic_back_btn"] < LinearLayout < @[id$="back_btn_container"][clickable=true]',
          ],
          activityIds: ['com.alipay.android.living.activity.LivingDetailActivity'],
        },
      ],
    },
    {
      key: 92,
      name: '冲鸭攒话费-任务-查看3个商品领奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 10000,
          matches: ['@[text="去完成"] - * > [text="查看3个商品领奖励"]'],
        },
        {
          preKeys: [0],
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
            duration: 1000,
          },
          actionCd: 5000,
          actionMaximum: 6,
          matches: ['@[id="feeds"] >n [text~="滑动浏览[0-9]+s，赚3充值金"]'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="获得"] + [text="3"] + [text="返回"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.686',
          },
          actionDelay: 5000,
          matches: [
            '@FrameLayout < FrameLayout - WebView - FrameLayout < FrameLayout < [id$="h5_pc_container"]',
          ],
        },
      ],
    },
    {
      key: 93,
      name: '冲鸭攒话费-任务-去借呗领*话费红包',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 2000,
          matches: ['@[text="去完成"] - * > [text="去借呗领5元话费红包"]'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: ['@[desc="返回"][clickable=true] <<n * - * [text="借呗"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 94,
      name: '冲鸭攒话费-任务',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 3000,
          anyMatches: [
            '@[text="去完成"] - * > [text="逛一逛领购物大红包"]',
            '@[text="去完成"] - * > [text="逛支付有礼抽福利"]',
            '@[text="去完成"] - * > [text="逛一逛领优惠"]',
            '@[text="去完成"] - * > [text="逛一逛领好礼"]',
            '@[text="去完成"] - * > [text="逛一逛得福利"]',
            '@[text="去完成"] - * > [text="遛小狗得好礼"]',
            '@[text="去完成"] - * > [text="逛一逛天天领奖励"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          anyMatches: [
            '@[desc="关闭"][clickable=true] <<n * - * [text="天天集福气"]',
            '@[desc="关闭"][clickable=true] <<n * - * [text*="多多有礼"]',
            '@[desc="返回"][clickable=true] <<n * - * [text*="金币"]',
            '@[desc="返回"][clickable=true] <<n * - * [text*="话费币"]',
            '@[desc="返回"][clickable=true] <<n * - * [text="金币挑战赛"]',
            '@[desc="返回"][clickable=true] <<n * - * [text="放弃奖励 >"]',
            '@[desc="返回"][clickable=true] <<n * - * [text="O1CN010nSA061UCo6yWR7MJ_!!6000000002482-2-tps-195-149.png_"]',
            '@[desc="返回"][clickable=true] <<n * - * [text="集分宝"]',
          ],
        },
      ],
    },
    {
      key: 95,
      name: '冲鸭攒话费-逛精选好物得奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 4000,
          anyMatches: ['@[text="去完成"] - * > [text="逛精选好物得奖励"]'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[id="__react-content"] > [id="feeds"] + [getChild(1).text="获得"] > @[text="返回"]',
          ],
        },
      ],
    },
    {
      key: 96,
      name: '冲鸭攒话费-逛*领150元话费',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 20000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 5000,
          anyMatches: [
            '@[text="去完成"] - * > [text="逛招商领150元话费"]',
            '@[text="去完成"] - * > [text="逛光大领150元话费"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          anyMatches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="信用卡新户礼"]',
            '@[desc="返回"][clickable=true] <<n * - * [id="anchor_point_0"]',
          ],
        },
      ],
    },
    {
      key: 97,
      name: '冲鸭攒话费-逛5秒淘宝人生领奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 5000,
          matches: ['@[text="去完成"] - * > [text="逛5秒淘宝人生领奖励"]'],
        },
        {
          key: 1,
          action: 'clickCenter',
          actionDelay: 5000,
          matches: [
            '[text=""] < [id$="auiconView_backButton"] < @[desc="返回"][clickable=true] + * [text="正在跳转"]',
          ],
        },
      ],
    },
    {
      key: 98,
      name: '冲鸭攒话费-任务-换一换',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          excludeMatches: [
            '@[text="去完成"] - * > [text="逛5秒淘宝人生领奖励"]',
          ],
          matches: ['[id="task"] >n @[text="换一换"]'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          actionDelay: 2000,
          anyMatches: [
            '@[text="去完成"] - * > [text="逛一逛消费金"]',
            '@[text="去完成"] - * > [text="免费领保障金"]',
            '@[text="去完成"] - * > [text="去装宽带超划算"]',
            '@[text="去完成"] - * > [text="去出行里程签到得奖励"]',
            '@[text="去完成"] - * > [text="动动手指赚现金红包"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 5000,
          anyMatches: [
            '@[desc="返回"][clickable=true] <<n * - * [id="insiop-notice-center-dom-68a21f761c7fb05d"]',
            '@[desc="返回"][clickable=true] <<n * - * [id="a-icon-sprite-node"]',
            '@[desc="返回"][clickable=true] <<n * - * [text="里程币"]',
            '@[desc="返回"][clickable=true] <<n * - * [text~="逛一逛[0-9]+s领取奖励"]',
          ],
        },
      ],
    },
    {
      key: 99,
      name: '冲鸭攒话费-任务-玩游戏赚现金',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          excludeMatches: [
            '@[text="去完成"] - * > [text="逛5秒淘宝人生领奖励"]',
          ],
          matches: ['[id="task"] >n @[text="换一换"]'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          actionDelay: 3000,
          matches: ['@[text="去完成"] - * > [text="玩游戏赚现金"]'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 5000,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="游戏中心"]',
          ],
        },
      ],
    },
    {
      key: 990,
      name: '冲鸭攒话费-任务-逛5秒快递包裹游历',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          excludeMatches: [
            '@[text="去完成"] - * > [text="逛5秒淘宝人生领奖励"]',
          ],
          matches: ['[id="task"] >n @[text="换一换"]'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          actionDelay: 4000,
          matches: ['@[text="去完成"] - * > [text="逛5秒快递包裹游历"]'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 5000,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [id="mainInteraction"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="· 全网查件 便捷寄件"]',
          ],
        },
      ],
    },
    {
      key: 991,
      name: '冲鸭攒话费-任务-逛闲鱼赚支付红包',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          excludeMatches: [
            '@[text="去完成"] - * > [text="逛5秒淘宝人生领奖励"]',
          ],
          matches: ['[id="task"] >n @[text="换一换"]'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          actionDelay: 5000,
          matches: ['@[text="去完成"] - * > [text="逛闲鱼赚支付红包"]'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 5000,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="就选你啦"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="· 全网查件 便捷寄件"]',
          ],
        },
        {
          preKeys: [0, 1, 2, 3],
          key: 4,
          action: 'back',
          matches: [
            '[id="__react-content"] > [id="page-activity"] >n [id="lotteryComp"]',
          ],
        },
      ],
    },
    {
      key: 100,
      name: '广告-查看商品或滑动*秒后可领奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.25',
            },
            duration: 500,
          },
          actionCd: 3000,
          matches: [
            '@[id="xlight-feeds"] - [getChild(0).text="广告"] > [text~="查看商品或滑动[0-9]+秒后可领奖励"]',
          ],
        },
        {
          preKeys: [0],
          key: 100,
          matches: [
            '[id="xlight-feeds"] - [getChild(0).text="广告"] > [text="任务已完成，恭喜获得奖励！"] + @[text="关闭"][clickable=true]',
          ],
        },
      ],
    },
    //百度地图-去支付宝浏览图文领奖
    //百度网盘-小程序点图文领奖-去小程序点图文
    {
      key: 101,
      name: '图文广告',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          anyMatches: [
            '[text!~="广告1已完成"] <<n WebView +n FrameLayout > FrameLayout > RelativeLayout > @LinearLayout[clickable=true] > ViewGroup > ViewGroup',
            '[text!~="广告1已完成"] <<n WebView +n FrameLayout > FrameLayout - FrameLayout > RelativeLayout > @LinearLayout[clickable=true] >n CKViewPager > FrameLayout[index=1]',
            '[text="广告1已完成"] <<n WebView +n FrameLayout > FrameLayout + FrameLayout > RelativeLayout > @LinearLayout[clickable=true] >n CKViewPager > FrameLayout[index=1]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: [
            '[id$="halfscreen_main_title"] >n @[id$="tiny_half_close"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
          ], //半屏广告
        },
        {
          preKeys: [0],
          key: 2,
          actionDelay: 5000,
          matches: ['@[desc="返回"][clickable=true] >n [text=""]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ], //二级广告页
        },
        {
          preKeys: [0],
          key: 3,
          actionDelay: 5000,
          matches: ['@[desc="关闭"][clickable=true] > [text=""]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ], //游戏
        },
      ],
    },
    {
      key: 102,
      name: '小程序',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 16000,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="瑞幸咖啡温馨提示"] +n [text="同意"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 103,
      name: '小程序-广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@View < ViewGroup[index=8][childCount=1] -3 ViewGroup > View',
          ],
        },
        {
          key: 1,
          matches: [
            '@View < ViewGroup[index=7][childCount=1] -3 ViewGroup > View',
          ],
        },
      ],
    },
    //其他App活动
    {
      key: 200,
      name: '飞猪旅行-点一键收下得奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['[text="出行券包天天领"] >n @[text="一键收下"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 201,
      name: '飞猪旅行-找10次抽奖券',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[getChild(2).id="gashapon_machine_game"] + View > [id="feeds"] > View > [text="下滑寻找可获得更多「扭蛋券」"]',
          ],
          matches: [
            '[getChild(2).id="gashapon_machine_game"] + View > [id="feeds"] > [id="feeds-area"] > [id^="macy-container"] > View > View[clickable=true] > @[text="点我领奖励"]',
          ],
        },
        {
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
            duration: 500,
          },
          actionDelay: 1000,
          actionCd: 3000,
          matches: [
            '[getChild(2).id="gashapon_machine_game"] + View > @[id="feeds"] > [id="feeds-area"] > [id^="macy-container"]',
          ],
          excludeMatches: [
            '[getChild(2).id="gashapon_machine_game"] + View > [id="feeds"] > View > [text="下滑寻找可获得更多「扭蛋券」"]',
          ],
        },
        {
          preKeys: [0,2],
          key: 2,
          excludeMatches: [
            '[getChild(2).id="gashapon_machine_game"] + View > [id="feeds"] > View > [text~="滑动浏览商品，寻找[0-9]+次抽奖券"]',
          ],
          action: 'back',
          anyMatches: [
            '@[desc="返回"][clickable=true] < [id$="h5_tf_nav_ly"]',
            '@[desc="返回"][clickable=true] > [id$="auiconView_backButton"] > [text=""]',
            '[id$="frameLayout_rightButton1"] >n [desc="更多"] +n @[desc="关闭"][clickable=true] > [text=""]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          action: 'back',
          matches: [
            '[desc="首页"] < FrameLayout[clickable=true] < TabWidget[id="android:id/tabs"]',
          ],
        },
      ],
    },
    {
      key: 202,
      name: '飞猪旅行-寻找10枚许愿星',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[id="wishingStar"] +n View > [id="feeds"] > View > [text="下滑寻找可获得更多许愿星"]',
          ],
          matches: [
            '[id="wishingStar"] +n View > [id="feeds"] > [id^="macy-container"] > View > View[clickable=true] > View > @[text="点我领奖励"]',
          ],
        },
        {
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
            duration: 500,
          },
          actionDelay: 1000,
          actionCd: 3000,
          matches: [
            '[id="wishingStar"] +n View > @[id="feeds"] > [id^="macy-container"]',
          ],
          excludeMatches: [
            '[id="wishingStar"] +n View > [id="feeds"] > View > [text="下滑寻找可获得更多许愿星"]',
          ],
        },
        {
          preKeys: [0,2],
          key: 2,
          excludeMatches: [
            '[getChild(2).id="gashapon_machine_game"] + View > [id="feeds"] > View > [text~="滑动浏览商品，寻找[0-9]+次许愿星"]',
          ],
          action: 'back',
          anyMatches: [
            '@[desc="返回"][clickable=true] < [id$="h5_tf_nav_ly"]',
            '@[desc="返回"][clickable=true] > [id$="auiconView_backButton"] > [text=""]',
            '[id$="frameLayout_rightButton1"] >n [desc="更多"] +n @[desc="关闭"][clickable=true] > [text=""]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          action: 'back',
          matches: [
            '[desc="首页"] < FrameLayout[clickable=true] < TabWidget[id="android:id/tabs"]',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 400,
      name: '更新提示-取消',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="确定"] - @[text="取消"][clickable=true] < * - * [text="更新提示"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
  ],
});
