import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '安全服务',
  groups: [
    {
      key: 0,
      name: '启动应用',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          action: 'back',
          actionDelay: 15000,
          matches: ['@[text="启动应用"] + [text$="是否允许？"]'],
          snapshotUrls: ['https://i.gkd.li/i/23494155'],
          activityIds: ['com.miui.wakepath.ui.ConfirmStartActivity'],
        },
      ],
    },
  ],
});
