import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lbe.security.miui',
  name: '权限管理服务',
  groups: [
    {
      key: 0,
      name: '发送通知-拒绝',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'activity',
      rules: [
        {
          matches: ['@[text="拒绝"] <<n * [vid="alertTitle"]'],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
