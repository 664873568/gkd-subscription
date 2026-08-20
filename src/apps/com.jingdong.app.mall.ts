import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    //天天砸金蛋
    {
      key: 0,
      name: '天天砸金蛋-去完成',
      matchRoot: true,
      matchDelay: 2000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@View[clickable=true] > View > View > [text="sign icon"]',
            '@View[clickable=true] > View > View > [desc="sign icon"]',
          ],
          activityIds: ['.WebActivity', '.MainFrameActivity'],
        },
        {
          key: 1,
          anyMatches: [
            '@[text="去完成"][clickable=true] -n [text!="0.1元好货低价提(0/1)"]',
            '@[text="去完成"][clickable=true] -n [text!="健康金限时领(0/1)"]',
          ],
          activityIds: [
            '.WebActivity',
            'com.jd.lib.ttt.page.TTTMultiPageActivity',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          action: 'clickCenter',
          matches: [
            '@RelativeLayout[clickable=true] >n [text="点击立即返回"] - * [text="已完成"]', //浏览页面得京豆-逛秒杀频道 签到领京豆-逛逛频道领好礼(0/12)-逛自营二手 全品类低价捡漏-浏览页面领京豆(0/2)-逛京东校园签到得京豆-转发好友！瓜分拼手气红包
          ],
          activityIds: [
            '.personel.FloatViewActivity',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
        {
          preKeys: [1],
          key: 3,
          actionDelay: 5000,
          matches: [
            'RelativeLayout > @[desc="返回"][clickable=true]', //浏览点击3个商品(0/3)
            'TextView - @TextView[clickable=true] <<n WebView', //浏览京东金融领京豆(0/3)
          ],
          activityIds: [
            '.WebActivity',
            'com.jd.lib.productdetail.ProductDetailActivity',
          ],
        },
        {
          preKeys: [1],
          key: 4,
          actionDelay: 5000,
          matches: ['@FrameLayout[clickable=true] > [desc="搜索"]'], //看视频领3折券
          activityIds: ['com.jd.lib.Discovery.view.DiscoveryActivity'],
        },
        {
          preKeys: [1],
          key: 5,
          matches: [
            'ScrollView + ViewGroup >n @ViewGroup[childCount=1][clickable=true] >n ImageView', //0.1元好货低价提-<
          ],
          activityIds: [
            'com.jingdong.common.jdreactFramework.activities.JDReactNativeCommonActivity',
          ],
        },
        {
          preKeys: [1],
          key: 6,
          actionDelay: 5000,
          matches: [
            'ViewGroup > LinearLayout > @TextView[text=""][clickable=true] + ImageView', //逛新品频道 每天领红包-逛排行榜最高得99豆-逛超级明星抽8888红包-逛拍卖领京豆
          ],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
        {
          preKeys: [1],
          key: 7,
          actionDelay: 5000,
          matches: [
            'ViewGroup + ViewGroup + @ViewGroup[clickable=true] > ImageView', //健康金限时领-×
          ],
          activityIds: [
            'com.jingdong.common.jdreactFramework.activities.JDReactNativeCommonActivity',
          ],
        },
        {
          preKeys: [1],
          key: 8,
          matches: [
            'ViewGroup[childCount=10] + ViewGroup[childCount=2] > ViewGroup + ViewGroup[childCount=2] > @ViewGroup[clickable=true] > ImageView', //健康金限时领-<
          ],
          activityIds: [
            'com.jingdong.common.jdreactFramework.activities.JDReactNativeCommonActivity',
          ],
        },
        {
          preKeys: [1],
          key: 9,
          actionDelay: 5000,
          matches: [
            '[text="推荐"] <n @ViewGroup[clickable=true] < * + * [text="试用领取"]', //逛逛频道领好礼(0/12)
          ],
          activityIds: ['.MainFrameActivity'],
        },
        {
          preKeys: [1, 9],
          key: 10,
          matches: [
            '[text="9.9包邮"] <n @ViewGroup[clickable=true] < * - * [text="推荐"]', //逛逛频道领好礼(0/12)
          ],
          activityIds: ['.MainFrameActivity'],
        },
        {
          key: 11,
          matches: ['@[text~="砸一下\\\\(剩余[0-9]+次\\\\)"][clickable=true]'],
          activityIds: ['.WebActivity', '.MainFrameActivity'],
        },
        {
          preKeys: [11],
          key: 12,
          matches: [
            '@[desc="关闭弹窗"][clickable=true] + View > View > View + TextView[clickable=true]',
          ],
          activityIds: ['.WebActivity', '.MainFrameActivity'],
        },
      ],
    },
    //互动游戏
    //https://prodev.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html
    {
      key: 10,
      name: '互动游戏-攒经验',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@TextView[clickable=true] + * View[clickable=true] > [text="明天继续"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          key: 1,
          excludeMatches: ['[text="做任务 攒经验"]'],
          matches: [
            '[text="互动游戏"] >n [text="赚京豆"] >n [text="攒经验 ›"][clickable=true]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '互动游戏-逛一逛-看直播赚钱',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: [
            '[text="互动游戏"] >n @View[clickable=true] > [text="逛一逛"]',
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
    //边看小说边赚钱-去东东农场领水果-跟着JOY去旅行-权益中心抽66元红包-扭蛋商店抽50元红包-瓜分千万京豆-下单返红包-挖无门槛红包-每日免费抽红包-玩小游戏领京豆-汪汪庄园升级领京豆-天天刮京豆
    {
      key: 12,
      name: '互动游戏-逛一逛',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: [
            '[text="互动游戏"] >n @View[clickable=true] > [text="逛一逛"]',
          ],
          activityIds: [
            'com.jingdong.manto.ui.MantoActivityUp1',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
        {
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
          key: 2,
          matches: [
            '[text="互动游戏"] >n @TextView[clickable=true] + * [text="已完成"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
      ],
    },
    //向僵尸开炮-串串消除王-AI斗地主-AI掼蛋-三国：冰河时代
    {
      key: 13,
      name: '互动游戏-逛一逛-游戏',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: [
            '[text="互动游戏"] >n @View[clickable=true] > [text="逛一逛"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          key: 1,
          actionDelay: 5000,
          matches: [
            '@[desc="关闭"][clickable=true] - [desc="更多"][clickable=true]',
          ],
          activityIds: ['com.jingdong.manto.ui.MantoActivityUp1'],
        },
        {
          key: 2,
          matches: [
            '@[text="退出游戏"][clickable=true] + [text="添加到桌面"][clickable=true]',
          ],
          activityIds: ['com.jingdong.manto.ui.MantoActivityUp1'],
        },
      ],
    },
    {
      key: 14,
      name: '互动游戏-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          action: 'clickCenter',
          matches: [
            '[text="互动游戏"] >n [text~="热卖商品推荐\\\\([0-4]/5\\\\)"] +2 @View[clickable=true] > [text="去完成"]',
          ],
          activityIds: [
            'com.jingdong.manto.ui.MantoActivityUp1',
            'com.jd.lib.babel.view.activity.BabelActivity',
          ],
        },
        {
          key: 1,
          action: 'clickCenter',
          matches: [
            '@RelativeLayout[clickable=true] >n [text="点击立即返回"] - * [text="已完成"]',
          ],
          activityIds: ['com.jd.lib.productdetail.ProductDetailActivity'],
        },
        {
          key: 2,
          matches: [
            '[text="互动游戏"] >n @TextView[clickable=true] + * [text="已完成"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
      ],
    },
    {
      key: 15,
      name: '互动游戏-领取',
      matchRoot: true,
      matchDelay: 2000,
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
    //系统应用类
    {
      key: 40,
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
      key: 50,
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
      key: 51,
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
