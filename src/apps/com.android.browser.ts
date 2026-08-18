import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.browser',
  name: '浏览器',
  groups: [
    {
      key: 0,
      name: '当前网站请求打开',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          anyMatches: [
            '@[text="允许"][clickable=true] - [text="拒绝"] < [vid="buttonPanel"] - * [text$="QQ阅读"][vid="message"]',
            '@[text="允许"][clickable=true] - [text="拒绝"] < [vid="buttonPanel"] - * [text$="阿里巴巴"][vid="message"]',
            '@[text="允许"][clickable=true] - [text="拒绝"] < [vid="buttonPanel"] - * [text$="飞猪旅行"][vid="message"]',
            '@[text="允许"][clickable=true] - [text="拒绝"] < [vid="buttonPanel"] - * [text$="快影"][vid="message"]',
            '@[text="允许"][clickable=true] - [text="拒绝"] < [vid="buttonPanel"] - * [text$="芒果TV"][vid="message"]',
            '@[text="允许"][clickable=true] - [text="拒绝"] < [vid="buttonPanel"] - * [text$="闲鱼"][vid="message"]',
            '@[text="允许"][clickable=true] - [text="拒绝"] < [vid="buttonPanel"] - * [text$="携程旅行"][vid="message"]',
            '@[text="允许"][clickable=true] - [text="拒绝"] < [vid="buttonPanel"] - * [text$="一淘"][vid="message"]',
          ],
          activityIds: ['.BrowserActivity'],
        },
      ],
    },
    {
      key: 1,
      name: '快影APP下载',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="快影APP下载-快手官方视频剪辑神器"] >n @View[clickable=true] > [text="立即下载App"]',
          ],
          activityIds: ['.BrowserActivity'],
        },
      ],
    },
    //功能应用类
    {
      key: 40,
      name: '添加小部件-取消',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="立即添加"] - @[text="取消"][clickable=true] < [vid="buttonPanel"] - * [text="添加“全网热榜”小部件"][vid="tv_widget_dialog_title"]',
          ],
          activityIds: ['.BrowserActivity'],
        },
      ],
    },
  ],
});
