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
          matches: [
            '[vid="topPanel"][getChild(1).vid="alertTitle"] +n [vid="buttonPanel"] > [text^="拒绝"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
