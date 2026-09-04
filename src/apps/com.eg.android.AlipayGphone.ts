import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    //芝麻粒
    {
      key: 0,
      name: '芝麻粒-送你1次免费炼金机会',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '[text="芝麻粒炼金"] >n @View[clickable=true] > [text="去完成任务"]',
            '[text="芝麻粒炼金"] >n @View[clickable=true] > [text="去浏览 15s 视频"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '芝麻粒-完成任务',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 70000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="Smallfish App"] >n @View[clickable=true] >n [text="已浏览完成"] + [text="返回>"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite1',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '芝麻粒-广告-查看商品或滑动*秒后可领奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@View[clickable=true] < * < [id="xlight-feeds"] - * > [text="广告"] + [text~="查看商品或滑动[0-9]+秒后可领奖励"] + [text="关闭"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="关闭"] - [text~="查看商品或滑动[0-9]+秒后可领奖励"] - [text="广告"] < * + [id="xlight-feeds"] >n @View[clickable=true]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 16000,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="瑞幸咖啡温馨提示"] +n [text="同意"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App03',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: [
            '@[text="关闭"][clickable=true] - [text="任务已完成，恭喜获得奖励！"] - [text="广告"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '芝麻粒-滑一滑*秒得奖励',
      matchRoot: true,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
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
          actionCd: 3000,
          actionMaximum: 6,
          matches: [
            '@[id="app"][clickable=true] <<n * + * [text~="滑一滑[0-9]+秒得奖励"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          key: 1,
          excludeMatches: [
            '@[id="app"][clickable=true] <<n * + * [text~="滑一滑[0-9]+秒得奖励"]',
          ],
          matches: ['@[desc="返回"][clickable=true] + * [text="先用后付购物"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    //23.07.01-25.06.30蚂蚁投资者教育基地
    {
      key: 10,
      name: '蚂蚁投资者教育基地-完成浏览',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['[id="ppage-index-index"] >n @[text="出发寻宝"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['[id="ppage-index-index"] >n @[text="出发寻宝"]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '蚂蚁投资者教育基地-完成答题得300奖学金',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 2000,
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
      key: 12,
      name: '蚂蚁投资者教育基地-完成答题得300奖学金-领取奖励',
      matchRoot: true,
      actionMaximum: 1,
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
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '[id="ppage-index-index"] >n [getChild(0).text="任务完成"] + @Image',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '蚂蚁投资者教育基地-浏览1篇投教精选内容',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
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
            '[id="ppage-index-index"] >n [getChild(0).text="任务完成"] + @Image',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
    {
      key: 14,
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
    //25.01.05-26.12.31 赚工分 兑红包
    {
      key: 20,
      name: '赚工分-我知道了',
      matchRoot: true,
      actionMaximum: 1,
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
      name: '赚工分-去完成-任务完成 返回领奖>',
      matchRoot: true,
      actionMaximum: 1,
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
          action: 'clickCenter',
          matches: [
            '[desc*="180020570000060569"] >n [text="Smallfish App"] > [id="app"] > View > @View[clickable=true] > View + TextView',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App02',
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
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
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
          actionDelay: 5000,
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
          actionDelay: 5000,
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
      matchDelay: 1000,
      matchTime: 20000,
      resetMatch: 'activity',
      actionMaximum: 1,
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
          actionDelay: 5000,
          matches: ['@[id$="nebulax_root_view"]'],
        },
      ],
    },
    {
      key: 32,
      name: '充鸭攒话费-任务-查看3个商品领奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
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
          actionDelay: 4000,
          matches: ['@[id$="nebulax_root_view"]'],
        },
      ],
    },
    {
      key: 33,
      name: '充鸭攒话费-任务-去借呗领*话费红包',
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
      key: 34,
      name: '充鸭攒话费-任务',
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
      key: 35,
      name: '充鸭攒话费-逛精选好物得奖励',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 40000,
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
      matchDelay: 1000,
      matchTime: 20000,
      resetMatch: 'activity',
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
      matchDelay: 1000,
      matchTime: 10000,
      resetMatch: 'activity',
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
            '@[desc="返回"][clickable=true] <<n * - * [text="打开淘宝App"]',
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
      matchDelay: 1000,
      matchTime: 20000,
      resetMatch: 'activity',
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
      key: 39,
      name: '充鸭攒话费-任务-玩游戏赚现金',
      matchRoot: true,
      matchDelay: 1000,
      matchTime: 20000,
      resetMatch: 'activity',
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
      matchDelay: 1000,
      matchTime: 20000,
      resetMatch: 'activity',
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
      matchDelay: 1000,
      matchTime: 20000,
      resetMatch: 'activity',
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
    //做任务领支金豆
    {
      key: 50,
      name: '支金豆-去抽签',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'View[clickable=true] > [text="抽今日财运签"] +n View > @[text="去抽签"][clickable=true]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 51,
      name: '支金豆-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'View[clickable=true] > [text~="坚持.*|抽.*"] +n View > @[text="去完成"][clickable=true]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          key: 1,
          matches: [
            'View[clickable=true] > View > @[text="领取"][clickable=true]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          key: 2,
          matches: [
            'View[clickable=true] > View > @[text="领取"][clickable=true]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    //26.06.01-27.06.30 好家缴费金
    {
      key: 60,
      name: '好家缴费金-今日签到',
      matchRoot: true,
      actionMaximum: 1,
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
      key: 61,
      name: '好家缴费金-去完成-任务完成 返回领奖>',
      matchRoot: true,
      actionMaximum: 1,
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
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
          ],
        },
      ],
    },
    {
      key: 62,
      name: '好家缴费金-领奖励',
      matchRoot: true,
      actionMaximum: 1,
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
      key: 70,
      name: '享清凉一夏-做任务 得抽奖机会',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['View > @[text="领任务"][clickable=true]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['View > @[text="去完成"][clickable=true]'],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            'FrameLayout > [desc*="180020570000015088"] >n [text="Smallfish App"] > @[id="app"][clickable=true] > TextView',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 71,
      name: '享清凉一夏-立即抽奖',
      matchRoot: true,
      actionMaximum: 1,
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
    //浏览App活动
    {
      key: 100,
      name: '飞猪旅行-点一键收下得奖励',
      matchRoot: true,
      actionMaximum: 1,
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
    //百度地图-去支付宝浏览图文领奖
    //百度网盘-小程序点图文领奖-去小程序点图文
    {
      key: 101,
      name: '图文广告',
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
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App02',
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
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$XRiverLite1',
          ], //游戏
        },
      ],
    },
    {
      key: 102,
      name: '小程序',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 15000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: [
            '@[desc="返回"][clickable=true] <<n * - * [text="瑞幸咖啡温馨提示"] +n [text="同意"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App02',
          ],
        },
      ],
    },
    {
      key: 103,
      name: '小程序-广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@View < ViewGroup[index=8][childCount=1] -3 ViewGroup > View',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
        {
          key: 1,
          matches: [
            '@View < ViewGroup[index=7][childCount=1] -3 ViewGroup > View',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App02',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 400,
      name: '更新提示-取消',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="确定"] - @[text="取消"][clickable=true] < * - * [text="更新提示"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App02',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App03',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App04',
          ],
        },
      ],
    },
  ],
});
