import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 1,
      name: '玩转中心',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      resetMatch: 'activity',
      activityIds: ['.liteapp.app.UPLiteAppActivity'],
      rules: [
        {
          key: 0,
          name: '天天签到-签到成功',
          actionDelay: 2000,
          matches: [
            '@[text="签到成功"][clickable=true] <n View <n View < View < View <n View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          key: 1,
          name: '天天签到/达标有礼-去抽奖',
          anyMatches: [
            '@[text="去抽奖"][clickable=true] <n View <n View < View < View <n View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
            '@[text="去抽奖"][clickable=true] < View <n View < View <n View <n View < View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
          ],
          excludeMatches: [
            'Image[index=parent.childCount.minus(1)] < @View <n View < View <n View < WebView < WebView < [vid="view_content_container"]',
            '@[text="领奖"][clickable=true] < View <n View < View <n View <n View < View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
            'Image[index=parent.childCount.minus(1)] < @View < View <n View <n View <n View < View <n View <n View < View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
            '@[text="可领取"][clickable=true] < View <n View < View <n View <n View < View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          key: 2,
          actionDelay: 2000,
          name: '天天签到/达标有礼-点击抽奖',
          matches: [
            '@[text~="剩余 [1-9]次 抽奖机会"][clickable=true] <n View <n View < View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          name: '弹窗-×',
          actionDelay: 1000,
          matches: [
            'Image[index=parent.childCount.minus(1)] < @View <n View < View <n View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          preKeys: [3],
          key: 4,
          name: '返回-<',
          matches: [
            '@[desc="返回"][clickable=true] < [vid="view_title_left"] <n [vid="rootView"] < [id="android:id/content"]',
          ],
          excludeMatches: [
            '@[text~="剩余 [1-9]次 抽奖机会"][clickable=true] <n View <n View < View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
            'Image[index=parent.childCount.minus(1)] < @View <n View < View <n View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          key: 5,
          name: '达标有礼-领奖',
          actionDelay: 2000,
          matches: [
            '@[text="领奖"][clickable=true] < View <n View < View <n View <n View < View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
          ],
          excludeMatches: [
            '@[text="签到成功"][clickable=true] <n View <n View < View < View <n View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
            'Image[index=parent.childCount.minus(1)] < @View <n View < View <n View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          key: 6,
          name: '本地有礼-领取',
          actionDelay: 2000,
          matches: [
            'Image[index=parent.childCount.minus(1)] < @View < View <n View <n View <n View < View <n View <n View < View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
          ],
          excludeMatches: [
            '@[text="签到成功"][clickable=true] <n View <n View < View < View <n View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
            'Image[index=parent.childCount.minus(1)] < @View <n View < View <n View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          key: 7,
          name: '本地有礼-可领取',
          actionDelay: 2000,
          matches: [
            '@[text="可领取"][clickable=true] < View <n View < View <n View <n View < View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
          ],
          excludeMatches: [
            '@[text="签到成功"][clickable=true] <n View <n View < View < View <n View < [id="app"] < View < WebView < WebView < [vid="view_content_container"]',
            'Image[index=parent.childCount.minus(1)] < @View <n View < View <n View < WebView < WebView < [vid="view_content_container"]',
          ],
        },
        {
          preKeys: [5, 6, 7],
          key: 8,
          name: '弹窗-××',
          actionDelay: 1000,
          matches: [
            'Image[index=parent.childCount.minus(1)] < @View <n View < View <n View < WebView < WebView < [vid="view_content_container"]',
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
      name: '弹窗广告-×',
      forcedTime: 60000,
      matchRoot: true,
      matchTime: 10000,
      resetMatch: 'activity',
      activityIds: ['.liteapp.app.UPLiteAppActivity'],
      rules: [
        {
          matches: [
            '@[name*="Image"][width<150] < View < View <n View < View < View <n [id="app"] < WebView < WebView < [vid="view_content_container"]',
          ],
        },
      ],
    },
  ],
});
