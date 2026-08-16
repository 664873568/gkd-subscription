import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    //互动游戏
    //https://prodev.m.jd.com/mall/active/3fcyrvLZALNPWCEDRvaZJVrzek8v/index.html
    {
      key: 10,
      name: '互动游戏-攒经验',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@TextView[clickable=true] + * View[clickable=true] > [text="明天继续"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
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
      matchDelay: 3000,
      matchTime: 20000,
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
          actionDelay: 6000,
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
      actionMaximum: 1,
      matchDelay: 2000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
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
      actionMaximum: 1,
      matchDelay: 3000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '[text="互动游戏"] >n @View[clickable=true] > [text="逛一逛"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          actionDelay: 6000,
          matches: [
            '@[desc="关闭"][clickable=true] - [desc="更多"][clickable=true]',
          ],
          activityIds: ['com.jingdong.manto.ui.MantoActivityUp1'],
        },
        {
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
      actionMaximum: 1,
      matchDelay: 3000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
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
          action: 'clickCenter',
          matches: [
            '@RelativeLayout[clickable=true] >n [text="点击立即返回"] - * [text="已完成"]',
          ],
          activityIds: ['com.jd.lib.productdetail.ProductDetailActivity'],
        },
        {
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
      matchDelay: 4000,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '[text="互动游戏"] >n [text="赚京豆"] >n [text="全部奖励已解锁"] + * >n @[text="领取"][clickable=true]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="互动游戏"] >n [text="京豆奖励"] +n @[text="开心收下"][clickable=true]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
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
