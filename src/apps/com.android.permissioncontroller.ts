import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.permissioncontroller',
  name: '权限控制器',
  groups: [
    //功能应用类
    {
      key: 40,
      name: '发送通知-拒绝',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] -n [vid="topPanel"] > [text*="发送通知"][vid="alertTitle"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
    {
      key: 41,
      name: '获取位置信息-拒绝',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="拒绝"][clickable=true] <n [vid="buttonPanel"] -n [vid="topPanel"] > [text*="获取位置信息"][vid="alertTitle"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
  ],
});
