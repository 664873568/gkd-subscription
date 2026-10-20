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
          name: 'JoyAI对话',
          actionDelay: 5000,
          matches: [
            '[text="JoyAI"] < * < [vid="webview"] < [vid="web_all"] <n [vid="web_show_root"] >n @Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          key: 3,
          name: '京东健康-限时福利',
          action: 'back',
          actionDelay: 5000,
          matches: [
            '[text="限时福利"] - @[text="back"][clickable=true] <<n [text="限时福利"] < * < [vid="webview"]',
          ],
        },
        {
          key: 4,
          action: 'back',
          matches: [
            '@[getChild(0).text="返回上级页面"][clickable=true] - [getChild(0).getChild(1).getChild(0).text="abnormal"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [
        20, 28, 30, 33, 35, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140,
        200, 210,
      ],
      key: 11,
      name: '通用-返回-scopeKeys',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.common.web.ui.WebFreeSizeActivity',
        '.bm.common.web.ui.WebActivity',
        '.bm.common.container.ui.BaseContainerActivity',
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
            '@FrameLayout[clickable=true] < [vid="common_webview_navbar_right"] - [vid="common_webview_navbar_left"]',
          ],
          activityIds: ['.bm.common.web.ui.WebFreeSizeActivity'],
        },
        {
          preKeys: [0, 1, 20, 30, 40, 50, 70, 80, 110, 130, 140, 200, 210],
          key: 1,
          action: 'back',
          matches: [
            '@[getChild(0).text~="返回领奖|返回签到|奖励已到账|浏览完成"] - * [text~="readMissionDown|ff776b55ee07c915"]',
          ],
          excludeMatches: [
            '[getChild(0).text="返回领奖"][clickable=true] - [getChild(0).getChild(1).getChild(0).text="readMissionDown"] < * -n * [text="dancing"] < @View[clickable=true] <<n [vid="webview"]',
            '@[getChild(0).text="浏览完成"][clickable=false] - [getChild(1).getChild(0).text="ff776b55ee07c915"] < View <n View < WebView < * < [vid="webview"] < [vid="web_all"] <n [vid="web_show_root"] >n @Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [2, 20, 30, 40],
          key: 2,
          anyMatches: [
            '[getChild(0).text="返回领奖"][clickable=true] - [getChild(0).getChild(1).getChild(0).text="readMissionDown"] < * -n * [text="dancing"] < @View[clickable=true] <<n [vid="webview"]',
            '@[getChild(0).text="浏览完成"][clickable=false] - [getChild(1).getChild(0).text="ff776b55ee07c915"] < View <n View < WebView < * < [vid="webview"] < [vid="web_all"] <n [vid="web_show_root"] >n @Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [3, 20, 30, 35, 40, 110, 200],
          key: 3,
          action: 'back',
          matches: [
            'ViewGroup - ImageView - ViewGroup - ViewGroup > @[text="返回领奖" || text="返回签到" || text="返回「打卡拿好礼」" || text="继续做任务" || text="继续浏览页面"][clickable=true]',
          ],
        },
        {
          preKeys: [4, 20, 30, 33, 35, 40, 50, 70, 80, 110, 140, 200, 210],
          key: 4,
          action: 'back',
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          excludeMatches: [
            '[text~="浏览完成|正在浏览|浏览页面.*完成任务|浏览.*秒|.*返回.*|京东验证"]',
          ],
        },
        {
          preKeys: [5, 20, 30, 35, 40, 50, 70, 80, 110, 140, 200, 210],
          key: 5,
          action: 'back',
          actionDelay: 5000,
          anyMatches: [
            'TextView - @TextView[clickable=true] < View < View < [id="app"] < WebView < * < [vid="webview"]', //对口令赢苹果18Pro
            '[text="03e6058058b35dde"] < @View[clickable=true] < View <n View < [id="app"] < View < WebView < * < [vid="webview"]', //天天来提额
            'View - @TextView[clickable=true] < View <n View < View < [id="app"] < [text="彩票频道"] < * < [vid="webview"]', //彩票频道
            'TextView - @TextView[clickable=true] < View < View < [id="joyai-root"] < View < [text="JoyAI"] < * < [vid="webview"]', //逛测财运智能体
            'TextView - @TextView[clickable=true] < View < View < View < [id="app"] <n View < [text="圈子"] < * < [vid="webview"]', //浏览基金圈 结交同路人
            '@View[index=parent.childCount.minus(1)] < [id="J_babelOptPage"] <n [id="J_babelOpt"] < [id^="bab_aid"] < WebView < * < [vid="webview"]', //京东秒杀
          ],
          excludeMatches: [
            '[text~="浏览完成|正在浏览|浏览页面.*完成任务|浏览.*秒|.*返回.*|京东验证"]',
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
          preKeys: [7, 8],
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
          actionDelay: 3000,
          anyMatches: [
            '@[text="去完成"][clickable=true] -n [text!~="领.*|.*话费.*|玩玩.*|玩一玩.*|.*订单|购券.*|.*卡|去看.*"][index=1][childCount=0] <n View <n View < View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@[text="去完成"][clickable=true] -n [getChild(0).text!~="领.*|.*话费.*|玩玩.*|玩一玩.*|.*订单|购券.*|.*卡|去看.*"][index=1][childCount=2] <n View <n View < View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '[text="createAwardSignfull"] -n @TextView[clickable=true] < View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] - [text="继续浏览"] -n [text="恭喜获得浏览奖励"] < View <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@[text="领奖"][clickable=true] -n [text!~="领.*|.*话费.*|玩玩.*|玩一玩.*|.*订单|购券.*|.*卡|去看.*"][index=1][childCount=0] <n View <n View < View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@[text="领奖"][clickable=true] -n [getChild(0).text!~="领.*|.*话费.*|玩玩.*|玩一玩.*|.*订单|购券.*|.*卡|去看.*"][index=1][childCount=2] <n View <n View < View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
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
          anyMatches: [
            '@[text="领奖"][clickable=true] -n [text!~="领.*|.*话费.*|玩玩.*|玩一玩.*|.*订单|购券.*|.*卡|去看.*"][index=1][childCount=0] <n View <n View < View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '@[text="领奖"][clickable=true] -n [getChild(0).text!~="领.*|.*话费.*|玩玩.*|玩一玩.*|.*订单|购券.*|.*卡|去看.*"][index=1][childCount=2] <n View <n View < View <n View <n View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
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
            '[getChild(0).getChild(2).text="做任务 赚粮食"] +n @View[clickable=true] > TextView',
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
            '[id="J_ui-div"] > [id="app"] > View > View > @[text="可抽奖"][clickable=true] + [id="J_sign_icon"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '免费抽奖',
          matches: [
            '[id="J_ui-div"] > [id="app"] >n [id="draw"] + View > @[text="免费抽奖x1"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          name: '去喂食',
          matches: [
            '[id="J_ui-div"] > [id="app"] >n [id="draw"] + [getChild(1).text="去喂食"] +n @TextView[clickable=true]',
          ],
        },
      ],
    },
    {
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
            '[id="J_ui-div"] > [id="app"] > View > View > @[text="可抽奖"][clickable=true] + [id="J_sign_icon"]',
            '[id="J_ui-div"] > [id="app"] >n View > @View[clickable=true] > [text="可领取"]',
            '[id="J_ui-div"] > [id="app"] >n [text="组件登录有礼"] +n @[text="领取并喂猪"][clickable=true]',
            '[id="J_ui-div"] > [id="app"] >n [getChild(5).text="明日再来"] + @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '组件登录有礼-领取并喂猪',
          matches: [
            '[id="J_ui-div"] > [id="app"] >n [text="组件登录有礼"] +n @[text="领取并喂猪"][clickable=true]',
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
          matches: [
            'TextView - [id="blindBoxSDK_suspendIcon2"] - [id="coin-fly-box"] - [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '[id="J_ui-div"] > [id="app"] >n [text="组件登录有礼"] +n @[text="领取并喂猪"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 3,
          name: '明日再来-×',
          matches: [
            '@TextView[clickable=true] - [getChild(5).text="明日再来"] < View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
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
            '[id="J_ui-div"] > [id="app"] >n @View[clickable=true] > [text="领"]',
          ],
          excludeMatches: [
            '[getChild(0).getChild(2).text="做任务 赚粮食"] +n @View[clickable=true] > TextView',
            '[id="J_ui-div"] > [id="app"] > View > View > @[text="可抽奖"][clickable=true] + [id="J_sign_icon"]',
            '[id="J_ui-div"] > [id="app"] >n View > @View[clickable=true] > [text="可领取"]',
            '[text$="京豆"] < @[desc$="京豆"][clickable=true] <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[id="J_ui-div"] > [id="app"] >n [text="组件登录有礼"] +n @[text="领取并喂猪"][clickable=true]',
            '[id="J_ui-div"] > [id="app"] >n [getChild(5).text="明日再来"] + @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.9',
          },
          actionDelay: 2000,
          matches: [
            '[id="J_ui-div"] > [id="app"] >n @[id="J_spinePig"][clickable=true]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] < View <n View <n View <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 2,
          matches: [
            '@TextView[clickable=true] < View <n View <n View <n View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true]  <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
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
            '[id="J_ui-div"] > [id="app"] >n @[text^="领"][clickable=true]',
          ],
          excludeMatches: [
            '[getChild(0).getChild(2).text="做任务 赚粮食"] +n @View[clickable=true] > TextView',
            '[id="J_ui-div"] > [id="app"] > View > View > @[text="可抽奖"][clickable=true] + [id="J_sign_icon"]',
            '[id="J_ui-div"] > [id="app"] >n View > @View[clickable=true] > [text="可领取"]',
            '[text$="京豆"] < @[desc$="京豆"][clickable=true] <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[id="J_ui-div"] > [id="app"] >n @View[clickable=true] > [text="领"]',
            '[id="J_ui-div"] + [id="coin-fly-box" || getChild(0).id="coin-fly-box"] + View >n @[text="开心收下"][clickable=true]',
            '[id="J_ui-div"] + [id="coin-fly-box" || getChild(0).id="coin-fly-box"] + View >n [text="可领取"] + @View[clickable=true]',
            '[id="J_ui-div"] > [id="app"] >n [text="恭喜获得奖励"] +n @[text="开心收下"][clickable=true] + TextView',
          ],
        },
        {
          key: 1,
          name: '开心收下',
          matches: [
            '[id="J_ui-div"] + [id="coin-fly-box" || getChild(0).id="coin-fly-box"] + View >n @[text="开心收下"][clickable=true]',
          ],
          excludeMatches: [
            '[id="J_ui-div"] > [id="app"] >n [text="恭喜获得奖励"] +n @[text="开心收下"][clickable=true] + TextView',
          ],
        },
        {
          key: 2,
          name: '可领取',
          matches: [
            '[id="J_ui-div"] + [id="coin-fly-box" || getChild(0).id="coin-fly-box"] + View >n [text="可领取"] + @View[clickable=true]',
          ],
          excludeMatches: [
            '[id="J_ui-div"] + [id="coin-fly-box" || getChild(0).id="coin-fly-box"] + View >n @[text="开心收下"][clickable=true]',
            '[id="J_ui-div"] > [id="app"] >n [text="恭喜获得奖励"] +n @[text="开心收下"][clickable=true] + TextView',
          ],
        },
        {
          preKeys: [1, 2],
          key: 3,
          name: '恭喜获得奖励-开心收下',
          matches: [
            '[id="J_ui-div"] > [id="app"] >n [text="恭喜获得奖励"] +n @[text="开心收下"][clickable=true] + TextView',
          ],
        },
        {
          key: 4,
          name: '×',
          actionDelay: 5000,
          matches: [
            '[getChild(0).text="开红包抽"] - @TextView[clickable=true] < View <n View < View <n View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '[id="J_ui-div"] + [id="coin-fly-box" || getChild(0).id="coin-fly-box"] + View >n @[text="开心收下"][clickable=true]',
            '[id="J_ui-div"] + [id="coin-fly-box" || getChild(0).id="coin-fly-box"] + View >n [text="可领取"] + @View[clickable=true]',
            '[id="J_ui-div"] > [id="app"] >n [text="恭喜获得奖励"] +n @[text="开心收下"][clickable=true] + TextView',
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
            '[text~="\\\\+[0-9]+g"] < @View[clickable=true] <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '[getChild(0).getChild(2).text="做任务 赚粮食"] +n @View[clickable=true] > TextView',
            '[id="J_ui-div"] > [id="app"] > View > View > @[text="可抽奖"][clickable=true] + [id="J_sign_icon"]',
            '[id="J_ui-div"] > [id="app"] >n View > @View[clickable=true] > [text="可领取"]',
            '[text$="京豆"] < @[desc$="京豆"][clickable=true] <n View < View <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[id="J_ui-div"] > [id="app"] >n @[text^="领"][clickable=true]',
            '[getChild(0).text="开红包抽"] - @TextView[clickable=true] < View <n View < View <n View < WebView < * < [vid="webview"]',
            '@[text="closeButton"][clickable=true] <n View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 27,
          name: '去完成',
          actionDelay: 2000,
          matches: [
            '@[text="去完成"][clickable=true] <n View <n View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text="领取"][clickable=true] <n View < View < View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[text="可领取"] < @View[clickable=true] <n View < View < View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 1,
          name: '领取',
          matches: [
            '@[text="领取"][clickable=true] <n View < View < View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 2,
          name: '可领取',
          matches: [
            '[text="可领取"] < @View[clickable=true] <n View < View < View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
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
            '@[text="领取"][clickable=true] <n View < View < View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
            '[text="可领取"] < @View[clickable=true] <n View < View < View < View < View <n [id="J_GAME_MARKET_POP_SDK"] <n View < [id="app"] < [id="J_ui-div"] < View < WebView < * < [vid="webview"]',
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
            '[text~="浏览完成|正在浏览|浏览页面.*完成任务|浏览.*秒|.*返回.*|京东验证"]',
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
            '[id="taskFloorId"] > [getChild(0).text="赚抽奖次数"] +n [getChild(0).text!~=".*188京豆|.*话费|.*一笔.*"] > @[text="去完成"][clickable=true]',
          ],
          excludeMatches: [
            '[id="popInner"] > [text="75262d7937b06910"] +n @[text^="领取今日现金"][clickable=true]',
            '[getChild(2).text="7d6bb8a04b362178"] + [getChild(0).text^="签到成功"] > @[text="开心收下"][clickable=true]',
          ],
        },
        {
          key: 11,
          matches: [
            '[id="taskFloorId"] > @[text="点击查看更多"][clickable=true]',
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
            '[id="popInner"] > [text="75262d7937b06910"] +n @[text^="领取今日现金"][clickable=true]',
          ],
        },
        {
          key: 1,
          matches: [
            '[getChild(2).text="7d6bb8a04b362178"] + [getChild(0).text^="签到成功"] > @[text="开心收下"][clickable=true]',
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
          matches: [
            '[id="headFloor"] > View > [id="lottieButton"] > @[id="lottieButton"][clickable=true] > [text~="（可抽[1-9][0-9]*次）"]',
          ],
          excludeMatches: [
            '[id="taskFloorId"] > [getChild(0).text="赚抽奖次数"] +n [getChild(0).text!~="额外.*|.*话费|.*一笔.*订单.*"] > @[text="去完成"][clickable=true]',
            '[id="YLBCon"] - View > View > [text="5ab97cb77eab3155"]', //抽奖中...
            '[getChild(2).text="7d6bb8a04b362178"] + [getChild(0).text^="账户成功入账"] > @[text="开心收下"][clickable=true]',
            '@[text="close1_6723ec4261"][clickable=true]',
            '@[id="_sign_poo_10_id"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 1000,
          matches: ['@[text="close1_6723ec4261"][clickable=true]'],
        },
        {
          preKeys: [0],
          key: 2,
          matches: ['@[id="_sign_poo_10_id"][clickable=true]'],
        },
        {
          preKeys: [0, 2],
          key: 3,
          matches: [
            '[getChild(2).text="7d6bb8a04b362178"] + [getChild(0).text^="账户成功入账"] > @[text="开心收下"][clickable=true]',
          ],
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
          key: 33,
          actionDelay: 2000,
          matches: [
            '[id="taskFloorId"] > [text="赚更多现金"] +n [getChild(0).text~="逛.*|去.*"] > @[text="去完成"][clickable=true]',
          ],
        },
        {
          key: 11,
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + [text="提现"]',
          ],
          excludeMatches: [
            '[id="taskFloorId"] > [text="赚更多现金"] +n [getChild(0).text~="逛.*|去.*"] > @[text="去完成"][clickable=true]',
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
          matches: [
            '[text="去打卡"] <n @View[clickable=true] < View + View > [id="lottieButton"] > [id="lottieButton"] > [text~="（可抽0次）"]',
          ],
          excludeMatches: [
            '[text^="今日打卡任务"] +n View > @[text~="去完成|点击签到"][clickable=true]',
          ],
        },
        {
          key: 1,
          matches: [
            '[text^="今日打卡任务"] +n View > @[text="点击签到"][clickable=true]',
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
            '[text^="今日打卡任务"] +n View > @[text="去完成"][clickable=true]',
          ],
          excludeMatches: [
            '[text^="今日打卡任务"] +n View > @[text="点击签到"][clickable=true]',
          ],
        },
        {
          key: 11,
          actionDelay: 5000,
          anyMatches: [
            'TextView + @TextView[clickable=true] + [getChild(0).getChild(0).text="已连续打卡"]',
            '[id="signinPage"] >n @[text="返回"][clickable=true]',
          ],
          excludeMatches: [
            '[text^="今日打卡任务"] +n View > @[text~="去完成|点击签到"][clickable=true]',
          ],
        },
        {
          preKeys: [11],
          key: 12,
          matches: ['@TextView[clickable=true] + [text="签到领现金"]'],
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
          matches: [
            '[text="去完成"] < @[desc="去完成"][clickable=true] <n [getChild(1).text!~="打.*|.*体验.*|完成.*|去.*|通过.*"] <n View < View < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '[text="领奖"] < @[desc="领奖"][clickable=true] <n [getChild(1).text!~="打.*|.*体验.*|完成.*|去.*|通过.*"] < View < View < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@TextView -2 [text="从京东信誉分频道 进游戏"]',
          ],
        },
        {
          key: 11,
          matches: [
            '[text="领奖"] < @[desc="领奖"][clickable=true] <n [getChild(1).text!~="打.*|.*体验.*|完成.*|去.*|通过.*"] < View < View < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
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
          matches: ['@TextView -2 [text="从京东信誉分频道 进游戏"]'],
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
          matches: [
            '@View[width=height][clickable=true] - View < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[desc~="领奖|去完成"][clickable=true] <n [getChild(1).text!~="打.*|.*体验.*|完成.*|去.*|通过.*"] < View < View < View < View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@TextView[clickable=true] - [text="明日0点可领，10点之后慢慢减少"]',
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
            '[text="明日0点领"] - * [text~="([3-9][0-9]{2}|[0-9]{4,})g"]',
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
        },
        {
          key: 1,
          matches: [
            '[text="cae179ab557e2b58"] +n @[text="签到并喂食"][clickable=true]',
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
            '[text="cae179ab557e2b58"] +n [text="签到并喂食"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '恭喜你获得-开心收下',
          matches: [
            '@TextView[clickable=true] - View[clickable=true] - [text~="[0-9]+g"] <n View <n View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
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
            '@TextView[clickable=true] - View[clickable=true] - [text~="[0-9]+g"] <n View <n View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@[text="立即领取"][clickable=true] + TextView',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '立即领取',
          matches: ['@[text="立即领取"][clickable=true] + TextView'],
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
            '@[text="立即领取"][clickable=true] + TextView',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '恭喜获得鹅粮奖励-收下喂鹅-×',
          matches: [
            '@TextView[clickable=true] - View[clickable=true] - [text~="\\\\+[0-9]+g"] <n View <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          name: '恭喜获得鹅粮奖励-收下喂鹅-××',
          position: {
            left: 'width * 0.5',
            top: 'height * 0.8',
          },
          matches: [
            '@TextView[clickable=true] - TextView[clickable=true] < View < View < View  < View < View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] - View[clickable=true] - [text~="\\\\+[0-9]+g"] <n View <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
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
          name: '点我收蛋/兑换额度',
          actionDelay: 2000,
          matches: [
            '[text="点我收蛋"] < @View[clickable=true] <n View <n View < View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '[text="可领取"] - @View[clickable=true] <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '[text="可领取"] - @View[clickable=true] <n View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] - View[clickable=true] - [text~="\\\\+[0-9]+g"] <n View <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] - TextView[clickable=true] < View < View < View  < View < View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] - TextView[text~="（[0-9]s）"] <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@[id="J_airLevel_-"][clickable=true] < Image <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
            '@TextView[clickable=true] - [getChild(0).text~="获得.*"] <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '恭喜获得收蛋奖励-开心收下-×',
          matches: [
            '@TextView[clickable=true] - TextView[text~="（[0-9]s）"] <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          name: '恭喜你，成功收满100个蛋-立即兑换提额机会',
          matches: [
            '@[id="J_airLevel_-"][clickable=true] < Image <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
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
            '[text="关闭"] - @[getChild(0).text="立即领取"][clickable=true] -n [text="赚鹅粮"] <n View < View <n View < View < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '[text~="浏览完成|正在浏览|浏览页面.*完成任务|浏览.*秒|.*返回.*|京东验证"]',
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
          actionDelay: 5000,
          matches: [
            '[text="03e6058058b35dde"] < @View[clickable=true] < View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '[text~="浏览完成|正在浏览|浏览页面.*完成任务|浏览.*秒|.*返回.*|京东验证"]',
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
            '[text="正在浏览"] - [getChild(0).getChild(1).text~="[0-9]+"] < View <n WebView < * < [vid="webview"]',
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
            '[text="正在浏览"] - [getChild(0).getChild(1).text~="[0-9]+"] < View <n WebView < * < [vid="webview"]',
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
            'ListView > View[getChild(1).text!~="领话费|分享.*|.*领取|开.*|.*订单"] > @View[clickable=true] >n [text~="去完成|继续完成"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] -n [text~="再领[0-9]个京豆"]',
            '@TextView[clickable=true] - [text="立即领取"] -n [text~="[0-9]个京豆"]',
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
            '[text="做任务开福袋"] +n View > ListView > View > @View[clickable=true] + [text="待领取"]',
          ],
          excludeMatches: [
            'ListView > View[getChild(1).text!~="领话费|分享.*|.*领取|开.*|.*订单"] > @View[clickable=true] >n [text~="去完成|继续完成"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '恭喜获得-福袋奖励-×',
          matches: [
            '@TextView[clickable=true] <n AlertDialog <n WebView < WebView < [vid="webview"]',
          ],
        },
        {
          key: 2,
          actionDelay: 5000,
          matches: [
            '[text="做任务开福袋"] <<n * @Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          excludeMatches: [
            'ListView > View[getChild(1).text!~="领话费|分享.*|.*领取|开.*|.*订单"] > @View[clickable=true] >n [text~="去完成|继续完成"]',
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
            '[text~="浏览完成|正在浏览|浏览页面.*完成任务|浏览.*秒|.*返回.*|京东验证"]',
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
            '[id="J_ui-load"] + [id="app"] > View > View > [getChild(0).text~="摇黄金 x[1-9]"] + @TextView[clickable=true] + TextView',
          ],
          excludeMatches: [
            '[text="送你1次机会 摇一摇"] +n @TextView[index=parent.childCount.minus(1)][clickable=true]',
            '[getChild(0).text!~="浏览.*|.*看.*"] +2 @[text="去完成"][clickable=true]',
            '[getChild(0).getChild(0).text!~="浏览.*|.*看.*"] + @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 110,
          actionDelay: 2000,
          anyMatches: [
            '[getChild(0).text~="浏览.*|.*看.*"] +2 @[text="去完成"][clickable=true]',
            '[getChild(0).getChild(0).text~="浏览.*|.*看.*"] + @[text="去完成"][clickable=true]',
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
            '[text="送你1次机会 摇一摇"] +n @TextView[index=parent.childCount.minus(1)][clickable=true]',
          ],
        },
        {
          key: 1,
          actionDelay: 2000,
          matches: [
            '[id="J_ui-load"] + [id="app"] > View > View > View > @[text~="摇黄金 x[1-9]"][clickable=true]',
          ],
          excludeMatches: [
            '[getChild(0).text~="浏览.*|.*看.*"] +2 @[text="去完成"][clickable=true]',
            '[getChild(0).getChild(0).text~="浏览.*|.*看.*"] + @[text="去完成"][clickable=true]',
            '[getChild(2).getChild(0).text="开心收下"] + @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[getChild(2).getChild(0).text="开心收下"] + @TextView[clickable=true]',
          ],
        },
        {
          key: 3,
          actionDelay: 5000,
          matches: [
            '[id="J_ui-load"] + [id="app"] > View > View > View > @TextView[clickable=true] + View > View +(-n+3) [text="去完成"]',
          ],
          excludeMatches: [
            '[id="J_ui-load"] + [id="app"] > View > View > View > @[text~="摇黄金 x[1-9]"][clickable=true]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
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
            '[text~="浏览完成|正在浏览|浏览页面.*完成任务|浏览.*秒|.*返回.*|京东验证"]',
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
          anyMatches: [
            '@[text="去完成"][clickable=true] -4 [text!~=".*体验.*|完成.*|.*券|添加.*"] <n View <n View <n View < View < View <n View < WebView < * < [vid="webview"]',
            'TextView[index=parent.childCount.minus(1)] - Image < View < @View[clickable=true] < View <n View <n View < View < View <n View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text="立即开启"][clickable=true] -n TextView[clickable=true] < View',
          ],
        },
        {
          preKeys: [140],
          key: 1,
          matches: [
            '@[text="立即开启"][clickable=true] -n TextView[clickable=true] < View',
          ],
        },
        {
          preKeys: [140],
          key: 3,
          matches: [
            'TextView <n @View[clickable=true] < View <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          actionDelay: 5000,
          matches: [
            '[text="back"] < @View[clickable=true] < View <n View <n View <n View < [id="app"] < View < WebView < * < [vid="webview"]',
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
            '[desc="拆红包" || text="拆红包"] + [text~="可拆[0-9]+次"] < View < @View[clickable=true] <n View <n View <n View < [id="lgFloorWrap"] < [id="lego-app"] < View < View < WebView < * < [vid="webview"]',
          ],
          excludeMatches: [
            '@[text="03e60180185ad347"][clickable=true] < View < View < View <n View < WebView < * < [vid="webview"]',
            '@[text="鹅手指引"][clickable=true] -n Image[clickable=true] < View',
            '@[text="关闭弹窗"][clickable=true] -n [text="恭喜获得"] < [text="恭喜获得"]',
            '@[text="关闭弹窗"][clickable=true] -n [text="完成任务得金币！"] < [text="完成任务得金币"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          name: '立即抽奖',
          matches: [
            '@[text="鹅手指引"][clickable=true] -n Image[clickable=true] < View',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          name: '恭喜获得-×',
          matches: [
            '@[text="关闭弹窗"][clickable=true] -n [text="恭喜获得"] < [text="恭喜获得"]',
          ],
        },
        {
          key: 3,
          name: '完成任务得奖励-×',
          matches: [
            '@[text="关闭弹窗"][clickable=true] -n [text="完成任务得金币！"] < [text="完成任务得金币"]',
          ],
        },
      ],
    },
    {
      key: 142,
      name: '打白条-兑换好礼-限时抢',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="去兑换"][clickable=true] - [text="5000"] <n View <n View <n View < View < View <n View < WebView < * < [vid="webview"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'Dialog > [text="关闭弹窗"] - View > @[text="确认兑换"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[text="关闭弹窗"][clickable=true] -n [text="兑换成功"] < [text="兑换成功"]',
          ],
        },
      ],
    },
    {
      key: 143,
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
            'Dialog > [text="关闭弹窗"] - View > @[text="确认兑换"][clickable=true]',
            '@[text="关闭弹窗"][clickable=true] -n [text="兑换成功"] < [text="兑换成功"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'Dialog > [text="关闭弹窗"] - View > @[text="确认兑换"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[text="关闭弹窗"][clickable=true] -n [text="兑换成功"] < [text="兑换成功"]',
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
          matches: [
            '[text="我的钱"] < * < * < * - @ViewGroup[clickable=true] < * +n * [text="53/53"]',
          ],
          excludeMatches: [
            '[text~="浏览完成|正在浏览|浏览页面.*完成任务|.*返回.*|.*继续.*|.*金币获取加倍中.*"]',
          ],
        },
        {
          key: 200,
          actionDelay: 2000,
          matches: [
            'RecyclerView > FrameLayout > ViewGroup > ViewGroup > [getChild(1).getChild(0).text!~="买一笔黄金|社区-稳健万元|今日赠送彩票券|去移动领话费"] + @ViewGroup[clickable=true] > [text="去完成"]',
          ],
        },
        {
          key: 11,
          actionDelay: 5000,
          matches: [
            '@ImageView[clickable=true] < ViewGroup - ImageView < ViewGroup < ViewGroup < FrameLayout[parent=null]',
          ],
          excludeMatches: [
            'RecyclerView > FrameLayout > ViewGroup > ViewGroup > [getChild(1).getChild(0).text!~="买一笔黄金|社区-稳健万元|今日赠送彩票券|去移动领话费"] + @ViewGroup[clickable=true] > [text="去完成"]',
          ],
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
            '@[vid="fl_operating_group"] >n [text~="([0-9]|[1-4][0-9]|5[0-2])/53"]',
          ],
          excludeMatches: [
            '[text~="浏览完成|正在浏览|浏览页面.*完成任务|.*返回.*|.*继续.*|.*金币获取加倍中.*"]',
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
        {
          key: 2,
          actionDelay: 5000,
          matches: [
            '@ImageView[clickable=true] < ViewGroup < ViewGroup <n ViewGroup * [text="53/53"]',
          ],
          excludeMatches: [
            '[text~="浏览完成|正在浏览|浏览页面.*完成任务|.*返回.*|.*继续.*|.*金币获取加倍中.*"]',
          ],
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
            '[id="bbf-page"] >n [getChild(1).text~="现金0.0[0-9]元"] + View > @[text="去完成"][clickable=true]',
          ],
        },
        {
          key: 11,
          actionDelay: 2000,
          matches: [
            '[id="bbf-page"] >n @[id^="bubble-ci-"][clickable=true] > View > [text="余额"]',
          ],
          excludeMatches: [
            '[id="bbf-page"] >n [getChild(1).text~="现金0.0[0-9]元"] + View > @[text="去完成"][clickable=true]',
          ],
        },
        {
          key: 12,
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] < [vid="top_nav_bar"] < [vid="rl_top_nav_bar"] <n [vid="ll_top_nav_bar"] <n [vid="web_show_root"] >n * > [text="京东笔笔返"]',
          ],
          excludeMatches: [
            '[id="bbf-page"] >n [getChild(1).text~="现金0.0[0-9]元"] + View > @[text="去完成"][clickable=true]',
            '[id="bbf-page"] >n @[id^="bubble-ci-"][clickable=true] > View > [text="余额"]',
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
