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
      resetMatch: 'activity',
      rules: [
        {
          actionDelay: 16000,
          anyMatches: [
            '@[desc^="百度网盘,已加锁"] <<n * [desc$="清理全部任务"]',
            '@[desc^="飞猪旅行,已加锁"] <<n * [desc$="清理全部任务"]',
            '@[desc^="酷我音乐,已加锁"] <<n * [desc$="清理全部任务"]',
            '@[desc^="喜马拉雅,已加锁"] <<n * [desc$="清理全部任务"]',
            '@[desc^="一刻相册,已加锁"] <<n * [desc$="清理全部任务"]',
            '@[desc^="翼支付,已加锁"] <<n * [desc$="清理全部任务"]',
          ],
          activityIds: ['.launcher.Launcher'],
        },
      ],
    },
  ],
});
