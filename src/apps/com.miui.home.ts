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
          actionDelay: 16000,
          anyMatches: [
            '@[text="YY"] <<n * [desc$="清理全部任务"]',
            '@[text="YY语音"] <<n * [desc$="清理全部任务"]',
            '@[text="百度地图"] <<n * [desc$="清理全部任务"]',
            '@[text="百度网盘"] <<n * [desc$="清理全部任务"]',
            '@[text="大众点评"] <<n * [desc$="清理全部任务"]',
            '@[text="飞猪旅行"] <<n * [desc$="清理全部任务"]',
            '@[text="京东金融"] <<n * [desc$="清理全部任务"]',
            '@[text="酷我音乐"] <<n * [desc$="清理全部任务"]',
            '@[text="美团"] <<n * [desc$="清理全部任务"]',
            '@[text="喜马拉雅"] <<n * [desc$="清理全部任务"]',
            '@[text="星图金融"] <<n * [desc$="清理全部任务"]',
            '@[text="一刻相册"] <<n * [desc$="清理全部任务"]',
            '@[text="一淘"] <<n * [desc$="清理全部任务"]',
            '@[text="翼支付"] <<n * [desc$="清理全部任务"]',
          ],
          activityIds: ['.launcher.Launcher'],
        },
      ],
    },
  ],
});
