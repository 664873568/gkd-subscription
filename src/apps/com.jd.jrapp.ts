import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    //整点秒杀 抢20元金券-邀好友领4.8mg黄金
    //养大鹅-逛看病买药频道-指数交易抽红包-逛京喜领京豆-逛京东新品-逛白条省钱卡-逛白条省钱卡-精选好物-逛逛会场-逛领券中心-逛逛手机馆-PLUS频道领京豆-去买药秒送领红包-逛保险抽9999京豆-摸鱼盯盘
    //签到领现金-逛月黑风高频道-天天逛特价 2元也包邮-逛一逛滋补馆
    {
      key: 0,
      name: 'Button<',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + TextView',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 1,
      name: 'Button<-正在跳转...',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="正在跳转..."] <<n * + * [text="正在跳转......"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 2,
      name: 'Button<-跳转中...',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] <<n * - * [text="跳转中..."]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 3,
      name: 'Button<-商品详情',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="商品详情"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //帅哥美女向前冲-看病买药就上京东-烦事放我一马
    //签到领现金-15理财日
    //养大鹅-浏览白条频道10秒-玩互动游戏领京豆-浏览财富庄园10秒
    //签到领现金-逛白条频道领红包-浏览财富会员领权益-去停车缴费，领京豆
    {
      key: 4,
      name: '返回领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: [
            '.bm.common.web.ui.WebActivity',
            'com.jingdong.manto.ui.MantoActivityUp1', //养猪猪
          ],
        },
      ],
    },
    //养猪猪-无尽战歌
    //养大鹅-玩雀神来也10秒
    {
      key: 5,
      name: '浏览完成false',
      matchRoot: true,
      actionMaximum: 1,
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
    //赚京豆-玩雀神来也10秒
    {
      key: 6,
      name: '浏览完成true',
      matchRoot: true,
      actionMaximum: 1,
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
    //逛测财运智能体
    //养大鹅-逛京东特价-逛超市抢鸡蛋-逛全球购好物-逛家电家居频道-逛测财运智能体
    //签到领现金-赚抽奖次数-浏览财富会员领权益-去逛手机数码馆
    {
      key: 7,
      name: 'TextView×',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 15000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n [id="J_babelOptPage"] <<n WebView',
          ],
          activityIds: [
            '.bm.common.web.ui.WebActivity',
            '.bm.common.container.ui.BaseContainerActivity',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '养大鹅-逛超市抢鸡蛋-<',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 5000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: ['[text="京东超市"] >n @[text="关闭弹窗"][clickable=true]'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n WebView[text="京东超市"]',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '返回领奖-继续浏览下一个',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '[text="readMissionArrow2"] - [text="继续浏览下一个"] - [text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 16,
      name: '彩票券-返回领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 15000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'View - View < [text="彩票券"] >n @TextView[clickable=true]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 17,
      name: '奖励已到账-返回做任务页面',
      matchRoot: true,
      actionMaximum: 1,
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
    {
      key: 18,
      name: '消除烤串-⊙',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 15000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[vid="manto_actionbar_option"][clickable=true] + @[vid="manto_actionbar_home"][clickable=true]',
          ],
          activityIds: ['com.jingdong.manto.ui.MantoActivityUp1'],
        },
      ],
    },
    //https://member.jr.jd.com/member/mermberRights/rightsCenter/
    //京豆每日抢
    //https://member.jr.jd.com/member/memberScore/rightsScore/
    {
      key: 19,
      name: '京豆秒杀-京豆每日抢',
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['.bm.jrv8.JRCustomDyPageActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '[text="抢兑"] < ViewGroup - ImageView < @ViewGroup[clickable=true] <n * -2 * [text="小金库白条还款券"]',
            '[text="00"] -2 [text="00"] < ViewGroup - ImageView < @ViewGroup[clickable=true] <n * -2 * [text="小金库白条还款券"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@ViewGroup[clickable=true] > [text="2京豆兑换"]'],
        },
        {
          preKeys: [0,1],
          key: 2,
          matches: [
            '@[text="确认兑换"][clickable=true] <n * -n * [text="小金库白条还款券"]',
          ],
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
      name: '养猪猪-继续浏览',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
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
    {
      key: 22,
      name: '养猪猪-返回领奖-京东保',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="返回领奖"][clickable=true] <<n * - * ViewGroup + ImageView[clickable=true] + ImageView',
          ],
          activityIds: ['.bm.common.container.ui.BaseContainerActivity'],
        },
      ],
    },
    {
      key: 23,
      name: '返回领奖-神域战纪',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text="返回领奖"] < @View[clickable=false] - * [text="readMissionDown"]',
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
      key: 24,
      name: '养猪猪-天天来提额-<',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@View[clickable=true] > [text="03e6058058b35dde"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //24.04.22-25.12.31 做任务 领京豆|赚京豆-做任务领京豆二级页
    //https://member.jr.jd.com/member/integral-mall/mission/
    //https://member.jr.jd.com/member/coinQuest/coin/
    //逛每日补贴好物-逛每日推荐好物-逛每日热销好物-浏览低价好物-浏览热销爆品-逛超值爆款好物-浏览省钱好物-新人专享免费领-逛超市，抽免单-PLUS抽京豆-逛家电家居领京豆-来特价天天抽奖-超级明星领红包-去新奇频道领京豆-逛逛排行榜频道
    //9.9频道抽红包-领20元全品类券-逛新品频道领红包-逛京喜 王牌5折-逛京东秒杀领京豆-逛京东权益中心-逛一逛手机数码馆-逛京东服务抽好礼-看京东App视频-去逛逛月黑风高-逛超级补贴-领10元外卖券
    //浏览财富庄园游戏-去看免费热门小说-浏览视频30秒-黄金茅台1元起拍-去玩雀神来也-浏览财富会员权益-玩游戏每天领京豆-浏览高端理财频道-参与披荆斩棘活动-逛品质低价好物
    {
      key: 30,
      name: '赚京豆-去完成-做任务',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="赚京豆"] >n @[text="做任务赚豆"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            //'@View[index=0][clickable=true] > [text="去完成"] - * [text="体验2000元稳健好品"]',
            //'@View[index=2][clickable=true] > [text="去完成"] - * [text="消灭小萌星过1关"]',
            //'@View[index=3][clickable=true] > [text="去完成"] - * [text="完成任意1个拍品预约"]',
            //'@View[index=4][clickable=true] > [text="去完成"] - * [text="完成一笔外卖订单"]',
            //'@View[index=5][clickable=true] > [text="去完成"] - * [text="完成一笔话费充值"]',
            //'@View[index=6][clickable=true] > [text="去完e成"] - * [text="京豆兑换任意权益"]',
            //'@View[index=7][clickable=true] > [text="去完成"] - * [text="加赠一张彩票券"]',
            //'@View[index=8][clickable=true] > [text="去完成"] - * [text="体验一笔8.18%理财"]',
            //'@View[index=9][clickable=true] > [text="去完成"] - * [text="开通京东联名卡"]',
            //'@View[index=10][clickable=true] > [text="去完成"] - * [text="分享好友赚现金"]',
            //'@View[index=11][clickable=true] > [text="去完成"] - * [text="体验1笔金条取现"]',
          ],
        },
      ],
    },
    {
      key: 31,
      name: '赚京豆-去完成-浏览App',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="赚京豆"] >n @[text="浏览App赚豆"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            '@View[index=0][clickable=true] > [text="去完成"] - * [text="0.01元得包邮好物"]',
            '@View[index=0][clickable=true] > [text="去完成"] - * [text="去快手看视频领红包"]',
            //'@View[index=0][clickable=true] > [text="去完成"] - * [text="体验2000元稳健好品"]',
            '@View[index=0][clickable=true] > [text="去完成"] - * [text="去淘宝闪购玩游戏领大奖"]',
            '@View[index=0][clickable=true] > [text="去完成"] - * [text="去百度极速版领现金"]',
            '@View[index=0][clickable=true] > [text="去完成"] - * [text="去百度地图领现金"]',
            //'@View[index=1][clickable=true] > [text="去完成"] - * [text="去移动领话费"]',
            '@View[index=0][clickable=true] > [text="去完成"] - * [text="去YY直播领福利"]',
            '@View[index=0][clickable=true] > [text="去完成"] - * [text="去番茄畅听，听书赚钱"]',
            '@View[index=0][clickable=true] > [text="去完成"] - * [text="去皮皮虾看搞笑内容赚钱"]',
            //'@View[index=2][clickable=true] > [text="去完成"] - * [text="消灭小萌星过1关"]',
            //'@View[index=3][clickable=true] > [text="去完成"] - * [text="完成任意1个拍品预约"]',
            '@View[index=0][clickable=true] > [text="去完成"] - * [text="去头条看资讯赚金币"]',
            '@View[index=0][clickable=true] > [text="去完成"] - * [text="去头条极速版刷视频赚现金"]',
            '@View[index=0][clickable=true] > [text="去完成"] - * [text="去UC极速版领现金"]',
            '@View[index=0][clickable=true] > [text="去完成"] - * [text="去畅听音乐领福利"]',
            //'@View[index=4][clickable=true] > [text="去完成"] - * [text="完成一笔外卖订单"]',
            //'@View[index=5][clickable=true] > [text="去完成"] - * [text="完成一笔话费充值"]',
            //'@View[index=6][clickable=true] > [text="去完e成"] - * [text="京豆兑换任意权益"]',
            //'@View[index=7][clickable=true] > [text="去完成"] - * [text="加赠一张彩票券"]',
            //'@View[index=8][clickable=true] > [text="去完成"] - * [text="体验一笔8.18%理财"]',
            //'@View[index=9][clickable=true] > [text="去完成"] - * [text="开通京东联名卡"]',
            //'@View[index=10][clickable=true] > [text="去完成"] - * [text="分享好友赚现金"]',
            //'@View[index=11][clickable=true] > [text="去完成"] - * [text="体验1笔金条取现"]',
          ],
        },
      ],
    },
    {
      key: 32,
      name: '赚京豆-去完成-做任务-成功喂猪或浇水1次',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@View[index=2][clickable=true] > [text="去完成"] - * [text="成功喂猪或浇水1次"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'View[clickable=true] > @View[clickable=true] > [text="喂食10次"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: ['@View[clickable=true] > [text="back"]'],
        },
      ],
    },
    {
      key: 33,
      name: '赚京豆-去完成-做任务-京豆捕鱼｜消耗10%能量值',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@View[index=3][clickable=true] > [text="去完成"] - * [text="京豆捕鱼｜消耗10%能量值"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'longClickCenter',
          actionCd: 500,
          actionMaximum: 100,
          matches: ['@[id="GameCanvas"] < [id="Cocos2dGameContainer"]'],
          activityIds: ['.bm.common.web.ui.landscape.WebLandscapeActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: ['@[text="退出"][clickable=true]'],
          activityIds: ['.bm.common.web.ui.landscape.WebLandscapeActivity'],
        },
      ],
    },
    //24.08.20-26.12.31 养大鹅
    //https://u.jr.jd.com/uc-fe-wxgrowing/cloudgoose/index/
    {
      key: 40,
      name: '养大鹅-天天提额',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            'View > [text="至高提额3000元"] +n @View[clickable=true] > [text="点我收蛋"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="明日0点领"] <n * + * View[clickable=true] + @TextView[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 41,
      name: '养大鹅-喂鹅翻倍',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          matches: [
            '@View > [text="可领取"] - View[clickable=true] - View > @View[clickable=true] > View > Image',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="明日0点领"] <n * + * View[clickable=true] + @TextView[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 42,
      name: '养大鹅-产粮机',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@TextView[clickable=true] +n * [text*="7天收满100个蛋"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="明日0点领"] <n * + * View[clickable=true] + @TextView[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 43,
      name: '养大鹅-桌面组件',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '[text="桌面小组件"] - [text="可领取"] < @View[clickable=true] < * - * [text*="7天收满100个蛋"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="明日0点领"] <n * + * View[clickable=true] + @TextView[clickable=true]',
          ],
        },
      ],
    },
    //浏览10s*4
    {
      key: 44,
      name: '养大鹅-去完成-看视频至高领10元',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 30000,
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
    //逛一逛*16
    {
      key: 45,
      name: '养大鹅-去完成-从京东信誉分频道进入',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: ['@TextView -2 [text="从京东信誉分频道 进游戏"]'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="551d38b59d892f29"]'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: ['@[text="领"][clickable=true] < View'],
        },
      ],
    },
    {
      key: 46,
      name: '养大鹅-去完成-逛京东秒杀',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
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
      key: 49,
      name: '养大鹅-去完成-开炮击杀任意一条鱼-<',
      matchRoot: true,
      matchTime: 20000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.landscape.WebLandscapeActivity'],
      rules: [
        {
          key: 0,
          action: 'longClickCenter',
          actionCd: 100,
          actionMaximum: 50,
          matches: ['@[id="GameCanvas"] < [id="Cocos2dGameContainer"]'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 10000,
          matches: ['@[text="退出"][clickable=true]'],
        },
      ],
    },
    //24.12.25-26.12.31 天天领红包
    //https://fu.jr.jd.com/fq-free-channel/redenvelope/outside/
    {
      key: 100,
      name: '天天领红包-×',
      actionMaximum: 1,
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'View > View > View > View + @TextView[clickable=true] - * [text="1京豆膨胀红包"]',
          ],
          activityIds: ['.bm.common.container.ui.BaseContainerActivity'],
        },
      ],
    },
    {
      key: 101,
      name: '天天领红包-去完成-做任务',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@View[index=2][clickable=true] > [text="降价啦！去抢"] + [text="去完成"]',
            '@View[index=2][clickable=true] > [text="逛补贴品发京豆"] + [text="去完成"]',
            '@View[index=2][clickable=true] > [text="限时抢超低价"] + [text="去完成"]',
            '@View[index=2][clickable=true] > [text="逛特价品发京豆"] + [text="去完成"]',
            '@View[index=2][clickable=true] > [text="看国家补贴优惠价"] + [text="去完成"]',
            '@View[index=2][clickable=true] > [text="爆品特价活动"] + [text="去完成"]',
            '@View[index=2][clickable=true] > [text="查看限时秒杀"] + [text="去完成"]',
          ],
          activityIds: ['.bm.common.container.ui.BaseContainerActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + TextView',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 102,
      name: '天天领红包-去完成-浏览App',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          anyMatches: [
            '@View[index=1][clickable=true] > [text="逛补贴品发京豆"] + [text="去完成"]',
            '@View[index=1][clickable=true] > [text="限时抢超低价"] + [text="去完成"]',
            '@View[index=1][clickable=true] > [text="逛特价品发京豆"] + [text="去完成"]',
            '@View[index=1][clickable=true] > [text="看国家补贴优惠价"] + [text="去完成"]',
            '@View[index=1][clickable=true] > [text="爆品特价活动"] + [text="去完成"]',
            '@View[index=1][clickable=true] > [text="查看限时秒杀"] + [text="去完成"]',
            '@View[index=1][clickable=true] > [text="去移动领话费"] + [text="去完成"]',
          ],
          activityIds: ['.bm.common.container.ui.BaseContainerActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + TextView',
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
    //天天领红包-京东外卖
    {
      key: 50,
      name: '签到领现金-返回签到',
      matchRoot: true,
      actionMaximum: 1,
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
      key: 52,
      name: '签到领现金-返回领奖-省钱',
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '@[text="返回领奖"][clickable=true] <<n * -n * [text="省钱"] - * ImageView[clickable=true]',
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
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '[text="继续浏览下一个"] - [text="浏览完成"] < View[clickable=true] - * [text="readMissionDown"]',
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
      name: '签到领现金-继续做任务-看视频最高赚10元',
      matchRoot: true,
      actionMaximum: 1,
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
      key: 56,
      name: '签到领现金-去市民中心，领京豆',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
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
      name: '天天赚京豆-去完成-做任务',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          anyMatches: [
            'View[index=0] > [text="浏览储蓄金频道"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="天天抢特价好物"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="抢先看京东限时特价"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="看京东App视频"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="逛京东权益中心"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="逛京东服务抽好礼"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="养车用车 天天领京豆"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="逛逛大家都在买什么"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="指数交易超补1元起"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="逛频道抢50元补贴券包"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="逛健康周日补活动"] +n @View[clickable=true] > [text="去完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]', //浏览储蓄金频道
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          anyMatches: [
            '@TextView[clickable=true] -n [text~="再领[0-9]个京豆"]', //任务已完成 恭喜获得
            '@TextView[clickable=true] - [text="立即领取"] -n [text~="[0-9]个京豆"]', //任务未完成 继续赚奖励
          ],
        },
      ],
    },
    {
      key: 61,
      name: '天天赚京豆-去完成-浏览App',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          anyMatches: [
            'View[index=0] > [text="QQ阅读"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="头条极速"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="百度地图"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="皮皮虾"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="淘宝闪购"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="菜鸟APP"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="芒果TV"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="快手红包"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="百度极速"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=0] > [text="飞猪"] +n @View[clickable=true] > [text="去完成"]',
            //'View[index=0] > [text="头条App"] +n @View[clickable=true] > [text="去完成"]',
            //'View[index=0] > [text="领话费"] +n @View[clickable=true] > [text="去完成"]',
            //'View[index=1] > [text="百度网盘"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=1] > [text="点淘APP"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=1] > [text="全民K歌"] +n @View[clickable=true] > [text="去完成"]',
            //'View[index=1] > [text="酷我音乐"] +n @View[clickable=true] > [text="去完成"]',
            //'View[index=1] > [text="番茄畅听"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=1] > [text="番茄音乐"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=1] > [text="UC极速"] +n @View[clickable=true] > [text="去完成"]',
            //'View[index=1] > [text="分享好友赚现金"] +n @View[clickable=true] > [text="去完成"]',
            //'View[index=2] > [text="你有一注双色球待领取"] +n @View[clickable=true] > [text="去完成"]',
            //'View[index=3] > [text="登录JoyAI并对话"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=3] > [text="0.01元得包邮好物"] +n @View[clickable=true] > [text="去完成"]',
            //'View[index=3] > [text="完成一笔外卖订单"] +n @View[clickable=true] > [text="去完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          anyMatches: [
            '[text="七猫免费小说推广"] > View[clickable=true] >n @[desc="下载免费看书"][clickable=true] > [text="下载免费看书"]', //去七猫小说领金币
            '[text="菜鸟"] >n @View[clickable=true] > [text="前往菜鸟APP"]', //来菜鸟每天抽手机
            '[text="下载百度极速版"] >n @TextView[clickable=true] + TextView', //去百度极速版领现金
            '[text="飞猪"] >n [text="下载打开APP"]', //去飞猪签到兑现金
            '[text="去网盘新任务系统"] >n View[clickable=true] > @TextView[clickable=true]', //百度网盘领福利
            '[text="点淘"] >n @View[clickable=true] > [text="下载/打开APP"]', //去点淘APP赚零花钱
            '@[id="76d7f62d-5557-482a-8863-9b8b32bc35b4"][clickable=true]', //去全民K歌领福利
          ],
        },
        {
          key: 2,
          anyMatches: [
            '@TextView[clickable=true] -n [text~="再领[0-9]个京豆"]', //任务已完成 恭喜获得
            '@TextView[clickable=true] - [text="立即领取"] -n [text~="[0-9]个京豆"]', //任务未完成 继续赚奖励
          ],
        },
      ],
    },
    {
      key: 62,
      name: '天天赚京豆-去完成-浏览App-打开',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          anyMatches: [
            'View[index=0] > [text="头条App"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=1] > [text="百度网盘"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=1] > [text="酷我音乐"] +n @View[clickable=true] > [text="去完成"]',
            'View[index=1] > [text="番茄畅听"] +n @View[clickable=true] > [text="去完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text*="京东金融"] + View > [text="取消"] + @[text="打开"][clickable=true]', //"京东金融"想要打开"*"-酷我音乐
          ],
        },
        {
          key: 2,
          anyMatches: [
            '@TextView[clickable=true] -n [text~="再领[0-9]个京豆"]', //任务已完成 恭喜获得
            '@TextView[clickable=true] - [text="立即领取"] -n [text~="[0-9]个京豆"]', //任务未完成 继续赚奖励
          ],
        },
      ],
    },
    {
      key: 63,
      name: '天天赚京豆-去完成-浏览App-首页-做任务领京豆',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.mainbox.main.MainActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          anyMatches: [
            '@ViewGroup[clickable=true] >n * +n * > [text="去完成"] < * - * [text="QQ阅读"]',
            '@ViewGroup[clickable=true] >n * +n * > [text="去完成"] < * - * [text="菜鸟APP"]',
            '@ViewGroup[clickable=true] >n * +n * > [text="去完成"] < * - * [text="微博"]',
            '@ViewGroup[clickable=true] >n * +n * > [text="去完成"] < * - * [text="百度网盘"]',
            '@ViewGroup[clickable=true] >n * +n * > [text="去完成"] < * - * [text="全名K歌"]',
            '@ViewGroup[clickable=true] >n * +n * > [text="去完成"] < * - * [text="淘宝特价"]',
          ],
        },
        {
          key: 1,
          action: 'swipe',
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.65',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            duration: 200,
          },
          actionMaximum: 1,
          anyMatches: [
            '@[vid="page_list"] >n [text="查奖励"] <<n * + * [text="查奖励"]',
            '@[vid="page_list"] >n [text="领话费"] <<n * + * [text="查奖励"]',
          ],
        },
      ],
    },
    //2026-01.15-2026.12.31 摇黄金
    //https://fu.jr.jd.com/fq-free-channel/shake-gold/index?channelLv=202209231527222DMrDH
    {
      key: 70,
      name: '摇黄金-×',
      actionMaximum: 1,
      matchTime: 10000,
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@TextView[clickable=true] - [text="先去主页看看"] - [text~="立即摇\\\\([0-9]s\\\\)"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //赚次数 得黄金
    {
      key: 71,
      name: '摇黄金-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          matches: [
            '@TextView[clickable=true] - View > [text~="摇黄金 x1"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          anyMatches: [
            //'@[text="去完成"][index=1][clickable=true] - * [text="攒入8千元黄金"]',
            //'@[text="去完成"][index=3][clickable=true] - * [text="攒入1.2万元黄金"]',
            //'@[text="去完成"][index=5][clickable=true] - * [text="攒入1.6万元黄金"]',
            //'@[text="去完成"][index=7][clickable=true] - * [text="首绑一张银行卡"]',
            //'@[text="去完成"][index=9][clickable=true] - * [text="开通积存金条件单"]',
            '@[text="去完成"][index=11][clickable=true] - * [text="浏览钱包频道10秒"]',
            '@[text="去完成"][index=11][clickable=true] - * [text="查看信誉分频道10秒"]',
            '@[text="去完成"][index=11][clickable=true] - * [text="浏览帅哥美女向前冲"]',
            '@[text="去完成"][index=11][clickable=true] - * [text="浏览京东手机馆"]',
            //'@[text="去完成"][index=11][clickable=true] - * [text="浏览奶茶节活动"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          anyMatches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + TextView[text="京东钱包"] + ImageView + [vid="common_webview_navbar_right"]', //浏览钱包频道10秒
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + ImageView + [vid="common_webview_navbar_right"]', //查看信誉分频道10秒
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]', //浏览帅哥美女向前冲-浏览京东手机馆
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 3,
          matches: ['@[text~="摇黄金 x[1-9]"][clickable=true]'],
        },
        {
          preKeys: [0, 1, 2, 3],
          key: 4,
          matches: ['@[text="开心收下"][clickable=true]'],
        },
      ],
    },
    //看视频 赚现金
    //https://u.jr.jd.com/downloadApp/index.html?jumpUrl=https://content.jr.jd.com/shareProject/shortVideo/vertical/index.html?contentId=824242245632133120
    //做任务 赚现金
    {
      key: 80,
      name: '看视频 赚现金-上滑',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bm.mainbox.main.MainActivity',
        '.bm.sh.jm.video.ui.VibratoActivity',
      ],
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
            duration: 200,
          },
          actionCd: 50000,
          matches: [
            '@[vid="fl_operating_group"] >n [text~="(?:[0-9]|[1-4][0-9]|5[0-2])/53"]',
          ],
        },
        {
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
            duration: 200,
          },
          actionCd: 50000,
          matches: ['@[vid="recycler_view"] [text="上滑继续看视频"]'],
        },
        {
          key: 2,
          matches: [
            '[text="我的钱"] <<n ViewGroup - @ViewGroup[clickable=true] < * +n * [text="53/53"]',
          ],
        },
      ],
    },
    {
      key: 81,
      name: '看视频 赚现金-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          anyMatches: [
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="看精选好货得优惠"]',
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="特价产品大甩卖"]',
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="逛逛优惠商品"]',
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="今日捡漏神价"]',
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="拆今日爆款盲盒"]',
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="限时羊毛专区"]',
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="逛超补抽8元红包"]',
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="走路抽黄金转运珠"]',
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="领30元红包"]',
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="每日都可领京豆"]',
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="去看看股票投资工具"]',
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="竞猜足球瓜分百万京豆"]',
          ],
          activityIds: [
            '.bm.mainbox.main.MainActivity',
            '.bm.sh.jm.video.ui.VibratoActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          anyMatches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + TextView + [vid="common_webview_navbar_right"]',
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [vid="common_webview_navbar_right"]', //每日都可领京豆-去看看股票投资工具-竞猜足球瓜分百万京豆
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 82,
      name: '看视频 赚现金-去完成-浏览基金圈 结交同路人',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="浏览基金圈 结交同路人"]',
          ],
          activityIds: [
            '.bm.mainbox.main.MainActivity',
            '.bm.sh.jm.video.ui.VibratoActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          matches: [
            '[text="圈子"] >n @TextView[clickable=true] + TextView[clickable=true]',
          ],
          activityIds: ['.bm.common.container.ui.BaseContainerActivity'],
        },
      ],
    },
    {
      key: 83,
      name: '看视频 赚现金-去完成-返回领奖',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          anyMatches: [
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="浏览免费领礼物"]',
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="浏览15理财日10秒"]',
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="浏览向前冲10s"]',
          ],
          activityIds: [
            '.bm.mainbox.main.MainActivity',
            '.bm.sh.jm.video.ui.VibratoActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 84,
      name: '看视频 赚现金-去完成-成功喂一次猪',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="成功喂一次猪"]',
          ],
          activityIds: [
            '.bm.mainbox.main.MainActivity',
            '.bm.sh.jm.video.ui.VibratoActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'View[clickable=true] > @View[clickable=true] > [text="喂食10次"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: ['@View[clickable=true] > [text="back"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 85,
      name: '看视频 赚现金-去完成-返回领奖-看收藏大牛学知识',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="看收藏大牛学知识"]',
          ],
          activityIds: [
            '.bm.mainbox.main.MainActivity',
            '.bm.sh.jm.video.ui.VibratoActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="返回领奖"][clickable=true] < ViewGroup + ViewGroup + ImageView + ViewGroup',
          ],
          activityIds: ['.bm.sh.jm.video.ui.VibratoActivity'],
        },
      ],
    },
    {
      key: 86,
      name: '看视频 赚现金-去完成-养大鹅1分兑好礼',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="养大鹅1分兑好礼"]',
          ],
          activityIds: [
            '.bm.mainbox.main.MainActivity',
            '.bm.sh.jm.video.ui.VibratoActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@View[clickable=true] > [text="03e6058058b35dde"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + ImageView + [vid="common_webview_navbar_right"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 87,
      name: '看视频 赚现金-去完成-逛一逛黄金频道',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 3000,
          matches: [
            '[text="去完成"] < @ViewGroup[clickable=true] - * [text="逛一逛黄金频道"]',
          ],
          activityIds: [
            '.bm.mainbox.main.MainActivity',
            '.bm.sh.jm.video.ui.VibratoActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="黄金频道页"] >n @TextView[clickable=true] + [text="139b35d682d5bb6e"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //26.07.01-26.07.31 机构福利-财宝分福利
    //https://show.jd.com/m/De5VMnmwbxY2Pyk3/?pageKey=De5VMnmwbxY2Pyk3
    {
      key: 90,
      name: '做任务赚财宝分-加自选',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          matches: [
            '@Image[clickable=true] -n [text="1个财宝分"] - [text^="加自选"] < View',
          ],
        },
        {
          key: 1,
          matches: [
            '@View[clickable=true] > [text="ae1d4a7d750f0dcb"] + [text="已自选"]',
          ],
        },
        {
          key: 2,
          matches: [
            '@View[clickable=true] > [text="ce6aa1713606b4c1"] + [text="加自选"]',
          ],
        },
        {
          key: 3,
          action: 'back',
          matches: [
            '@[text="HPmi0zAOZAAAAAElFTkSuQmCC"] + [text="已添加到自选"]',
          ],
        },
      ],
    },
    {
      key: 91,
      name: '做任务赚财宝分-浏览',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@Image[clickable=true] -n [text="1个财宝分"] - [text^="浏览"] < View',
          ],
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
          actionMaximum: 5,
          matches: ['@[vid="web_all"]'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
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
