import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      scopeKeys: [21,41,52,52,62,71,100],
      key: 1,
      name: '通用-返回-scopeKeys',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
        'com.alipay.android.living.activity.LivingDetailActivity',
        'com.alipay.android.phone.businesscommon.globalsearch.ui.MainSearchActivity',
      ],
      rules: [
        {
          preKeys: [1,21],
          key: 1,
          name: '任务完成 返回领奖>',
          action: 'clickCenter',
          matches: [
            'TextView - View <n @View[clickable=true] < View < [id="app"] < [text="Smallfish App"] < WebView <n [desc*="180020570000060569"] < FrameLayout <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [2,41,51,52],
          key: 2,
          name: '已浏览完成 返回>',
          action: 'clickCenter',
          matches: [
            '[text="返回>"] - [text="已浏览完成"] < View <n @View[clickable=true] < View < [id="app"] < [text="Smallfish App"] < WebView <n [desc*="180020570000060569"] < FrameLayout <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [3,71],
          key: 3,
          action: 'clickCenter',
          matches: [
            '@TextView[clickable=true] < [id="app"] <n [text="悬浮球模版"] < WebView <n [desc*="180020570000041693"] < FrameLayout <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [4,41,51,52,62,71,100],
          key: 4,
          name: '返回>',
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@[desc^="返回"][clickable=true] > [id~=".*homeButton|.*backButton"] > [text="" || text=""]',
          ],
        },
      ],
    },
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
          matches: ['[id="ppage-index-index"] >n @[text="出发寻宝"]'],
        },
        {
          key: 1,
          matches: [
            '[id="ppage-index-index"] >n Image - [getChild(0).text="发现1个盲盒"] > @[text="立即打开"]',
          ],
        },
        {
          preKeys: [1],
          key: 10,
          actionDelay: 5000,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.95',
          },
          matches: [
            '[id="ppage-index-index"] > View > @View > [getChild(1).text="浏览1篇投教精选内容"] > [text="去完成"]',
          ],
        },
        {
          key: 11,
          matches: [
            '[getChild(0).text="任务完成"] > @[text="收下并继续探险"] <n View < View < View < View <n [id="ppage-index-index"] < View < [id="__react-content"] < WebView < WebView < FrameLayout < [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
        {
          preKeys: [6],
          key: 12,
          matches: [
            '[id="ppage-index-index"] >n [getChild(0).text="任务完成"] + @Image',
          ],
        },
        {
          preKeys: [6],
          key: 13,
          matches: [
            '[id="ppage-index-index"] >n Image - [getChild(0).text="恭喜你"] > @[text="收下了"]',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '蚂蚁投资者教育基地-完成答题',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[id="ppage-index-index"] >n Image - [getChild(0).text="发现1个盲盒"] > @[text="去完成"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 1,
          matches: [
            '@TextView[clickable=true][index=2] <n View <n View - TextView < View < View - [id="app"] < View < WebView < WebView <n FrameLayout < [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_trans_progress_rl"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[id="app"] + View >n TextView +n View > @[text="再试一次"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 3,
          matches: [
            '[id="app"] + View >n @TextView[clickable=true] +n View > [text="获得以下奖励"]',
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
          key: 21,
          actionDelay: 2000,
          matches: [
            '[text="80q"] +n @[text="去完成"][index=11][clickable=true]',
          ],
          excludeMatches: [
            '@[text="我知道了"][clickable=true] <n * + View[clickable=true] > Image',
            '@[name$="View"][clickable=true] < [id="app"] <n [text="悬浮球模版"] < WebView <n [desc*="180020570000041693"] < FrameLayout <n [id="android:id/content"]',
          ],
          activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
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
          key: 30,
          actionDelay: 2000,
          anyMatches: [
            '[getChild(0).text="现金"] - [getChild(0).text="0.12元"] < @View < View <n View <n [id="homepage-root"] < [id="__react-content"] < WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
            'TextView - @[text*="元"] < View <n View <n [id="homepage-root"] < [id="__react-content"] < WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
        {
          preKeys: [30],
          key: 11,
          matches: [
            '@[text="下载打开APP"][clickable=true] <n View < View <n View < [id="root"] < View < [text="菜鸟X天猫APP福利"] < WebView <n FrameLayout < [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
        {
          preKeys: [30],
          key: 12,
          actionDelay: 5000,
          matches: [
            '[text=""] < [id$="auiconView_backButton"] < @[desc="返回"][clickable=true] + * [text*="芭芭农场" || text*="蚂蚁庄园"]',
          ],
        },
        {
          key: 13,
          actionDelay: 5000,
          matches: [
            '[text=""] < [id$="auiconView_backButton"] < @[desc="返回"][clickable=true] + * [text="正在跳转" || text="菜鸟" || text*="果园" || text*="天猫APP" || text*="淘特App"]',
          ],
        },
        {
          key: 14,
          matches: [
            '@[text="领奖"] < View <n View <n [id="homepage-root"] < [id="__react-content"] < WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
      ],
    },
    //26.04.16-26.12.31 芝麻粒
    {
      key: 40,
      name: '芝麻粒-每日签到',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          name: '开心收下',
          matches: [
            '@[text="开心收下"] <n View <n View < View <n View < Dialog < View <n WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
        {
          key: 1,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.85',
          },
          matches: [
            '@TextView < View < View[index=parent.childCount.minus(1)] <n [id="home-container"] < [id="app"] < WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
          excludeMatches: [
            '@[text="开心收下"] <n View <n View < View <n View < Dialog < View <n WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
            'TextView <n View < View < @View <n View < Dialog < View <n WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
            '[id="home-container"] > [id="zmlTabContainer"] + View > @View[clickable=true] > [text="后领"]',
          ],
        },
        {
          key: 2,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.695',
          },
          matches: [
            '[id="home-container"] > [id="zmlTabContainer"] + View > View > View > @Image[clickable=true]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          name: '任务已完成-×',
          position: {
            left: 'width * 0.85',
            top: 'height * 0.282',
          },
          matches: [
            'TextView <n View < View < @View <n View < Dialog < View <n WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
      ],
    },
    //zhima-accumulation-daily-task
    {
      key: 41,
      name: '芝麻粒-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 41,
          actionDelay: 2000,
          matches: [
            '[text="去完成"] - [text~="[2-9][0-9]"] -n [text!~="去租赁下单"] < @View[clickable=true] < View <n View < View <n [id="home-container"] < [id="app"] < WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
          excludeMatches: [
            'TextView <n View < View < @View <n View < Dialog < View <n WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
        {
          key: 11,
          matches: [
            '@[text="一键收取"][clickable=true] <n View < View <n [id="home-container"] < [id="app"] < WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
          excludeMatches: [
            '[text="去完成"] - [text~="[2-9][0-9]"] -n [text!~="去租赁下单"] < @View[clickable=true] < View <n View < View <n [id="home-container"] < [id="app"] < WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
      ],
    },
    //26.09.30-26.10.31 芝麻粒炼金
    {
      scopeKeys: [400, 401],
      key: 50,
      name: '芝麻粒炼金-炼金',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text~="[1-9][0-9]*"] <n @View[clickable=true] <n View < View <n View < View < [id="app"] < [text="芝麻粒炼金"] < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
          excludeMatches: [
            '[text="做任务领取"] < View < @View[clickable=true] <n View < View < View <n View < Dialog < View <n [text="芝麻粒炼金"] < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
            '[text="芝麻粒炼金"] > [id="app"] +n View > Dialog >n [text="欢迎回来"] +n @View[clickable=true] > TextView',
            '[text="芝麻粒炼金"] > View > [id="app"] +n View > Dialog >n [text="欢迎回来"] +n @View[clickable=true] > TextView',
            '[text="芝麻粒炼金"] >n [text="次日礼包"] + [getChild(2).text="明日可领取"] > @View[clickable=true] > TextView',
            'TextView < @View[clickable=true] <n View <n View < View <n View < Dialog < View <n [text="芝麻粒炼金"] < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
            '@Image[index=parent.childCount.minus(1)][clickable=true] < View <n [id="app"] < [text="芝麻粒炼金"] < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
        {
          key: 50,
          actionDelay: 1000,
          matches: [
            '[text="做任务领取"] < View < @View[clickable=true] <n View < View < View <n View < Dialog < View <n [text="芝麻粒炼金"] < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
        {
          key: 2,
          actionDelay: 1000,
          matches: [
            '[text="芝麻粒炼金"] > [id="app"] +n View > Dialog >n [text="欢迎回来"] +n @View[clickable=true] > TextView',
          ],
        },
        {
          key: 3,
          name: '恭喜获-立即使用',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.695',
          },
          actionDelay: 1000,
          matches: [
            '[text="芝麻粒炼金"] > [id="app"] +n View > Dialog >n @Image[index=parent.childCount.minus(1)][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 4,
          actionDelay: 1000,
          name: '次日礼包-去完成用',
          matches: [
            'TextView < @View[clickable=true] <n View <n View < View <n View < Dialog < View <n [text="芝麻粒炼金"] < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
        {
          preKeys: [1, 2, 3, 4, 5, 400, 401],
          key: 5,
          action: 'clickCenter',
          matches: [
            '[text="返回>"] - [text="已浏览完成"] < View <n @View[clickable=true] < View < [id="app"] < [text="Smallfish App"] < WebView <n [desc*="180020570000060569"] < FrameLayout <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [5],
          key: 6,
          name: '恭喜你获得1张暴击卡-去使用',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.73',
          },
          actionDelay: 1000,
          matches: [
            '@Image[index=parent.childCount.minus(1)][clickable=true] < View <n [id="app"] < [text="芝麻粒炼金"] < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
        {
          preKeys: [4],
          key: 7,
          actionDelay: 1000,
          matches: [
            '[text="芝麻粒炼金"] > View > [id="app"] +n View > Dialog >n [text="欢迎回来"] +n @View[clickable=true] > TextView',
          ],
        },
        {
          key: 8,
          matches: [
            '[text="100"] <n View < @View[clickable=true] <n [id="app"] < [text="芝麻粒炼金"] < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
          excludeMatches: [
            '[text~="[1-9][0-9]*"] <n @View[clickable=true] <n View < View <n View < View < [id="app"] < [text="芝麻粒炼金"] < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
        {
          preKeys: [1, 2, 8],
          key: 9,
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@[desc^="返回"][clickable=true] > [id~=".*homeButton|.*backButton"] > [text="" || text=""]',
          ],
        },
      ],
    },
    {
      key: 51,
      name: '芝麻粒炼金-次日礼包',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="粒"] <n View < @View[clickable=true] <n View <n View < View <n View < View < [id="app"] < [text="芝麻粒炼金"] < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
          excludeMatches: [
            '[text="芝麻粒炼金"] > [id="app"] >n @View[clickable=true] > View + [text="每次消耗5粒"] + [text~="[1-9][0-9]*"]',
            '[text="芝麻粒炼金"] > [id="app"] > View + @View[clickable=true] > View > [text="100"]',
            '[text="芝麻粒炼金"] >n [id="accumulateListContainer"] > @View[clickable=true] > [getChild(0).text!~="玩.*|去玩.*"] +n [text~="\\\\+[2-9][0-9]"] +n [text="去完成"]',
            '[text="芝麻粒炼金"] >n [text="次日礼包"] + [getChild(2).text="明日可领取"] > @View[clickable=true] > TextView',
          ],
        },
        {
          preKeys: [0],
          key: 51,
          matches: [
            '[text="芝麻粒炼金"] >n [text="次日礼包"] + [getChild(2).text="明日可领取"] > @View[clickable=true] > TextView',
          ],
        },
      ],
    },
    {
      key: 52,
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
            '[text="今天"] - @View < View <n View < View <n View < View <n View < [text="芝麻粒炼金"] < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
        {
          key: 52,
          actionDelay: 2000,
          matches: [
            '[text="去完成"] -n [text~="\\\\+[2-9][0-9]"] -n [getChild(0).text!~="玩.*|去玩.*"] < @View[clickable=true] <n View <n View <n View <n View < View <n View < [text="芝麻粒炼金"] < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
        {
          key: 11,
          matches: [
            '@[text="一键收取"][clickable=true] <n View < View <n View < View <n View < View <n View < [text="芝麻粒炼金"] < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
          excludeMatches: [
            '[text="去完成"] -n [text~="\\\\+[2-9][0-9]"] -n [getChild(0).text!~="玩.*|去玩.*"] < @View[clickable=true] <n View <n View <n View <n View < View <n View < [text="芝麻粒炼金"] < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
      ],
    },
    {
      key: 53,
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
          matches: ['@[desc="返回"][clickable=true] + * [text="先用后付购物"]'],
          excludeMatches: [
            '@[id="app"][clickable=true] <<n * + * [text~="滑一滑[0-9]+秒得奖励"]',
          ],
        },
      ],
    },
    //26.07.14-26.12.31 支付宝·芝麻信用·京豆夺宝
    {
      key: 60,
      name: '支金豆-签到领豆',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(0).text="恭喜获得"] + View + @[getChild(0).text="立即签到"][clickable=true] + TextView[clickable=true]',
          ],
        },
        {
          key: 1,
          position: {
            left: 'width * 0',
            top: 'height * 0.25',
          },
          matches: [
            '@TextView[clickable=true] < View <n View < View < View < View <n WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
          excludeMatches: [
            '[getChild(0).text="恭喜获得"] + View + @[getChild(0).text="立即签到"][clickable=true] + TextView[clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.54',
          },
          matches: [
            '[getChild(0).getChild(0).id="J_tiny_canvas"] + @View > TextView[clickable=true]',
          ],
        },
        {
          preKeys: [0, 2],
          key: 3,
          name: '开心收下-×',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.855',
          },
          matches: [
            '[id^="_js_tiny_video_canvas"] < [id^="_js_tiny_video_wrapper"] < View < View < View < View < @View[clickable=true] < View <n View < WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
      ],
    },
    //做任务领支金豆
    {
      key: 61,
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
          position: {
            left: 'width * 0.5',
            top: 'height * 0.927',
          },
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
      key: 62,
      name: '支金豆-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 62,
          actionDelay: 2000,
          matches: [
            '@Button[clickable=true] < View -n [text!~=".*玩.*|.*订单|.*关|.*充值.*|.*支付.*|.*攒钱.*|.*兑换.*"][index=1] <n View[childCount=6] <n View <n View <n View < View <n View < WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
          excludeMatches: [
            'View[clickable=true] > [text="抽今日财运签"] +n View > @[text="去抽签"][clickable=true]',
            '[getChild(1).name$="TextView"] + View > View[clickable=true] > View > @[text="领取"][clickable=true]',
          ],
        },
        {
          preKeys: [62, 11],
          key: 11,
          actionDelay: 5000,
          matches: [
            '[id="game-panel"] > View > View > View > @TextView[clickable=true]',
          ],
        },
      ],
    },
    {
      scopeKeys: [62],
      key: 63,
      name: '支金豆-去访问',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          preKeys: [62],
          key: 0,
          position: {
            left: 'width * 0.75',
            top: 'height * 0.8',
          },
          matches: ['[id="exchangeTab"] + @View > View > View + View'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(0).text="全部"] - RecyclerView > @[id$="usual_item_root"][clickable=true] > [text="金豆夺宝"]',
          ],
          activityIds: ['.AlipayLogin'],
        },
        {
          preKeys: [1],
          key: 2,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.927',
          },
          matches: [
            'View[clickable=true] > @View[clickable=true] >n [id^="_js_tiny_video_wrapper"] > [id^="_js_tiny_video_canvas"]',
          ],
        },
      ],
    },
    //26.06.01-27.06.30 好家缴费金
    {
      key: 70,
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
      key: 71,
      name: '好家缴费金-去完成-任务完成 返回领奖>',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
        'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
      ],
      rules: [
        {
          key: 71,
          actionDelay: 2000,
          matches: [
            '@[text="去完成"][clickable=true] -2 [getChild(0).text^="逛一逛"] <n View < [id="app"] < WebView < WebView <n FrameLayout < [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
          excludeMatches: [
            '@View[clickable=true] > [text="今日签到"]',
            '@View[clickable=true] < View < [id="app"] < [text="Smallfish App"] < WebView <n [desc*="180020570000060569"] < FrameLayout <n [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 72,
      name: '好家缴费金-领奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="领奖励"][clickable=true] -4 [getChild(0).text="完成1笔生活缴费"] <n View < [id="app"] < WebView < WebView <n FrameLayout < [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    //26.06.01-26.09.30 充值缴费-享清凉一夏
    {
      key: 80,
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
      key: 81,
      name: '享清凉一夏-立即抽奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[id="ant-render-id-CPT_6a3de4489f7f618191b3aaae"] > View > View > @View[clickable=true] > TextView',
          ],
          excludeMatches: ['View > @[text~="领任务|去完成"][clickable=true]'],
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
          activityIds: [
            'com.alipay.android.living.activity.LivingDetailActivity',
          ],
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
    //打卡*天必得 随机抽取1个奖品
    {
      key: 100,
      name: '今日打卡任务-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 100,
          matches: [
            '[id*="daily-checkin"] >n @View[clickable=true] > [text="去完成"]',
          ],
        },
      ],
    },
    //薅羊毛 赚话费
    {
      key: 110,
      name: '薅羊毛 赚话费',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.alipay.mobile.nebulax.xriver.activity.XRiverActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text~="立翻.*倍 领.*g"][clickable=true] < View <n View < View <n View < View <n [text="薅羊毛 赚话费"] < WebView <n FrameLayout < FrameLayout <n FrameLayout < [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="签到奖励"] <n View < @[id="feedBubble"][clickable=true] < View <n View < [id="recyclerview"] < [text="薅羊毛 赚话费"] < WebView <n FrameLayout < FrameLayout <n FrameLayout < [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
        {
          key: 2,
          matches: [
            '[text="装满啦"] <n @View[clickable=true] < View <n View < [id="recyclerview"] < [text="薅羊毛 赚话费"] < WebView <n FrameLayout < FrameLayout <n FrameLayout < [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
      ],
    },
    {
      key: 200,
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
            '[text~="查看商品或滑动[0-9]+秒后可领奖励"] <n View < @View < [id="app"] < WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 100,
          matches: [
            '@[text="关闭"][clickable=true] - [text="任务已完成，恭喜获得奖励！"] <n View < @View < [id="app"] < WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
      ],
    },
    //百度地图-去支付宝浏览图文领奖
    //百度网盘-小程序点图文领奖-去小程序点图文
    {
      key: 201,
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
          matches: [
            '@[desc^="返回"][clickable=true] > [id~=".*homeButton|.*backButton"] > [text="" || text=""]',
          ],
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
      key: 202,
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
      key: 203,
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
      key: 300,
      name: '飞猪旅行-找10次抽奖券/寻找10枚许愿星',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.AlipayLogin',
        'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      ],
      rules: [
        {
          key: 0,
          anyMatches: [
            '[text="点我领奖励"] < @View[clickable=true] <n View <n View <n [id="feeds-area"] <n [id="feeds"] < View <n View < [id="root"] < WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
            '[text="点我领奖励"] < View < @View[clickable=true] <n View <n [id="feeds"] < View <n View < [id="root"] < WebView < WebView <n FrameLayout <n [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
          excludeMatches: [
            '[id="feeds"] > View > [text^="下滑寻找可获得更多"]',
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
              y: 'screenHeight*0.45',
            },
            duration: 200,
          },
          actionDelay: 3000,
          anyMatches: [
            'View > @[id="feeds"] > [id="feeds-area"] > [id^="macy-container"]',
            'View > @[id="feeds"] > [id^="macy-container"]',
          ],
          excludeMatches: [
            '[id="feeds"] > View > [text^="下滑寻找可获得更多"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 2,
          action: 'back',
          actionDelay: 2000,
          anyMatches: [
            '@[desc="返回"][clickable=true] < [id$="h5_tf_nav_ly"]',
            '@[desc^="返回"][clickable=true] > [id~=".*homeButton|.*backButton"] > [text="" || text=""]',
            '[id$="frameLayout_rightButton1"] >n [desc="更多"] +n @[desc="关闭"][clickable=true] > [text=""]',
          ],
          excludeMatches: [
            '[id="feeds"] > View > [text^="滑动浏览商品，寻找"]',
          ],
        },
        {
          key: 3,
          action: 'back',
          actionDelay: 5000,
          matches: ['[id="feeds"] > View > [text^="下滑寻找可获得更多"]'],
        },
        {
          preKeys: [2, 3, 4],
          key: 4,
          action: 'back',
          matches: [
            '@[vid="launcher_holder"] >n TabWidget[id="android:id/tabs"] > FrameLayout[clickable=true] > [desc="首页"]',
          ],
        },
      ],
    },
    {
      key: 301,
      name: '飞猪旅行-阿里运动',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.AlipayLogin',
        'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text="现金现身"] < View <n @View[clickable=true] < View < View < View <n View <n View < View < View < View <n View <n View <n View < View <n View < View < [text="浏览得奖励"] < WebView <n FrameLayout < [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
          excludeMatches: [
            '[id="feeds"] > View > [text^="下滑寻找可获得更多"]',
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
              y: 'screenHeight*0.45',
            },
            duration: 200,
          },
          actionDelay: 3000,
          matches: [
            '[text="得奖励"] <n View <n @[id="rewardsContainer"] < View <n View < View < [text="浏览得奖励"] < WebView <n FrameLayout < [id="com.alipay.multiplatform.phone.xriver_integration:id/h5_pc_container"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 2,
          action: 'back',
          actionDelay: 2000,
          anyMatches: [
            '@[desc="返回"][clickable=true] < [id$="h5_tf_nav_ly"]',
            '@[desc^="返回"][clickable=true] > [id~=".*homeButton|.*backButton"] > [text="" || text=""]',
            '[id$="frameLayout_rightButton1"] >n [desc="更多"] +n @[desc="关闭"][clickable=true] > [text=""]',
          ],
          excludeMatches: [
            '[id="feeds"] > View > [text^="滑动浏览商品，寻找"]',
          ],
        },
        {
          key: 3,
          action: 'back',
          actionDelay: 5000,
          matches: ['[id="feeds"] > View > [text^="下滑寻找可获得更多"]'],
        },
        {
          preKeys: [2, 3, 4],
          key: 4,
          action: 'back',
          matches: [
            '@[vid="launcher_holder"] >n TabWidget[id="android:id/tabs"] > FrameLayout[clickable=true] > [desc="首页"]',
          ],
          activityIds: ['.AlipayLogin'],
        },
      ],
    },
    {
      key: 302,
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
    //功能应用类
    {
      key: 400,
      name: '编辑首页服务-取消',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 400,
          matches: [
            '[text="完成"] - @[text="取消"][clickable=true] < LinearLayout - * [text="编辑首页服务"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 401,
      name: '获取你剪切板的内容-拒绝',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 401,
          matches: [
            '[text="允许"] - @[text="拒绝"][clickable=true] < LinearLayout - * [text="获取你剪切板的内容"]',
          ],
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 402,
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
