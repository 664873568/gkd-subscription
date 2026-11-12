import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 1,
      name: '玩转中心-天天签到-去抽奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.liteapp.app.UPLiteAppActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[text="签到成功"][clickable=true] <n View <n View < View < View <n View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          key: 1,
          matches: [
            '@[text="去抽奖"][clickable=true] <n View <n View < View < View <n View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          preKeys: [0, 1],
          key: 2,
          matches: [
            '@[text~="剩余 [1-9]次 抽奖机会"][clickable=true] <n View <n View < View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            'Image < @View -n [text="开心收下"] <n View < View <n View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '玩转中心-达标有礼-去抽奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.liteapp.app.UPLiteAppActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[text="去抽奖"][clickable=true] < View <n View < View <n View <n View < View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text~="剩余 [1-9]次 抽奖机会"][clickable=true] <n View <n View < View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            'Image < @View -n [text="去查看"] <n View < View <n View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '玩转中心-达标有礼-领奖',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.liteapp.app.UPLiteAppActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[text="领奖"][clickable=true] < View <n View < View <n View <n View < View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'Image < @View -n [text="去查看"] <n View < View <n View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '玩转中心-本地有礼-领取',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.liteapp.app.UPLiteAppActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            'Image[text="6062245d-3f87-4381-abbb-d3a9773c2d24"] < @View < View <n View <n View <n View < View <n View <n View < View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'Image < @View -n [text="开心收下"] <n View < View <n View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '玩转中心-本地有礼-可领取',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.liteapp.app.UPLiteAppActivity'],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '@[text="可领取"][clickable=true] < View <n View < View <n View <n View < View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            'Image < @View -n [text="开心收下"] <n View < View <n View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '用户隐私授权提示-同意',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['.liteapp.app.UPLiteAppActivity'],
      rules: [
        {
          matches: [
            '[text="用户隐私授权提示"][vid="tv_dialog_title"] < [vid="view_dialog_title_container"] +n [vid="view_dialog_btn_container"] > [text="拒绝"][vid="btn_cancel"] + @[text="同意"][vid="btn_ok"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 41,
      name: '实名信息变更-确定-同意',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.liteapp.app.UPLiteAppActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@[text="确定"][clickable=true] <n AlertDialog <n [id="root-router-view"] < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '@[text="同意"][vid="applet_scope_agree"][clickable=true] <n LinearLayout <n [vid="scope_parent"] < [vid="root_view"]',
          ],
        },
      ],
    },
    //首页广告类
    {
      key: 51,
      name: 'U惠湖北-×',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['.liteapp.app.UPLiteAppActivity'],
      rules: [
        {
          matches: [
            '@[name*="Image"] < View < View - View < View < View < View <n [id="app"] < WebView < WebView < [vid="view_content_container"]',
          ],
        },
      ],
    },
  ],
});
