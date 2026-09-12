import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.home',
  name: '系统桌面',
  groups: [
    {
      key: 0,
      name: '系统桌面-最近任务-启动应用',
      matchRoot: true,
      matchDelay: 15000,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          anyMatches: [
            '@[desc^="YY"][clickable=true] >n [vid="icon"]',
            '@[desc^="YY语音"][clickable=true] >n [vid="icon"]',
            '@[desc^="百度地图"][clickable=true] >n [vid="icon"]',
            '@[desc^="百度网盘"][clickable=true] >n [vid="icon"]',
            '@[desc^="大众点评"][clickable=true] >n [vid="icon"]',
            '@[desc^="飞猪旅行"][clickable=true] >n [vid="icon"]',
            '@[desc^="哈啰"][clickable=true] >n [vid="icon"]',
            '@[desc^="京东金融"][clickable=true] >n [vid="icon"]',
            '@[desc^="酷我音乐"][clickable=true] >n [vid="icon"]',
            '@[desc^="美团"][clickable=true] >n [vid="icon"]',
            '@[desc^="喜马拉雅"][clickable=true] >n [vid="icon"]',
            '@[desc^="星图金融"][clickable=true] >n [vid="icon"]',
            '@[desc^="一刻相册"][clickable=true] >n [vid="icon"]',
            '@[desc^="一淘"][clickable=true] >n [vid="icon"]',
            '@[desc^="翼支付"][clickable=true] >n [vid="icon"]',
          ],
          activityIds: ['.launcher.Launcher'],
        },
      ],
    },
  ],
});
