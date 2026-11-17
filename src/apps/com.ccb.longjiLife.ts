import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ccb.longjiLife',
  name: '建行生活',
  groups: [
    //26.09.16-26.11.22 点亮城市
    {
      key: 0,
      name: '点亮城市-去完成',
      forcedTime: 600000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['com.ccb.cloudmerchant.view.WebViewActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@ImageButton[text="get.9543d188"][clickable=true] <n View < [id="app"] < View < WebView < WebView < [vid="ll_web_layout"]',
          ],
          excludeMatches: [
            '@ImageButton[clickable=true] <n View < View <n [id="app"] < View < WebView < WebView < [vid="ll_web_layout"]',
            '@ImageButton[clickable=true] - View < View - TextView < View <n View < WebView < WebView < [vid="ll_web_layout"]',
            '@ImageButton[text="close.5ac1f7d1"][clickable=true] < AlertDialog <n [id="app"] < View < WebView < WebView < [vid="ll_web_layout"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 1,
          matches: [
            '@ImageButton[clickable=true] - [text="6"] <n View < View <n AlertDialog <n [id="app"] < View < WebView < WebView < [vid="ll_web_layout"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          actionDelay: 11000,
          anyMatches: [
            '@[vid="web_ib_back"][clickable=true] < [vid="web_title"] + [vid="ll_web_layout"]',
            'Image < @View[clickable=true] < View < View < [id="app"] < WebView < WebView < [vid="ll_web_layout"]',
            'TextView[text=""] < @View[clickable=true] < View < [id="app"] < WebView < WebView < [vid="ll_web_layout"]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '点亮城市-×',
      forcedTime: 600000,
      matchRoot: true,
      resetMatch: 'activity',
      activityIds: ['com.ccb.cloudmerchant.view.WebViewActivity'],
      rules: [
        {
          anyMatches: [
            '@ImageButton[clickable=true] <n View < View <n [id="app"] < View < WebView < WebView < [vid="ll_web_layout"]',
            '@ImageButton[clickable=true] - View < View - TextView < View <n View < WebView < WebView < [vid="ll_web_layout"]',
          ],
        },
      ],
    },
    //首页广告类
    {
      key: 51,
      name: '弹窗广告-×',
      forcedTime: 600000,
      matchRoot: true,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@ImageButton[clickable=true] - ImageButton < View <n View < [id="app"] < WebView < WebView < [vid="ll_web_layout"]',
          ],
          activityIds: ['.MainActivity'],
        },
      ],
    },
  ],
});
