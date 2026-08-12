import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    {
      key: 0,
      name: '正在跳转...-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 3000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] <<n * + * [text="正在跳转......"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '跳转中...-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 3000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] <<n * - * [text="跳转中..."]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '商品详情-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="商品详情"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '彩票券-返回领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 10000,
          matches: [
            'View - View < [text="彩票券"] >n @TextView[clickable=true]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '奖励已到账-返回做任务页面',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="奖励已到账"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //
    {
      key: 10,
      name: '整点秒杀 抢20元金券-<', //整点秒杀 抢20元金券-邀好友领4.8mg黄金
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + TextView',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '互动游戏-<', //互动游戏
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '[text="游戏大厅"] >n @View[clickable=true] > [text="dancing"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 12,
      name: '消除烤串-⊙',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '[vid="manto_actionbar_option"][clickable=true] + @[vid="manto_actionbar_home"][clickable=true]',
          ],
          activityIds: ['com.jingdong.manto.ui.MantoActivityUp1'],
        },
      ],
    },
    {
      key: 13,
      name: '返回领奖', //签到领现金-
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 14,
      name: '返回领奖-15理财日',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@View[clickable=false] - View[clickable=true] < [text="15理财日"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //22.12.26-26.12.31 养猪猪
    //https://u.jr.jd.com/uc-fe-wxgrowing/cloudpig/index/
    {
      key: 20,
      name: '养猪猪-产粮机',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@TextView + [text="10g"] + [text="createAwardSignfull"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //做任务 赚粮食
    {
      key: 21,
      name: '养猪猪-返回领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['com.jingdong.manto.ui.MantoActivityUp1'],
        },
      ],
    },
    {
      key: 22,
      name: '养猪猪-浏览完成', //无尽战歌
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '[text="浏览完成"] < View[clickable=false] - * [text="ff776b55ee07c915"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 23,
      name: '养猪猪-继续浏览',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'TextView[clickable=true] - @[text="继续浏览"][clickable=true] -2 [text="恭喜获得浏览奖励"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //24.04.22-25.12.31 做任务 领京豆|赚京豆-做任务领京豆二级页
    //https://member.jr.jd.com/member/integral-mall/mission/
    //https://member.jr.jd.com/member/coinQuest/coin/
    {
      key: 30,
      name: '赚京豆-浏览完成', //玩雀神来也10秒
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="浏览完成"] < @View[clickable=true] - * [text="ff776b55ee07c915"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 31,
      name: '赚京豆---<', //逛测财运智能体
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n WebView',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 32,
      name: '赚京豆----<', //逛看病买药频道-指数交易抽红包-逛京喜领京豆-逛京东新品-逛白条省钱卡-逛白条省钱卡-精选好物-逛逛会场-逛领券中心-逛逛手机馆-PLUS频道领京豆-去买药秒送领红包-逛保险抽9999京豆
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + TextView',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 33,
      name: '赚京豆-返回领奖', //15理财日
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 34,
      name: '看视频-返回领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@ImageView[clickable=true] < * < * -n * [vid="video_preheat_container"]',
          ],
          activityIds: ['.bm.sh.jm.video.ui.VibratoActivity'],
        },
      ],
    },
    //24.08.20-26.12.31 养大鹅
    //https://u.jr.jd.com/uc-fe-wxgrowing/cloudgoose/index/
    //浏览10s*4
    {
      key: 40,
      name: '养大鹅-返回领奖', //浏览白条频道10秒-玩互动游戏领京豆-浏览财富庄园10秒
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '养大鹅-看视频至高领10元',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="back_button"][clickable=true] -n * [text="返回领奖"]',
          ],
          activityIds: ['.bm.sh.jm.video.ui.VibratoActivity'],
        },
      ],
    },
    {
      key: 42,
      name: '养大鹅-浏览完成', //玩雀神来也10秒
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '[text="浏览完成"] < View[clickable=false] - * [text="ff776b55ee07c915"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //逛一逛*16
    {
      key: 43,
      name: '养大鹅-商品详情-<', //逛看病买药频道-指数交易抽红包-逛京喜领京豆-逛京东新品-逛白条省钱卡-逛白条省钱卡-精选好物-逛逛会场-逛领券中心-逛逛手机馆-PLUS频道领京豆-去买药秒送领红包-逛保险抽9999京豆
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + TextView',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 44,
      name: '养大鹅-逛京东秒杀-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n [text="京东秒杀"]',
          ],
          activityIds: ['.bm.common.container.ui.BaseContainerActivity'],
        },
      ],
    },
    {
      key: 45,
      name: '养大鹅--<', //逛京东特价-逛超市抢鸡蛋-逛全球购好物-逛家电家居频道-逛测财运智能体
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n WebView',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 46,
      name: '养大鹅-逛超市抢鸡蛋-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['[text="京东超市"] >n @[text="关闭弹窗"][clickable=true]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n WebView[text="京东超市"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 47,
      name: '养大鹅-从京东信誉分频道进入',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@TextView -2 [text="从京东信誉分频道 进游戏"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="551d38b59d892f29"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 48,
      name: '养大鹅-开炮击杀任意一条鱼-<',
      matchRoot: true,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'longClickCenter',
          actionCd: 100,
          actionMaximum: 50,
          matches: ['@[id="GameCanvas"] < [id="Cocos2dGameContainer"]'],
          activityIds: ['.bm.common.web.ui.landscape.WebLandscapeActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 10000,
          matches: ['@[text="退出"][clickable=true]'],
          activityIds: ['.bm.common.web.ui.landscape.WebLandscapeActivity'],
        },
      ],
    },
    {
      key: 49,
      name: '养大鹅-摸鱼盯盘-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [vid="common_webview_navbar_right"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //25.01.01-26.12.31 签到领现金
    //https://member.jr.jd.com/activity/sign/v5/indexV2.html
    //https://member.jr.jd.com/activity/new-sign-in/home/
    //连续打卡白拿好礼
    //每日点签
    //浏览精选好物*6
    //查看精彩内容10s*3
    {
      key: 50,
      name: '签到领现金-返回签到-天天领红包',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="返回签到"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.container.ui.BaseContainerActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '签到领现金-返回签到-京东外卖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="返回签到"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 52,
      name: '签到领现金-返回领奖-省钱',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="返回领奖"][clickable=true] < * < * < * < * -n * [text="省钱"] - * ImageView[clickable=true]',
          ],
          activityIds: ['.bm.jrv8.JRCustomDyPageActivity'],
        },
      ],
    },
    //赚抽奖次数
    //逛一逛*14
    {
      key: 53,
      name: '签到领现金-浏览完成-继续浏览下一个',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n WebView[text="家电家居"] >n [text="readMissionArrow2"] - [text="继续浏览下一个"] - [text="浏览完成"] < View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 54,
      name: '签到领现金-浏览完成-返回签到页',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="返回签到页"] - [text="浏览完成"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //浏览*10
    {
      key: 55,
      name: '签到领现金-商品详情-<', //逛月黑风高频道-天天逛特价 2元也包邮-逛一逛滋补馆
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + TextView',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 56,
      name: '签到领现金-返回领奖', //逛白条频道领红包-浏览财富会员领权益-去停车缴费，领京豆
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 57,
      name: '签到领现金-赚抽奖次数-看视频最高赚10元',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="back_button"][clickable=true] -n * [text="继续做任务"]',
          ],
          activityIds: ['.bm.sh.jm.video.ui.VibratoActivity'],
        },
      ],
    },
    {
      key: 58,
      name: '签到领现金-赚抽奖次数-<', //浏览财富会员领权益-去逛手机数码馆
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n WebView',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 59,
      name: '签到领现金-赚抽奖次数-去市民中心，领京豆',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 3000,
          matches: [
            '@[vid="manto_actionbar_home"][clickable=true] <<n * - * [text="京民通"]',
          ],
          activityIds: ['com.jingdong.manto.ui.MantoActivitySingleProcess'],
        },
      ],
    },
    //25.12.25-26.12.31 天天赚钱 领京豆|天天赚京豆
    //https://show.jd.com/m/RkO0AE9rKrYy6ZDd/?pageKey=RkO0AE9rKrYy6ZDd
    //做任务开福袋
    //做任务赚京豆
    {
      key: 60,
      name: '天天赚京豆-去玩游戏领大奖-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 3000,
          matches: [
            '@[vid="common_webview_navbar_left"] <<n * [text="去玩游戏领大奖"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 61,
      name: '天天赚京豆-任务已完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@TextView -2 [text~="再领[0-9]京豆"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 62,
      name: '天天赚京豆-任务未完成',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@TextView - [text="立即领取"] -2 [text~="[0-9]京豆"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 63,
      name: '天天赚京豆-打开APP',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: ['@[text="打开"] - [text="取消"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 64,
      name: '天天赚京豆-去七猫小说领金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: [
            '[text="七猫免费小说推广"] > View[clickable=true] >n @[desc="下载免费看书"][clickable=true] > [text="下载免费看书"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 65,
      name: '天天赚京豆-去飞猪签到兑现金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          excludeMatches: [
            '[text="此功能需访问飞猪旅行APP"] >n @[vid="common_webview_navbar_left"]',
          ],
          matches: ['@[text="打开飞猪"] <3 [id="__endCallTop__"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 66,
      name: '天天赚京豆-去百度极速版领现金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: ['[text="下载百度极速版"] >n @TextView[clickable=true]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 67,
      name: '天天赚京豆-去点淘APP赚零花钱',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          anyMatches: [
            '[text="点淘"] >n @View[clickable=true] > [text="下载/打开APP"]',
            '[text="点淘"] >n [text="O1CN01aoHt3B1zVoG3DlIIc_!!6000000006720-2-tps-750-1751.png_q75.jpg_"] + @TextView[clickable=true]', //点击领元宝
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 68,
      name: '天天赚京豆-去全民K歌领福利',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: [
            '@[id="76d7f62d-5557-482a-8863-9b8b32bc35b4"][clickable=true]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 69,
      name: '天天赚京豆-来菜鸟每天抽手机',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          anyMatches: [
            '[text="菜鸟"] >n @TextView[clickable=true] > [text="前往菜鸟APP"]',
            '[text="菜鸟"] >n @[id="root"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //2026-01.15-2026.12.31 摇黄金
    //https://fu.jr.jd.com/fq-free-channel/shake-gold/index?channelLv=202209231527222DMrDH
    //赚次数 得黄金
    {
      key: 80,
      name: '摇黄金-商品详情-<', //浏览京东钱包10秒-查看信誉分频道10秒
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + TextView',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 81,
      name: '摇黄金-看视频赚10元现金-返回领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="back_button"][clickable=true] -n [vid="fl_operating_group"] >n [text="返回领奖"]',
          ],
          activityIds: ['.bm.sh.jm.video.ui.VibratoActivity'],
        },
      ],
    },
    {
      key: 82,
      name: '摇黄金-返回领奖', //玩垒金砖挑战游戏
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //看视频 赚现金
    //https://u.jr.jd.com/downloadApp/index.html?jumpUrl=https://content.jr.jd.com/shareProject/shortVideo/vertical/index.html?contentId=824242245632133120
    //做任务 赚现金
    {
      key: 90,
      name: '看视频 赚现金-上滑',
      matchRoot: true,
      actionMaximum: 60,
      resetMatch: 'activity',
      rules: [
        {
          order: 0,
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
            duration: 200,
          },
          actionCd: 60000,
          matches: [
            '@[vid="fl_operating_group"] [text~="\\\\+(1[1-9]|[2-9][0-9]|[0-9]{3,})"]',
          ],
          activityIds: [
            '.bm.mainbox.main.MainActivity',
            '.bm.sh.jm.video.ui.VibratoActivity',
          ],
        },
        {
          order: 1,
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
            duration: 200,
          },
          actionCd: 60000,
          matches: ['@[vid="recycler_view"] [text="上滑继续看视频"]'],
          activityIds: [
            '.bm.mainbox.main.MainActivity',
            '.bm.sh.jm.video.ui.VibratoActivity',
          ],
        },
      ],
    },
    {
      key: 91,
      name: '看视频 赚现金-返回领奖', //浏览免费领礼物-走路抽黄金转运珠-养猪猪
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.sh.jm.video.ui.VibratoActivity'],
        },
      ],
    },
    {
      key: 92,
      name: '看视频 赚现金-返回领奖-看收藏大牛学知识',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[vid="back_button"][clickable=true] -n * [text="返回领奖"] < View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.sh.jm.video.ui.VibratoActivity'],
        },
      ],
    },
    {
      key: 93,
      name: '看视频 赚现金-返回领奖-京东保',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="返回领奖"][clickable=true] < * < * < * < * - * ViewGroup + ImageView[clickable=true] + ImageView',
          ],
          activityIds: ['.bm.common.container.ui.BaseContainerActivity'],
        },
      ],
    },
    {
      key: 94,
      name: '看视频 赚现金-返回领奖-神域战纪',
      matchRoot: true,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.landscape.WebLandscapeActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="神域战纪"] >n [id="popupFrame"] >n [text="提示"] + [text="主人 是否退出游戏"] + Button[clickable=true] + @Button[clickable=true] + Button[clickable=true]',
          ],
          activityIds: ['.bm.common.web.ui.landscape.WebLandscapeActivity'],
        },
      ],
    },
    {
      key: 95,
      name: '看视频 赚现金-圈子-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n [text="圈子"]',
          ],
          activityIds: ['.bm.common.container.ui.BaseContainerActivity'],
        },
      ],
    },
    {
      key: 96,
      name: '看视频 赚现金-商品详情-<', //股票投顾
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + TextView',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 97,
      name: '看视频 赚现金-白条-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + ImageView',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 98,
      name: '看视频 赚现金-竞猜足球-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [vid="common_webview_navbar_right"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 99,
      name: '看视频 赚现金-天天来提额-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: ['@View[clickable=true] > [text="03e6058058b35dde"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //26.07.01-26.07.31 机构福利-财宝分福利
    //https://show.jd.com/m/De5VMnmwbxY2Pyk3/?pageKey=De5VMnmwbxY2Pyk3
    {
      key: 100,
      name: '做任务赚财宝分-取消自选',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '@Image[clickable=true] -2 [text="1个财宝分"] <n View[index=9][childCount=4]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@View[clickable=true] > [text="ae1d4a7d750f0dcb"] + [text="已自选"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '[text="已删除自选"] < * - * @View[clickable=true] > [text="ce6aa1713606b4c1"] + [text="加自选"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0, 2],
          key: 3,
          action: 'back',
          matches: [
            '@[text="HPmi0zAOZAAAAAElFTkSuQmCC"] + [text="已添加到自选"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 101,
      name: '做任务赚财宝分',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '@Image[clickable=true] -2 [text="1个财宝分"] <n View[index=9][childCount=4]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@View[clickable=true] > [text="ce6aa1713606b4c1"] + [text="加自选"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          action: 'back',
          matches: [
            '@[text="HPmi0zAOZAAAAAElFTkSuQmCC"] + [text="已添加到自选"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 400,
      name: '发现新版本-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[vid="ib_close"] + [vid="cd_content_root"]'],
          activityIds: [
            '.bm.mainbox.main.MainActivity',
            '.bm.common.web.ui.WebActivity',
            '.bm.zhyy.login.ui.LoginStatePromptDialog',
          ],
        },
      ],
    },
    {
      key: 401,
      name: '打开通知提醒-×',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@[vid="iv_close"][clickable=true] - [text="打开通知提醒"][vid="tv_title1"]',
          ],
          activityIds: ['.bm.mainbox.main.MainActivity'],
        },
      ],
    },
  ],
});
