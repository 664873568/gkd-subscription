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
          matches: [
            '@ImageButton[text="get.9543d188"][clickable=true] <n View < [id="app"] < View < WebView < WebView < [vid="ll_web_layout"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@ImageButton[clickable=true] -2 [text="浏览时长大于10秒。"] <n View < View <n AlertDialog <n [id="app"] < View < WebView < WebView < [vid="ll_web_layout"]',
          ],
        },
        {
          preKeys: [1, 2],
          key: 2,
          actionDelay: 11000,
          matches: [
            'Image < @View[clickable=true] < View < View < [id="app"] < WebView < WebView < [vid="ll_web_layout"]',
          ],
        },
      ],
    },
  ],
});
