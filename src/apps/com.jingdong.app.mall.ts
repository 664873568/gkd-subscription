import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 1,
      name: '点击立即返回-已完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@RelativeLayout[clickable=true] >n [text="点击立即返回"][vid="task_sub_text"] - [vid="task_progress_bar_container"] >n [text="已完成"][vid="task_progress_state"]',
          ],
          activityIds: ['.personel.FloatViewActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '限时补贴-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[desc="关闭"] < * - [text="立即使用"] -3 [text="仅限店铺内部分商品"]',
          ],
          activityIds: ['com.jd.lib.productdetail.ProductDetailActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '优惠券奖励-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@TextView < View +2 View <<n * [text="开心收下"]'],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '服饰美妆-暂时离开',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[text*="立即领取"] <<n [text="服饰美妆"]'],
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
      ],
    },
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
      name: '互动游戏-逛一逛',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 3000,
          anyMatches: [
            '[text="互动游戏"] >n @View[clickable=true] > [text="逛一逛"]',
            '[text="互动游戏"] >n [text~="热卖商品推荐\\\\([0-4]/5\\\\)"] +2 @View[clickable=true] > [text="去完成"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          actionDelay: 1000,
          matches: [
            '@RelativeLayout[clickable=true] >n [text="点击立即返回"] - * [text="已完成"]',
          ],
          activityIds: [
            'com.jd.lib.babel.view.activity.BabelActivity',
            'com.jd.lib.productdetail.ProductDetailActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 3000,
          matches: [
            '[text="互动游戏"] >n @TextView[clickable=true] + * [text="已完成"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
      ],
    },
    {
      key: 12,
      name: '互动游戏-逛一逛-游戏',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 3000,
          matches: [
            '[text="互动游戏"] >n @View[clickable=true] > [text="逛一逛"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 7000,
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
      key: 13,
      name: '互动游戏-逛一逛-直播',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          actionDelay: 3000,
          matches: [
            '[text="互动游戏"] >n @View[clickable=true] > [text="逛一逛"]',
          ],
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            '[text="直播间心愿"] >n @View[clickable=true] > [text="0276048048dc874a"]',
          ],
          activityIds: [
            'com.jd.lib.mylive.view.activity.VideoLiveRoomActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 7000,
          matches: ['@[desc="关闭直播间"][clickable=true] > ImageView'],
          activityIds: [
            'com.jd.lib.mylive.view.activity.VideoLiveRoomActivity',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '互动游戏-领取',
      matchRoot: true,
      actionMaximum: 10,
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
