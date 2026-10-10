import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.main',
  name: '中国建设银行',
  groups: [
    //任务中心
    {
      key: 0,
      name: '任务中心-签到有礼',
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
            '[desc="签到有礼楼层"] +n @[desc="立即签到 按钮"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 2000,
          matches: [
            '[getChild(childCount.minus(1)).text="立即使用"] + @[desc="关闭 按钮"][clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 2,
          excludeMatches: [
            '[getChild(childCount.minus(1)).text="立即使用"] + @[desc="关闭 按钮"][clickable=true]',
          ],
          matches: [
            '[desc="签到有礼楼层"] +n @View[clickable=true] > TextView[index=parent.childCount.minus(1)]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: ['@[desc="关闭 按钮"][clickable=true] +n [text="立即使用"]'],
        },
      ],
    },
    {
      key: 1,
      name: '日常任务-去完成',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      rules: [
        {
          key: 0,
          matches: [
            '[id="Normaltask"] > [desc="精选任务楼层"] +n [text~="查看.*|了解.*"] +(1,2,3) View > View > @[text="去完成"][clickable=true]',
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
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
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
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.ccb.framework.ui.widget.webview.CcbWebViewActivity'],
      rules: [
        {
          key: 0,
          matches: [
            'ImageButton +n @[text="立即签到"][clickable=true] + TextView',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'ImageButton +n [getChild(0).text~="已连续签到[0-9]天"] + @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            'ImageButton +n @[text^="已完成 浏览"][clickable=true] + TextView',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            'AlertDialog > [text="领取奖品确认身份信息"] +n [getChild(0).text="取消"] > @[text="立即领取"][clickable=true]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 4,
          matches: [
            'ImageButton +n [text="已领奖"] + @TextView[clickable=true]',
          ],
        },
      ],
    },
    {
      scopeKeys: [11],
      key: 12,
      name: '热门活动-抽奖',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      actionMaximum: 10,
      activityIds: ['com.ccb.framework.ui.widget.webview.CcbWebViewActivity'],
      rules: [
        {
          preKeys: [1],
          key: 0,
          excludeMatches: [
            'ImageButton +n @[text="立即签到"][clickable=true] + TextView',
            'ImageButton +n [getChild(0).text~="已连续签到[0-9]天"] + @TextView[clickable=true]',
            '[id="app"] >n [getChild(0).text="查看奖励"] + @TextView[clickable=true]',
          ],
          matches: [
            '[id="app"] > View > View > @View[clickable=true] > [desc="骰子按钮"]',
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
    {
      key: 20,
      name: '低碳生活-一键收取',
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text="oneKey"][clickable=true]'],
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
