import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    //芝麻粒
    {
      key: 3,
      name: '芝麻粒-完成任务',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 35000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="Smallfish App"] >n [text="已浏览完成"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite1',
          ],
        },
      ],
    },
    //蚂蚁投资者教育基地
    {
      key: 10,
      name: '蚂蚁投资者教育基地-出发寻宝',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['[id="ppage-index-index"] >n @[text="出发寻宝"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '蚂蚁投资者教育基地-浏览1篇投教精选内容',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['[id="ppage-index-index"] >n @[text="立即打开"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          position: {
            left: 'width * 0.5035',
            top: 'width * 0.5052',
          },
          matches: [
            '[id="ppage-index-index"] >n @View > [text="浏览1篇投教精选内容"] +n [text="去完成"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
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
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: [
            '[id="ppage-index-index"] >n [text="任务完成"] +n @[text="收下并继续探险"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '蚂蚁投资者教育基地-完成答题得300奖学金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['[id="ppage-index-index"] >n @[text="立即打开"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[id="ppage-index-index"] >n @[text="去完成"] -n [text="完成答题得300奖学金"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '蚂蚁投资者教育基地-完成答题得300奖学金-领取奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
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
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
    //赚工分
    {
      key: 20,
      name: '赚工分-我知道了',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          matches: [
            '@[text="我知道了"][clickable=true] <n * + View[clickable=true] > Image',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['[text="80q"] +n @[text="去完成"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '赚工分-去完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 3000,
          matches: ['[text="80q"] +n @[text="去完成"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '赚工分-任务完成-<',
      matchRoot: true,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 17000,
          matches: [
            '[text="Smallfish App"] > [id="app"] > View > @View[clickable=true]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity', //已浏览完成 返回>//芝麻炼金-逛玩赚支付宝领现金
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App02', //任务完成
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main', //逛商家服务
            'com.alipay.android.phone.businesscommon.globalsearch.ui.MainSearchActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          actionMaximum: 2,
          matches: [
            '[text="Smallfish App"] > [id="app"] > View > @View[clickable=true]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity', //逛商家服务
          ],
        },
      ],
    },
    {
      key: 28,
      name: '去看视频30秒领红包-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[id$="ic_back_btn"] < * < @[id$="back_btn_container"][clickable=true] < * -n * [desc="元"]',
          ],
          activityIds: [
            'com.alipay.android.living.activity.LivingDetailActivity',
          ],
        },
      ],
    },
    {
      key: 29,
      name: '任务已完成，恭喜获得奖励！-关闭',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="关闭"][clickable=true] - [text="任务已完成，恭喜获得奖励！"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    //充鸭攒话费
    {
      key: 30,
      name: '充鸭攒话费-签到',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 3000,
          matches: [
            '[id="__react-content"] >n [text="今天"] +2 @[text="签到"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          position: {
            left: 'width * 0.5009',
            top: 'width * 1.4593',
          },
          actionDelay: 3000,
          matches: ['@[id$="nebulax_root_view"]'],
        },
        {
          preKeys: [0, 1],
          key: 2,
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
            duration: 1000,
          },
          matches: ['@[id="__react-content"] >n [text="滑动浏览得"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
    {
      key: 31,
      name: '充鸭攒话费-任务-点外卖领红包',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 4000,
          anyMatches: [
            '[id="task"] >n @View >n [text="逛闪购领大额红包"]',
            '[id="task"] >n @View >n [text="点外卖领红包"]',
            '[id="task"] >n @View >n [text="去借呗领5元话费红包"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          anyMatches: [
            '@[desc="返回"][clickable=true] <<n * - * [id="p-2021003183669766-title-icon"]',
            '[id="__react-content"] >n @Button[clickable=true] + [text="请选择地址"]',
            '@[desc="返回"][clickable=true] <<n * - * [text="借呗"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          position: {
            left: 'width * 0.5009',
            top: 'width * 1.4593',
          },
          actionDelay: 3000,
          matches: ['@[id$="nebulax_root_view"]'],
        },
      ],
    },
    {
      key: 32,
      name: '充鸭攒话费-任务-查看3个商品领奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 6000,
          matches: ['[id="task"] >n @View >n [text="查看3个商品领奖励"]'],
        },
        {
          preKeys: [0],
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
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          position: {
            left: 'width * 0.5009',
            top: 'width * 1.4593',
          },
          actionDelay: 3000,
          matches: ['@[id$="nebulax_root_view"]'],
        },
      ],
    },
    {
      key: 33,
      name: '充鸭攒话费-任务-去借呗领*话费红包',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 4000,
          matches: ['@[desc="返回"][clickable=true] <<n * - * [text="借呗"]'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: [
            '@[desc="关闭"][clickable=true] <<n * - * Button[clickable=true]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 34,
      name: '充鸭攒话费-任务',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 4000,
          anyMatches: [
            '[id="task"] >n @View >n [text="逛一逛领购物大红包"]',
            '[id="task"] >n @View >n [text="逛支付有礼抽福利"]',
            '[id="task"] >n @View >n [text="逛一逛领优惠"]',
            '[id="task"] >n @View >n [text="逛一逛领好礼"]',
            '[id="task"] >n @View >n [text="逛一逛得福利"]',
            '[id="task"] >n @View >n [text="遛小狗得好礼"]',
            '[id="task"] >n @View >n [text="逛5秒淘宝人生领奖励"]',
            '[id="task"] >n @View >n [text="逛一逛天天领奖励"]',
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
            '@[desc="返回"][clickable=true] <<n * - * [text="O1CN010nSA061UCo6yWR7MJ_!!6000000002482-2-tps-195-149.png_"]',
            '@[desc="返回"][clickable=true] <<n * - * [text="打开淘宝App"]',
            '@[desc="返回"][clickable=true] <<n * - * [text="集分宝"]',
          ],
        },
      ],
    },
    {
      key: 35,
      name: '充鸭攒话费-逛精选好物得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 40000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 4000,
          anyMatches: ['[id="task"] >n @View >n [text="逛精选好物得奖励"]'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="获得"] + [text="1"] + [text="返回"]',
          ],
        },
      ],
    },
    {
      key: 36,
      name: '充鸭攒话费-逛*领150元话费',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 4000,
          anyMatches: [
            '[id="task"] >n @View >n [text="逛招商领150元话费"]',
            '[id="task"] >n @View >n [text="逛光大领150元话费"]',
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
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 37,
      name: '充鸭攒话费-逛5秒淘宝人生领奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 5000,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="O1CN010nSA061UCo6yWR7MJ_!!6000000002482-2-tps-195-149.png_"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 38,
      name: '充鸭攒话费-任务-换一换',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 5000,
          matches: ['[id="task"] >n @[text="换一换"]'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          actionDelay: 2000,
          anyMatches: [
            '[id="task"] >n @View >n [text="免费领保障金"]',
            '[id="task"] >n @View >n [text="去装宽带超划算"]',
            '[id="task"] >n @View >n [text="去出行里程签到得奖励"]',
            '[id="task"] >n @View >n [text="动动手指赚现金红包"]',
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
      key: 39,
      name: '充鸭攒话费-任务-玩游戏赚现金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 5000,
          matches: ['[id="task"] >n @[text="换一换"]'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          actionDelay: 5000,
          matches: ['[id="task"] >n @View >n [text="玩游戏赚现金"]'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 5000,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="游戏中心"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          actionMaximum: 3,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="游戏中心"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 40,
      name: '充鸭攒话费-任务-逛5秒快递包裹游历',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 5000,
          matches: ['[id="task"] >n @[text="换一换"]'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          actionDelay: 5000,
          matches: ['[id="task"] >n @View >n [text="逛5秒快递包裹游历"]'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 5000,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [id="mainInteraction"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="· 全网查件 便捷寄件"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 41,
      name: '充鸭攒话费-任务-逛闲鱼赚支付红包',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 5000,
          matches: ['[id="task"] >n @[text="换一换"]'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          actionDelay: 5000,
          matches: ['[id="task"] >n @View >n [text="逛闲鱼赚支付红包"]'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 5000,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="就选你啦"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="· 全网查件 便捷寄件"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          preKeys: [0, 1, 2, 3],
          key: 4,
          action: 'back',
          matches: [
            '[id="__react-content"] > [id="page-activity"] >n [id="lotteryComp"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    //
    {
      key: 100,
      name: '飞猪旅行-点一键收下得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
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
      key: 101,
      name: '半屏广告-×', //百度网盘-小程序点图文领奖-去小程序点图文
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: [
            '@LinearLayout[clickable=true] >n CKViewPager > FrameLayout[index=1]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[id$="halfscreen_main_title"] >n @[id$="tiny_half_close"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
          ],
        },
      ],
    },
    {
      key: 102,
      name: '支付宝-小程序',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 16000,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="瑞幸咖啡温馨提示"] +n [text="同意"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App02',
          ],
        },
      ],
    },
    //首页广告类
    {
      key: 499,
      name: '广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@View < ViewGroup[index=8][childCount=1] -3 ViewGroup > View',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
  ],
});
