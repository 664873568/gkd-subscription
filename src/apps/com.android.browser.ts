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
          matches: [
            '@[text="允许"][clickable=true] - [text="拒绝"] < [vid="buttonPanel"] - * [text~=".*QQ阅读|.*阿里巴巴|.*飞猪旅行|.*快影|.*芒果TV|.*闲鱼|.*携程旅行|.*星图金融|.*一刻相册|.*一淘"][vid="message"]',
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
    {
      key: 2,
      name: '下载汽车之家App',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: ['[text="YY语音"] >n @TextView[clickable=true]'],
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
    {
      key: 41,
      name: '读取或写入剪切板-拒绝',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '[text="读取或写入剪切板"][vid="title"] +n * > @[text="拒绝"][vid="left_button"] + [vid="right_button"][text="允许"]',
          ],
          activityIds: ['.BrowserActivity'],
        },
      ],
    },
  ],
});
