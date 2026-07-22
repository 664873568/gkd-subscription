import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.home',
  name: '系统桌面',
  groups: [
    {
      key: 0,
      name: '系统桌面-最近任务-启动应用',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 20000,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          actionDelay: 16000,
          anyMatches: [
            '@[desc^="YY"] >n [desc^="打开"][vid="icon"]',
            '@[desc^="YY语音"] >n [desc^="打开"][vid="icon"]',
            '@[desc^="百度地图"] >n [desc^="打开"][vid="icon"]',
            '@[desc^="百度网盘"] >n [desc^="打开"][vid="icon"]',
            '@[desc^="大众点评"] >n [desc^="打开"][vid="icon"]',
            '@[desc^="飞猪旅行"] >n [desc^="打开"][vid="icon"]',
            '@[desc^="京东金融"] >n [desc^="打开"][vid="icon"]',
            '@[desc^="酷我音乐"] >n [desc^="打开"][vid="icon"]',
            '@[desc^="美团"] >n [desc^="打开"][vid="icon"]',
            '@[desc^="喜马拉雅"] >n [desc^="打开"][vid="icon"]',
            '@[desc^="星图金融"] >n [desc^="打开"][vid="icon"]',
            '@[desc^="一刻相册"] >n [desc^="打开"][vid="icon"]',
            '@[desc^="一淘"] >n [desc^="打开"][vid="icon"]',
            '@[desc^="翼支付"] >n [desc^="打开"][vid="icon"]',
          ],
          activityIds: ['.launcher.Launcher'],
        },
      ],
    },
  ],
});
