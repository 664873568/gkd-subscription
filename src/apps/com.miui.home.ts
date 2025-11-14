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
          action: 'click',
          actionDelay: 15000,
          anyMatches: [
            '@[desc^="飞猪旅行"] <<n * + * >n [desc="清理全部任务"]',
            '@[desc^="一刻相册"] <<n * + * >n [desc="清理全部任务"]',
            '@[desc^="翼支付"] <<n * + * >n [desc="清理全部任务"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23493031',
            'https://i.gkd.li/i/23494550',
            'https://i.gkd.li/i/23496279',
          ],
          activityIds: ['.launcher.Launcher'],
        },
      ],
    },
  ],
});
