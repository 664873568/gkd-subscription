import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.home',
  name: '系统桌面',
  groups: [
    {
      key: 0,
      name: 'clearAnimView-进入任务',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          actionDelay: 16000,
          anyMatches: [
            '@[desc~="YY.*|YY语音.*|百度地图.*|百度网盘.*|大众点评.*|飞猪旅行.*|哈啰.*|京东金融.*|酷我音乐.*|美团.*|喜马拉雅.*|星图金融.*|一刻相册.*|一淘.*|翼支付.*|支付宝.*"][clickable=true] <n ScrollView < FrameLayout + * [desc="清理全部任务"][vid="clearAnimView"]',
            '@[desc~="YY.*|YY语音.*|百度地图.*|百度网盘.*|大众点评.*|飞猪旅行.*|哈啰.*|京东金融.*|酷我音乐.*|美团.*|喜马拉雅.*|星图金融.*|一刻相册.*|一淘.*|翼支付.*|支付宝.*"][clickable=true] <n [name$="View"] < View < View < View + [desc="清理任务"][vid="clearAnimView"]',
          ],
          activityIds: ['.launcher.Launcher'],
        },
      ],
    },
    {
      key: 1,
      name: 'clearAnimView-清理应用',
      forcedTime: 60000,
      matchRoot: true,
      matchDelay: 1000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          swipeArg: {
            start: {
              left: 'width * 0.5',
              top: 'height * 0.75',
            },
            end: {
              left: 'width * 0.5',
              top: 'height * 0.25',
            },
            duration: 500,
          },
          anyMatches: [
            '@[desc*="应用"][clickable=true] <n ScrollView < FrameLayout + * [desc="清理全部任务"][vid="clearAnimView"]',
            '@[desc*="应用"][clickable=true] <n [name$="View"] < View < View < View + [desc="清理任务"][vid="clearAnimView"]',
          ],
          activityIds: ['.launcher.Launcher'],
        },
      ],
    },
  ],
});
