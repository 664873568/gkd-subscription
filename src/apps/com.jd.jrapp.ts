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
      key: 6,
      name: '浏览完成false',
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '[text="浏览完成"] < @View[clickable=false] - * [text="ff776b55ee07c915"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //赚京豆-玩雀神来也10秒
    {
      key: 7,
      name: '浏览完成true',
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          anyMatches: [
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"] <<n * @View[clickable=true] > [text="dancing"]',
            '[text="浏览完成"] < @View[clickable=true] - * [text="ff776b55ee07c915"] <<n * [vid="common_webview_navbar_left"] > @Button[clickable=true]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //逛测财运智能体
    //养大鹅-逛京东特价-逛超市抢鸡蛋-逛全球购好物-逛家电家居频道-逛测财运智能体
    //签到领现金-赚抽奖次数-浏览财富会员领权益-去逛手机数码馆
    {
      key: 8,
      name: 'TextView×',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 15000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] < View < View < View < [id="J_babelOptPage"]',
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
    //22.12.26-26.12.31 养猪猪
    //https://u.jr.jd.com/uc-fe-wxgrowing/cloudpig/index/
    {
      key: 20,
      name: '养猪猪-产粮机',
      matchRoot: true,
      actionMaximum: 1,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[id="J_ui-div"] > [id="app"] > View > View > View > [text="createFood"] + View >n @TextView[clickable=true] + [text="10g"] + [text="createAwardSignfull"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 21,
      name: '养猪猪-桌面组件',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[id="J_ui-div"] > [id="app"] > View > View > View > @[desc="1京豆"][clickable=true] > [text="1京豆"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[id="J_ui-div"] > [id="app"] > View > View > View > View > [text="组件登录有礼"] +n @[text="领取并喂猪"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 2000,
          matches: [
            '[id="J_ui-div"] > [id="app"] > View > View > View > [getChild(5).text="明日再来"] + @TextView[clickable=true]',
          ],
        },
      ],
    },
    //做任务 赚粮食
    {
      key: 22,
      name: '养猪猪-去完成',
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: [
        '.bm.common.web.ui.WebActivity',
        '.bm.common.container.ui.BaseContainerActivity',
      ],
      rules: [
        {
          key: 22,
          excludeMatches: [
            'View > @[text="领奖"][clickable=true]',
            '[text="恭喜获得浏览奖励"] +n @[text="继续浏览"][clickable=true] + TextView',
          ],
          actionDelay: 2000,
          matches: [
            '[getChild(0).getChild(2).text="做任务 赚粮食"] + View > View > View[getChild(1).text!~="领.*|.*话费.*|玩.*|.*订单|购券.*|.*卡|去看.*"] > @[text="去完成"][clickable=true]',
          ],
        },
        {
          key: 23,
          excludeMatches: [
            'View > @[text="领奖"][clickable=true]',
          ],
          matches: [
            '[text="恭喜获得浏览奖励"] +n @[text="继续浏览"][clickable=true] + TextView',
          ],
        },
        {
          preKeys: [22,23],
          key: 2,
          excludeMatches: ['[text*="浏览"]', '[text="返回领奖"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [22,23],
          key: 3,
          matches: [
            '[text~="返回签到|返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
        },
        {
          preKeys: [22,23],
          key: 4,
          action: 'back',
          matches: [
            '@[getChild(0).text="浏览完成"][clickable=false] - [getChild(1).getChild(0).text="ff776b55ee07c915"]',
          ],
        },
        {
          preKeys: [22,23],
          key: 5,
          matches: [
            '@[text="返回领奖"][clickable=true] <<n * - * ViewGroup + ImageView[clickable=true] + ImageView', //京东保
          ],
        },
        {
          preKeys: [22,23],
          key: 6,
          actionDelay: 5000,
          matches: [
            '@View[clickable=true] > [text="03e6058058b35dde"]', //天天来提额
          ],
        },
        {
          key: 7,
          anyMatches: [
            'View > @[text="领奖"][clickable=true]',
          ],
        },
      ],
    },
    {
      scopeKeys: [22],
      key: 23,
      name: '养猪猪-去完成-游戏',
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.landscape.WebLandscapeActivity'],
      rules: [
        {
          preKeys: [22,23],
          key: 0,
          action: 'back',
          matches: [
            '@[getChild(0).text="浏览完成"][clickable=false] - [getChild(1).getChild(0).text="ff776b55ee07c915"]',
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
      scopeKeys: [22],
      key: 24,
      name: '养猪猪-去完成-击杀1条鱼',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.landscape.WebLandscapeActivity'],
      rules: [
        {
          preKeys: [22,0],
          key: 0,
          action: 'longClickCenter',
          actionCd: 500,
          actionMaximum: 20,
          matches: ['@[id="GameCanvas"] < [id="Cocos2dGameContainer"]'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="退出"][clickable=true]'],
        },
      ],
    },
    //23.08.01-29.12.31 签到领现金
    //https://member.jr.jd.com/activity/sign/v5/indexV2.html
    //https://member.jr.jd.com/activity/new-sign-in/home/
    //连续打卡白拿好礼
    {
      key: 30,
      name: '签到领现金-今日打卡任务-每日点签',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[id="headFloor"] > View > @View[clickable=true] > [text="去打卡"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text^="今日打卡任务"] +n View > [text="每日点签"] + @[text="点击签到"][clickable=true]',
          ],
        },
        {
          key: 2,
          excludeMatches: [
            '[text^="今日打卡任务"] +n View > TextView + @[text~="去完成|点击签到"][clickable=true]',
          ],
          matches: [
            '@TextView[clickable=true] + [getChild(0).getChild(0).desc="已连续打卡"]',
          ],
        },
      ],
    },
    //浏览精选好物
    //查看精彩内容10s
    {
      key: 31,
      name: '签到领现金-今日打卡任务-去完成',
      matchRoot: true,
      resetMatch: 'activity',
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
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          excludeMatches: ['[text*="浏览"]', '[text="返回领奖"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0],
          key: 2,
          matches: [
            '[text="返回签到"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.container.ui.BaseContainerActivity'],
        },
        {
          preKeys: [0],
          key: 3,
          matches: [
            '@[text="返回领奖"][clickable=true] <<n * -n * [text="省钱"] - * ImageView[clickable=true]',
          ],
          activityIds: ['.bm.jrv8.JRCustomDyPageActivity'],
        },
      ],
    },
    //赚抽奖次数
    {
      key: 32,
      name: '签到领现金-赚抽奖次数-去完成',
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[id="taskFloorId"] > @[text="点击查看更多"][clickable=true]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          key: 1,
          actionDelay: 2000,
          matches: [
            '[id="taskFloorId"] > [getChild(0).text="赚抽奖次数"] +n [getChild(0).text!~="额外.*|.*话费|.*一笔.*订单.*"] > @[text="去完成"][clickable=true]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [1],
          key: 2,
          excludeMatches: ['[text*="浏览"]', '[text="返回领奖"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [1],
          key: 3,
          action: 'back',
          matches: [
            '[text="继续浏览下一个"] - [text="浏览完成"] < View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [1],
          key: 4,
          matches: [
            '[text="返回签到页"] - [text="浏览完成"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [1],
          key: 5,
          matches: [
            '@[vid="back_button"][clickable=true] -n * [text="继续做任务"]', //看视频最高赚10元
          ],
          activityIds: ['.bm.sh.jm.video.ui.VibratoActivity'],
        },
        {
          preKeys: [1],
          key: 6,
          actionDelay: 5000,
          matches: [
            '@[vid="manto_actionbar_home"][clickable=true] <<n * - * [text="京民通"]',
          ],
          activityIds: ['com.jingdong.manto.ui.MantoActivitySingleProcess'],
        },
      ],
    },
    {
      key: 33,
      name: '签到领现金-每日抽提现-立即抽提现',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
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
      ],
    },
    {
      key: 34,
      name: '签到领现金-赚更多现金-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches: [
            '[id="headFloor"] > View > [getChild(1).getChild(0).text="（可抽0次）"] -n View > View > @[text="去提现"]',
          ],
        },
        {
          key: 1,
          actionDelay: 2000,
          matches: [
            '[id="taskFloorId"] > [text="赚更多现金"] +n [getChild(0).text~="逛.*|去.*"] > @[text="去完成"][clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          excludeMatches: ['[text*="浏览"]', '[text="返回领奖"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
      ],
    },
    //24.04.22-25.12.31 做任务 领京豆|赚京豆-做任务领京豆二级页
    //https://member.jr.jd.com/member/integral-mall/mission/
    //https://member.jr.jd.com/member/coinQuest/coin/
    {
      key: 40,
      name: '赚京豆-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
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
          excludeMatches: ['[text*="浏览"]', '[text="返回领奖"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [40],
      key: 41,
      name: '赚京豆-去完成-做任务-成功喂猪或浇水1次',
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
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.landscape.WebLandscapeActivity'],
      rules: [
        {
          preKeys: [40, 0],
          key: 0,
          action: 'longClickCenter',
          actionCd: 500,
          actionMaximum: 100,
          matches: ['@[id="GameCanvas"] < [id="Cocos2dGameContainer"]'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="退出"][clickable=true]'],
        },
      ],
    },
    //24.08.20-26.12.31 养大鹅
    //https://u.jr.jd.com/uc-fe-wxgrowing/cloudgoose/index/
    {
      key: 50,
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
            '[text="cae179ab557e2b58"] +n [text="签到并喂食"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          matches: [
            '@TextView[clickable=true] < View +n View > View > [text="可领取"] + [desc="桌面小组件"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[text~="[0-9]+g"] + View + @TextView[clickable=true]', //恭喜你获得-开心收下
          ],
        },
      ],
    },
    {
      key: 51,
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
            'View +n View > @View[clickable=true] > [text="可领取"] + [desc="桌面小组件"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="立即领取"][clickable=true] + TextView'],
        },
      ],
    },
    {
      key: 52,
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
            '[getChild(0).getChild(0).desc="桌面小组件"] +n View > @View[clickable=true] + [text="可领取"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[getChild(2).text="明日0点领"] + * @TextView[clickable=true]', //恭喜获得鹅粮奖励-收下喂鹅
          ],
        },
      ],
    },
    {
      key: 53,
      name: '养大鹅-天天提额',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(0).getChild(2).text="明日0点领"] -n View > View > View > @View[clickable=true] > [text="点我收蛋"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'TextView[text~="（[0-9]s）"] + @TextView[clickable=true]', //恭喜获得收蛋奖励-开心收下
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: ['View > TextView + View > @[text="领"][clickable=true]'],
        },
      ],
    },
    //做任务 赚鹅粮
    {
      key: 54,
      name: '养大鹅-去完成',
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          key: 54,
          excludeMatches: ['@[desc="领奖"][clickable=true] > [text="领奖"]'],
          actionDelay: 2000,
          matches: [
            '[getChild(1).text!~="打.*|.*体验.*|完成.*|去.*|通过.*"] > @[desc="去完成"][clickable=true] > [text="去完成"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [54],
          key: 1,
          excludeMatches: ['[text*="浏览"]', '[text="返回领奖"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [54],
          key: 2,
          matches: [
            '@[vid="back_button"][clickable=true] -n * [text="返回领奖"]', //看视频至高领10元
          ],
          activityIds: ['.bm.sh.jm.video.ui.VibratoActivity'],
        },
        {
          preKeys: [54],
          key: 3,
          action: 'back',
          actionDelay: 5000,
          matches: [
            'TextView[clickable=true] - @TextView[clickable=true] <<n [text="京东秒杀"]', //逛京东秒杀
          ],
          activityIds: ['.bm.common.container.ui.BaseContainerActivity'],
        },
        {
          key: 4,
          matches: ['@[desc="领奖"][clickable=true] > [text="领奖"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      scopeKeys: [54],
      key: 55,
      name: '养大鹅-去完成-从京东信誉分频道进入',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          preKeys: [54],
          key: 55,
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
            'View > [text="京东信誉分专属福利"] + @[text="领"][clickable=true]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          action: 'back',
          matches: ['@[text="551d38b59d892f29"][clickable=true]'],
        },
        {
          preKeys: [3],
          key: 4,
          matches: [
            'View > [text="京东信誉分专属福利"] + @[text="领"][clickable=true]',
          ],
        },
      ],
    },
    {
      scopeKeys: [54],
      key: 56,
      name: '养大鹅-去完成-开炮击杀任意一条鱼',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.landscape.WebLandscapeActivity'],
      rules: [
        {
          preKeys: [54, 56],
          key: 56,
          action: 'longClickCenter',
          actionCd: 500,
          actionMaximum: 20,
          matches: ['@[id="GameCanvas"] < [id="Cocos2dGameContainer"]'],
        },
        {
          preKeys: [56],
          key: 1,
          matches: ['@[text="退出"][clickable=true]'],
        },
      ],
    },
    {
      key: 57,
      name: '养大鹅-喂鹅翻倍-10次',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(0).getChild(0).getChild(1).text="打一笔白条≥10元"] + @View[clickable=true]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 1,
          actionDelay: 3000,
          actionMaximum: 5,
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
          preKeys: [2],
          key: 3,
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
      key: 71,
      name: '天天领红包-去完成',
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[getChild(0).text="更多优惠"] +n @[getChild(3).text!~="去移动领话费"][clickable=true] > [text="去完成"]',
          ],
          activityIds: ['.bm.common.container.ui.BaseContainerActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          excludeMatches: ['[text*="浏览"]', '[text="返回领奖"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //25.12.29-26.12.31 天天赚钱 领京豆|天天赚京豆
    //https://show.jd.com/m/RkO0AE9rKrYy6ZDd/?pageKey=RkO0AE9rKrYy6ZDd
    //做任务开福袋
    //做任务赚京豆
    {
      key: 80,
      name: '天天赚京豆-去完成-做任务/浏览App',
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            'ListView > View[getChild(1).text!~="领话费|分享.*|.*领取|开.*|.*订单"] > @View[clickable=true] > [text~="去完成|继续完成"]',
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
          excludeMatches: ['[text*="浏览"]', '[text="返回领奖"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          key: 3,
          action: 'back',
          actionDelay: 5000,
          matches: [
            '[text="限时福利"] >n @[text="back"][clickable=true] + [text="限时福利"]', //京东健康
          ],
        },
        {
          preKeys: [0],
          key: 4,
          matches: [
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]', //浏览储蓄金频道
          ],
        },
        {
          key: 5,
          anyMatches: [
            '@TextView[clickable=true] -n [text~="再领[0-9]个京豆"]', //任务已完成 恭喜获得
            '@TextView[clickable=true] - [text="立即领取"] -n [text~="[0-9]个京豆"]', //任务未完成 继续赚奖励
          ],
        },
      ],
    },
    {
      key: 81,
      name: '天天赚京豆-去完成-浏览App-首页-做任务领京豆',
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
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 90,
          excludeMatches: ['@[text="开心收下"][clickable=true]'],
          actionDelay: 2000,
          matches: [
            '[getChild(0).text~="摇黄金 x[1-9]"] + @TextView[clickable=true] + TextView',
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
          excludeMatches: ['[text*="浏览"]', '[text="返回领奖"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
        },
        {
          preKeys: [1],
          key: 3,
          matches: [
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]', //浏览帅哥美女向前冲-浏览京东手机馆
          ],
        },
        {
          key: 4,
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
          preKeys: [4,1],
          key: 1,
          matches: ['@[text~="摇黄金 x[2-9]"][clickable=true]'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: ['@[text="开心收下"][clickable=true]'],
        },
      ],
    },
    //26.12.31 看视频 赚现金
    //https://u.jr.jd.com/downloadApp/index.html?jumpUrl=https://content.jr.jd.com/shareProject/shortVideo/vertical/index.html?contentId=824242245632133120
    {
      key: 100,
      name: '看视频 赚现金-上滑',
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
          excludeMatches: ['[text*="浏览"]', '[text="返回领奖"]'],
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
      matchRoot: true,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            'FrameLayout >n [getChild(1).getChild(0).text!~="买一笔黄金|社区-稳健万元|今日赠送彩票券"] + @ViewGroup[clickable=true] > [text="去完成"]',
          ],
          activityIds: [
            '.bm.common.web.ui.WebActivity',
            '.bm.mainbox.main.MainActivity',
            '.bm.sh.jm.video.ui.VibratoActivity',
            '.bm.common.container.ui.BaseContainerActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          excludeMatches: ['[text*="浏览"]', '[text="返回领奖"]'],
          actionDelay: 5000,
          matches: [
            '@Button[clickable=true] < [vid="common_webview_navbar_left"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0],
          key: 2,
          anyMatches: [
            '[text="返回领奖"] < @View[clickable=true] - * [text="readMissionDown"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0],
          key: 3,
          actionDelay: 5000,
          matches: [
            '[text="圈子"] >n @TextView[clickable=true] + TextView + Image + View', //浏览基金圈 结交同路人
          ],
          activityIds: ['.bm.common.container.ui.BaseContainerActivity'],
        },
        {
          preKeys: [0],
          key: 4,
          matches: [
            '@[text="返回领奖"][clickable=true] < ViewGroup + ViewGroup + ImageView + ViewGroup', //看收藏大牛学知识
          ],
          activityIds: ['.bm.sh.jm.video.ui.VibratoActivity'],
        },
        {
          preKeys: [0],
          key: 5,
          actionDelay: 5000,
          matches: [
            '[text="黄金频道页"] >n @TextView[clickable=true] + [text="139b35d682d5bb6e"]', //逛一逛黄金频道
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      scopeKeys: [101],
      key: 102,
      name: '看视频 赚现金-去完成-养大鹅1分兑好礼',
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
            '@Button[clickable=true] < [vid="common_webview_navbar_left"] + ImageView + [vid="common_webview_navbar_right"]',
          ],
        },
      ],
    },
    {
      scopeKeys: [101],
      key: 103,
      name: '看视频 赚现金-去完成-成功喂一次猪',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          preKeys: [0],
          key: 103,
          matches: [
            '[id="J_ui-div"] > [id="app"] > View > View > View > @View[clickable=true] > [text="喂食10次"]',
          ],
        },
        {
          preKeys: [103],
          key: 1,
          actionDelay: 5000,
          matches: [
            '[id="J_ui-div"] > [id="app"] > View > @View[clickable=true] > [text="back"]',
          ],
        },
      ],
    },
    //26.07.01-26.09.30 机构福利-财宝分福利
    //https://show.jd.com/m/De5VMnmwbxY2Pyk3/?pageKey=De5VMnmwbxY2Pyk3
    {
      key: 110,
      name: '做任务赚财宝分-加自选',
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@Image[clickable=true] -n [text="1个财宝分"] - [text^="加自选"] < View',
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
      key: 111,
      name: '做任务赚财宝分-浏览',
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['.bm.common.web.ui.WebActivity'],
      rules: [
        {
          key: 0,
          excludeMatches: [
            '@Image[clickable=true] -n [text="1个财宝分"] - [text^="加自选"] < View',
          ],
          actionDelay: 2000,
          matches: [
            '@Image[clickable=true] -n [text="1个财宝分"] - [text^="浏览"] < View',
          ],
        },
        {
          preKeys: [0, 1],
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
          actionCd: 5000,
          actionMaximum: 5,
          matches: ['@[vid="web_all"]'],
        },
        {
          preKeys: [1],
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
