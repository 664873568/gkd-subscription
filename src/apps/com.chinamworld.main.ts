import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.main',
  name: '中国建设银行',
  groups: [
    //任务中心
    {
      key: 0,
      name: '任务中心-签到有礼',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@[desc="立即签到 按钮"][clickable=true] -n [desc="签到有礼楼层"] <n [id="scroll"] <n [id="app"] < WebView < WebView < [vid="page_running_vg_webViewFrame"]',
          ],
        },
        {
          preKeys: [0, 2],
          key: 1,
          matches: [
            'TextView[index=parent.childCount.minus(1)] -n [desc="签到有礼楼层"] <n [id="scroll"] <n [id="app"] < WebView < WebView < [vid="page_running_vg_webViewFrame"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          actionDelay: 2000,
          matches: [
            '@[desc="关闭 按钮"][clickable=true] <n View < View < View < [id="scroll"] <n [id="app"] < WebView < WebView < [vid="page_running_vg_webViewFrame"]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '日常任务-去完成',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '@[text="去完成"][clickable=true] < View < View -(1,3) TextView[text~="查看.*|了解.*"] -n [desc="精选任务楼层"] < [id="Normaltask"] <n [id="scroll"] <n [id="app"] < WebView < WebView < [vid="page_running_vg_webViewFrame"]',
          ],
          excludeMatches: [
            '@[desc="立即签到 按钮"][clickable=true] -n [desc="签到有礼楼层"] <n [id="scroll"] <n [id="app"] < WebView < WebView < [vid="page_running_vg_webViewFrame"]',
            'TextView[index=parent.childCount.minus(1)] -n [desc="签到有礼楼层"] <n [id="scroll"] <n [id="app"] < WebView < WebView < [vid="page_running_vg_webViewFrame"]',
            '@[desc="关闭 按钮"][clickable=true] <n View < View < View < [id="scroll"] <n [id="app"] < WebView < WebView < [vid="page_running_vg_webViewFrame"]',
          ],
          activityIds: [
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="地理位置信息授权"][vid="tv_dlg_title"] +n * > [text="允许"][vid="dlg_right_tv"]',
          ],
          activityIds: [
            'com.ccb.framework.ui.widget.webview.CcbWebViewActivity',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[desc~="关闭|返回"][vid="web_back"][clickable=true] < [vid="web_title_container"]',
          ],
          activityIds: [
            'com.ccb.framework.ui.widget.webview.CcbWebViewActivity',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          matches: ['Image < @View[clickable=true] + [text="速盈"]'],
          activityIds: [
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
          ],
        },
      ],
    },
    //热门活动
    {
      key: 10,
      name: '热门活动-公告-×',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '[id="app"] >n View[getChild(0).name$="ImageButton"] + @TextView[clickable=true]',
            '[id="app"] >n [text="公告"] + @TextView[clickable=true] +n TextView[clickable=true]',
            '[id="app"] + View > TextView + View > View[getChild(0).name$="TextView"] + @ImageButton[clickable=true]',
          ],
          activityIds: [
            'com.ccb.framework.ui.widget.webview.CcbWebViewActivity',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '热门活动-签到',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.ccb.framework.ui.widget.webview.CcbWebViewActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="立即签到"][clickable=true] -n ImageButton < View < View < View < View <n View < [id="app"] < View < WebView < WebView < [vid="web_container"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@TextView[clickable=true] - [getChild(0).text~="已连续签到[0-9]天"] -n ImageButton < View < View < View < View <n View < [id="app"] < View < WebView < WebView < [vid="web_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          matches: [
            '[text^="浏览"] < View < @View[clickable=true] -n ImageButton < View < View < View < View <n View < [id="app"] < View < WebView < WebView < [vid="web_container"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          actionDelay: 5000,
          matches: [
            '@[desc~="关闭|返回"][vid="web_back"][clickable=true] < [vid="web_title_container"]',
          ],
        },
        {
          preKeys: [0, 3],
          key: 4,
          matches: [
            '@[text^="已完成 浏览"][clickable=true] -n ImageButton < View < View < View < View <n View < [id="app"] < View < WebView < WebView < [vid="web_container"]',
          ],
        },
        {
          preKeys: [4],
          key: 5,
          matches: [
            '@[text="立即领取"][clickable=true] <n View <n AlertDialog -n [id="app"] < View < WebView < WebView < [vid="web_container"]',
          ],
        },
        {
          preKeys: [5],
          key: 6,
          matches: [
            '@TextView[clickable=true] - [text="已领奖"] -n ImageButton < View < View < View < View <n View < [id="app"] < View < WebView < WebView < [vid="web_container"]',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '热门活动-抽奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.ccb.framework.ui.widget.webview.CcbWebViewActivity'],
      rules: [
        {
          preKeys: [1],
          key: 0,
          matches: [
            '[id="app"] > View > View > @View[clickable=true] > [desc="骰子按钮"]',
          ],
          excludeMatches: [
            'ImageButton +n @[text="立即签到"][clickable=true] + TextView',
            'ImageButton +n [getChild(0).text~="已连续签到[0-9]天"] + @TextView[clickable=true]',
            '[id="app"] >n [getChild(0).text="查看奖励"] + @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[id="app"] >n [getChild(0).text="查看奖励"] + @TextView[clickable=true]',
          ],
        },
      ],
    },
    //低碳生活
    {
      key: 20,
      name: '低碳生活-×',
      forcedTime: 60000,
      matchRoot: true,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@TextView[clickable=true] - View < View - TextView < View <n View <n [id="app"] < WebView < WebView < [vid="web_container"]',
          ],
          activityIds: [
            'com.ccb.framework.ui.widget.webview.CcbWebViewActivity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '低碳生活-一键收取',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="oneKey"][clickable=true] <n [id="app"] < WebView < WebView < [vid="web_container"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] - View < View - TextView < View <n View <n [id="app"] < WebView < WebView < [vid="web_container"]',
          ],
          activityIds: [
            'com.ccb.framework.ui.widget.webview.CcbWebViewActivity',
          ],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[desc="关闭"][vid="close"][clickable=true]'],
          activityIds: ['com.ccb.start.view.startdialog.StartDialogActivity'],
        },
      ],
    },
  ],
});
