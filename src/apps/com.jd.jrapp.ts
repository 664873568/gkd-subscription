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
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      activityIds: ['.bm.jrv8.JRCustomDyPageActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 500,
          matches: [
            '[getChild(0).text="小金库白条还款券"] +n ViewGroup > @ViewGroup[clickable=true] > ViewGroup > [text="00"] + [text=":"] + [text="00"]',
          ],
        },
        {
          key: 1,
          matches: [
            '[getChild(0).text="小金库白条还款券"] +n ViewGroup > @ViewGroup[clickable=true] > ViewGroup > [text="抢兑"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: ['@ViewGroup[clickable=true] > [text="2京豆兑换"]'],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@[text="确认兑换"][clickable=true] <n * -n * [text="小金库白条还款券"]',
          ],
        },
      ],
    },
    //通用
    {
      key: 10,
      name: '通用-返回',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="正在跳转..."]',
          ],
        },
        {
          key: 1,
          name: '商品详情-点击打开小程序',
          actionDelay: 5000,
          matches: [
            '[id="app"] < [text="商品详情"] < * < [vid="webview"] < [vid="web_all"] <n * @Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="商品详情"]',
          ],
        },
        {
          key: 2,
          name: '京东打开中-继续逛逛',
          actionDelay: 5000,
          matches: [
            '[text="继续逛逛"] < [id="opt-btns"] <n View < View < View <n WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 3,
          name: 'JoyAI对话',
          actionDelay: 5000,
          matches: [
            '[text="JoyAI"] < * < [vid="webview"] < [vid="web_all"] <n [vid="web_show_root"] >n @Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          key: 4,
          name: '京东健康-限时福利',
          action: 'back',
          actionDelay: 5000,
          matches: [
            '[text="限时福利"] - @[text="back"][clickable=true] <<n [text="限时福利"] < * < [vid="webview"]',
          ],
        },
        {
          key: 5,
          action: 'back',
          matches: [
            '@[getChild(0).text="返回上级页面"][clickable=true] - [getChild(0).getChild(1).getChild(0).text="abnormal"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [
        20, 23, 27, 30, 33, 35, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140,
        141, 200, 210,
      ],
      key: 11,
      name: '通用-返回-scopeKeys',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.common.container.ui.BaseContainerActivity',
        '.bm.common.web.ui.WebActivity',
        '.bm.common.web.ui.WebFreeSizeActivity',
        '.bm.common.web.ui.landscape.WebLandscapeActivity',
        '.bm.jrv8.JRCustomDyPageActivity',
        '.bm.sh.jm.video.ui.VibratoActivity',
        'com.jingdong.manto.ui.MantoActivityUp1',
        'com.jingdong.manto.ui.MantoActivitySingleProcess',
        'com.jingdong.manto.ui.MantoActivitySingleProcessUp',
      ],
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 5000,
          anyMatches: [
            '[vid="ll_top_nav_bar"] - [vid="web_all"]',
            '@FrameLayout[clickable=true] < [vid="common_webview_navbar_right"] -n [vid="common_webview_navbar_left"]',
          ],
          activityIds: ['.bm.common.web.ui.WebFreeSizeActivity'],
        },
        {
          preKeys: [0, 1, 20, 30, 40, 50, 70, 80, 110, 130, 140, 141, 200, 210],
          key: 1,
          action: 'back',
          matches: [
            '@[getChild(0).text~="返回领奖|返回签到|奖励已到账|浏览完成"] - * [text~="readMissionDown|ff776b55ee07c915"]',
          ],
          excludeMatches: [
            '[getChild(0).text~="返回领奖|奖励已到账"][clickable=true] - [getChild(0).getChild(1).getChild(0).text="readMissionDown"] < * -n * [text="dancing"] < @View[clickable=true] <<n [vid="webview"]',
            '@[getChild(0).text="浏览完成"][clickable=false] - [getChild(1).getChild(0).text="ff776b55ee07c915"] < View <n View < WebView < * < [vid="webview"] < [vid="web_all"] <n [vid="web_show_root"] >n @Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [2, 20, 27, 30, 40, 70],
          key: 2,
          anyMatches: [
            '[getChild(0).text~="返回领奖|奖励已到账"][clickable=true] - [getChild(0).getChild(1).getChild(0).text="readMissionDown"] < * -n * [text="dancing"] < @View[clickable=true] <<n [vid="webview"]',
            '@[getChild(0).text="浏览完成"][clickable=false] - [getChild(1).getChild(0).text="ff776b55ee07c915"] < View <n View < WebView < * < [vid="webview"] < [vid="web_all"] <n [vid="web_show_root"] >n @Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [3, 20, 30, 35, 40, 110, 140, 200],
          key: 3,
          action: 'back',
          matches: [
            'ViewGroup - ImageView - ViewGroup - ViewGroup > @[text="返回领奖" || text="返回签到" || text="返回「打卡拿好礼」" || text="继续做任务" || text="继续浏览页面"][clickable=true]',
          ],
        },
        {
          preKeys: [
            4, 20, 23, 27, 30, 33, 35, 40, 50, 70, 80, 110, 140, 200, 210,
          ],
          key: 4,
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          excludeMatches: [
            'TextView[text~="浏览完成|正在浏览|浏览页面.*完成任务|浏览.*秒|.*返回.*|京东验证"]',
          ],
        },
        {
          preKeys: [5, 20, 30, 35, 40, 50, 70, 80, 110, 140, 200, 210],
          key: 5,
          action: 'back',
          actionDelay: 5000,
          anyMatches: [
            'TextView - @TextView[clickable=true] < View < View < [id="app"] < WebView < * < [vid="webview"]', //对口令赢苹果18Pro
            'View - @TextView[clickable=true] < View <n View < View < [id="app"] < WebView < * < [vid="webview"]', //彩票频道
            'TextView - @TextView[clickable=true] < View < View < View < [id="app"] <n View < WebView < * < [vid="webview"]', //浏览基金圈 结交同路人
            'TextView - @TextView[clickable=true] < View <n View < View < View < [id="app"] <n View < WebView < * < [vid="webview"]', //浏览基金圈 结交同路人
            '[text="03e6058058b35dde"] < @View[clickable=true] < View <n View < [id="app"] < View < WebView < * < [vid="webview"]', //天天来提额
            'TextView - @[text="返回"][clickable=true] < View < View < [id="root"] < WebView < * < [vid="webview"]', //现金抽抽乐
            'TextView - @TextView[clickable=true] < View < View < [id="joyai-root"] < View < WebView < * < [vid="webview"]', //逛测财运智能体
            '@View[index=parent.childCount.minus(1)] < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < * < [vid="webview"]', //京东秒杀
          ],
          excludeMatches: [
            'TextView[text~="浏览完成|正在浏览|浏览页面.*完成任务|浏览.*秒|.*返回.*|京东验证"]',
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [6, 30],
          key: 6,
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@[vid="manto_actionbar_home"][clickable=true] <<n * - * [text="京民通"]',
          ],
        },
        {
          preKeys: [7, 20],
          key: 7,
          actionDelay: 5000,
          matches: [
            '[vid="manto_actionbar_option"][clickable=true] + @[vid="manto_actionbar_home"][clickable=true]',
          ],
        },
        {
          preKeys: [2, 7, 8],
          key: 8,
          name: '提示-是否退出游戏',
          matches: [
            'Button - @Button[clickable=true] - Button - [text="主人 是否退出游戏"] - [text="提示"] < View <n [id="popupFrame"] <n View < [text="神域战纪"] < * < [vid="webview"]',
          ],
        },
      ],
    },
    //22.12.26-26.12.31 养猪猪
    //https://u.jr.jd.com/uc-fe-wxgrowing/cloudpig/index/
    {
      key: 20,
      name: '养猪猪-去完成',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 20,
          name: '去完成',
          actionDelay: 2000,
          anyMatches: [
            '@[text="去完成"][clickable=true] -n [text!~="领.*|.*话费.*|玩玩.*|玩一玩.*|.*订单|购券.*|.*卡|去看.*"][index=1][childCount=0] <n View <n View < View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@[text="去完成"][clickable=true] -n [getChild(0).text!~="领.*|.*话费.*|玩玩.*|玩一玩.*|.*订单|购券.*|.*卡|去看.*"][index=1][childCount=2] <n View <n View < View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '[text="createAwardSignfull"] -n @TextView[clickable=true] < View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] - [text="继续浏览"] -n [text="恭喜获得浏览奖励"] < View <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@[text="领奖"][clickable=true] <n View <n View < View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 11,
          name: '恭喜获得浏览奖励-继续浏览',
          matches: [
            '@TextView[clickable=true] - [text="继续浏览"] -n [text="恭喜获得浏览奖励"] < View <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 12,
          name: '领奖',
          matches: [
            '@[text="领奖"][clickable=true] <n View <n View < View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] - [text="继续浏览"] -n [text="恭喜获得浏览奖励"] < View <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '养猪猪-喂食10次',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 5000,
          matches: [
            'TextView < @View[clickable=true] <n View - TextView <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text~="领奖|去完成"][clickable=true] -n [text!~="领.*|.*话费.*|玩玩.*|玩一玩.*|.*订单|购券.*|.*卡|去看.*"][index=1][childCount=0] <n View <n View < View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@[text~="领奖|去完成"][clickable=true] -n [getChild(0).text!~="领.*|.*话费.*|玩玩.*|玩一玩.*|.*订单|购券.*|.*卡|去看.*"][index=1][childCount=2] <n View <n View < View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 1,
          actionMaximum: 10,
          actionCd: 3000,
          matches: [
            '[text="喂食10次"] < @View[clickable=true] < View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '养猪猪-阶段奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          name: '阶段奖励-可领取',
          matches: [
            '[id="J_ui-div"] > [id="app"] >n View > @View[clickable=true] > [text="可领取"]',
          ],
          excludeMatches: [
            'TextView < @View[clickable=true] <n View - TextView <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[id="J_ui-div"] > [id="app"] >n [text="恭喜获得阶段奖励"] +n @[text="领取并喂食"][clickable=true]',
          ],
        },
        {
          key: 1,
          name: '猪猪长到*年期啦-立即领取',
          matches: [
            '[id="J_ui-div"] > [id="app"] > View > [id="J_milepost"] > [getChild(0).text~="猪猪长到.*年期啦"] > [getChild(0).getChild(0).text~=".*年期.*年期"] > @[text="立即领取"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          name: '恭喜获得阶段奖励-领取并喂食',
          matches: [
            '[id="J_ui-div"] > [id="app"] >n [text="恭喜获得阶段奖励"] +n @[text="领取并喂食"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '养猪猪-抽奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          name: '可抽奖',
          matches: [
            '@[text="可抽奖"][clickable=true] < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@TextView[index=parent.childCount.minus(1)][clickable=true] -n [id="draw"] < View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@TextView[index=parent.childCount.minus(1)][clickable=true] -n [id="draw"] < View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 11,
          name: '免费抽奖',
          anyMatches: [
            '@[text="免费抽奖x1"][clickable=true] <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@[text="免费抽奖x1"][clickable=true] <n View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [11],
          key: 23,
          name: '浏览任务得抽奖次数',
          matches: [
            '[text="浏览任务得抽奖次数"] < @View[clickable=true] <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 12,
          name: '去喂食-×',
          matches: [
            '@TextView[clickable=true] -n [getChild(1).text="去喂食"] <n View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [25],
      key: 24,
      name: '养猪猪-桌面组件',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          name: '桌面组件',
          matches: [
            '[text$="京豆"] < @[desc$="京豆"][clickable=true] <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text="可抽奖"][clickable=true] < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[id="J_ui-div"] > [id="app"] >n View > @View[clickable=true] > [text="可领取"]',
            '@[text="领取并喂猪"][clickable=true] <n View < View < View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[text="明日再来"] <n View + @TextView[clickable=true] <n View < View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '组件登录有礼-领取并喂猪',
          matches: [
            '@[text="领取并喂猪"][clickable=true] <n View < View < View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          name: '组件登录有礼-领取并喂猪×',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.666',
          },
          actionDelay: 2000,
          anyMatches: [
            'TextView - [id="blindBoxSDK_suspendIcon2"] - [id="coin-fly-box"] - [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[id="blindBoxSDK_suspendIcon2"] - TextView - [id="coin-fly-box"] - [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] - [getChild(0).text="组件登录有礼"] < View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] - [getChild(0).text="组件登录有礼"] < View < View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 3,
          name: '明日再来-×',
          anyMatches: [
            '[text="明日再来"] <n View + @TextView[clickable=true] <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[text="明日再来"] <n View + @TextView[clickable=true] <n View < View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 25,
      name: '养猪猪-喂食竞赛',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="领"] <n @View[clickable=true] < View <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            'TextView < @View[clickable=true] <n View - TextView <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@[text="可抽奖"][clickable=true] < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[id="J_ui-div"] > [id="app"] >n View > @View[clickable=true] > [text="可领取"]',
            '[text$="京豆"] < @[desc$="京豆"][clickable=true] <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@[text="领取并喂猪"][clickable=true] <n View < View < View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[text="明日再来"] <n View + @TextView[clickable=true] <n View < View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.635',
          },
          actionDelay: 2000,
          anyMatches: [
            '[id="blindBoxSDK_suspendIcon2"] - TextView - [id="coin-fly-box"] - [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            'TextView - [id="blindBoxSDK_suspendIcon2"] - [id="coin-fly-box"] - [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] < View - [getChild(0).text^="pkTitleImg"] < View <n View <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 2,
          matches: [
            '@TextView[clickable=true] < View - [getChild(0).text^="pkTitleImg"] < View <n View <n View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 26,
      name: '养猪猪-红包大挑战',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          name: '领',
          matches: [
            '@[text^="领"][clickable=true] < View <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            'TextView < @View[clickable=true] <n View - TextView <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@[text="可抽奖"][clickable=true] < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[id="J_ui-div"] > [id="app"] >n View > @View[clickable=true] > [text="可领取"]',
            '[text$="京豆"] < @[desc$="京豆"][clickable=true] <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[text="领"] < @View[clickable=true] < View <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@[text="开心收下"][clickable=true] < View < View < View < View <n View <n View < View <n View < WebView < * < [vid="webview"]',
            '@View[clickable=true] - [text="可领取"] <n View <n View <n View < View <n View < WebView < * < [vid="webview"]',
            '@[text="开心收下"][clickable=true] <n View <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 1,
          name: '开心收下',
          matches: [
            '@[text="开心收下"][clickable=true] < View < View < View < View <n View <n View < View <n View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text="开心收下"][clickable=true] <n View <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 2,
          name: '可领取',
          matches: [
            '@View[clickable=true] - [text="可领取"] <n View <n View <n View < View <n View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text="开心收下"][clickable=true] < View < View < View < View <n View <n View < View <n View < WebView < * < [vid="webview"]',
            '@[text="开心收下"][clickable=true] <n View <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          name: '恭喜获得奖励-开心收下',
          matches: [
            '@[text="开心收下"][clickable=true] <n View <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 4,
          name: '×',
          actionDelay: 5000,
          anyMatches: [
            '[getChild(0).text="开红包抽"] - @TextView[clickable=true] < View <n View < View <n View < WebView < * < [vid="webview"]',
            '[getChild(0).text="开红包抽"] - @TextView[clickable=true] < View <n View < View < View <n View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text="开心收下"][clickable=true] < View < View < View < View <n View <n View < View <n View < WebView < * < [vid="webview"]',
            '@View[clickable=true] - [text="可领取"] <n View <n View <n View < View <n View < WebView < * < [vid="webview"]',
            '@[text="开心收下"][clickable=true] <n View <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 27,
      name: '养猪猪-节日活动',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text~="\\\\+.*g"] < @View[clickable=true] <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            'TextView < @View[clickable=true] <n View - TextView <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@[text="可抽奖"][clickable=true] < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[id="J_ui-div"] > [id="app"] >n View > @View[clickable=true] > [text="可领取"]',
            '[text$="京豆"] < @[desc$="京豆"][clickable=true] <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@[text^="领"][clickable=true] < View <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[getChild(0).text="开红包抽"] - @TextView[clickable=true] < View <n View < View <n View < WebView < * < [vid="webview"]',
            '@[text="closeButton"][clickable=true] <n View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 27,
          name: '去完成',
          actionDelay: 2000,
          anyMatches: [
            '@[text="去完成"][clickable=true] <n View <n View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@[text="去完成"][clickable=true] <n View <n View < View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text="领取"][clickable=true] <n View <n View < View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[text="可领取"] < @View[clickable=true] <n View < View < View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[text="可领取"] <n @View[clickable=true] <n View <n View <n View <n View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 1,
          name: '领取',
          matches: [
            '@[text="领取"][clickable=true] <n View <n View < View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 2,
          name: '可领取',
          anyMatches: [
            '[text="可领取"] < @View[clickable=true] <n View < View < View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[text="可领取"] <n @View[clickable=true] <n View <n View <n View <n View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 3,
          name: '×',
          actionDelay: 5000,
          matches: [
            '@[text="closeButton"][clickable=true] <n View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text="去完成"][clickable=true] <n View <n View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@[text~="去完成|领取"][clickable=true] <n View <n View < View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[text="可领取"] < @View[clickable=true] <n View < View < View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[text="可领取"] <n @View[clickable=true] <n View <n View <n View <n View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 28,
      name: '养猪猪-产粮机',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          key: 28,
          matches: [
            '[text="createAwardSignfull"] -n @TextView[clickable=true] < View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      scopeKeys: [70, 200],
      key: 29,
      name: '养猪猪-赚京豆/看视频 赚现金',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          preKeys: [70, 200],
          key: 0,
          matches: [
            '[text="喂食10次"] < @View[clickable=true] < View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            'TextView[text~="浏览完成|正在浏览|浏览页面.*完成任务|浏览.*秒|.*返回.*|京东验证"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          matches: [
            '[text="back"] < @View[clickable=true] < View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    //23.08.01-29.12.31 签到领现金
    //https://member.jr.jd.com/activity/sign/v5/indexV2.html
    //https://member.jr.jd.com/activity/new-sign-in/home/
    {
      key: 30,
      name: '签到领现金-赚抽奖次数-去完成',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.mainbox.main.MainActivity',
        '.bm.common.web.ui.WebActivity',
      ],
      rules: [
        {
          key: 30,
          actionDelay: 2000,
          matches: [
            '@[text="去完成"][clickable=true] -n [text!~="额外.*|.*话费|.*一笔.*订单.*"] < View -n [getChild(0).text="赚抽奖次数"] < [id="taskFloorId"] <n View < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text^="领取今日现金"][clickable=true] <n [id="popInner"] < View < View <n View <n View < View < View < WebView < * < [vid="webview"]',
            '@[text="开心收下"][clickable=true] <n View <n View <n View <n View < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 11,
          matches: [
            '@[text="点击查看更多"][clickable=true] <n [id="taskFloorId"] <n View < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[getChild(0).text^="返回"][clickable=true] - * [text="readMissionDown"]',
            '@[text="返回「打卡拿好礼」"][clickable=true] < ViewGroup + ImageView + ViewGroup',
          ],
        },
      ],
    },
    {
      key: 31,
      name: '签到领现金',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.mainbox.main.MainActivity',
        '.bm.common.web.ui.WebActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@[text^="领取今日现金"][clickable=true] <n [id="popInner"] < View < View <n View <n View < View < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[text="开心收下"][clickable=true] <n View <n View <n View <n View < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 32,
      name: '签到领现金-每日抽提现-立即抽提现',
      forcedTime: 60000,
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
          actionDelay: 2000,
          anyMatches: [
            '[text~="（可抽[1-9]+次）"] < @[id="lottieButton"][clickable=true] <n [id="lottieButton"] <n View <n [id="headFloor"] <n View < View < WebView < * < [vid="webview"]',
            '[text~="（可抽[1-9]+次）"] < @[id="lottieButton"][clickable=true] <n [id="lottieButton"] <n View < [id="headFloor"] <n View < View < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text="去完成"][clickable=true] -n [text!~="额外.*|.*话费|.*一笔.*订单.*"] < View -n [getChild(0).text="赚抽奖次数"] < [id="taskFloorId"] <n View < View < WebView < * < [vid="webview"]',
            '@[text="5ab97cb77eab3155"] <n View <n View <n View < View < WebView < * < [vid="webview"]', //抽奖中...
            '@[text="close1_6723ec4261"][clickable=true] <n View <n View <n View < View < WebView < * < [vid="webview"]',
            '@[text~="放弃升级，只领.*元"][clickable=true] <n Image < [id="lottieRef"] < View <n View <n View < View < WebView < * < [vid="webview"]',
            '@[text="开心收下"][clickable=true] <n View <n View <n View <n View < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="close1_6723ec4261"][clickable=true] <n View <n View <n View < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          matches: [
            '@[text~="放弃升级，只领.*元"][clickable=true] <n Image < [id="lottieRef"] < View <n View <n View < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0, 2],
          key: 3,
          matches: [
            '@[text="开心收下"][clickable=true] <n View <n View <n View <n View < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 33,
      name: '签到领现金-赚更多现金-去完成',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.mainbox.main.MainActivity',
        '.bm.common.web.ui.WebActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 5000,
          anyMatches: [
            '@TextView[clickable=true] -n [getChild(1).text="去提现"] < View +n [getChild(1).getChild(0).text="（可抽0次）"] <n View < [id="headFloor"] <n View < View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] -n [getChild(1).text="去提现"] < View +n [getChild(1).getChild(0).text="（可抽0次）"] <n View < [id="headFloor"] <n View < View < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '[text="去打卡"] <n @View[clickable=true] < View + [getChild(3).getChild(1).getChild(0).text="（可抽0次）"] <n [id="headFloor"] <n View < View < WebView < * < [vid="webview"]',
            '[text="去打卡"] <n @View[clickable=true] < View + [getChild(3).getChild(1).getChild(0).text="（可抽0次）"] <n [id="headFloor"] <n View < View < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 33,
          actionDelay: 2000,
          matches: [
            '@[text="去完成"][clickable=true] -n [text!~="开通.*|首次.*"] < View -n [text="赚更多现金"] < [id="taskFloorId"] <n View < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 11,
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="提现"]',
          ],
          excludeMatches: [
            '@[text="去完成"][clickable=true] -n [text!~="开通.*|首次.*"] < View -n [text="赚更多现金"] < [id="taskFloorId"] <n View < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [11],
          key: 12,
          actionDelay: 5000,
          matches: [
            'Image - @TextView[clickable=true] < View < View <n View < View < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    //26.07.01-26.12.31 打卡拿好礼|连续打卡白拿好礼
    {
      key: 34,
      name: '签到领现金-打卡拿好礼-每日点签',
      forcedTime: 60000,
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
          anyMatches: [
            '[text="去打卡"] <n @View[clickable=true] < View + [getChild(3).getChild(1).getChild(0).text="（可抽0次）"] <n [id="headFloor"] <n View < View < WebView < * < [vid="webview"]',
            '[text="去打卡"] <n @View[clickable=true] < View + [getChild(3).getChild(1).getChild(0).text="（可抽0次）"] <n [id="headFloor"] <n View < View < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text~="点击签到|去完成"][clickable=true] <n View <n View <n View <n View <n View < View <n View < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[text="点击签到"][clickable=true] <n View <n View <n View <n View <n View < View <n View < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 35,
      name: '签到领现金-打卡拿好礼-去完成',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.mainbox.main.MainActivity',
        '.bm.common.web.ui.WebActivity',
      ],
      rules: [
        {
          key: 35,
          actionDelay: 2000,
          matches: [
            '@[text="去完成"][clickable=true] <n View <n View <n View <n View <n View < View <n View < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text="去完成"][clickable=true] -n [text!~="额外.*|.*话费|.*一笔.*订单.*"] < View - [getChild(0).text="赚抽奖次数"] < [id="taskFloorId"] <n View < View < WebView < * < [vid="webview"]',
            '@[text="点击签到"][clickable=true] <n View <n View <n View <n View <n View < View <n View < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 11,
          actionDelay: 5000,
          matches: [
            '@TextView[clickable=true] - TextView < View -n [text^="今日打卡任务"] < View < View <n View <n View < View <n View < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text~="点击签到|去完成"][clickable=true] <n View <n View <n View <n View <n View < View <n View < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [11],
          key: 12,
          matches: [
            '[text="签到领现金"] - @TextView[clickable=true] < View < View <n View < View < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    //24.08.20-26.12.31 养大鹅
    //https://u.jr.jd.com/uc-fe-wxgrowing/cloudgoose/index/
    {
      key: 40,
      name: '养大鹅-去完成',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 40,
          actionDelay: 2000,
          anyMatches: [
            '[text="去完成"] < @[desc="去完成"][clickable=true] <n [getChild(1).text!~="打.*|.*体验.*|完成.*|去.*|通过.*"] <n View < View < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '[text="去完成"] < @[desc="去完成"][clickable=true] <n [getChild(1).text!~="打.*|.*体验.*|完成.*|去.*|通过.*"] <n View < View < View < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '[text="领奖"] < @[desc="领奖"][clickable=true] <n View <n View < View < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '[text="领奖"] < @[desc="领奖"][clickable=true] <n View <n View < View < View < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            'TextView - @TextView[clickable=true] -n [text="从京东信誉分频道 进游戏"] < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 11,
          anyMatches: [
            '[text="领奖"] < @[desc="领奖"][clickable=true] <n View <n View < View < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '[text="领奖"] < @[desc="领奖"][clickable=true] <n View <n View < View < View < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [40],
      key: 41,
      name: '养大鹅-去完成-从京东信誉分频道进入',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          preKeys: [40],
          key: 0,
          matches: [
            'TextView - @TextView[clickable=true] -n [text="从京东信誉分频道 进游戏"] < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="551d38b59d892f29"][clickable=true] < View <n View <n View <n View <n View < [id="app"] <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          action: 'back',
          matches: [
            '@[text="领"][clickable=true] - [text="京东信誉分专属福利"] < View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '[id="app"] - [id="skeleton"] < View < WebView < * < [vid="webview"] < [vid="web_all"] < * @Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
      ],
    },
    {
      key: 42,
      name: '养大鹅-喂鹅翻倍',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 5000,
          anyMatches: [
            '@View - View < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@View - View < View < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[desc~="领奖|去完成"][clickable=true] <n [getChild(1).text!~="打.*|.*体验.*|完成.*|去.*|通过.*"] <n View < View < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@[desc~="领奖|去完成"][clickable=true] <n [getChild(1).text!~="打.*|.*体验.*|完成.*|去.*|通过.*"] <n View < View < View < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@TextView[clickable=true] - [text="明日0点可领，10点之后慢慢减少"] <n View <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0, 1, 2],
          key: 2,
          actionDelay: 2000,
          matches: [
            '[text="连喂3次"] < @View[clickable=true] <n View <n View < View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '[text="明日0点领"] - @[getChild(0).text~="([3-9][0-9]{2}|[0-9]{4,})g"] <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 43,
      name: '养大鹅-签到并喂食',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="领"][clickable=true] < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text="签到并喂食"][clickable=true] <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[text="签到并喂食"][clickable=true] <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 44,
      name: '养大鹅-产粮机',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          name: '可领取',
          actionDelay: 2000,
          matches: [
            '@TextView[clickable=true] < View < View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text="领"][clickable=true] < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@[text="签到并喂食"][clickable=true] <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '恭喜你获得-开心收下',
          matches: [
            '@TextView[clickable=true] - View[clickable=true] - [text~=".*g"] <n View <n View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 45,
      name: '养大鹅-桌面组件',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          name: '可领取',
          actionDelay: 2000,
          anyMatches: [
            '[text="可领取"] < @View[clickable=true] < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '[text="可领取"] < @View[clickable=true] < View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] < View + [getChild(0).getChild(0).text="可领取"] <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] - View[clickable=true] - [text~=".*g"] <n View <n View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@[text="立即领取"][clickable=true] < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '登录有礼-立即领取',
          matches: [
            '@[text="立即领取"][clickable=true] < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 46,
      name: '养大鹅-喂鹅翻倍奖励',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          anyMatches: [
            '[text="可领取"] - @View[clickable=true] <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '[text="可领取"] - @View[clickable=true] <n View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '[text="可领取"] < @View[clickable=true] < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '[text="可领取"] < @View[clickable=true] < View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@[text="立即领取"][clickable=true] < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 1,
          name: '恭喜获得鹅粮奖励-收下喂鹅-×',
          anyMatches: [
            '@TextView[clickable=true] - View[clickable=true] - [text~=".*g"] <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] - View[clickable=true] - [text~=".*g"] <n View <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 47,
      name: '养大鹅-天天提额',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          name: '点我收蛋',
          actionDelay: 2000,
          anyMatches: [
            '[text="点我收蛋"] < @View[clickable=true] <n View <n View < View < [id="app"] < View < WebView < * < [vid="webview"]',
            '[text="点我收蛋"] < @View[clickable=true] <n View <n View <n View < View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '[text="可领取"] - @View[clickable=true] <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '[text="可领取"] - @View[clickable=true] <n View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] - View[clickable=true] - [text~=".*g"] <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] - View[clickable=true] - [text~=".*g"] <n View <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] - TextView[text~="（.*s）"] <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@[id="J_airLevel_-"][clickable=true] < Image <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] - [getChild(0).text~="获得.*"] <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '恭喜获得收蛋奖励-开心收下-×',
          matches: [
            '@TextView[clickable=true] - TextView[text~="（.*s）"] <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          name: '恭喜获得收蛋奖励-开心收下-××',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.75',
          },
          actionDelay: 1000,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] < View < View < View < View < View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] - TextView[text~="（.*s）"] <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [1,2],
          key: 3,
          name: '兑换额度',
          actionDelay: 2000,
          anyMatches: [
            '[text="兑换额度"] < @View[clickable=true] <n View <n View < View < [id="app"] < View < WebView < * < [vid="webview"]',
            '[text="兑换额度"] < @View[clickable=true] <n View <n View <n View < View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[id="J_airLevel_-"][clickable=true] < Image <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          name: '恭喜你，成功收满100个蛋-立即兑换提额机会',
          matches: [
            '@[id="J_airLevel_-"][clickable=true] < Image <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [3],
          key: 5,
          name: '恭喜你，成功收满100个蛋-立即兑换提额机会v',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.8',
          },
          actionDelay: 1000,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] < View < View < View < View < View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[id="J_airLevel_-"][clickable=true] < Image <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [4,5],
          key: 6,
          name: '我知道了-×',
          matches: [
            '@TextView[clickable=true] - [getChild(0).text~="获得.*"] <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 48,
      name: '养大鹅-赚鹅粮-立即领取',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 48,
          matches: [
            '[text="关闭"] - @[getChild(0).text^="立即领取"][clickable=true] -n [text="赚鹅粮"] <n View < View <n View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            'TextView[text~="浏览完成|正在浏览|浏览页面.*完成任务|浏览.*秒|.*返回.*|京东验证"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [11, 200],
      key: 49,
      name: '养大鹅-看视频 赚现金',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          preKeys: [5, 200],
          key: 0,
          action: 'back',
          matches: [
            '[text="03e6058058b35dde"] < @View[clickable=true] < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            'TextView[text~="浏览完成|正在浏览|浏览页面.*完成任务|浏览.*秒|.*返回.*|京东验证"]',
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
      ],
    },
    //24.12.25-26.12.31 天天领红包
    //https://fu.jr.jd.com/fq-free-channel/redenvelope/outside/
    {
      key: 50,
      name: '天天领红包-去完成',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.common.web.ui.WebActivity',
        '.bm.common.container.ui.BaseContainerActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[id="home"] > View > View > @TextView[clickable=true] - * [text="1京豆膨胀红包"]',
          ],
        },
        {
          key: 50,
          actionDelay: 2000,
          matches: [
            '[getChild(0).text="更多优惠"] +n @[getChild(3).text!~="去移动领话费"][clickable=true] > [text="去完成"]',
          ],
          excludeMatches: [
            '[id="home"] > View > View > @TextView[clickable=true] - * [text="1京豆膨胀红包"]',
          ],
        },
        {
          key: 11,
          actionDelay: 5000,
          matches: [
            '[id="home"] < View <n WebView < * < [vid="webview"] < [vid="web_all"] < * @Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          excludeMatches: [
            '[getChild(0).text="更多优惠"] +n @[getChild(3).text!~="去移动领话费"][clickable=true] > [text="去完成"]',
          ],
        },
      ],
    },
    //25.03.17-27.04.30 财宝分
    //https://finshop.jd.com/p/shop/?appId=269cfbad0ed744eeb60816a8a95bca83#/exchange-zone/
    {
      key: 60,
      name: '财宝分-浏览',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
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
            '[text="正在浏览"] - [getChild(0).getChild(1).text~=".*"] < View <n WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          action: 'back',
          matches: [
            '@[getChild(0).text="返回领奖"][clickable=true] - * [text="readMissionDown"]',
          ],
        },
      ],
    },
    //26.09.30-27.09.29 机构福利-财宝分福利
    //https://show.jd.com/m/De5VMnmwbxY2Pyk3/?pageKey=De5VMnmwbxY2Pyk3
    {
      key: 61,
      name: '财宝分福利-加自选',
      forcedTime: 60000,
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
      key: 62,
      name: '财宝分福利-浏览',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="机构福利"] >n [getChild(0).text^="浏览"] > @Image[clickable=true]',
          ],
          excludeMatches: [
            '[text="机构福利"] >n [getChild(0).text^="加自选"] > @Image[clickable=true]',
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
            '[text="正在浏览"] - [getChild(0).getChild(1).text~=".*"] < View <n WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          action: 'back',
          matches: [
            '@[getChild(0).text="返回领奖"][clickable=true] - * [text="readMissionDown"]',
          ],
        },
      ],
    },
    {
      key: 63,
      name: '财宝分福利-关注',
      forcedTime: 60000,
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
          excludeMatches: [
            '[text="机构福利"] >n [getChild(0).text^="加自选"] > @Image[clickable=true]',
            '[text="机构福利"] >n [getChild(0).text^="浏览"] > @Image[clickable=true]',
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
    //25.04.28-26.12.31 赚京豆-做任务领京豆二级页24.04.22-25.12.31
    //https://member.jr.jd.com/member/coinQuest/coin/
    //做任务领奖励24.08.22-26.09.29
    //https://member.jr.jd.com/member/integral-mall/mission/
    {
      key: 70,
      name: '赚京豆-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 70,
          actionDelay: 2000,
          matches: [
            '[text="去完成"] - [getChild(0).getChild(0).text!~=".*话费|体验.*|消灭.*|完成.*|.*权益|加赠.*|开通.*|分享.*"] <n @View[clickable=true] <n View <n View < View <n View <n View <n View < View < View < [id="page-container"] < View < [text="赚京豆"] < * < [vid="webview"]',
          ],
        },
        {
          key: 11,
          actionDelay: 5000,
          matches: [
            '[text="dancing"] < @View[clickable=true] < View <n View < View < View <n View < View < View < [id="page-container"] < View < [text="赚京豆"] < * < [vid="webview"]',
          ],
          excludeMatches: [
            '[text="去完成"] - [getChild(0).getChild(0).text!~=".*话费|体验.*|消灭.*|完成.*|.*权益|加赠.*|开通.*|分享.*"] <n @View[clickable=true] <n View <n View < View <n View <n View <n View < View < View < [id="page-container"] < View < [text="赚京豆"] < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 71,
      name: '赚京豆-一键领京豆',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
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
    //25.12.29-26.12.31 天天赚钱 领京豆|天天赚京豆
    //https://show.jd.com/m/RkO0AE9rKrYy6ZDd/?pageKey=RkO0AE9rKrYy6ZDd
    {
      key: 80,
      name: '天天赚京豆-去完成',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 80,
          name: '去完成/继续完成',
          actionDelay: 2000,
          matches: [
            '[text~="去完成|继续完成"] < @View[clickable=true] -2 [text!~="领话费|分享.*|.*领取|开.*|.*订单"] <n View <n ListView <n View <n [id="lego-app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] -n [text~="再领.*个京豆"]',
            '@TextView[clickable=true] - [text="立即领取"] -n [text~=".*个京豆"]',
            '[text="ff0fe9dd65ab466d"] + [getChild(1).text="1个京豆"] > @View[clickable=true] > [text="立即领取"]',
          ],
        },
        {
          key: 11,
          name: '任务已完成|任务未完成-×',
          matches: [
            '@TextView[index=parent.childCount.minus(1)][clickable=true] -n [text$="个京豆"] <n View < View',
          ],
        },
        {
          key: 12,
          name: '任务已完成-恭喜获得-×',
          matches: [
            '@TextView[clickable=true] <n Dialog <n WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 13,
          name: '赚京豆-立即领取',
          matches: [
            '[text="ff0fe9dd65ab466d"]  > @View[clickable=true] > [text="立即领取"]',
          ],
        },
        {
          key: 14,
          name: '任务完成，奖励已到账-返回上一页',
          matches: [
            '[text="任务完成，奖励已到账"] + @[getChild(0).text="返回上一页"][clickable=true]',
          ],
        },
        {
          key: 15,
          actionDelay: 5000,
          matches: [
            '[text="做任务赚京豆"] <n View <n [id="lego-app"] < View < WebView < * < [vid="webview"] < [vid="web_all"] + * @Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          excludeMatches: [
            '[text~="去完成|继续完成"] < @View[clickable=true] -2 [text!~="领话费|分享.*|.*领取|开.*|.*订单"] <n View <n ListView <n View <n [id="lego-app"] < View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 81,
      name: '天天赚京豆-做任务开福袋',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          name: '待领取',
          matches: [
            '[text="待领取"] - @View[clickable=true] < View <n ListView < View <n View <n View <n [id="lego-app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '[text~="去完成|继续完成"] < @View[clickable=true] -2 [text!~="领话费|分享.*|.*领取|开.*|.*订单"] <n View <n ListView <n View <n [id="lego-app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '恭喜获得-福袋奖励-×',
          matches: [
            '@TextView[clickable=true] <n [name$="Dialog"] <n WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 82,
      name: '天天赚京豆-去完成-浏览App-首页-做任务领京豆',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.mainbox.main.MainActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text="去完成"] < ViewGroup - [getChild(0).text!~="领话费"] <n ViewGroup < @ViewGroup[clickable=true] <n ViewGroup <n ViewGroup < ViewGroup < FrameLayout <n [vid="page_list"]',
          ],
        },
        {
          key: 1,
          swipeArg: {
            start: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.55',
            },
            end: {
              x: 'screenWidth*0.5',
              y: 'screenHeight*0.75',
            },
            duration: 200,
          },
          actionMaximum: 1,
          anyMatches: [
            '[getChild(0).getChild(1).getChild(0).text="领话费" || getChild(0).getChild(2).getChild(0).text="查奖励"] - [getChild(0).getChild(1).getChild(0).text="领话费" || getChild(0).getChild(2).getChild(0).text="查奖励"] < ViewGroup <n ViewGroup < ViewGroup < FrameLayout <n @[vid="page_list"]',
          ],
        },
      ],
    },
    //25.12.30-26.12.31 游戏大厅|互动游戏24.05.16-25.12.31|25.01.01-29.12.31 冲榜赢京豆
    //https://u.jr.jd.com/uc-fe-wxgrowing/game-polymerization/index/
    {
      key: 90,
      name: '互动游戏-集电量赚京豆',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[id="blindBoxSDK_suspendIcon2"] > @View[clickable=true] > [text="44df241fb2dec3cc"] +n TextView[text="+3"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] + View > View > [text="88da36c2b49924a1"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(0).text="88da36c2b49924a1"] - View >n @View[clickable=true] > [text="待领"]',
          ],
        },
        {
          preKeys: [1, 2],
          key: 2,
          matches: [
            '@TextView[clickable=true] + View > View > [text="88da36c2b49924a1"]',
          ],
          excludeMatches: [
            '[getChild(0).text="88da36c2b49924a1"] - View >n @View[clickable=true] > [text="待领"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [20, 28],
      key: 91,
      name: '互动游戏-<',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          preKeys: [20, 28],
          key: 0,
          name: '逛逛游戏中心',
          actionDelay: 5000,
          matches: [
            '[text="游戏大厅"] >n @View[clickable=true] > [text="dancing"]',
          ],
          excludeMatches: [
            'TextView[text~="浏览完成|正在浏览|浏览页面.*完成任务|浏览.*秒|.*返回.*|京东验证"]',
          ],
        },
        {
          preKeys: [28],
          key: 1,
          matches: [
            '[getChild(0).text="返回领奖"][clickable=true] - [getChild(0).getChild(1).getChild(0).text="readMissionDown"] < * -n * [text="dancing"] < @View[clickable=true] <<n [vid="webview"]',
          ],
        },
      ],
    },
    //25.12.30-26.12.31 京豆捕鱼
    //https://u.jr.jd.com/uc-fe-wxgrowing/catch-fish/index/
    {
      scopeKeys: [20, 40, 70],
      key: 100,
      name: '京豆捕鱼-养猪猪/养大鹅/赚京豆',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.landscape.WebLandscapeActivity'],
      rules: [
        {
          preKeys: [0, 20, 40, 70],
          key: 0,
          action: 'longClickCenter',
          actionCd: 200,
          matches: [
            '[id="Cocos2dGameContainer"] - [id="J_ui-load"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 10000,
          matches: [
            '@[text="退出"][clickable=true] <n View <n [id="main"] < [id="app"] <n View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    //2026.01.15-2027.12.31 天天摇黄金26.06.05-30.09.29
    //https://fu.jr.jd.com/fq-free-channel/shake-gold/index?channelLv=202209231527222DMrDH
    //赚次数 得黄金
    {
      key: 110,
      name: '天天摇黄金-去完成',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@TextView[clickable=true] - [getChild(0).text~="摇黄金 x[1-9]"] <n View <n View < [id="app"] <n View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@TextView[index=parent.childCount.minus(1)][clickable=true] -n [text^="立即摇"] <n View < View <n View < [id="app"] <n View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] < View < View <n View < [id="app"] <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 110,
          actionDelay: 2000,
          matches: [
            '@[text="去完成"][clickable=true] - [getChild(0).getChild(0).text!~="攒入.*|首绑.*|开通.*|开启.*"] <n View <n View < View <n View < [id="app"] <n View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 111,
      name: '天天摇黄金',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@TextView[index=parent.childCount.minus(1)][clickable=true] -n [text^="立即摇"] <n View < View <n View < [id="app"] <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 1,
          actionDelay: 2000,
          matches: [
            '@[text~="摇黄金 x[1-9]"][clickable=true] < View <n View <n View < [id="app"] <n View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text="去完成"][clickable=true] - [getChild(0).getChild(0).text!~="攒入.*|首绑.*|开通.*|开启.*"] <n View <n View < View <n View < [id="app"] <n View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] - [getChild(2).getChild(0).text="开心收下"] < View <n View <n View < [id="app"] <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@TextView[clickable=true] - [getChild(2).getChild(0).text="开心收下"] < View <n View <n View < [id="app"] <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 3,
          actionDelay: 5000,
          matches: [
            '@TextView[clickable=true] < View < View <n View < [id="app"] <n View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text~="摇黄金 x[1-9]"][clickable=true] < View <n View <n View < [id="app"] <n View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] - [getChild(2).getChild(0).text="开心收下"] < View <n View <n View < [id="app"] <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
      ],
    },
    //26.08.16-26.08.31 超级指数节
    //https://lca.jd.com/yx/index-channel/home/
    {
      key: 120,
      name: '超级指数节-抽',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
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
    //26.10.08-26.10.16 京9黄金节
    //https://lca.jd.com/yx/index-channel/home/
    {
      key: 130,
      name: '京9黄金节-摘金叶',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          name: '摘金叶',
          actionDelay: 3000,
          matches: [
            'View - TextView < @View[clickable=true] <n View <n View < View <n View < [id="app"] < [text="京9黄金节"] < * < [vid="webview"]',
          ],
          excludeMatches: [
            'TextView[text~="浏览完成|正在浏览|浏览页面.*完成任务|浏览.*秒|.*返回.*|京东验证"]',
            '[text="京9黄金节"] >n [getChild(3).text="暂时错过这笔钱"] + @TextView[clickable=true]',
            '[text="京9黄金节"] >n TextView[text="换一换"] + *[clickable=true] + @TextView[clickable=true]',
            '[text="京9黄金节"] >n TextView[clickable=false] + TextView[clickable=true] + @TextView[clickable=true]',
            '[text="京9黄金节"] > View > TextView + View > View > @TextView[clickable=true] + View',
            '[text="京9黄金节"] >n @[text="领取"][clickable=true]',
            '[text="京9黄金节"] >n [text="先收下了"] + @TextView[clickable=true]',
          ],
        },
        {
          key: 1,
          name: '暂时错过这笔钱-×',
          matches: [
            '[text="京9黄金节"] >n [getChild(3).text="暂时错过这笔钱"] + @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          name: '摘到金叶子-立即领取-×',
          matches: [
            '[text="京9黄金节"] >n TextView[text="换一换"] + *[clickable=true] + @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          name: '金叶子飞走啦-我知道了-×',
          matches: [
            '[text="京9黄金节"] >n TextView[clickable=false] + TextView[clickable=true] + @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 130,
          name: '我的金叶筐-立即领',
          matches: [
            '[text="京9黄金节"] >n [getChild(0).text!~="体验.*|开通.*"] + @[text="立即领"][clickable=true]',
          ],
          excludeMatches: [
            '[text="京9黄金节"] >n TextView[text="换一换"] + *[clickable=true] + @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 5,
          name: '我的金叶筐-立即领-×',
          matches: [
            '[text="京9黄金节"] > View > TextView + View > View > @TextView[clickable=true] + View',
          ],
        },
      ],
    },
    {
      key: 131,
      name: '京9黄金节-领取',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          name: '领取',
          matches: ['[text="京9黄金节"] >n @[text="领取"][clickable=true]'],
          excludeMatches: [
            '[text="京9黄金节"] >n TextView[text="换一换"] + *[clickable=true] + @TextView[clickable=true]',
            '[text="京9黄金节"] >n [text="先收下了"] + @TextView[clickable=true]',
            '[text="京9黄金节"] >n TextView + TextView[clickable=true] + View + @TextView[clickable=true] + TextView',
            '[text="京9黄金节"] >n TextView[clickable=true] + @TextView[clickable=true] + TextView',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '恭喜获得-×',
          matches: [
            '[text="京9黄金节"] >n [text="先收下了"] + @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          name: '解锁奖池-立即抽奖',
          matches: [
            '[text="京9黄金节"] >n TextView + TextView[clickable=true] + View + @TextView[clickable=true] + TextView',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          name: '恭喜获得-开心收下-×',
          matches: [
            '[text="京9黄金节"] >n TextView[clickable=true] + @TextView[clickable=true] + TextView',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          name: '解锁奖池-立即抽奖-×',
          matches: [
            '[text="京9黄金节"] >n TextView + @TextView[clickable=true] + View + TextView[clickable=true] + TextView',
          ],
        },
      ],
    },
    //26.10.13-26.11.11 打白条 拆1亿个红包
    //https://show.jd.com/m/pgKmxE6RZ9EV28Qe/?pageKey=pgKmxE6RZ9EV28Qe&channel=btfloor
    {
      key: 140,
      name: '打白条-赚金币',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 140,
          actionDelay: 2000,
          anyMatches: [
            '@[text="去完成"][clickable=true] -4 [text!~=".*体验.*|完成.*|.*券|.*金条.*|添加.*|.*开通.*"] <n View <n View <n View < View < View <n View < WebView < * < [vid="webview"]',
            'TextView[index=parent.childCount.minus(1)] - Image < View < @View[clickable=true] < View <n View <n View < View < View <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [140],
          key: 11,
          matches: [
            'TextView <n @View[clickable=true] < View <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [11],
          key: 12,
          actionDelay: 5000,
          matches: [
            '[text="back"] < @View[clickable=true] < View <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 13,
          actionDelay: 5000,
          matches: [
            '[desc="访问页面得金币"] < View -n @ImageButton[clickable=true] < View < View < View <n View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text="去完成"][clickable=true] -4 [text!~=".*体验.*|完成.*|.*券|.*金条.*|添加.*|.*开通.*"] <n View <n View <n View < View < View <n View < WebView < * < [vid="webview"]',
            'TextView[index=parent.childCount.minus(1)] - Image < View < @View[clickable=true] < View <n View <n View < View < View <n View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 141,
      name: '打白条-拆红包',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          name: '拆红包',
          matches: [
            '[text~="可拆[1-9]次"] <n View < @View[clickable=true] <n View <n View <n View < [id="lgFloorWrap"] < [id="lego-app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@ImageButton[text="03e60180185ad347"][clickable=true] < View < View < View <n View < WebView < * < [vid="webview"]',
            '@[text="鹅手指引"][clickable=true] -n Image[clickable=true] < View <n View < View <n View < WebView < * < [vid="webview"]',
            '@[text="关闭弹窗"][clickable=true] <n Dialog <n View <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '立即抽奖',
          matches: [
            '@[text="鹅手指引"][clickable=true] -n Image[clickable=true] < View <n View < View <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          name: '恭喜获得-×',
          anyMatches: [
            '@[text="关闭弹窗"][clickable=true] <n [text="恭喜获得"] <n View <n View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] -n [desc="恭喜获得"] < [name$="Dialog"] <n View <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 141,
          name: '完成任务得奖励-×',
          matches: [
            '@[text="关闭弹窗"][clickable=true] <n [text="完成任务得金币"] <n View <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 142,
          name: '没有次数啦-去得红包-×',
          matches: [
            '@TextView[clickable=true] - TextView[clickable=true] <n [name$="Dialog"] < View <n View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 142,
      name: '打白条-兑换好礼',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="去兑换"][clickable=true] - [text="1"] <n View <n View < View < View <n View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] <n View < [name$="Dialog"] < View <n View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] <n View < View <n [name$="Dialog"] <n View <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '确认兑换',
          matches: [
            '@TextView[clickable=true] <n View < [name$="Dialog"] < View <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '兑换成功-开心收下',
          matches: [
            '@TextView[clickable=true] <n View < View <n [name$="Dialog"] <n View <n View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 143,
      name: '打白条-兑换好礼-限时抢',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          anyMatches: [
            '@[text="去兑换"][clickable=true] - [text~="[3-9][0-9]{3,}"] <n View <n View <n View < View < View <n View < WebView < * < [vid="webview"]',
            '@[text="去兑换"][clickable=true] - [text~="[3-9][0-9]{3,}"] <n View <n View < View <n View < View < View <n View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] <n View < [name$="Dialog"] < View <n View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] <n View < View <n [name$="Dialog"] <n View <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@TextView[clickable=true] <n View < [name$="Dialog"] < View <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@TextView[clickable=true] <n View < View <n [name$="Dialog"] <n View <n View < WebView < * < [vid="webview"]',
          ],
        },
      ],
    },
    //https://member.jr.jd.com/activity/gold-tree/
    //26.12.31 看视频 赚现金
    //https://u.jr.jd.com/downloadApp/index.html?jumpUrl=https://content.jr.jd.com/shareProject/shortVideo/vertical/index.html?contentId=824242245632133120
    //做任务赚金币
    {
      key: 200,
      name: '看视频 赚现金-去完成',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.common.web.ui.WebActivity',
        '.bm.mainbox.main.MainActivity',
        '.bm.sh.jm.video.ui.VibratoActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 5000,
          matches: [
            '[text="我的钱"] < ViewGroup < ViewGroup < ViewGroup - @ViewGroup[clickable=true] < ViewGroup < * [text="53/53"]',
          ],
          excludeMatches: [
            'TextView[text~="浏览完成|正在浏览|浏览页面.*完成任务|.*返回.*|.*继续.*|金币获取加倍中"]',
          ],
        },
        {
          key: 200,
          actionDelay: 2000,
          matches: [
            '[text="去完成"] < @ViewGroup[clickable=true] - [getChild(1).getChild(0).text!~="开通财宝消费卡|买一笔黄金|社区-稳健万元|今日赠送彩票券|去移动领话费"] < ViewGroup < ViewGroup < ViewGroup < FrameLayout -n FrameLayout > ViewGroup > [text="做任务赚金币"]',
          ],
        },
        {
          key: 11,
          actionDelay: 5000,
          matches: [
            '@ImageView[clickable=true] < ViewGroup + * [text="做任务赚金币"]',
          ],
          excludeMatches: [
            '[text="去完成"] < @ViewGroup[clickable=true] - [getChild(1).getChild(0).text!~="开通财宝消费卡|买一笔黄金|社区-稳健万元|今日赠送彩票券|去移动领话费"] < ViewGroup < ViewGroup < ViewGroup < FrameLayout -n FrameLayout > ViewGroup > [text="做任务赚金币"]',
          ],
        },
        {
          preKeys: [11],
          key: 12,
          matches: ['@ImageView[clickable=true] <n * [text="53/53"]'],
        },
      ],
    },
    {
      key: 201,
      name: '看视频 赚现金-上滑',
      forcedTime: 60000,
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
          actionCd: 20000,
          matches: [
            '[text~="([0-9]|[1-4][0-9]|5[0-2])/53"] <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewGroup <n ViewGroup < ViewGroup <n ViewGroup < ViewGroup < ViewGroup < ViewGroup < @[vid="fl_operating_group"]',
          ],
          excludeMatches: [
            'TextView[text~="浏览完成|正在浏览|浏览页面.*完成任务|.*返回.*|.*继续.*|金币获取加倍中"]',
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
          actionCd: 20000,
          matches: ['@[vid="recycler_view"] >n [text="上滑继续看视频"]'],
        },
      ],
    },
    //京东笔笔返
    //https://ipay.jd.com/pages/bbf/index
    {
      key: 210,
      name: '笔笔返-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 210,
          actionDelay: 2000,
          matches: [
            '@[text="去完成"][clickable=true] < View - [getChild(1).text~="现金0.0[0-9]元"] <n View < View <n View < View <n View <n [id="bbf-page"] < [id="app"] < View < [text="京东笔笔返"] < * < [vid="webview"]',
          ],
        },
        {
          key: 11,
          actionDelay: 2000,
          matches: [
            '[text="余额"] <n View <n @[id^="bubble-ci-"][clickable=true] <n View < View <n View <n [id="bbf-page"] < [id="app"] < View < [text="京东笔笔返"] < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text="去完成"][clickable=true] < View - [getChild(1).text~="现金0.0[0-9]元"] <n View < View <n View < View <n View <n [id="bbf-page"] < [id="app"] < View < [text="京东笔笔返"] < * < [vid="webview"]',
          ],
        },
        {
          key: 12,
          actionDelay: 5000,
          matches: [
            '[text="京东笔笔返"] < * < [vid="webview"] < [vid="web_all"] + * @Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          excludeMatches: [
            '@[text="去完成"][clickable=true] < View - [getChild(1).text~="现金0.0[0-9]元"] <n View < View <n View < View <n View <n [id="bbf-page"] < [id="app"] < View < [text="京东笔笔返"] < * < [vid="webview"]',
            '[text="余额"] <n View <n @[id^="bubble-ci-"][clickable=true] <n View < View <n View <n [id="bbf-page"] < [id="app"] < View < [text="京东笔笔返"] < * < [vid="webview"]',
          ],
        },
      ],
    },
    {
      key: 211,
      name: '笔笔返-×',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          matches: [
            'Dialog > [getChild(0).text="今日限时福利"] + @Button[text=""][clickable=true]',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 400,
      name: '发现新版本-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@[vid="ib_close"] + [vid="cd_content_root"] >n [text="立即下载"][vid="tv_update_btn"]',
          ],
        },
      ],
    },
    {
      key: 401,
      name: '打开通知提醒-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@[vid="iv_close"][clickable=true] - [text="打开通知提醒"][vid="tv_title1"]',
          ],
        },
      ],
    },
  ],
});
