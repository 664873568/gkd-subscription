import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    //店铺关注
    //https://shop.m.jd.com/favorite/home
    //https://pro.m.jd.com/mall/active/2WUEUPEgJ6bMgeW6CatRVTViJ9xU/index.html
    {
      key: 0,
      name: '店铺关注',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Button[desc^="关注"][clickable=true] > [getChild(0).getChild(0).text~="[0-9]{2,}"] - ViewGroup > [text="关注"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '店铺关注-取消关注',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.setting.view.activity.PersonalMultiTabActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[id^="com.jd.lib.setting.feature:id"] > @[text="管理"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          position: {
            left: 'width * 0.0612',
            top: 'width * 0.1245',
          },
          matches: [
            '[text="店铺关注"] >n @[text="已选0个店铺"][clickable=true] + [text="取消关注"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '[text="店铺关注"] >n [text~="已选[1-9][0-9]*个店铺"] + @[text="取消关注"][clickable=true]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: [
            '[text="店铺关注"] >n [text="取消关注"] +n [text="取消"] + @[text="确定"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '新品互动-去浏览',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text="新品互动"] +n [getChild(0).text!~="购买.*|邀请.*"] > @[text="去浏览"][clickable=true]',
          ],
          activityIds: ['.WebActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 16000,
          matches: ['@[desc="返回"][clickable=true] + View + View'],
          activityIds: ['com.jd.lib.productdetail.ProductDetailActivity'],
        },
      ],
    },
    //京东超市-黑色星期五 4.9抢15枚鸡蛋-周四 20:00/20:30/22:00-周五 10:00/16:00/20:00/22:00
    //https://pro.m.jd.com/mall/active/6g7nXqEqSD9FXFB4cStkfWD47qJ/index.html
    {
      key: 10,
      name: '京东超市-黑色星期五-领券抢',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      rules: [
        {
          actionCd: 100,
          actionMaximum: 1000,
          anyMatches: [
            '[text="黑色星期五"] >n [text="趣尝鲜五谷鲜鸡蛋15枚"] +n @[text="领券抢"][clickable=true]',
            '[text="黑色星期五"] >n [getChild(1).text="15枚鲜蛋"] + @[text="领券抢"][clickable=true]',
          ],
          activityIds: [
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '京东超市-黑色星期五-签到有奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="黑色星期五"] >n [id="blackFiveSignInFloor"] > @[text^="签到有奖"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          position: {
            left: 'width * 0.5000',
            top: 'width * 0.0639',
          },
          actionDelay: 2000,
          matches: ['[text="黑色星期五"] >n @[id="blackFiveSignInFloor"]'],
        },
      ],
    },
    //24.04.08-29.07.31 京东超市-每日签到 汪贝狂欢日 每月月底最后3天
    //https://pro.m.jd.com/mall/active/3xhqjGH1wMz5FaMgrfYhR22sFvqz/index.html
    //https://pro.m.jd.com/mall/active/3nh7HzSjYemGqAHSbktTrf8rrH8M/index.html
    {
      key: 20,
      name: '京东超市-关闭弹窗',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
      rules: [
        {
          matches: [
            '[getChild(childCount.minus(1)).text="京东超市"] + @[getChild(0).text="关闭弹窗"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '每日签到-汪贝兑换商城-兑换-京东超市卡',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="汪贝日每天10点抢"] +2 @[text="兑换"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="是否确认兑换"] +n [text="取消"] + @[text="确认"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '每日签到-签到得卡',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
      rules: [
        {
          matches: [
            '[id="follow-signin-business-floor"] > View > @[text="签到得卡"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '每日签到-赚更多汪贝',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(2).text="coin"] + @[text!~="去邀请|已完成"][clickable=true]',
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          excludeMatches: ['[text="每日签到"] >n [text="赚更多汪贝"]'],
          actionDelay: 5000,
          actionMaximum: 2,
          action: 'back',
          matches: [
            '@View[index=parent.childCount.minus(1)] < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView',
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
        {
          preKeys: [0],
          key: 2,
          actionDelay: 5000,
          matches: [
            '@[desc="返回"][clickable=true] <n RelativeLayout < RelativeLayout[clickable=true]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          preKeys: [0],
          key: 3,
          actionDelay: 5000,
          actionMaximum: 2,
          action: 'back',
          matches: [
            '@[desc="搜索"] < @FrameLayout[clickable=true] < LinearLayout',
          ],
          activityIds: ['com.jd.lib.Discovery.view.DiscoveryActivity'],
        },
        {
          preKeys: [0],
          key: 4,
          actionDelay: 5000,
          matches: [
            '@[desc="返回"][clickable=true] < RelativeLayout <n RelativeLayout',
          ],
          activityIds: ['.WebActivity'],
        },
        {
          preKeys: [0],
          key: 5,
          excludeMatches: ['[text="每日签到"] >n [text="赚更多汪贝"]'],
          actionDelay: 5000,
          matches: ['@TextView[clickable=true] < LinearLayout < ViewGroup'],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
        {
          preKeys: [0],
          key: 6,
          actionDelay: 5000,
          actionMaximum: 2,
          action: 'back',
          anyMatches: [
            '@ImageView < ViewGroup - ImageView < ViewGroup',
            '@ImageView < ViewGroup - ViewGroup < ViewGroup',
          ],
          activityIds: [
            'com.jingdong.common.jdreactFramework.activities.JDReactNativeCommonActivity',
          ],
        },
      ],
    },
    //25.08.01开始 天天签到抽奖
    //https://pro.m.jd.com/mall/active/4WMAPf9VCBdEE8Rva1AVEPH7CBbj/index.html
    {
      key: 40,
      name: '天天签到抽奖-逛一逛',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            'View[clickable=true] >3 [text="分享得红包最高8.8"] +n @View[clickable=true] > [text="逛一逛"]',
          ],
          matches: [
            'View[clickable=true][index=0] >3 @View[clickable=true] > [text="逛一逛"]',
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@RelativeLayout[clickable=true] >n [text="点击立即返回"] - * [text="已完成"]',
          ],
          activityIds: [
            '.personel.FloatViewActivity',
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
      ],
    },
    //26.03.15-27.05.31 天天砸金蛋
    //https://pro.m.jd.com/mall/active/3iXU1kvcZaGz6Xf9L3cJ9aCS6ShN/index.html
    {
      key: 50,
      name: '天天砸金蛋-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[getChild(0).getChild(0).text="规则"] + View > [getChild(1).name$="TextView"] > @[text="去完成"][clickable=true]',
          ],
          activityIds: ['.WebActivity', '.MainFrameActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          matches: [
            '@RelativeLayout[clickable=true] > RelativeLayout > ImageView + LinearLayout > [getChild(0).getChild(0).text="已完成"] + [text="点击立即返回"]',
          ],
          activityIds: [
            '.personel.FloatViewActivity',
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          excludeMatches: [
            '@RelativeLayout[clickable=true] >n [text~="继续浏览[0-9]+秒"]',
          ],
          actionDelay: 5000,
          actionMaximum: 2,
          action: 'back',
          anyMatches: [
            'RelativeLayout > @[desc="返回"][clickable=true]', //浏览点击3个商品(0/3)
            '@View[index=parent.childCount.minus(1)] < [id="J_babelOptPage"] < [id="J_babelOpt"] < [id^="bab_aid"] < WebView',
            //'TextView - @TextView[clickable=true] <<n WebView', //浏览京东金融领京豆(0/3)
          ],
          activityIds: [
            '.WebActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
            'com.jd.lib.productdetail.ProductDetailActivity',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          actionDelay: 5000,
          matches: ['@FrameLayout[clickable=true] > [desc="搜索"]'], //看视频领3折券
          activityIds: ['com.jd.lib.Discovery.view.DiscoveryActivity'],
        },
        {
          preKeys: [0],
          key: 4,
          actionDelay: 5000,
          matches: [
            'ViewGroup > LinearLayout > @TextView[text=""][clickable=true] + ImageView', //逛排行榜最高得99豆-逛超级明星抽8888红包-逛拍卖领京豆
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
        {
          key: 5,
          actionDelay: 5000,
          matches: [
            '[text="京东健康APP下载"] >n @[text="back"][clickable=true] + [text="健康好礼限时领"]', //
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
        {
          preKeys: [0],
          key: 6,
          actionDelay: 5000,
          actionMaximum: 2,
          action: 'back',
          anyMatches: [
            '@ImageView < ViewGroup - ImageView < ViewGroup', //健康金限时领
            '@ImageView < ViewGroup -n ViewGroup < ViewGroup',
          ],
          activityIds: [
            'com.jingdong.common.jdreactFramework.activities.JDReactNativeCommonActivity',
          ],
        },
      ],
    },
    {
      scopeKeys: [50],
      key: 51,
      name: '天天砸金蛋-砸一下',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.WebActivity', '.MainFrameActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[getChild(0).getChild(0).text="规则"] + View > [getChild(1).name$="TextView"] > @[text="去完成"][clickable=true]',
            '@[desc="关闭弹窗" || text="关闭弹窗"][clickable=true] + View > View > View + TextView[clickable=true]',
          ],
          matches: ['@[text~="砸一下\\\\(剩余[0-9]+次\\\\)"][clickable=true]'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[desc="关闭弹窗" || text="关闭弹窗"][clickable=true] + View > View > View + TextView[clickable=true]',
          ],
        },
      ],
    },
    //26.03.25-27.03.24 月黑风高-月光宝盒
    //https://pro.m.jd.com/mall/active/3MwGoRXcgfa3yFYKujMC2AsjmB3h/index.html
    {
      key: 60,
      name: '月光宝盒-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[text="做任务 赚次数"] + View > [getChild(1).text!~="邀请.*"] > @[text="待领奖"][clickable=true]',
          ],
          actionDelay: 2000,
          matches: [
            '[text="做任务 赚次数"] + View > [getChild(1).text!~="邀请.*"] > @[text="去完成"][clickable=true]',
          ],
          activityIds: [
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          excludeMatches: [
            '@RelativeLayout[clickable=true] > RelativeLayout > ImageView + LinearLayout > [getChild(0).getChild(0).text="已完成"] + [text="点击立即返回"]',
          ],
          actionDelay: 5000,
          anyMatches: [
            '[id="coupon_modal_content"] > @[id="close_btn"][clickable=true] > View > Image',
            '[id="jx_channel_coupon_modal"] > View > @TextView[index=parent.childCount.minus(1)][clickable=true]',
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
        {
          preKeys: [0],
          key: 2,
          excludeMatches: [
            '@RelativeLayout[clickable=true] > RelativeLayout > ImageView + LinearLayout > [getChild(0).getChild(0).text="已完成"] + [text="点击立即返回"]',
          ],
          actionDelay: 5000,
          matches: ['@[desc="返回"][clickable=true] +n [desc="Top Logo"]'],
          activityIds: [
            '.WebActivity',
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
          ],
        },
        {
          preKeys: [0, 1, 3],
          key: 3,
          excludeMatches: [
            '@RelativeLayout[clickable=true] > RelativeLayout > ImageView + LinearLayout > [getChild(0).getChild(0).text="已完成"] + [text="点击立即返回"]',
          ],
          action: 'back',
          actionDelay: 5000,
          actionCd: 100,
          matches: [
            'WebView < c40 <<n RelativeLayout +n LinearLayout >n @[text="" || desc="返回"][clickable=true]',
          ],
          activityIds: [
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.59',
          },
          matches: [
            '[id="J_babelOpt"] + [id="chunk3"] + View[childCount=2]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          preKeys: [0],
          key: 5,
          excludeMatches: [
            '@RelativeLayout[clickable=true] > RelativeLayout > ImageView + LinearLayout > [getChild(0).getChild(0).text="已完成"] + [text="点击立即返回"]',
          ],
          action: 'back',
          actionDelay: 5000,
          matches: [
            '[text="back"] < @View[clickable=true] <<n WebView < c40',
          ],
          activityIds: ['.WebActivity'],
        },
        {
          preKeys: [0, 1],
          key: 6,
          excludeMatches: [
            '@RelativeLayout[clickable=true] > RelativeLayout > ImageView + LinearLayout > [getChild(0).getChild(0).text="已完成"] + [text="点击立即返回"]',
          ],
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@[text="返回按钮"][clickable=true] < View <<n WebView < c40',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          preKeys: [0],
          key: 7,
          matches: [
            '@RelativeLayout[clickable=true] > RelativeLayout > ImageView + LinearLayout > [getChild(0).getChild(0).text="已完成"] + [text="点击立即返回"]',
          ],
          activityIds: [
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.jshop.jshop.JshopMainShopActivity',
          ],
        },
        {
          key: 8,
          matches: [
            '[text="开心收下"] +n @View[clickable=true] > View > Image',
          ],
          activityIds: [
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
        {
          key: 10,
          excludeMatches: [
            '[text="做任务 赚次数"] + View > [getChild(1).text!~="邀请.*"] > @[text~="去完成|待领奖"][clickable=true]',
          ],
          actionDelay: 5000,
          matches: ['@TextView[clickable=true] + [text="做任务 赚次数"]'],
          activityIds: [
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
      ],
    },
    {
      scopeKeys: [60],
      key: 61,
      name: '月光宝盒-去完成-从首页访问月黑风高',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          preKeys: [0],
          key: 1,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.63',
          },
          matches: ['[id="J_babelOpt"] + [id="chunk3"] + View[childCount=2]'],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[desc="月黑风高"][clickable=true] > ViewGroup > [text="月黑风高"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[text="月黑风高"] >n @View[clickable=true] > [text="075e15f06e18eb7f.png!q50"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            '[text="做任务 赚次数"] + View > [getChild(1).text!~="邀请.*"] > @[text="待领奖"][clickable=true]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          preKeys: [4],
          key: 5,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.6',
          },
          matches: ['[id="J_babelOpt"] + [id="chunk3"] + View[childCount=2]'],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
      ],
    },
    {
      scopeKeys: [60],
      key: 62,
      name: '月光宝盒-去完成-预约月黑风高商品',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.jd.lib.ttt.page.TTTMultiPageActivity',
        'com.jd.lib.babel.view.activity.BabelActivity',
      ],
      rules: [
        {
          key: 1,
          anyMatches: [
            '[text="预约成功"] +n [text="暂不开启"] + @[text="去开启"][clickable=true]',
            '[getChild(0).text*="去开启吧"] + [getChild(0).text="取消"] > @[text="确定"][clickable=true]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 2,
          matches: [
            '[text="预约商品"] - [text~="[0-2]/3"] < View < View < View - [id="dark-moon-feeds-container"] >n TextView +n View > TextView + @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[text="返回领奖"] - [text="已完成"] < View < @View[clickable=true] < View - [id="dark-moon-feeds-container"]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            '[text="做任务 赚次数"] + View > [getChild(1).text!~="邀请.*"] > @[text="待领奖"][clickable=true]',
          ],
        },
      ],
    },
    {
      scopeKeys: [60],
      key: 63,
      name: '月光宝盒-立即抽奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
      rules: [
        {
          preKeys: [10, 2],
          key: 1,
          matches: [
            '@View[getChild(0).getChild(2).text~="[1-9][0-9]*"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[getChild(1).getChild(0).text="再抽一次"] + @View[clickable=true] > View > Image',
          ],
        },
      ],
    },
    //26.04.01-27.03.31 京东秒杀-天天领豆
    //https://pro.m.jd.com/mall/active/43mNbs4F53FUMVin65VHVYYKB94f/index.html
    {
      key: 70,
      name: '天天领豆-幸运奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[id="cardViewIcon"] > [text="幸运奖励"] + [getChild(0).text="待领"] + [text="去解锁"]',
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.63',
          },
          matches: [
            '[id="signView_main_portal"] + [id="chunkplaceholder8"] > @TextView',
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[desc="秒杀"][clickable=true] > ViewGroup > [text="秒杀"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
        {
          preKeys: [2],
          key: 3,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.67',
          },
          matches: [
            '[text="京东秒杀"] >n @[id="J_babelOpt"] + [id="chunk2"] + [id="chunk10"]',
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
      ],
    },
    //26.05.14-27.05.13 领券中心-天天领京豆
    //https://pro.m.jd.com/mall/active/VAjs3vpayA513UwxL5XC4eGBXqY/index.html?babelChannel=ttt128&linkTopTab=best&jumpTab=1&visitScene=page1
    {
      key: 80,
      name: '天天领京豆-×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[id="coupon-center-main-panel-"] +n [index=parent.childCount.minus(1)] >n TextView + TextView + @TextView[index=parent.childCount.minus(1)][clickable=true]',
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
      ],
    },
    //26.06.28-27.05.31 互动游戏
    //https://pro.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html
    {
      key: 90,
      name: '互动游戏-攒经验',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@TextView[clickable=true] + * View[clickable=true] > [text="明天继续"]',
          ],
        },
        {
          key: 1,
          excludeMatches: ['[text="做任务 攒经验"]'],
          matches: [
            '[text="互动游戏"] >n [text="赚京豆"] >n [text="攒经验 ›"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 91,
      name: '互动游戏-逛一逛/去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="互动游戏"] >n [text="做任务 攒经验"] + * [getChild(2).text!~="通过.*|升级.*|击败.*"] > @View[clickable=true] > [text~="逛一逛|去完成"]',
          ],
          activityIds: [
            'com.jingdong.manto.ui.MantoActivityUp1',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 5000,
          matches: ['@[desc="关闭直播间"][clickable=true] > ImageView'],
          activityIds: [
            'com.jd.lib.mylive.view.activity.VideoLiveRoomActivity',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          matches: [
            '@RelativeLayout[clickable=true] > RelativeLayout > ImageView + LinearLayout > [getChild(0).getChild(0).text="已完成"] + [text="点击立即返回"]',
          ],
          activityIds: [
            '.personel.FloatViewActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
            'com.jd.lib.productdetail.ProductDetailActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 3,
          excludeMatches: [
            '[text="互动游戏"] >n [text="做任务 攒经验"] + * [getChild(2).text!~="通过.*|升级.*|击败.*"] > @View[clickable=true] > [text~="逛一逛|去完成"]',
          ],
          matches: [
            '[text="互动游戏"] >n @TextView[clickable=true] + [getChild(0).text="做任务 攒经验"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
      ],
    },
    {
      scopeKeys: [91],
      key: 92,
      name: '互动游戏-逛一逛-游戏',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.jingdong.manto.ui.MantoActivityUp1'],
      rules: [
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: [
            '@[desc="关闭"][clickable=true] - [desc="更多"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[text="退出游戏"][clickable=true] + [text="添加到桌面"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 93,
      name: '互动游戏-领取',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="互动游戏"] >n [text="赚京豆"] >n [text="全部奖励已解锁"] + * >n @[text="领取"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="互动游戏"] >n [text="京豆奖励"] +n @[text="开心收下"][clickable=true]',
          ],
        },
      ],
    },
    //26.08.20-26.09.16 寻鲜争霸赛 为TA投票
    //https://pro.m.jd.com/mall/active/UCAYQxqQV3mKZNfu8bG2t8wsYog/index.html
    {
      key: 100,
      name: '寻鲜争霸赛 为TA投票',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text="寻鲜争霸赛 为TA投票"] >n @View[clickable=true] > [text="做任务赚人气值"]',
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          anyMatches: [
            '@[text="去完成"][clickable=true] -2 [text^="逛逛大闸蟹"]',
            '@[text="去完成"][clickable=true] -2 [text^="逛逛佳沛"]',
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 6000,
          anyMatches: [
            'RelativeLayout > @ImageView[desc="返回"][clickable=true]',
            'ViewGroup > LinearLayout > @TextView[text=""][clickable=true] + ImageView',
            'WebView >n [id="J_babelOptPage"] >n @TextView[clickable=true] + View + TextView',
          ],
          activityIds: [
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[text="寻鲜争霸赛 为TA投票"] >n @[text="关闭"][clickable=true] -2 View > [text~="恭喜获得[0-9]人气值"]',
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 400,
      name: '去开启通知-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[desc="关闭"][clickable=true] - * [text="去开启通知"]'],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
    {
      key: 401,
      name: '申请通知权限-取消',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="京东需要申请通知权限"] +n [getChild(1).text="去打开"] > @[text="取消"][clickable=true]',
          ],
          activityIds: ['null'],
        },
      ],
    },
    //首页广告类
    {
      key: 500,
      name: '首页广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[desc="跳过"][clickable=true] > [text="跳过"]'],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
    {
      key: 501,
      name: '首页广告-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            'ViewGroup[clickable=true] + ViewGroup > @[desc="关闭"][clickable=true] > ImageView',
            'ViewGroup > FrameLayout[clickable=true] + @FrameLayout[clickable=true] > [desc="关闭"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
  ],
});
