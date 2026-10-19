import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.etao',
  name: '一淘',
  groups: [
    //签到领钱
    {
      key: 0,
      name: '签到领钱-签到',
      matchRoot: true,
      forcedTime: 60000,
      resetMatch: 'activity',
      activityIds: [
        'com.taobao.sns.tms.CommonTMSActivity',
        'com.taobao.sns.activity.ISWebViewActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[text="签到"] - View[getChild(2).text="?元"] < @View < View < View <n View < [id="J_u_root"] < View < WebView < [name*="webkit"] < [desc="WVUCWebView"] < RelativeLayout < RelativeLayout < ViewGroup <n [id="android:id/content"]',
          ],
        },
        {
          key: 1,
          name: '恭喜获得-去使用-×',
          matches: [
            '@Image <n View < View <n View < WebView < [name*="webkit"] < [desc="WVUCWebView"] < RelativeLayout < RelativeLayout < ViewGroup <n [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '签到领钱-浏览任务',
      matchRoot: true,
      forcedTime: 60000,
      resetMatch: 'activity',
      activityIds: [
        'com.taobao.sns.tms.CommonTMSActivity',
        'com.taobao.sns.activity.ISWebViewActivity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 2000,
          matches: [
            '[text!~="去中国移动逛逛"] - View[getChild(2).text="最高1元"] < @View <n View <n View < [id="J_u_root"] < View < WebView < [name*="webkit"] < [desc="WVUCWebView"] < RelativeLayout < RelativeLayout < ViewGroup <n [id="android:id/content"]',
          ],
          excludeMatches: [
            '[text!~="去中国移动逛逛"] - [text="领取"] <n View < @View <n View <n View < [id="J_u_root"] < View < WebView < [name*="webkit"] < [desc="WVUCWebView"] < RelativeLayout < RelativeLayout < ViewGroup <n [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          actionDelay: 5000,
          anyMatches: [
            '[vid="tvTitle"] < LinearLayout - @[desc="返回"][clickable=true] < [vid="left_panel"]', //逛大促会场
            '[vid="ly_title_bar_left"] > @[text=""][vid="header_view_left_text_view"][clickable=true]', //超级金币
          ],
        },
        {
          preKeys: [0],
          key: 2,
          action: 'back',
          actionDelay: 5000,
          matches: [
            'WebView < [name*="webkit"] < [desc="WVUCWebView"] < RelativeLayout < RelativeLayout < ViewGroup < [id="android:id/content"]',
          ],
        },
        {
          preKeys: [0],
          key: 3,
          name: '去点淘领红包',
          matches: [
            '[text="下载/打开APP"] < @View[clickable=true] <n View < View <n View < View < [id="ice-container"] < [text="去点淘领红包"] < [name*="webkit"] < [desc="WVUCWebView"] < RelativeLayout - [vid="tms_title_bar"]',
          ],
        },
        {
          preKeys: [0, 3],
          key: 4,
          name: '正在离开一淘，打开',
          matches: [
            '[getChild(0).getChild(1).text="提示"] + [getChild(0).getChild(0).getChild(0).text^="正在离开一淘"] + [vid="buttonPanel"] > LinearLayout > @[text="打开"][clickable=true]',
          ],
        },
        {
          key: 5,
          name: '返回',
          actionDelay: 3000,
          matches: [
            '@[desc="返回"][clickable=true] < [vid="left_panel"] < [vid="tms_title_bar"]',
          ],
        },
        {
          key: 6,
          name: '领取',
          actionDelay: 2000,
          matches: [
            '[text!~="去中国移动逛逛"] - [text="领取"] <n View < @View <n View <n View < [id="J_u_root"] < View < WebView < [name*="webkit"] < [desc="WVUCWebView"] < RelativeLayout < RelativeLayout < ViewGroup <n [id="android:id/content"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '领补贴 得1元现金',
      matchRoot: true,
      forcedTime: 60000,
      resetMatch: 'activity',
      activityIds: [
        'com.taobao.sns.tms.CommonTMSActivity',
        '.detailv2.EtaoTTDetailActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '[desc="立即领取"] - @ImageView[clickable=true] -n [desc="足迹商品补贴"] <n FrameLayout < [vid="dialog_container"]',
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: [
            '[desc="领现金"] < @FrameLayout[clickable=true] -n [desc="领两个商品补贴可得"] <n FrameLayout < [vid="dialog_container"]',
          ],
        },
        {
          preKeys: [1],
          key: 2,
          matches: [
            '[desc="点我立即到账"] < @FrameLayout[clickable=true] -n [desc="领两个商品补贴可得"] <n FrameLayout < [vid="dialog_container"]',
          ],
        },
        {
          preKeys: [2],
          key: 3,
          matches: [
            '@ImageView[clickable=true] -n [desc="现金奖励"] <n LinearLayout <n FrameLayout < [vid="dialog_container"]',
          ],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '更新提示',
      matchRoot: true,
      forcedTime: 60000,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text="取消"] + [text="好,升级"]'],
          activityIds: ['.app.homev4.HomeV4Activity'],
        },
      ],
    },
  ],
});
