import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.permissioncontroller',
  name: '权限控制器',
  groups: [
    {
      key: 39,
      name: '访问照片和视频-允许访问全部-一刻相册',
      matchRoot: true,
      actionMaximum: 1,
      matchTime: 10000,
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '@[text="允许访问全部"][clickable=true] <n [vid="buttonPanel"] -n [vid="topPanel"] > [text="允许“一刻相册”访问照片和视频？"][vid="alertTitle"]',
          ],
          activityIds: ['null'],
        },
      ],
    },
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
