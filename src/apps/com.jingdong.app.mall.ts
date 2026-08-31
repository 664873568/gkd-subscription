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
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ViewGroup[clickable=true] > [desc~="关注[0-9]{2,}"] > [text="关注"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '店铺关注-取消关注',
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
    //京东超市-黑色星期五 4.9抢15枚鸡蛋-周四 20:00/20:30/22:00-周五 10:00/16:00/20:00/22:00
    //https://pro.m.jd.com/mall/active/6g7nXqEqSD9FXFB4cStkfWD47qJ/index.html
    {
      key: 2,
      name: '京东超市-黑色星期五-领券抢',
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionCd: 100,
          actionMaximum: 1000,
          matches: [
            '[text="黑色星期五"] >n [getChild(1).text="15枚鲜蛋"] + @[text="领券抢"][clickable=true]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '京东超市-黑色星期五-签到有奖',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="黑色星期五"] >n @[text="签到有奖"][clickable=true]',
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
          matches: [
            '[text="黑色星期五"] >n @[id="blackFiveSignInFloor"]',
          ],
        },
      ],
    },
    //24.04.08-29.07.31 京东超市-每日签到 汪贝狂欢日 每月月底最后3天
    //https://pro.m.jd.com/mall/active/3xhqjGH1wMz5FaMgrfYhR22sFvqz/index.html
    //https://pro.m.jd.com/mall/active/3nh7HzSjYemGqAHSbktTrf8rrH8M/index.html
    {
      key: 4,
      name: '每日签到-汪贝兑换商城-兑换-京东超市卡',
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
      key: 6,
      name: '每日签到-赚更多汪贝',
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
          matches: [
            '@TextView[clickable=true] < LinearLayout < ViewGroup',
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
            '@ImageView < ViewGroup - ImageView < ViewGroup',
            '@ImageView < ViewGroup - ViewGroup < ViewGroup',
          ],
          activityIds: [
            'com.jingdong.common.jdreactFramework.activities.JDReactNativeCommonActivity',
          ],
        },
      ],
    },
    //互动游戏
    //https://pro.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html
    {
      key: 30,
      name: '互动游戏-攒经验',
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
      key: 31,
      name: '互动游戏-逛一逛-看直播赚钱',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text="互动游戏"] >n [text="做任务 攒经验"] + * >n @View[index=0][clickable=true] > View[clickable=true] >n [text="逛一逛"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            '[text="粉丝关注任务"] >n @TextView[clickable=true][index=1]',
            '[text="直播间心愿"] >n @View[clickable=true] > [text="0276048048dc874a"]',
          ],
          activityIds: [
            'com.jd.lib.mylive.view.activity.VideoLiveRoomActivity',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          actionDelay: 5000,
          matches: ['@[desc="关闭直播间"][clickable=true] > ImageView'],
          activityIds: [
            'com.jd.lib.mylive.view.activity.VideoLiveRoomActivity',
          ],
        },
      ],
    },
    //阅读1本小说赚现金-去东东农场领水果-跟着JOY去旅行-权益中心抽66元红包-扭蛋商店抽50元红包-瓜分千万京豆-下单返红包-挖无门槛红包-每日免费抽红包-玩小游戏领京豆-汪汪庄园升级领京豆-天天刮京豆
    {
      key: 32,
      name: '互动游戏-逛一逛',
      matchRoot: true,
      forcedTime: 20000,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: [
            '[text="互动游戏"] >n [text="做任务 攒经验"] + * >n @View[index=0][clickable=true] > View[clickable=true] >n [text="逛一逛"]',
          ],
          activityIds: [
            'com.jingdong.manto.ui.MantoActivityUp1',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          matches: [
            '@RelativeLayout[clickable=true] >n [text="点击立即返回"] - * [text="已完成"]',
          ],
          activityIds: [
            '.personel.FloatViewActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '[text="互动游戏"] >n @TextView[clickable=true] + * [text="已完成"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
      ],
    },
    //向僵尸开炮-串串消除王-AI斗地主-AI掼蛋-三国：冰河时代-百炼英雄
    {
      key: 33,
      name: '互动游戏-逛一逛-游戏',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: [
            '[text="互动游戏"] >n [text="做任务 攒经验"] + * >n @View[index=0][clickable=true] > View[clickable=true] >n [text="逛一逛"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: [
            '@[desc="关闭"][clickable=true] - [desc="更多"][clickable=true]',
          ],
          activityIds: ['com.jingdong.manto.ui.MantoActivityUp1'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[text="退出游戏"][clickable=true] + [text="添加到桌面"][clickable=true]',
          ],
          activityIds: ['com.jingdong.manto.ui.MantoActivityUp1'],
        },
      ],
    },
    {
      key: 34,
      name: '互动游戏-去完成',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          action: 'clickCenter',
          matches: [
            '[text="互动游戏"] >n [text="做任务 攒经验"] + * >n @View[index=0][clickable=true] > View[clickable=true] >n [text="去完成"]',
          ],
          activityIds: [
            'com.jingdong.manto.ui.MantoActivityUp1',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          matches: [
            '@RelativeLayout[clickable=true] >n [text="点击立即返回"] - * [text="已完成"]',
          ],
          activityIds: ['com.jd.lib.productdetail.ProductDetailActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '[text="互动游戏"] >n @TextView[clickable=true] + * [text="已完成"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
      ],
    },
    {
      key: 35,
      name: '互动游戏-领取',
      matchRoot: true,
      actionMaximum: 1,
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
    //天天签到抽奖
    //https://pro.m.jd.com/mall/active/4WMAPf9VCBdEE8Rva1AVEPH7CBbj/index.html
    {
      key: 40,
      name: '天天签到抽奖',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            'FrameLayout > FrameLayout > ViewGroup > @[desc="今日已签到，点击查看活动"][clickable=true] > ImageView + ViewGroup',
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '天天签到抽奖-逛一逛',
      matchRoot: true,
      actionMaximum: 1,
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
      name: '天天砸金蛋',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@View[clickable=true] >n [getChild(1).text="今天"] + [text^="抽3000京豆"]',
          ],
          activityIds: ['.WebActivity', '.MainFrameActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '天天砸金蛋-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          excludeMatches: [
            'HorizontalScrollView >n RelativeLayout[getChild(0).desc!~="特价, 已选中"]',
          ],
          actionDelay: 1000,
          matches: [
            'View[getChild(1).text!="健康金限时领(0/1)"] > @[text="去完成"][clickable=true]',
          ],
          activityIds: ['.WebActivity', '.MainFrameActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          matches: [
            '@RelativeLayout[clickable=true] >n [text="点击立即返回"] - * [text="已完成"]', //浏览页面得京豆-逛秒杀频道 签到领京豆-逛逛频道领好礼(0/12)-逛自营二手 全品类低价捡漏-浏览页面领京豆(0/2)-逛京东校园签到得京豆-转发好友！瓜分拼手气红包
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
            '@ImageView < ViewGroup - ImageView < ViewGroup',//健康金限时领
            '@ImageView < ViewGroup -n ViewGroup < ViewGroup',
          ],
          activityIds: [
            'com.jingdong.common.jdreactFramework.activities.JDReactNativeCommonActivity',
          ],
        },
      ],
    },
    {
      key: 52,
      name: '天天砸金蛋',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.WebActivity', '.MainFrameActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            'View > View + [name$="TextView"] +n @[text="去完成"][clickable=true]',
          ],
          matches: ['@[text~="砸一下\\\\(剩余[0-9]+次\\\\)"][clickable=true]'],
        },
        {
          preKeys:[0],
          key: 1,
          matches: [
            '@[desc="关闭弹窗" || text="关闭弹窗"][clickable=true] + View > View > View + TextView[clickable=true]',
          ],
        },
      ],
    },
    //26.08.20-26.09.16 寻鲜争霸赛 为TA投票
    //https://pro.m.jd.com/mall/active/UCAYQxqQV3mKZNfu8bG2t8wsYog/index.html
    {
      key: 100,
      name: '寻鲜争霸赛 为TA投票',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          matches: [
            '[text="寻鲜争霸赛 为TA投票"] >n @View[clickable=true] > [text="做任务赚人气值"]',
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            '@[text="去完成"][clickable=true] -2 [text^="逛逛大闸蟹"]',
            '@[text="去完成"][clickable=true] -2 [text^="逛逛佳沛"]',
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 5000,
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
          preKeys: [0, 1, 2],
          key: 3,
          matches: [
            '[text="寻鲜争霸赛 为TA投票"] >n @[text="关闭"][clickable=true] -2 View > [text~="恭喜获得[0-9]人气值"]',
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
      ],
    },
    //系统应用类
    {
      key: 400,
      name: '去开启通知-×',
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
    //首页广告类
    {
      key: 500,
      name: '首页广告-跳过',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="跳过"] < [desc="跳过"][clickable=true] -2 [desc="启动图广告"]',
          ],
          activityIds: ['.MainFrameActivity'],
        },
      ],
    },
    {
      key: 501,
      name: '首页广告-×',
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
