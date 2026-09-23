import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    //省钱中心
    //https://member.jr.jd.com/member/mermberRights/rightsCenter/
    //京豆每日抢
    //https://member.jr.jd.com/member/memberScore/rightsScore/
    {
      key: 0,
      name: '京豆秒杀-京豆每日抢',
      fastQuery: true,
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      activityIds: ['.bm.jrv8.JRCustomDyPageActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="抢兑"] < ViewGroup - ImageView < @ViewGroup[clickable=true] <n * -2 * [text="小金库白条还款券"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@ViewGroup[clickable=true] > [text="2京豆兑换"]'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[text="确认兑换"][clickable=true] <n * -n * [text="小金库白条还款券"]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '返回-Button',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="正在跳转..." || text="商品详情"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '返回-逛测财运智能体',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: [
            'TextView - @TextView[clickable=true] < View < View < [id="joyai-root"] < View < [text="JoyAI"] < b40 < [vid="webview"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '返回-登录JoyAI并对话',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 5000,
          matches: [
            '[text="JoyAI"] < b40 < [vid="webview"] < [vid="web_all"] - * @Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '返回-0.01元得包邮好物',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 5000,
          matches: [
            '[text="限时福利"] >n @[text="back"][clickable=true] + [text="限时福利"]',
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
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[id="J_ui-div"] > [id="app"] >n @TextView[clickable=true] +n [text="createAwardSignfull"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 21,
      name: '养猪猪-桌面组件',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[id="J_ui-div"] > [id="app"] > View > View > View > @[desc="1京豆"][clickable=true] > [text="1京豆"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: [
            '[id="J_ui-div"] > [id="app"] >n [text="组件登录有礼"] +n @[text="领取并喂猪"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 1000,
          matches: [
            '[id="J_ui-div"] > [id="app"] >n [getChild(5).text="明日再来"] + @TextView[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '养猪猪-阶段奖励',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[id="J_ui-div"] > [id="app"] >n [text="恭喜获得阶段奖励"] +n @[text="领取并喂食"][clickable=true]',
          ],
          matches: [
            '[id="J_ui-div"] > [id="app"] >n @View[clickable=true] > [text="可领取"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[id="J_ui-div"] > [id="app"] >n [text="恭喜获得阶段奖励"] +n @[text="领取并喂食"][clickable=true]',
          ],
        },
      ],
    },
    //做任务 赚粮食
    {
      key: 23,
      name: '养猪猪-去完成',
      fastQuery: true,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.common.web.ui.WebActivity',
        '.bm.common.container.ui.BaseContainerActivity',
      ],
      rules: [
        {
          key: 23,
          excludeMatches: [
            '[getChild(0).getChild(2).text="做任务 赚粮食"] + View > View > View > @[text="领奖"][clickable=true]',
            '[text="恭喜获得浏览奖励"] +n @[text="继续浏览"][clickable=true] + TextView',
          ],
          actionDelay: 2000,
          anyMatches: [
            '[getChild(0).getChild(2).text="做任务 赚粮食"] + View > View > View[getChild(1).text!~="领.*|.*话费.*|玩玩.*|玩一玩.*|.*订单|购券.*|.*卡|去看.*"] > @[text="去完成"][clickable=true]',
            '[getChild(0).getChild(2).text="做任务 赚粮食"] + View > View > View[getChild(1).getChild(0).text!~="领.*|.*话费.*|玩玩.*|玩一玩.*|.*订单|购券.*|.*卡|去看.*"] > @[text="去完成"][clickable=true]',
          ],
        },
        {
          key: 24,
          excludeMatches: [
            '[getChild(0).getChild(2).text="做任务 赚粮食"] + View > View > View > @[text="领奖"][clickable=true]',
          ],
          matches: [
            '[text="恭喜获得浏览奖励"] +n @[text="继续浏览"][clickable=true] + TextView',
          ],
        },
        {
          preKeys: [23, 24],
          key: 2,
          matches: [
            '@[getChild(0).text~="返回签到|返回领奖"][clickable=true] - * [text="readMissionDown"]',
          ],
        },
        {
          preKeys: [23, 24],
          key: 3,
          action: 'back',
          matches: [
            '@[getChild(0).text="浏览完成"][clickable=false] - * [text="ff776b55ee07c915"]',
          ],
        },
        {
          preKeys: [23, 24],
          key: 4,
          excludeMatches: [
            '[text*="浏览"]',
            '[text*="返回"]',
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          actionDelay: 5000,
          matches: [
            'TextView - @TextView[clickable=true] < View < View <n View < [id="J_babelOptPage"]',
          ],
        },
        {
          preKeys: [23, 24],
          key: 5,
          excludeMatches: ['[text*="浏览"]','[text*="返回"]','[text="京东验证"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [23, 24],
          key: 6,
          matches: [
            '@[text="返回领奖"][clickable=true] < ViewGroup + ViewGroup + ImageView + ViewGroup', //京东保
          ],
        },
        {
          preKeys: [23, 24],
          key: 7,
          actionDelay: 5000,
          matches: [
            '@View[clickable=true] > [text="03e6058058b35dde"]', //天天来提额
          ],
        },
        {
          preKeys: [23, 24],
          key: 8,
          matches: [
            '[vid="manto_actionbar_option"][clickable=true] + @[vid="manto_actionbar_home"][clickable=true]',
          ],
          activityIds: [
            'com.jingdong.manto.ui.MantoActivityUp1',
            'com.jingdong.manto.ui.MantoActivitySingleProcessUp',
          ],
        },
        {
          key: 9,
          anyMatches: [
            '[getChild(0).getChild(2).text="做任务 赚粮食"] + View > View > View > @[text="领奖"][clickable=true]',
          ],
        },
      ],
    },
    {
      scopeKeys: [23],
      key: 24,
      name: '养猪猪-去完成-游戏',
      fastQuery: true,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.landscape.WebLandscapeActivity'],
      rules: [
        {
          preKeys: [23, 24],
          key: 0,
          action: 'back',
          matches: [
            '@[getChild(0).text="浏览完成"][clickable=false] - * [text="ff776b55ee07c915"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="提示"] + [text="主人 是否退出游戏"] + Button + @Button[clickable=true] + Button',
          ],
        },
      ],
    },
    {
      scopeKeys: [23],
      key: 25,
      name: '养猪猪-去完成-击杀1条鱼',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.landscape.WebLandscapeActivity'],
      rules: [
        {
          preKeys: [23, 0],
          key: 0,
          action: 'longClickCenter',
          actionCd: 500,
          actionMaximum: 20,
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
    {
      key: 26,
      name: '养猪猪-去完成-做任务得奖励',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[id="J_GAME_MARKET_POP_SDK"] >n View > @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          excludeMatches: ['[text*="浏览"]', '[text*="返回"]'],
          actionDelay: 5000,
          matches: [
            '[text="游戏大厅"] >n @View[clickable=true] > [text="dancing"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          matches: [
            '[getChild(0).text="返回领奖"][clickable=true] - [getChild(0).getChild(1).getChild(0).text="readMissionDown"] < *  -n * @View[clickable=true] > [text="dancing"]',
          ],
        },
        {
          key: 3,
          matches: [
            '[id="J_GAME_MARKET_POP_SDK"] >n @[text="领取"][clickable=true]',
          ],
        },
        {
          key: 4,
          matches: [
            '[id="J_GAME_MARKET_POP_SDK"] >n @View[clickable=true] > [text="可领取"]',
          ],
        },
        {
          key: 5,
          excludeMatches: ['[text="去完成"]','[text="领取"]','[text="可领取"]'],
          matches: [
            '[id="J_GAME_MARKET_POP_SDK"] >n @[text="closeButton"][clickable=true]',
          ],
        },
      ],
    },
    //23.08.01-29.12.31 签到领现金
    //https://member.jr.jd.com/activity/sign/v5/indexV2.html
    //https://member.jr.jd.com/activity/new-sign-in/home/
    //赚抽奖次数
    {
      key: 30,
      name: '签到领现金-赚抽奖次数-去完成',
      fastQuery: true,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.mainbox.main.MainActivity',
        '.bm.common.web.ui.WebActivity',
        '.bm.common.container.ui.BaseContainerActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[id="taskFloorId"] > @[text="点击查看更多"][clickable=true]',
          ],
        },
        {
          key: 1,
          actionDelay: 2000,
          matches: [
            '[id="taskFloorId"] > [getChild(0).text="赚抽奖次数"] +n [getChild(0).text!~="额外.*|.*话费|.*一笔.*订单.*"] > @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          excludeMatches: [
            '[getChild(0).text="返回领奖"][clickable=true] - [getChild(0).getChild(1).getChild(0).text="readMissionDown"] < *  -n * @View[clickable=true] > [text="dancing"]',
          ],
          matches: [
            '@[getChild(0).text="返回领奖"][clickable=true] - * [text="readMissionDown"]',
          ],
        },
        {
          preKeys: [1],
          key: 3,
          anyMatches: [
            '[getChild(0).text="返回领奖"][clickable=true] - [getChild(0).getChild(1).getChild(0).text="readMissionDown"] < *  -n * @View[clickable=true] > [text="dancing"]',
            '@[getChild(0).text="浏览完成"][clickable=false] - [getChild(1).getChild(0).text="ff776b55ee07c915"] < View <n View < [text="雀神来也"] < b40 < [vid="webview"] < [vid="web_all"] - * @Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="雀神来也"]',
          ],
        },
        {
          preKeys: [1],
          key: 4,
          excludeMatches: ['[text*="浏览"]','[text*="返回"]','[text="京东验证"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [1],
          key: 5,
          excludeMatches: [
            '[text*="浏览"]',
            '[text*="返回"]',
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          actionDelay: 5000,
          matches: [
            'TextView - @TextView[clickable=true] < View < View <n View < [id="J_babelOptPage"]',
          ],
        },
        {
          preKeys: [1],
          key: 6,
          action: 'back',
          matches: [
            '[text="继续浏览下一个"] - [text="浏览完成"] < View[clickable=true] - * [text="readMissionDown"]',
          ],
        },
        {
          preKeys: [1],
          key: 7,
          matches: [
            '[text="返回签到页"] - [text="浏览完成"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
        },
        {
          preKeys: [1],
          key: 8,
          matches: [
            '@[vid="back_button"][clickable=true] -n * [text="继续做任务"]', //看视频最高赚10元
          ],
          activityIds: ['.bm.sh.jm.video.ui.VibratoActivity'],
        },
        {
          preKeys: [1],
          key: 9,
          actionDelay: 5000,
          matches: [
            '@[vid="manto_actionbar_home"][clickable=true] <<n * - * [text="京民通"]',
          ],
          activityIds: ['com.jingdong.manto.ui.MantoActivitySingleProcess'],
        },
      ],
    },
    {
      key: 31,
      name: '签到领现金-每日抽提现-立即抽提现',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bm.mainbox.main.MainActivity',
        '.bm.common.web.ui.WebActivity',
      ],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[id="taskFloorId"] > [getChild(0).text="赚抽奖次数"] +n [getChild(0).text!~="额外.*|.*话费|.*一笔.*订单.*"] > @[text="去完成"][clickable=true]',
            '@[text="close1_6723ec4261"][clickable=true]',
          ],
          actionDelay: 2000,
          matches: [
            '[id="headFloor"] > View > [id="lottieButton"] > @[id="lottieButton"][clickable=true] > [text~="（可抽[1-9][0-9]*次）"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="close1_6723ec4261"][clickable=true]'],
        },
        {
          preKeys: [0],
          key: 2,
          matches: ['@[id="_sign_poo_10_id"][clickable=true]'],
        },
        {
          preKeys: [2],
          key: 3,
          matches: ['@[text="开心收下"][clickable=true]'],
        },
        {
          key: 4,
          matches: [
            '[id="YLBCon"] - View > View > View > View + TextView + @Image[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 32,
      name: '签到领现金-赚更多现金-去完成',
      fastQuery: true,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.mainbox.main.MainActivity',
        '.bm.common.web.ui.WebActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[id="taskFloorId"] > [text="赚更多现金"] +n [getChild(0).text~="逛.*|去.*"] > @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          excludeMatches: ['[text*="浏览"]','[text*="返回"]','[text="京东验证"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
      ],
    },
    //26.07.01-26.12.31 打卡拿好礼|连续打卡白拿好礼
    {
      key: 33,
      name: '签到领现金-打卡拿好礼-每日点签',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bm.mainbox.main.MainActivity',
        '.bm.common.web.ui.WebActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text^="今日打卡任务"] +n View > [text^="每日点签"] + @[text="点击签到"][clickable=true]',
          ],
        },
        {
          key: 1,
          excludeMatches: [
            '[text^="今日打卡任务"] +n View > TextView + @[text~="去完成|点击签到"][clickable=true]',
          ],
          matches: [
            '@TextView[clickable=true] + [getChild(0).getChild(0).desc="已连续打卡"]',
          ],
        },
      ],
    },
    {
      key: 34,
      name: '签到领现金-打卡拿好礼-去完成',
      fastQuery: true,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.mainbox.main.MainActivity',
        '.bm.common.web.ui.WebActivity',
        '.bm.common.container.ui.BaseContainerActivity',
      ],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[text^="今日打卡任务"] +n View > [text="每日点签"] + @[text="点击签到"][clickable=true]',
          ],
          actionDelay: 2000,
          matches: [
            '[text^="今日打卡任务"] +n View > TextView + @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[getChild(0).text="返回签到"][clickable=true] - * [text="readMissionDown"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          action: 'back',
          anyMatches: [
            '@[getChild(0).text="浏览完成"][clickable=false] - * [text="ff776b55ee07c915"]',
            '[text="readMissionArrow2"] - [text="继续浏览下一个"] - [text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          excludeMatches: ['[text*="浏览"]','[text*="返回"]','[text="京东验证"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [0],
          key: 4,
          excludeMatches: [
            '[text*="浏览"]',
            '[text*="返回"]',
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          actionDelay: 5000,
          matches: [
            'TextView - @TextView[clickable=true] < View < View <n View < [id="J_babelOptPage"]',
          ],
        },
        {
          preKeys: [0],
          key: 5,
          matches: [
            '@[text="返回领奖"][clickable=true] <<n * -n * [text="省钱"] - * ImageView[clickable=true]',
          ],
          activityIds: ['.bm.jrv8.JRCustomDyPageActivity'],
        },
      ],
    },
    //24.04.22-25.12.31 做任务 领京豆|赚京豆-做任务领京豆二级页
    //https://member.jr.jd.com/member/integral-mall/mission/
    //https://member.jr.jd.com/member/coinQuest/coin/
    {
      key: 40,
      name: '赚京豆-去完成',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bm.common.web.ui.WebActivity',
        '.bm.common.container.ui.BaseContainerActivity',
      ],
      rules: [
        {
          key: 40,
          actionDelay: 2000,
          matches: [
            '[getChild(0).text="推荐"] + View > @View[clickable=true] > [getChild(0).getChild(0).text!~=".*话费|体验.*|消灭.*|完成.*|.*权益|加赠.*|开通.*|分享.*"] + [text="去完成"]',
          ],
        },
        {
          preKeys: [40],
          key: 1,
          matches: [
            '@[getChild(0).text="返回领奖"][clickable=true] - * [text="readMissionDown"]',
          ],
        },
        {
          preKeys: [40],
          key: 2,
          excludeMatches: ['[text*="浏览"]','[text*="返回"]','[text="京东验证"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [40],
          key: 3,
          excludeMatches: [
            '[text*="浏览"]',
            '[text*="返回"]',
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          actionDelay: 5000,
          matches: [
            'TextView - @TextView[clickable=true] < View < View <n View < [id="J_babelOptPage"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [40],
      key: 41,
      name: '赚京豆-去完成-做任务-成功喂猪或浇水1次',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          preKeys: [40],
          key: 0,
          matches: [
            '[id="J_ui-div"] > [id="app"] > View > View > View > @View[clickable=true] > [text="喂食10次"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          excludeMatches: ['[text*="浏览"]', '[text*="返回"]'],
          actionDelay: 5000,
          matches: [
            '[id="J_ui-div"] > [id="app"] > View > @View[clickable=true] > [text="back"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [40],
      key: 42,
      name: '赚京豆-去完成-做任务-京豆捕鱼｜消耗10%能量值',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.landscape.WebLandscapeActivity'],
      rules: [
        {
          preKeys: [40, 0],
          key: 0,
          action: 'longClickCenter',
          actionCd: 300,
          actionMaximum: 100,
          matches: ['@[id="GameCanvas"] < [id="Cocos2dGameContainer"]'],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 40000,
          matches: ['@[text="退出"][clickable=true]'],
        },
      ],
    },
    {
      key: 43,
      name: '赚京豆-一键领京豆',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@ViewGroup[clickable=true] > ViewGroup > [text="一键领京豆"]',
          ],
          activityIds: [
            '.bm.mainbox.main.MainActivity',
            '.bm.jrv8.JRCustomDyPageActivity',
          ],
        },
      ],
    },
    //24.08.20-26.12.31 养大鹅
    //https://u.jr.jd.com/uc-fe-wxgrowing/cloudgoose/index/
    {
      key: 50,
      name: '养大鹅-签到并喂食',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          matches: [
            '[text="cae179ab557e2b58"] +n [text="签到并喂食"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 51,
      name: '养大鹅-产粮机',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[text="cae179ab557e2b58"] +n [text="签到并喂食"][clickable=true]',
          ],
          actionDelay: 1000,
          matches: [
            '[id="app"] > View > [getChild(0).getChild(0).text="可领取"] - View > @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 51,
          matches: [
            '[text~="[0-9]+g"] + View + @TextView[clickable=true]', //恭喜你获得-开心收下
          ],
        },
      ],
    },
    {
      scopeKeys: [51],
      key: 52,
      name: '养大鹅-桌面组件',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          preKeys: [51],
          key: 0,
          actionDelay: 1000,
          matches: [
            '[id="app"] > View > View +n View > @View[clickable=true] > [text="可领取"]',
          ],
        },
        {
          preKeys: [0],
          key: 52,
          matches: ['@[text="立即领取"][clickable=true] + TextView'],
        },
      ],
    },
    {
      scopeKeys: [52],
      key: 53,
      name: '养大鹅-喂鹅翻倍',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          preKeys: [52],
          key: 0,
          actionDelay: 1000,
          anyMatches: [
            '[id="app"] > View > [getChild(0).getChild(0).text="桌面小组件"] +n View > @View[clickable=true] + [text="可领取"]',
          ],
        },
        {
          preKeys: [0],
          key: 53,
          matches: [
            '[getChild(2).text="明日0点领"] + * @TextView[clickable=true]', //恭喜获得鹅粮奖励-收下喂鹅
          ],
        },
      ],
    },
    {
      scopeKeys: [53],
      key: 54,
      name: '养大鹅-天天提额',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          preKeys: [53],
          key: 0,
          anyMatches: [
            '[id="app"] > View > [getChild(2).text="明日0点领"] -n View > View > @View[clickable=true] > [text="点我收蛋"]',
            '[id="app"] > View > [getChild(2).text="明日0点领"] -n View > View > @View[clickable=true] > [text="兑换额度"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'clickCenter',
          anyMatches: [
            'TextView[text~="（[0-9]s）"] + @TextView[clickable=true]', //恭喜获得收蛋奖励-开心收下
            'View > @View[clickable=true] > View > View > View > View > Image', //立即兑换提额机会
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            'View > [text="获得京豆(个)"] +n @View[clickable=true] > [text="参与活动可继续提高额度"]', //没兑出额度别灰心哦-我知道了
          ],
        },
      ],
    },
    //做任务 赚鹅粮
    {
      key: 55,
      name: '养大鹅-去完成',
      fastQuery: true,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.common.web.ui.WebActivity',
        '.bm.common.container.ui.BaseContainerActivity',
      ],
      rules: [
        {
          key: 55,
          excludeMatches: [
            '[getChild(1).text!~="打.*|.*体验.*|完成.*|去.*|通过.*"] > @[desc="领奖"][clickable=true] > [text="领奖"]',
            '@TextView -2 [text="从京东信誉分频道 进游戏"]',
          ],
          actionDelay: 2000,
          matches: [
            '[getChild(1).text!~="打.*|.*体验.*|完成.*|去.*|通过.*"] > @[desc="去完成"][clickable=true] > [text="去完成"]',
          ],
        },
        {
          preKeys: [55],
          key: 1,
          excludeMatches: [
            '[getChild(0).text="返回领奖"][clickable=true] - [getChild(0).getChild(1).getChild(0).text="readMissionDown"] < *  -n * @View[clickable=true] > [text="dancing"]',
          ],
          matches: [
            '@[getChild(0).text="返回领奖"][clickable=true] - * [text="readMissionDown"]',
          ],
        },
        {
          preKeys: [55],
          key: 2,
          matches: [
            '[getChild(0).text="返回领奖"][clickable=true] - [getChild(0).getChild(1).getChild(0).text="readMissionDown"] < *  -n * @View[clickable=true] > [text="dancing"]',
          ],
        },
        {
          preKeys: [55],
          key: 3,
          excludeMatches: ['[text*="浏览"]','[text*="返回"]','[text="京东验证"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [55],
          key: 4,
          excludeMatches: [
            '[text*="浏览"]',
            '[text*="返回"]',
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          actionDelay: 5000,
          anyMatches: [
            'TextView - @TextView[clickable=true] < View < View <n View < [id="J_babelOptPage"]',
            '[text="03e60d7044a19393"] - @TextView[clickable=true] < View < View < [id="app"] < WebView < b40 < [vid="webview"]', //浏览财富会员领权益
          ],
        },
        {
          preKeys: [55],
          key: 5,
          matches: [
            '@[text="返回领奖"][clickable=true] < ViewGroup + ViewGroup + ImageView + ViewGroup', //看视频至高领10元
          ],
          activityIds: ['.bm.sh.jm.video.ui.VibratoActivity'],
        },
        {
          key: 6,
          matches: [
            '[getChild(1).text!~="打.*|.*体验.*|完成.*|去.*|通过.*"] > @[desc="领奖"][clickable=true] > [text="领奖"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [55],
      key: 56,
      name: '养大鹅-去完成-从京东信誉分频道进入',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          preKeys: [55],
          key: 56,
          matches: ['@TextView -2 [text="从京东信誉分频道 进游戏"]'],
        },
        {
          preKeys: [55],
          key: 1,
          matches: ['@[text="551d38b59d892f29"][clickable=true]'],
        },
        {
          preKeys: [1],
          key: 2,
          action: 'back',
          matches: [
            '[id="app"] > View > View > View > [text="京东信誉分专属福利"] + @[text="领"][clickable=true]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          action: 'back',
          matches: ['@[text="551d38b59d892f29"][clickable=true]'],
        },
      ],
    },
    {
      scopeKeys: [55],
      key: 57,
      name: '养大鹅-去完成-开炮击杀任意一条鱼',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.landscape.WebLandscapeActivity'],
      rules: [
        {
          preKeys: [55, 57],
          key: 57,
          action: 'longClickCenter',
          actionCd: 300,
          actionMaximum: 20,
          matches: ['@[id="GameCanvas"] < [id="Cocos2dGameContainer"]'],
        },
        {
          preKeys: [56],
          key: 1,
          actionDelay: 6000,
          matches: ['@[text="退出"][clickable=true]'],
        },
      ],
    },
    {
      key: 58,
      name: '养大鹅-喂鹅翻倍',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[getChild(1).text!~="打.*|.*体验.*|完成.*|去.*|通过.*"] > @[desc~="领奖|去完成"][clickable=true]',
          ],
          matches: [
            '[getChild(0).getChild(0).getChild(1).text="打一笔白条≥10元"] + @View[clickable=true]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 1,
          actionDelay: 2000,
          actionMaximum: 6,
          matches: ['View > @View[clickable=true] > [text="连喂3次"]'],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            'View > TextView + [text="明日0点可领，10点之后慢慢减少"] + @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [2,3],
          key: 3,
          actionDelay: 2000,
          actionMaximum: 5,
          matches: ['View > @View[clickable=true] > [text="连喂3次"]'],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            'View > TextView + [text="明日0点可领，10点之后慢慢减少"] + @TextView[clickable=true]',
          ],
        },
      ],
    },
    //24.12.25-26.12.31 天天领红包
    //https://fu.jr.jd.com/fq-free-channel/redenvelope/outside/
    {
      key: 70,
      name: '天天领红包-×',
      actionMaximum: 1,
      fastQuery: true,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.common.web.ui.WebActivity',
        '.bm.common.container.ui.BaseContainerActivity',
      ],
      rules: [
        {
          matches: [
            'View > View > View > View + @TextView[clickable=true] - * [text="1京豆膨胀红包"]',
          ],
        },
      ],
    },
    {
      key: 71,
      name: '天天领红包-去完成',
      fastQuery: true,
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[getChild(0).text="更多优惠"] +n @[getChild(3).text!~="去移动领话费"][clickable=true] > [text="去完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[getChild(0).text="返回领奖"][clickable=true] - * [text="readMissionDown"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          excludeMatches: ['[text*="浏览"]','[text*="返回"]','[text="京东验证"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          excludeMatches: [
            '[text*="浏览"]',
            '[text*="返回"]',
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          actionDelay: 5000,
          matches: [
            'TextView - @TextView[clickable=true] < View < View <n View < [id="J_babelOptPage"]',
          ],
        },
      ],
    },
    //25.12.29-26.12.31 天天赚钱 领京豆|天天赚京豆
    //https://show.jd.com/m/RkO0AE9rKrYy6ZDd/?pageKey=RkO0AE9rKrYy6ZDd
    //做任务开福袋
    //做任务赚京豆
    {
      key: 80,
      name: '天天赚京豆-去完成',
      fastQuery: true,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.common.web.ui.WebActivity',
        '.bm.common.container.ui.BaseContainerActivity',
      ],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@TextView[clickable=true] -n [text~="再领[0-9]个京豆"]', //任务已完成 恭喜获得
            '@TextView[clickable=true] - [text="立即领取"] -n [text~="[0-9]个京豆"]', //任务未完成 继续赚奖励
          ],
          actionDelay: 2000,
          matches: [
            'ListView > View[getChild(1).text!~="领话费|分享.*|.*领取|开.*|.*订单"] > @View[clickable=true] >n [text~="去完成|继续完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[getChild(0).text="返回领奖"][clickable=true] - * [text="readMissionDown"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          excludeMatches: ['[text*="浏览"]','[text*="返回"]','[text="京东验证"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          excludeMatches: [
            '[text*="浏览"]',
            '[text*="返回"]',
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          actionDelay: 5000,
          matches: [
            'TextView - @TextView[clickable=true] < View < View <n View < [id="J_babelOptPage"]',
          ],
        },
        {
          key: 4,
          anyMatches: [
            '@TextView[clickable=true] -n [text~="再领[0-9]个京豆"]', //任务已完成 恭喜获得
            '@TextView[clickable=true] - [text="立即领取"] -n [text~="[0-9]个京豆"]', //任务未完成 继续赚奖励
          ],
        },
      ],
    },
    {
      key: 81,
      name: '天天赚京豆-做任务开福袋-去领取',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            'ListView > View[getChild(1).text!~="领话费|分享.*|.*领取|开.*|.*订单"] > @View[clickable=true] >n [text~="去完成|继续完成"]',
          ],
          matches: [
            '[text="做任务开福袋"] +n View > ListView > View > @View[clickable=true] + [text="去领取"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'Dialog > [text="0d02cdb025bcde21"] + View + @TextView[clickable=true]', //恭喜获得 福袋奖励
          ],
        },
      ],
    },
    {
      key: 82,
      name: '天天赚京豆-去完成-浏览App-首页-做任务领京豆',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.mainbox.main.MainActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 1000,
          matches: [
            '[vid="page_list"] >n @ViewGroup[clickable=true] > ViewGroup[getChild(1).getChild(0).text!~="领话费"] >n [text="去完成"]',
          ],
        },
        {
          key: 1,
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
            '@[vid="page_list"] >n [getChild(0).getChild(1).getChild(0).text="领话费"] + [getChild(0).getChild(2).getChild(0).text="查奖励"]',
            '@[vid="page_list"] >n [getChild(0).getChild(2).getChild(0).text="查奖励"] + [getChild(0).getChild(1).getChild(0).text="领话费"]',
            '@[vid="page_list"] >n [getChild(0).getChild(2).getChild(0).text="查奖励"] + [getChild(0).getChild(2).getChild(0).text="查奖励"]',
          ],
        },
      ],
    },
    //2026-01.15-2026.12.31 天天摇黄金
    //https://fu.jr.jd.com/fq-free-channel/shake-gold/index?channelLv=202209231527222DMrDH
    //赚次数 得黄金
    {
      key: 90,
      name: '天天摇黄金-去完成',
      fastQuery: true,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.common.web.ui.WebActivity',
        '.bm.common.container.ui.BaseContainerActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[id="J_ui-load"] + [id="app"] > View > View > [getChild(0).text~="摇黄金 x[1-9]"] + @TextView[clickable=true] + TextView',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          anyMatches: [
            '[getChild(0).text~="浏览.*|.*看.*"] +2 @[text="去完成"][clickable=true]',
            '[getChild(0).getChild(0).text~="浏览.*|.*看.*"] + @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[getChild(0).text="返回领奖"][clickable=true] - * [text="readMissionDown"]',
          ],
        },
        {
          preKeys: [1],
          key: 3,
          excludeMatches: ['[text*="浏览"]','[text*="返回"]','[text="京东验证"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [1],
          key: 4,
          excludeMatches: [
            '[text*="浏览"]',
            '[text*="返回"]',
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          actionDelay: 5000,
          matches: [
            'TextView - @TextView[clickable=true] < View < View <n View < [id="J_babelOptPage"]',
          ],
        },
        {
          key: 5,
          excludeMatches: [
            '[getChild(0).text~="浏览.*|.*看.*"] +2 @[text="去完成"][clickable=true]',
            '[getChild(0).getChild(0).text~="浏览.*|.*看.*"] + @[text="去完成"][clickable=true]',
          ],
          anyMatches: [
            '@TextView[clickable=true] + View > View +2 [text="去完成"]',
            '@TextView[clickable=true] + View > View + [text="去完成"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [90],
      key: 91,
      name: '天天摇黄金',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[text="送你1次机会 摇一摇"] +n @TextView[index=parent.childCount.minus(1)][clickable=true]',
          ],
        },
        {
          preKeys: [5, 2],
          key: 1,
          excludeMatches: [
            '[getChild(2).getChild(0).text="开心收下"] + @TextView[clickable=true]',
          ],
          matches: [
            '[id="J_ui-load"] + [id="app"] > View > View > View > @[text~="摇黄金 x[1-9]"][clickable=true]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '[getChild(2).getChild(0).text="开心收下"] + @TextView[clickable=true]',
          ],
        },
      ],
    },
    //26.12.31 看视频 赚现金
    //https://u.jr.jd.com/downloadApp/index.html?jumpUrl=https://content.jr.jd.com/shareProject/shortVideo/vertical/index.html?contentId=824242245632133120
    {
      key: 100,
      name: '看视频 赚现金-上滑',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bm.common.web.ui.WebActivity',
        '.bm.mainbox.main.MainActivity',
        '.bm.sh.jm.video.ui.VibratoActivity',
      ],
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
            duration: 200,
          },
          actionCd: 50000,
          matches: [
            '@[vid="fl_operating_group"] >n [text~="(?:[0-9]|[1-4][0-9]|5[0-2])/53"]',
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
              y: 'screenHeight*0.25',
            },
            duration: 200,
          },
          actionCd: 50000,
          matches: ['@[vid="recycler_view"] [text="上滑继续看视频"]'],
        },
        {
          key: 2,
          excludeMatches: ['[text*="浏览"]','[text*="返回"]','[text*="金币"]','[text*="继续"]'],
          actionDelay: 5000,
          matches: [
            '[text="我的钱"] <<n ViewGroup - @ViewGroup[clickable=true] < * +n * [text="53/53"]',
          ],
        },
      ],
    },
    //做任务赚金币
    {
      key: 101,
      name: '看视频 赚现金-去完成',
      fastQuery: true,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.mainbox.main.MainActivity',
        '.bm.common.web.ui.WebActivity',
        '.bm.common.container.ui.BaseContainerActivity',
        '.bm.jrv8.JRCustomDyPageActivity',
        '.bm.sh.jm.video.ui.VibratoActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            'FrameLayout >n [getChild(1).getChild(0).text!~="买一笔黄金|社区-稳健万元|今日赠送彩票券|去移动领话费"] + @ViewGroup[clickable=true] > [text="去完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[getChild(0).text="返回领奖"][clickable=true] - * [text="readMissionDown"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          excludeMatches: ['[text*="浏览"]','[text*="返回"]','[text="京东验证"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          excludeMatches: [
            '[text*="浏览"]',
            '[text*="返回"]',
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          actionDelay: 5000,
          anyMatches: [
            'TextView - @TextView[clickable=true] < View < View <n View < [id="J_babelOptPage"]',
            'TextView - @TextView[clickable=true] < View < View < [id="app"] < WebView < b40 < [vid="webview"]',
            'TextView - @TextView[clickable=true] < View < View < View < [id="app"] <n View < [text="圈子"] < b40 < [vid="webview"]', //浏览基金圈 结交同路人
          ],
        },
        {
          preKeys: [0],
          key: 4,
          matches: [
            '@[text="返回领奖"][clickable=true] < ViewGroup + ViewGroup + ImageView + ViewGroup', //看收藏大牛学知识
          ],
        },
      ],
    },
    {
      scopeKeys: [101],
      key: 102,
      name: '看视频 赚现金-去完成-养大鹅1分兑好礼',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          preKeys: [0],
          key: 102,
          actionDelay: 5000,
          matches: ['@View[clickable=true] > [text="03e6058058b35dde"]'],
        },
        {
          preKeys: [102],
          key: 1,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [101],
      key: 103,
      name: '看视频 赚现金-去完成-成功喂一次猪',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          preKeys: [0],
          key: 103,
          excludeMatches: [
            '@[getChild(0).text="返回领奖"][clickable=true] - * [text="readMissionDown"]',
          ],
          matches: [
            '[id="J_ui-div"] > [id="app"] > View > View > View > @View[clickable=true] > [text="喂食10次"]',
          ],
        },
        {
          preKeys: [103],
          key: 1,
          excludeMatches: ['[text*="浏览"]', '[text*="返回"]'],
          actionDelay: 5000,
          matches: [
            '[id="J_ui-div"] > [id="app"] > View > @View[clickable=true] > [text="back"]',
          ],
        },
      ],
    },
    //京东笔笔返
    //https://ipay.jd.com/pages/bbf/index
    {
      key: 110,
      name: '笔笔返-去完成',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.bm.common.web.ui.WebActivity',
        '.bm.common.container.ui.BaseContainerActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[id="bbf-page"] >n [getChild(1).text~="现金0.0[0-9]元"] + View > @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[getChild(0).text="返回领奖"][clickable=true] - * [text="readMissionDown"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          excludeMatches: ['[text*="浏览"]','[text*="返回"]','[text="京东验证"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          excludeMatches: [
            '[text*="浏览"]',
            '[text*="返回"]',
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          actionDelay: 5000,
          matches: [
            'TextView - @TextView[clickable=true] < View < View <n View < [id="J_babelOptPage"]',
          ],
        },
        {
          key: 4,
          matches: [
            'Dialog > [getChild(0).text="今日限时福利"] + @[text=""][clickable=true]',
          ],
        },
      ],
    },
    //超级指数节
    //https://lca.jd.com/yx/index-channel/home/
    {
      key: 111,
      name: '超级指数节-抽',
      fastQuery: true,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="超级指数节"] >n @TextView[clickable=true] + [text~="剩余次数:[1-9]"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="超级指数节"] > Dialog > View + @TextView[clickable=true]',
          ],
        },
      ],
    },
    //25.03.17-27.04.30 财宝分
    //https://finshop.jd.com/p/shop/?appId=269cfbad0ed744eeb60816a8a95bca83#/exchange-zone/
    {
      key: 120,
      name: '财宝分-浏览',
      fastQuery: true,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="财宝分"] >n [getChild(0).text!~="开.*"] > @Image[clickable=true]',
          ],
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
          matches: [
            '[text="正在浏览"] - [getChild(0).getChild(1).text~="[0-9]+"] < View <n WebView < b40 < [vid="webview"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[getChild(0).text="返回领奖"][clickable=true] - * [text="readMissionDown"]',
          ],
        },
      ],
    },
    //26.07.01-26.09.30 机构福利-财宝分福利
    //https://show.jd.com/m/De5VMnmwbxY2Pyk3/?pageKey=De5VMnmwbxY2Pyk3
    {
      key: 121,
      name: '财宝分福利-加自选',
      fastQuery: true,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="机构福利"] >n [getChild(0).text^="加自选"] > @Image[clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@View[clickable=true] > [text="ae1d4a7d750f0dcb"] + [text="已自选"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@View[clickable=true] > [text="ce6aa1713606b4c1"] + [text="加自选"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          action: 'back',
          matches: [
            '@[text="HPmi0zAOZAAAAAElFTkSuQmCC"] + [text="已添加到自选"]',
          ],
        },
      ],
    },
    {
      key: 122,
      name: '财宝分福利-浏览',
      fastQuery: true,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '[text="机构福利"] >n [getChild(0).text^="加自选"] > @Image[clickable=true]',
          ],
          actionDelay: 2000,
          matches: [
            '[text="机构福利"] >n [getChild(0).text^="浏览"] > @Image[clickable=true]',
          ],
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
          matches: [
            '[text="正在浏览"] - [getChild(0).getChild(1).text~="[0-9]+"] < View <n WebView < b40 < [vid="webview"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[getChild(0).text="返回领奖"][clickable=true] - * [text="readMissionDown"]',
          ],
        },
      ],
    },
    {
      key: 123,
      name: '财宝分福利-关注',
      fastQuery: true,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="机构福利"] >n [getChild(0).text^="关注"] > @Image[clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[id="wrap"] > View > View > View > View > [text="已关注"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: ['[id="wrap"] > View > View > View > View > [text="+关注"]'],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 400,
      name: '发现新版本-×',
      fastQuery: true,
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
      fastQuery: true,
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
