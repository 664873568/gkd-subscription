import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.baidu.searchbox',
  name: '百度',
  groups: [
    {
      key: 0,
      name: '提现中心-去提现-最大金额',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 60000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.browser.search.LightSearchActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="去提现"][clickable=true] <n View <n View <n View < [id="page"] < [id="app"] < [text="提现中心"]',
          ],
          excludeMatches: [
            '@TextView[clickable=true] <n View < View < View <n [id="page"] < [id="app"] < [text="提现中心"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="请选择提现档位"] - @TextView[clickable=true] <n View < View < View < View <n [id="page"] < [id="app"] < [text="提现中心"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '@[text="确认提现"][clickable=true] - TextView <n View < View < View < View <n [id="page"] < [id="app"] < [text="提现中心"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@[text="立即提现"][clickable=true] - TextView <n View < View < View < View <n [id="page"] < [id="app"] < [text="提现中心"]',
          ],
        },
      ],
    },
    //天天赚
    {
      key: 1,
      name: '天天赚-免费红包',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: [
        '.lightbrowser.ImmerseBrowserActivity',
        '.lightbrowser.ImmerseBrowserSingleTaskActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[getChild(0).text="订阅金币通知"] + @TextView[clickable=true]',
          ],
        },
        {
          key: 1,
          matches: [
            '[getChild(1).text="恭喜获得"] + @TextView[clickable=true]',
          ],
        },
        {
          key: 2,
          matches: [
            '[getChild(0).text="打卡白拿20元"] + @TextView[clickable=true]',
          ],
        },
        {
          key: 3,
          matches: [
            '[text="添加赚钱助手 提醒您每日赚金币"] - @TextView[clickable=true]',
          ],
        },
        {
          key: 4,
          matches: [
            '[text="天天领现金"] +n [text="去添加"] + @TextView[clickable=true]',
          ],
        },
        {
          key: 5,
          matches: [
            'View > TextView + View > @TextView[clickable=true] - View > TextView[clickable=true]',
          ],
        },
      ],
    },
    //搜有红包
    {
      key: 37,
      name: '搜有红包-×',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: [
            '[text="去完成领金币"] <n View - [getChild(0).text="送你大量金币"] < View < View - @TextView[clickable=true]',
          ],
          activityIds: ['com.baidu.browser.search.LightSearchActivity'],
        },
      ],
    },
    {
      key: 38,
      name: '搜有红包',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.baidu.browser.search.LightSearchActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '[text="立即领取"] < @View[clickable=true] <n View < View < View - TextView[clickable=true]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[text="去看视频"] < View < View[clickable=true] <n View <n View - @TextView[clickable=true]',
          ],
        },
        {
          key: 2,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.735',
          },
          actionDelay: 10000,
          matches: [
            'View - [id="page"] - [id="page-hd"] < View < [text="搜有红包 - 百度"]',
          ],
          excludeMatches: [
            '[text="立即领取"] < @View[clickable=true] <n View < View < View - TextView[clickable=true]',
            '[text="去看视频"] < View < View[clickable=true] <n View <n View - @TextView[clickable=true]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          position: {
            left: 'width * 0.5',
            top: 'height * 0.735',
          },
          actionDelay: 5000,
          matches: [
            'View - [id="page"] - [id="page-hd"] < View < [text="搜有红包 - 百度"]',
          ],
          excludeMatches: [
            '[text="立即领取"] < @View[clickable=true] <n View < View < View - TextView[clickable=true]',
            '[text="去看视频"] < View < View[clickable=true] <n View <n View - @TextView[clickable=true]',
          ],
        },
      ],
    },
    {
      key: 39,
      name: '明星列表-完成并进入',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['[text="明星列表"] >n @[text="完成并进入送花页面"]'],
          activityIds: ['com.baidu.browser.search.LightSearchActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '发送通知-不允许',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="“百度APP”想给你发送通知"] +n @[text="不允许"][clickable=true]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
    {
      key: 41,
      name: '升级-关闭',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[desc="关闭"][clickable=true] - * [text="升级"] >n [text="下载并安装"]',
          ],
          activityIds: ['.update.UpdateDialogActivity'],
        },
      ],
    },
    //首页广告类
    {
      key: 50,
      name: '首页广告-跳过',
      forcedTime: 60000,
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@RelativeLayout[clickable=true] > LinearLayout > [text="跳过"] + [text~="0[0-9]"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
  ],
});
