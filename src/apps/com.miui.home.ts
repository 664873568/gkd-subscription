import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.home',
  name: '系统桌面',
  groups: [
    {
      key: 1,
      name: '系统桌面-最近任务-启动应用',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'click',
          actionDelay: 1000,
          matches: [
            '@*[text!="启动应用"] - *[desc*="未加锁"]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23493031',
          ],
          activityIds: [
            '.launcher.Launcher',
          ],
        },
      ],
    },
  ],
});
