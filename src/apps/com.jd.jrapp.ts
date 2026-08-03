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
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] <<n * [text="跳转中..."]',
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
            '@TextView[clickable=true] <<n [text="彩票券"] > View + View',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '15理财日-返回领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 10000,
          matches: [
            '@[text="03e6465108e2aec8.png!q70"] <<n [text="15理财日"] > View + View',
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
            '@TextView[clickable=true] <<n * +n * [text="奖励已到账"] < * - * [text="readMissionDown"]',
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
      key: 31,
      name: '养猪猪-返回领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="manto_actionbar_home"][clickable=true] <<n * -n * [text="返回领奖"] < * - * [text="readMissionDown"]',
          ],
          activityIds: ['com.jingdong.manto.ui.MantoActivityUp1'],
        },
      ],
    },
    {
      key: 32,
      name: '养猪猪-继续浏览',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="继续浏览"] -2 [text="恭喜获得浏览奖励"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //24.04.22-25.12.31 做任务 领京豆|赚京豆-做任务领京豆二级页
    //https://member.jr.jd.com/member/integral-mall/mission/
    //https://member.jr.jd.com/member/coinQuest/coin/
    //24.08.20-26.12.31 养大鹅
    //https://u.jr.jd.com/uc-fe-wxgrowing/cloudgoose/index/
    //浏览10s*4
    {
      key: 40,
      name: '养大鹅-浏览完成-玩雀神来也10秒',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="雀神来也"] <<n * + * [text="浏览完成"] < * - * [text="ff776b55ee07c915"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '养大鹅-返回领奖-玩互动游戏领京豆',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="dancing"] < @TextView[clickable=true] <<n * +n * [text="返回领奖"] < * - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //逛一逛*16
    {
      key: 42,
      name: '养大鹅-逛看病买药频道-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="看病买药"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 43,
      name: '养大鹅-指数交易抽红包-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="看病买药"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 44,
      name: '养大鹅-逛京喜领京豆-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="看病买药"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 45,
      name: '养大鹅-逛京东新品-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="看病买药"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 46,
      name: '养大鹅-逛京东秒杀',
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
      key: 47,
      name: '养大鹅-逛京东特价',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n [text="京东特价"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 48,
      name: '养大鹅-逛超市抢鸡蛋',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n [text="京东特价"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 49,
      name: '养大鹅-逛全球购好物',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n [text="京东特价"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 50,
      name: '养大鹅-逛家电家居频道',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n [text="京东特价"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 51,
      name: '养大鹅-逛白条省钱卡',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n [text="京东特价"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 52,
      name: '养大鹅-逛家庭常备药-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="看病买药"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 53,
      name: '养大鹅-精选好物/逛逛会场-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="看病买药"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 54,
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
      key: 55,
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
      key: 56,
      name: '养大鹅-逛领券中心-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="看病买药"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 57,
      name: '养大鹅-浏览财富庄园10秒-返回领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="返回领奖"] < * - * [text="readMissionDown"] <<n [text="财富庄园"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //逛逛手机馆 PLUS频道领京豆
    {
      key: 58,
      name: '养大鹅-逛测财运智能体',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n [text="JoyAI"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //去买药秒送领红包
    //逛保险抽9999京豆
    //25.01.01-26.12.31 签到领现金
    //https://member.jr.jd.com/activity/sign/v5/indexV2.html
    //https://member.jr.jd.com/activity/new-sign-in/home/
    //连续打卡白拿好礼
    //每日点签
    //浏览精选好物*6
    //查看精彩内容10s*3
    {
      key: 60,
      name: '签到领现金-查看精彩内容-天天领红包',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] <<n * - * [text="返回签到"] < * - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.container.ui.BaseContainerActivity'],
        },
      ],
    },
    {
      key: 61,
      name: '签到领现金-查看精彩内容-省钱',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="省钱"] - * @ImageView[clickable=true] <<n * +n * [text="返回签到"] < * - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.jrv8.JRCustomDyPageActivity'],
        },
      ],
    },
    {
      key: 62,
      name: '签到领现金-查看精彩内容-京东外卖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="京东外卖"] <<n * + * [text="返回签到"] < * - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //赚抽奖次数
    //逛一逛*14
    {
      key: 70,
      name: '签到领现金-赚抽奖次数-浏览完成-继续浏览下一个',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n * +n * [text="readMissionArrow2"] - [text="继续浏览下一个"] - [text="浏览完成"] < * - * [text="readMissionDown"]',
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] <<n * + * [text="readMissionArrow2"] - [text="继续浏览下一个"] - [text="浏览完成"] < * - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 71,
      name: '签到领现金-赚抽奖次数-逛白条频道领红包',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] <<n * - * [text="04400c60c697b53b"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 72,
      name: '签到领现金-赚抽奖次数-天天逛特价 2元也包邮',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n [text="京东特价"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 73,
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
      key: 74,
      name: '签到领现金-赚抽奖次数-逛月黑风高频道',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="月黑风高"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 75,
      name: '签到领现金-赚抽奖次数-浏览财富会员领权益',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="3514c47b3bbe0369"] - @TextView[clickable=true] <<n * + * [text="返回领奖"] < * - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 76,
      name: '签到领现金-赚抽奖次数-去逛手机数码馆',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n [text="手机数码"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 77,
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
    {
      key: 78,
      name: '签到领现金-赚抽奖次数-逛一逛滋补馆',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="家庭常备药"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //25.12.25-26.12.31 天天赚钱 领京豆|天天赚京豆
    //https://show.jd.com/m/RkO0AE9rKrYy6ZDd/?pageKey=RkO0AE9rKrYy6ZDd
    //做任务开福袋
    //做任务赚京豆
    {
      key: 80,
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
      key: 81,
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
      key: 82,
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
      key: 83,
      name: '天天赚京豆-去APP完成任务-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 2000,
          matches: ['@[text$="完成任务"] <<n * [text="bottom.21109d9b"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 84,
      name: '天天赚京豆-任务完成-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 3000,
          matches: [
            '@[text="任务完成，奖励已到账"] <<n * [text="bottom.21109d9b"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 85,
      name: '天天赚京豆-打开APP',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="打开"] - [text="取消"] < View <<n Dialog'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 86,
      name: '天天赚京豆-去七猫小说领金币',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 3000,
          matches: [
            '[text="下载免费看书"] < @[desc="下载免费看书"][clickable=true]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 87,
      name: '天天赚京豆-去飞猪签到兑现金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          excludeMatches: [
            '@[vid="common_webview_navbar_left"] <<n * [text="此功能需访问飞猪旅行APP"]',
          ],
          matches: ['@[text="打开飞猪"] <3 [id="__endCallTop__"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 88,
      name: '天天赚京豆-去飞猪签到兑现金-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 3000,
          matches: [
            '@[vid="common_webview_navbar_left"] <<n * [text="此功能需访问飞猪旅行APP"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 89,
      name: '天天赚京豆-去百度极速版领现金',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 3000,
          matches: [
            '[text="下载百度极速版"] < @[desc="下载百度极速版"][clickable=true]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 90,
      name: '天天赚京豆-去点淘APP赚零花钱',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 3000,
          matches: ['[text="下载/打开APP"] < @TextView[clickable=true]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 91,
      name: '天天赚京豆-去全民K歌领福利',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 3000,
          matches: [
            '@[id="76d7f62d-5557-482a-8863-9b8b32bc35b4"][clickable=true]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 82,
      name: '天天赚京豆-登录JoyAI并对话-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 3000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] <<n * + * [text="JoyAI"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 93,
      name: '天天赚京豆-来菜鸟每天抽手机',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 3000,
          matches: ['[text="前往菜鸟APP"] < @TextView[clickable=true]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //2026-01.15-2026.12.31 摇黄金
    //https://fu.jr.jd.com/fq-free-channel/shake-gold/index?channelLv=202209231527222DMrDH
    //赚次数 得黄金
    {
      key: 100,
      name: '摇黄金-浏览京东钱包10秒-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="京东钱包"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 101,
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
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 102,
      name: '摇黄金-玩垒金砖挑战游戏-返回领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] <<n * - * [text="返回领奖"] < * - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 103,
      name: '摇黄金-查看信誉分频道10秒-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] <<n * - * [id="skeleton"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //看视频 赚现金
    //https://u.jr.jd.com/downloadApp/index.html?jumpUrl=https://content.jr.jd.com/shareProject/shortVideo/vertical/index.html?contentId=824242245632133120
    //做任务 赚现金
    {
      key: 110,
      name: '看视频 赚现金-浏览免费领礼物-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="back"] < @View[clickable=true] <<n * +n [text="返回领奖"] < * - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 111,
      name: '看视频 赚现金-走路抽黄金转运珠-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="看病买药"] <<n * + n [text="返回领奖"] < * - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 112,
      name: '看视频 赚现金-看收藏大牛学知识-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[vid="back_button"][clickable=true] -n * [text="返回领奖"] < * - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.sh.jm.video.ui.VibratoActivity'],
        },
      ],
    },
    //26.07.01-26.07.31 机构福利-财宝分福利
    //https://show.jd.com/m/De5VMnmwbxY2Pyk3/?pageKey=De5VMnmwbxY2Pyk3
    {
      key: 120,
      name: '做任务赚财宝分',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: ['@Image[clickable=true] -2 [text="1个财宝分"] <n View[index=9][childCount=4]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@View[clickable=true] > [text="ce6aa1713606b4c1"] + [text="加自选"]'],
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
      name: '发现新版本',
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
  ],
});
