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
          action: 'back',
          actionDelay: 3000,
          matches: [
            '@[vid="common_webview_navbar_left"] <<n * [text^="正在跳转"]',
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
          action: 'back',
          actionDelay: 3000,
          matches: [
            '@[vid="common_webview_navbar_left"] <<n * [text^="跳转中"]',
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
          action: 'back',
          matches: [
            '@Button < [vid="common_webview_navbar_left"] + [text="商品详情"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '京东秒杀-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: [
            '@[id="signView_main_portal"] <<n [text="京东秒杀"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //
    {
      key: 6,
      name: '继续浏览',
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
    {
      key: 7,
      name: '返回领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 25000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 1000,
          anyMatches: [
            '@View + [id="fundCompSuite"] <<n [text="15理财日"]'
            '@[text="返回领奖"] <<n * [text="readMissionDown"]',
            '@[text="浏览完成"] <<n * [text="readMissionArrow2"]',
            '@[text="浏览完成"] <<n * [text="ff776b55ee07c915"]',
            '@[text="返回领奖"] <<n * [vid="fragment_container"]',
            '@[text="返回领奖"] < ViewGroup + ImageView + ViewGroup',
            '@[text="返回领奖"] < ViewGroup + ViewGroup + ImageView + ViewGroup', //@[text="返回领奖"] <<n * [vid="back_button"]
          ],
          activityIds: [
            '.bm.common.web.ui.WebActivity',
            '.bm.common.container.ui.BaseContainerActivity',
            '.bm.jrv8.JRCustomDyPageActivity',
            '.bm.sh.jm.video.ui.VibratoActivity',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '继续浏览-返回领奖',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 25000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@[text="继续浏览"] -2 [text="恭喜获得浏览奖励"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          action: 'back',
          actionDelay: 2000,
          anyMatches: [
            '@View + [id="fundCompSuite"] <<n [text="15理财日"]'
            '@[text="返回领奖"] <<n * [text="readMissionDown"]',
            '@[text="浏览完成"] <<n * [text="readMissionArrow2"]',
            '@[text="浏览完成"] <<n * [text="ff776b55ee07c915"]',
            '@[text="返回领奖"] <<n * [vid="fragment_container"]',
            '@[text="返回领奖"] < ViewGroup + ImageView + ViewGroup',
            '@[text="返回领奖"] < ViewGroup + ViewGroup + ImageView + ViewGroup', //@[text="返回领奖"] <<n * [vid="back_button"]
          ],
          activityIds: [
            '.bm.common.web.ui.WebActivity',
            '.bm.common.container.ui.BaseContainerActivity',
            '.bm.jrv8.JRCustomDyPageActivity',
            '.bm.sh.jm.video.ui.VibratoActivity',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '返回领奖-继续浏览',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 25000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          action: 'back',
          actionDelay: 2000,
          anyMatches: [
            '@View + [id="fundCompSuite"] <<n [text="15理财日"]'
            '@[text="返回领奖"] <<n * [text="readMissionDown"]',
            '@[text="浏览完成"] <<n * [text="readMissionArrow2"]',
            '@[text="浏览完成"] <<n * [text="ff776b55ee07c915"]',
            '@[text="返回领奖"] <<n * [vid="fragment_container"]',
            '@[text="返回领奖"] < ViewGroup + ImageView + ViewGroup',
            '@[text="返回领奖"] < ViewGroup + ViewGroup + ImageView + ViewGroup', //@[text="返回领奖"] <<n * [vid="back_button"]
          ],
          activityIds: [
            '.bm.common.web.ui.WebActivity',
            '.bm.common.container.ui.BaseContainerActivity',
            '.bm.jrv8.JRCustomDyPageActivity',
            '.bm.sh.jm.video.ui.VibratoActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="继续浏览"] -2 [text="恭喜获得浏览奖励"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //
    {
      key: 10,
      name: '养大鹅-天天来提额',
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
      key: 11,
      name: '签到领现金-京民通',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          matches: ['@[vid="manto_actionbar_home"] <<n * [text="京民通"]'],
          activityIds: ['com.jingdong.manto.ui.MantoActivitySingleProcess'],
        },
      ],
    },
    {
      key: 12,
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
    //浏览APP任务
    {
      key: 20,
      name: '去玩游戏领大奖-<',
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
      key: 21,
      name: '去APP完成任务-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 1000,
          matches: ['@[text$="完成任务"] <<n * [text="bottom.21109d9b"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 22,
      name: '任务完成-<',
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
      key: 23,
      name: '此功能需访问飞猪旅行APP-<',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 3000,
          matches: [
            '@[vid="common_webview_navbar_left"] <<n * [text="此功能需访问飞猪旅行APP"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 24,
      name: '打开飞猪',
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
      key: 25,
      name: '任务已完成-恭喜获得',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@TextView -2 [text="再领1京豆"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    //机构福利
    {
      key: 30,
      name: '做任务赚财宝分',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: ['@Image[height=99&&width=258] -2 [text$="财宝分"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0],
          key: 1,
          matches: ['@[text="ce6aa1713606b4c1"] + [text="加自选"]'],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[text="HPmi0zAOZAAAAAElFTkSuQmCC"] + [text="已添加到自选"]',
          ],
          activityIds: ['.bm.common.web.ui.WebActivity'],
        },
      ],
    },
  ],
});
